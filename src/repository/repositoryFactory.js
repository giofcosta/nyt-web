import archiveRepository from './archiveRepository'

const repositories = {
    archive: archiveRepository
}

export const repositoryFactory = {
    get: name => repositories[name]
}