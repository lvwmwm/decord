// Module ID: 16636
// Function ID: 129750
// Name: handleAppStateChanged
// Dependencies: [1194, 6651, 653, 3, 20, 686, 4202, 16635, 6707, 3972, 14, 675, 2]
// Exports: default

// Module 16636 (handleAppStateChanged)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import ME from "ME";
import importDefaultResult from "timestamp";

let closure_5;
let closure_6;
const require = arg1;
({ AnalyticEvents: closure_5, AppStates: closure_6 } = ME);
importDefaultResult = new importDefaultResult("index.native.tsx");
let result = require("ME").fileFinishedImporting("modules/core/native/handleAppStateChanged.tsx");

export default function handleAppStateChanged(state) {
  state = state.getState();
  let obj = importDefault(20);
  obj.markAndLog(closure_7, "\u{1F3C3}", "AppState changing from " + state + " to " + state);
  obj = { type: "APP_STATE_UPDATE", state };
  importDefault(686).dispatch(obj);
  let isAuthenticatedResult = state === constants2.BACKGROUND;
  if (isAuthenticatedResult) {
    isAuthenticatedResult = state === constants2.ACTIVE;
  }
  let tmp6 = state === constants2.ACTIVE;
  if (tmp6) {
    tmp6 = state !== constants2.ACTIVE;
  }
  if (isAuthenticatedResult) {
    isAuthenticatedResult = authenticated.isAuthenticated();
  }
  if (isAuthenticatedResult) {
    isAuthenticatedResult = require(4202) /* _isNativeReflectConstruct */.default.isDisconnected();
    const _default = require(4202) /* _isNativeReflectConstruct */.default;
  }
  if (isAuthenticatedResult) {
    importDefault(16635).deferUpdate();
    const obj4 = importDefault(16635);
  }
  if (state === constants2.ACTIVE) {
    require(6707) /* _createForOfIteratorHelperLoose */.trackAppOpened("launcher");
    const obj5 = require(6707) /* _createForOfIteratorHelperLoose */;
    const result = require(3972) /* setSystemTheme */.setSystemThemeIfNeeded();
    const obj6 = require(3972) /* setSystemTheme */;
  }
  const obj2 = importDefault(686);
  importDefault(14).appStateChanged(state);
  if (tmp6) {
    importDefault(675).track(constants.APP_BACKGROUND, {});
    const obj8 = importDefault(675);
  }
};
