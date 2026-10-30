// Module ID: 18703
// Function ID: 18704
// Name: useSmartSearchRowViewability
// Dependencies: [19, 1994, 5193, 13948, 1499, 5196, 13860, 13858, 504, 1093, 2]
// Exports: useSmartSearchRowViewability

// Module 18703 (useSmartSearchRowViewability)
import useChatLayoutDefault from "useChatLayout" /* 5196 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13858 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13860 */;
import react from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 1994 */;
import size from "module_2" /* 2 */;

let state;

let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSmartSearchRowViewability.tsx");

export function useSmartSearchRowViewability() {
  let stateFromStores;
  let obj = stateFromStores(5193);
  const currentNavigationRouteName = obj.useCurrentNavigationRouteName();
  const context = react.useContext(stateFromStores(13948).SwipeForMemberListContext);
  const obj3 = stateFromStores(1499);
  const isFocused = obj3.useIsFocused();
  let isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  const obj4 = stateFromStores(5193);
  let tmp6 = null != obj4.coerceChannelRoute({ name: currentNavigationRouteName });
  if (!tmp6) {
    if (isChatLockedOpen) {
      const obj5 = { name: currentNavigationRouteName };
      const tmpResult = stateFromStores(5193);
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
