// Module ID: 16162
// Function ID: 16163
// Dependencies: [16154, 16153, 16161]

// Module 16162
import _mod16153 from "module_16153" /* 16153 */;
import _mod16154 from "module_16154" /* 16154 */;
import _mod16161 from "module_16161" /* 16161 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16154(toString)) {
      const tmpResult = _mod16153;
      const tmp4 = _mod16161(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16154(valueOf)) {
    const tmp5Result = _mod16153;
    const tmp8 = _mod16161(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16154(toString2)) {
      const tmp5Result2 = _mod16153;
      const tmp10 = _mod16161(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
