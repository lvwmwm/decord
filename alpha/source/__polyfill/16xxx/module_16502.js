// Module ID: 16502
// Function ID: 16503
// Dependencies: [16494, 16493, 16501]

// Module 16502
import _mod16493 from "module_16493" /* 16493 */;
import _mod16494 from "module_16494" /* 16494 */;
import _mod16501 from "module_16501" /* 16501 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16494(toString)) {
      const tmpResult = _mod16493;
      const tmp4 = _mod16501(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16494(valueOf)) {
    const tmp5Result = _mod16493;
    const tmp8 = _mod16501(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16494(toString2)) {
      const tmp5Result2 = _mod16493;
      const tmp10 = _mod16501(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
