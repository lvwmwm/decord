// Module ID: 11039
// Function ID: 11040
// Name: useFormattedTimestamp
// Dependencies: [32, 19, 1090, 2044, 8592, 2]
// Exports: default

// Module 11039 (useFormattedTimestamp)
import DurationsDefault from "Durations" /* 1090 */;
import _modDef2044 from "module_2044" /* 2044 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let items = [2 * DurationsDefault.Seconds.MINUTE, DurationsDefault.Seconds.SECOND];
const items1 = [items, , , ];
const items2 = [5 * DurationsDefault.Seconds.MINUTE, DurationsDefault.Seconds.MINUTE];
items1[1] = items2;
const items3 = [45 * DurationsDefault.Seconds.MINUTE, 2 * DurationsDefault.Seconds.MINUTE];
items1[2] = items3;
const items4 = [21 * DurationsDefault.Seconds.HOUR, 5 * DurationsDefault.Seconds.MINUTE];
items1[3] = items4;
let closure_6 = 2 * DurationsDefault.Seconds.HOUR;
let result = size.fileFinishedImporting("modules/markup/useFormattedTimestamp.tsx");

export default function useFormattedTimestamp(format) {
  let formatted;
  let tmp2;
  _require = format;
  const tmp = _slicedToArray(react.useState(null), 2);
  [tmp2, importDefault] = tmp;
  const items = [, ];
  ({ format: arr[0], parsed: arr[1] } = format);
  const effect = react.useEffect(() => {
    let closure_0;
    if ("R" === format.format) {
      let result = 1000 * closure_1_6;
      const _Math = Math;
      const parsed = tmp.parsed;
      const absolute = Math.abs(parsed.diff(_modDef2044()));
      let obj = items1[Symbol.iterator]();
      while (obj !== undefined) {
        let tmp14 = _slicedToArray(tmp11, 2);
        if (absolute < 1000 * tmp14[0]) {
          result = 1000 * tmp14[1];
          obj.return();
          break;
        }
        let _setInterval = setInterval;
        format = setInterval(() => {
          let TIMESTAMP_FORMATS;
          const obj = { parsed: closure_0.parsed, formatted: TIMESTAMP_FORMATS.R(closure_0.parsed) };
          TIMESTAMP_FORMATS = closure_0(dependencyMap[4]).TIMESTAMP_FORMATS;
          closure_1_1(obj);
        }, result);
        return () => clearInterval(closure_0);
      }
    }
  }, items);
  if ("R" === format.format) {
    if (null != tmp2) {
      let formatted2;
      if (tmp2.parsed === format.parsed) {
        formatted2 = tmp2.formatted;
      }
      formatted = formatted2;
    }
    let TIMESTAMP_FORMATS = require("TimestampUtils").TIMESTAMP_FORMATS;
    formatted2 = TIMESTAMP_FORMATS.R(format.parsed);
  } else {
    formatted = format.formatted;
  }
  return formatted;
};
