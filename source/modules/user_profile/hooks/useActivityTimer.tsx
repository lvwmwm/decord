// Module ID: 11946
// Function ID: 92344
// Name: extractTimeComponents
// Dependencies: [57, 31, 664, 7815, 4015, 2]
// Exports: default, formatTime, formatTimeForA11yLabel

// Module 11946 (extractTimeComponents)
import _slicedToArray from "_slicedToArray";
import result from "result";

let closure_4;
let closure_5;
const require = arg1;
function extractTimeComponents(arg0) {
  const rounded = Math.floor(arg0);
  const result = rounded % importDefault(664).Seconds.MINUTE;
  const rounded1 = Math.floor(arg0 / importDefault(664).Seconds.MINUTE);
  const obj = {};
  const result1 = rounded1 % importDefault(664).Seconds.MINUTE;
  obj.hours = Math.floor(arg0 / importDefault(664).Seconds.HOUR);
  obj.minutes = result1;
  obj.seconds = result;
  return obj;
}
function pad(arg0) {
  return String(arg0).padStart(2, "0");
}
({ useEffect: closure_4, useState: closure_5 } = result);
result = require("set").fileFinishedImporting("modules/user_profile/hooks/useActivityTimer.tsx");

export default function useActivityTimer(start) {
  start = start.start;
  const interval = new first(4015).Interval();
  first = callback(callback3(interval), 1)[0];
  const tmp3 = callback(callback3(() => Date.now()), 2);
  const importDefault = tmp3[1];
  const items = [first];
  callback2(() => {
    first.start(callback(outer1_2[2]).Millis.HALF_SECOND, () => outer1_1(Date.now()));
    return () => outer1_0.stop();
  }, items);
  const diff = start.end - start;
  const result = diff / importDefault(664).Millis.SECOND;
  const diff1 = tmp3[0] - start;
  const bound = Math.max(Math.min(diff1 / importDefault(664).Millis.SECOND, result), 0);
  return { elapsed: bound, duration: result, percentage: Math.max(Math.min(bound / result, 1), 0) };
};
export const formatTime = function formatTime(arg0) {
  let hours;
  let minutes;
  let seconds;
  ({ hours, minutes, seconds } = extractTimeComponents(arg0));
  if (0 === hours) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + pad(minutes) + ":" + pad(seconds);
    const tmp9 = pad(minutes);
  } else {
    const tmp3 = pad(hours);
    const _HermesInternal = HermesInternal;
    combined = "" + tmp3 + ":" + pad(minutes) + ":" + pad(seconds);
    const tmp4 = pad(minutes);
  }
  return combined;
};
export const formatTimeForA11yLabel = function formatTimeForA11yLabel(arg0) {
  let hours;
  let minutes;
  let seconds;
  ({ hours, minutes, seconds } = extractTimeComponents(arg0));
  const tmp = extractTimeComponents(arg0);
  return require(7815) /* calculateTimestampDurations */.formatTimestampToA11yLabel({ hours, minutes, seconds });
};
