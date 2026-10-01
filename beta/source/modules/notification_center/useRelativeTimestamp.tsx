// Module ID: 15669
// Function ID: 15670
// Name: useRelativeTimestamp
// Dependencies: [32, 19, 7055, 1091, 2]
// Exports: useRelativeTimestamp

// Module 15669 (useRelativeTimestamp)
import NotificationCenterUtils from "NotificationCenterUtils" /* 7055 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/notification_center/useRelativeTimestamp.tsx");

export const useRelativeTimestamp = function useRelativeTimestamp(timestamp) {
  let closure_2;
  let first;
  timestamp = timestamp.timestamp;
  let flag = timestamp.abbreviated;
  if (flag === undefined) {
    flag = true;
  }
  closure_2 = undefined;
  [first, closure_2] = react.useState(() => {
    const obj = NotificationCenterUtils;
    return obj.getRelativeTimestamp(timestamp, flag);
  });
  const items = [timestamp, flag];
  const effect = react.useEffect(() => {
    let closure_0;
    let interval;
    let obj = timestamp(closure_2[2]);
    closure_2(obj.getRelativeTimestamp(interval, flag));
    const diff = Date.now() - interval;
    if (diff <= flag(closure_2[3]).Millis.DAY) {
      let MINUTE;
      if (diff >= flag(closure_2[3]).Millis.HOUR) {
        MINUTE = tmp4(tmp[3]).Millis.HOUR;
      } else {
        MINUTE = tmp4(tmp[3]).Millis.MINUTE;
      }
      const _setInterval = setInterval;
      interval = setInterval(() => {
        const obj = timestamp(closure_2[2]);
        closure_1_2(obj.getRelativeTimestamp(closure_0, flag));
      }, MINUTE, MINUTE - diff % MINUTE);
      return () => clearInterval(closure_0);
    }
  }, items);
  return first;
};
