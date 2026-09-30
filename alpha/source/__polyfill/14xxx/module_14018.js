// Module ID: 14018
// Function ID: 14019
// Dependencies: [14010, 14009, 14017]

// Module 14018
import _mod14010 from "module_14010" /* 14010 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14010(toString)) {
      const tmp4 = tmp(14017)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(14009);
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14010(valueOf)) {
    const tmp8 = tmp5(14017)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = tmp5(14009);
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(14010)(toString2)) {
      const tmp10 = tmp5(14017)(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = tmp5(14009);
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
