// Module ID: 7881
// Function ID: 62746
// Name: useAvatarDecorationIfNotExpired
// Dependencies: [57, 31, 653, 1828, 4015, 2]
// Exports: default

// Module 7881 (useAvatarDecorationIfNotExpired)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { MAX_TIMEOUT_MS } from "ME";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecorationIfNotExpired.tsx");

export default function useAvatarDecorationIfNotExpired(arg0) {
  let closure_0 = arg0;
  let tmp;
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  callback = tmp2[1];
  React = React.useRef(null);
  const items = [arg0];
  const effect = React.useEffect(() => {
    function maybeScheduleExpirationCheck() {
      if (null != maybeScheduleExpirationCheck) {
        if ("expiresAt" in maybeScheduleExpirationCheck) {
          if (null != maybeScheduleExpirationCheck.expiresAt) {
            const result = maybeScheduleExpirationCheck(first[3]).isAvatarDecorationExpired(maybeScheduleExpirationCheck);
            outer1_2(result);
            const _Date = Date;
            const result1 = 1000 * maybeScheduleExpirationCheck.expiresAt;
            const diff = result1 - Date.now();
            if (!result) {
              if (diff > 0) {
                const Timeout = maybeScheduleExpirationCheck(first[4]).Timeout;
                const prototype = Timeout.prototype;
                const timeout = new Timeout();
                const _Math = Math;
                timeout.start(Math.min(outer2_4, diff), () => {
                  outer1_0();
                });
                outer1_3.current = timeout;
              }
            }
            const obj = maybeScheduleExpirationCheck(first[3]);
          }
        }
      }
      outer1_2(false);
    }
    let result = maybeScheduleExpirationCheck();
    return () => {
      const current = outer1_3.current;
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
