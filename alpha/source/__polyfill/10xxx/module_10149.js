// Module ID: 10149
// Function ID: 10150
// Dependencies: [41, 42, 93, 95, 98, 10118, 10121, 10122, 10126]

// Module 10149
import _mod10118 from "module_10118" /* 10118 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10126 */;
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
const regExp = new RegExp("(this|last|past|next|after|\\+|-)\\s*(" + _mod10118.TIME_UNITS_PATTERN + ")(?=\\W|$)", "i");
const regExp1 = new RegExp("(this|last|past|next|after|\\+|-)\\s*(" + _mod10118.TIME_UNITS_NO_ABBR_PATTERN + ")(?=\\W|$)", "i");
class ENTimeUnitCasualRelativeFormatParser {
  constructor() {
    let constructResult;
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    const self = this;
    _classCallCheck(this, ENTimeUnitCasualRelativeFormatParser);
    const obj = _getPrototypeOf(ENTimeUnitCasualRelativeFormatParser);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.allowAbbreviations = flag;
    return tmp3Result;
  }
}
_inherits(ENTimeUnitCasualRelativeFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return this.allowAbbreviations ? regExp : regExp1;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(reference, arg1) {
      const str = arg1[1];
      const formatted = str.toLowerCase();
      const parseDurationResult = _mod10118.parseDuration(arg1[2]);
      if (parseDurationResult) {
        if ("last" !== formatted) {
          let reverseDurationResult;
          if ("past" !== formatted) {
            reverseDurationResult = parseDurationResult;
          }
          const ParsingComponents = tmp2(10122).ParsingComponents;
          return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
        }
        reverseDurationResult = tmp2(10121).reverseDuration(parseDurationResult);
      } else {
        return null;
      }
    }
  }
];

export default _createClass(ENTimeUnitCasualRelativeFormatParser, items);
