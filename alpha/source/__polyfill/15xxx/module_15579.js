// Module ID: 15579
// Function ID: 15580
// Dependencies: [15571, 15570, 15578]

// Module 15579
import _mod15570 from "module_15570" /* 15570 */;
import _mod15571 from "module_15571" /* 15571 */;
import _mod15578 from "module_15578" /* 15578 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15571(toString)) {
      const tmpResult = _mod15570;
      const tmp4 = _mod15578(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15571(valueOf)) {
    const tmp5Result = _mod15570;
    const tmp8 = _mod15578(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15571(toString2)) {
      const tmp5Result2 = _mod15570;
      const tmp10 = _mod15578(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
