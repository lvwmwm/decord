// Module ID: 1983
// Function ID: 1984
// Name: AppStateStore
// Dependencies: [17, 1078, 504, 1245, 1984, 577, 2]

// Module 1983 (AppStateStore)
import _mod17 from "module_17" /* 17 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 577 */;
import Constants from "Constants" /* 1078 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import size from "module_2" /* 2 */;

const AppStates = Constants.AppStates;
let state = _mod17.AppState.currentState;
let closure_2 = null;
const Store = initializeDefault.Store;
class AppStateStore extends Store {
}
const prototype = AppStateStore.prototype;
prototype["getState"] = function getState() {
  return state;
};
prototype["getLastActiveTime"] = function getLastActiveTime() {
  return closure_2;
};
AppStateStore.displayName = "AppStateStore";
asyncRequireImpl(1245, dependencyMap.paths).then((addExtraAnalyticsDecorator) => {
  const result = addExtraAnalyticsDecorator.addExtraAnalyticsDecorator((arg0) => {
    arg0.client_app_state = client_app_state;
  });
});
const appStateStore = new AppStateStore(DispatcherDefault, {
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if (state === state.state) {
      return false;
    } else {
      state = state.state;
      if (state === AppStates.ACTIVE) {
        const _Date = Date;
        closure_2 = Date.now();
      }
    }
  }
});
let result = size.fileFinishedImporting("stores/native/AppStateStore.tsx");

export default appStateStore;
