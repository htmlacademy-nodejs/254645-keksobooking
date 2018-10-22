'use strict';

const AbstractError = require(`./abstract-error`);
const {StatusCode} = require(`../status-code`);

const ValidationError = class extends AbstractError {
  constructor(errors) {
    super(`Ошибка валидации данных`);
    this.statusCode = StatusCode.BAD_REQUEST;
    this.errors = errors;
  }
};

module.exports = ValidationError;
