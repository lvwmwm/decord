// Module ID: 10426
// Function ID: 10427
// Name: _isNativeReflectConstruct
// Dependencies: [41, 42, 93, 95, 98, 10423, 10363, 10364, 10368]

// Module 10426 (_isNativeReflectConstruct)
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10368 */;
import closure_2 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const FRTimeUnitAgoFormatParser = require;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class FRTimeUnitAgoFormatParser {
  constructor() {
    self = this;
    tmp = closure_2(this, FRTimeUnitAgoFormatParser);
    tmp2 = closure_4;
    obj = closure_4(FRTimeUnitAgoFormatParser);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(FRTimeUnitAgoFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const items = [
  {
    key: "innerPattern",
    value: function innerPattern() {
      const regExp = new RegExp("il y a\\s*(" + FRTimeUnitAgoFormatParser(10423).TIME_UNITS_PATTERN + ")(?=(?:\\W|$))", "i");
      return regExp;
    }
  },
  {
    key: "innerExtract",
    value: function innerExtract(reference) {
      const parseDurationResult = FRTimeUnitAgoFormatParser(10423).parseDuration(arg1[1]);
      const ParsingComponents = FRTimeUnitAgoFormatParser(10364).ParsingComponents;
      return ParsingComponents.createRelativeFromReference(reference.reference, FRTimeUnitAgoFormatParser(10363).reverseDuration(FRTimeUnitAgoFormatParser(10423).parseDuration(arg1[1])));
    }
  }
];

export default _createClass(FRTimeUnitAgoFormatParser, items);
