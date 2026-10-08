// Module ID: 9867
// Function ID: 9868
// Dependencies: [41, 42, 93, 95, 98, 9865, 9771, 9772, 9778]

// Module 9867
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 9771 */;
import findMostLikelyADYear from "findMostLikelyADYear" /* 9772 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 9778 */;
import _mod9865 from "module_9865" /* 9865 */;
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
const combined = "(?:on\\s*?)?(" + _mod9865.ORDINAL_NUMBER_PATTERN + ")(?:\\s*(?:tot|\\-|\\\u2013|until|through|till|\\s)\\s*(" + _mod9865.ORDINAL_NUMBER_PATTERN + "))?(?:-|/|\\s*(?:of)?\\s*)(";
const sum = combined + repeatedTimeunitPattern.matchAnyPattern(_mod9865.MONTH_DICTIONARY);
const regExp = new RegExp(sum + ")(?:(?:-|/|,?\\s*)" + "(" + _mod9865.YEAR_PATTERN + "(?![^\\s]\\d)))?(?=\\W|$)", "i");
class NLMonthNameMiddleEndianParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, NLMonthNameMiddleEndianParser);
    const obj = _getPrototypeOf(NLMonthNameMiddleEndianParser);
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
_inherits(NLMonthNameMiddleEndianParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const tmp3 = _mod9865.MONTH_DICTIONARY[index[3].toLowerCase(index[3])];
      const result = _mod9865.parseOrdinalNumberPattern(index[1]);
      if (result > 31) {
        index.index = index.index + index[1].length;
        return null;
      } else {
        const date = { day: result, month: tmp3 };
        const parsingComponents = createParsingComponents.createParsingComponents(date);
        if (index[4]) {
          parsingComponents.assign("year", _mod9865.parseYear(index[4]));
        } else {
          parsingComponents.imply("year", findMostLikelyADYear.findYearClosestToRef(createParsingComponents.refDate, result, tmp3));
        }
        if (index[2]) {
          const result1 = tmp(9865).parseOrdinalNumberPattern(index[2]);
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

export default _createClass(NLMonthNameMiddleEndianParser, items);
