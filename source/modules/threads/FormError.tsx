// Module ID: 15190
// Function ID: 114579
// Name: formSubmitError
// Dependencies: []
// Exports: makeApiNameRequiredError, makeAutomodViolationError, makeEmptyMessageError, makeEmptyTitleError, renderError

// Module 15190 (formSubmitError)
function formSubmitError(type) {
  const obj = { type };
  let tmp = null;
  if (null != arg1) {
    tmp = arg1;
  }
  obj.message = tmp;
  return obj;
}
function makeEmptyContentError(arg0) {
  return formSubmitError(obj.EmptyContent, arg0);
}
const obj = { EmptyContent: 0, [0]: "EmptyContent", AutomodViolation: 1, [1]: "AutomodViolation", ApiValidation: 2, [2]: "ApiValidation" };
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/threads/FormError.tsx");

export const FormSubmitErrorType = obj;
export const makeEmptyTitleError = function makeEmptyTitleError() {
  const intl = require(dependencyMap[0]).intl;
  return makeEmptyContentError(intl.string(require(dependencyMap[0]).t.uXA573));
};
export const makeEmptyMessageError = function makeEmptyMessageError() {
  const intl = require(dependencyMap[0]).intl;
  return makeEmptyContentError(intl.string(require(dependencyMap[0]).t.kesTVT));
};
export const makeApiNameRequiredError = function makeApiNameRequiredError() {
  const intl = require(dependencyMap[0]).intl;
  return formSubmitError(obj.ApiValidation, intl.string(require(dependencyMap[0]).t.uXA573));
};
export const makeAutomodViolationError = function makeAutomodViolationError(errorResponseBody, id) {
  const obj = require(dependencyMap[1]);
  id = undefined;
  if (null != id) {
    id = id.id;
  }
  return formSubmitError(obj.AutomodViolation, obj.getAutomodErrorMessageFromErrorResponse(errorResponseBody, id));
};
export const renderError = function renderError(type, content) {
  let tmp = null;
  if (null != type) {
    if (type.type === obj.EmptyContent) {
      if (null != content.content) {
        tmp = null;
        const str = content.content;
      }
    }
    const message = type.message;
    let tmp3 = null;
    if (null != message) {
      tmp3 = message;
    }
    tmp = tmp3;
  }
  return tmp;
};
