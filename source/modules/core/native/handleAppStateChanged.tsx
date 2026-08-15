// Module ID: 17116
// Function ID: 17117
// Name: handleAppStateChanged
// Dependencies: [1218, 7383, 676, 3, 10, 709, 4539, 17115, 5066, 4222, 9, 698, 2]
// Exports: default

// Module 17116 (handleAppStateChanged)
import fetchFingerprint from "fetchFingerprint";
import getState from "getState";
import ME from "ME";

let c5;
let closure_6;
const require = arg1;
({ AnalyticEvents: c5, AppStates: closure_6 } = ME);
const error = new require("timestamp")("index.native.tsx");
const tmp3 = new require("timestamp")("index.native.tsx");
let result = require("ME").fileFinishedImporting("modules/core/native/handleAppStateChanged.tsx");

export default function handleAppStateChanged(state) {
  state = state.getState();
  let obj = importDefault(10);
  obj.markAndLog(closure_7, "\u{1F3C3}", "AppState changing from " + state + " to " + state);
  obj = { type: "APP_STATE_UPDATE", state };
  importDefault(709).dispatch(obj);
  let isAuthenticatedResult = state === constants2.BACKGROUND && state === tmp6.ACTIVE;
  if (isAuthenticatedResult) {
    isAuthenticatedResult = authenticated.isAuthenticated();
  }
  if (isAuthenticatedResult) {
    isAuthenticatedResult = require(4539) /* createRTCConnection */.default.isDisconnected();
    const _default = require(4539) /* createRTCConnection */.default;
  }
  if (isAuthenticatedResult) {
    let tmp2Result = tmp2(17115);
    tmp2Result.deferUpdate();
  }
  if (state === constants2.ACTIVE) {
    require(5066) /* getDeviceMetadata */.trackAppOpened("launcher");
    const obj5 = require(5066) /* getDeviceMetadata */;
    const result = require(4222) /* setSystemTheme */.setSystemThemeIfNeeded();
    const obj6 = require(4222) /* setSystemTheme */;
  }
  tmp2Result = tmp2(9);
  tmp2Result.appStateChanged(state);
  if (tmp8) {
    tmp2(698).track(constants.APP_BACKGROUND, {});
    const tmp2Result1 = tmp2(698);
  }
};
