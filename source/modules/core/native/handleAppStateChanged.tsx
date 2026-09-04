// Module ID: 17820
// Function ID: 17821
// Name: handleAppStateChanged
// Dependencies: [1215, 7347, 673, 3, 10, 706, 4557, 17819, 7408, 4328, 9, 695, 2]
// Exports: default

// Module 17820 (handleAppStateChanged)
import timestampDefault from "timestamp" /* 3 */;
import isTracingDefault from "isTracing" /* 10 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import setSystemTheme from "setSystemTheme" /* 4328 */;
import createRTCConnection from "createRTCConnection" /* 4557 */;
import getDeviceMetadata from "getDeviceMetadata" /* 7408 */;
import closure_3 from "fetchFingerprint" /* 1215 */;
import closure_4 from "getState" /* 7347 */;
import ME from "ME" /* 673 */;

require = arg1;
({ AnalyticEvents: c5, AppStates: closure_6 } = ME);
let closure_7 = new timestampDefault("index.native.tsx");
const tmp3 = new timestampDefault("index.native.tsx");
let result = require("set").fileFinishedImporting("modules/core/native/handleAppStateChanged.tsx");

export default function handleAppStateChanged(state) {
  state = state.getState();
  let obj = isTracingDefault;
  obj.markAndLog(closure_7, "\u{1F3C3}", "AppState changing from " + state + " to " + state);
  obj = { type: "APP_STATE_UPDATE", state };
  dispatcherDefault.dispatch(obj);
  let isAuthenticatedResult = state === constants2.BACKGROUND && state === tmp6.ACTIVE;
  if (isAuthenticatedResult) {
    isAuthenticatedResult = authenticated.isAuthenticated();
  }
  if (isAuthenticatedResult) {
    isAuthenticatedResult = createRTCConnection.default.isDisconnected();
    const _default = createRTCConnection.default;
  }
  if (isAuthenticatedResult) {
    let tmp2Result = tmp2(17819);
    tmp2Result.deferUpdate();
  }
  if (state === constants2.ACTIVE) {
    getDeviceMetadata.trackAppOpened("launcher");
    const obj5 = getDeviceMetadata;
    const result = setSystemTheme.setSystemThemeIfNeeded();
    const obj6 = setSystemTheme;
  }
  tmp2Result = tmp2(9);
  tmp2Result.appStateChanged(state);
  if (tmp8) {
    tmp2(695).track(constants.APP_BACKGROUND, {});
    const tmp2Result1 = tmp2(695);
  }
};
