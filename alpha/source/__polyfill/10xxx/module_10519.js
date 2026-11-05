// Module ID: 10519
// Function ID: 10520
// Dependencies: [41, 42, 93, 95, 98, 10510, 10511, 10512, 10518]

// Module 10519
import _mod10510 from "module_10510" /* 10510 */;
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10511 */;
import findMostLikelyADYear from "findMostLikelyADYear" /* 10512 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10518 */;
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
const ORDINAL_NUMBER_PATTERN = _mod10510.ORDINAL_NUMBER_PATTERN;
const ORDINAL_NUMBER_PATTERN2 = _mod10510.ORDINAL_NUMBER_PATTERN;
const matchAnyPatternResult = repeatedTimeunitPattern.matchAnyPattern(_mod10510.MONTH_DICTIONARY);
const regExp = new RegExp("(?:on\\s{0,3})?(" + ORDINAL_NUMBER_PATTERN + ")(?:\\s{0,3}(?:to|\\-|\\\u2013|until|through|till)?\\s{0,3}(" + ORDINAL_NUMBER_PATTERN2 + "))?(?:-|/|\\s{0,3}(?:of)?\\s{0,3})(" + matchAnyPatternResult + ")(?:(?:-|/|,?\\s{0,3})(" + _mod10510.YEAR_PATTERN + "(?!\\w)))?(?=\\W|$)", "i");
class ENMonthNameLittleEndianParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENMonthNameLittleEndianParser);
    const obj = _getPrototypeOf(ENMonthNameLittleEndianParser);
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
_inherits(ENMonthNameLittleEndianParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const tmp4 = _mod10510.MONTH_DICTIONARY[index[3].toLowerCase(index[3])];
      const result = _mod10510.parseOrdinalNumberPattern(index[1]);
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
          start2.assign("year", _mod10510.parseYear(index[4]));
        } else {
          const start = parsingResult.start;
          start.imply("year", findMostLikelyADYear.findYearClosestToRef(createParsingResult.refDate, result, tmp4));
        }
        if (index[2]) {
          const start3 = parsingResult.start;
          const result1 = tmp2(10510).parseOrdinalNumberPattern(index[2]);
          parsingResult.end = start3.clone();
          const end = parsingResult.end;
          end.assign("day", result1);
        }
        return parsingResult;
      }
    }
  }
];

export default _createClass(ENMonthNameLittleEndianParser, items);
