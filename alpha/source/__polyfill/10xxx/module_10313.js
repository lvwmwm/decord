// Module ID: 10313
// Function ID: 10314
// Dependencies: [41, 42, 93, 95, 98, 10281, 10284, 10285, 10301]

// Module 10313
import _mod10281 from "module_10281" /* 10281 */;
import ReferenceWithTimezone2 from "ReferenceWithTimezone" /* 10285 */;
import _mod10301 from "module_10301" /* 10301 */;
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
_inherits(ENMergeRelativeAfterDateRefiner, _mod10301.MergingRefiner);
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
      const parseDurationResult = _mod10281.parseDuration(text.text);
      let reverseDurationResult = parseDurationResult;
      const str = text.text;
      if (null != str.match(/^-/i)) {
        reverseDurationResult = tmp(10284).reverseDuration(parseDurationResult);
      }
      const ParsingComponents = tmp(10285).ParsingComponents;
      const createRelativeFromReference = ParsingComponents.createRelativeFromReference;
      const ReferenceWithTimezone = tmp(10285).ReferenceWithTimezone;
      start = start.start;
      const relativeFromReference = createRelativeFromReference(ReferenceWithTimezone.fromDate(start.date()), reverseDurationResult);
      ({ reference, index } = start);
      const parsingResult = new ReferenceWithTimezone2.ParsingResult(reference, index, "" + start.text + arg0 + text.text, relativeFromReference);
      return parsingResult;
    }
  }
];

export default _createClass(ENMergeRelativeAfterDateRefiner, items);
