// Module ID: 13822
// Function ID: 13823
// Dependencies: [13814, 13813, 13821]

// Module 13822
import _mod13814 from "module_13814" /* 13814 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod13814(toString)) {
      const tmp4 = tmp(13821)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(13813);
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod13814(valueOf)) {
    const tmp8 = tmp5(13821)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = tmp5(13813);
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(13814)(toString2)) {
      const tmp10 = tmp5(13821)(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = tmp5(13813);
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
