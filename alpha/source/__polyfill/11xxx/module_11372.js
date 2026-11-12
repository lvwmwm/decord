// Module ID: 11372
// Function ID: 11373
// Dependencies: [41, 42, 93, 95, 98, 11362, 11361, 11363, 11369]

// Module 11372
import _mod11361 from "module_11361" /* 11361 */;
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 11362 */;
import findMostLikelyADYear from "findMostLikelyADYear" /* 11363 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 11369 */;
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
const matchAnyPatternResult = repeatedTimeunitPattern.matchAnyPattern(_mod11361.MONTH_DICTIONARY);
const regExp = new RegExp("((?:in)\\s*)?(" + matchAnyPatternResult + ")\\s*(?:(?:,|-|of)?\\s*(" + _mod11361.YEAR_PATTERN + ")?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)", "i");
class ENMonthNameParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENMonthNameParser);
    const obj = _getPrototypeOf(ENMonthNameParser);
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
_inherits(ENMonthNameParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const str = index[2];
      const formatted = str.toLowerCase();
      if (index[0].length <= 3) {
        if (!_mod11361.FULL_MONTH_NAME_DICTIONARY[formatted]) {
          return null;
        }
      }
      let str2 = index[1];
      index = index.index;
      createParsingResult = createParsingResult.createParsingResult;
      if (!str2) {
        str2 = "";
      }
      const parsingResult = createParsingResult(index + str2.length, index.index + index[0].length);
      const start = parsingResult.start;
      start.imply("day", 1);
      const start2 = parsingResult.start;
      start2.addTag("parser/ENMonthNameParser");
      const tmp10 = _mod11361.MONTH_DICTIONARY[formatted];
      const start3 = parsingResult.start;
      start3.assign("month", tmp10);
      if (index[3]) {
        const start5 = parsingResult.start;
        start5.assign("year", _mod11361.parseYear(index[3]));
      } else {
        const start4 = parsingResult.start;
        start4.imply("year", findMostLikelyADYear.findYearClosestToRef(createParsingResult.refDate, 1, tmp10));
      }
      return parsingResult;
    }
  }
];

export default _createClass(ENMonthNameParser, items);
