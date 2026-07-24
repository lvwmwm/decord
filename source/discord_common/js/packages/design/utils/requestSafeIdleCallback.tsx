// Module ID: 673
// Function ID: 8278
// Name: setOriginWindow
// Dependencies: [674, 2]
// Exports: requestSafeIdleCallback, setOriginWindow

// Module 673 (setOriginWindow)
import getGlobalObject from "getGlobalObject";

getGlobalObject = getGlobalObject.getGlobalObject();
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/utils/requestSafeIdleCallback.tsx");

export function setOriginWindow(arg0) {
  let closure_0 = arg0;
}
export const requestSafeIdleCallback = function requestSafeIdleCallback(arg0, timeout) {
  let closure_0 = arg0;
  let closure_1 = closure_0;
  if (undefined !== closure_0) {
    if (null != obj.requestIdleCallback) {
      if (null != obj.cancelIdleCallback) {
        let c2 = false;
        let timeout2 = null;
        function runOnce() {
          if (!c2) {
            c2 = true;
            if (null != c3) {
              closure_1.clearTimeout(c3);
              c3 = null;
            }
            callback();
          }
        }
        let closure_5 = obj.requestIdleCallback(runOnce, timeout);
        timeout = undefined;
        if (null != timeout) {
          timeout = timeout.timeout;
        }
        let num = 1000;
        if (null != timeout) {
          num = timeout;
        }
        timeout2 = obj.setTimeout(() => {
          if (!c2) {
            closure_1.cancelIdleCallback(closure_5);
          }
          runOnce();
        }, num);
        return () => {
          closure_1.cancelIdleCallback(closure_5);
          if (null != c3) {
            closure_1.clearTimeout(c3);
            c3 = null;
          }
        };
      }
    }
  }
  const timeout3 = obj.setTimeout(arg0, 0);
  return () => {
    closure_1.clearTimeout(closure_6);
  };
};
