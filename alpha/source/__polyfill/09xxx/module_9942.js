// Module ID: 9942
// Function ID: 9943
// Dependencies: [41, 42, 93, 95, 98, 9771, 9940, 9772, 9778]

// Module 9942
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 9771 */;
import findMostLikelyADYear from "findMostLikelyADYear" /* 9772 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 9778 */;
import _mod9940 from "module_9940" /* 9940 */;
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
const matchAnyPatternResult = repeatedTimeunitPattern.matchAnyPattern(_mod9940.MONTH_DICTIONARY);
const ORDINAL_NUMBER_PATTERN = _mod9940.ORDINAL_NUMBER_PATTERN;
const regExp = new RegExp("(" + matchAnyPatternResult + ")(?:-|/|\\s*,?\\s*)(" + ORDINAL_NUMBER_PATTERN + ")(?!\\s*(?:am|pm))\\s*(?:(?:al|\\-|\\alle|\\del|\\s)\\s*(" + _mod9940.ORDINAL_NUMBER_PATTERN + ")\\s*)?(?:(?:-|/|\\s*,?\\s*)(" + _mod9940.YEAR_PATTERN + "))?(?=\\W|$)(?!\\:\\d)", "i");
class ENMonthNameMiddleEndianParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENMonthNameMiddleEndianParser);
    const obj = _getPrototypeOf(ENMonthNameMiddleEndianParser);
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
_inherits(ENMonthNameMiddleEndianParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
    value: function innerExtract(createParsingComponents, index) {
      const tmp3 = _mod9940.MONTH_DICTIONARY[index[1].toLowerCase(index[1])];
      const result = _mod9940.parseOrdinalNumberPattern(index[2]);
      if (result > 31) {
        return null;
      } else {
        const date = { day: result, month: tmp3 };
        const parsingComponents = createParsingComponents.createParsingComponents(date);
        if (index[4]) {
          parsingComponents.assign("year", _mod9940.parseYear(index[4]));
        } else {
          parsingComponents.imply("year", findMostLikelyADYear.findYearClosestToRef(createParsingComponents.refDate, result, tmp3));
        }
        if (index[3]) {
          const result1 = tmp(9940).parseOrdinalNumberPattern(index[3]);
          const parsingResult = createParsingComponents.createParsingResult(index.index, index[0]);
          parsingResult.start = parsingComponents;
          parsingResult.end = parsingComponents.clone();
          const end = parsingResult.end;
          end.assign("day", result1);
          return parsingResult;
        } else {
          return parsingComponents;
        }
      }
    }
  }
];

export default _createClass(ENMonthNameMiddleEndianParser, items);
