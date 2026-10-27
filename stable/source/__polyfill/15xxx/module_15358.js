// Module ID: 15358
// Function ID: 15359
// Dependencies: [15350, 15349, 15357]

// Module 15358
import _mod15349 from "module_15349" /* 15349 */;
import _mod15350 from "module_15350" /* 15350 */;
import _mod15357 from "module_15357" /* 15357 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15350(toString)) {
      const tmpResult = _mod15349;
      const tmp4 = _mod15357(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15350(valueOf)) {
    const tmp5Result = _mod15349;
    const tmp8 = _mod15357(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15350(toString2)) {
      const tmp5Result2 = _mod15349;
      const tmp10 = _mod15357(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
