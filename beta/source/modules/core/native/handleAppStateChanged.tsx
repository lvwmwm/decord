// Module ID: 18358
// Function ID: 18359
// Name: handleAppStateChanged
// Dependencies: [502, 1983, 1078, 3, 10, 577, 4781, 18357, 7722, 4607, 9, 1245, 2]
// Exports: default

// Module 18358 (handleAppStateChanged)
import LoggerDefault from "Logger" /* 3 */;
import TTITrackerDefault from "TTITracker" /* 9 */;
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import DispatcherDefault from "Dispatcher" /* 577 */;
import ThemeActionCreators from "ThemeActionCreators" /* 4607 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4781 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7722 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AppStateStore from "AppStateStore" /* 1983 */;

require = fn;
const Constants = fn(1078);
({ AnalyticEvents: hasOwnProperty, AppStates: metroRequire } = Constants);
let closure_7 = new LoggerDefault("index.native.tsx");
const size = fn(2);
let result = size.fileFinishedImporting("modules/core/native/handleAppStateChanged.tsx");

export default function handleAppStateChanged(state) {
  state = AppStateStore.getState();
  AppStartPerformanceDefault.markAndLog(closure_7, "\u{1F3C3}", "AppState changing from " + state + " to " + state);
  DispatcherDefault.dispatch({ type: "APP_STATE_UPDATE", state });
  let isAuthenticatedResult = state === constants2.BACKGROUND && state === tmp6.ACTIVE;
  if (isAuthenticatedResult) {
    isAuthenticatedResult = AuthenticationStore.isAuthenticated();
  }
  if (isAuthenticatedResult) {
    isAuthenticatedResult = RTCConnectionStore.default.isDisconnected();
    const _default = RTCConnectionStore.default;
  }
  if (isAuthenticatedResult) {
    tmp2(18357).deferUpdate();
    const tmp2Result = tmp2(18357);
  }
  if (state === constants2.ACTIVE) {
    TTIAnalyticsUtils.trackAppOpened("launcher");
    const result = ThemeActionCreators.setSystemThemeIfNeeded();
  }
  const obj3 = { type: "APP_STATE_UPDATE", state };
  const tmp8 = state === constants2.ACTIVE && state !== constants2.ACTIVE;
  TTITrackerDefault.appStateChanged(state);
  if (tmp8) {
    tmp2(1245).track(constants.APP_BACKGROUND, {});
    const tmp2Result4 = tmp2(1245);
  }
};
