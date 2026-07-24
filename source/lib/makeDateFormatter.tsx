// Module ID: 3819
// Function ID: 31722
// Name: makeLongFormatter
// Dependencies: [3803, 1282, 3817, 3820, 3712, 2]
// Exports: default

// Module 3819 (makeLongFormatter)
function makeLongFormatter(arg0) {
  let str = "full";
  let str2 = "short";
  if ("LLLL" !== arg0) {
    str = "long";
    str2 = "short";
    if ("LLL" !== arg0) {
      str = "long";
      if ("LL" !== arg0) {
        str = "short";
        if ("L" !== arg0) {
          str2 = "short";
          if ("LT" !== arg0) {
            str2 = "medium";
            if ("LTS" !== arg0) {
              str = "short";
              str2 = "medium";
              if ("L LT" === arg0) {
                str = "short";
                str2 = "short";
              }
            }
          }
        }
      }
    }
  }
  const obj = { dateStyle: str, timeStyle: str2 };
  const TimestampHourCycle = require(3803) /* explicitContentFromProto */.TimestampHourCycle;
  const setting = TimestampHourCycle.getSetting();
  if (setting !== require(1282) /* _callSuper */.TimestampHourCycle.AUTO) {
    if (obj3.supportsSystemDateFormatter()) {
      if (require(1282) /* _callSuper */.TimestampHourCycle.H12 === setting) {
        obj.hourCycle = "h12";
      } else if (require(1282) /* _callSuper */.TimestampHourCycle.H23 === setting) {
        obj.hourCycle = "h23";
      }
    }
    obj3 = require(3817) /* __DiscordCreateDateFormatter */;
  }
  return require(3820) /* makeIntlFormatter */.makeFormatter(obj);
}
function convertMomentValue(day, months) {
  let closure_0 = day;
  let format = months;
  if ("function" === typeof months) {
    const dependencyMap = months.bind(format(3712).localeData());
    return (arg0, arg1) => {
      let closure_0 = arg0;
      return callback({ [closure_0]: () => closure_0 }, arg1);
    };
  } else {
    const _Array = Array;
    format = months;
    if (!Array.isArray(months)) {
      format = months.format;
    }
    return (arg0) => format[arg0];
  }
}
function convertMomentOrdinal(ordinal) {
  let fn = ordinal;
  let closure_0 = ordinal;
  if ("string" === typeof ordinal) {
    fn = (arg0) => ordinal.replace("%d", "" + arg0);
  }
  return fn;
}
function defaultMeridiem(arg0, arg1, arg2) {
  if (arg0 < 12) {
    let str2 = "AM";
    if (arg2) {
      str2 = "am";
    }
    let str = str2;
  } else {
    str = "PM";
    if (arg2) {
      str = "pm";
    }
  }
  return str;
}
function getLocaleData() {
  let longDateFormat;
  let meridiem;
  let months;
  let monthsShort;
  let ordinal;
  let week;
  let weekdays;
  let weekdaysMin;
  let weekdaysShort;
  let obj = importDefault(3712);
  const _config = obj.localeData()._config;
  ({ meridiem, months, monthsShort, weekdays, weekdaysShort, weekdaysMin } = _config);
  if (undefined === meridiem) {
    meridiem = defaultMeridiem;
  }
  ({ week, ordinal, longDateFormat } = _config);
  if (undefined === week) {
    week = { dow: 0, doy: 6 };
  }
  obj = { months: convertMomentValue("month", months), monthsShort: convertMomentValue("month", monthsShort), weekdays: convertMomentValue("day", weekdays), weekdaysShort: convertMomentValue("day", weekdaysShort), weekdaysMin: convertMomentValue("day", weekdaysMin), meridiem, ordinal: convertMomentOrdinal(ordinal), longDateFormat, longFormatters: [], week };
  return obj;
}
let result = require("__DiscordCreateDateFormatter").fileFinishedImporting("lib/makeDateFormatter.tsx");

export default function makeFormatter(arg0, addResult) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let _require;
  let items;
  let arr;
  let makeLongFormatter;
  function add(_date) {
    items.push(`(${_date})`);
  }
  function nxt(length) {

  }
  if (null == addResult) {
    addResult = getLocaleData();
  }
  _require = addResult;
  let result = undefined === addResult && !flag;
  if (result) {
    result = undefined !== _require(arr[2]).makeFormatter;
  }
  if (result) {
    let obj = _require(arr[2]);
    result = obj.supportsSystemDateFormatter();
  }
  arr = arg0;
  if (!result) {
    arr = (function convertLongDateFormat(str, addResult) {
      let closure_0 = str;
      let closure_1 = addResult;
      return str.replace(/L[L|T|S]{0,3}/g, (arr) => {
        if (obj.test(arr)) {
          let LLLL = addResult.longDateFormat.LLLL;
        } else {
          if (obj2.test(arr)) {
            LLLL = addResult.longDateFormat.LLL + arr.slice(3);
          } else {
            if (obj3.test(arr)) {
              LLLL = addResult.longDateFormat.LL + arr.slice(2);
            } else {
              if (obj4.test(arr)) {
                LLLL = addResult.longDateFormat.LTS + arr.slice(3);
              } else {
                if (obj5.test(arr)) {
                  LLLL = addResult.longDateFormat.LT + arr.slice(2);
                } else {
                  LLLL = arr;
                  if (obj6.test(arr)) {
                    LLLL = arr;
                    if ("[" !== "["[arg1 - 1]) {
                      LLLL = addResult.longDateFormat.L + arr.slice(1);
                    }
                  }
                  obj6 = /^L/;
                }
                obj5 = /^LT/;
              }
              obj4 = /^LTS/;
            }
            obj3 = /^LL/;
          }
          obj2 = /^LLL/;
        }
        return LLLL;
      });
    })(arg0, addResult);
  }
  items = [];
  obj = { month: false, dayOfYear: false, date: false, day: false, week: false, isoweek: false, year: false, hour: false, minutes: false, seconds: false, millis: false, offset: false };
  if (arr.length > 0) {
    while (true) {
      let tmp13 = arr;
      let charAtResult = arr.charAt(0);
      if ("M" === charAtResult) {
        obj.month = true;
        let obj34 = /^MMMM/;
        addResult = arr;
        if (obj34.test(arr)) {
          let _HermesInternal7 = HermesInternal;
          addResult = add("localeData.months(_month, \"" + arr + "\")");
          addResult = nxt(4);
          let tmp18 = tmp8;
          let tmp19 = tmp9;
          let tmp20 = tmp10;
          let tmp21 = tmp11;
          let tmp22 = tmp12;
        } else {
          let obj35 = /^MMM/;
          addResult = arr;
          if (obj35.test(arr)) {
            let _HermesInternal6 = HermesInternal;
            addResult = add("localeData.monthsShort(_month, \"" + arr + "\")");
            addResult = nxt(3);
            tmp18 = tmp8;
            tmp19 = tmp9;
            tmp20 = tmp10;
            tmp21 = tmp11;
            tmp22 = tmp12;
          } else {
            let obj36 = /^MM/;
            addResult = arr;
            if (obj36.test(arr)) {
              addResult = add("_month+1 < 10 ? \"0\" : \"\"");
              addResult = add("_month+1");
              addResult = nxt(2);
              tmp18 = tmp8;
              tmp19 = tmp9;
              tmp20 = tmp10;
              tmp21 = tmp11;
              tmp22 = tmp12;
            } else {
              let obj37 = /^Mo/;
              addResult = arr;
              if (obj37.test(arr)) {
                addResult = add("localeData.ordinal(_month, \"M\")");
                addResult = nxt(2);
                tmp18 = tmp8;
                tmp19 = tmp9;
                tmp20 = tmp10;
                tmp21 = tmp11;
                tmp22 = tmp12;
              } else {
                addResult = add("_month + 1");
                addResult = nxt(1);
                tmp18 = tmp8;
                tmp19 = tmp9;
                tmp20 = tmp10;
                tmp21 = tmp11;
                tmp22 = tmp12;
              }
            }
          }
        }
      } else if ("Q" === charAtResult) {
        obj.month = true;
        let obj33 = /^Qo/;
        addResult = arr;
        if (obj33.test(arr)) {
          addResult = add("localeData.ordinal((_month + 1) / 3, \"Q\")");
          addResult = nxt(2);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = tmp12;
        } else {
          addResult = add("Math.ceil((_month + 1) / 3)");
          addResult = nxt(1);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = tmp12;
        }
      } else if ("D" === charAtResult) {
        let obj28 = /^DDD/;
        addResult = arr;
        if (obj28.test(arr)) {
          obj.dayOfYear = true;
          let obj31 = /^DDDD/;
          addResult = arr;
          if (obj31.test(arr)) {
            addResult = add("_doy < 100 ? \"0\" : \"\"");
            addResult = add("_doy < 10 ? \"0\" : \"\"");
            addResult = add("_doy");
            addResult = nxt(4);
            tmp18 = tmp8;
            tmp19 = tmp9;
            tmp20 = tmp10;
            tmp21 = tmp11;
            tmp22 = tmp12;
          } else {
            let obj32 = /^DDDo/;
            addResult = arr;
            if (obj32.test(arr)) {
              addResult = add("localeData.ordinal(_doy, \"DDD\")");
              addResult = nxt(4);
              tmp18 = tmp8;
              tmp19 = tmp9;
              tmp20 = tmp10;
              tmp21 = tmp11;
              tmp22 = tmp12;
            } else {
              addResult = add("_doy");
              addResult = nxt(3);
              tmp18 = tmp8;
              tmp19 = tmp9;
              tmp20 = tmp10;
              tmp21 = tmp11;
              tmp22 = tmp12;
            }
          }
        } else {
          obj.date = true;
          let obj29 = /^DD/;
          addResult = arr;
          if (obj29.test(arr)) {
            addResult = add("_date < 10 ? \"0\" : \"\"");
            addResult = add("_date");
            addResult = nxt(2);
            tmp18 = tmp8;
            tmp19 = tmp9;
            tmp20 = tmp10;
            tmp21 = tmp11;
            tmp22 = tmp12;
          } else {
            let obj30 = /^Do/;
            addResult = arr;
            if (obj30.test(arr)) {
              addResult = add("localeData.ordinal(_date, \"D\")");
              addResult = nxt(2);
              tmp18 = tmp8;
              tmp19 = tmp9;
              tmp20 = tmp10;
              tmp21 = tmp11;
              tmp22 = tmp12;
            } else {
              addResult = add("_date");
              addResult = nxt(1);
              tmp18 = tmp8;
              tmp19 = tmp9;
              tmp20 = tmp10;
              tmp21 = tmp11;
              tmp22 = tmp12;
            }
          }
        }
      } else if ("d" === charAtResult) {
        obj.day = true;
        let obj24 = /^dddd/;
        addResult = arr;
        if (obj24.test(arr)) {
          let _HermesInternal5 = HermesInternal;
          addResult = add("localeData.weekdays(_day, \"" + arr + "\")");
          addResult = nxt(4);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = tmp12;
        } else {
          let obj25 = /^ddd/;
          addResult = arr;
          if (obj25.test(arr)) {
            let _HermesInternal4 = HermesInternal;
            addResult = add("localeData.weekdaysShort(_day, \"" + arr + "\")");
            addResult = nxt(3);
            tmp18 = tmp8;
            tmp19 = tmp9;
            tmp20 = tmp10;
            tmp21 = tmp11;
            tmp22 = tmp12;
          } else {
            let obj26 = /^dd/;
            addResult = arr;
            if (obj26.test(arr)) {
              let _HermesInternal3 = HermesInternal;
              addResult = add("localeData.weekdaysMin(_day, \"" + arr + "\")");
              addResult = nxt(2);
              tmp18 = tmp8;
              tmp19 = tmp9;
              tmp20 = tmp10;
              tmp21 = tmp11;
              tmp22 = tmp12;
            } else {
              let obj27 = /^do/;
              addResult = arr;
              if (obj27.test(arr)) {
                addResult = add("localeData.ordinal(_day, \"d\")");
                addResult = nxt(2);
                tmp18 = tmp8;
                tmp19 = tmp9;
                tmp20 = tmp10;
                tmp21 = tmp11;
                tmp22 = tmp12;
              } else {
                addResult = add("_day");
                addResult = nxt(1);
                tmp18 = tmp8;
                tmp19 = tmp9;
                tmp20 = tmp10;
                tmp21 = tmp11;
                tmp22 = tmp12;
              }
            }
          }
        }
      } else if ("e" === charAtResult) {
        obj.day = true;
        addResult = add(`(_day + 7 - ${+tmp.week.dow}) % 7`);
        addResult = nxt(1);
        tmp18 = tmp8;
        tmp19 = tmp9;
        tmp20 = tmp10;
        tmp21 = tmp11;
        tmp22 = tmp12;
      } else if ("E" === charAtResult) {
        obj.day = true;
        addResult = add("_day === 0 ? 7 : _day");
        addResult = nxt(1);
        tmp18 = tmp8;
        tmp19 = tmp9;
        tmp20 = tmp10;
        tmp21 = tmp11;
        tmp22 = tmp12;
      } else if ("w" === charAtResult) {
        obj.week = true;
        let obj22 = /^ww/;
        addResult = arr;
        if (obj22.test(arr)) {
          addResult = add("_week < 10 ? \"0\" : \"\"");
          addResult = add("_week");
          addResult = nxt(2);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = tmp12;
        } else {
          let obj23 = /^wo/;
          addResult = arr;
          if (obj23.test(arr)) {
            addResult = add("localeData.ordinal(_week, \"w\")");
            addResult = nxt(2);
            tmp18 = tmp8;
            tmp19 = tmp9;
            tmp20 = tmp10;
            tmp21 = tmp11;
            tmp22 = tmp12;
          } else {
            addResult = add("_week");
            addResult = nxt(1);
            tmp18 = tmp8;
            tmp19 = tmp9;
            tmp20 = tmp10;
            tmp21 = tmp11;
            tmp22 = tmp12;
          }
        }
      } else if ("W" === charAtResult) {
        obj.isoweek = true;
        let obj20 = /^WW/;
        addResult = arr;
        if (obj20.test(arr)) {
          addResult = add("_i_week < 10 ? \"0\" : \"\"");
          addResult = add("_i_week");
          addResult = nxt(2);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = tmp12;
        } else {
          let obj21 = /^Wo/;
          addResult = arr;
          if (obj21.test(arr)) {
            addResult = add("localeData.ordinal(_i_week, \"W\")");
            addResult = nxt(2);
            tmp18 = tmp8;
            tmp19 = tmp9;
            tmp20 = tmp10;
            tmp21 = tmp11;
            tmp22 = tmp12;
          } else {
            addResult = add("_i_week");
            addResult = nxt(1);
            tmp18 = tmp8;
            tmp19 = tmp9;
            tmp20 = tmp10;
            tmp21 = tmp11;
            tmp22 = tmp12;
          }
        }
      } else if ("Y" === charAtResult) {
        obj.year = true;
        let obj18 = /^YYYY/;
        addResult = arr;
        if (obj18.test(arr)) {
          addResult = add("_year");
          addResult = nxt(4);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = tmp12;
        } else {
          let obj19 = /^YY/;
          addResult = arr;
          if (obj19.test(arr)) {
            addResult = add("(_year % 100) < 10 ? \"0\" : \"\"");
            addResult = add("_year % 100");
            addResult = nxt(2);
            tmp18 = tmp8;
            tmp19 = tmp9;
            tmp20 = tmp10;
            tmp21 = tmp11;
            tmp22 = tmp12;
          } else {
            addResult = add("_year < 9999 ? _year : \"+\" + _year");
            addResult = nxt(1);
            tmp18 = tmp8;
            tmp19 = tmp9;
            tmp20 = tmp10;
            tmp21 = tmp11;
            tmp22 = tmp12;
          }
        }
      } else if ("g" === charAtResult) {
        obj.week = true;
        let obj16 = /^gggg/;
        addResult = arr;
        if (obj16.test(arr)) {
          addResult = add("_weekYear");
          addResult = nxt(4);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = tmp12;
        } else {
          let obj17 = /^gg/;
          addResult = arr;
          if (obj17.test(arr)) {
            addResult = add("(_weekYear % 100) < 10 ? \"0\" : \"\"");
            addResult = add("_weekYear % 100");
            addResult = nxt(2);
            tmp18 = tmp8;
            tmp19 = tmp9;
            tmp20 = tmp10;
            tmp21 = tmp11;
            tmp22 = tmp12;
          }
        }
        let _JSON2 = JSON;
        addResult = arr;
        addResult = add(JSON.stringify(arr.charAt(0)));
        addResult = nxt(1);
        tmp18 = tmp8;
        tmp19 = tmp9;
        tmp20 = tmp10;
        tmp21 = tmp11;
        tmp22 = tmp12;
      } else if ("G" === charAtResult) {
        obj.isoweek = true;
        let obj14 = /^GGGG/;
        addResult = arr;
        if (obj14.test(arr)) {
          addResult = add("_i_weekYear");
          addResult = nxt(4);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = tmp12;
        } else {
          let obj15 = /^GG/;
          addResult = arr;
          if (obj15.test(arr)) {
            addResult = add("(_i_weekYear % 100) < 10 ? \"0\" : \"\"");
            addResult = add("_i_weekYear % 100");
            addResult = nxt(2);
            tmp18 = tmp8;
            tmp19 = tmp9;
            tmp20 = tmp10;
            tmp21 = tmp11;
            tmp22 = tmp12;
          }
        }
      } else if ("A" === charAtResult) {
        obj.hour = true;
        obj.minutes = true;
        let addResult1 = add("localeData.meridiem(_hour, _mins, false)");
        let nxtResult = nxt(1);
        tmp18 = tmp8;
        tmp19 = tmp9;
        tmp20 = tmp10;
        tmp21 = tmp11;
        tmp22 = tmp12;
      } else if ("a" === charAtResult) {
        obj.hour = true;
        obj.minutes = true;
        let addResult2 = add("localeData.meridiem(_hour, _mins, true)");
        let nxtResult1 = nxt(1);
        tmp18 = tmp8;
        tmp19 = tmp9;
        tmp20 = tmp10;
        tmp21 = tmp11;
        tmp22 = tmp12;
      } else if ("H" === charAtResult) {
        obj.hour = true;
        let obj13 = /^HH/;
        let tmp90 = arr;
        if (obj13.test(arr)) {
          let addResult3 = add("_hour < 10 ? \"0\" : \"\"");
          let addResult4 = add("_hour");
          let nxtResult2 = nxt(2);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = tmp12;
        } else {
          let addResult5 = add("_hour");
          let nxtResult3 = nxt(1);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = tmp12;
        }
      } else if ("h" === charAtResult) {
        obj.hour = true;
        let obj12 = /^hh/;
        let tmp84 = arr;
        if (obj12.test(arr)) {
          let addResult6 = add("((_hour+11) % 12) < 9 ? \"0\" : \"\"");
          let addResult7 = add("((_hour+11) % 12) + 1");
          let nxtResult4 = nxt(2);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = tmp12;
        } else {
          let addResult8 = add("((_hour+11) % 12) + 1");
          let nxtResult5 = nxt(1);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = tmp12;
        }
      } else if ("k" === charAtResult) {
        obj.hour = true;
        let obj11 = /^kk/;
        let tmp78 = arr;
        if (obj11.test(arr)) {
          let addResult9 = add("_hour > 0 && _hour < 10 ? \"0\" : \"\"");
          let addResult10 = add("_hour === 0 ? \"24\" : _hour");
          let nxtResult6 = nxt(2);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = tmp12;
        } else {
          let addResult11 = add("_hour === 0 ? \"24\" : _hour");
          let nxtResult7 = nxt(1);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = tmp12;
        }
      } else if ("m" === charAtResult) {
        obj.minutes = true;
        let obj10 = /^mm/;
        let tmp72 = arr;
        if (obj10.test(arr)) {
          let addResult12 = add("_mins < 10 ? \"0\" : \"\"");
          let addResult13 = add("_mins");
          let nxtResult8 = nxt(2);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = tmp12;
        } else {
          let addResult14 = add("_mins");
          let nxtResult9 = nxt(1);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = tmp12;
        }
      } else if ("s" === charAtResult) {
        obj.seconds = true;
        let obj9 = /^ss/;
        let tmp66 = arr;
        if (obj9.test(arr)) {
          let addResult15 = add("_secs < 10 ? \"0\" : \"\"");
          let addResult16 = add("_secs");
          let nxtResult10 = nxt(2);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = tmp12;
        } else {
          let addResult17 = add("_secs");
          let nxtResult11 = nxt(1);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = tmp12;
        }
      } else if ("S" === charAtResult) {
        obj.millis = true;
        let obj5 = /^SSS/;
        let tmp48 = arr;
        if (obj5.test(arr)) {
          let addResult18 = add("_ms < 100 ? \"0\" : \"\"");
          let addResult19 = add("_ms < 10 ? \"0\" : \"\"");
          let addResult20 = add("_ms");
          let obj7 = /^S{3,9}/;
          let tmp58 = arr;
          let match = obj7.exec(arr);
          if (null == match) {
            break;
          } else {
            let length = match[0].length;
            if (length > 3) {
              let _Array = Array;
              let ArrayResult = Array(length - 2);
              let _HermesInternal2 = HermesInternal;
              let addResult21 = add("\"" + ArrayResult.join("0") + "\"");
            }
            let nxtResult12 = nxt(length);
            tmp18 = tmp8;
            tmp19 = tmp9;
            tmp20 = match;
            tmp21 = length;
            tmp22 = tmp12;
          }
        } else {
          let obj6 = /^SS/;
          let tmp49 = arr;
          if (obj6.test(arr)) {
            let addResult22 = add("_ms < 100 ? \"0\" : \"\"");
            let addResult23 = add("Math.floor(_ms/10)");
            let nxtResult13 = nxt(2);
            tmp18 = tmp8;
            tmp19 = tmp9;
            tmp20 = tmp10;
            tmp21 = tmp11;
            tmp22 = tmp12;
          } else {
            let addResult24 = add("Math.floor(_ms / 100)");
            let nxtResult14 = nxt(1);
            tmp18 = tmp8;
            tmp19 = tmp9;
            tmp20 = tmp10;
            tmp21 = tmp11;
            tmp22 = tmp12;
          }
        }
      } else if ("Z" === charAtResult) {
        obj.offset = true;
        let obj4 = /^ZZ/;
        let tmp36 = arr;
        let isMatch = obj4.test(arr);
        let addResult25 = add("_offs >= 0 ? \"+\" : \"-\"");
        let addResult26 = add("_offH < 10 ? \"0\" : \"\"");
        let addResult27 = add("_offH");
        if (isMatch) {
          let addResult28 = add("_offM < 10 ? \"0\" : \"\"");
          let addResult29 = add("_offM");
          let nxtResult15 = nxt(2);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = tmp12;
        } else {
          let addResult30 = add("\":\"");
          let addResult31 = add("_offM < 10 ? \"0\" : \"\"");
          let addResult32 = add("_offM");
          let nxtResult16 = nxt(1);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = tmp12;
        }
      } else if ("X" === charAtResult) {
        let addResult33 = add("Math.floor(d / 1000)");
        let nxtResult17 = nxt(1);
        tmp18 = tmp8;
        tmp19 = tmp9;
        tmp20 = tmp10;
        tmp21 = tmp11;
        tmp22 = tmp12;
      } else if ("x" === charAtResult) {
        let addResult34 = add("d.valueOf()");
        let nxtResult18 = nxt(1);
        tmp18 = tmp8;
        tmp19 = tmp9;
        tmp20 = tmp10;
        tmp21 = tmp11;
        tmp22 = tmp12;
      } else if ("L" === charAtResult) {
        let obj3 = /^L(?:TS?|L*(?: LTS?)?)/;
        let tmp25 = arr;
        let match1 = obj3.exec(arr);
        let first;
        if (null != match1) {
          first = match1[0];
        }
        let str = "L";
        if (null != first) {
          str = first;
        }
        let longFormatters = addResult.longFormatters;
        let tmp28 = makeLongFormatter;
        arr = longFormatters.push(makeLongFormatter(str));
        let _HermesInternal = HermesInternal;
        let addResult35 = add("localeData.longFormatters[" + addResult.longFormatters.length - 1 + "](d)");
        let nxtResult19 = nxt(str.length);
        tmp18 = first;
        tmp19 = match1;
        tmp20 = tmp10;
        tmp21 = tmp11;
        tmp22 = tmp12;
      } else if ("[" === charAtResult) {
        addResult = arr;
        addResult = arr.indexOf("]");
        if (-1 === addResult) {
          let addResult36 = add("\"[\"");
          let nxtResult20 = nxt(1);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = addResult;
        } else {
          let _JSON = JSON;
          let tmp15 = arr;
          let addResult37 = add(JSON.stringify(arr.slice(1, addResult)));
          let nxtResult21 = nxt(addResult + 1);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = addResult;
        }
      }
      addResult = arr;
      tmp8 = tmp18;
      tmp9 = tmp19;
      tmp10 = tmp20;
      tmp11 = tmp21;
      tmp12 = tmp22;
    }
    const _Error = Error;
    const error = new Error("ms len regex failed");
    throw error;
  }
  let str3 = "";
  let str4 = "";
  if (obj.date) {
    let str5 = str3;
    if (flag) {
      str5 = "UTC";
    }
    str4 = `${"var _date = d.get" + str5}Date();
  `;
  }
  addResult = str4;
  if (obj.month) {
    let str8 = str3;
    if (flag) {
      str8 = "UTC";
    }
    addResult = `${str4}var _month = d.get${str8}Month();
  `;
  }
  if (obj.dayOfYear) {
    let str11 = str3;
    if (flag) {
      str11 = "UTC";
    }
    let str12 = str3;
    if (flag) {
      str12 = "UTC";
    }
    addResult = `${tmp}var _startOfYear = new Date(d.valueOf());
  _startOfYear.set${str11}Month(0);
  _startOfYear.set${str12}Date(1);
  var _doy = Math.round((d - _startOfYear) / 864e5) + 1;
  `;
  }
  if (obj.day) {
    let str16 = str3;
    if (flag) {
      str16 = "UTC";
    }
    addResult = `${tmp}var _day = d.get${str16}Day();
  `;
  }
  if (obj.year) {
    let str19 = str3;
    if (flag) {
      str19 = "UTC";
    }
    addResult = `${tmp}var _year = d.get${str19}FullYear();
  `;
  }
  if (obj.hour) {
    let str22 = str3;
    if (flag) {
      str22 = "UTC";
    }
    addResult = `${tmp}var _hour = d.get${str22}Hours();
  `;
  }
  if (obj.minutes) {
    let str25 = str3;
    if (flag) {
      str25 = "UTC";
    }
    addResult = `${tmp}var _mins = d.get${str25}Minutes();
  `;
  }
  if (obj.seconds) {
    let str28 = str3;
    if (flag) {
      str28 = "UTC";
    }
    addResult = `${tmp}var _secs = d.get${str28}Seconds();
  `;
  }
  if (obj.millis) {
    let str31 = str3;
    if (flag) {
      str31 = "UTC";
    }
    addResult = `${tmp}var _ms = d.get${str31}Milliseconds();
  `;
  }
  if (obj.offset) {
    let str34 = "var _offs = -d.getTimezoneOffset();\nvar _absOffs = _offs < 0 ? -_offs : _offs;\nvar _offH = Math.floor(_absOffs / 60);\nvar _offM = _absOffs % 60;\n";
    if (flag) {
      str34 = "var _offs = 0, _absOffs = 0, _offH = 0, _offM = 0;";
    }
    addResult = addResult + str34;
  }
  if (obj.week) {
    let str35 = str3;
    addResult = addResult.week.doy - addResult.week.dow;
    addResult = +addResult.week.doy;
    if (flag) {
      str35 = "UTC";
    }
    let str36 = str3;
    if (flag) {
      str36 = "UTC";
    }
    let str37 = str3;
    if (flag) {
      str37 = "UTC";
    }
    let str38 = str3;
    if (flag) {
      str38 = "UTC";
    }
    let str39 = str3;
    if (flag) {
      str39 = "UTC";
    }
    let str40 = str3;
    if (flag) {
      str40 = "UTC";
    }
    addResult = `${tmp}var _wend = ${tmp};
  var _ddw = ${tmp} - d.get${str35}Day();
  if(_ddw > _wend) _ddw -= 7;
  if(_ddw < _wend - 7) _ddw += 7;
  var _d2 = new Date(d.valueOf());
  _d2.set${str36}Date(d.get${str37}Date() + _ddw);
  var _soy2 = new Date(_d2.valueOf());
  _soy2.set${str38}Month(0);
  _soy2.set${str39}Date(1);
  var _doy2 = Math.round((_d2 - _soy2) / 864e5) + 1;
  var _week = Math.ceil(_doy2 / 7);
  var _weekYear = _d2.get${str40}FullYear();
  `;
  }
  if (obj.isoweek) {
    let str50 = str3;
    if (flag) {
      str50 = "UTC";
    }
    let str51 = str3;
    if (flag) {
      str51 = "UTC";
    }
    let str52 = str3;
    if (flag) {
      str52 = "UTC";
    }
    let str53 = str3;
    if (flag) {
      str53 = "UTC";
    }
    let str54 = str3;
    if (flag) {
      str54 = "UTC";
    }
    if (flag) {
      str3 = "UTC";
    }
    addResult = `${tmp}var _i_wend = 3;
  var _i_ddw = 4 - d.get${str50}Day();
  if(_i_ddw > _i_wend) _i_ddw -= 7;
  if(_i_ddw < _i_wend - 7) _i_ddw += 7;
  var _i_d2 = new Date(d.valueOf());
  _i_d2.set${str51}Date(d.get${str52}Date() + _i_ddw);
  var _i_soy2 = new Date(_i_d2.valueOf());
  _i_soy2.set${str53}Month(0);
  _i_soy2.set${str54}Date(1);
  var _i_doy2 = Math.round((_i_d2 - _i_soy2) / 864e5) + 1;
  var _i_week = Math.ceil(_i_doy2 / 7);
  var _i_weekYear = _i_d2.get${str3}FullYear();
  `;
  }
  addResult = new Function("d", "localeData", addResult + "return (\n\"\" +\n" + items.join(" +\n") + "\n);");
  makeLongFormatter = addResult;
  return (arg0) => _undefined(arg0, c0);
};
export { getLocaleData };
