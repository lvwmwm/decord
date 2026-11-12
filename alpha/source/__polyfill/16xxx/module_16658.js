// Module ID: 16658
// Function ID: 16659
// Dependencies: [16650, 16649, 16657]

// Module 16658
import _mod16649 from "module_16649" /* 16649 */;
import _mod16650 from "module_16650" /* 16650 */;
import _mod16657 from "module_16657" /* 16657 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod16650(toString)) {
      const tmpResult = _mod16649;
      const tmp4 = _mod16657(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod16650(valueOf)) {
    const tmp5Result = _mod16649;
    const tmp8 = _mod16657(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod16650(toString2)) {
      const tmp5Result2 = _mod16649;
      const tmp10 = _mod16657(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
