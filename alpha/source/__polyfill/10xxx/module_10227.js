// Module ID: 10227
// Function ID: 10228
// Dependencies: [41, 42, 93, 95, 98, 10220, 10174, 10176, 10177, 10181]

// Module 10227
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10174 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10181 */;
import _mod10220 from "module_10220" /* 10220 */;
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
class DETimeUnitAgoFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, DETimeUnitAgoFormatParser);
    const obj = _getPrototypeOf(DETimeUnitAgoFormatParser);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(DETimeUnitAgoFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    const NUMBER_PATTERN = _mod10220.NUMBER_PATTERN;
    const regExp = new RegExp("(?:\\s*((?:n\u00E4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?|vor|in)\\s*)?(" + NUMBER_PATTERN + ")?(?:\\s*(n\u00E4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?)?\\s*(" + repeatedTimeunitPattern.matchAnyPattern(_mod10220.TIME_UNIT_DICTIONARY) + ")", "i");
    return regExp;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      let num = 1;
      if (arg1[2]) {
        num = _mod10220.parseNumberPattern(arg1[2]);
      }
      const obj = {};
      obj[_mod10220.TIME_UNIT_DICTIONARY[arg1[4].toLowerCase(arg1[4])]] = num;
      const str2 = arg1[1] || arg1[3] || "";
      const formatted = str2.toLowerCase();
      if (formatted) {
        const obj2 = /vor/;
        let isMatch = obj2.test(formatted);
        if (!isMatch) {
          const obj3 = /letzte/;
          isMatch = obj3.test(formatted);
        }
        if (!isMatch) {
          const obj4 = /vergangen/;
          isMatch = obj4.test(formatted);
        }
        let reverseDurationResult = obj;
        if (isMatch) {
          reverseDurationResult = tmp3(10176).reverseDuration(obj);
        }
        const ParsingComponents = tmp3(10177).ParsingComponents;
        return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
      }
    }
  }
];

export default _createClass(DETimeUnitAgoFormatParser, items);
