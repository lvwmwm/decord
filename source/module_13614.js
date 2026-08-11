// Module ID: 13614
// Function ID: 13615
// Dependencies: [13606, 13605, 13613]

// Module 13614

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (require(13606) /* all */(toString)) {
      const tmp4 = tmp(13613)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(13605);
    }
  }
  const valueOf = arg0.valueOf;
  if (require(13606) /* all */(valueOf)) {
    let tmp5Result = tmp5(13605);
    const tmp8 = tmp5(13613)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(13606)(toString2)) {
      tmp5Result = tmp5(13605);
      const tmp10 = tmp5(13613)(toString2, arg0);
      if (!tmp5Result(tmp10)) {
        return tmp10;
      }
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
