// Module ID: 9193
// Function ID: 72005
// Name: getAuthenticationErrorsFromAPIError
// Dependencies: []
// Exports: getAuthenticationErrorsFromAPIError, getAuthenticationErrorsFromV6OrEarlierAPIError

// Module 9193 (getAuthenticationErrorsFromAPIError)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/auth/getAuthenticationErrorsFromAPIError.tsx");

export const getAuthenticationErrorsFromAPIError = function getAuthenticationErrorsFromAPIError(error) {
  let length;
  const obj = { error_code: error.code };
  if (null != error.errors) {
    const _Object = Object;
    const keys = Object.keys(error.errors);
    let num = 0;
    if (0 < keys.length) {
      do {
        let tmp2 = keys[num];
        let items = [error.getFirstFieldErrorMessage(tmp2)];
        obj[tmp2] = items;
        num = num + 1;
        length = keys.length;
      } while (num < length);
    }
    return obj;
  } else {
    obj.message = error.message;
    if (null != error.retryAfter) {
      obj.retry_after = error.retryAfter;
    }
    return obj;
  }
};
export const getAuthenticationErrorsFromV6OrEarlierAPIError = function getAuthenticationErrorsFromV6OrEarlierAPIError(error) {
  if (Object.keys(error.fields).length > 0) {
    return error.fields;
  } else {
    const obj = { message: error.message };
    if (null != error.retryAfter) {
      obj.retry_after = error.retryAfter;
    }
    return obj;
  }
};
