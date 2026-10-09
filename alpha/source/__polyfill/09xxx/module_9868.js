// Module ID: 9868
// Function ID: 9869
// Dependencies: [41, 42, 9860, 9817]

// Module 9868
import NUMBER from "NUMBER" /* 9860 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let tmp;
const _mod9817 = tmp(9817);
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
        parsingComponentsAtWeekday = _mod9817.createParsingComponentsAtWeekday(reference.reference, tmp3);
      }
      return parsingComponentsAtWeekday;
    }
  }
];

export default _createClass(JPWeekdayWithParenthesesParser, items);
