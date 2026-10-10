// Module ID: 9911
// Function ID: 9912
// Dependencies: [41, 42, 93, 95, 98, 9824, 9825, 9826]

// Module 9911
import Meridiem from "Meridiem" /* 9824 */;
import assignSimilarDate from "assignSimilarDate" /* 9825 */;
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
class NLCasualTimeParser {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, NLCasualTimeParser);
    const obj = _getPrototypeOf(NLCasualTimeParser);
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
_inherits(NLCasualTimeParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return /(deze)?\s*(namiddag|avond|middernacht|ochtend|middag|'s middags|'s avonds|'s ochtends)(?=\W|$)/i;
  }
};
const items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(refDate, arg1) {
      refDate = refDate.refDate;
      const parsingComponents = refDate.createParsingComponents();
      if ("deze" === arg1[1]) {
        const refDate2 = refDate.refDate;
        parsingComponents.assign("day", refDate2.getDate());
        const refDate3 = refDate.refDate;
        parsingComponents.assign("month", refDate3.getMonth() + 1);
        const refDate4 = refDate.refDate;
        parsingComponents.assign("year", refDate4.getFullYear());
      }
      const str4 = arg1[2];
      const formatted = str4.toLowerCase();
      if ("namiddag" !== formatted) {
        if ("'s namiddags" !== formatted) {
          if ("avond" !== formatted) {
            if ("'s avonds'" !== formatted) {
              if ("middernacht" === formatted) {
                const _Date = Date;
                const self = this;
                const self2 = this;
                const date = new Date(refDate.getTime());
                date.setDate(date.getDate() + 1);
                assignSimilarDate.assignSimilarDate(parsingComponents, date);
                assignSimilarDate.implySimilarTime(parsingComponents, date);
                parsingComponents.imply("hour", 0);
                parsingComponents.imply("minute", 0);
                parsingComponents.imply("second", 0);
              } else {
                if ("ochtend" !== formatted) {
                  if ("'s ochtends" !== formatted) {
                    if ("middag" === formatted) {
                      parsingComponents.imply("meridiem", Meridiem.Meridiem.AM);
                      parsingComponents.imply("hour", 12);
                    }
                  }
                }
                parsingComponents.imply("meridiem", Meridiem.Meridiem.AM);
                parsingComponents.imply("hour", 6);
              }
            }
          }
          parsingComponents.imply("meridiem", Meridiem.Meridiem.PM);
          parsingComponents.imply("hour", 20);
        }
        return parsingComponents;
      }
      parsingComponents.imply("meridiem", Meridiem.Meridiem.PM);
      parsingComponents.imply("hour", 15);
    }
  }
];

export default _createClass(NLCasualTimeParser, items);
