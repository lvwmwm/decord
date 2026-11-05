// Module ID: 16420
// Function ID: 16421
// Dependencies: [16412, 16411, 16419]

// Module 16420
import _mod16411 from "module_16411" /* 16411 */;
import _mod16412 from "module_16412" /* 16412 */;
import _mod16419 from "module_16419" /* 16419 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16412(toString)) {
      const tmpResult = _mod16411;
      const tmp4 = _mod16419(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16412(valueOf)) {
    const tmp5Result = _mod16411;
    const tmp8 = _mod16419(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16412(toString2)) {
      const tmp5Result2 = _mod16411;
      const tmp10 = _mod16419(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
