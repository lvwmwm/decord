// Module ID: 14905
// Function ID: 113632
// Name: useRelativeTimestamp
// Dependencies: [57, 31, 6884, 664, 2]
// Exports: useRelativeTimestamp

// Module 14905 (useRelativeTimestamp)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
const result = require("getRelativeTimestamp").fileFinishedImporting("modules/notification_center/useRelativeTimestamp.tsx");

export const useRelativeTimestamp = function useRelativeTimestamp(timestamp) {
  timestamp = timestamp.timestamp;
  let flag = timestamp.abbreviated;
  if (flag === undefined) {
    flag = true;
  }
  let closure_2;
  const tmp = callback(React.useState(() => timestamp(6884).getRelativeTimestamp(timestamp, flag)), 2);
  closure_2 = tmp[1];
  const items = [timestamp, flag];
  const effect = React.useEffect(() => {
    dependencyMap(timestamp(6884).getRelativeTimestamp(interval, flag));
    const diff = Date.now() - interval;
    if (diff <= flag(664).Millis.DAY) {
      if (diff >= flag(664).Millis.HOUR) {
        let MINUTE = flag(664).Millis.HOUR;
      } else {
        MINUTE = flag(664).Millis.MINUTE;
      }
      const _setInterval = setInterval;
      interval = setInterval(() => {
        outer1_2(timestamp(table[2]).getRelativeTimestamp(closure_0, outer1_1));
      }, MINUTE, MINUTE - diff % MINUTE);
      return () => clearInterval(closure_0);
    }
    const obj = timestamp(6884);
  }, items);
  return tmp[0];
};
