// Module ID: 15520
// Function ID: 15521
// Dependencies: [15512, 15511, 15519]

// Module 15520
import _mod15511 from "module_15511" /* 15511 */;
import _mod15512 from "module_15512" /* 15512 */;
import _mod15519 from "module_15519" /* 15519 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15512(toString)) {
      const tmpResult = _mod15511;
      const tmp4 = _mod15519(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15512(valueOf)) {
    const tmp5Result = _mod15511;
    const tmp8 = _mod15519(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15512(toString2)) {
      const tmp5Result2 = _mod15511;
      const tmp10 = _mod15519(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
