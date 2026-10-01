// Module ID: 9972
// Function ID: 9973
// Dependencies: [41, 42, 93, 95, 98, 9914]

// Module 9972
import _mod9914 from "module_9914" /* 9914 */;
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
class JPMergeWeekdayComponentRefiner {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, JPMergeWeekdayComponentRefiner);
    const obj = _getPrototypeOf(JPMergeWeekdayComponentRefiner);
    const tmp2 = _getPrototypeOf;
    const tmp3 = map;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(JPMergeWeekdayComponentRefiner, _mod9914.MergingRefiner);
const entry = {
  key: "mergeResults",
  value: function mergeResults(arg0, clone, text) {
    const cloneResult = clone.clone();
    cloneResult.text = clone.text + arg0 + text.text;
    const start = cloneResult.start;
    const start2 = text.start;
    start.assign("weekday", start2.get("weekday"));
    if (cloneResult.end) {
      const end = cloneResult.end;
      const start3 = text.start;
      end.assign("weekday", start3.get("weekday"));
    }
    return cloneResult;
  }
};
const items = [
  entry,
  {
    key: "shouldMergeResults",
    value: function shouldMergeResults(str, start, start2) {
      start = start.start;
      let isCertainResult = start.isCertain("day");
      if (isCertainResult) {
        start2 = start2.start;
        isCertainResult = start2.isOnlyWeekdayComponent();
      }
      if (isCertainResult) {
        const start3 = start2.start;
        isCertainResult = !start3.isCertain("hour");
      }
      if (isCertainResult) {
        isCertainResult = null !== str.match(/^[,、の]?\s*$/);
      }
      return isCertainResult;
    }
  }
];

export default _createClass(JPMergeWeekdayComponentRefiner, items);
