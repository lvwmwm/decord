// Module ID: 15464
// Function ID: 117967
// Name: useAutoSettingsSearchSessionAnalytics
// Dependencies: []
// Exports: useAutoSettingsSearchSessionAnalytics

// Module 15464 (useAutoSettingsSearchSessionAnalytics)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/core/native/useAutoSettingsSearchSessionAnalytics.tsx");

export const useAutoSettingsSearchSessionAnalytics = function useAutoSettingsSearchSessionAnalytics() {
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const state = state.getState();
    return state === stateFromStores(closure_2[4]).AppStates.ACTIVE;
  });
  const arg1 = stateFromStores;
  const tmp2 = importDefault(dependencyMap[5])(stateFromStores);
  const importDefault = tmp2;
  importDefault(dependencyMap[6])(() => () => {
    callback(closure_2[7]).terminate();
  });
  const items1 = [stateFromStores, tmp2];
  const effect = React.useEffect(() => {
    let field = store.getField("isFocused");
    if (!field) {
      field = store.getField("query").length > 0;
    }
    let tmp2 = stateFromStores;
    if (stateFromStores) {
      tmp2 = !tmp2;
    }
    if (tmp2) {
      tmp2 = field;
    }
    if (tmp2) {
      tmp2(closure_2[7]).initialize();
      const obj = tmp2(closure_2[7]);
    }
    if (tmp7) {
      tmp2(closure_2[7]).terminate();
      const obj2 = tmp2(closure_2[7]);
    }
  }, items1);
  const items2 = [stateFromStores];
  const effect1 = React.useEffect(() => store.subscribe((isFocused) => {
    isFocused = isFocused.isFocused;
    if (!isFocused) {
      isFocused = isFocused.query.length > 0;
    }
    return isFocused;
  }, (arg0) => {
    const obj = callback(closure_2[7]);
    if (arg0) {
      obj.initialize();
    } else {
      obj.terminate();
    }
  }, {
    equalityFn(arg0, arg1) {
      return arg0 === arg1;
    }
  }), items2);
  const items3 = [stateFromStores];
  const effect2 = React.useEffect(() => store.subscribe((isFocused) => {
    isFocused = isFocused.isFocused;
    if (isFocused) {
      isFocused = isFocused.query.length > 0;
    }
    return isFocused;
  }, (arg0) => {
    if (arg0) {
      const result = callback(closure_2[7]).maybeTrackQueryEntered();
      const obj = callback(closure_2[7]);
    }
  }, {
    equalityFn(arg0, arg1) {
      return arg0 === arg1;
    }
  }), items3);
};
