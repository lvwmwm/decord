// Module ID: 18910
// Function ID: 18911
// Name: useSmartSearchRowViewability
// Dependencies: [19, 2122, 5321, 14129, 1500, 5324, 14041, 14039, 504, 1092, 2]
// Exports: useSmartSearchRowViewability

// Module 18910 (useSmartSearchRowViewability)
import useChatLayoutDefault from "useChatLayout" /* 5324 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 14039 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 14041 */;
import react from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 2122 */;
import size from "module_2" /* 2 */;

let state;

let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSmartSearchRowViewability.tsx");

export function useSmartSearchRowViewability() {
  let stateFromStores;
  let obj = stateFromStores(5321);
  const currentNavigationRouteName = obj.useCurrentNavigationRouteName();
  const context = react.useContext(stateFromStores(14129).SwipeForMemberListContext);
  const obj3 = stateFromStores(1500);
  const isFocused = obj3.useIsFocused();
  let isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  const obj4 = stateFromStores(5321);
  let tmp6 = null != obj4.coerceChannelRoute({ name: currentNavigationRouteName });
  if (!tmp6) {
    if (isChatLockedOpen) {
      const obj5 = { name: currentNavigationRouteName };
      const tmpResult = stateFromStores(5321);
      isChatLockedOpen = null != tmpResult.coerceGuildsRoute(obj5);
    }
    tmp6 = isChatLockedOpen;
  }
  let tmp7 = isFocused;
  if (null != context) {
    tmp7 = context.isPanelActive && tmp6;
  }
  let closure_0 = tmp7;
  const items = [tmp7];
  const effect = obj2.useEffect(() => {
    const obj = SmartSearchAnalyticsManagerDefault;
    const result = obj.setIsNavigationFocused(closure_0, SearchSessionAnalyticsManagerDefault);
  }, items);
  const items1 = [AppStateStore];
  const tmpResult2 = stateFromStores(504);
  stateFromStores = tmpResult2.useStateFromStores(items1, () => {
    state = state.getState();
    return state === stateFromStores(dependencyMap[9]).AppStates.ACTIVE;
  });
  const items2 = [stateFromStores];
  const effect1 = obj2.useEffect(() => {
    const obj = SmartSearchAnalyticsManagerDefault;
    obj.setIsAppActive(stateFromStores, SearchSessionAnalyticsManagerDefault);
  }, items2);
  const effect2 = obj2.useEffect(() => () => {
    const obj = closure_1_1(closure_1_2[6]);
    obj.setIsRowViewable(false, closure_1_1(closure_1_2[7]));
  }, []);
}
