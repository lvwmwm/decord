// Module ID: 9954
// Function ID: 9955
// Dependencies: [41, 42, 93, 95, 98, 9771, 9940, 9774, 9778]

// Module 9954
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 9771 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 9778 */;
import _mod9940 from "module_9940" /* 9940 */;
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
const regExp = new RegExp("(questo|ultimo|scorso|prossimo|dopo\\s*questo|questa|ultima|scorsa|prossima\\s*questa)\\s*(" + repeatedTimeunitPattern.matchAnyPattern(_mod9940.TIME_UNIT_DICTIONARY) + ")(?=\\s*)(?=\\W|$)", "i");
class ITRelativeDateFormatParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ITRelativeDateFormatParser);
    const obj = _getPrototypeOf(ITRelativeDateFormatParser);
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
_inherits(ITRelativeDateFormatParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
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
      const tmp3 = _mod9940.TIME_UNIT_DICTIONARY[str3];
      if ("prossimo" != formatted) {
        if (!formatted.startsWith("dopo")) {
          if ("prima" != formatted) {
            if ("precedente" != formatted) {
              const parsingComponents = createParsingComponents.createParsingComponents();
              const _Date = Date;
              const instant = createParsingComponents.reference.instant;
              const self = this;
              const self2 = this;
              const date = new Date(instant.getTime());
              if (str3.match(/settimana/i)) {
                const setDate = date.setDate;
                const date1 = date.getDate();
                setDate(date1 - date.getDay());
                parsingComponents.imply("day", date.getDate());
                parsingComponents.imply("month", date.getMonth() + 1);
                parsingComponents.imply("year", date.getFullYear());
              } else if (str3.match(/mese/i)) {
                date.setDate(1);
                parsingComponents.imply("day", date.getDate());
                parsingComponents.assign("year", date.getFullYear());
                parsingComponents.assign("month", date.getMonth() + 1);
              } else if (str3.match(/anno/i)) {
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
          const ParsingComponents = tmp(9774).ParsingComponents;
          return ParsingComponents.createRelativeFromReference(createParsingComponents.reference, obj4);
        }
      }
      const ParsingComponents2 = tmp(9774).ParsingComponents;
      return ParsingComponents2.createRelativeFromReference(createParsingComponents.reference, { [tmp3]: 1 });
    }
  }
];

export default _createClass(ITRelativeDateFormatParser, items);
