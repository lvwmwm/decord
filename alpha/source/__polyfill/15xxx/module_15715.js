// Module ID: 15715
// Function ID: 15716
// Dependencies: [15707, 15706, 15714]

// Module 15715
import _mod15706 from "module_15706" /* 15706 */;
import _mod15707 from "module_15707" /* 15707 */;
import _mod15714 from "module_15714" /* 15714 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15707(toString)) {
      const tmpResult = _mod15706;
      const tmp4 = _mod15714(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15707(valueOf)) {
    const tmp5Result = _mod15706;
    const tmp8 = _mod15714(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15707(toString2)) {
      const tmp5Result2 = _mod15706;
      const tmp10 = _mod15714(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
