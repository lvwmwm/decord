// Module ID: 10001
// Function ID: 10002
// Dependencies: [41, 42, 93, 95, 98, 9819, 9988, 9846, 9826]

// Module 10001
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 9819 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 9826 */;
import _mod9988 from "module_9988" /* 9988 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let tmp2;
const _mod9846 = tmp2(9846);
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
const regExp = new RegExp("(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:il\\s*?)?(?:(questa|l'ultima|scorsa|prossima)\\s*)?(" + repeatedTimeunitPattern.matchAnyPattern(_mod9988.WEEKDAY_DICTIONARY) + ")(?:\\s*(?:\\,|\\)|\\\uFF09))?(?:\\s*(questa|l'ultima|scorsa|prossima)\\s*settimana)?(?=\\W|$)", "i");
class ITWeekdayParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ITWeekdayParser);
    const obj = _getPrototypeOf(ITWeekdayParser);
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
_inherits(ITWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const str = arg1[2];
      const formatted = str.toLowerCase();
      let str2 = arg1[1];
      const tmp4 = _mod9988.WEEKDAY_DICTIONARY[formatted];
      if (!str2) {
        str2 = arg1[3];
      }
      if (!str2) {
        str2 = "";
      }
      const formatted1 = str2.toLowerCase();
      let str3 = "ultima";
      if ("ultima" != formatted1) {
        str3 = "ultima";
        if ("scorsa" != formatted1) {
          str3 = "prossima";
          if ("prossima" != formatted1) {
            str3 = null;
            if ("questa" == formatted1) {
              str3 = "questa";
            }
          }
        }
      }
      return _mod9846.createParsingComponentsAtWeekday(reference.reference, tmp4, str3);
    }
  }
];

export default _createClass(ITWeekdayParser, items);
