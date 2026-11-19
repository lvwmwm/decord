// Module ID: 15485
// Function ID: 15486
// Dependencies: [15477, 15476, 15484]

// Module 15485
import _mod15476 from "module_15476" /* 15476 */;
import _mod15477 from "module_15477" /* 15477 */;
import _mod15484 from "module_15484" /* 15484 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15477(toString)) {
      const tmpResult = _mod15476;
      const tmp4 = _mod15484(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15477(valueOf)) {
    const tmp5Result = _mod15476;
    const tmp8 = _mod15484(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15477(toString2)) {
      const tmp5Result2 = _mod15476;
      const tmp10 = _mod15484(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
