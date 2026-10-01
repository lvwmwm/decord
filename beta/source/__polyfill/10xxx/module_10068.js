// Module ID: 10068
// Function ID: 10069
// Dependencies: [41, 42, 93, 95, 98, 9895, 10064, 9902]

// Module 10068
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 9895 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 9902 */;
import _mod10064 from "module_10064" /* 10064 */;
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
const regExp = new RegExp("([0-9]{4})[\\.\\/\\s](?:(" + repeatedTimeunitPattern.matchAnyPattern(_mod10064.MONTH_DICTIONARY) + ")|([0-9]{1,2}))[\\.\\/\\s]([0-9]{1,2})(?=\\W|$)", "i");
class ENCasualYearMonthDayParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENCasualYearMonthDayParser);
    const obj = _getPrototypeOf(ENCasualYearMonthDayParser);
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
_inherits(ENCasualYearMonthDayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
        parsed = _mod10064.MONTH_DICTIONARY[str.toLowerCase(str)];
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

export default _createClass(ENCasualYearMonthDayParser, items);
