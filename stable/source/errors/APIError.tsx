// Module ID: 6447
// Function ID: 6448
// Name: APIError
// Dependencies: [1072, 1282, 1113, 2]

// Module 6447 (APIError)
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import size from "module_2" /* 2 */;

const Links = Constants.Links;
const V8APIError = HTTPUtils.V8APIError;
class APIErrorWithDefaultMessage extends V8APIError {
  constructor(arg0, arg1) {
    if (null != arg1) {
      const intl2 = intl3.intl;
      const formatToPlainString = intl2.formatToPlainString;
      const _HermesInternal = HermesInternal;
      const obj2 = { statusPageURL: Links.STATUS, details: "" + arg1 };
      const aKRa0Q = intl3.t.aKRa0Q;
      formatToPlainString(aKRa0Q, obj2);
    } else {
      const intl = intl3.intl;
      const obj = { statusPageURL: Links.STATUS };
      intl.formatToPlainString(intl3.t.aTVNes, obj);
    }
    const tmp5 = new tmp();
    return tmp5;
  }
}
const result = size.fileFinishedImporting("errors/APIError.tsx");

export default APIErrorWithDefaultMessage;
