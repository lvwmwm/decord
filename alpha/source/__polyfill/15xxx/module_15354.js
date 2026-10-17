// Module ID: 15354
// Function ID: 15355
// Dependencies: [15346, 15345, 15353]

// Module 15354
import _mod15345 from "module_15345" /* 15345 */;
import _mod15346 from "module_15346" /* 15346 */;
import _mod15353 from "module_15353" /* 15353 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15346(toString)) {
      const tmpResult = _mod15345;
      const tmp4 = _mod15353(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15346(valueOf)) {
    const tmp5Result = _mod15345;
    const tmp8 = _mod15353(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15346(toString2)) {
      const tmp5Result2 = _mod15345;
      const tmp10 = _mod15353(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
