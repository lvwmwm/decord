// Module ID: 14652
// Function ID: 14653
// Dependencies: [14644, 14643, 14651]

// Module 14652
import _mod14644 from "module_14644" /* 14644 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14644(toString)) {
      const tmp4 = tmp(14651)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(14643);
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14644(valueOf)) {
    const tmp8 = tmp5(14651)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = tmp5(14643);
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(14644)(toString2)) {
      const tmp10 = tmp5(14651)(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = tmp5(14643);
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
