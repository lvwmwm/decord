// Module ID: 16663
// Function ID: 16664
// Dependencies: [16655, 16654, 16662]

// Module 16663
import _mod16654 from "module_16654" /* 16654 */;
import _mod16655 from "module_16655" /* 16655 */;
import _mod16662 from "module_16662" /* 16662 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16655(toString)) {
      const tmpResult = _mod16654;
      const tmp4 = _mod16662(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16655(valueOf)) {
    const tmp5Result = _mod16654;
    const tmp8 = _mod16662(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16655(toString2)) {
      const tmp5Result2 = _mod16654;
      const tmp10 = _mod16662(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
