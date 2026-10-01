// Module ID: 10052
// Function ID: 10053
// Dependencies: [41, 42, 93, 95, 98, 9895, 10049, 9896, 10051]

// Module 10052
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 9895 */;
import findMostLikelyADYear from "findMostLikelyADYear" /* 9896 */;
import _mod10049 from "module_10049" /* 10049 */;
import _mod10051 from "module_10051" /* 10051 */;
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
class UkMonthNameParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, UkMonthNameParser);
    const obj = _getPrototypeOf(UkMonthNameParser);
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
_inherits(UkMonthNameParser, _mod10051.AbstractParserWithLeftBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    const matchAnyPatternResult = repeatedTimeunitPattern.matchAnyPattern(_mod10049.MONTH_DICTIONARY);
    return "((?:\u0432|\u0443)\\s*)?(" + matchAnyPatternResult + ")\\s*(?:[,-]?\\s*(" + _mod10049.YEAR_PATTERN + ")?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)";
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingResult, index) {
      const str = index[2];
      const formatted = str.toLowerCase();
      if (index[0].length <= 3) {
        if (!_mod10049.FULL_MONTH_NAME_DICTIONARY[formatted]) {
          return null;
        }
      }
      const parsingResult = createParsingResult.createParsingResult(index.index, index.index + index[0].length);
      const start = parsingResult.start;
      start.imply("day", 1);
      const tmp9 = _mod10049.MONTH_DICTIONARY[formatted];
      const start2 = parsingResult.start;
      start2.assign("month", tmp9);
      if (index[3]) {
        const start4 = parsingResult.start;
        start4.assign("year", _mod10049.parseYearPattern(index[3]));
      } else {
        const start3 = parsingResult.start;
        start3.imply("year", findMostLikelyADYear.findYearClosestToRef(createParsingResult.reference.instant, 1, tmp9));
      }
      return parsingResult;
    }
  }
];

export default _createClass(UkMonthNameParser, items);
