// Module ID: 15572
// Function ID: 15573
// Dependencies: [15564, 15563, 15571]

// Module 15572
import _mod15563 from "module_15563" /* 15563 */;
import _mod15564 from "module_15564" /* 15564 */;
import _mod15571 from "module_15571" /* 15571 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15564(toString)) {
      const tmpResult = _mod15563;
      const tmp4 = _mod15571(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15564(valueOf)) {
    const tmp5Result = _mod15563;
    const tmp8 = _mod15571(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15564(toString2)) {
      const tmp5Result2 = _mod15563;
      const tmp10 = _mod15571(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
