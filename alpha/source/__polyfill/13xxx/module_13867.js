// Module ID: 13867
// Function ID: 13868
// Dependencies: [13859, 13858, 13866]

// Module 13867
import _mod13859 from "module_13859" /* 13859 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod13859(toString)) {
      const tmp4 = tmp(13866)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(13858);
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod13859(valueOf)) {
    const tmp8 = tmp5(13866)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = tmp5(13858);
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(13859)(toString2)) {
      const tmp10 = tmp5(13866)(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = tmp5(13858);
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
