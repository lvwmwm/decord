// Module ID: 10729
// Function ID: 10730
// Dependencies: [41, 42, 93, 95, 98, 10697, 10700, 10701, 10717]

// Module 10729
import Filter from "Filter" /* 10717 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

const ENMergeRelativeAfterDateRefiner = require;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class ENMergeRelativeAfterDateRefiner {
  constructor() {
    self = this;
    tmp = c2(this, ENMergeRelativeAfterDateRefiner);
    tmp2 = closure_4;
    obj = closure_4(ENMergeRelativeAfterDateRefiner);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ENMergeRelativeAfterDateRefiner, Filter.MergingRefiner);
const entry = {
  key: "shouldMergeResults",
  value: function shouldMergeResults(str, arg1, text) {
    let match = str.match(/^\s*$/i);
    if (match) {
      let tmp4 = null != text.text.match(/^[+-]/i);
      if (!tmp4) {
        tmp4 = null != text.text.match(/^-/i);
      }
      match = tmp4;
      str = text.text;
    }
    return match;
  }
};
const items = [
  entry,
  {
    key: "mergeResults",
    value: function mergeResults(arg0, start, text, arg3) {
      const parseDurationResult = ENMergeRelativeAfterDateRefiner(10697).parseDuration(text.text);
      let reverseDurationResult = parseDurationResult;
      if (null != str.match(/^-/i)) {
        reverseDurationResult = tmp(10700).reverseDuration(parseDurationResult);
      }
      const ParsingComponents = tmp(10701).ParsingComponents;
      const ReferenceWithTimezone = tmp(10701).ReferenceWithTimezone;
      start = start.start;
      const relativeFromReference = ParsingComponents.createRelativeFromReference(ReferenceWithTimezone.fromDate(start.date()), reverseDurationResult);
      ({ reference, index } = start);
      return new ENMergeRelativeAfterDateRefiner(10701).ParsingResult(reference, index, "" + start.text + arg0 + text.text, relativeFromReference);
    }
  }
];

export default _createClass(ENMergeRelativeAfterDateRefiner, items);
