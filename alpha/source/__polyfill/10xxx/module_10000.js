// Module ID: 10000
// Function ID: 10001
// Dependencies: [41, 42, 93, 95, 98, 9813, 9825, 9826]

// Module 10000
import en from "en" /* 9813 */;
import assignSimilarDate from "assignSimilarDate" /* 9825 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 9826 */;
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
const re6 = /(?:questo|questa)?\s{0,3}(mattina|pomeriggio|sera|notte|mezzanotte|mezzogiorno)(?=\W|$)/i;
class ITCasualTimeParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ITCasualTimeParser);
    const obj = _getPrototypeOf(ITCasualTimeParser);
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
_inherits(ITCasualTimeParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return re6;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(refDate, arg1) {
      refDate = refDate.refDate;
      const parsingComponents = refDate.createParsingComponents();
      const str = arg1[1];
      const formatted = str.toLowerCase();
      if ("pomeriggio" === formatted) {
        parsingComponents.imply("meridiem", en.Meridiem.PM);
        parsingComponents.imply("hour", 15);
      } else {
        if ("sera" !== formatted) {
          if ("notte" !== formatted) {
            if ("mezzanotte" === formatted) {
              const _Date = Date;
              const self = this;
              const self2 = this;
              const date = new Date(refDate.getTime());
              date.setDate(date.getDate() + 1);
              assignSimilarDate.assignSimilarDate(parsingComponents, date);
              assignSimilarDate.implySimilarTime(parsingComponents, date);
              parsingComponents.imply("hour", 0);
              parsingComponents.imply("minute", 0);
              parsingComponents.imply("second", 0);
            } else if ("mattina" === formatted) {
              parsingComponents.imply("meridiem", en.Meridiem.AM);
              parsingComponents.imply("hour", 6);
            } else if ("mezzogiorno" === formatted) {
              parsingComponents.imply("meridiem", en.Meridiem.AM);
              parsingComponents.imply("hour", 12);
            }
          }
        }
        parsingComponents.imply("meridiem", en.Meridiem.PM);
        parsingComponents.imply("hour", 20);
      }
      return parsingComponents;
    }
  }
];

export default _createClass(ITCasualTimeParser, items);
