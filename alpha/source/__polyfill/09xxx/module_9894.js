// Module ID: 9894
// Function ID: 9895
// Dependencies: [41, 42, 93, 95, 98, 9892, 9830, 9831, 9837]

// Module 9894
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 9830 */;
import findMostLikelyADYear from "findMostLikelyADYear" /* 9831 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 9837 */;
import _mod9892 from "module_9892" /* 9892 */;
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
const ORDINAL_NUMBER_PATTERN = _mod9892.ORDINAL_NUMBER_PATTERN;
const ORDINAL_NUMBER_PATTERN2 = _mod9892.ORDINAL_NUMBER_PATTERN;
const matchAnyPatternResult = repeatedTimeunitPattern.matchAnyPattern(_mod9892.MONTH_DICTIONARY);
const regExp = new RegExp("(?:on\\s*?)?(" + ORDINAL_NUMBER_PATTERN + ")(?:\\s*(?:au|\\-|\\\u2013|jusqu'au?|\\s)\\s*(" + ORDINAL_NUMBER_PATTERN2 + "))?(?:-|/|\\s*(?:de)?\\s*)(" + matchAnyPatternResult + ")(?:(?:-|/|,?\\s*)(" + _mod9892.YEAR_PATTERN + "(?![^\\s]\\d)))?(?=\\W|$)", "i");
class FRMonthNameLittleEndianParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, FRMonthNameLittleEndianParser);
    const obj = _getPrototypeOf(FRMonthNameLittleEndianParser);
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
_inherits(FRMonthNameLittleEndianParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
    value: function innerExtract(createParsingResult, index) {
      const parsingResult = createParsingResult.createParsingResult(index.index, index[0]);
      const tmp4 = _mod9892.MONTH_DICTIONARY[index[3].toLowerCase(index[3])];
      const result = _mod9892.parseOrdinalNumberPattern(index[1]);
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
          start2.assign("year", _mod9892.parseYear(index[4]));
        } else {
          const start = parsingResult.start;
          start.imply("year", findMostLikelyADYear.findYearClosestToRef(createParsingResult.refDate, result, tmp4));
        }
        if (index[2]) {
          const start3 = parsingResult.start;
          const result1 = tmp2(9892).parseOrdinalNumberPattern(index[2]);
          parsingResult.end = start3.clone();
          const end = parsingResult.end;
          end.assign("day", result1);
        }
        return parsingResult;
      }
    }
  }
];

export default _createClass(FRMonthNameLittleEndianParser, items);
