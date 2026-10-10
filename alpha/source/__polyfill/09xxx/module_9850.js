// Module ID: 9850
// Function ID: 9851
// Dependencies: [41, 42, 93, 95, 98, 9818, 9821, 9822, 9838]

// Module 9850
import _mod9818 from "module_9818" /* 9818 */;
import ReferenceWithTimezone2 from "ReferenceWithTimezone" /* 9822 */;
import _mod9838 from "module_9838" /* 9838 */;
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
class ENMergeRelativeAfterDateRefiner {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENMergeRelativeAfterDateRefiner);
    const obj = _getPrototypeOf(ENMergeRelativeAfterDateRefiner);
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
_inherits(ENMergeRelativeAfterDateRefiner, _mod9838.MergingRefiner);
const entry = {
  key: "shouldMergeResults",
  value: function shouldMergeResults(str, arg1, text) {
    let match = str.match(/^\s*$/i);
    if (match) {
      str = text.text;
      let tmp4 = null != str.match(/^[+-]/i);
      if (!tmp4) {
        const str2 = text.text;
        tmp4 = null != str2.match(/^-/i);
      }
      match = tmp4;
    }
    return match;
  }
};
const items = [
  entry,
  {
    key: "mergeResults",
    value: function mergeResults(arg0, start, text, arg3) {
      let index;
      let reference;
      const parseDurationResult = _mod9818.parseDuration(text.text);
      let reverseDurationResult = parseDurationResult;
      const str = text.text;
      if (null != str.match(/^-/i)) {
        reverseDurationResult = tmp(9821).reverseDuration(parseDurationResult);
      }
      const ParsingComponents = tmp(9822).ParsingComponents;
      const createRelativeFromReference = ParsingComponents.createRelativeFromReference;
      const ReferenceWithTimezone = tmp(9822).ReferenceWithTimezone;
      start = start.start;
      const relativeFromReference = createRelativeFromReference(ReferenceWithTimezone.fromDate(start.date()), reverseDurationResult);
      ({ reference, index } = start);
      const parsingResult = new ReferenceWithTimezone2.ParsingResult(reference, index, "" + start.text + arg0 + text.text, relativeFromReference);
      return parsingResult;
    }
  }
];

export default _createClass(ENMergeRelativeAfterDateRefiner, items);
