// Module ID: 12691
// Function ID: 97406
// Name: Range
// Dependencies: [1768562, 512, 3766528, 441122816, 31260672, 1441792, 833093632, 833159168, 833224704, 86966272]

// Module 12691 (Range)
import interpretNumericEntities from "interpretNumericEntities";

let closure_2 = require(dependencyMap[0]);
let closure_4 = require(dependencyMap[2]);
let closure_5 = /\s+/g;
let _module = require(dependencyMap[9]);
_module = new _module();
function isNullSet(value) {
  return "<0.0.0-0" === value.value;
}
function isAny(value) {
  return "" === value.value;
}
function isSatisfiable(arr) {
  const require = arg1;
  const substr = arr.slice();
  let closure_1 = substr.pop();
  let flag = true;
  if (substr.length) {
    const everyResult = substr.every((arg0) => closure_1.intersects(arg0, arg1));
    closure_1 = substr.pop();
    flag = everyResult;
    while (everyResult) {
      flag = everyResult;
      if (!substr.length) {
        break;
      }
    }
  }
  return flag;
}
function parseComparator(arg0, arg1) {
  require(dependencyMap[7])("comp", arg0, arg1);
  const tmp2 = replaceCarets(arg0, arg1);
  require(dependencyMap[7])("caret", tmp2);
  const tmp4 = replaceTildes(tmp2, arg1);
  require(dependencyMap[7])("tildes", tmp4);
  const tmp6 = replaceXRanges(tmp4, arg1);
  require(dependencyMap[7])("xrange", tmp6);
  const tmp8 = replaceStars(tmp6, arg1);
  require(dependencyMap[7])("stars", tmp8);
  return tmp8;
}
function isX(str) {
  let tmp = !str;
  if (!tmp) {
    tmp = "x" === str.toLowerCase();
  }
  if (!tmp) {
    tmp = "*" === str;
  }
  return tmp;
}
function replaceTildes(str, arg1) {
  const require = arg1;
  const parts = str.trim().split(/\s+/);
  const mapped = parts.map((arg0) => callback(arg0, arg1));
  return mapped.join(" ");
}
function replaceTilde(str, loose) {
  const require = str;
  const safeRe = require(dependencyMap[6]).safeRe;
  const t = require(dependencyMap[6]).t;
  if (loose.loose) {
    let tmp = safeRe[t.TILDELOOSE];
  } else {
    tmp = safeRe[t.TILDE];
  }
  return str.replace(tmp, (arg0, arg1, arg2, arg3, arg4) => {
    arg0(closure_1[7])("tilde", arg0, arg0, arg1, arg2, arg3, arg4);
    let str = "";
    if (!callback(arg1)) {
      if (callback(arg2)) {
        const _HermesInternal4 = HermesInternal;
        str = ">=" + arg1 + ".0.0 <" + +arg1 + 1 + ".0.0-0";
      } else if (callback(arg3)) {
        const _HermesInternal3 = HermesInternal;
        str = ">=" + arg1 + "." + arg2 + ".0 <" + arg1 + "." + +arg2 + 1 + ".0-0";
      } else if (arg4) {
        arg0(closure_1[7])("replaceTilde pr", arg4);
        const _HermesInternal2 = HermesInternal;
        str = ">=" + arg1 + "." + arg2 + "." + arg3 + "-" + arg4 + " <" + arg1 + "." + +arg2 + 1 + ".0-0";
      } else {
        const _HermesInternal = HermesInternal;
        str = ">=" + arg1 + "." + arg2 + "." + arg3 + " <" + arg1 + "." + +arg2 + 1 + ".0-0";
      }
    }
    arg0(closure_1[7])("tilde return", str);
    return str;
  });
}
function replaceCarets(str, arg1) {
  const require = arg1;
  const parts = str.trim().split(/\s+/);
  const mapped = parts.map((arg0) => callback(arg0, arg1));
  return mapped.join(" ");
}
function replaceCaret(str, loose) {
  const require = str;
  require(dependencyMap[7])("caret", str, loose);
  const safeRe = require(dependencyMap[6]).safeRe;
  const t = require(dependencyMap[6]).t;
  if (loose.loose) {
    let tmp2 = safeRe[t.CARETLOOSE];
  } else {
    tmp2 = safeRe[t.CARET];
  }
  str = "";
  if (loose.includePrerelease) {
    str = "-0";
  }
  const dependencyMap = str;
  return str.replace(tmp2, (arg0, arg1, arg2, arg3, arg4) => {
    arg0(str[7])("caret", arg0, arg0, arg1, arg2, arg3, arg4);
    let str = "";
    if (!callback(arg1)) {
      if (callback(arg2)) {
        const _HermesInternal9 = HermesInternal;
        str = ">=" + arg1 + ".0.0" + str + " <" + +arg1 + 1 + ".0.0-0";
      } else if (callback(arg3)) {
        if ("0" === arg1) {
          const _HermesInternal8 = HermesInternal;
          let combined = ">=" + arg1 + "." + arg2 + ".0" + str + " <" + arg1 + "." + +arg2 + 1 + ".0-0";
        } else {
          const _HermesInternal7 = HermesInternal;
          combined = ">=" + arg1 + "." + arg2 + ".0" + str + " <" + +arg1 + 1 + ".0.0-0";
        }
        str = combined;
      } else {
        const tmp6 = arg0(str[7]);
        if (arg4) {
          tmp6("replaceCaret pr", arg4);
          if ("0" === arg1) {
            if ("0" === arg2) {
              const _HermesInternal6 = HermesInternal;
              let combined1 = ">=" + arg1 + "." + arg2 + "." + arg3 + "-" + arg4 + " <" + arg1 + "." + arg2 + "." + +arg3 + 1 + "-0";
            } else {
              const _HermesInternal5 = HermesInternal;
              combined1 = ">=" + arg1 + "." + arg2 + "." + arg3 + "-" + arg4 + " <" + arg1 + "." + +arg2 + 1 + ".0-0";
            }
          } else {
            const _HermesInternal4 = HermesInternal;
            str = ">=" + arg1 + "." + arg2 + "." + arg3 + "-" + arg4 + " <" + +arg1 + 1 + ".0.0-0";
          }
        } else {
          tmp6("no pr");
          if ("0" === arg1) {
            if ("0" === arg2) {
              const _HermesInternal3 = HermesInternal;
              let combined2 = ">=" + arg1 + "." + arg2 + "." + arg3 + str + " <" + arg1 + "." + arg2 + "." + +arg3 + 1 + "-0";
            } else {
              const _HermesInternal2 = HermesInternal;
              combined2 = ">=" + arg1 + "." + arg2 + "." + arg3 + str + " <" + arg1 + "." + +arg2 + 1 + ".0-0";
            }
          } else {
            const _HermesInternal = HermesInternal;
            str = ">=" + arg1 + "." + arg2 + "." + arg3 + " <" + +arg1 + 1 + ".0.0-0";
          }
        }
      }
    }
    arg0(str[7])("caret return", str);
    return str;
  });
}
function replaceXRanges(str, arg1) {
  const require = arg1;
  require(dependencyMap[7])("replaceXRanges", str, arg1);
  const parts = str.split(/\s+/);
  const mapped = parts.map((arg0) => callback(arg0, arg1));
  return mapped.join(" ");
}
function replaceXRange(str, loose) {
  const dependencyMap = loose;
  str = str.trim();
  const require = str;
  const safeRe = require(dependencyMap[6]).safeRe;
  const t = require(dependencyMap[6]).t;
  if (loose.loose) {
    let tmp = safeRe[t.XRANGELOOSE];
  } else {
    tmp = safeRe[t.XRANGE];
  }
  return str.replace(tmp, (arg0, arg1, arg2, arg3, arg4, arg5) => {
    let combined = arg0;
    let str = arg1;
    str(arg1[7])("xRange", str, arg0, arg1, arg2, arg3, arg4, arg5);
    const tmp3 = callback(arg2);
    let tmp4 = tmp3;
    if (!tmp3) {
      tmp4 = callback(arg3);
    }
    let tmp6 = tmp4;
    if (!tmp4) {
      tmp6 = callback(arg4);
    }
    if (tmp8) {
      str = "";
    }
    let str2 = "";
    if (arg1.includePrerelease) {
      str2 = "-0";
    }
    if (tmp3) {
      if (">" === str) {
        let str24 = "<0.0.0-0";
      } else {
        str24 = "*";
      }
      combined = str24;
    } else {
      if (str) {
        if (tmp6) {
          let num3 = arg3;
          if (tmp4) {
            num3 = 0;
          }
          if (">" === str) {
            if (tmp4) {
              let sum = +arg2 + 1;
              let str16 = ">=";
              let num4 = 0;
            } else {
              num4 = +num3 + 1;
              str16 = ">=";
              sum = arg2;
            }
          } else {
            sum = arg2;
            num4 = num3;
            str16 = str;
            if ("<=" === str) {
              if (tmp4) {
                let sum1 = +arg2 + 1;
                let sum2 = num3;
              } else {
                sum2 = +num3 + 1;
                sum1 = arg2;
              }
              str16 = "<";
              sum = sum1;
              num4 = sum2;
            }
          }
          let str18 = str2;
          if ("<" === str16) {
            str18 = "-0";
          }
          const _HermesInternal3 = HermesInternal;
          combined = "" + str16 + sum + "." + num4 + "." + 0 + str18;
        }
      }
      if (tmp4) {
        const _HermesInternal2 = HermesInternal;
        combined = ">=" + arg2 + ".0.0" + str2 + " <" + +arg2 + 1 + ".0.0-0";
      } else if (tmp6) {
        const _HermesInternal = HermesInternal;
        combined = ">=" + arg2 + "." + arg3 + ".0" + str2 + " <" + arg2 + "." + +arg3 + 1 + ".0-0";
      }
    }
    str(arg1[7])("xRange return", combined);
    return combined;
  });
}
function replaceStars(str, arg1) {
  require(dependencyMap[7])("replaceStars", str, arg1);
  return str.trim().replace(require(dependencyMap[6]).safeRe[closure_0(undefined, closure_1[6]).t.STAR], "");
}
function replaceGTE0(str) {
  require(dependencyMap[7])("replaceGTE0", str, arg1);
  const t = require(dependencyMap[6]).t;
  return str.trim().replace(require(dependencyMap[6]).safeRe[arg1.includePrerelease ? t.GTE0PRE : t.GTE0], "");
}
function hyphenReplace(arg0) {
  const require = arg0;
  return (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) => {
    let str = arg8;
    if (callback(arg2)) {
      if (callback(str)) {
        const _HermesInternal10 = HermesInternal;
        return "" + "" + " " + "".trim();
      } else if (callback(arg9)) {
        const _HermesInternal9 = HermesInternal;
        const sum = +str + 1;
        str = ".0.0-0";
        let combined = "<" + sum + ".0.0-0";
      } else if (callback(arg10)) {
        const _HermesInternal8 = HermesInternal;
        combined = "<" + `.0.0-0` + "." + +arg9 + 1 + ".0-0";
      } else if (arg11) {
        const _HermesInternal7 = HermesInternal;
        combined = "<=" + `.0.0-0` + "." + arg9 + "." + arg10 + "-" + arg11;
      } else if (arg0) {
        const _HermesInternal6 = HermesInternal;
        combined = "<" + `.0.0-0` + "." + arg9 + "." + +arg10 + 1 + "-0";
      } else {
        const _HermesInternal5 = HermesInternal;
        combined = "<=" + arg7;
      }
    } else if (callback(arg3)) {
      let str9 = "";
      if (arg0) {
        str9 = "-0";
      }
      const _HermesInternal4 = HermesInternal;
      let combined1 = ">=" + arg2 + ".0.0" + str9;
    } else if (callback(arg4)) {
      let str5 = "";
      if (arg0) {
        str5 = "-0";
      }
      const _HermesInternal3 = HermesInternal;
      combined1 = ">=" + arg2 + "." + arg3 + ".0" + str5;
    } else if (arg5) {
      const _HermesInternal2 = HermesInternal;
      combined1 = ">=" + arg1;
    } else {
      let str2 = "";
      if (arg0) {
        str2 = "-0";
      }
      const _HermesInternal = HermesInternal;
      combined1 = ">=" + arg1 + str2;
    }
  };
}
function testSet(arg0, prerelease, includePrerelease) {
  let num = 0;
  if (0 < arg0.length) {
    while (obj.test(prerelease)) {
      num = num + 1;
    }
    return false;
  }
  if (prerelease.prerelease.length) {
    if (!includePrerelease.includePrerelease) {
      let num4 = 0;
      if (0 < arg0.length) {
        while (true) {
          let tmp3 = require;
          let tmp4 = dependencyMap;
          let tmp5 = require(dependencyMap[7])(arg0[num4].semver);
          let tmp6 = tmp2;
          if (arg0[num4].semver !== require(dependencyMap[4]).ANY) {
            tmp6 = tmp2;
            if (arg0[num4].semver.prerelease.length > 0) {
              let semver = arg0[num4].semver;
              tmp6 = semver;
              if (semver.major === prerelease.major) {
                tmp6 = semver;
                if (semver.minor === prerelease.minor) {
                  tmp6 = semver;
                  if (semver.patch === prerelease.patch) {
                    break;
                  }
                }
              }
            }
          }
          num4 = num4 + 1;
          let tmp2 = tmp6;
        }
        return true;
      }
      return false;
    }
  }
  return true;
}

export default () => {
  class Range {
    constructor(arg0, arg1) {
      self = this;
      Range = this;
      tmp = closure_3(this, Range);
      tmp2 = Range(closure_1[3])(arg1);
      if (arg0 instanceof Range) {
        if (arg0.loose !== tmp2.loose) {
          tmp17 = Range;
          prototype2 = Range.prototype;
          tmp18 = new.target;
          tmp19 = new.target;
          tmp20 = tmp2;
          tmp16 = new Range(arg0.raw, tmp2);
        } else {
          tmp16 = arg0;
        }
        return tmp16;
      } else {
        tmp3 = Range;
        tmp4 = closure_1;
        num = 4;
        if (arg0 instanceof Range(closure_1[4])) {
          self.raw = arg0.value;
          items = [];
          items[0] = arg0;
          items1 = [];
          items1[0] = items;
          self.set = items1;
          self.formatted = undefined;
          return self;
        } else {
          self.options = tmp2;
          self.loose = tmp2.loose;
          self.includePrerelease = tmp2.includePrerelease;
          str = arg0.trim();
          tmp5 = closure_5;
          str2 = " ";
          self.raw = str.replace(closure_5, " ");
          str3 = self.raw;
          str4 = "||";
          parts = str3.split("||");
          mapped = parts.map((str) => self.parseRange(str.trim()));
          self.set = mapped.filter((arg0) => arg0.length);
          if (self.set.length) {
            num2 = 1;
            if (self.set.length > 1) {
              num3 = 0;
              set = self.set;
              self.set = set.filter((arg0) => !callback(arg0[0]));
              if (0 === self.set.length) {
                items2 = [];
                items2[0] = self.set[0];
                self.set = items2;
              } else if (self.set.length > 1) {
                set = self.set;
                tmp11 = set;
                for (const item10065 of set) {
                  tmp12 = item10065;
                  if (1 !== item10065.length) {
                  } else {
                    tmp13 = closure_8;
                    tmp14 = item10065;
                    if (closure_8(tmp12[0])) {
                      tmp15 = item10065;
                      items3 = [];
                      items3[0] = tmp12;
                      self.set = items3;
                      obj.return();
                      // break
                    }
                    break;
                  }
                }
              }
            }
            self.formatted = undefined;
            return;
          } else {
            tmp6 = globalThis;
            _TypeError = TypeError;
            _HermesInternal = HermesInternal;
            str5 = "Invalid SemVer Range: ";
            prototype = TypeError.prototype;
            tmp7 = new.target;
            tmp8 = new.target;
            typeError = new TypeError("Invalid SemVer Range: " + self.raw);
            tmp10 = typeError;
            throw typeError;
          }
        }
      }
    }
  }
  const require = Range;
  let obj = {
    key: "range",
    get() {
      const self = this;
      if (undefined === this.formatted) {
        self.formatted = "";
        for (let num2 = 0; num2 < self.set.length; num2 = num2 + 1) {
          if (num2 > 0) {
            self.formatted = `${self.formatted}||`;
          }
          let arr = self.set[num2];
          for (let num = 0; num < arr.length; num = num + 1) {
            if (num > 0) {
              self.formatted = `${self.formatted} `;
            }
            let str = arr[num];
            let str2 = str.toString();
            self.formatted = self.formatted + str2.trim();
          }
        }
      }
      return self.formatted;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "format",
    value: function format() {
      return this.range;
    }
  };
  items[1] = obj;
  obj = {
    key: "toString",
    value: function toString() {
      return this.range;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "parseRange",
    value: function parseRange(str) {
      const self = this;
      const Range = this;
      let FLAG_INCLUDE_PRERELEASE = this.options.includePrerelease;
      if (FLAG_INCLUDE_PRERELEASE) {
        FLAG_INCLUDE_PRERELEASE = Range(closure_1[5]).FLAG_INCLUDE_PRERELEASE;
      }
      let FLAG_LOOSE = self.options.loose;
      if (FLAG_LOOSE) {
        FLAG_LOOSE = Range(closure_1[5]).FLAG_LOOSE;
      }
      const text = `${FLAG_INCLUDE_PRERELEASE | FLAG_LOOSE}:${str}`;
      const value = store.get(text);
      if (value) {
        return value;
      } else {
        const loose = self.options.loose;
        const safeRe = Range(closure_1[6]).safeRe;
        const t = Range(closure_1[6]).t;
        if (loose) {
          let tmp9 = safeRe[t.HYPHENRANGELOOSE];
        } else {
          tmp9 = safeRe[t.HYPHENRANGE];
        }
        str = str.replace(tmp9, callback3(self.options.includePrerelease));
        Range(closure_1[7])("hyphen replace", str);
        const str3 = str.replace(Range(closure_1[6]).safeRe[closure_0(undefined, closure_1[6]).t.COMPARATORTRIM], Range(closure_1[6]).comparatorTrimReplace);
        Range(closure_1[7])("comparator trim", str3);
        const str5 = str3.replace(Range(closure_1[6]).safeRe[closure_0(undefined, closure_1[6]).t.TILDETRIM], Range(closure_1[6]).tildeTrimReplace);
        Range(closure_1[7])("tilde trim", str5);
        const str7 = str5.replace(Range(closure_1[6]).safeRe[closure_0(undefined, closure_1[6]).t.CARETTRIM], Range(closure_1[6]).caretTrimReplace);
        Range(closure_1[7])("caret trim", str7);
        const parts = str7.split(" ");
        const mapped = parts.map((arg0) => callback(arg0, self.options));
        const parts1 = mapped.join(" ").split(/\s+/);
        const mapped1 = parts1.map((arg0) => callback2(arg0, self.options));
        let found = mapped1;
        if (loose) {
          found = mapped1.filter((str) => {
            self(closure_1[7])("loose invalid filter", str, self.options);
            return str.match(self(closure_1[6]).safeRe[closure_0(undefined, closure_1[6]).t.COMPARATORLOOSE]);
          });
        }
        Range(closure_1[7])("range list", found);
        const _Map = Map;
        const map = new Map();
        const mapped2 = found.map((arg0) => {
          let tmp = self(closure_1[4]);
          tmp = new tmp(arg0, self.options);
          return tmp;
        });
        for (const item10139 of mapped2) {
          let iter = item10139;
          let tmp26 = closure_7;
          if (closure_7(item10139)) {
            let tmp30 = item10139;
            let items = [iter];
            obj3.return();
            return items;
          } else {
            let tmp27 = map;
            let tmp28 = item10139;
            let result = obj2.set(iter.value, iter);
            // continue
          }
        }
        let hasItem = obj2.size > 1;
        if (hasItem) {
          hasItem = obj2.has("");
        }
        if (hasItem) {
          obj2.delete("");
        }
        const tmp38 = callback(map.values());
        const result1 = store.set(text, tmp38);
        return tmp38;
      }
    }
  };
  items[4] = {
    key: "intersects",
    value: function intersects(arg0, arg1) {
      const Range = arg0;
      if (arg0 instanceof Range) {
        const self = this;
        return this.set.some((arg0) => {
          let someResult = callback(arg0, arg1);
          if (someResult) {
            someResult = arg0.set.some((arg0) => {
              let everyResult = callback(arg0, closure_1);
              if (everyResult) {
                everyResult = arg0.every((arg0) => arg0.every(() => { ... }));
              }
              return everyResult;
            });
            const set = arg0.set;
          }
          return someResult;
        });
      } else {
        const _TypeError = TypeError;
        const typeError = new TypeError("a Range is required");
        throw typeError;
      }
    }
  };
  items[5] = {
    key: "test",
    value: function test(arg0) {
      const self = this;
      let tmp = arg0;
      if (arg0) {
        if ("string" === typeof tmp) {
          const tmp5 = Range(closure_1[8]);
          const prototype = tmp5.prototype;
          tmp = new tmp5(tmp, self.options);
        }
        let num2 = 0;
        if (0 < self.set.length) {
          while (!callback4(self.set[num2], tmp, self.options)) {
            num2 = num2 + 1;
          }
          return true;
        }
        return false;
      } else {
        return false;
      }
    }
  };
  return callback(Range, items);
}();
