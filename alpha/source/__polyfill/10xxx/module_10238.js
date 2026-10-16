// Module ID: 10238
// Function ID: 10239
// Dependencies: [41, 42, 93, 95, 98, 10223, 10056, 10057, 10061]

// Module 10238
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10061 */;
import _mod10223 from "module_10223" /* 10223 */;
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
const regExp = new RegExp("(questo|ultimo|passato|prossimo|dopo|questa|ultima|passata|prossima|\\+|-)\\s*(" + _mod10223.TIME_UNITS_PATTERN + ")(?=\\W|$)", "i");
class ENTimeUnitCasualRelativeFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENTimeUnitCasualRelativeFormatParser);
    const obj = _getPrototypeOf(ENTimeUnitCasualRelativeFormatParser);
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
_inherits(ENTimeUnitCasualRelativeFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const parseDurationResult = _mod10223.parseDuration(arg1[2]);
      if ("last" !== formatted) {
        let reverseDurationResult;
        if ("past" !== formatted) {
          reverseDurationResult = parseDurationResult;
        }
        const ParsingComponents = tmp2(10057).ParsingComponents;
        return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
      }
      reverseDurationResult = tmp2(10056).reverseDuration(parseDurationResult);
    }
  }
];

export default _createClass(ENTimeUnitCasualRelativeFormatParser, items);
