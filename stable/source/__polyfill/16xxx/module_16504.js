// Module ID: 16504
// Function ID: 16505
// Dependencies: [16496, 16495, 16503]

// Module 16504
import _mod16495 from "module_16495" /* 16495 */;
import _mod16496 from "module_16496" /* 16496 */;
import _mod16503 from "module_16503" /* 16503 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16496(toString)) {
      const tmpResult = _mod16495;
      const tmp4 = _mod16503(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16496(valueOf)) {
    const tmp5Result = _mod16495;
    const tmp8 = _mod16503(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16496(toString2)) {
      const tmp5Result2 = _mod16495;
      const tmp10 = _mod16503(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
