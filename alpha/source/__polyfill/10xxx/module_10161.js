// Module ID: 10161
// Function ID: 10162
// Dependencies: [41, 42, 93, 95, 98, 10133, 10132, 10136, 10140]

// Module 10161
import _mod10132 from "module_10132" /* 10132 */;
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 10133 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 10140 */;
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
const regExp = new RegExp("(this|last|past|next|after\\s*this)\\s*(" + repeatedTimeunitPattern.matchAnyPattern(_mod10132.TIME_UNIT_DICTIONARY) + ")(?=\\s*)(?=\\W|$)", "i");
class ENRelativeDateFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENRelativeDateFormatParser);
    const obj = _getPrototypeOf(ENRelativeDateFormatParser);
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
_inherits(ENRelativeDateFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
    value: function innerExtract(createParsingComponents, arg1) {
      const str = arg1[1];
      const formatted = str.toLowerCase();
      const str2 = arg1[2];
      const str3 = str2.toLowerCase();
      const tmp3 = _mod10132.TIME_UNIT_DICTIONARY[str3];
      if ("next" != formatted) {
        if (!formatted.startsWith("after")) {
          if ("last" != formatted) {
            if ("past" != formatted) {
              const parsingComponents = createParsingComponents.createParsingComponents();
              const _Date = Date;
              const instant = createParsingComponents.reference.instant;
              const self = this;
              const self2 = this;
              const date = new Date(instant.getTime());
              if (str3.match(/week/i)) {
                const setDate = date.setDate;
                const date1 = date.getDate();
                setDate(date1 - date.getDay());
                parsingComponents.imply("day", date.getDate());
                parsingComponents.imply("month", date.getMonth() + 1);
                parsingComponents.imply("year", date.getFullYear());
              } else if (str3.match(/month/i)) {
                date.setDate(1);
                parsingComponents.imply("day", date.getDate());
                parsingComponents.assign("year", date.getFullYear());
                parsingComponents.assign("month", date.getMonth() + 1);
              } else if (str3.match(/year/i)) {
                date.setDate(1);
                date.setMonth(0);
                parsingComponents.imply("day", date.getDate());
                parsingComponents.imply("month", date.getMonth() + 1);
                parsingComponents.assign("year", date.getFullYear());
              }
              return parsingComponents;
            }
          }
          const obj4 = {};
          obj4[tmp3] = -1;
          const ParsingComponents = tmp(10136).ParsingComponents;
          return ParsingComponents.createRelativeFromReference(createParsingComponents.reference, obj4);
        }
      }
      const ParsingComponents2 = tmp(10136).ParsingComponents;
      return ParsingComponents2.createRelativeFromReference(createParsingComponents.reference, { [tmp3]: 1 });
    }
  }
];

export default _createClass(ENRelativeDateFormatParser, items);
