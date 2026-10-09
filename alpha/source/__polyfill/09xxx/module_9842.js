// Module ID: 9842
// Function ID: 9843
// Dependencies: [41, 42, 93, 95, 98, 9790, 9836, 9791, 9797]

// Module 9842
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 9790 */;
import findMostLikelyADYear from "findMostLikelyADYear" /* 9791 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 9797 */;
import _mod9836 from "module_9836" /* 9836 */;
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
const matchAnyPatternResult = repeatedTimeunitPattern.matchAnyPattern(_mod9836.MONTH_DICTIONARY);
const regExp = new RegExp("(?:am\\s*?)?(?:den\\s*?)?([0-9]{1,2})\\.(?:\\s*(?:bis(?:\\s*(?:am|zum))?|\\-|\\\u2013|\\s)\\s*([0-9]{1,2})\\.?)?\\s*(" + matchAnyPatternResult + ")(?:(?:-|/|,?\\s*)(" + _mod9836.YEAR_PATTERN + "(?![^\\s]\\d)))?(?=\\W|$)", "i");
class DEMonthNameLittleEndianParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, DEMonthNameLittleEndianParser);
    const obj = _getPrototypeOf(DEMonthNameLittleEndianParser);
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
_inherits(DEMonthNameLittleEndianParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const tmp4 = _mod9836.MONTH_DICTIONARY[index[3].toLowerCase(index[3])];
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
          start2.assign("year", _mod9836.parseYear(index[4]));
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

export default _createClass(DEMonthNameLittleEndianParser, items);
