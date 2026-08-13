// Module ID: 13672
// Function ID: 13673
// Dependencies: [13664, 13663, 13671]

// Module 13672

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (require(13664) /* all */(toString)) {
      const tmp4 = tmp(13671)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(13663);
    }
  }
  const valueOf = arg0.valueOf;
  if (require(13664) /* all */(valueOf)) {
    let tmp5Result = tmp5(13663);
    const tmp8 = tmp5(13671)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(13664)(toString2)) {
      tmp5Result = tmp5(13663);
      const tmp10 = tmp5(13671)(toString2, arg0);
      if (!tmp5Result(tmp10)) {
        return tmp10;
      }
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
