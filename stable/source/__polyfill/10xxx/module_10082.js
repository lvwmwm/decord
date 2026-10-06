// Module ID: 10082
// Function ID: 10083
// Dependencies: [41, 42, 93, 95, 98, 9937, 9938, 9939]

// Module 10082
import Meridiem from "Meridiem" /* 9937 */;
import assignSimilarDate from "assignSimilarDate" /* 9938 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 9939 */;
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
class ESCasualTimeParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ESCasualTimeParser);
    const obj = _getPrototypeOf(ESCasualTimeParser);
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
_inherits(ESCasualTimeParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return /(?:esta\s*)?(mañana|tarde|medianoche|mediodia|mediodía|noche)(?=\W|$)/i;
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
      if ("tarde" === formatted) {
        parsingComponents.imply("meridiem", Meridiem.Meridiem.PM);
        parsingComponents.imply("hour", 15);
      } else if ("noche" === formatted) {
        parsingComponents.imply("meridiem", Meridiem.Meridiem.PM);
        parsingComponents.imply("hour", 22);
      } else if ("ma\u00F1ana" === formatted) {
        parsingComponents.imply("meridiem", Meridiem.Meridiem.AM);
        parsingComponents.imply("hour", 6);
      } else if ("medianoche" === formatted) {
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
      } else if ("mediodia" === formatted) {
        parsingComponents.imply("meridiem", Meridiem.Meridiem.AM);
        parsingComponents.imply("hour", 12);
      }
      return parsingComponents;
    }
  }
];

export default _createClass(ESCasualTimeParser, items);
