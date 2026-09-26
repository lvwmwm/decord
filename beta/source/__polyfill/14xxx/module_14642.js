// Module ID: 14642
// Function ID: 14643
// Dependencies: [14634, 14633, 14641]

// Module 14642
import _mod14634 from "module_14634" /* 14634 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14634(toString)) {
      const tmp4 = tmp(14641)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(14633);
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14634(valueOf)) {
    const tmp8 = tmp5(14641)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = tmp5(14633);
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(14634)(toString2)) {
      const tmp10 = tmp5(14641)(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = tmp5(14633);
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
