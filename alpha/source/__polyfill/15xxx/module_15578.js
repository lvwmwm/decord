// Module ID: 15578
// Function ID: 15579
// Dependencies: [15570, 15569, 15577]

// Module 15578
import _mod15569 from "module_15569" /* 15569 */;
import _mod15570 from "module_15570" /* 15570 */;
import _mod15577 from "module_15577" /* 15577 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15570(toString)) {
      const tmpResult = _mod15569;
      const tmp4 = _mod15577(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15570(valueOf)) {
    const tmp5Result = _mod15569;
    const tmp8 = _mod15577(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15570(toString2)) {
      const tmp5Result2 = _mod15569;
      const tmp10 = _mod15577(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
