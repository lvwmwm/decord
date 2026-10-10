// Module ID: 10004
// Function ID: 10005
// Dependencies: [41, 42, 93, 95, 98, 9988, 9821, 9822, 9838]

// Module 10004
import ReferenceWithTimezone2 from "ReferenceWithTimezone" /* 9822 */;
import _mod9838 from "module_9838" /* 9838 */;
import _mod9988 from "module_9988" /* 9988 */;
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
class ENMergeRelativeDateRefiner {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ENMergeRelativeDateRefiner);
    const obj = _getPrototypeOf(ENMergeRelativeDateRefiner);
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
_inherits(ENMergeRelativeDateRefiner, _mod9838.MergingRefiner);
const entry = {
  key: "patternBetween",
  value: function patternBetween() {
    return /^\s*$/i;
  }
};
const items = [
  entry,
  {
    key: "shouldMergeResults",
    value: function shouldMergeResults(str, text, start) {
      let match = str.match(this.patternBetween());
      if (match) {
        let tmp5 = null == str.match(/\s+(prima|dal)$/i);
        null != text.text.match(/\s+(prima|dal)$/i);
        if (tmp5) {
          const str2 = text.text;
          tmp5 = null == str2.match(/\s+(dopo|dal|fino)$/i);
        }
        let tmp6 = !tmp5;
        if (tmp6) {
          start = start.start;
          let value = start.get("day");
          if (value) {
            const start2 = start.start;
            value = start2.get("month");
          }
          if (value) {
            const start3 = start.start;
            value = start3.get("year");
          }
          tmp6 = value;
        }
        match = tmp6;
      }
      return match;
    }
  },
  {
    key: "mergeResults",
    value: function mergeResults(arg0, text, start) {
      const parseDurationResult = _mod9988.parseDuration(text.text);
      let reverseDurationResult = parseDurationResult;
      const str = text.text;
      if (null != str.match(/\s+(prima|dal)$/i)) {
        reverseDurationResult = tmp(9821).reverseDuration(parseDurationResult);
      }
      const ParsingComponents = tmp(9822).ParsingComponents;
      const createRelativeFromReference = ParsingComponents.createRelativeFromReference;
      const ReferenceWithTimezone = tmp(9822).ReferenceWithTimezone;
      start = start.start;
      const relativeFromReference = createRelativeFromReference(ReferenceWithTimezone.fromDate(start.date()), reverseDurationResult);
      const reference = start.reference;
      const index = text.index;
      const parsingResult = new ReferenceWithTimezone2.ParsingResult(reference, index, "" + text.text + arg0 + start.text, relativeFromReference);
      return parsingResult;
    }
  }
];

export default _createClass(ENMergeRelativeDateRefiner, items);
