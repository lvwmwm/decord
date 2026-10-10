// Module ID: 9859
// Function ID: 9860
// Dependencies: [41, 42, 93, 95, 98, 9838]

// Module 9859
import _mod9838 from "module_9838" /* 9838 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import map from "_possibleConstructorReturn" /* 93 */;
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
class UnlikelyFormatFilter {
  constructor(strictMode) {
    let constructResult;
    const self = this;
    _classCallCheck(this, UnlikelyFormatFilter);
    const obj = _getPrototypeOf(UnlikelyFormatFilter);
    const tmp2 = _getPrototypeOf;
    const tmp3 = map;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, [], tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, undefined);
    }
    const tmp3Result = tmp3(self, constructResult);
    tmp3Result.strictMode = strictMode;
    return tmp3Result;
  }
}
_inherits(UnlikelyFormatFilter, _mod9838.Filter);
const entry = {
  key: "isValid",
  value: function isValid(debug, text) {
    let flag;
    const str = text.text;
    const str2 = str.replace(" ", "");
    if (str2.match(/^\d*(\.\d*)?$/)) {
      debug.debug(() => {
        console.log("Removing unlikely result '" + text.text + "'");
      });
      flag = false;
    } else {
      const start = text.start;
      if (start.isValidDate()) {
        if (text.end) {
          let flag2;
          const end = text.end;
          if (!end.isValidDate()) {
            debug.debug(() => {
              console.log("Removing invalid result: " + text + " (" + text.end + ")");
            });
            flag2 = false;
          }
          flag = flag2;
        }
        const self = this;
        const strictMode = this.strictMode;
        let isStrictModeValidResult = !strictMode;
        if (strictMode) {
          isStrictModeValidResult = self.isStrictModeValid(debug, text);
        }
        flag2 = isStrictModeValidResult;
      } else {
        debug.debug(() => {
          console.log("Removing invalid result: " + text + " (" + text.start + ")");
        });
        flag = false;
      }
    }
    return flag;
  }
};
const items = [
  entry,
  {
    key: "isStrictModeValid",
    value: function isStrictModeValid(debug, start) {
      start = start.start;
      const result = start.isOnlyWeekdayComponent();
      let flag = !result;
      if (result) {
        debug.debug(() => {
          console.log("(Strict) Removing weekday only component: " + start + " (" + start.end + ")");
        });
        flag = false;
      }
      return flag;
    }
  }
];

export default _createClass(UnlikelyFormatFilter, items);
