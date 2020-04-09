import repository from './repository'

const resource = "/archive/v1";

export default {
    getArchive(payload) {
        return repository.get(`${resource}/${payload.year}/${payload.month}`);
    },
}