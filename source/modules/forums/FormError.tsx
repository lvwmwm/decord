// Module ID: 9551
// Function ID: 74454
// Name: formSubmitError
// Dependencies: [1212, 7109, 2]
// Exports: makeApiNameValidationError, makeAutomodViolationError, makeEmptyMessageError, makeEmptyTagsError, makeEmptyTitleError, renderError

// Module 9551 (formSubmitError)
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
let obj = { EmptyContent: 0, [0]: "EmptyContent", AutomodViolation: 1, [1]: "AutomodViolation", EmptyTags: 2, [2]: "EmptyTags", ApiValidation: 3, [3]: "ApiValidation" };
const result = require("set").fileFinishedImporting("modules/forums/FormError.tsx");

export const FormSubmitErrorType = obj;
export const makeEmptyTitleError = function makeEmptyTitleError() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return makeEmptyContentError(intl.string(require(1212) /* getSystemLocale */.t["71wuR0"]));
};
export const makeEmptyMessageError = function makeEmptyMessageError() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return makeEmptyContentError(intl.string(require(1212) /* getSystemLocale */.t["w/BT3G"]));
};
export const makeAutomodViolationError = function makeAutomodViolationError(errorResponseBody, id) {
  const obj = require(7109) /* _callSuper */;
  id = undefined;
  if (null != id) {
    id = id.id;
  }
  return formSubmitError(obj.AutomodViolation, obj.getAutomodErrorMessageFromErrorResponse(errorResponseBody, id));
};
export const makeApiNameValidationError = function makeApiNameValidationError() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return formSubmitError(obj.ApiValidation, intl.string(require(1212) /* getSystemLocale */.t["71wuR0"]));
};
export const makeEmptyTagsError = function makeEmptyTagsError() {
  const intl = require(1212) /* getSystemLocale */.intl;
  return formSubmitError(obj.EmptyTags, intl.string(require(1212) /* getSystemLocale */.t.xPfNQi));
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
    if (type.type === obj.EmptyTags) {
      if (null != content.tags) {
        tmp = null;
      }
    }
    const message = type.message;
    let tmp4 = null;
    if (null != message) {
      tmp4 = message;
    }
    tmp = tmp4;
  }
  return tmp;
};
