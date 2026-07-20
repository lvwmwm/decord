// Module ID: 16449
// Function ID: 127115
// Name: handleAppStateChanged
// Dependencies: []
// Exports: default

// Module 16449 (handleAppStateChanged)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ AnalyticEvents: closure_5, AppStates: closure_6 } = arg1(dependencyMap[2]));
let importDefaultResult = importDefault(dependencyMap[3]);
importDefaultResult = new importDefaultResult("index.native.tsx");
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/core/native/handleAppStateChanged.tsx");

export default function handleAppStateChanged(state) {
  state = state.getState();
  let obj = importDefault(dependencyMap[4]);
  obj.markAndLog(importDefaultResult, "\u{1F3C3}", "AppState changing from " + state + " to " + state);
  obj = { type: "APP_STATE_UPDATE", state };
  importDefault(dependencyMap[5]).dispatch(obj);
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
    isAuthenticatedResult = arg1(dependencyMap[6]).default.isDisconnected();
    const _default = arg1(dependencyMap[6]).default;
  }
  if (isAuthenticatedResult) {
    importDefault(dependencyMap[7]).deferUpdate();
    const obj4 = importDefault(dependencyMap[7]);
  }
  if (state === constants2.ACTIVE) {
    arg1(dependencyMap[8]).trackAppOpened("launcher");
    const obj5 = arg1(dependencyMap[8]);
    const result = arg1(dependencyMap[9]).setSystemThemeIfNeeded();
    const obj6 = arg1(dependencyMap[9]);
  }
  const obj2 = importDefault(dependencyMap[5]);
  importDefault(dependencyMap[10]).appStateChanged(state);
  if (tmp6) {
    importDefault(dependencyMap[11]).track(constants.APP_BACKGROUND, {});
    const obj8 = importDefault(dependencyMap[11]);
  }
};
