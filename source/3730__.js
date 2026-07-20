// Module ID: 3730
// Function ID: 28512
// Name: _
// Dependencies: []

// Module 3730 (_)
const fn = function _(moment) {
  function relativeTimeWithPlural(arg0, arg1, arg2) {
    if ("m" === arg2) {
      let str5 = "\u043C\u0438\u043D\u0443\u0442\u0443";
      if (arg1) {
        str5 = "\u043C\u0438\u043D\u0443\u0442\u0430";
      }
      let sum = str5;
    } else {
      const obj = { "Bool(true)": "<string:384852224>", "Null": "Array", "Null": "a", "Null": "y", "Null": "call", "Null": "prototype" };
      let str = "\u0441\u0435\u043A\u0443\u043D\u0434\u0443_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434";
      const text = `${arg0} `;
      if (arg1) {
        str = "\u0441\u0435\u043A\u0443\u043D\u0434\u0430_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434";
      }
      obj.ss = str;
      let str2 = "\u043C\u0438\u043D\u0443\u0442\u0443_\u043C\u0438\u043D\u0443\u0442\u044B_\u043C\u0438\u043D\u0443\u0442";
      if (arg1) {
        str2 = "\u043C\u0438\u043D\u0443\u0442\u0430_\u043C\u0438\u043D\u0443\u0442\u044B_\u043C\u0438\u043D\u0443\u0442";
      }
      obj.mm = str2;
      const parts = obj[arg2].split("_");
      const result = tmp % 10;
      if (result === 1) {
        if (tmp % 100 !== 11) {
          let first = parts[0];
        }
        sum = text + first;
      }
      if (result >= 2) {
        if (result <= 4) {
          const result1 = tmp % 100;
          first = parts[1];
        }
      }
      first = parts[2];
      const str3 = obj[arg2];
    }
    return sum;
  }
  const items = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
  let obj = {};
  obj = { format: "\u044F\u043D\u0432\u0430\u0440\u044F_\u0444\u0435\u0432\u0440\u0430\u043B\u044F_\u043C\u0430\u0440\u0442\u0430_\u0430\u043F\u0440\u0435\u043B\u044F_\u043C\u0430\u044F_\u0438\u044E\u043D\u044F_\u0438\u044E\u043B\u044F_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F_\u043E\u043A\u0442\u044F\u0431\u0440\u044F_\u043D\u043E\u044F\u0431\u0440\u044F_\u0434\u0435\u043A\u0430\u0431\u0440\u044F".split("_"), standalone: "\u044F\u043D\u0432\u0430\u0440\u044C_\u0444\u0435\u0432\u0440\u0430\u043B\u044C_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0435\u043B\u044C_\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C_\u043E\u043A\u0442\u044F\u0431\u0440\u044C_\u043D\u043E\u044F\u0431\u0440\u044C_\u0434\u0435\u043A\u0430\u0431\u0440\u044C".split("_") };
  obj.months = obj;
  obj = { format: "\u044F\u043D\u0432._\u0444\u0435\u0432\u0440._\u043C\u0430\u0440._\u0430\u043F\u0440._\u043C\u0430\u044F_\u0438\u044E\u043D\u044F_\u0438\u044E\u043B\u044F_\u0430\u0432\u0433._\u0441\u0435\u043D\u0442._\u043E\u043A\u0442._\u043D\u043E\u044F\u0431._\u0434\u0435\u043A.".split("_"), standalone: "\u044F\u043D\u0432._\u0444\u0435\u0432\u0440._\u043C\u0430\u0440\u0442_\u0430\u043F\u0440._\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433._\u0441\u0435\u043D\u0442._\u043E\u043A\u0442._\u043D\u043E\u044F\u0431._\u0434\u0435\u043A.".split("_") };
  obj.monthsShort = obj;
  obj.weekdays = { standalone: "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043F\u044F\u0442\u043D\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043E\u0442\u0430".split("_"), format: "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043F\u044F\u0442\u043D\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043E\u0442\u0443".split("_"), isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/ };
  obj.weekdaysShort = "\u0432\u0441_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_");
  obj.weekdaysMin = "\u0432\u0441_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_");
  obj.monthsParse = items;
  obj.longMonthsParse = items;
  obj.shortMonthsParse = items;
  obj.monthsRegex = /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i;
  obj.monthsShortRegex = /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i;
  obj.monthsStrictRegex = /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i;
  obj.monthsShortStrictRegex = /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i;
  obj.longDateFormat = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null };
  obj.calendar = {
    nextWeek(week) {
      const self = this;
      if (weekResult === this.week()) {
        let str4 = "[\u0412] dddd, [\u0432] LT";
        if (2 === self.day()) {
          str4 = "[\u0412\u043E] dddd, [\u0432] LT";
        }
        return str4;
      } else {
        const dayResult = self.day();
        if (0 === dayResult) {
          return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435] dddd, [\u0432] LT";
        } else {
          if (1 !== dayResult) {
            if (2 !== dayResult) {
              if (4 !== dayResult) {
                return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E] dddd, [\u0432] LT";
              }
            }
          }
          return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439] dddd, [\u0432] LT";
        }
      }
      const weekResult = week.week();
    },
    lastWeek(week) {
      const self = this;
      if (weekResult === this.week()) {
        let str4 = "[\u0412] dddd, [\u0432] LT";
        if (2 === self.day()) {
          str4 = "[\u0412\u043E] dddd, [\u0432] LT";
        }
        return str4;
      } else {
        const dayResult = self.day();
        if (0 === dayResult) {
          return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u043E\u0435] dddd, [\u0432] LT";
        } else {
          if (1 !== dayResult) {
            if (2 !== dayResult) {
              if (4 !== dayResult) {
                return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u0443\u044E] dddd, [\u0432] LT";
              }
            }
          }
          return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u044B\u0439] dddd, [\u0432] LT";
        }
      }
      const weekResult = week.week();
    }
  };
  obj.relativeTime = { ss: relativeTimeWithPlural, m: relativeTimeWithPlural, mm: relativeTimeWithPlural, h: "\u0447\u0430\u0441", hh: relativeTimeWithPlural, d: "\u0434\u0435\u043D\u044C", dd: relativeTimeWithPlural, M: "\u043C\u0435\u0441\u044F\u0446", MM: relativeTimeWithPlural, y: "\u0433\u043E\u0434", yy: relativeTimeWithPlural };
  obj.meridiemParse = /ночи|утра|дня|вечера/i;
  obj.isPM = function isPM(arg0) {
    return /^(дня|вечера)$/.test(arg0);
  };
  obj.meridiem = function meridiem(arg0, arg1, arg2) {
    let str = "\u043D\u043E\u0447\u0438";
    if (arg0 >= 4) {
      let str2 = "\u0443\u0442\u0440\u0430";
      if (arg0 >= 12) {
        let str3 = "\u0432\u0435\u0447\u0435\u0440\u0430";
        if (arg0 < 17) {
          str3 = "\u0434\u043D\u044F";
        }
        str2 = str3;
      }
      str = str2;
    }
    return str;
  };
  obj.dayOfMonthOrdinalParse = /\d{1,2}-(й|го|я)/;
  obj.ordinal = function ordinal(arg0, arg1) {
    if ("M" !== arg1) {
      if ("d" !== arg1) {
        if ("DDD" !== arg1) {
          if ("D" === arg1) {
            return arg0 + "-\u0433\u043E";
          } else {
            if ("w" !== arg1) {
              if ("W" !== arg1) {
                return arg0;
              }
            }
            return arg0 + "-\u044F";
          }
        }
      }
    }
    return arg0 + "-\u0439";
  };
  obj.week = { "Bool(true)": false, "Bool(true)": false };
  return moment.defineLocale("ru", obj);
};
if ("object" === typeof exports) {
  if (undefined !== module) {
    if ("function" === typeof require) {
      fn(require(dependencyMap[0]));
    }
  }
}
if ("function" === typeof globalThis.define) {
  if (globalThis.define.amd) {
    globalThis.define([1782644737], fn);
  }
}
fn(this.moment);
