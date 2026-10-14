// Module ID: 10256
// Function ID: 10257
// Dependencies: [41, 42, 93, 95, 98, 10161, 10255, 10188, 10168]

// Module 10256
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10161 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10168 */;
import _mod10255 from "module_10255" /* 10255 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let tmp2;
const _mod10188 = tmp2(10188);
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
const regExp = new RegExp("(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:op\\s*?)?(?:(deze|vorige|volgende)\\s*(?:week\\s*)?)?(" + repeatedTimeunitPattern.matchAnyPattern(_mod10255.WEEKDAY_DICTIONARY) + ")(?=\\W|$)", "i");
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
      const tmp4 = _mod10255.WEEKDAY_DICTIONARY[formatted];
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
      return _mod10188.createParsingComponentsAtWeekday(reference.reference, tmp4, str3);
    }
  }
];

export default _createClass(NLWeekdayParser, items);
