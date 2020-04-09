import { repositoryFactory } from "../../repository/repositoryFactory";
const postRepository = repositoryFactory.get("archive");

const state = {
  docs: null
};

const getters = {
  featuredNews: state => {
    return state.docs;
  },
  latestNews: state => {
    return state.docs;
  }
};

const mutations = {
  updateDocs: (state, docs) => {
    console.log(docs[0]);
    state.docs = docs;
  }
};

const actions = {
  async getArchive(context, payload) {
    let { data, status } = await postRepository.getArchive(payload);
    if (status == 200) {
     context.commit("updateDocs", data.response.docs);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
