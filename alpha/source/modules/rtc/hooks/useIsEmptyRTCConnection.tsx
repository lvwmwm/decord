// Module ID: 9270
// Function ID: 9271
// Name: useIsEmptyRTCConnection
// Dependencies: [502, 5759, 7878, 504, 2]
// Exports: useIsCallRTCConnectionEmpty, useIsStreamRTCConnectionEmpty

// Module 9270 (useIsEmptyRTCConnection)
import get_initialized from "get initialized" /* 504 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5759 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 7878 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/rtc/hooks/useIsEmptyRTCConnection.tsx");

export function useIsStreamRTCConnectionEmpty(stateFromStores4) {
  _require = stateFromStores4;
  const items = [StreamRTCConnectionStore, AuthenticationStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    if (null == stateFromStores4) {
      return true;
    } else {
      const userIds = StreamRTCConnectionStore.getUserIds(tmp);
      let tmp3 = null == userIds;
      if (!tmp3) {
        let tmp6 = 0 === userIds.size;
        if (!tmp6) {
          tmp6 = 1 === userIds.size && userIds.has(tmp5);
          1 === userIds.size && userIds.has(tmp5);
        }
        tmp3 = tmp6;
      }
      return tmp3;
    }
  });
}
export function useIsCallRTCConnectionEmpty() {
  const items = [RTCConnectionStore, AuthenticationStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    userIds = userIds.getUserIds();
    let tmp = null == userIds;
    if (!tmp) {
      let tmp4 = 0 === userIds.size;
      if (!tmp4) {
        tmp4 = 1 === userIds.size && userIds.has(tmp3);
        1 === userIds.size && userIds.has(tmp3);
      }
      tmp = tmp4;
    }
    return tmp;
  });
}
