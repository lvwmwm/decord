// Module ID: 13823
// Function ID: 13824
// Dependencies: [13815, 13814, 13822]

// Module 13823
import _mod13815 from "module_13815" /* 13815 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod13815(toString)) {
      const tmp4 = tmp(13822)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(13814);
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod13815(valueOf)) {
    const tmp8 = tmp5(13822)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = tmp5(13814);
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(13815)(toString2)) {
      const tmp10 = tmp5(13822)(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = tmp5(13814);
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
