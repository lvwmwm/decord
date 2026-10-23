// Module ID: 10279
// Function ID: 10280
// Dependencies: [41, 42, 93, 95, 98, 10276, 10216, 10217, 10221]

// Module 10279
import EmptyDuration from "EmptyDuration" /* 10216 */;
import ReferenceWithTimezone from "ReferenceWithTimezone" /* 10217 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10221 */;
import _mod10276 from "module_10276" /* 10276 */;
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
class FRTimeUnitAgoFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, FRTimeUnitAgoFormatParser);
    const obj = _getPrototypeOf(FRTimeUnitAgoFormatParser);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(FRTimeUnitAgoFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    const regExp = new RegExp("il y a\\s*(" + _mod10276.TIME_UNITS_PATTERN + ")(?=(?:\\W|$))", "i");
    return regExp;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const parseDurationResult = _mod10276.parseDuration(arg1[1]);
      const reverseDurationResult = EmptyDuration.reverseDuration(parseDurationResult);
      const ParsingComponents = ReferenceWithTimezone.ParsingComponents;
      return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
    }
  }
];

export default _createClass(FRTimeUnitAgoFormatParser, items);
