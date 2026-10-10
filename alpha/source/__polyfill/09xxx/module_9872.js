// Module ID: 9872
// Function ID: 9873
// Dependencies: [41, 42, 93, 95, 98, 9865, 9819, 9821, 9822, 9826]

// Module 9872
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 9819 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 9826 */;
import _mod9865 from "module_9865" /* 9865 */;
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
    const NUMBER_PATTERN = _mod9865.NUMBER_PATTERN;
    const regExp = new RegExp("(?:\\s*((?:n\u00E4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?|vor|in)\\s*)?(" + NUMBER_PATTERN + ")?(?:\\s*(n\u00E4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?)?\\s*(" + repeatedTimeunitPattern.matchAnyPattern(_mod9865.TIME_UNIT_DICTIONARY) + ")", "i");
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
        num = _mod9865.parseNumberPattern(arg1[2]);
      }
      const obj = {};
      obj[_mod9865.TIME_UNIT_DICTIONARY[arg1[4].toLowerCase(arg1[4])]] = num;
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
          reverseDurationResult = tmp3(9821).reverseDuration(obj);
        }
        const ParsingComponents = tmp3(9822).ParsingComponents;
        return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
      }
    }
  }
];

export default _createClass(DETimeUnitAgoFormatParser, items);
