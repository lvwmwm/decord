// Module ID: 18779
// Function ID: 18780
// Name: useSmartSearchRowViewability
// Dependencies: [19, 2118, 5089, 13305, 1501, 5092, 13221, 13219, 504, 1091, 2]
// Exports: useSmartSearchRowViewability

// Module 18779 (useSmartSearchRowViewability)
import useChatLayoutDefault from "useChatLayout" /* 5092 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 13219 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 13221 */;
import react from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 2118 */;
import size from "module_2" /* 2 */;

let state;

let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSmartSearchRowViewability.tsx");

export function useSmartSearchRowViewability() {
  let stateFromStores;
  let obj = stateFromStores(5089);
  const currentNavigationRouteName = obj.useCurrentNavigationRouteName();
  const context = react.useContext(stateFromStores(13305).SwipeForMemberListContext);
  const obj3 = stateFromStores(1501);
  const isFocused = obj3.useIsFocused();
  let isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  const obj4 = stateFromStores(5089);
  let tmp6 = null != obj4.coerceChannelRoute({ name: currentNavigationRouteName });
  if (!tmp6) {
    if (isChatLockedOpen) {
      const obj5 = { name: currentNavigationRouteName };
      const tmpResult = stateFromStores(5089);
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
