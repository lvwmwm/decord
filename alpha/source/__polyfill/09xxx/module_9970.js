// Module ID: 9970
// Function ID: 9971
// Dependencies: [41, 42, 93, 95, 98, 9963, 9822, 9826]

// Module 9970
import ReferenceWithTimezone from "ReferenceWithTimezone" /* 9822 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 9826 */;
import _mod9963 from "module_9963" /* 9963 */;
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
class ESTimeUnitWithinFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ESTimeUnitWithinFormatParser);
    const obj = _getPrototypeOf(ESTimeUnitWithinFormatParser);
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
_inherits(ESTimeUnitWithinFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    const regExp = new RegExp("(?:en|por|durante|de|dentro de)\\s*(" + _mod9963.TIME_UNITS_PATTERN + ")(?=\\W|$)", "i");
    return regExp;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const parseDurationResult = _mod9963.parseDuration(arg1[1]);
      const ParsingComponents = ReferenceWithTimezone.ParsingComponents;
      return ParsingComponents.createRelativeFromReference(reference.reference, parseDurationResult);
    }
  }
];

export default _createClass(ESTimeUnitWithinFormatParser, items);
