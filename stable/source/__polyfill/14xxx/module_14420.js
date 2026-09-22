// Module ID: 14420
// Function ID: 14421
// Dependencies: [14412, 14411, 14419]

// Module 14420
import _mod14412 from "module_14412" /* 14412 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14412(toString)) {
      const tmp4 = tmp(14419)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(14411);
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14412(valueOf)) {
    const tmp8 = tmp5(14419)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = tmp5(14411);
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(14412)(toString2)) {
      const tmp10 = tmp5(14419)(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = tmp5(14411);
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
