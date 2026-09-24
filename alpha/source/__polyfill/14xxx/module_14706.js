// Module ID: 14706
// Function ID: 14707
// Dependencies: [14698, 14697, 14705]

// Module 14706
import _mod14698 from "module_14698" /* 14698 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14698(toString)) {
      const tmp4 = tmp(14705)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(14697);
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14698(valueOf)) {
    const tmp8 = tmp5(14705)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = tmp5(14697);
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(14698)(toString2)) {
      const tmp10 = tmp5(14705)(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = tmp5(14697);
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
