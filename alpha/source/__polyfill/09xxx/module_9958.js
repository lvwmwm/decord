// Module ID: 9958
// Function ID: 9959
// Dependencies: [41, 42, 93, 95, 98, 9959, 9793, 9797]

// Module 9958
import ReferenceWithTimezone from "ReferenceWithTimezone" /* 9793 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 9797 */;
import _mod9959 from "module_9959" /* 9959 */;
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
const regExp = new RegExp("(?:within|in|for)\\s*(?:(?:pi\u00F9 o meno|intorno|approssimativamente|verso|verso le)\\s*(?:~\\s*)?)?(" + _mod9959.TIME_UNITS_PATTERN + ")(?=\\W|$)", "i");
const regExp1 = new RegExp("(?:(?:pi\u00F9 o meno|intorno|approssimativamente|verso|verso le)\\s*(?:~\\s*)?)?(" + _mod9959.TIME_UNITS_PATTERN + ")(?=\\W|$)", "i");
class ENTimeUnitWithinFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENTimeUnitWithinFormatParser);
    const obj = _getPrototypeOf(ENTimeUnitWithinFormatParser);
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
_inherits(ENTimeUnitWithinFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern(option) {
    return option.option.forwardDate ? regExp1 : regExp;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const parseDurationResult = _mod9959.parseDuration(arg1[1]);
      const ParsingComponents = ReferenceWithTimezone.ParsingComponents;
      return ParsingComponents.createRelativeFromReference(reference.reference, parseDurationResult);
    }
  }
];

export default _createClass(ENTimeUnitWithinFormatParser, items);
