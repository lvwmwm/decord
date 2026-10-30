// Module ID: 16117
// Function ID: 16118
// Dependencies: [16109, 16108, 16116]

// Module 16117
import _mod16108 from "module_16108" /* 16108 */;
import _mod16109 from "module_16109" /* 16109 */;
import _mod16116 from "module_16116" /* 16116 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16109(toString)) {
      const tmpResult = _mod16108;
      const tmp4 = _mod16116(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16109(valueOf)) {
    const tmp5Result = _mod16108;
    const tmp8 = _mod16116(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16109(toString2)) {
      const tmp5Result2 = _mod16108;
      const tmp10 = _mod16116(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
