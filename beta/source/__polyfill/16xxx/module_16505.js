// Module ID: 16505
// Function ID: 16506
// Dependencies: [16497, 16496, 16504]

// Module 16505
import _mod16496 from "module_16496" /* 16496 */;
import _mod16497 from "module_16497" /* 16497 */;
import _mod16504 from "module_16504" /* 16504 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16497(toString)) {
      const tmpResult = _mod16496;
      const tmp4 = _mod16504(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16497(valueOf)) {
    const tmp5Result = _mod16496;
    const tmp8 = _mod16504(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16497(toString2)) {
      const tmp5Result2 = _mod16496;
      const tmp10 = _mod16504(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
