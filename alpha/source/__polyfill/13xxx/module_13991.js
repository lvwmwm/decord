// Module ID: 13991
// Function ID: 13992
// Dependencies: [13983, 13982, 13990]

// Module 13991
import _mod13983 from "module_13983" /* 13983 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod13983(toString)) {
      const tmp4 = tmp(13990)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(13982);
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod13983(valueOf)) {
    const tmp8 = tmp5(13990)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = tmp5(13982);
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(13983)(toString2)) {
      const tmp10 = tmp5(13990)(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = tmp5(13982);
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
