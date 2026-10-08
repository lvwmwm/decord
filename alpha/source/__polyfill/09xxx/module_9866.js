// Module ID: 9866
// Function ID: 9867
// Dependencies: [41, 42, 93, 95, 98, 9771, 9865, 9798, 9778]

// Module 9866
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 9771 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 9778 */;
import _mod9865 from "module_9865" /* 9865 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let tmp2;
const _mod9798 = tmp2(9798);
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
const regExp = new RegExp("(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:op\\s*?)?(?:(deze|vorige|volgende)\\s*(?:week\\s*)?)?(" + repeatedTimeunitPattern.matchAnyPattern(_mod9865.WEEKDAY_DICTIONARY) + ")(?=\\W|$)", "i");
class NLWeekdayParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, NLWeekdayParser);
    const obj = _getPrototypeOf(NLWeekdayParser);
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
_inherits(NLWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const tmp4 = _mod9865.WEEKDAY_DICTIONARY[formatted];
      if (!str2) {
        str2 = arg1[3];
      }
      if (!str2) {
        str2 = "";
      }
      const formatted1 = str2.toLowerCase();
      let str3 = "last";
      if ("vorige" != formatted1) {
        str3 = "next";
        if ("volgende" != formatted1) {
          str3 = null;
          if ("deze" == formatted1) {
            str3 = "this";
          }
        }
      }
      return _mod9798.createParsingComponentsAtWeekday(reference.reference, tmp4, str3);
    }
  }
];

export default _createClass(NLWeekdayParser, items);
