// Module ID: 14026
// Function ID: 14027
// Dependencies: [14018, 14017, 14025]

// Module 14026
import _mod14018 from "module_14018" /* 14018 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14018(toString)) {
      const tmp4 = tmp(14025)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(14017);
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14018(valueOf)) {
    const tmp8 = tmp5(14025)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = tmp5(14017);
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(14018)(toString2)) {
      const tmp10 = tmp5(14025)(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = tmp5(14017);
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
