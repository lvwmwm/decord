// Module ID: 9894
// Function ID: 9895
// Dependencies: [41, 42, 93, 95, 98, 9884, 9792, 9793, 9797]

// Module 9894
import EmptyDuration from "EmptyDuration" /* 9792 */;
import ReferenceWithTimezone from "ReferenceWithTimezone" /* 9793 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 9797 */;
import _mod9884 from "module_9884" /* 9884 */;
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
const regExp = new RegExp("(" + _mod9884.TIME_UNITS_PATTERN + ")(?:geleden|voor|eerder)(?=(?:\\W|$))", "i");
const regExp1 = new RegExp("(" + _mod9884.TIME_UNITS_PATTERN + ")geleden(?=(?:\\W|$))", "i");
class NLTimeUnitAgoFormatParser {
  constructor(strictMode) {
    let constructResult;
    const self = this;
    _classCallCheck(this, NLTimeUnitAgoFormatParser);
    const obj = _getPrototypeOf(NLTimeUnitAgoFormatParser);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.strictMode = strictMode;
    return tmp3Result;
  }
}
_inherits(NLTimeUnitAgoFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return this.strictMode ? regExp1 : regExp;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const parseDurationResult = _mod9884.parseDuration(arg1[1]);
      const reverseDurationResult = EmptyDuration.reverseDuration(parseDurationResult);
      const ParsingComponents = ReferenceWithTimezone.ParsingComponents;
      return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
    }
  }
];

export default _createClass(NLTimeUnitAgoFormatParser, items);
