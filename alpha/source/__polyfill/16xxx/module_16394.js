// Module ID: 16394
// Function ID: 16395
// Dependencies: [16386, 16385, 16393]

// Module 16394
import _mod16385 from "module_16385" /* 16385 */;
import _mod16386 from "module_16386" /* 16386 */;
import _mod16393 from "module_16393" /* 16393 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16386(toString)) {
      const tmpResult = _mod16385;
      const tmp4 = _mod16393(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16386(valueOf)) {
    const tmp5Result = _mod16385;
    const tmp8 = _mod16393(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16386(toString2)) {
      const tmp5Result2 = _mod16385;
      const tmp10 = _mod16393(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
