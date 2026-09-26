// Module ID: 15671
// Function ID: 15672
// Name: useRelativeTimestamp
// Dependencies: [32, 19, 7055, 1091, 2]
// Exports: useRelativeTimestamp

// Module 15671 (useRelativeTimestamp)
import NotificationCenterUtils from "NotificationCenterUtils" /* 7055 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/useRelativeTimestamp.tsx");

export const useRelativeTimestamp = function useRelativeTimestamp(timestamp) {
  timestamp = timestamp.timestamp;
  let flag = timestamp.abbreviated;
  if (flag === undefined) {
    flag = true;
  }
  const tmp = _slicedToArray(noop.useState(() => NotificationCenterUtils.getRelativeTimestamp(timestamp, flag)), 2);
  dependencyMap = tmp[1];
  const items = [timestamp, flag];
  const effect = noop.useEffect(() => {
    dependencyMap(timestamp(7055).getRelativeTimestamp(interval, flag));
    const diff = Date.now() - interval;
    if (diff <= flag(1091).Millis.DAY) {
      if (diff >= tmp4(1091).Millis.HOUR) {
        let MINUTE = tmp4(1091).Millis.HOUR;
      } else {
        MINUTE = tmp4(1091).Millis.MINUTE;
      }
      const _setInterval = setInterval;
      interval = setInterval(() => {
        dependencyMap(timestamp(7055).getRelativeTimestamp(closure_0, flag));
      }, MINUTE, MINUTE - diff % MINUTE);
      return () => clearInterval(closure_0);
    }
    const obj = timestamp(7055);
  }, items);
  return tmp[0];
};
