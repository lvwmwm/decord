// Module ID: 9985
// Function ID: 9986
// Dependencies: [41, 42, 93, 95, 98, 9973, 9821, 9822, 9975]

// Module 9985
import _mod9973 from "module_9973" /* 9973 */;
import _mod9975 from "module_9975" /* 9975 */;
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
class UKTimeUnitCasualRelativeFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, UKTimeUnitCasualRelativeFormatParser);
    const obj = _getPrototypeOf(UKTimeUnitCasualRelativeFormatParser);
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
_inherits(UKTimeUnitCasualRelativeFormatParser, _mod9975.AbstractParserWithLeftRightBoundaryChecking);
const entry = {
  key: "innerPatternString",
  value: function innerPatternString(arg0) {
    return "(\u0446\u0456|\u043E\u0441\u0442\u0430\u043D\u043D\u0456|\u043C\u0438\u043D\u0443\u043B\u0456|\u043C\u0430\u0439\u0431\u0443\u0442\u043D\u0456|\u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0456|\u043F\u0456\u0441\u043B\u044F|\u0447\u0435\u0440\u0435\u0437|\\+|-)\\s*(" + _mod9973.TIME_UNITS_PATTERN + ")";
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const str = arg1[1];
      const formatted = str.toLowerCase();
      const parseDurationResult = _mod9973.parseDuration(arg1[3]);
      if ("\u043E\u0441\u0442\u0430\u043D\u043D\u0456" !== formatted) {
        let reverseDurationResult;
        if ("\u043C\u0438\u043D\u0443\u043B\u0456" !== formatted) {
          reverseDurationResult = parseDurationResult;
        }
        const ParsingComponents = tmp2(9822).ParsingComponents;
        return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
      }
      reverseDurationResult = tmp2(9821).reverseDuration(parseDurationResult);
    }
  }
];

export default _createClass(UKTimeUnitCasualRelativeFormatParser, items);
