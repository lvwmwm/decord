// Module ID: 12597
// Function ID: 12598
// Name: useActivityTimer
// Dependencies: [32, 19, 1091, 7592, 2040, 2]
// Exports: default, formatTime, formatTimeForA11yLabel

// Module 12597 (useActivityTimer)
import DurationsDefault from "Durations" /* 1091 */;
import utils from "utils" /* 7592 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

let closure_4;
let hasOwnProperty;
({ useEffect: closure_4, useState: hasOwnProperty } = react);
let result = size.fileFinishedImporting("modules/user_profile/hooks/useActivityTimer.tsx");

export default function useActivityTimer(start) {
  let closure_1;
  let first1;
  start = start.start;
  let first;
  importDefault = undefined;
  const end = start.end;
  const interval = new first(2040).Interval();
  first = _slicedToArray(closure_5(interval), 1)[0];
  [first1, importDefault] = closure_5(() => Date.now());
  const items = [first];
  closure_4(() => {
    first.start(DurationsDefault.Millis.HALF_SECOND, () => closure_1_1(Date.now()));
    return () => first.stop();
  }, items);
  const diff = end - start;
  const result = diff / DurationsDefault.Millis.SECOND;
  const diff1 = first1 - start;
  const bound = Math.max(Math.min(diff1 / DurationsDefault.Millis.SECOND, result), 0);
  const obj = { elapsed: bound, duration: result, percentage: Math.max(Math.min(bound / result, 1), 0) };
  return obj;
};
export const formatTime = function formatTime(arg0) {
  let combined;
  const rounded = Math.floor(arg0);
  const result = rounded % DurationsDefault.Seconds.MINUTE;
  const rounded1 = Math.floor(arg0 / DurationsDefault.Seconds.MINUTE);
  const result1 = rounded1 % DurationsDefault.Seconds.MINUTE;
  const rounded2 = Math.floor(arg0 / DurationsDefault.Seconds.HOUR);
  if (0 === rounded2) {
    const _String4 = String;
    const _String5 = String;
    const StringResult = String(result1);
    const _HermesInternal2 = HermesInternal;
    const padStartResult = StringResult.padStart(2, "0");
    const StringResult1 = String(result);
    combined = "" + padStartResult + ":" + StringResult1.padStart(2, "0");
  } else {
    const _String = String;
    const StringResult2 = String(rounded2);
    const _String2 = String;
    const _String3 = String;
    const padStartResult1 = StringResult2.padStart(2, "0");
    const StringResult3 = String(result1);
    const _HermesInternal = HermesInternal;
    const padStartResult2 = StringResult3.padStart(2, "0");
    const StringResult4 = String(result);
    combined = "" + padStartResult1 + ":" + padStartResult2 + ":" + StringResult4.padStart(2, "0");
  }
  return combined;
};
export const formatTimeForA11yLabel = function formatTimeForA11yLabel(arg0) {
  const rounded = Math.floor(arg0);
  const seconds = rounded % DurationsDefault.Seconds.MINUTE;
  const rounded1 = Math.floor(arg0 / DurationsDefault.Seconds.MINUTE);
  const minutes = rounded1 % DurationsDefault.Seconds.MINUTE;
  const hours = Math.floor(arg0 / DurationsDefault.Seconds.HOUR);
  const obj = utils;
  return obj.formatTimestampToA11yLabel({ hours, minutes, seconds });
};
