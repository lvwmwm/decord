// Module ID: 9970
// Function ID: 9971
// Dependencies: [41, 42, 93, 95, 98, 9969, 9815, 9816, 9971]

// Module 9970
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 9815 */;
import findMostLikelyADYear from "findMostLikelyADYear" /* 9816 */;
import _mod9969 from "module_9969" /* 9969 */;
import _mod9971 from "module_9971" /* 9971 */;
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
_inherits(UKMonthNameLittleEndianParser, _mod9971.AbstractParserWithLeftRightBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    const ORDINAL_NUMBER_PATTERN = _mod9969.ORDINAL_NUMBER_PATTERN;
    const ORDINAL_NUMBER_PATTERN2 = _mod9969.ORDINAL_NUMBER_PATTERN;
    const matchAnyPatternResult = repeatedTimeunitPattern.matchAnyPattern(_mod9969.MONTH_DICTIONARY);
    return "(?:\u0437|\u0456\u0437)?\\s*(" + ORDINAL_NUMBER_PATTERN + ")(?:\\s{0,3}(?:\u043F\u043E|-|\u2013|\u0434\u043E)?\\s{0,3}(" + ORDINAL_NUMBER_PATTERN2 + "))?(?:-|\\/|\\s{0,3}(?:of)?\\s{0,3})(" + matchAnyPatternResult + ")(?:(?:-|\\/|,?\\s{0,3})(" + _mod9969.YEAR_PATTERN + "(?![^\\s]\\d)))?";
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(createParsingResult, index) {
      const parsingResult = createParsingResult.createParsingResult(index.index, index[0]);
      const tmp4 = _mod9969.MONTH_DICTIONARY[index[3].toLowerCase(index[3])];
      const result = _mod9969.parseOrdinalNumberPattern(index[1]);
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
          start2.assign("year", _mod9969.parseYearPattern(index[4]));
        } else {
          const start = parsingResult.start;
          start.imply("year", findMostLikelyADYear.findYearClosestToRef(createParsingResult.reference.instant, result, tmp4));
        }
        if (index[2]) {
          const start3 = parsingResult.start;
          const result1 = tmp2(9969).parseOrdinalNumberPattern(index[2]);
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
