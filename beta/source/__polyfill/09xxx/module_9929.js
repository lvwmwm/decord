// Module ID: 9929
// Function ID: 9930
// Dependencies: [41, 42, 9894]

// Module 9929
import _mod9894 from "module_9894" /* 9894 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let start;

const regExp = new RegExp("^\\s*(" + _mod9894.YEAR_PATTERN + ")", "i");
class ENExtractYearSuffixRefiner {
  constructor() {
    _classCallCheck(this, ENExtractYearSuffixRefiner);
  }
}
const entry = {
  key: "refine",
  value: function refine(arg0, arr) {
    let text = arg0;
    const item = arr.forEach((start) => {
      text = start;
      start = start.start;
      if (start.isDateWithUnknownYear()) {
        const str = text.text;
        const match = regExp.exec(str.substring(start.index + start.text.length));
        const obj = text;
        if (match) {
          const str2 = match[0];
          if (str2.trim().length > 3) {
            obj.debug(() => {
              console.log("Extracting year: '" + match[0] + "' into : " + closure_0);
            });
            const parseYearResult = _mod9894.parseYear(match[1]);
            if (null != start.end) {
              const end = start.end;
              end.assign("year", parseYearResult);
            }
            const start2 = start.start;
            start2.assign("year", parseYearResult);
            start.text = start.text + match[0];
          }
        }
      }
    });
    return arr;
  }
};
const items = [entry];

export default _createClass(ENExtractYearSuffixRefiner, items);
