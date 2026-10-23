// Module ID: 12043
// Function ID: 12044
// Name: useFormattedTimestamp
// Dependencies: [32, 19, 1104, 558, 576, 2049, 8497, 2]

// Module 12043 (useFormattedTimestamp)
import DurationsDefault from "Durations" /* 1104 */;
import _modDef2049 from "module_2049" /* 2049 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFormattedTimestamp(format) {
  let tmp5;
  _require = format;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(7);
  [tmp5, importDefault] = _slicedToArray(react.useState(null), 2);
  const obj2 = react;
  const tmp4 = _slicedToArray(react.useState(null), 2);
  if (cResult[0] === format.format) {
    let tmp6;
    let tmp7;
    let formatted;
    if (cResult[1] === format.parsed) {
      tmp6 = cResult[2];
      tmp7 = cResult[3];
    }
    const effect = obj2.useEffect(tmp6, tmp7);
    if ("R" === format.format) {
      let tmp9;
      if (cResult[4] === format.parsed) {
        if (cResult[5] === tmp5) {
          tmp9 = cResult[6];
        }
        formatted = tmp9;
      }
      if (null != tmp5) {
        let formatted2;
        if (tmp5.parsed === format.parsed) {
          formatted2 = tmp5.formatted;
        }
        cResult[4] = format.parsed;
        cResult[5] = tmp5;
        cResult[6] = formatted2;
        tmp9 = formatted2;
      }
      let TIMESTAMP_FORMATS = tmp(8497).TIMESTAMP_FORMATS;
      formatted2 = TIMESTAMP_FORMATS.R(format.parsed);
    } else {
      formatted = format.formatted;
    }
    return formatted;
  }
  const fn = function p() {
    let closure_0;
    if ("R" === format.format) {
      let result = 1000 * closure_1_6;
      const _Math = Math;
      const parsed = tmp.parsed;
      const absolute = Math.abs(parsed.diff(_modDef2049()));
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
          TIMESTAMP_FORMATS = closure_0(dependencyMap[6]).TIMESTAMP_FORMATS;
          closure_1_1(obj);
        }, result);
        return () => clearInterval(closure_0);
      }
    }
  };
  const items = [, ];
  ({ format: arr[0], parsed: arr[1] } = format);
  cResult[0] = format.format;
  cResult[1] = format.parsed;
  cResult[2] = fn;
  cResult[3] = items;
  tmp7 = items;
  tmp6 = fn;
}) : (function useFormattedTimestamp(format) {
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
      const absolute = Math.abs(parsed.diff(_modDef2049()));
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
          TIMESTAMP_FORMATS = closure_0(dependencyMap[6]).TIMESTAMP_FORMATS;
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
});
let result = size.fileFinishedImporting("modules/markup/useFormattedTimestamp.tsx");

export default tmp2;
