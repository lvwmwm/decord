// Module ID: 13396
// Function ID: 13397
// Dependencies: [13388, 13387, 13395]

// Module 13396

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (require(13388) /* all */(toString)) {
      const tmp4 = tmp(13395)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(13387);
    }
  }
  const valueOf = arg0.valueOf;
  if (require(13388) /* all */(valueOf)) {
    let tmp5Result = tmp5(13387);
    const tmp8 = tmp5(13395)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(13388)(toString2)) {
      tmp5Result = tmp5(13387);
      const tmp10 = tmp5(13395)(toString2, arg0);
      if (!tmp5Result(tmp10)) {
        return tmp10;
      }
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
