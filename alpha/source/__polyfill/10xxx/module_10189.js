// Module ID: 10189
// Function ID: 10190
// Dependencies: [41, 42, 93, 95, 98, 10173, 10177, 10176, 10181]

// Module 10189
import _mod10173 from "module_10173" /* 10173 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10181 */;
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
const regExp = new RegExp("(" + _mod10173.TIME_UNITS_PATTERN + ")\\s{0,5}(?:ago|before|earlier)(?=\\W|$)", "i");
const regExp1 = new RegExp("(" + _mod10173.TIME_UNITS_NO_ABBR_PATTERN + ")\\s{0,5}(?:ago|before|earlier)(?=\\W|$)", "i");
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
      const parseDurationResult = _mod10173.parseDuration(arg1[1]);
      let relativeFromReference = null;
      if (parseDurationResult) {
        const ParsingComponents = tmp(10177).ParsingComponents;
        relativeFromReference = ParsingComponents.createRelativeFromReference(reference.reference, tmp(10176).reverseDuration(parseDurationResult));
      }
      return relativeFromReference;
    }
  }
];

export default _createClass(ENTimeUnitAgoFormatParser, items);
