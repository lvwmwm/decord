// Module ID: 9782
// Function ID: 9783
// Dependencies: [41, 42, 93, 95, 98, 9771, 9770, 9778]

// Module 9782
import _mod9770 from "module_9770" /* 9770 */;
import repeatedTimeunitPattern from "repeatedTimeunitPattern" /* 9771 */;
import AbstractParserWithWordBoundaryChecking from "AbstractParserWithWordBoundaryChecking" /* 9778 */;
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
const regExp = new RegExp("([0-9]{4})[-\\.\\/\\s](?:(" + repeatedTimeunitPattern.matchAnyPattern(_mod9770.MONTH_DICTIONARY) + ")|([0-9]{1,2}))[-\\.\\/\\s]([0-9]{1,2})(?=\\W|$)", "i");
class ENYearMonthDayParser {
  constructor(strictMonthDateOrder) {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENYearMonthDayParser);
    const obj = _getPrototypeOf(ENYearMonthDayParser);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.strictMonthDateOrder = strictMonthDateOrder;
    return tmp3Result;
  }
}
_inherits(ENYearMonthDayParser, AbstractParserWithWordBoundaryChecking.AbstractParserWithWordBoundaryChecking);
const entry = {
  key: "innerPattern",
  value: function innerPattern() {
    return regExp;
  }
};
let items = [
  entry,
  {
    key: "innerExtract",
    value: function innerExtract(arg0, arg1) {
      let parsed2;
      let tmp6;
      let tmp7;
      const parsed = parseInt(arg1[1]);
      const parsed1 = parseInt(arg1[4]);
      if (arg1[3]) {
        const _parseInt = parseInt;
        parsed2 = parseInt(arg1[3]);
      } else {
        parsed2 = _mod9770.MONTH_DICTIONARY[str.toLowerCase(str)];
      }
      if (parsed2 < 1) {
        const self = this;
        if (this.strictMonthDateOrder) {
          return null;
        } else {
          tmp6 = parsed2;
          tmp7 = parsed1;
          if (parsed1 >= 1) {
            tmp6 = parsed2;
            tmp7 = parsed1;
            if (parsed1 <= 12) {
              const items = [parsed1, parsed2];
              [tmp6, tmp7] = items;
            }
          }
        }
      } else {
        tmp6 = parsed2;
        tmp7 = parsed1;
      }
      let tmp8 = null;
      if (tmp7 >= 1) {
        tmp8 = null;
        if (tmp7 <= 31) {
          tmp8 = { day: tmp7, month: tmp6, year: parsed };
          const date = { day: tmp7, month: tmp6, year: parsed };
        }
      }
      return tmp8;
    }
  }
];

export default _createClass(ENYearMonthDayParser, items);
