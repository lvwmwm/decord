// Module ID: 11448
// Function ID: 11449
// Dependencies: [41, 42, 93, 95, 98, 11368, 11449, 11395, 11375]

// Module 11448
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 11368 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 11375 */;
import _mod11449 from "module_11449" /* 11449 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let tmp2;
const _mod11395 = tmp2(11395);
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
const regExp = new RegExp("(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:(este|esta|passado|pr[o\u00F3]ximo)\\s*)?(" + repeatedTimeunitPattern.matchAnyPattern(_mod11449.WEEKDAY_DICTIONARY) + ")(?:\\s*(?:\\,|\\)|\\\uFF09))?(?:\\s*(este|esta|passado|pr[\u00F3o]ximo)\\s*semana)?(?=\\W|\\d|$)", "i");
class PTWeekdayParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, PTWeekdayParser);
    const obj = _getPrototypeOf(PTWeekdayParser);
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
_inherits(PTWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const tmp4 = _mod11449.WEEKDAY_DICTIONARY[formatted];
      if (undefined === tmp4) {
        return null;
      } else {
        const str2 = arg1[1] || arg1[3] || "";
        const formatted1 = str2.toLowerCase();
        let str5 = "this";
        if ("passado" != formatted1) {
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
        return _mod11395.createParsingComponentsAtWeekday(reference.reference, tmp4, str5);
      }
    }
  }
];

export default _createClass(PTWeekdayParser, items);
