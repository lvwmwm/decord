// Module ID: 16465
// Function ID: 16466
// Dependencies: [16457, 16456, 16464]

// Module 16465
import _mod16456 from "module_16456" /* 16456 */;
import _mod16457 from "module_16457" /* 16457 */;
import _mod16464 from "module_16464" /* 16464 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16457(toString)) {
      const tmpResult = _mod16456;
      const tmp4 = _mod16464(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16457(valueOf)) {
    const tmp5Result = _mod16456;
    const tmp8 = _mod16464(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16457(toString2)) {
      const tmp5Result2 = _mod16456;
      const tmp10 = _mod16464(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
