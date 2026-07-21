// Module ID: 7874
// Function ID: 62686
// Name: useAvatarDecorationIfNotExpired
// Dependencies: []
// Exports: default

// Module 7874 (useAvatarDecorationIfNotExpired)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const MAX_TIMEOUT_MS = arg1(dependencyMap[2]).MAX_TIMEOUT_MS;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecorationIfNotExpired.tsx");

export default function useAvatarDecorationIfNotExpired(arg0) {
  const arg1 = arg0;
  let tmp;
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  const dependencyMap = first;
  const callback = tmp2[1];
  const React = React.useRef(null);
  const items = [arg0];
  const effect = React.useEffect(() => {
    function maybeScheduleExpirationCheck(arg0) {
      if (null != maybeScheduleExpirationCheck) {
        if ("expiresAt" in maybeScheduleExpirationCheck) {
          if (null != maybeScheduleExpirationCheck.expiresAt) {
            const result = maybeScheduleExpirationCheck(closure_1[3]).isAvatarDecorationExpired(maybeScheduleExpirationCheck);
            callback(result);
            const _Date = Date;
            const result1 = 1000 * maybeScheduleExpirationCheck.expiresAt;
            const diff = result1 - Date.now();
            if (!result) {
              if (diff > 0) {
                const Timeout = maybeScheduleExpirationCheck(closure_1[4]).Timeout;
                const prototype = Timeout.prototype;
                const timeout = new Timeout();
                const _Math = Math;
                timeout.start(Math.min(closure_4, diff), () => {
                  callback();
                });
                closure_3.current = timeout;
              }
            }
            const obj = maybeScheduleExpirationCheck(closure_1[3]);
          }
        }
      }
      callback(false);
    }
    const arg0 = maybeScheduleExpirationCheck;
    const result = maybeScheduleExpirationCheck();
    return () => {
      const current = ref.current;
      let stopResult;
      if (null != current) {
        stopResult = current.stop();
      }
      return stopResult;
    };
  }, items);
  const items1 = [first];
  const effect1 = React.useEffect(() => {
    if (first) {
      const current = ref.current;
      if (null != current) {
        current.stop();
      }
    }
  }, items1);
  if (!first) {
    tmp = arg0;
  }
  return tmp;
};
