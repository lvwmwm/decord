// Module ID: 19263
// Function ID: 19264
// Name: useAutoSettingsSearchSessionAnalytics
// Dependencies: [19, 2119, 16199, 504, 1091, 6831, 5604, 7352, 2]
// Exports: useAutoSettingsSearchSessionAnalytics

// Module 19263 (useAutoSettingsSearchSessionAnalytics)
import useMountEffectDefault from "useMountEffect" /* 5604 */;
import usePreviousDefault from "usePrevious" /* 6831 */;
import SettingSearchSessionAnalyticsManagerDefault from "SettingSearchSessionAnalyticsManager" /* 7352 */;
import react from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 2119 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 16199 */;
import size from "module_2" /* 2 */;

let importDefault, isFocused, state;

let result = size.fileFinishedImporting("modules/user_settings/core/native/useAutoSettingsSearchSessionAnalytics.tsx");

export function useAutoSettingsSearchSessionAnalytics() {
  let closure_1;
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [AppStateStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    state = state.getState();
    return state === stateFromStores(dependencyMap[4]).AppStates.ACTIVE;
  });
  let tmp2 = usePreviousDefault(stateFromStores);
  importDefault = tmp2;
  let tmp3 = useMountEffectDefault(() => () => {
    const obj = closure_1_1(closure_1_2[7]);
    obj.terminate();
  });
  const items1 = [stateFromStores, tmp2];
  const effect = react.useEffect(() => {
    const field = UserSettingSearchStore.getField("isFocused") || UserSettingSearchStore.getField("query").length > 0;
    let tmp3 = stateFromStores;
    const tmp2 = stateFromStores;
    if (tmp3) {
      tmp3 = !closure_1;
    }
    if (tmp3) {
      tmp3 = field;
    }
    if (tmp3) {
      const obj = SettingSearchSessionAnalyticsManagerDefault;
      obj.initialize();
    }
    const tmp8 = !tmp2 && closure_1 && field;
    if (tmp8) {
      const obj2 = SettingSearchSessionAnalyticsManagerDefault;
      obj2.terminate();
    }
  }, items1);
  const items2 = [stateFromStores];
  const effect1 = react.useEffect(() => {
    let obj = {
      equalityFn(arg0, arg1) {
        return arg0 === arg1;
      }
    };
    return UserSettingSearchStore.subscribe((isFocused) => {
      isFocused = isFocused.isFocused || isFocused.query.length > 0;
      return isFocused;
    }, (arg0) => {
      const obj = closure_1_1(closure_1_2[7]);
      const tmp = arg0;
      if (tmp) {
        obj.initialize();
      } else {
        obj.terminate();
      }
    }, obj);
  }, items2);
  const items3 = [stateFromStores];
  const effect2 = react.useEffect(() => {
    let obj = {
      equalityFn(arg0, arg1) {
        return arg0 === arg1;
      }
    };
    return UserSettingSearchStore.subscribe((isFocused) => {
      isFocused = isFocused.isFocused && isFocused.query.length > 0;
      return isFocused;
    }, (arg0) => {
      const tmp = arg0;
      if (tmp) {
        const obj = closure_1_1(closure_1_2[7]);
        const result = obj.maybeTrackQueryEntered();
      }
    }, obj);
  }, items3);
}
