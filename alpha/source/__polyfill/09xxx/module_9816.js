// Module ID: 9816
// Function ID: 9817
// Dependencies: [41, 42, 93, 95, 98, 9790, 9789, 9795, 9817, 9797]

// Module 9816
import _mod9789 from "module_9789" /* 9789 */;
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 9790 */;
import Meridiem from "Meridiem" /* 9795 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 9797 */;
import _mod9817 from "module_9817" /* 9817 */;
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
const regExp = new RegExp("(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:on\\s*?)?(?:(this|last|past|next)\\s*)?(" + repeatedTimeunitPattern.matchAnyPattern(_mod9789.WEEKDAY_DICTIONARY) + "|weekend|weekday)(?:\\s*(?:\\,|\\)|\\\uFF09))?(?:\\s*(this|last|past|next)\\s*week)?(?=\\W|$)", "i");
class ENWeekdayParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENWeekdayParser);
    const obj = _getPrototypeOf(ENWeekdayParser);
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
_inherits(ENWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
    value: function innerExtract(reference, arg1) {
      let sum;
      const str = arg1[1] || arg1[3] || "";
      const formatted = str.toLowerCase();
      let str2 = "last";
      if ("last" != formatted) {
        str2 = "last";
        if ("past" != formatted) {
          str2 = "next";
          if ("next" != formatted) {
            str2 = null;
            if ("this" == formatted) {
              str2 = "this";
            }
          }
        }
      }
      const str6 = arg1[2];
      const formatted1 = str6.toLowerCase();
      if (undefined !== _mod9789.WEEKDAY_DICTIONARY[formatted1]) {
        sum = tmp3(9789).WEEKDAY_DICTIONARY[formatted1];
      } else if ("weekend" == formatted1) {
        let SATURDAY;
        if ("last" == str2) {
          SATURDAY = tmp3(9795).Weekday.SUNDAY;
        } else {
          SATURDAY = tmp3(9795).Weekday.SATURDAY;
        }
        sum = SATURDAY;
      } else if ("weekday" != formatted1) {
        return null;
      } else {
        let MONDAY;
        reference = reference.reference;
        const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
        const day = dateWithAdjustedTimezone.getDay();
        if (day != Meridiem.Weekday.SUNDAY) {
          if (day != Meridiem.Weekday.SATURDAY) {
            const diff = day - 1;
            sum = ("last" == str2 ? diff - 1 : diff + 1) % 5 + 1;
          }
        }
        if ("last" == str2) {
          MONDAY = tmp3(9795).Weekday.FRIDAY;
        } else {
          MONDAY = tmp3(9795).Weekday.MONDAY;
        }
        sum = MONDAY;
      }
      return _mod9817.createParsingComponentsAtWeekday(reference.reference, sum, str2);
    }
  }
];

export default _createClass(ENWeekdayParser, items);
