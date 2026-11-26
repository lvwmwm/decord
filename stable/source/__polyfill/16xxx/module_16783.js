// Module ID: 16783
// Function ID: 16784
// Dependencies: [16775, 16774, 16782]

// Module 16783
import _mod16774 from "module_16774" /* 16774 */;
import _mod16775 from "module_16775" /* 16775 */;
import _mod16782 from "module_16782" /* 16782 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16775(toString)) {
      const tmpResult = _mod16774;
      const tmp4 = _mod16782(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16775(valueOf)) {
    const tmp5Result = _mod16774;
    const tmp8 = _mod16782(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16775(toString2)) {
      const tmp5Result2 = _mod16774;
      const tmp10 = _mod16782(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
