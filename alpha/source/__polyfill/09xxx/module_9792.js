// Module ID: 9792
// Function ID: 9793
// Dependencies: [41, 42, 93, 95, 98, 9793, 9790]

// Module 9792
import _mod9790 from "module_9790" /* 9790 */;
import mergeDateTimeComponent from "mergeDateTimeComponent" /* 9793 */;
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
class AbstractMergeDateTimeRefiner {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, AbstractMergeDateTimeRefiner);
    const obj = _getPrototypeOf(AbstractMergeDateTimeRefiner);
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
_inherits(AbstractMergeDateTimeRefiner, _mod9790.MergingRefiner);
const entry = {
  key: "shouldMergeResults",
  value: function shouldMergeResults(str, start, start2) {
    start = start.start;
    let isOnlyDateResult = start.isOnlyDate();
    if (isOnlyDateResult) {
      start2 = start2.start;
      isOnlyDateResult = start2.isOnlyTime();
    }
    if (!isOnlyDateResult) {
      const start3 = start2.start;
      let isOnlyDateResult1 = start3.isOnlyDate();
      if (isOnlyDateResult1) {
        const start4 = start.start;
        isOnlyDateResult1 = start4.isOnlyTime();
      }
      isOnlyDateResult = isOnlyDateResult1;
    }
    if (isOnlyDateResult) {
      const self = this;
      isOnlyDateResult = null != str.match(this.patternBetween());
    }
    return isOnlyDateResult;
  }
};
const items = [
  entry,
  {
    key: "mergeResults",
    value: function mergeResults(arg0, start, text) {
      start = start.start;
      const isOnlyDateResult = start.isOnlyDate();
      const mergeDateTimeResult = mergeDateTimeComponent.mergeDateTimeResult;
      const tmp2 = isOnlyDateResult ? mergeDateTimeResult(start, text) : mergeDateTimeResult(text, start);
      tmp2.index = start.index;
      tmp2.text = start.text + arg0 + text.text;
      return tmp2;
    }
  }
];

export default _createClass(AbstractMergeDateTimeRefiner, items);
