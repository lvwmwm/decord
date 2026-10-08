// Module ID: 9881
// Function ID: 9882
// Dependencies: [41, 42, 93, 95, 98, 9879, 9778]

// Module 9881
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 9778 */;
import _mod9879 from "module_9879" /* 9879 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const keys = Object.keys(_mod9879.WEEKDAY_OFFSET);
const regExp = new RegExp("(?<prefix>\u4E0A|\u4E0B|\u8FD9)(?:\u4E2A)?(?:\u661F\u671F|\u793C\u62DC|\u5468)(?<weekday>" + keys.join("|") + ")");
class ZHHansRelationWeekdayParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ZHHansRelationWeekdayParser);
    const obj = _getPrototypeOf(ZHHansRelationWeekdayParser);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ZHHansRelationWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return regExp;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingResult, index) {
      const parsingResult = createParsingResult.createParsingResult(index.index, index[0]);
      const tmp2 = _mod9879.WEEKDAY_OFFSET[index.groups.weekday];
      if (undefined === tmp2) {
        return null;
      } else {
        const prefix = index.groups.prefix;
        let str2 = "last";
        if ("\u4E0A" != prefix) {
          str2 = "next";
          if ("\u4E0B" != prefix) {
            str2 = null;
            if ("\u8FD9" == prefix) {
              str2 = "this";
            }
          }
        }
        const _Date = Date;
        const refDate = createParsingResult.refDate;
        const self = this;
        const self2 = this;
        const date = new Date(refDate.getTime());
        const day = date.getDay();
        if ("last" != str2) {
          let flag;
          if ("past" != str2) {
            if ("next" == str2) {
              date.setDate(date.getDate() + (tmp2 + 7 - day));
              flag = true;
            } else if ("this" == str2) {
              date.setDate(date.getDate() + (tmp2 - day));
              flag = false;
            } else {
              const diff = tmp2 - day;
              const _Math3 = Math;
              const _Math4 = Math;
              const absolute = Math.abs(diff - 7);
              let diff1 = diff;
              if (absolute < Math.abs(diff)) {
                diff1 = diff - 7;
              }
              const _Math = Math;
              const _Math2 = Math;
              const absolute1 = Math.abs(diff1 + 7);
              let sum = diff1;
              if (absolute1 < Math.abs(diff1)) {
                sum = diff1 + 7;
              }
              date.setDate(date.getDate() + sum);
              flag = false;
            }
          }
          const start = parsingResult.start;
          start.assign("weekday", tmp2);
          const start2 = parsingResult.start;
          if (flag) {
            start2.assign("day", date.getDate());
            const start5 = parsingResult.start;
            start5.assign("month", date.getMonth() + 1);
            const start6 = parsingResult.start;
            start6.assign("year", date.getFullYear());
          } else {
            start2.imply("day", date.getDate());
            const start3 = parsingResult.start;
            start3.imply("month", date.getMonth() + 1);
            const start4 = parsingResult.start;
            start4.imply("year", date.getFullYear());
          }
          return parsingResult;
        }
        date.setDate(date.getDate() + (tmp2 - 7 - day));
        flag = true;
      }
    }
  }
];

export default _createClass(ZHHansRelationWeekdayParser, items);
