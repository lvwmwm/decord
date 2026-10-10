// Module ID: 9892
// Function ID: 9893
// Dependencies: [41, 42, 9889, 9846]

// Module 9892
import NUMBER from "NUMBER" /* 9889 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let tmp;
const _mod9846 = tmp(9846);
const keys = Object.keys(NUMBER.WEEKDAY_OFFSET);
const regExp = new RegExp("((?<prefix>\u524D\u306E|\u6B21\u306E|\u4ECA\u9031))?(?<weekday>" + keys.join("|") + ")(?:\u66DC\u65E5|\u66DC)", "i");
class JPWeekdayParser {
  constructor() {
    _classCallCheck(this, JPWeekdayParser);
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
    value: function extract(reference, groups) {
      const tmp3 = NUMBER.WEEKDAY_OFFSET[groups.groups.weekday];
      if (undefined === tmp3) {
        return null;
      } else {
        let str2 = "last";
        if (!(groups.groups.prefix || "").match(/前の/)) {
          str2 = "next";
          if (!(groups.groups.prefix || "").match(/次の/)) {
            str2 = null;
            if ((groups.groups.prefix || "").match(/今週/)) {
              str2 = "this";
            }
          }
        }
        return _mod9846.createParsingComponentsAtWeekday(reference.reference, tmp3, str2);
      }
    }
  }
];

export default _createClass(JPWeekdayParser, items);
