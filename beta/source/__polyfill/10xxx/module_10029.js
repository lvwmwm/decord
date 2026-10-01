// Module ID: 10029
// Function ID: 10030
// Dependencies: [41, 42, 93, 95, 98, 10024, 9897, 9898, 10026]

// Module 10029
import EmptyDuration from "EmptyDuration" /* 9897 */;
import ReferenceWithTimezone from "ReferenceWithTimezone" /* 9898 */;
import REGEX_PARTS from "REGEX_PARTS" /* 10024 */;
import AbstractParserWithLeftBoundaryChecking from "AbstractParserWithLeftBoundaryChecking" /* 10026 */;
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
class RUTimeUnitAgoFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, RUTimeUnitAgoFormatParser);
    const obj = _getPrototypeOf(RUTimeUnitAgoFormatParser);
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
_inherits(RUTimeUnitAgoFormatParser, AbstractParserWithLeftBoundaryChecking.AbstractParserWithLeftBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    return "(" + REGEX_PARTS.TIME_UNITS_PATTERN + ")\\s{0,5}\u043D\u0430\u0437\u0430\u0434(?=(?:\\W|$))";
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const parseDurationResult = REGEX_PARTS.parseDuration(arg1[1]);
      const reverseDurationResult = EmptyDuration.reverseDuration(parseDurationResult);
      const ParsingComponents = ReferenceWithTimezone.ParsingComponents;
      return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
    }
  }
];

export default _createClass(RUTimeUnitAgoFormatParser, items);
