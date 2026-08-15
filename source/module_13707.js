// Module ID: 13707
// Function ID: 13708
// Dependencies: [13699, 13698, 13706]

// Module 13707

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (require(13699) /* all */(toString)) {
      const tmp4 = tmp(13706)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(13698);
    }
  }
  const valueOf = arg0.valueOf;
  if (require(13699) /* all */(valueOf)) {
    let tmp5Result = tmp5(13698);
    const tmp8 = tmp5(13706)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(13699)(toString2)) {
      tmp5Result = tmp5(13698);
      const tmp10 = tmp5(13706)(toString2, arg0);
      if (!tmp5Result(tmp10)) {
        return tmp10;
      }
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
