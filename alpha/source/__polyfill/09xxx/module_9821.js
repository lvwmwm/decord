// Module ID: 9821
// Function ID: 9822
// Dependencies: [41, 42, 93, 95, 98, 9789, 9792, 9793, 9809]

// Module 9821
import _mod9789 from "module_9789" /* 9789 */;
import ReferenceWithTimezone2 from "ReferenceWithTimezone" /* 9793 */;
import _mod9809 from "module_9809" /* 9809 */;
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
_inherits(ENMergeRelativeAfterDateRefiner, _mod9809.MergingRefiner);
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
      const parseDurationResult = _mod9789.parseDuration(text.text);
      let reverseDurationResult = parseDurationResult;
      const str = text.text;
      if (null != str.match(/^-/i)) {
        reverseDurationResult = tmp(9792).reverseDuration(parseDurationResult);
      }
      const ParsingComponents = tmp(9793).ParsingComponents;
      const createRelativeFromReference = ParsingComponents.createRelativeFromReference;
      const ReferenceWithTimezone = tmp(9793).ReferenceWithTimezone;
      start = start.start;
      const relativeFromReference = createRelativeFromReference(ReferenceWithTimezone.fromDate(start.date()), reverseDurationResult);
      ({ reference, index } = start);
      const parsingResult = new ReferenceWithTimezone2.ParsingResult(reference, index, "" + start.text + arg0 + text.text, relativeFromReference);
      return parsingResult;
    }
  }
];

export default _createClass(ENMergeRelativeAfterDateRefiner, items);
