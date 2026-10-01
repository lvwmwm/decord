// Module ID: 9995
// Function ID: 9996
// Dependencies: [41, 42, 93, 95, 98, 9895, 9989, 9902]

// Module 9995
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 9895 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 9902 */;
import _mod9989 from "module_9989" /* 9989 */;
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
const regExp = new RegExp("([0-9]{4})[\\.\\/\\s](?:(" + repeatedTimeunitPattern.matchAnyPattern(_mod9989.MONTH_DICTIONARY) + ")|([0-9]{1,2}))[\\.\\/\\s]([0-9]{1,2})(?=\\W|$)", "i");
class NLCasualYearMonthDayParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, NLCasualYearMonthDayParser);
    const obj = _getPrototypeOf(NLCasualYearMonthDayParser);
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
_inherits(NLCasualYearMonthDayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
    value: function innerExtract(arg0, arg1) {
      let parsed;
      let parsed1;
      if (arg1[3]) {
        const _parseInt = parseInt;
        parsed = parseInt(arg1[3]);
      } else {
        parsed = _mod9989.MONTH_DICTIONARY[str.toLowerCase(str)];
      }
      if (parsed >= 1) {
        if (parsed <= 12) {
          const _parseInt2 = parseInt;
          const _parseInt3 = parseInt;
          const date = { day: parseInt(arg1[4]), month: parsed, year: parsed1 };
          parsed1 = parseInt(arg1[1]);
          return date;
        }
      }
      return null;
    }
  }
];

export default _createClass(NLCasualYearMonthDayParser, items);
