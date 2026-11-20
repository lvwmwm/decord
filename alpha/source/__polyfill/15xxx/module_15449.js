// Module ID: 15449
// Function ID: 15450
// Dependencies: [15441, 15440, 15448]

// Module 15449
import _mod15440 from "module_15440" /* 15440 */;
import _mod15441 from "module_15441" /* 15441 */;
import _mod15448 from "module_15448" /* 15448 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod15441(toString)) {
      const tmpResult = _mod15440;
      const tmp4 = _mod15448(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod15441(valueOf)) {
    const tmp5Result = _mod15440;
    const tmp8 = _mod15448(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (_mod15441(toString2)) {
      const tmp5Result2 = _mod15440;
      const tmp10 = _mod15448(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
    }
  }
  const tmp11 = new TypeError("Can't convert object to primitive value");
  throw tmp11;
};
