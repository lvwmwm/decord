// Module ID: 16375
// Function ID: 16376
// Name: useRelativeTimestamp
// Dependencies: [32, 19, 558, 568, 7882, 1095, 2]

// Module 16375 (useRelativeTimestamp)
import NotificationCenterUtils from "NotificationCenterUtils" /* 7882 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/useRelativeTimestamp.tsx");

export const useRelativeTimestamp = ReactCompilerGating.isReactCompilerEnabled() ? ((timestamp) => {
  const cResult = timestamp(568).c(7);
  timestamp = timestamp.timestamp;
  const abbreviated = timestamp.abbreviated;
  closure_1 = tmp2;
  if (cResult[0] === (undefined === abbreviated || abbreviated)) {
    if (cResult[1] === timestamp) {
      let tmp3 = cResult[2];
    }
    dependencyMap = _slicedToArray(noop.useState(tmp3), 2)[1];
    if (cResult[3] === tmp2) {
      if (cResult[4] === timestamp) {
        let tmp7 = cResult[5];
        let tmp8 = cResult[6];
      }
      const effect = obj2.useEffect(tmp7, tmp8);
      return tmp6;
    }
    const fn2 = function p() {
      dependencyMap(timestamp(7882).getRelativeTimestamp(interval, closure_1));
      const diff = Date.now() - interval;
      if (diff <= closure_1(1095).Millis.DAY) {
        if (diff >= tmp4(1095).Millis.HOUR) {
          let MINUTE = tmp4(1095).Millis.HOUR;
        } else {
          MINUTE = tmp4(1095).Millis.MINUTE;
        }
        const _setInterval = setInterval;
        interval = setInterval(() => {
          dependencyMap(timestamp(7882).getRelativeTimestamp(closure_0, closure_1_1));
        }, MINUTE, MINUTE - diff % MINUTE);
        return () => clearInterval(closure_0);
      }
      const obj = timestamp(7882);
    };
    const items = [timestamp, tmp2];
    cResult[3] = tmp2;
    cResult[4] = timestamp;
    cResult[5] = fn2;
    cResult[6] = items;
    tmp8 = items;
    tmp7 = fn2;
    obj2 = noop;
    const tmp5 = _slicedToArray(noop.useState(tmp3), 2);
  }
  const fn = function v() {
    return NotificationCenterUtils.getRelativeTimestamp(timestamp, closure_1);
  };
  cResult[0] = undefined === abbreviated || abbreviated;
  cResult[1] = timestamp;
  cResult[2] = fn;
  tmp3 = fn;
}) : ((timestamp) => {
  timestamp = timestamp.timestamp;
  let flag = timestamp.abbreviated;
  if (flag === undefined) {
    flag = true;
  }
  const tmp = _slicedToArray(noop.useState(() => NotificationCenterUtils.getRelativeTimestamp(timestamp, flag)), 2);
  dependencyMap = tmp[1];
  const items = [timestamp, flag];
  const effect = noop.useEffect(() => {
    dependencyMap(timestamp(7882).getRelativeTimestamp(interval, flag));
    const diff = Date.now() - interval;
    if (diff <= flag(1095).Millis.DAY) {
      if (diff >= tmp4(1095).Millis.HOUR) {
        let MINUTE = tmp4(1095).Millis.HOUR;
      } else {
        MINUTE = tmp4(1095).Millis.MINUTE;
      }
      const _setInterval = setInterval;
      interval = setInterval(() => {
        dependencyMap(timestamp(7882).getRelativeTimestamp(closure_0, flag));
      }, MINUTE, MINUTE - diff % MINUTE);
      return () => clearInterval(closure_0);
    }
    const obj = timestamp(7882);
  }, items);
  return tmp[0];
});
