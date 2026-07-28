// Module ID: 13373
// Function ID: 102353
// Dependencies: [13365, 13364, 13372]

// Module 13373

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (require(13365) /* all */(toString)) {
      const tmp6 = require(13372) /* call */(toString, arg0);
      if (!tmp5(tmp6)) {
        return tmp6;
      }
      tmp5 = require(13364) /* all */;
    }
  }
  const valueOf = arg0.valueOf;
  if (require(13365) /* all */(valueOf)) {
    const tmp10 = require(13372) /* call */(valueOf, arg0);
    if (!tmp9(tmp10)) {
      return tmp10;
    }
    tmp9 = require(13364) /* all */;
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (require(13365) /* all */(toString2)) {
      const tmp16 = require(13372) /* call */(toString2, arg0);
      if (!tmp15(tmp16)) {
        return tmp16;
      }
      tmp15 = require(13364) /* all */;
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
