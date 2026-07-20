// Module ID: 3439
// Function ID: 26700
// Name: format
// Dependencies: []
// Exports: default

// Module 3439 (format)
let closure_2 = _interopRequireDefault(require(dependencyMap[0]));
let closure_3 = _interopRequireDefault(require(dependencyMap[1]));
let closure_4 = _interopRequireDefault(require(dependencyMap[2]));
let closure_5 = _interopRequireDefault(require(dependencyMap[3]));
let closure_6 = _interopRequireDefault(require(dependencyMap[4]));
let closure_7 = _interopRequireDefault(require(dependencyMap[5]));
let closure_8 = _interopRequireDefault(require(dependencyMap[6]));
let closure_9 = _interopRequireDefault(require(dependencyMap[7]));
let closure_10 = _interopRequireDefault(require(dependencyMap[8]));
let closure_11 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
let closure_12 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
let closure_13 = /^'([^]*?)'?$/;
let closure_14 = /''/g;
let closure_15 = /[a-zA-Z]/;

export default function format(defaultResult1, arg1, locale) {
  const require = defaultResult1;
  const dependencyMap = arg1;
  let closure_2 = locale;
  closure_9.default(2, arguments);
  const defaultOptions = require(dependencyMap[9]).getDefaultOptions();
  locale = undefined;
  if (null != locale) {
    locale = locale.locale;
  }
  if (null === locale) {
    locale = defaultOptions.locale;
  }
  if (null === locale) {
    locale = mod.default;
  }
  let closure_3 = locale;
  let prop;
  if (null != locale) {
    prop = locale.firstWeekContainsDate;
  }
  if (null === prop) {
    let prop1;
    if (null != locale) {
      locale = locale.locale;
      if (null !== locale) {
        if (undefined !== locale) {
          const options = locale.options;
          if (null !== options) {
            if (undefined !== options) {
              prop1 = options.firstWeekContainsDate;
            }
          }
        }
      }
    }
    prop = prop1;
  }
  if (null === prop) {
    prop = defaultOptions.firstWeekContainsDate;
  }
  if (null === prop) {
    const locale2 = defaultOptions.locale;
    let prop2;
    if (null !== locale2) {
      if (undefined !== locale2) {
        const options2 = locale2.options;
        if (null !== options2) {
          if (undefined !== options2) {
            prop2 = options2.firstWeekContainsDate;
          }
        }
      }
    }
    prop = prop2;
  }
  let num = 1;
  if (null !== prop) {
    num = 1;
    if (undefined !== prop) {
      num = prop;
    }
  }
  defaultResult1 = closure_8.default(num);
  if (defaultResult1 >= 1) {
    if (defaultResult1 <= 7) {
      let weekStartsOn;
      if (null != locale) {
        weekStartsOn = locale.weekStartsOn;
      }
      if (null === weekStartsOn) {
        let weekStartsOn1;
        if (null != locale) {
          const locale3 = locale.locale;
          if (null !== locale3) {
            if (undefined !== locale3) {
              const options3 = locale3.options;
              if (null !== options3) {
                if (undefined !== options3) {
                  weekStartsOn1 = options3.weekStartsOn;
                }
              }
            }
          }
        }
        weekStartsOn = weekStartsOn1;
      }
      if (null === weekStartsOn) {
        weekStartsOn = defaultOptions.weekStartsOn;
      }
      if (null === weekStartsOn) {
        const locale4 = defaultOptions.locale;
        let weekStartsOn2;
        if (null !== locale4) {
          if (undefined !== locale4) {
            const options4 = locale4.options;
            if (null !== options4) {
              if (undefined !== options4) {
                weekStartsOn2 = options4.weekStartsOn;
              }
            }
          }
        }
        weekStartsOn = weekStartsOn2;
      }
      let num4 = 0;
      if (null !== weekStartsOn) {
        num4 = 0;
        if (undefined !== weekStartsOn) {
          num4 = weekStartsOn;
        }
      }
      const defaultResult2 = closure_8.default(num4);
      if (defaultResult2 >= 0) {
        if (defaultResult2 <= 6) {
          if (locale.localize) {
            if (locale.formatLong) {
              const defaultResult3 = closure_4.default(defaultResult1);
              if (closure_2.default(defaultResult3)) {
                closure_4 = closure_3.default(defaultResult3, closure_7.default(defaultResult3));
                const obj = { firstWeekContainsDate: defaultResult1, weekStartsOn: defaultResult2, locale, _originalDate: defaultResult3 };
                let closure_5 = obj;
                const match = str.match(closure_12);
                const mapped = match.map((arg0) => {
                  const first = arg0[0];
                  if ("p" === first) {
                    let tmp2 = mod.default[first](arg0, locale.formatLong);
                  } else {
                    tmp2 = arg0;
                  }
                  return tmp2;
                });
                const match1 = mapped.join("").match(closure_11);
                const mapped1 = match1.map((arg0, arg1, self) => {
                  let str = arg0;
                  if ("''" === arg0) {
                    return "'";
                  } else if ("'" === str[0]) {
                    const match = str.match(closure_13);
                    if (match) {
                      str = match[1].replace(closure_14, "'");
                      const str4 = match[1];
                    }
                    return str;
                  } else if (obj.default[str6]) {
                    let useAdditionalWeekYearTokens = null != self;
                    if (useAdditionalWeekYearTokens) {
                      useAdditionalWeekYearTokens = self.useAdditionalWeekYearTokens;
                    }
                    if (!useAdditionalWeekYearTokens) {
                      useAdditionalWeekYearTokens = !arg0(arg1[10]).isProtectedWeekYearToken(str);
                    }
                    if (!useAdditionalWeekYearTokens) {
                      const _String = String;
                      arg0(arg1[10]).throwProtectedError(str, arg1, String(arg0));
                    }
                    let useAdditionalDayOfYearTokens = null != self;
                    if (useAdditionalDayOfYearTokens) {
                      useAdditionalDayOfYearTokens = self.useAdditionalDayOfYearTokens;
                    }
                    if (!useAdditionalDayOfYearTokens) {
                      useAdditionalDayOfYearTokens = !arg0(arg1[10]).isProtectedDayOfYearToken(str);
                    }
                    if (!useAdditionalDayOfYearTokens) {
                      const _String2 = String;
                      arg0(arg1[10]).throwProtectedError(str, arg1, String(arg0));
                    }
                    return tmp36(closure_4, str, locale.localize, obj);
                  } else if (str6.match(closure_15)) {
                    const _RangeError = RangeError;
                    const rangeError = new RangeError("Format string contains an unescaped latin alphabet character `" + str6 + "`");
                    throw rangeError;
                  } else {
                    return str;
                  }
                });
                return mapped1.join("");
              } else {
                const _RangeError4 = RangeError;
                const rangeError = new RangeError("Invalid time value");
                throw rangeError;
              }
            } else {
              const _RangeError3 = RangeError;
              const rangeError1 = new RangeError("locale must contain formatLong property");
              throw rangeError1;
            }
          } else {
            const _RangeError2 = RangeError;
            const rangeError2 = new RangeError("locale must contain localize property");
            throw rangeError2;
          }
        }
      }
      const _RangeError = RangeError;
      const rangeError3 = new RangeError("weekStartsOn must be between 0 and 6 inclusively");
      throw rangeError3;
    }
  }
  const rangeError4 = new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  throw rangeError4;
};
export default exports.default;
