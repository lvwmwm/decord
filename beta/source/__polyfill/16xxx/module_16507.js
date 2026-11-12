// Module ID: 16507
// Function ID: 16508
// Dependencies: [16499, 16498, 16506]

// Module 16507
import _mod16498 from "module_16498" /* 16498 */;
import _mod16499 from "module_16499" /* 16499 */;
import _mod16506 from "module_16506" /* 16506 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16499(toString)) {
      const tmpResult = _mod16498;
      const tmp4 = _mod16506(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16499(valueOf)) {
    const tmp5Result = _mod16498;
    const tmp8 = _mod16506(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16499(toString2)) {
      const tmp5Result2 = _mod16498;
      const tmp10 = _mod16506(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
