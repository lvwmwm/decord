// Module ID: 3441
// Function ID: 26711
// Name: format
// Dependencies: [3391, 3442, 3209, 3443, 3454, 3372, 3213, 3210, 3455, 3214, 3456]
// Exports: default

// Module 3441 (format)
import isValid from "isValid";
import subMilliseconds from "subMilliseconds";
import _typeof from "_typeof";
import formatTimezoneShort from "formatTimezoneShort";
import dateLongFormatter from "dateLongFormatter";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";
import toInteger from "toInteger";
import requiredArgs from "requiredArgs";
import module_3455 from "module_3455";

const re11 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
const re12 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const re13 = /^'([^]*?)'?$/;
const re14 = /''/g;
const re15 = /[a-zA-Z]/;

export default function format(defaultResult1, arg1, locale) {
  const _require = defaultResult1;
  const dependencyMap = arg1;
  const isValid = locale;
  requiredArgs.default(2, arguments);
  const defaultOptions = _require(3214).getDefaultOptions();
  locale = undefined;
  if (null != locale) {
    locale = locale.locale;
  }
  if (null === locale) {
    locale = defaultOptions.locale;
  }
  if (null === locale) {
    locale = module_3455.default;
  }
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
  defaultResult1 = toInteger.default(num);
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
      const defaultResult2 = toInteger.default(num4);
      if (defaultResult2 >= 0) {
        if (defaultResult2 <= 6) {
          if (locale.localize) {
            if (locale.formatLong) {
              const defaultResult3 = _typeof.default(defaultResult1);
              if (isValid.default(defaultResult3)) {
                _typeof = locale.default(defaultResult3, getTimezoneOffsetInMilliseconds.default(defaultResult3));
                const obj = { firstWeekContainsDate: defaultResult1, weekStartsOn: defaultResult2, locale, _originalDate: defaultResult3 };
                let match = str.match(closure_12);
                const mapped = match.map((arg0) => {
                  const first = arg0[0];
                  if ("p" === first) {
                    let tmp2 = outer1_6.default[first](arg0, locale.formatLong);
                  } else {
                    tmp2 = arg0;
                  }
                  return tmp2;
                });
                const match1 = mapped.join("").match(closure_11);
                const mapped1 = match1.map((arg0) => {
                  let str = arg0;
                  if ("''" === arg0) {
                    return "'";
                  } else if ("'" === str[0]) {
                    const match = str.match(outer1_13);
                    if (match) {
                      str = match[1].replace(outer1_14, "'");
                      const str4 = match[1];
                    }
                    return str;
                  } else if (obj.default[str6]) {
                    let useAdditionalWeekYearTokens = null != locale;
                    if (useAdditionalWeekYearTokens) {
                      useAdditionalWeekYearTokens = locale.useAdditionalWeekYearTokens;
                    }
                    if (!useAdditionalWeekYearTokens) {
                      useAdditionalWeekYearTokens = !defaultResult1(3456).isProtectedWeekYearToken(str);
                    }
                    if (!useAdditionalWeekYearTokens) {
                      const _String = String;
                      defaultResult1(3456).throwProtectedError(str, dependencyMap, String(defaultResult1));
                    }
                    let useAdditionalDayOfYearTokens = null != locale;
                    if (useAdditionalDayOfYearTokens) {
                      useAdditionalDayOfYearTokens = locale.useAdditionalDayOfYearTokens;
                    }
                    if (!useAdditionalDayOfYearTokens) {
                      useAdditionalDayOfYearTokens = !defaultResult1(3456).isProtectedDayOfYearToken(str);
                    }
                    if (!useAdditionalDayOfYearTokens) {
                      const _String2 = String;
                      defaultResult1(3456).throwProtectedError(str, dependencyMap, String(defaultResult1));
                    }
                    return tmp36(closure_4, str, locale.localize, obj);
                  } else if (str6.match(outer1_15)) {
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
                let rangeError = new RangeError("Invalid time value");
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
      let _RangeError = RangeError;
      const rangeError3 = new RangeError("weekStartsOn must be between 0 and 6 inclusively");
      throw rangeError3;
    }
  }
  const rangeError4 = new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  throw rangeError4;
};
export default exports.default;
