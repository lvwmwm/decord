// Module ID: 15613
// Function ID: 15614
// Dependencies: [15605, 15604, 15612]

// Module 15613
import _mod15604 from "module_15604" /* 15604 */;
import _mod15605 from "module_15605" /* 15605 */;
import _mod15612 from "module_15612" /* 15612 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15605(toString)) {
      const tmpResult = _mod15604;
      const tmp4 = _mod15612(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15605(valueOf)) {
    const tmp5Result = _mod15604;
    const tmp8 = _mod15612(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15605(toString2)) {
      const tmp5Result2 = _mod15604;
      const tmp10 = _mod15612(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
