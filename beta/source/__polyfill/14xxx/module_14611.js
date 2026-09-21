// Module ID: 14611
// Function ID: 14612
// Dependencies: [14603, 14602, 14610]

// Module 14611
import _mod14603 from "module_14603" /* 14603 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14603(toString)) {
      const tmp4 = tmp(14610)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(14602);
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14603(valueOf)) {
    const tmp8 = tmp5(14610)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = tmp5(14602);
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(14603)(toString2)) {
      const tmp10 = tmp5(14610)(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = tmp5(14602);
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
