// Module ID: 12681
// Function ID: 97343
// Name: Comparator
// Dependencies: []

// Module 12681 (Comparator)
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = Symbol("SemVer ANY");

export default () => {
  class Comparator {
    constructor(arg0, arg1) {
      self = this;
      tmp = closure_2(this, Comparator);
      tmp2 = Comparator(closure_1[2])(arg1);
      str = arg0;
      if (arg0 instanceof Comparator) {
        if (arg0.loose === tmp2.loose) {
          return arg0;
        } else {
          str = arg0.value;
        }
      }
      str2 = str.trim();
      parts = str2.split(/\s+/);
      joined = parts.join(" ");
      tmp4 = Comparator(closure_1[3])("comparator", joined, tmp2);
      self.options = tmp2;
      self.loose = tmp2.loose;
      parsed = self.parse(joined);
      if (self.semver === closure_4) {
        str3 = "";
        self.value = "";
      } else {
        self.value = self.operator + self.semver.version;
      }
      tmp6 = Comparator(closure_1[3])("comp", self);
      return;
    }
  }
  const require = Comparator;
  let obj = {
    key: "parse",
    value: function parse(str) {
      const self = this;
      const safeRe = Comparator(closure_1[4]).safeRe;
      const t = Comparator(closure_1[4]).t;
      if (this.options.loose) {
        let tmp = safeRe[t.COMPARATORLOOSE];
      } else {
        tmp = safeRe[t.COMPARATOR];
      }
      const match = str.match(tmp);
      if (match) {
        let str3 = "";
        if (undefined !== match[1]) {
          str3 = match[1];
        }
        self.operator = str3;
        if ("=" === self.operator) {
          self.operator = "";
        }
        if (match[2]) {
          let tmp11 = Comparator(closure_1[5]);
          const prototype2 = tmp11.prototype;
          tmp11 = new tmp11(match[2], self.options.loose);
          self.semver = tmp11;
        } else {
          self.semver = closure_4;
        }
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError("Invalid comparator: " + str);
        throw typeError;
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "toString",
    value: function toString() {
      return this.value;
    }
  };
  items[1] = obj;
  obj = {
    key: "test",
    value: function test(arg0) {
      const self = this;
      let tmp = arg0;
      Comparator(closure_1[3])("Comparator.test", arg0, this.options.loose);
      if (this.semver !== closure_4) {
        if (tmp !== closure_4) {
          if ("string" === typeof tmp) {
            const tmp6 = Comparator(closure_1[5]);
            const prototype = tmp6.prototype;
            tmp = new tmp6(tmp, self.options);
          }
          return Comparator(closure_1[6])(tmp, self.operator, self.semver, self.options);
        }
      }
      return true;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "intersects",
    value: function intersects(value) {
      const self = this;
      if (value instanceof Comparator) {
        if ("" === self.operator) {
          let isMatch = "" === self.value;
          if (!isMatch) {
            let tmp38 = Comparator(closure_1[7]);
            const prototype3 = tmp38.prototype;
            tmp38 = new tmp38(value.value, arg1);
            isMatch = tmp38.test(self.value);
          }
          let tmp7 = isMatch;
        } else if ("" === value.operator) {
          let isMatch1 = "" === value.value;
          if (!isMatch1) {
            let tmp30 = Comparator(closure_1[7]);
            const prototype2 = tmp30.prototype;
            tmp30 = new tmp30(self.value, arg1);
            isMatch1 = tmp30.test(value.semver);
          }
          tmp7 = isMatch1;
        } else {
          const tmp45 = Comparator(closure_1[2])(arg1);
          tmp7 = !tmp45.includePrerelease;
          if (!tmp7) {
            tmp7 = "<0.0.0-0" !== self.value && "<0.0.0-0" !== value.value;
            const tmp6 = "<0.0.0-0" !== self.value && "<0.0.0-0" !== value.value;
          }
          if (tmp7) {
            let tmp8 = !tmp45.includePrerelease;
            if (tmp8) {
              value = self.value;
              let startsWithResult = value.startsWith("<0.0.0");
              if (!startsWithResult) {
                value = value.value;
                startsWithResult = value.startsWith("<0.0.0");
              }
              tmp8 = startsWithResult;
            }
            let tmp10 = !tmp8;
            if (tmp10) {
              const operator = self.operator;
              let tmp11 = !operator.startsWith(">");
              if (!tmp11) {
                const operator2 = value.operator;
                tmp11 = !operator2.startsWith(">");
              }
              let tmp12 = !tmp11;
              if (tmp11) {
                const operator3 = self.operator;
                let tmp13 = !operator3.startsWith("<");
                if (!tmp13) {
                  const operator4 = value.operator;
                  tmp13 = !operator4.startsWith("<");
                }
                let tmp14 = !tmp13;
                if (tmp13) {
                  let tmp15 = self.semver.version !== value.semver.version;
                  if (!tmp15) {
                    const operator5 = self.operator;
                    tmp15 = !operator5.includes("=");
                  }
                  if (!tmp15) {
                    const operator6 = value.operator;
                    tmp15 = !operator6.includes("=");
                  }
                  let tmp16 = !tmp15;
                  if (tmp15) {
                    let startsWithResult1 = Comparator(closure_1[6])(self.semver, "<", value.semver, tmp45);
                    if (startsWithResult1) {
                      const operator7 = self.operator;
                      startsWithResult1 = operator7.startsWith(">");
                    }
                    if (startsWithResult1) {
                      const operator8 = value.operator;
                      startsWithResult1 = operator8.startsWith("<");
                    }
                    let tmp22 = !tmp21;
                    if (!startsWithResult1) {
                      let startsWithResult2 = Comparator(closure_1[6])(self.semver, ">", value.semver, tmp45);
                      if (startsWithResult2) {
                        const operator9 = self.operator;
                        startsWithResult2 = operator9.startsWith("<");
                      }
                      if (startsWithResult2) {
                        const operator10 = value.operator;
                        startsWithResult2 = operator10.startsWith(">");
                      }
                      tmp22 = startsWithResult2;
                    }
                    tmp16 = tmp22;
                  }
                  tmp14 = tmp16;
                }
                tmp12 = tmp14;
              }
              tmp10 = tmp12;
            }
            tmp7 = tmp10;
          }
        }
        return tmp7;
      } else {
        const _TypeError = TypeError;
        const typeError = new TypeError("a Comparator is required");
        throw typeError;
      }
    }
  };
  const items1 = [
    {
      key: "ANY",
      get() {
        return closure_4;
      }
    }
  ];
  return callback(Comparator, items, items1);
}();
