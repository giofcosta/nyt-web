import { repositoryFactory } from "../../repository/repositoryFactory";
const postRepository = repositoryFactory.get("archive");

const state = {
  docs: null,
  search: "",
};

const getters = {
  featuredNews: (state) => {
    if(state.docs)
    {
      return state.docs.filter((doc) => {
        return (
          doc.print_section == "A" &&
          (doc.abstract.toLowerCase().includes(state.search.toLowerCase()) ||
          doc.lead_paragraph.toLowerCase().includes(state.search.toLowerCase())) 
        );
      });
    }

    return [];
  },
  latestNews: (state) => {
    if(state.docs)
    {
      return state.docs.filter((doc) => {
        return (
          doc.print_section != "A" &&
          doc.abstract.toLowerCase().includes(state.search.toLowerCase()) ||
          doc.lead_paragraph.toLowerCase().includes(state.search.toLowerCase())
        );
      });
    }

    return [];
  },
};

const mutations = {
  updateDocs: (state, docs) => {
    state.docs = docs;
  },
  updateSearch: (state, term) => {
    state.search = term;
  }
};

const actions = {
  async getArchive(context, payload) {
    let { data, status } = await postRepository.getArchive(payload);
    if (status == 200) {
      context.commit("updateDocs", data.response.docs);
    }
  },
  addSearch(context, payload) {
    context.commit("updateSearch", payload.term);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
