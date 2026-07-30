// Module ID: 13391
// Function ID: 13392
// Dependencies: [13383, 13382, 13390]

// Module 13391

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (require(13383) /* all */(toString)) {
      const tmp4 = tmp(13390)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(13382);
    }
  }
  const valueOf = arg0.valueOf;
  if (require(13383) /* all */(valueOf)) {
    let tmp5Result = tmp5(13382);
    const tmp8 = tmp5(13390)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(13383)(toString2)) {
      tmp5Result = tmp5(13382);
      const tmp10 = tmp5(13390)(toString2, arg0);
      if (!tmp5Result(tmp10)) {
        return tmp10;
      }
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
