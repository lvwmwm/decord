// Module ID: 14789
// Function ID: 111464
// Name: useRelativeTimestamp
// Dependencies: []
// Exports: useRelativeTimestamp

// Module 14789 (useRelativeTimestamp)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/notification_center/useRelativeTimestamp.tsx");

export const useRelativeTimestamp = function useRelativeTimestamp(timestamp) {
  timestamp = timestamp.timestamp;
  const arg1 = timestamp;
  let flag = timestamp.abbreviated;
  if (flag === undefined) {
    flag = true;
  }
  const importDefault = flag;
  let closure_2;
  const tmp = callback(React.useState(() => timestamp(closure_2[2]).getRelativeTimestamp(timestamp, flag)), 2);
  closure_2 = tmp[1];
  const items = [timestamp, flag];
  const effect = React.useEffect(() => {
    callback(timestamp(callback[2]).getRelativeTimestamp(timestamp, flag));
    const diff = Date.now() - timestamp;
    if (diff <= flag(callback[3]).Millis.DAY) {
      if (diff >= flag(callback[3]).Millis.HOUR) {
        let MINUTE = flag(callback[3]).Millis.HOUR;
      } else {
        MINUTE = flag(callback[3]).Millis.MINUTE;
      }
      const _setInterval = setInterval;
      const timestamp = setInterval(() => {
        callback2(callback(callback2[2]).getRelativeTimestamp(callback, closure_1));
      }, MINUTE, MINUTE - diff % MINUTE);
      return () => clearInterval(closure_0);
    }
    const obj = timestamp(callback[2]);
  }, items);
  return tmp[0];
};
