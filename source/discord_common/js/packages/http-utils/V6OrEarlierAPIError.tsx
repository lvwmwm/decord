// Module ID: 565
// Function ID: 6820
// Name: APIError
// Dependencies: [6, 7, 2]

// Module 565 (APIError)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const tmp2 = (() => {
  class APIError {
    constructor(arg0, arg1) {
      str = arg2;
      self = this;
      if (arg2 === undefined) {
        str = "An unexpected error occurred.";
      }
      tmp = APIError(self, APIError);
      if ("string" === typeof arg0) {
        obj = {};
        obj.message = arg0;
        tmp5 = arg1;
        obj.code = arg1;
      } else {
        tmp8 = null;
        if (null != arg0.body) {
          if (null != arg0.body.message) {
            tmp9 = globalThis;
            _Array2 = Array;
            if (!Array.isArray(arg0.body.message)) {
              if (null != arg0.body.code) {
                _Array = Array;
              }
              obj1 = {};
              obj1.message = arg0.body.message;
              obj1.code = arg0.body.code;
              obj1.retryAfter = arg0.body.retry_after;
              obj1.status = arg0.status;
              obj = obj1;
            }
          }
          body = arg0.body;
          first = null;
          if (null != body) {
            tmp3 = globalThis;
            _Object = Object;
            num = 0;
            first = Object.values(body)[0];
          }
          obj2 = {};
          first1 = undefined;
          if (null != first) {
            num2 = 0;
            first1 = first[0];
          }
          obj2.message = first1;
          obj2.fields = body;
          obj2.status = arg0.status;
          obj = obj2;
        } else {
          obj = {};
          obj.status = arg0.status;
        }
      }
      ({ message, code, fields } = obj);
      tmp6 = message;
      ({ retryAfter, status } = obj);
      if (!message) {
        tmp6 = str;
      }
      self.message = tmp6;
      self.retryAfter = retryAfter;
      if (!code) {
        code = -1;
      }
      self.code = code;
      if (!fields) {
        fields = {};
      }
      self.fields = fields;
      self.status = status;
      error = new Error(message);
      self.error = error;
      return;
    }
  }
  const items = [
    {
      key: "getFieldMessage",
      value(arg0) {
        let first = null;
        if (null != this.fields[arg0]) {
          first = this.fields[arg0][0];
        }
        return first;
      }
    }
  ];
  return callback(APIError, items);
})();
const result = require("set").fileFinishedImporting("../discord_common/js/packages/http-utils/V6OrEarlierAPIError.tsx");

export const APIError = tmp2;
