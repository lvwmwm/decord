// Module ID: 10304
// Function ID: 10305
// Dependencies: [41, 42, 93, 95, 98, 10161, 10305, 10188, 10168]

// Module 10304
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10161 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10168 */;
import _mod10305 from "module_10305" /* 10305 */;
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
const regExp = new RegExp("(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:(este|esta|pasado|pr[o\u00F3]ximo)\\s*)?(" + repeatedTimeunitPattern.matchAnyPattern(_mod10305.WEEKDAY_DICTIONARY) + ")(?:\\s*(?:\\,|\\)|\\\uFF09))?(?:\\s*(este|esta|pasado|pr[\u00F3o]ximo)\\s*semana)?(?=\\W|\\d|$)", "i");
class ESWeekdayParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ESWeekdayParser);
    const obj = _getPrototypeOf(ESWeekdayParser);
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
_inherits(ESWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const tmp4 = _mod10305.WEEKDAY_DICTIONARY[formatted];
      if (undefined === tmp4) {
        return null;
      } else {
        const str2 = arg1[1] || arg1[3] || "";
        const formatted1 = str2.toLowerCase();
        let str5 = "this";
        if ("pasado" != formatted1) {
          str5 = "next";
          if ("pr\u00F3ximo" != formatted1) {
            str5 = "next";
            if ("proximo" != formatted1) {
              str5 = null;
              if ("este" == formatted1) {
                str5 = "this";
              }
            }
          }
        }
        return _mod10188.createParsingComponentsAtWeekday(reference.reference, tmp4, str5);
      }
    }
  }
];

export default _createClass(ESWeekdayParser, items);
