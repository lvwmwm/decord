// Module ID: 3817
// Function ID: 31709
// Name: makeLongFormatter
// Dependencies: []
// Exports: default

// Module 3817 (makeLongFormatter)
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
  const TimestampHourCycle = require(dependencyMap[0]).TimestampHourCycle;
  const setting = TimestampHourCycle.getSetting();
  if (setting !== require(dependencyMap[1]).TimestampHourCycle.AUTO) {
    if (obj3.supportsSystemDateFormatter()) {
      if (require(dependencyMap[1]).TimestampHourCycle.H12 === setting) {
        obj.hourCycle = "h12";
      } else if (require(dependencyMap[1]).TimestampHourCycle.H23 === setting) {
        obj.hourCycle = "h23";
      }
    }
    const obj3 = require(dependencyMap[2]);
  }
  return require(dependencyMap[3]).makeFormatter(obj);
}
function convertMomentValue(day, months) {
  const require = day;
  let importDefault = months;
  if ("function" === typeof months) {
    closure_2 = months.bind(importDefault(closure_2[4]).localeData());
    return (arg0, arg1) => callback({ [closure_0]: () => arg0 }, arg1);
  } else {
    const _Array = Array;
    let format = months;
    if (!Array.isArray(months)) {
      format = months.format;
    }
    importDefault = format;
    return (arg0) => format[arg0];
  }
}
function convertMomentOrdinal(ordinal) {
  let fn = ordinal;
  const require = ordinal;
  if ("string" === typeof ordinal) {
    fn = (arg0) => arg0.replace("%d", "" + arg0);
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
  let obj = importDefault(dependencyMap[4]);
  const _config = obj.localeData()._config;
  ({ meridiem, months, monthsShort, weekdays, weekdaysShort, weekdaysMin } = _config);
  if (undefined === meridiem) {
    meridiem = defaultMeridiem;
  }
  ({ week, ordinal, longDateFormat } = _config);
  if (undefined === week) {
    week = { <string:1431496722>: false, <string:1627556098>: false };
  }
  obj = { months: convertMomentValue("month", months), monthsShort: convertMomentValue("month", monthsShort), weekdays: convertMomentValue("day", weekdays), weekdaysShort: convertMomentValue("day", weekdaysShort), weekdaysMin: convertMomentValue("day", weekdaysMin), meridiem, ordinal: convertMomentOrdinal(ordinal), longDateFormat, longFormatters: [], week };
  return obj;
}
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("lib/makeDateFormatter.tsx");

export default function makeFormatter(arg0, addResult) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let require;
  let importDefault;
  let dependencyMap;
  let makeLongFormatter;
  function add(_date) {
    items.push(`(${_date})`);
  }
  function nxt(length) {

  }
  if (null == addResult) {
    addResult = getLocaleData();
  }
  require = addResult;
  let result = undefined === addResult && !flag;
  if (result) {
    result = undefined !== require(dependencyMap[2]).makeFormatter;
  }
  if (result) {
    let obj = require(dependencyMap[2]);
    result = obj.supportsSystemDateFormatter();
  }
  let arr = arg0;
  if (!result) {
    arr = function convertLongDateFormat(str, addResult) {
      const items = addResult;
      return str.replace(/L[L|T|S]{0,3}/g, (arr) => {
        if (obj.test(arr)) {
          let LLLL = arg1.longDateFormat.LLLL;
        } else {
          if (obj2.test(arr)) {
            LLLL = arg1.longDateFormat.LLL + arr.slice(3);
          } else {
            if (obj3.test(arr)) {
              LLLL = arg1.longDateFormat.LL + arr.slice(2);
            } else {
              if (obj4.test(arr)) {
                LLLL = arg1.longDateFormat.LTS + arr.slice(3);
              } else {
                if (obj5.test(arr)) {
                  LLLL = arg1.longDateFormat.LT + arr.slice(2);
                } else {
                  LLLL = arr;
                  if (obj6.test(arr)) {
                    LLLL = arr;
                    if ("[" !== arr[arg1 - 1]) {
                      LLLL = arg1.longDateFormat.L + arr.slice(1);
                    }
                  }
                  const obj6 = /^L/;
                }
                const obj5 = /^LT/;
              }
              const obj4 = /^LTS/;
            }
            const obj3 = /^LL/;
          }
          const obj2 = /^LLL/;
        }
        return LLLL;
      });
    }(arg0, addResult);
  }
  const items = [];
  importDefault = items;
  obj = { isArray: "bow", isArray: 30, test: "days", withSpring: "default", isArray: "done", isArray: "go", textAlign: "next", withSpring: "previous", isArray: "search", isArray: "send", _desired: "postal-address-region", withTiming: "postal-address-locality" };
  dependencyMap = arr;
  if (arr.length > 0) {
    while (true) {
      let tmp13 = dependencyMap;
      let charAtResult = dependencyMap.charAt(0);
      if ("M" === charAtResult) {
        obj.month = true;
        let obj34 = /^MMMM/;
        addResult = dependencyMap;
        if (obj34.test(dependencyMap)) {
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
          addResult = dependencyMap;
          if (obj35.test(dependencyMap)) {
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
            addResult = dependencyMap;
            if (obj36.test(dependencyMap)) {
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
              addResult = dependencyMap;
              if (obj37.test(dependencyMap)) {
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
        addResult = dependencyMap;
        if (obj33.test(dependencyMap)) {
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
        addResult = dependencyMap;
        if (obj28.test(dependencyMap)) {
          obj.dayOfYear = true;
          let obj31 = /^DDDD/;
          addResult = dependencyMap;
          if (obj31.test(dependencyMap)) {
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
            addResult = dependencyMap;
            if (obj32.test(dependencyMap)) {
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
          addResult = dependencyMap;
          if (obj29.test(dependencyMap)) {
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
            addResult = dependencyMap;
            if (obj30.test(dependencyMap)) {
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
        addResult = dependencyMap;
        if (obj24.test(dependencyMap)) {
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
          addResult = dependencyMap;
          if (obj25.test(dependencyMap)) {
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
            addResult = dependencyMap;
            if (obj26.test(dependencyMap)) {
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
              addResult = dependencyMap;
              if (obj27.test(dependencyMap)) {
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
        addResult = dependencyMap;
        if (obj22.test(dependencyMap)) {
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
          addResult = dependencyMap;
          if (obj23.test(dependencyMap)) {
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
        addResult = dependencyMap;
        if (obj20.test(dependencyMap)) {
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
          addResult = dependencyMap;
          if (obj21.test(dependencyMap)) {
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
        addResult = dependencyMap;
        if (obj18.test(dependencyMap)) {
          addResult = add("_year");
          addResult = nxt(4);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = tmp12;
        } else {
          let obj19 = /^YY/;
          addResult = dependencyMap;
          if (obj19.test(dependencyMap)) {
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
        addResult = dependencyMap;
        if (obj16.test(dependencyMap)) {
          addResult = add("_weekYear");
          addResult = nxt(4);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = tmp12;
        } else {
          let obj17 = /^gg/;
          addResult = dependencyMap;
          if (obj17.test(dependencyMap)) {
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
        addResult = dependencyMap;
        addResult = add(JSON.stringify(dependencyMap.charAt(0)));
        addResult = nxt(1);
        tmp18 = tmp8;
        tmp19 = tmp9;
        tmp20 = tmp10;
        tmp21 = tmp11;
        tmp22 = tmp12;
      } else if ("G" === charAtResult) {
        obj.isoweek = true;
        let obj14 = /^GGGG/;
        addResult = dependencyMap;
        if (obj14.test(dependencyMap)) {
          addResult = add("_i_weekYear");
          addResult = nxt(4);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = tmp12;
        } else {
          let obj15 = /^GG/;
          addResult = dependencyMap;
          if (obj15.test(dependencyMap)) {
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
        let tmp90 = dependencyMap;
        if (obj13.test(dependencyMap)) {
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
        let tmp84 = dependencyMap;
        if (obj12.test(dependencyMap)) {
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
        let tmp78 = dependencyMap;
        if (obj11.test(dependencyMap)) {
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
        let tmp72 = dependencyMap;
        if (obj10.test(dependencyMap)) {
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
        let tmp66 = dependencyMap;
        if (obj9.test(dependencyMap)) {
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
        let tmp48 = dependencyMap;
        if (obj5.test(dependencyMap)) {
          let addResult18 = add("_ms < 100 ? \"0\" : \"\"");
          let addResult19 = add("_ms < 10 ? \"0\" : \"\"");
          let addResult20 = add("_ms");
          let obj7 = /^S{3,9}/;
          let tmp58 = dependencyMap;
          let match = obj7.exec(dependencyMap);
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
          let tmp49 = dependencyMap;
          if (obj6.test(dependencyMap)) {
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
        let tmp36 = dependencyMap;
        let isMatch = obj4.test(dependencyMap);
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
        let tmp25 = dependencyMap;
        let match1 = obj3.exec(dependencyMap);
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
        addResult = dependencyMap;
        addResult = dependencyMap.indexOf("]");
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
          let tmp15 = dependencyMap;
          let addResult37 = add(JSON.stringify(dependencyMap.slice(1, addResult)));
          let nxtResult21 = nxt(addResult + 1);
          tmp18 = tmp8;
          tmp19 = tmp9;
          tmp20 = tmp10;
          tmp21 = tmp11;
          tmp22 = addResult;
        }
      }
      addResult = dependencyMap;
      let tmp8 = tmp18;
      let tmp9 = tmp19;
      let tmp10 = tmp20;
      let tmp11 = tmp21;
      let tmp12 = tmp22;
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
  return (arg0) => addResult(arg0, addResult);
};
export { getLocaleData };
