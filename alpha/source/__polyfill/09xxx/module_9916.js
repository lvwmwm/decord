// Module ID: 9916
// Function ID: 9917
// Dependencies: [41, 42, 93, 95, 98, 9819, 9913, 9820, 9826]

// Module 9916
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 9819 */;
import findMostLikelyADYear from "findMostLikelyADYear" /* 9820 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 9826 */;
import _mod9913 from "module_9913" /* 9913 */;
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
const matchAnyPatternResult = repeatedTimeunitPattern.matchAnyPattern(_mod9913.MONTH_DICTIONARY);
const regExp = new RegExp("(" + matchAnyPatternResult + ")\\s*(?:[,-]?\\s*(" + _mod9913.YEAR_PATTERN + ")?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)", "i");
class NLMonthNameParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, NLMonthNameParser);
    const obj = _getPrototypeOf(NLMonthNameParser);
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
_inherits(NLMonthNameParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
    value: function innerExtract(createParsingComponents, arg1) {
      const parsingComponents = createParsingComponents.createParsingComponents();
      parsingComponents.imply("day", 1);
      const tmp4 = _mod9913.MONTH_DICTIONARY[arg1[1].toLowerCase(arg1[1])];
      parsingComponents.assign("month", tmp4);
      if (arg1[2]) {
        parsingComponents.assign("year", _mod9913.parseYear(arg1[2]));
      } else {
        parsingComponents.imply("year", findMostLikelyADYear.findYearClosestToRef(createParsingComponents.refDate, 1, tmp4));
      }
      return parsingComponents;
    }
  }
];

export default _createClass(NLMonthNameParser, items);
