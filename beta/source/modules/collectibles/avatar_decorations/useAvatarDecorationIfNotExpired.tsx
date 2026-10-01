// Module ID: 7704
// Function ID: 7705
// Name: useAvatarDecorationIfNotExpired
// Dependencies: [32, 19, 1074, 1966, 2040, 2]
// Exports: default

// Module 7704 (useAvatarDecorationIfNotExpired)
import Constants from "Constants" /* 1074 */;
import AvatarDecorationUtils from "AvatarDecorationUtils" /* 1966 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const MAX_TIMEOUT_MS = Constants.MAX_TIMEOUT_MS;
let result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecorationIfNotExpired.tsx");

export default function useAvatarDecorationIfNotExpired(arg0) {
  let closure_2;
  let first;
  let ref;
  let closure_0 = arg0;
  [first, _slicedToArray] = react.useState(false);
  react = react.useRef(null);
  const items = [arg0];
  const effect = react.useEffect(() => {
    function maybeScheduleExpirationCheck() {
      if (null != maybeScheduleExpirationCheck) {
        if ("expiresAt" in maybeScheduleExpirationCheck) {
          if (null != maybeScheduleExpirationCheck.expiresAt) {
            const obj = AvatarDecorationUtils;
            const result = obj.isAvatarDecorationExpired(tmp);
            closure_2(result);
            const _Date = Date;
            const result1 = 1000 * tmp.expiresAt;
            const diff = result1 - Date.now();
            const tmp3 = require;
            if (!result) {
              if (0 < diff) {
                const self = this;
                const self2 = this;
                const timeout = new tmp3(2040).Timeout();
                const _Math = Math;
                timeout.start(Math.min(MAX_TIMEOUT_MS, diff), () => {
                  maybeScheduleExpirationCheck();
                });
                ref.current = timeout;
              }
            }
          }
        }
      }
      closure_2(false);
    }
    let result = maybeScheduleExpirationCheck();
    return () => {
      const current = ref.current;
      let stopResult;
      if (current != null) {
        stopResult = current.stop();
      }
      return stopResult;
    };
  }, items);
  const items1 = [first];
  const effect1 = react.useEffect(() => {
    const tmp = first;
    if (tmp) {
      const current = ref.current;
      if (current != null) {
        current.stop();
      }
    }
  }, items1);
  let tmp5;
  if (!first) {
    tmp5 = arg0;
  }
  return tmp5;
};
