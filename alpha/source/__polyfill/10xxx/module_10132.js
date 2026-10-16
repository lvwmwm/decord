// Module ID: 10132
// Function ID: 10133
// Dependencies: [41, 42, 10124, 10081]

// Module 10132
import NUMBER from "NUMBER" /* 10124 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let tmp;
const _mod10081 = tmp(10081);
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
        parsingComponentsAtWeekday = _mod10081.createParsingComponentsAtWeekday(reference.reference, tmp3);
      }
      return parsingComponentsAtWeekday;
    }
  }
];

export default _createClass(JPWeekdayWithParenthesesParser, items);
