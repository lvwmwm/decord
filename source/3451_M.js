// Module ID: 3451
// Function ID: 26777
// Name: M
// Dependencies: []

// Module 3451 (M)
const _module = require(dependencyMap[0]);
if (!_module) {
  const obj = { default: _module };
  let tmp3 = obj;
} else {
  tmp3 = _module;
}

export default {
  y(getUTCFullYear) {
    const uTCFullYear = getUTCFullYear.getUTCFullYear();
    let diff = uTCFullYear;
    if (uTCFullYear <= 0) {
      diff = 1 - uTCFullYear;
    }
    let result = diff;
    if ("yy" === arg1) {
      result = diff % 100;
    }
    return tmp3.default(result, arg1.length);
  },
  M(getUTCMonth) {
    const uTCMonth = getUTCMonth.getUTCMonth();
    if ("M" === arg1) {
      const _String = String;
      let StringResult = String(uTCMonth + 1);
    } else {
      StringResult = tmp3.default(uTCMonth + 1, 2);
    }
    return StringResult;
  },
  d(getUTCDate) {
    return tmp3.default(getUTCDate.getUTCDate(), arg1.length);
  },
  a(getUTCHours) {
    let str = "am";
    if (getUTCHours.getUTCHours() / 12 >= 1) {
      str = "pm";
    }
    if ("a" !== arg1) {
      if ("aa" !== arg1) {
        if ("aaa" === arg1) {
          return str;
        } else if ("aaaaa" === arg1) {
          return str[0];
        } else {
          let str5 = "p.m.";
          if ("am" === str) {
            str5 = "a.m.";
          }
          return str5;
        }
      }
    }
    return str.toUpperCase();
  },
  h(getUTCHours) {
    return tmp3.default(getUTCHours.getUTCHours() % 12 || 12, arg1.length);
  },
  H(getUTCHours) {
    return tmp3.default(getUTCHours.getUTCHours(), arg1.length);
  },
  m(getUTCMinutes) {
    return tmp3.default(getUTCMinutes.getUTCMinutes(), arg1.length);
  },
  s(getUTCSeconds) {
    return tmp3.default(getUTCSeconds.getUTCSeconds(), arg1.length);
  },
  S(getUTCMilliseconds) {
    const uTCMilliseconds = getUTCMilliseconds.getUTCMilliseconds();
    return tmp3.default(Math.floor(uTCMilliseconds * Math.pow(10, arg1.length - 3)), arg1.length);
  }
};
export default exports.default;
