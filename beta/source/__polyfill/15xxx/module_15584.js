// Module ID: 15584
// Function ID: 15585
// Dependencies: [15576, 15575, 15583]

// Module 15584
import _mod15575 from "module_15575" /* 15575 */;
import _mod15576 from "module_15576" /* 15576 */;
import _mod15583 from "module_15583" /* 15583 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15576(toString)) {
      const tmpResult = _mod15575;
      const tmp4 = _mod15583(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15576(valueOf)) {
    const tmp5Result = _mod15575;
    const tmp8 = _mod15583(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15576(toString2)) {
      const tmp5Result2 = _mod15575;
      const tmp10 = _mod15583(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
