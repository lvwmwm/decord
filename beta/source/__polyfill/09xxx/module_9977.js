// Module ID: 9977
// Function ID: 9978
// Dependencies: [41, 42, 93, 95, 98, 9932, 9978, 9959, 9939]

// Module 9977
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 9932 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 9939 */;
import _mod9978 from "module_9978" /* 9978 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let tmp2;
const _mod9959 = tmp2(9959);
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
const regExp = new RegExp("(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:a[mn]\\s*?)?(?:(diese[mn]|letzte[mn]|n(?:\u00E4|ae)chste[mn])\\s*)?(" + repeatedTimeunitPattern.matchAnyPattern(_mod9978.WEEKDAY_DICTIONARY) + ")(?:\\s*(?:\\,|\\)|\\\uFF09))?(?:\\s*(diese|letzte|n(?:\u00E4|ae)chste)\\s*woche)?(?=\\W|$)", "i");
class DEWeekdayParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, DEWeekdayParser);
    const obj = _getPrototypeOf(DEWeekdayParser);
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
_inherits(DEWeekdayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const tmp4 = _mod9978.WEEKDAY_DICTIONARY[formatted];
      if (!str2) {
        str2 = arg1[3];
      }
      if (!str2) {
        str2 = "";
      }
      const str3 = str2.toLowerCase();
      let str4 = "last";
      if (!str3.match(/letzte/)) {
        str4 = "next";
        if (!str3.match(/chste/)) {
          str4 = null;
          if (str3.match(/diese/)) {
            str4 = "this";
          }
        }
      }
      return _mod9959.createParsingComponentsAtWeekday(reference.reference, tmp4, str4);
    }
  }
];

export default _createClass(DEWeekdayParser, items);
