'use strict';

const AbstractError = require(`./abstract-error`);
const {StatusCode} = require(`../status-code`);

class NotFoundError extends AbstractError {
  constructor(errorMessage) {
    super(errorMessage);
    this.statusCode = StatusCode.NOT_FOUND;
    this.errors = [
      {
        error: `Данных не найдено`,
        errorMessage,
      }
    ];
  }
}

module.exports = NotFoundError;
