// Module ID: 9817
// Function ID: 9818
// Dependencies: [41, 42, 93, 95, 98, 9818, 9822, 9826]

// Module 9817
import _mod9818 from "module_9818" /* 9818 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 9826 */;
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
const regExp = new RegExp("(?:(?:within|in|for)\\s*)?(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(" + _mod9818.TIME_UNITS_PATTERN + ")(?=\\W|$)", "i");
const regExp1 = new RegExp("(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(" + _mod9818.TIME_UNITS_PATTERN + ")(?=\\W|$)", "i");
const regExp2 = new RegExp("(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(" + _mod9818.TIME_UNITS_NO_ABBR_PATTERN + ")(?=\\W|$)", "i");
class ENTimeUnitWithinFormatParser {
  constructor(strictMode) {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENTimeUnitWithinFormatParser);
    const obj = _getPrototypeOf(ENTimeUnitWithinFormatParser);
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
_inherits(ENTimeUnitWithinFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern(option) {
    let tmp2;
    if (this.strictMode) {
      tmp2 = regExp2;
    } else {
      tmp2 = option.option.forwardDate ? regExp : regExp1;
    }
    return tmp2;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const str = arg1[0];
      if (str.match(/^for\s*the\s*\w+/)) {
        return null;
      } else {
        const parseDurationResult = _mod9818.parseDuration(arg1[1]);
        let relativeFromReference = null;
        const tmp = require;
        if (parseDurationResult) {
          const ParsingComponents = tmp(9822).ParsingComponents;
          relativeFromReference = ParsingComponents.createRelativeFromReference(reference.reference, parseDurationResult);
        }
        return relativeFromReference;
      }
    }
  }
];

export default _createClass(ENTimeUnitWithinFormatParser, items);
