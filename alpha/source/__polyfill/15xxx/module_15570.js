// Module ID: 15570
// Function ID: 15571
// Dependencies: [15562, 15561, 15569]

// Module 15570
import _mod15561 from "module_15561" /* 15561 */;
import _mod15562 from "module_15562" /* 15562 */;
import _mod15569 from "module_15569" /* 15569 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15562(toString)) {
      const tmpResult = _mod15561;
      const tmp4 = _mod15569(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15562(valueOf)) {
    const tmp5Result = _mod15561;
    const tmp8 = _mod15569(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15562(toString2)) {
      const tmp5Result2 = _mod15561;
      const tmp10 = _mod15569(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
