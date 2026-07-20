// Module ID: 562
// Function ID: 6794
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 562 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function convertStringArrayToSkemaErrorItems(arr) {
  return arr.map((message) => ({ code: "UNKNOWN", message }));
}
function convertOldFormError(arg0) {
  let tmp3;
  let tmp4;
  let obj = {};
  const entries = Object.entries(arg0);
  for (let num = 0; num < entries.length; num = num + 1) {
    let tmp = callback3;
    let tmp2 = callback3(entries[num], 2);
    [tmp3, tmp4] = tmp2;
    if ("_misc" !== tmp3) {
      obj = {};
      let tmp6 = convertStringArrayToSkemaErrorItems;
      obj._errors = convertStringArrayToSkemaErrorItems(tmp4);
      obj[tmp3] = obj;
    } else {
      let tmp5 = convertStringArrayToSkemaErrorItems;
      obj._errors = convertStringArrayToSkemaErrorItems(tmp4);
    }
  }
  return obj;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[6]);
const importDefaultResult = importDefault(dependencyMap[5]);
const tmp3 = (arg0) => {
  class APIError {
    constructor(arg0, arg1) {
      str = arg2;
      self = this;
      if (arg2 === undefined) {
        str = "An unexpected error occurred.";
      }
      tmp = APIError;
      tmp2 = APIError(self, APIError);
      if ("string" === typeof arg0) {
        obj = {};
        obj.message = arg0;
        tmp6 = arg1;
        obj.code = arg1;
      } else {
        tmp12 = null;
        if (null == arg0.body) {
          obj1 = {};
          obj1.status = arg0.status;
          obj = obj1;
        } else {
          captcha_key = arg0.body;
          if (null != arg0.body.message) {
            tmp13 = globalThis;
            _Array2 = Array;
            if (!Array.isArray(arg0.body.message)) {
              if (null != arg0.body.code) {
                _Array = Array;
              }
              obj = {};
              ({ message: obj.message, code: obj.code, retry_after: obj.retryAfter, errors: obj.errors } = captcha_key);
              obj.status = arg0.status;
            }
          }
          if (null == captcha_key) {
            obj2 = {};
            obj2.status = arg0.status;
            num = 50035;
            obj2.code = 50035;
            tmp3 = closure_8;
            obj2.errors = closure_8(captcha_key);
            tmp5 = obj2;
          } else {
            str2 = "captcha_key";
          }
          obj3 = {};
          num2 = -1;
          obj3.code = -1;
          obj3.captchaFields = captcha_key;
          obj3.status = arg0.status;
          num3 = 0;
          first = undefined;
          if (captcha_key.captcha_key.length > 0) {
            captcha_key = captcha_key.captcha_key;
            first = captcha_key[0];
          }
          obj3.message = first;
          obj2 = obj3;
        }
      }
      ({ message, code, captchaFields } = obj);
      ({ retryAfter, errors, status } = obj);
      if (null != message) {
        str = message;
      }
      items = [];
      items[0] = str;
      obj6 = closure_3(tmp);
      tmp7 = closure_2;
      if (closure_6()) {
        tmp9 = globalThis;
        _Reflect = Reflect;
        tmp10 = closure_3;
        constructResult = Reflect.construct(obj6, items, closure_3(self).constructor);
      } else {
        constructResult = obj6.apply(self, items);
      }
      tmp7Result = tmp7(self, constructResult);
      num4 = -1;
      if (null != code) {
        num4 = code;
      }
      tmp7Result.code = num4;
      tmp7Result.retryAfter = retryAfter;
      tmp7Result.errors = errors;
      tmp7Result.status = status;
      if (null == captchaFields) {
        captchaFields = {};
      }
      tmp7Result.captchaFields = captchaFields;
      tmp7Result.cause = arg0;
      return tmp7Result;
    }
  }
  let closure_0 = APIError;
  callback2(APIError, arg0);
  let obj = {
    key: "hasFieldErrors",
    value() {
      let tmp2 = null != this.errors;
      if (tmp2) {
        const _Object = Object;
        tmp2 = Object.keys(tmp.errors).length > 0;
      }
      return tmp2;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getFieldErrors",
    value(arg0) {
      let arr = arg0;
      if ("string" === typeof arg0) {
        const items = [arg0];
        arr = items;
      }
      const errors = this.errors;
      let tmp = errors;
      if (arr.length > 0) {
        let tmp3 = errors;
        tmp = errors;
        if (null != errors) {
          const spliceResult = arr.splice(1);
          tmp = tmp4;
          while (spliceResult.length > 0) {
            arr = spliceResult;
            tmp3 = tmp4;
            tmp = tmp4;
            if (null == tmp4) {
              break;
            }
          }
        }
      }
      let _errors;
      if (null != tmp) {
        _errors = tmp._errors;
      }
      return _errors;
    }
  };
  items[1] = obj;
  obj = {
    key: "getAllFieldErrors",
    value() {
      return this.getAllFieldErrorsUnder(this.errors);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getAllFieldErrorsUnder",
    value(_errors) {
      const APIError = this;
      const obj = {};
      _errors = undefined;
      if (null != _errors) {
        _errors = _errors._errors;
      }
      let tmp2 = null != _errors;
      if (tmp2) {
        tmp2 = _errors.length > 0;
      }
      if (tmp2) {
        obj.__root_errors = _errors;
      }
      if (undefined !== _errors) {
        const _Object = Object;
        const entries = Object.entries(_errors);
        const item = entries.forEach((arg0) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = arg0;
          if ("_errors" !== tmp) {
            const _Object = Object;
            const entries = Object.entries(self.getAllFieldErrorsUnder(tmp2));
            const item = entries.forEach((arg0) => {
              let tmp;
              let tmp2;
              [tmp, tmp2] = arg0;
              if (tmp === "__root_errors") {
                closure_1[closure_0] = tmp2;
              } else {
                const _HermesInternal = HermesInternal;
                closure_1["" + closure_0 + "." + tmp] = tmp2;
              }
            });
          }
        });
      }
      return obj;
    }
  };
  items[4] = {
    key: "getFirstFieldErrorMessage",
    value(arg0) {
      const fieldErrors = this.getFieldErrors(arg0);
      let message = null;
      if (null != fieldErrors) {
        message = null;
        if (fieldErrors.length >= 1) {
          message = fieldErrors[0].message;
        }
      }
      return message;
    }
  };
  items[5] = {
    key: "getAnyErrorMessage",
    value() {
      const anyErrorMessageAndField = this.getAnyErrorMessageAndField();
      let error;
      if (null != anyErrorMessageAndField) {
        error = anyErrorMessageAndField.error;
      }
      if (null == error) {
        error = this.message;
      }
      return error;
    }
  };
  items[6] = {
    key: "getAnyErrorMessageAndField",
    value() {
      let errors = this.errors;
      if (null != errors) {
        while (null == errors._errors) {
          let _Object = Object;
          errors = errors[Object.keys(Object, errors)[0]];
        }
        const obj = { fieldName: tmp, error: errors._errors[0].message };
        return obj;
      }
      return null;
    }
  };
  return callback(APIError, items);
}(importDefault(dependencyMap[5])(Error));
const result = arg1(dependencyMap[7]).fileFinishedImporting("../discord_common/js/packages/http-utils/V8APIError.tsx");

export const INVALID_FORM_BODY_ERROR_CODE = 50035;
export const ROOT_FORM_ERRORS_KEY = "__root_errors";
export const CaptchaTypes = { HCAPTCHA: "hcaptcha", RECAPTCHA: "recaptcha", RECAPTCHA_ENTERPRISE: "recaptcha_enterprise", TURNSTILE: "turnstile" };
export const APIError = tmp3;
