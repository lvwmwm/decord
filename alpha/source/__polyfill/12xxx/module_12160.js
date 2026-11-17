// Module ID: 12160
// Function ID: 12161
// Dependencies: [41, 42, 93, 95, 98, 12155, 12093, 12095, 12096, 12100]

// Module 12160
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 12093 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 12100 */;
import _mod12155 from "module_12155" /* 12155 */;
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
class FRTimeUnitAgoFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, FRTimeUnitAgoFormatParser);
    const obj = _getPrototypeOf(FRTimeUnitAgoFormatParser);
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
_inherits(FRTimeUnitAgoFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    const NUMBER_PATTERN = _mod12155.NUMBER_PATTERN;
    const regExp = new RegExp("(?:les?|la|l'|du|des?)\\s*(" + NUMBER_PATTERN + ")?(?:\\s*(prochaine?s?|derni[e\u00E8]re?s?|pass[\u00E9e]e?s?|pr[\u00E9e]c[\u00E9e]dents?|suivante?s?))?\\s*(" + repeatedTimeunitPattern.matchAnyPattern(_mod12155.TIME_UNIT_DICTIONARY) + ")(?:\\s*(prochaine?s?|derni[e\u00E8]re?s?|pass[\u00E9e]e?s?|pr[\u00E9e]c[\u00E9e]dents?|suivante?s?))?", "i");
    return regExp;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      let num = 1;
      if (arg1[1]) {
        num = _mod12155.parseNumberPattern(arg1[1]);
      }
      const obj = {};
      obj[_mod12155.TIME_UNIT_DICTIONARY[arg1[3].toLowerCase(arg1[3])]] = num;
      const str2 = arg1[2] || arg1[4] || "";
      const formatted = str2.toLowerCase();
      if (formatted) {
        const obj2 = /derni[eè]re?s?/;
        let isMatch = obj2.test(formatted);
        if (!isMatch) {
          const obj3 = /pass[ée]e?s?/;
          isMatch = obj3.test(formatted);
        }
        if (!isMatch) {
          const obj4 = /pr[ée]c[ée]dents?/;
          isMatch = obj4.test(formatted);
        }
        let reverseDurationResult = obj;
        if (isMatch) {
          reverseDurationResult = tmp3(12095).reverseDuration(obj);
        }
        const ParsingComponents = tmp3(12096).ParsingComponents;
        return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
      }
    }
  }
];

export default _createClass(FRTimeUnitAgoFormatParser, items);
