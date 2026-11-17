// Module ID: 12171
// Function ID: 12172
// Dependencies: [41, 42, 12163, 12120]

// Module 12171
import NUMBER from "NUMBER" /* 12163 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let tmp;
const _mod12120 = tmp(12120);
const keys = Object.keys(NUMBER.WEEKDAY_OFFSET);
const regExp = new RegExp("(?:\\(|\\\uFF08)(?<weekday>" + keys.join("|") + ")(?:\\)|\\\uFF09)", "i");
class JPWeekdayWithParenthesesParser {
  constructor() {
    _classCallCheck(this, JPWeekdayWithParenthesesParser);
  }
}
const entry = {
  key: "pattern",
  value: function pattern() {
    return regExp;
  }
};
const items = [
  entry,
  {
    key: "extract",
    value: function extract(reference, arg1) {
      const tmp3 = NUMBER.WEEKDAY_OFFSET[arg1.groups.weekday];
      let parsingComponentsAtWeekday = null;
      if (undefined !== tmp3) {
        parsingComponentsAtWeekday = _mod12120.createParsingComponentsAtWeekday(reference.reference, tmp3);
      }
      return parsingComponentsAtWeekday;
    }
  }
];

export default _createClass(JPWeekdayWithParenthesesParser, items);
