// Module ID: 3605
// Function ID: 27812
// Name: parseDateUnit
// Dependencies: [3210, 3213, 3388]
// Exports: default

// Module 3605 (parseDateUnit)
import requiredArgs from "requiredArgs";
import toInteger from "toInteger";

function parseDateUnit(replaced) {
  let num = 1;
  if (replaced) {
    const _parseInt = parseInt;
    num = parseInt(replaced);
  }
  return num;
}
function parseTimeUnit(str) {
  let num = str;
  if (str) {
    const _parseFloat = parseFloat;
    num = parseFloat(str.replace(",", "."));
  }
  if (!num) {
    num = 0;
  }
  return num;
}
function isLeapYearIndex(arg0) {
  let tmp = arg0 % 400 === 0;
  if (!tmp) {
    let tmp2 = arg0 % 4 === 0;
    if (tmp2) {
      tmp2 = arg0 % 100 !== 0;
    }
    tmp = tmp2;
  }
  return tmp;
}
let closure_4 = { dateTimeDelimiter: /[T ]/, timeZoneDelimiter: /[Z ]/i, timezone: /([Z+-].*)$/ };
const re5 = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
const re6 = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
const re7 = /^([+-])(\d{2})(?::?(\d{2}))?$/;
let closure_8 = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export default function parseISO(offeredAt) {
  let restDateString;
  let year;
  restDateString = 1;
  requiredArgs.default(1, arguments);
  let num = null;
  let additionalDigits;
  if (null != arg1) {
    additionalDigits = arg1.additionalDigits;
  }
  let num2 = 2;
  if (num !== additionalDigits) {
    num2 = 2;
    if (undefined !== additionalDigits) {
      num2 = additionalDigits;
    }
  }
  const defaultResult1 = toInteger.default(num2);
  if (2 !== defaultResult1) {
    if (restDateString !== defaultResult1) {
      if (0 !== defaultResult1) {
        const _RangeError = RangeError;
        const rangeError = new RangeError("additionalDigits must be 0, 1 or 2");
        throw rangeError;
      }
    }
  }
  if ("string" !== typeof offeredAt) {
    const _Object = Object;
    if ("[object String]" !== toString.call(offeredAt)) {
      const _Date6 = Date;
      const _NaN5 = NaN;
      let date = new Date(NaN);
      return date;
    }
  }
  let obj = {};
  const parts = offeredAt.split(closure_4.dateTimeDelimiter);
  if (parts.length <= 2) {
    const first = parts[0];
    if (obj6.test(parts[0])) {
      let str2 = first;
    } else {
      obj.date = first;
      str2 = parts[restDateString];
      const timeZoneDelimiter = closure_4.timeZoneDelimiter;
      if (timeZoneDelimiter.test(obj.date)) {
        obj.date = offeredAt.split(closure_4.timeZoneDelimiter)[0];
        str2 = offeredAt.substr(obj.date.length, offeredAt.length);
      }
    }
    if (str2) {
      const timezone = closure_4.timezone;
      let match = timezone.exec(str2);
      if (match) {
        obj.time = str2.replace(match[restDateString], "");
        obj.timezone = match[restDateString];
      } else {
        obj.time = str2;
      }
    }
    obj6 = /:/;
  }
  if (!obj.date) {
    if (undefined) {
      const _isNaN = isNaN;
      if (!isNaN(undefined.getTime())) {
        const time = undefined.getTime();
        let num5 = 0;
        if (obj.time) {
          const tmp19 = (function parseTime(time) {
            const match = time.match(outer1_6);
            if (match) {
              const tmp4 = outer1_10(match[1]);
              const tmp5 = outer1_10(match[2]);
              const tmp6 = outer1_10(match[3]);
              if (24 === tmp4) {
                let tmp7 = 0 === tmp5 && 0 === tmp6;
                const tmp8 = 0 === tmp5 && 0 === tmp6;
              } else {
                tmp7 = tmp6 >= 0;
                if (tmp7) {
                  tmp7 = tmp6 < 60;
                }
                if (tmp7) {
                  tmp7 = tmp5 >= 0;
                }
                if (tmp7) {
                  tmp7 = tmp5 < 60;
                }
                if (tmp7) {
                  tmp7 = tmp4 >= 0;
                }
                if (tmp7) {
                  tmp7 = tmp4 < 25;
                }
              }
              if (tmp7) {
                const result = tmp4 * outer1_0(outer1_1[2]).millisecondsInHour;
                return result + tmp5 * outer1_0(outer1_1[2]).millisecondsInMinute + 1000 * tmp6;
              } else {
                const _NaN2 = NaN;
                return NaN;
              }
            } else {
              const _NaN = NaN;
              return NaN;
            }
          })(obj.time);
          const _isNaN2 = isNaN;
          num5 = tmp19;
          if (isNaN(tmp19)) {
            let _Date4 = Date;
            let _NaN3 = NaN;
            let date1 = new Date(NaN);
            return date1;
          }
        }
        if (obj.timezone) {
          const tmp34 = (function parseTimezone(timezone) {
            if ("Z" === timezone) {
              return 0;
            } else {
              const match = timezone.match(outer1_7);
              if (match) {
                let num2 = 1;
                if ("+" === match[1]) {
                  num2 = -1;
                }
                const _parseInt = parseInt;
                let num5 = match[3];
                const parsed = parseInt(match[2]);
                if (num5) {
                  const _parseInt2 = parseInt;
                  num5 = parseInt(match[3]);
                }
                if (!num5) {
                  num5 = 0;
                }
                let tmp3 = num5 >= 0;
                if (tmp3) {
                  tmp3 = num5 <= 59;
                }
                if (tmp3) {
                  const result = parsed * outer1_0(outer1_1[2]).millisecondsInHour;
                  return num2 * (result + num5 * outer1_0(outer1_1[2]).millisecondsInMinute);
                } else {
                  const _NaN = NaN;
                  return NaN;
                }
              } else {
                return 0;
              }
            }
          })(obj.timezone);
          const _isNaN3 = isNaN;
          let _Date3 = Date;
          if (isNaN(tmp34)) {
            let _NaN2 = NaN;
            let prototype5 = _Date3.prototype;
            _Date3 = new _Date3(NaN);
            return _Date3;
          } else {
            let prototype4 = _Date3.prototype;
            const _Date31 = new _Date3(time + num5 + tmp34);
            return _Date31;
          }
        } else {
          let _Date = Date;
          let date2 = new Date(time + num5);
          let _Date2 = Date;
          let date3 = new Date(0);
          const uTCFullYear = date2.getUTCFullYear();
          const uTCMonth = date2.getUTCMonth();
          date3.setFullYear(uTCFullYear, uTCMonth, date2.getUTCDate());
          const uTCHours = date2.getUTCHours();
          const uTCMinutes = date2.getUTCMinutes();
          const uTCSeconds = date2.getUTCSeconds();
          date3.setHours(uTCHours, uTCMinutes, uTCSeconds, date2.getUTCMilliseconds());
          return date3;
        }
      }
    }
    let _Date5 = Date;
    let _NaN4 = NaN;
    const date4 = new Date(NaN);
    return date4;
  } else {
    year = globalThis;
    const _RegExp = RegExp;
    const regExp = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + defaultResult1) + "})|(\\d{2}|[+-]\\d{" + (2 + defaultResult1) + "})$)");
    const match1 = str4.match(regExp);
    if (match1) {
      let parsed = null;
      if (match1[restDateString]) {
        parsed = year.parseInt(match1[restDateString]);
      }
      let parsed1 = null;
      if (match1[2]) {
        parsed1 = year.parseInt(match1[2]);
      }
      obj = {};
      if (num !== parsed1) {
        num = 100;
        parsed = 100 * parsed1;
      }
      obj.year = parsed;
      let arr2 = match1[restDateString];
      if (!arr2) {
        arr2 = match1[2];
      }
      obj.restDateString = str4.slice(arr2.length);
    } else {
      obj = {};
      let _NaN = NaN;
      obj.year = NaN;
      obj.restDateString = "";
    }
    ({ restDateString, year } = obj);
    (function parseDate(restDateString, year) {
      if (null === year) {
        const _Date5 = Date;
        const _NaN4 = NaN;
        const date = new Date(NaN);
        return date;
      } else {
        const match = restDateString.match(outer1_5);
        if (match) {
          const tmp8 = outer1_9(match[1]);
          const diff = outer1_9(match[2]) - 1;
          const tmp10 = outer1_9(match[3]);
          const tmp11 = outer1_9(match[4]);
          const diff1 = outer1_9(match[5]) - 1;
          if (tmp6) {
            const _Date3 = Date;
            const date1 = new Date(0);
            let tmp29 = diff >= 0;
            if (tmp29) {
              tmp29 = diff <= 11;
            }
            if (tmp29) {
              tmp29 = tmp10 >= 1;
            }
            if (tmp29) {
              let tmp31 = outer1_8[diff];
              if (!tmp31) {
                let num15 = 28;
                if (outer1_11(year)) {
                  num15 = 29;
                }
                tmp31 = num15;
              }
              tmp29 = tmp10 <= tmp31;
            }
            if (tmp29) {
              let tmp33 = tmp8 >= 1;
              if (tmp33) {
                let num16 = 365;
                if (outer1_11(year)) {
                  num16 = 366;
                }
                tmp33 = tmp8 <= num16;
              }
              if (tmp33) {
                const _Math = Math;
                date1.setUTCFullYear(year, diff, Math.max(tmp8, tmp10));
                let date2 = date1;
              }
              return date2;
            }
            const _Date4 = Date;
            const _NaN3 = NaN;
            date2 = new Date(NaN);
          } else {
            let tmp13 = tmp11 >= 1;
            if (tmp13) {
              tmp13 = tmp11 <= 53;
            }
            if (tmp13) {
              tmp13 = diff1 >= 0;
            }
            if (tmp13) {
              tmp13 = diff1 <= 6;
            }
            let _Date2 = Date;
            if (tmp13) {
              const prototype3 = _Date2.prototype;
              _Date2 = new _Date2(0);
              _Date2.setUTCFullYear(year, 0, 4);
              const diff2 = 7 * (tmp11 - 1) + diff1 + 1 - (_Date2.getUTCDay() || 7);
              _Date2.setUTCDate(_Date2.getUTCDate() + diff2);
              let _Date21 = _Date2;
              const tmp22 = _Date2.getUTCDay() || 7;
            } else {
              const _NaN2 = NaN;
              const prototype2 = _Date2.prototype;
              _Date21 = new _Date2(NaN);
            }
            return _Date21;
          }
          tmp6 = !match[4];
        } else {
          const _Date = Date;
          const _NaN = NaN;
          const date3 = new Date(NaN);
          return date3;
        }
      }
    })(restDateString, year);
  }
};
export default exports.default;
