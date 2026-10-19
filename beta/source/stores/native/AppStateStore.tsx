// Module ID: 2001
// Function ID: 2002
// Name: AppStateStore
// Dependencies: [17, 1087, 504, 1267, 2002, 584, 2]

// Module 2001 (AppStateStore)
import react_native from "react-native" /* 17 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1087 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import size from "module_2" /* 2 */;

const AppState = react_native.AppState;
const AppStates = Constants.AppStates;
let currentState = AppState.currentState;
let closure_2 = null;
const Store = get_initializedDefault.Store;
class AppStateStore extends Store {
  getState() {
    return currentState;
  }
  getLastActiveTime() {
    return closure_2;
  }
}
const prototype = AppStateStore.prototype;
AppStateStore.displayName = "AppStateStore";
const promise = asyncRequire(1267, dependencyMap.paths);
promise.then((addExtraAnalyticsDecorator) => {
  let client_app_state;
  const result = addExtraAnalyticsDecorator.addExtraAnalyticsDecorator((arg0) => {
    arg0.client_app_state = client_app_state;
  });
});
const obj = {
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    if (currentState === state.state) {
      return false;
    } else {
      state = state.state;
      currentState = state;
      if (state === AppStates.ACTIVE) {
        const _Date = Date;
        closure_2 = Date.now();
      }
    }
  }
};
const appStateStore = new AppStateStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/native/AppStateStore.tsx");

export default appStateStore;
