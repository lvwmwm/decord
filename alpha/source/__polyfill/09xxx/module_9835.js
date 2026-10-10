// Module ID: 9835
// Function ID: 9836
// Dependencies: [41, 42, 93, 95, 98, 9818, 9822, 9826]

// Module 9835
import _mod9818 from "module_9818" /* 9818 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 9826 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

let tmp;
const ReferenceWithTimezone = tmp(9822);
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
const regExp = new RegExp("(" + _mod9818.TIME_UNITS_PATTERN + ")\\s{0,5}(?:later|after|from now|henceforth|forward|out)(?=(?:\\W|$))", "i");
const regExp1 = new RegExp("(" + _mod9818.TIME_UNITS_NO_ABBR_PATTERN + ")\\s{0,5}(later|after|from now)(?=\\W|$)", "i");
class ENTimeUnitLaterFormatParser {
  constructor(strictMode) {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENTimeUnitLaterFormatParser);
    const obj = _getPrototypeOf(ENTimeUnitLaterFormatParser);
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
_inherits(ENTimeUnitLaterFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const parseDurationResult = _mod9818.parseDuration(arg1[1]);
      let relativeFromReference = null;
      if (parseDurationResult) {
        const ParsingComponents = ReferenceWithTimezone.ParsingComponents;
        relativeFromReference = ParsingComponents.createRelativeFromReference(reference.reference, parseDurationResult);
      }
      return relativeFromReference;
    }
  }
];

export default _createClass(ENTimeUnitLaterFormatParser, items);
