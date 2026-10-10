// Module ID: 9995
// Function ID: 9996
// Dependencies: [41, 42, 93, 95, 98, 9988, 9821, 9822, 9826]

// Module 9995
import EmptyDuration from "EmptyDuration" /* 9821 */;
import ReferenceWithTimezone from "ReferenceWithTimezone" /* 9822 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 9826 */;
import _mod9988 from "module_9988" /* 9988 */;
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
const regExp = new RegExp("(" + _mod9988.TIME_UNITS_PATTERN + ")\\s{0,5}(?:fa|prima|precedente)(?=(?:\\W|$))", "i");
const regExp1 = new RegExp("(" + _mod9988.TIME_UNITS_PATTERN + ")\\s{0,5}fa(?=(?:\\W|$))", "i");
class ENTimeUnitAgoFormatParser {
  constructor(strictMode) {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENTimeUnitAgoFormatParser);
    const obj = _getPrototypeOf(ENTimeUnitAgoFormatParser);
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
_inherits(ENTimeUnitAgoFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const parseDurationResult = _mod9988.parseDuration(arg1[1]);
      const reverseDurationResult = EmptyDuration.reverseDuration(parseDurationResult);
      const ParsingComponents = ReferenceWithTimezone.ParsingComponents;
      return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
    }
  }
];

export default _createClass(ENTimeUnitAgoFormatParser, items);
