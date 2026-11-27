// Module ID: 15773
// Function ID: 15774
// Dependencies: [15765, 15764, 15772]

// Module 15773
import _mod15764 from "module_15764" /* 15764 */;
import _mod15765 from "module_15765" /* 15765 */;
import _mod15772 from "module_15772" /* 15772 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15765(toString)) {
      const tmpResult = _mod15764;
      const tmp4 = _mod15772(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15765(valueOf)) {
    const tmp5Result = _mod15764;
    const tmp8 = _mod15772(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15765(toString2)) {
      const tmp5Result2 = _mod15764;
      const tmp10 = _mod15772(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
