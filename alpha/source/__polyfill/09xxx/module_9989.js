// Module ID: 9989
// Function ID: 9990
// Dependencies: [41, 42, 93, 95, 98, 9984, 9832, 9833, 9986]

// Module 9989
import EmptyDuration from "EmptyDuration" /* 9832 */;
import ReferenceWithTimezone from "ReferenceWithTimezone" /* 9833 */;
import _mod9984 from "module_9984" /* 9984 */;
import _mod9986 from "module_9986" /* 9986 */;
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
class UKTimeUnitAgoFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, UKTimeUnitAgoFormatParser);
    const obj = _getPrototypeOf(UKTimeUnitAgoFormatParser);
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
_inherits(UKTimeUnitAgoFormatParser, _mod9986.AbstractParserWithLeftBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    return "(" + _mod9984.TIME_UNITS_PATTERN + ")\\s{0,5}\u0442\u043E\u043C\u0443(?=(?:\\W|$))";
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const parseDurationResult = _mod9984.parseDuration(arg1[1]);
      const reverseDurationResult = EmptyDuration.reverseDuration(parseDurationResult);
      const ParsingComponents = ReferenceWithTimezone.ParsingComponents;
      return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
    }
  }
];

export default _createClass(UKTimeUnitAgoFormatParser, items);
