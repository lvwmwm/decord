// Module ID: 18877
// Function ID: 18878
// Name: WaterwheelsDiscoverPanel
// Dependencies: [5, 19, 17, 1246, 502, 1385, 21, 5243, 575, 17590, 18878, 18881, 18886, 18889, 18891, 7822, 1113, 2553, 10147, 504, 18892, 18646, 18894, 2]
// Exports: default

// Module 18877 (WaterwheelsDiscoverPanel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import WaterwheelsDiscoverCardDefault from "WaterwheelsDiscoverCard" /* 18889 */;
import WaterwheelsDiscoverNavigation from "WaterwheelsDiscoverNavigation" /* 18892 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let closure_4, closure_5, currentUser, disposeResult;

let c10;
let c9;
let obj2;
let unpackModuleId;
function keyExtractor(key) {
  return key.key;
}
function getItemType(card) {
  return card.card.layout.type;
}
function RowSeparator() {
  const obj = { style: closure_13().separator };
  return React4(View, obj);
}
function WaterwheelsDiscoverFeed(enabled) {
  let FlashList;
  let entries;
  let intl;
  let items3;
  let loadId;
  let obj5;
  let obj6;
  let obj7;
  let retry;
  let snapshot;
  let status;
  let tmp13Result;
  let viewabilityConfigCallbackPairs;
  let visible;
  enabled = enabled.enabled;
  let youBarTotalHeight;
  let trackAction;
  let onAction;
  const tmp = closure_13();
  const tmp3 = trackAction;
  let obj = youBarTotalHeight(trackAction[9]);
  youBarTotalHeight = obj.useYouBarTotalHeight();
  const obj2 = youBarTotalHeight(trackAction[10]);
  const waterwheelsActions = obj2.useWaterwheelsActions();
  ({ snapshot, entries, status, retry } = waterwheelsActions(trackAction[11])(enabled));
  const tmp7 = waterwheelsActions(trackAction[11])(enabled);
  const tmp8 = waterwheelsActions(trackAction[12])(snapshot.loadId, entries);
  trackAction = tmp8.trackAction;
  ({ visible, viewabilityConfigCallbackPairs } = tmp8);
  let obj3 = youBarTotalHeight(trackAction[11]);
  const waterwheelsDiscoverInitialRequest = obj3.useWaterwheelsDiscoverInitialRequest(enabled, visible, snapshot);
  const useCallback = react.useCallback;
  let closure_0 = onAction((arg0, arg1, arg2) => {
    closure_0 = arg0;
    let onJoinSettled = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0, value, arg2) {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_0 = onJoinSettled;
              onJoinSettled = undefined;
              onJoinSettled = closure_2(closure_0, onJoinSettled, closure_2);
              c6 = 0;
            }
          } else if (1 === c7) {
            c6 = 0;
          } else if (2 === c7) {
            c6 = 0;
            const obj3 = onJoinSettled;
            const tmp9 = closure_5;
            if (onJoinSettled != null) {
              disposeResult = obj3.dispose();
            }
            throw tmp9;
          } else {
            if (3 === c7) {
              c6 = 2;
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              disposeResult = onJoinSettled;
              if (onJoinSettled != null) {
                disposeResult.dispose();
              }
              c8 = 3;
              return { value, done: true };
            } else {
              c6 = 2;
            }
            c6 = 0;
            disposeResult = onJoinSettled;
            if (onJoinSettled != null) {
              disposeResult.dispose();
            }
            c8 = 3;
            return { value: "HermesInternal", done: null };
          }
          c6 = 3;
          disposeResult = closure_0;
          onJoinSettled = undefined;
          const tmp13 = onJoinSettled;
          if (onJoinSettled != null) {
            onJoinSettled = onJoinSettled.onJoinSettled;
          }
          disposeResult = tmp13(disposeResult, onJoinSettled);
          c7 = 4;
          c8 = 1;
          return { value: disposeResult, done: false };
        } catch (tmp15) {
          closure_5 = tmp15;
          if (0 === c6) {
            c8 = 3;
            throw tmp15;
          } else if (1 === c6) {
            c7 = 1;
          } else if (2 === c6) {
            c7 = 2;
          } else {
            c7 = 3;
          }
        }
      }
    })();
  });
  const items = [waterwheelsActions, trackAction];
  onAction = useCallback(function() {
    return closure_0(...arguments);
  }, items);
  const items1 = [onAction];
  const items2 = [youBarTotalHeight];
  const callback1 = react.useCallback((entry) => {
    const obj = { entry: entry.item, onAction };
    return React4(WaterwheelsDiscoverCardDefault, obj);
  }, items1);
  const memo = react.useMemo(() => {
    const obj = { contentContainer: obj2, scrollIndicator: { bottom: youBarTotalHeight } };
    return obj;
  }, items2);
  let tmp13 = closure_9;
  const tmp14 = View;
  if ("cards" !== status) {
    const obj4 = { style: items3, children: tmp13(waterwheelsActions(tmp3[14]), obj5) };
    items3 = [tmp.feed, memo.contentContainer];
    obj5 = { status, onRetry: retry };
    obj6 = obj4;
  } else {
    obj6 = { style: tmp.feed, children: tmp13(FlashList, obj7, loadId) };
    obj7 = { data: entries, renderItem: callback1, keyExtractor, getItemType, ItemSeparatorComponent: RowSeparator, ListHeaderComponent: tmp13Result, contentContainerStyle: null, scrollIndicatorInsets: null, viewabilityConfigCallbackPairs, accessibilityLabel: intl.string(waterwheelsActions(tmp3[17])["EZRv/H"]) };
    tmp13Result = undefined;
    FlashList = tmp2(tmp3[15]).FlashList;
    if ("error" === snapshot.status) {
      const obj13 = { onRetry: retry };
      tmp13Result = tmp13(tmp2(tmp3[14]).WaterwheelsDiscoverRefreshError, obj13);
    }
    ({ contentContainer: obj8.contentContainerStyle, scrollIndicator: obj8.scrollIndicatorInsets } = memo);
    intl = tmp2(tmp3[16]).intl;
    loadId = snapshot.loadId;
    if (loadId == null) {
      loadId = WaterwheelsDiscoverPanel_str;
    }
  }
  return tmp13(tmp14, obj6);
}
const View = react_native.View;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
const WaterwheelsDiscoverPanel_str = "WaterwheelsDiscoverPanel";
let obj = { feed: obj2, separator: { height: 1 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_13 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/waterwheels/discover/native/WaterwheelsDiscoverPanel.tsx");

export default function WaterwheelsDiscoverPanel(style) {
  let id;
  let items2;
  let tmp8;
  let waterwheelsDiscoverEnabled;
  style = style.style;
  let tmp = dependencyMap;
  let obj = waterwheelsDiscoverEnabled(10147);
  waterwheelsDiscoverEnabled = obj.useWaterwheelsDiscoverEnabled(WaterwheelsDiscoverPanel_str);
  const items = [AuthenticationStore, UserStore, ApexExperimentStore];
  const obj2 = waterwheelsDiscoverEnabled(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let hasLoadedResult;
    currentUser = currentUser.getCurrentUser();
    const obj = { userId: id.getId(), gateReady: hasLoadedResult };
    hasLoadedResult = null != currentUser && ApexExperimentStore.hasLoaded(currentUser.id);
    return obj;
  });
  const gateReady = stateFromStoresObject.gateReady;
  const items1 = [waterwheelsDiscoverEnabled, gateReady];
  const userId = stateFromStoresObject.userId;
  const effect = react.useEffect(() => {
    const tmp = gateReady && !waterwheelsDiscoverEnabled;
    if (tmp) {
      const obj = WaterwheelsDiscoverNavigation;
      const result = obj.leaveWaterwheelsDiscover();
    }
  }, items1);
  const obj3 = { style, children: tmp8 };
  tmp8 = null;
  const tmp6 = gateReady;
  const tmp7 = gateReady(18646);
  if (waterwheelsDiscoverEnabled) {
    const obj4 = { children: items2 };
    items2 = [closure_9(tmp6(18894), {}), ];
    const obj5 = { enabled: waterwheelsDiscoverEnabled };
    items2[1] = closure_9(WaterwheelsDiscoverFeed, obj5, userId);
    tmp8 = closure_11(closure_10, obj4);
  }
  return closure_9(tmp7, obj3);
};
