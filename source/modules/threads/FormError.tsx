// Module ID: 15314
// Function ID: 116792
// Name: formSubmitError
// Dependencies: [1212, 7109, 2]
// Exports: makeApiNameRequiredError, makeAutomodViolationError, makeEmptyMessageError, makeEmptyTitleError, renderError

// Module 15314 (formSubmitError)
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
let obj = { EmptyContent: 0, [0]: "EmptyContent", AutomodViolation: 1, [1]: "AutomodViolation", ApiValidation: 2, [2]: "ApiValidation" };
const result = require("set").fileFinishedImporting("modules/threads/FormError.tsx");

export const FormSubmitErrorType = obj;
export const makeEmptyTitleError = function makeEmptyTitleError() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return makeEmptyContentError(intl.string(require(1212) /* getSystemLocale */.t.uXA573));
};
export const makeEmptyMessageError = function makeEmptyMessageError() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return makeEmptyContentError(intl.string(require(1212) /* getSystemLocale */.t.kesTVT));
};
export const makeApiNameRequiredError = function makeApiNameRequiredError() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return formSubmitError(obj.ApiValidation, intl.string(require(1212) /* getSystemLocale */.t.uXA573));
};
export const makeAutomodViolationError = function makeAutomodViolationError(errorResponseBody, id) {
  const obj = require(7109) /* _callSuper */;
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
