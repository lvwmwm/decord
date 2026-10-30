// Module ID: 20057
// Function ID: 20058
// Name: handleAppStateChanged
// Dependencies: [502, 1994, 1072, 3, 10, 572, 5759, 20056, 7647, 5074, 9, 1253, 2]
// Exports: default

// Module 20057 (handleAppStateChanged)
import LoggerDefault from "Logger" /* 3 */;
import TTITrackerDefault from "TTITracker" /* 9 */;
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import ThemeActionCreators from "ThemeActionCreators" /* 5074 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5759 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7647 */;
import BundleUpdaterActionCreatorsDefault from "BundleUpdaterActionCreators" /* 20056 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AppStateStore from "AppStateStore" /* 1994 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ AnalyticEvents: hasOwnProperty, AppStates: metroRequire } = Constants);
let closure_7 = new LoggerDefault("index.native.tsx");
const tmp3 = new LoggerDefault("index.native.tsx");
let result = size.fileFinishedImporting("modules/core/native/handleAppStateChanged.tsx");

export default function handleAppStateChanged(state) {
  state = AppStateStore.getState();
  const obj = AppStartPerformanceDefault;
  obj.markAndLog(closure_7, "\u{1F3C3}", "AppState changing from " + state + " to " + state);
  const obj2 = DispatcherDefault;
  const obj3 = { type: "APP_STATE_UPDATE", state };
  obj2.dispatch(obj3);
  let isAuthenticatedResult = state === metroRequire.BACKGROUND && state === tmp6.ACTIVE;
  const tmp8 = state === metroRequire.ACTIVE && state !== metroRequire.ACTIVE;
  if (isAuthenticatedResult) {
    isAuthenticatedResult = AuthenticationStore.isAuthenticated();
  }
  if (isAuthenticatedResult) {
    const _default = RTCConnectionStore.default;
    isAuthenticatedResult = _default.isDisconnected();
  }
  if (isAuthenticatedResult) {
    const tmp2Result = BundleUpdaterActionCreatorsDefault;
    tmp2Result.deferUpdate();
  }
  if (state === metroRequire.ACTIVE) {
    const obj5 = TTIAnalyticsUtils;
    obj5.trackAppOpened("launcher");
    const obj6 = ThemeActionCreators;
    const result = obj6.setSystemThemeIfNeeded();
  }
  const tmp2Result3 = TTITrackerDefault;
  tmp2Result3.appStateChanged(state);
  if (tmp8) {
    const tmp2Result4 = AnalyticsUtilsDefault;
    tmp2Result4.track(hasOwnProperty.APP_BACKGROUND, {});
  }
};
