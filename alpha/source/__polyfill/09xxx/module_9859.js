// Module ID: 9859
// Function ID: 9860
// Dependencies: [41, 42, 9860, 9791]

// Module 9859
import findMostLikelyADYear from "findMostLikelyADYear" /* 9791 */;
import NUMBER from "NUMBER" /* 9860 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const re3 = /(?:(?:([同今本])|((昭和|平成|令和)?([0-9０-９]{1,4}|元)))年\s*)?([0-9０-９]{1,2})月\s*([0-9０-９]{1,2})日/i;
class JPStandardParser {
  constructor() {
    _classCallCheck(this, JPStandardParser);
  }
}
const entry = {
  key: "pattern",
  value: function pattern() {
    return re3;
  }
};
const items = [
  entry,
  {
    key: "extract",
    value: function extract(createParsingComponents, arg1) {
      const parsed = parseInt(NUMBER.toHankaku(arg1[5]));
      const parsed1 = parseInt(NUMBER.toHankaku(arg1[6]));
      const parsingComponents = createParsingComponents.createParsingComponents({ day: parsed1, month: parsed });
      let match = arg1[1];
      if (match) {
        const str = arg1[1];
        match = str.match("\u540C|\u4ECA|\u672C");
      }
      if (match) {
        const reference = createParsingComponents.reference;
        const assign = parsingComponents.assign;
        const dateWithAdjustedTimezone = reference.getDateWithAdjustedTimezone();
        assign("year", dateWithAdjustedTimezone.getFullYear());
      }
      if (arg1[2]) {
        let sum;
        let num = 1;
        if ("\u5143" != arg1[4]) {
          const _parseInt = parseInt;
          num = parseInt(tmp(9860).toHankaku(tmp8));
        }
        if ("\u4EE4\u548C" == arg1[3]) {
          sum = num + 2018;
        } else if ("\u5E73\u6210" == arg1[3]) {
          sum = num + 1988;
        } else {
          sum = num;
          if ("\u662D\u548C" == arg1[3]) {
            sum = num + 1925;
          }
        }
        parsingComponents.assign("year", sum);
      } else {
        parsingComponents.imply("year", findMostLikelyADYear.findYearClosestToRef(createParsingComponents.refDate, parsed1, parsed));
      }
      return parsingComponents;
    }
  }
];

export default _createClass(JPStandardParser, items);
