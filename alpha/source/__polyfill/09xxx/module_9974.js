// Module ID: 9974
// Function ID: 9975
// Dependencies: [41, 42, 93, 95, 98, 9973, 9819, 9820, 9975]

// Module 9974
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 9819 */;
import findMostLikelyADYear from "findMostLikelyADYear" /* 9820 */;
import _mod9973 from "module_9973" /* 9973 */;
import _mod9975 from "module_9975" /* 9975 */;
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
class UKMonthNameLittleEndianParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, UKMonthNameLittleEndianParser);
    const obj = _getPrototypeOf(UKMonthNameLittleEndianParser);
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
_inherits(UKMonthNameLittleEndianParser, _mod9975.AbstractParserWithLeftRightBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    const ORDINAL_NUMBER_PATTERN = _mod9973.ORDINAL_NUMBER_PATTERN;
    const ORDINAL_NUMBER_PATTERN2 = _mod9973.ORDINAL_NUMBER_PATTERN;
    const matchAnyPatternResult = repeatedTimeunitPattern.matchAnyPattern(_mod9973.MONTH_DICTIONARY);
    return "(?:\u0437|\u0456\u0437)?\\s*(" + ORDINAL_NUMBER_PATTERN + ")(?:\\s{0,3}(?:\u043F\u043E|-|\u2013|\u0434\u043E)?\\s{0,3}(" + ORDINAL_NUMBER_PATTERN2 + "))?(?:-|\\/|\\s{0,3}(?:of)?\\s{0,3})(" + matchAnyPatternResult + ")(?:(?:-|\\/|,?\\s{0,3})(" + _mod9973.YEAR_PATTERN + "(?![^\\s]\\d)))?";
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingResult, index) {
      const parsingResult = createParsingResult.createParsingResult(index.index, index[0]);
      const tmp4 = _mod9973.MONTH_DICTIONARY[index[3].toLowerCase(index[3])];
      const result = _mod9973.parseOrdinalNumberPattern(index[1]);
      if (result > 31) {
        index.index = index.index + index[1].length;
        return null;
      } else {
        const start4 = parsingResult.start;
        start4.assign("month", tmp4);
        const start5 = parsingResult.start;
        start5.assign("day", result);
        if (index[4]) {
          const start2 = parsingResult.start;
          start2.assign("year", _mod9973.parseYearPattern(index[4]));
        } else {
          const start = parsingResult.start;
          start.imply("year", findMostLikelyADYear.findYearClosestToRef(createParsingResult.reference.instant, result, tmp4));
        }
        if (index[2]) {
          const start3 = parsingResult.start;
          const result1 = tmp2(9973).parseOrdinalNumberPattern(index[2]);
          parsingResult.end = start3.clone();
          const end = parsingResult.end;
          end.assign("day", result1);
        }
        return parsingResult;
      }
    }
  }
];

export default _createClass(UKMonthNameLittleEndianParser, items);
