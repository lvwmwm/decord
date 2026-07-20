// Module ID: 673
// Function ID: 8273
// Name: setOriginWindow
// Dependencies: []
// Exports: requestSafeIdleCallback, setOriginWindow

// Module 673 (setOriginWindow)
const _module = require(dependencyMap[0]);
const globalObject = _module.getGlobalObject();
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("../discord_common/js/packages/design/utils/requestSafeIdleCallback.tsx");

export function setOriginWindow(arg0) {
  let closure_0 = arg0;
}
export const requestSafeIdleCallback = function requestSafeIdleCallback(arg0, timeout) {
  let closure_0 = arg0;
  let closure_1 = closure_0;
  if (undefined !== closure_0) {
    if (null != obj.requestIdleCallback) {
      if (null != obj.cancelIdleCallback) {
        let closure_2 = false;
        let timeout2 = null;
        function runOnce() {
          if (!closure_2) {
            closure_2 = true;
            if (null != closure_3) {
              closure_1.clearTimeout(closure_3);
              closure_3 = null;
            }
            arg0();
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
          if (!closure_2) {
            closure_1.cancelIdleCallback(closure_5);
          }
          runOnce();
        }, num);
        return () => {
          closure_1.cancelIdleCallback(closure_5);
          if (null != closure_3) {
            closure_1.clearTimeout(closure_3);
            closure_3 = null;
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
