// Module ID: 16659
// Function ID: 129965
// Name: handleAppStateChanged
// Dependencies: [1194, 6271, 653, 3, 20, 686, 4203, 16658, 5703, 3973, 14, 675, 2]
// Exports: default

// Module 16659 (handleAppStateChanged)
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
    isAuthenticatedResult = require(4203) /* _isNativeReflectConstruct */.default.isDisconnected();
    const _default = require(4203) /* _isNativeReflectConstruct */.default;
  }
  if (isAuthenticatedResult) {
    importDefault(16658).deferUpdate();
    const obj4 = importDefault(16658);
  }
  if (state === constants2.ACTIVE) {
    require(5703) /* _createForOfIteratorHelperLoose */.trackAppOpened("launcher");
    const obj5 = require(5703) /* _createForOfIteratorHelperLoose */;
    const result = require(3973) /* setSystemTheme */.setSystemThemeIfNeeded();
    const obj6 = require(3973) /* setSystemTheme */;
  }
  const obj2 = importDefault(686);
  importDefault(14).appStateChanged(state);
  if (tmp6) {
    importDefault(675).track(constants.APP_BACKGROUND, {});
    const obj8 = importDefault(675);
  }
};
