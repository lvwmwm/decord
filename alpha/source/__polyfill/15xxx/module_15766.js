// Module ID: 15766
// Function ID: 15767
// Dependencies: [15758, 15757, 15765]

// Module 15766
import _mod15757 from "module_15757" /* 15757 */;
import _mod15758 from "module_15758" /* 15758 */;
import _mod15765 from "module_15765" /* 15765 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15758(toString)) {
      const tmpResult = _mod15757;
      const tmp4 = _mod15765(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15758(valueOf)) {
    const tmp5Result = _mod15757;
    const tmp8 = _mod15765(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15758(toString2)) {
      const tmp5Result2 = _mod15757;
      const tmp10 = _mod15765(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
