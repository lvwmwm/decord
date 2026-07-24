// Module ID: 12827
// Function ID: 99807
// Name: SemVer
// Dependencies: [6, 7, 12828, 12829, 12830, 12831, 12832]

// Module 12827 (SemVer)
import _classCallCheck from "compareIdentifiers";
import _defineProperties from "_defineProperties";


export default (() => {
  class SemVer {
    constructor(arg0, arg1) {
      self = this;
      tmp = outer1_2(this, SemVer);
      tmp2 = SemVer(outer1_1[2])(arg1);
      if (arg0 instanceof SemVer) {
        if (arg0.loose === tmp2.loose) {
          if (arg0.includePrerelease === tmp2.includePrerelease) {
            return arg0;
          }
        }
        version = arg0.version;
      } else {
        tmp3 = typeof arg0;
        str = "string";
        version = arg0;
        if ("string" !== tmp3) {
          tmp4 = globalThis;
          _TypeError = TypeError;
          _HermesInternal = HermesInternal;
          str2 = "Invalid version. Must be a string. Got type \"";
          str3 = "\".";
          prototype = TypeError.prototype;
          tmp5 = new.target;
          tmp6 = new.target;
          typeError = new TypeError("Invalid version. Must be a string. Got type \"" + tmp3 + "\".");
          tmp8 = typeError;
          throw typeError;
        }
      }
      if (version.length > SemVer(outer1_1[3]).MAX_LENGTH) {
        tmp34 = globalThis;
        _TypeError6 = TypeError;
        tmp35 = SemVer;
        tmp36 = outer1_1;
        _HermesInternal3 = HermesInternal;
        str12 = "version is longer than ";
        str13 = " characters";
        prototype6 = TypeError.prototype;
        tmp37 = new.target;
        tmp38 = new.target;
        typeError1 = new TypeError("version is longer than " + SemVer(outer1_1[3]).MAX_LENGTH + " characters");
        tmp40 = typeError1;
        throw typeError1;
      } else {
        tmp41 = SemVer;
        tmp42 = outer1_1;
        num2 = 4;
        str14 = "SemVer";
        tmp43 = SemVer(outer1_1[4])("SemVer", version, tmp2);
        self.options = tmp2;
        self.loose = tmp2.loose;
        self.includePrerelease = tmp2.includePrerelease;
        str15 = version.trim();
        tmp44 = SemVer;
        tmp45 = outer1_1;
        num3 = 5;
        safeRe = SemVer(outer1_1[5]).safeRe;
        t = SemVer(outer1_1[5]).t;
        if (tmp2.loose) {
          tmp9 = safeRe[t.LOOSE];
        } else {
          tmp9 = safeRe[t.FULL];
        }
        match = str15.match(tmp9);
        if (match) {
          self.raw = version;
          num = 1;
          self.major = +match[1];
          self.minor = +match[2];
          self.patch = +match[3];
          tmp16 = SemVer;
          tmp17 = outer1_1;
          if (self.major <= SemVer(outer1_1[3]).MAX_SAFE_INTEGER) {
            num4 = 0;
            if (self.major >= 0) {
              tmp46 = SemVer;
              tmp47 = outer1_1;
              if (self.minor <= SemVer(outer1_1[3]).MAX_SAFE_INTEGER) {
                if (self.minor >= 0) {
                  tmp48 = SemVer;
                  tmp49 = outer1_1;
                  if (self.patch <= SemVer(outer1_1[3]).MAX_SAFE_INTEGER) {
                    if (self.patch >= 0) {
                      if (match[4]) {
                        str5 = match[4];
                        str6 = ".";
                        parts = str5.split(".");
                        self.prerelease = parts.map((arg0) => {
                          if (obj.test(arg0)) {
                            if (+arg0 >= 0) {
                              if (tmp < SemVer(outer2_1[3]).MAX_SAFE_INTEGER) {
                                return tmp;
                              }
                            }
                          }
                          return arg0;
                        });
                      } else {
                        self.prerelease = [];
                      }
                      if (match[5]) {
                        str7 = match[5];
                        str8 = ".";
                        parts1 = str7.split(".");
                      } else {
                        parts1 = [];
                      }
                      self.build = parts1;
                      formatResult = self.format();
                      return;
                    }
                  }
                  tmp19 = globalThis;
                  _TypeError3 = TypeError;
                  prototype3 = TypeError.prototype;
                  tmp20 = new.target;
                  str9 = "Invalid patch version";
                  tmp21 = new.target;
                  typeError2 = new TypeError("Invalid patch version");
                  tmp23 = typeError2;
                  throw typeError2;
                }
              }
              tmp24 = globalThis;
              _TypeError4 = TypeError;
              prototype4 = TypeError.prototype;
              tmp25 = new.target;
              str10 = "Invalid minor version";
              tmp26 = new.target;
              typeError3 = new TypeError("Invalid minor version");
              tmp28 = typeError3;
              throw typeError3;
            }
          }
          tmp29 = globalThis;
          _TypeError5 = TypeError;
          prototype5 = TypeError.prototype;
          tmp30 = new.target;
          str11 = "Invalid major version";
          tmp31 = new.target;
          typeError4 = new TypeError("Invalid major version");
          tmp33 = typeError4;
          throw typeError4;
        } else {
          tmp11 = globalThis;
          _TypeError2 = TypeError;
          _HermesInternal2 = HermesInternal;
          str4 = "Invalid Version: ";
          prototype2 = TypeError.prototype;
          tmp12 = new.target;
          tmp13 = new.target;
          typeError5 = new TypeError("Invalid Version: " + version);
          tmp15 = typeError5;
          throw typeError5;
        }
      }
    }
  }
  let obj = {
    key: "format",
    value: function format() {
      let prerelease;
      let version;
      const self = this;
      this.version = "" + this.major + "." + this.minor + "." + this.patch;
      if (this.prerelease.length) {
        ({ prerelease, version } = self);
        const _HermesInternal = HermesInternal;
        self.version = version + "-" + prerelease.join(".");
      }
      return self.version;
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "toString",
    value: function toString() {
      return this.version;
    }
  };
  items[1] = obj;
  obj = {
    key: "compare",
    value: function compare(loose) {
      const self = this;
      SemVer(outer1_1[4])("SemVer.compare", this.version, this.options, loose);
      let tmp2 = loose;
      if (!(loose instanceof SemVer)) {
        if ("string" === typeof loose) {
          if (loose === self.version) {
            return 0;
          }
        }
        const prototype = SemVer.prototype;
        tmp2 = new SemVer(loose, self.options);
      }
      let num2 = 0;
      if (tmp2.version !== self.version) {
        num2 = self.compareMain(tmp2) || self.comparePre(tmp2);
        const tmp7 = self.compareMain(tmp2) || self.comparePre(tmp2);
      }
      return num2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "compareMain",
    value: function compareMain(loose) {
      const self = this;
      let tmp = loose;
      if (!(loose instanceof SemVer)) {
        const prototype = SemVer.prototype;
        tmp = new SemVer(loose, self.options);
      }
      let compareIdentifiersResult = SemVer(outer1_1[6]).compareIdentifiers(self.major, tmp.major);
      if (!compareIdentifiersResult) {
        compareIdentifiersResult = SemVer(outer1_1[6]).compareIdentifiers(self.minor, tmp.minor);
        const obj2 = SemVer(outer1_1[6]);
      }
      if (!compareIdentifiersResult) {
        compareIdentifiersResult = SemVer(outer1_1[6]).compareIdentifiers(self.patch, tmp.patch);
        const obj3 = SemVer(outer1_1[6]);
      }
      return compareIdentifiersResult;
    }
  };
  items[4] = {
    key: "comparePre",
    value: function comparePre(loose) {
      const self = this;
      let tmp = loose;
      if (!(loose instanceof SemVer)) {
        const prototype = SemVer.prototype;
        tmp = new SemVer(loose, self.options);
      }
      if (self.prerelease.length) {
        if (!tmp.prerelease.length) {
          return -1;
        }
      }
      if (!self.prerelease.length) {
        if (tmp.prerelease.length) {
          return 1;
        }
      }
      let num3 = 0;
      if (!self.prerelease.length) {
        num3 = 0;
        if (!tmp.prerelease.length) {
          return 0;
        }
      }
      while (true) {
        let tmp6 = self.prerelease[num3];
        let tmp7 = tmp.prerelease[num3];
        let tmp8 = SemVer;
        let tmp9 = outer1_1;
        let num4 = 4;
        let str = "prerelease compare";
        let tmp10 = num3;
        let tmp11 = tmp6;
        let tmp12 = tmp7;
        let tmp13 = SemVer(outer1_1[4])("prerelease compare", num3, tmp6, tmp7);
        let tmp14 = undefined === tmp6;
        let tmp15 = num3;
        if (tmp14) {
          if (undefined === tmp7) {
            break;
          }
        }
        if (undefined === tmp7) {
          let num7 = 1;
          return 1;
        } else if (tmp14) {
          let num6 = -1;
          return -1;
        } else if (tmp6 !== tmp7) {
          let tmp16 = SemVer;
          let tmp17 = outer1_1;
          let num5 = 6;
          let obj = SemVer(outer1_1[6]);
          return obj.compareIdentifiers(tmp6, tmp7);
        } else {
          num3 = num3 + 1;
        }
      }
      return 0;
    }
  };
  items[5] = {
    key: "compareBuild",
    value: function compareBuild(loose) {
      const self = this;
      let tmp = loose;
      if (!(loose instanceof SemVer)) {
        const prototype = SemVer.prototype;
        tmp = new SemVer(loose, self.options);
      }
      let num = 0;
      while (true) {
        let tmp6 = self.build[num];
        let tmp7 = tmp.build[num];
        let tmp8 = SemVer;
        let tmp9 = outer1_1;
        let str = "build compare";
        let tmp10 = num;
        let tmp11 = tmp6;
        let tmp12 = tmp7;
        let tmp13 = SemVer(outer1_1[4])("build compare", num, tmp6, tmp7);
        let tmp14 = undefined === tmp6;
        let tmp15 = num;
        if (tmp14) {
          if (undefined === tmp7) {
            break;
          }
        }
        if (undefined === tmp7) {
          let num4 = 1;
          return 1;
        } else if (tmp14) {
          let num3 = -1;
          return -1;
        } else if (tmp6 !== tmp7) {
          let tmp16 = SemVer;
          let tmp17 = outer1_1;
          let num2 = 6;
          let obj = SemVer(outer1_1[6]);
          return obj.compareIdentifiers(tmp6, tmp7);
        } else {
          num = num + 1;
        }
      }
      return 0;
    }
  };
  items[6] = {
    key: "inc",
    value: function inc(arg0, major2) {
      const self = this;
      if ("premajor" === arg0) {
        self.prerelease.length = 0;
        self.patch = 0;
        self.minor = 0;
        self.major = self.major + 1;
        self.inc("pre", major2, arg2);
      } else if ("preminor" === arg0) {
        self.prerelease.length = 0;
        self.patch = 0;
        self.minor = self.minor + 1;
        self.inc("pre", major2, arg2);
      } else if ("prepatch" === arg0) {
        self.prerelease.length = 0;
        self.inc("patch", major2, arg2);
        self.inc("pre", major2, arg2);
      } else if ("prerelease" === arg0) {
        if (0 === self.prerelease.length) {
          self.inc("patch", major2, arg2);
        }
        self.inc("pre", major2, arg2);
      } else if ("major" === arg0) {
        if (!tmp21) {
          self.major = self.major + 1;
        }
        self.minor = 0;
        self.patch = 0;
        self.prerelease = [];
        tmp21 = 0 === self.minor && 0 === self.patch && 0 !== self.prerelease.length;
      } else if ("minor" === arg0) {
        if (!tmp20) {
          self.minor = self.minor + 1;
        }
        self.patch = 0;
        self.prerelease = [];
        tmp20 = 0 === self.patch && 0 !== self.prerelease.length;
      } else if ("patch" === arg0) {
        if (0 === self.prerelease.length) {
          self.patch = self.patch + 1;
        }
        self.prerelease = [];
      } else if ("pre" === arg0) {
        const _Number = Number;
        let num2 = 0;
        if (Number(arg2)) {
          num2 = 1;
        }
        if (!major2) {
          if (false === arg2) {
            const _Error2 = Error;
            const error = new Error("invalid increment argument: identifier is empty");
            throw error;
          }
        }
        if (0 === self.prerelease.length) {
          const items = [num2];
          self.prerelease = items;
        } else {
          let diff = self.prerelease.length - 1;
          let tmp12 = diff;
          if (diff >= 0) {
            do {
              let num3 = diff;
              if ("number" === typeof self.prerelease[diff]) {
                let prerelease = self.prerelease;
                prerelease[diff] = prerelease[diff] + 1;
                num3 = -2;
              }
              diff = num3 - 1;
              tmp12 = diff;
            } while (diff >= 0);
          }
          if (-1 === tmp12) {
            const prerelease2 = self.prerelease;
            if (major2 === prerelease2.join(".")) {
              if (false === arg2) {
                const _Error3 = Error;
                const error1 = new Error("invalid increment argument: identifier already exists");
                throw error1;
              }
            }
            prerelease = self.prerelease;
            prerelease.push(num2);
          }
        }
        if (major2) {
          let items1 = [major2, num2];
          if (false === arg2) {
            const items2 = [major2];
            items1 = items2;
          }
          if (0 === obj.compareIdentifiers(self.prerelease[0], major2)) {
            const _isNaN = isNaN;
            if (isNaN(self.prerelease[1])) {
              self.prerelease = items1;
            }
          } else {
            self.prerelease = items1;
          }
          obj = SemVer(outer1_1[6]);
        }
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error2 = new Error("invalid increment argument: " + arg0);
        throw error2;
      }
      self.raw = self.format();
      if (self.build.length) {
        const build = self.build;
        const _HermesInternal2 = HermesInternal;
        self.raw = self.raw + "+" + build.join(".");
      }
      return self;
    }
  };
  return _defineProperties(SemVer, items);
})();
