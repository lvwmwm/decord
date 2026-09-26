// Module ID: 10910
// Function ID: 10911
// Dependencies: [41, 42, 93, 95, 98, 10728, 10897, 10755, 10735]

// Module 10910
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10728 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10735 */;
import _mod10897 from "module_10897" /* 10897 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const ITWeekdayParser = require;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
const regExp = new RegExp("(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:il\\s*?)?(?:(questa|l'ultima|scorsa|prossima)\\s*)?(" + repeatedTimeunitPattern.matchAnyPattern(_mod10897.WEEKDAY_DICTIONARY) + ")(?:\\s*(?:\\,|\\)|\\\uFF09))?(?:\\s*(questa|l'ultima|scorsa|prossima)\\s*settimana)?(?=\\W|$)", "i");
class ITWeekdayParser {
  constructor() {
    self = this;
    tmp = c2(this, ITWeekdayParser);
    tmp2 = closure_4;
    obj = closure_4(ITWeekdayParser);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
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
      const formatted = arg1[2].toLowerCase();
      let str2 = arg1[1];
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
      return ITWeekdayParser(10755).createParsingComponentsAtWeekday(reference.reference, ITWeekdayParser(10897).WEEKDAY_DICTIONARY[formatted], str3);
    }
  }
];

export default _createClass(ITWeekdayParser, items);
