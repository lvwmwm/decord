// Module ID: 16157
// Function ID: 16158
// Dependencies: [16149, 16148, 16156]

// Module 16157
import _mod16148 from "module_16148" /* 16148 */;
import _mod16149 from "module_16149" /* 16149 */;
import _mod16156 from "module_16156" /* 16156 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16149(toString)) {
      const tmpResult = _mod16148;
      const tmp4 = _mod16156(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16149(valueOf)) {
    const tmp5Result = _mod16148;
    const tmp8 = _mod16156(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16149(toString2)) {
      const tmp5Result2 = _mod16148;
      const tmp10 = _mod16156(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
