// Module ID: 15589
// Function ID: 120184
// Name: useAutoSettingsSearchSessionAnalytics
// Dependencies: [31, 6651, 13552, 566, 668, 8284, 4559, 5794, 2]
// Exports: useAutoSettingsSearchSessionAnalytics

// Module 15589 (useAutoSettingsSearchSessionAnalytics)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import zustandStore from "zustandStore";

const require = arg1;
let result = require("zustandStore").fileFinishedImporting("modules/user_settings/core/native/useAutoSettingsSearchSessionAnalytics.tsx");

export const useAutoSettingsSearchSessionAnalytics = function useAutoSettingsSearchSessionAnalytics() {
  const items = [_isNativeReflectConstruct];
  stateFromStores = stateFromStores(566).useStateFromStores(items, () => {
    const state = outer1_4.getState();
    return state === stateFromStores(outer1_2[4]).AppStates.ACTIVE;
  });
  let tmp2 = importDefault(8284)(stateFromStores);
  importDefault = tmp2;
  importDefault(4559)(() => () => {
    callback(outer2_2[7]).terminate();
  });
  const items1 = [stateFromStores, tmp2];
  const effect = React.useEffect(() => {
    let field = outer1_5.getField("isFocused");
    if (!field) {
      field = outer1_5.getField("query").length > 0;
    }
    let tmp2 = stateFromStores;
    if (stateFromStores) {
      tmp2 = !tmp2;
    }
    if (tmp2) {
      tmp2 = field;
    }
    if (tmp2) {
      tmp2(outer1_2[7]).initialize();
      const obj = tmp2(outer1_2[7]);
    }
    if (tmp7) {
      tmp2(outer1_2[7]).terminate();
      const obj2 = tmp2(outer1_2[7]);
    }
  }, items1);
  const items2 = [stateFromStores];
  const effect1 = React.useEffect(() => outer1_5.subscribe((isFocused) => {
    isFocused = isFocused.isFocused;
    if (!isFocused) {
      isFocused = isFocused.query.length > 0;
    }
    return isFocused;
  }, (arg0) => {
    const obj = callback(outer2_2[7]);
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
  const effect2 = React.useEffect(() => outer1_5.subscribe((isFocused) => {
    isFocused = isFocused.isFocused;
    if (isFocused) {
      isFocused = isFocused.query.length > 0;
    }
    return isFocused;
  }, (arg0) => {
    if (arg0) {
      const result = callback(outer2_2[7]).maybeTrackQueryEntered();
      const obj = callback(outer2_2[7]);
    }
  }, {
    equalityFn(arg0, arg1) {
      return arg0 === arg1;
    }
  }), items3);
};
