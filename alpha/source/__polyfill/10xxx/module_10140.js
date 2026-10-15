// Module ID: 10140
// Function ID: 10141
// Dependencies: [41, 42, 93, 95, 98, 10132, 10040, 10041, 10045]

// Module 10140
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10045 */;
import _mod10132 from "module_10132" /* 10132 */;
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
const regExp = new RegExp("(dit|deze|vorig|afgelopen|(?:aan)?komend|over|\\+|-)e?\\s*(" + _mod10132.TIME_UNITS_PATTERN + ")(?=\\W|$)", "i");
class NLTimeUnitCasualRelativeFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, NLTimeUnitCasualRelativeFormatParser);
    const obj = _getPrototypeOf(NLTimeUnitCasualRelativeFormatParser);
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
_inherits(NLTimeUnitCasualRelativeFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
    value: function innerExtract(reference, arg1) {
      const str = arg1[1];
      const formatted = str.toLowerCase();
      const parseDurationResult = _mod10132.parseDuration(arg1[2]);
      if ("vorig" !== formatted) {
        let reverseDurationResult;
        if ("afgelopen" !== formatted) {
          reverseDurationResult = parseDurationResult;
        }
        const ParsingComponents = tmp2(10041).ParsingComponents;
        return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
      }
      reverseDurationResult = tmp2(10040).reverseDuration(parseDurationResult);
    }
  }
];

export default _createClass(NLTimeUnitCasualRelativeFormatParser, items);
