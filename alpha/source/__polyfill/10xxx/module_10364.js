// Module ID: 10364
// Function ID: 10365
// Dependencies: [41, 42, 93, 95, 98, 10362, 10176, 10177, 10181]

// Module 10364
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10181 */;
import _mod10362 from "module_10362" /* 10362 */;
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
const regExp = new RegExp("(denna|den h\u00E4r|f\u00F6rra|passerade|n\u00E4sta|kommande|efter|\\+|-)\\s*(" + _mod10362.TIME_UNITS_PATTERN + ")(?=\\W|$)", "i");
const regExp1 = new RegExp("(denna|den h\u00E4r|f\u00F6rra|passerade|n\u00E4sta|kommande|efter|\\+|-)\\s*(" + _mod10362.TIME_UNITS_NO_ABBR_PATTERN + ")(?=\\W|$)", "i");
class SVTimeUnitCasualRelativeFormatParser {
  constructor() {
    let constructResult;
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    const self = this;
    _classCallCheck(this, SVTimeUnitCasualRelativeFormatParser);
    const obj = _getPrototypeOf(SVTimeUnitCasualRelativeFormatParser);
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
_inherits(SVTimeUnitCasualRelativeFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const parseDurationResult = _mod10362.parseDuration(arg1[2]);
      if (parseDurationResult) {
        if ("f\u00F6rra" !== formatted) {
          let reverseDurationResult;
          if ("passerade" !== formatted) {
            reverseDurationResult = parseDurationResult;
          }
          const ParsingComponents = tmp2(10177).ParsingComponents;
          return ParsingComponents.createRelativeFromReference(reference.reference, reverseDurationResult);
        }
        reverseDurationResult = tmp2(10176).reverseDuration(parseDurationResult);
      } else {
        return null;
      }
    }
  }
];

export default _createClass(SVTimeUnitCasualRelativeFormatParser, items);
