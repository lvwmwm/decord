// Module ID: 11926
// Function ID: 92242
// Name: extractTimeComponents
// Dependencies: []
// Exports: default, formatTime, formatTimeForA11yLabel

// Module 11926 (extractTimeComponents)
function extractTimeComponents(arg0) {
  const rounded = Math.floor(arg0);
  const result = rounded % importDefault(dependencyMap[2]).Seconds.MINUTE;
  const rounded1 = Math.floor(arg0 / importDefault(dependencyMap[2]).Seconds.MINUTE);
  const obj = {};
  const result1 = rounded1 % importDefault(dependencyMap[2]).Seconds.MINUTE;
  obj.hours = Math.floor(arg0 / importDefault(dependencyMap[2]).Seconds.HOUR);
  obj.minutes = result1;
  obj.seconds = result;
  return obj;
}
function pad(arg0) {
  return String(arg0).padStart(2, "0");
}
let closure_3 = importDefault(dependencyMap[0]);
({ useEffect: closure_4, useState: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_profile/hooks/useActivityTimer.tsx");

export default function useActivityTimer(start) {
  start = start.start;
  const interval = new arg1(dependencyMap[4]).Interval();
  const first = callback(callback3(interval), 1)[0];
  const arg1 = first;
  const tmp3 = callback(callback3(() => Date.now()), 2);
  const importDefault = tmp3[1];
  const items = [first];
  callback2(() => {
    first.start(callback(closure_2[2]).Millis.HALF_SECOND, () => callback(Date.now()));
    return () => closure_0.stop();
  }, items);
  const diff = start.end - start;
  const result = diff / importDefault(dependencyMap[2]).Millis.SECOND;
  const diff1 = tmp3[0] - start;
  const bound = Math.max(Math.min(diff1 / importDefault(dependencyMap[2]).Millis.SECOND, result), 0);
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
  return arg1(dependencyMap[3]).formatTimestampToA11yLabel({ hours, minutes, seconds });
};
