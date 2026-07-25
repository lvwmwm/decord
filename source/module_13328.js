// Module ID: 13328
// Function ID: 102175
// Dependencies: [13320, 13319, 13327]

// Module 13328

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (require(13320) /* all */(toString)) {
      const tmp6 = require(13327) /* call */(toString, arg0);
      if (!tmp5(tmp6)) {
        return tmp6;
      }
      tmp5 = require(13319) /* all */;
    }
  }
  const valueOf = arg0.valueOf;
  if (require(13320) /* all */(valueOf)) {
    const tmp10 = require(13327) /* call */(valueOf, arg0);
    if (!tmp9(tmp10)) {
      return tmp10;
    }
    tmp9 = require(13319) /* all */;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (require(13320) /* all */(toString2)) {
      const tmp16 = require(13327) /* call */(toString2, arg0);
      if (!tmp15(tmp16)) {
        return tmp16;
      }
      tmp15 = require(13319) /* all */;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
