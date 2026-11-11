// Module ID: 11453
// Function ID: 11454
// Dependencies: [41, 42, 93, 95, 98, 11368, 11449, 11369, 11375]

// Module 11453
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 11368 */;
import findMostLikelyADYear from "findMostLikelyADYear" /* 11369 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 11375 */;
import _mod11449 from "module_11449" /* 11449 */;
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
const matchAnyPatternResult = repeatedTimeunitPattern.matchAnyPattern(_mod11449.MONTH_DICTIONARY);
const regExp = new RegExp("([0-9]{1,2})(?:\u00BA|\u00AA|\u00B0)?(?:\\s*(?:desde|de|\\-|\\\u2013|ao?|\\s)\\s*([0-9]{1,2})(?:\u00BA|\u00AA|\u00B0)?)?\\s*(?:de)?\\s*(?:-|/|\\s*(?:de|,)?\\s*)(" + matchAnyPatternResult + ")(?:\\s*(?:de|,)?\\s*(" + _mod11449.YEAR_PATTERN + "))?(?=\\W|$)", "i");
class PTMonthNameLittleEndianParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, PTMonthNameLittleEndianParser);
    const obj = _getPrototypeOf(PTMonthNameLittleEndianParser);
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
_inherits(PTMonthNameLittleEndianParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const tmp4 = _mod11449.MONTH_DICTIONARY[index[3].toLowerCase(index[3])];
      const parsed = parseInt(index[1]);
      if (parsed > 31) {
        index.index = index.index + index[1].length;
        return null;
      } else {
        const start4 = parsingResult.start;
        start4.assign("month", tmp4);
        const start5 = parsingResult.start;
        start5.assign("day", parsed);
        if (index[4]) {
          const start2 = parsingResult.start;
          start2.assign("year", _mod11449.parseYear(index[4]));
        } else {
          const start = parsingResult.start;
          start.imply("year", findMostLikelyADYear.findYearClosestToRef(createParsingResult.refDate, parsed, tmp4));
        }
        if (index[2]) {
          const _parseInt = parseInt;
          const start3 = parsingResult.start;
          const parsed1 = parseInt(index[2]);
          parsingResult.end = start3.clone();
          const end = parsingResult.end;
          end.assign("day", parsed1);
        }
        return parsingResult;
      }
    }
  }
];

export default _createClass(PTMonthNameLittleEndianParser, items);
