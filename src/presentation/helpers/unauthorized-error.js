module.exports = class UnauthorizedError extends Error {
  constructor () {
    super('Unauthorized credentials are provided')
    this.name = 'UnauthorizedError'
  }
}
