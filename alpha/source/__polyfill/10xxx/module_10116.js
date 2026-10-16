// Module ID: 10116
// Function ID: 10117
// Dependencies: [41, 42, 93, 95, 98, 10055, 10117, 10082, 10062]

// Module 10116
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10055 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10062 */;
import _mod10117 from "module_10117" /* 10117 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let tmp2;
const _mod10082 = tmp2(10082);
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
const regExp = new RegExp("(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:(?:ce)\\s*)?(" + repeatedTimeunitPattern.matchAnyPattern(_mod10117.WEEKDAY_DICTIONARY) + ")(?:\\s*(?:\\,|\\)|\\\uFF09))?(?:\\s*(dernier|prochain)\\s*)?(?=\\W|\\d|$)", "i");
class FRWeekdayParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, FRWeekdayParser);
    const obj = _getPrototypeOf(FRWeekdayParser);
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
_inherits(FRWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const str = arg1[1];
      const formatted = str.toLowerCase();
      const tmp4 = _mod10117.WEEKDAY_DICTIONARY[formatted];
      if (undefined === tmp4) {
        return null;
      } else {
        const str2 = arg1[2] || "";
        const formatted1 = str2.toLowerCase();
        let str4 = "last";
        if ("dernier" != formatted1) {
          str4 = null;
          if ("prochain" == formatted1) {
            str4 = "next";
          }
        }
        return _mod10082.createParsingComponentsAtWeekday(reference.reference, tmp4, str4);
      }
    }
  }
];

export default _createClass(FRWeekdayParser, items);
