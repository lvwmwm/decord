// Module ID: 19001
// Function ID: 19002
// Name: WaterwheelsDiscoverPanel
// Dependencies: [5, 32, 19, 17, 1246, 502, 1388, 21, 5306, 575, 17703, 19002, 19005, 19011, 5552, 19014, 19019, 10225, 19021, 7888, 1113, 2569, 10215, 504, 19022, 18770, 19024, 2]
// Exports: default

// Module 19001 (WaterwheelsDiscoverPanel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import WaterwheelsCardTypes from "WaterwheelsCardTypes" /* 10225 */;
import WaterwheelsDiscoverCardDefault from "WaterwheelsDiscoverCard" /* 19019 */;
import WaterwheelsDiscoverNavigation from "WaterwheelsDiscoverNavigation" /* 19022 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1388 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let closure_2, closure_5, currentUser, dependencyMap, disposeResult, first, set, sum;

let c10;
let obj2;
let unpackModuleId;
function keyExtractor(key) {
  return key.key;
}
function getItemType(card) {
  return card.card.layout.type;
}
function RowSeparator() {
  const obj = { style: closure_14().separator };
  return authStore(View, obj);
}
function WaterwheelsDiscoverFeed(enabled) {
  let FlashList;
  let entries;
  let intl;
  let items4;
  let loadId;
  let obj5;
  let obj6;
  let obj7;
  let retry;
  let snapshot;
  let status;
  let tmp17Result;
  let viewabilityConfigCallbackPairs;
  let visible;
  enabled = enabled.enabled;
  let youBarTotalHeight;
  dependencyMap = undefined;
  let trackAction;
  let callback1;
  let tmp = closure_14();
  const tmp2 = youBarTotalHeight;
  const tmp3 = dependencyMap;
  let obj = youBarTotalHeight(17703);
  youBarTotalHeight = obj.useYouBarTotalHeight();
  let tmp5 = trackAction(callback1.useState(() => {
    set = new Set();
    return set;
  }), 2);
  const extraData = tmp5[0];
  dependencyMap = tmp5[1];
  const callback = callback1.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let tmp = closure_2((items) => {
      set = new Set(items);
      const tmp = closure_1;
      if (tmp) {
        set.add(closure_0);
      } else {
        set.delete(closure_0);
      }
      return set;
    });
  }, []);
  let obj2 = youBarTotalHeight(19002);
  const waterwheelsActions = obj2.useWaterwheelsActions(callback);
  let tmp9 = extraData;
  ({ snapshot, entries, status, retry } = extraData(19005)(enabled));
  const tmp10 = extraData(19005)(enabled);
  const tmp11 = extraData(19011)(snapshot.loadId, entries);
  trackAction = tmp11.trackAction;
  ({ visible, viewabilityConfigCallbackPairs } = tmp11);
  let obj3 = youBarTotalHeight(19005);
  const waterwheelsDiscoverInitialRequest = obj3.useWaterwheelsDiscoverInitialRequest(enabled, visible, snapshot);
  const useCallback = callback1.useCallback;
  let closure_0 = waterwheelsActions((arg0, arg1, arg2) => {
    let closure_4;
    closure_0 = arg0;
    let onJoinSettled = arg1;
    closure_2 = arg2;
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
              closure_0 = onJoinSettled;
              onJoinSettled = undefined;
              onJoinSettled = tmp(closure_0, onJoinSettled, closure_2);
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
          const tmp13 = disposeResult;
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
  callback1 = useCallback(function() {
    return closure_0(...arguments);
  }, items);
  const items1 = [callback1, trackAction];
  const callback2 = callback1.useCallback((dependencyMap, guildId) => {
    let obj3;
    let obj4;
    let tmp6;
    let closure_0 = dependencyMap;
    try {
      let obj = { type: "guild_profile", guildId: guildId.guildId };
      trackAction(dependencyMap, obj, "identity");
    } catch (err) {
    }
    sum = sum + 1;
    const text = `WaterwheelsDiscoverProfile:${tmp3}`;
    first = text;
    const tmp5 = youBarTotalHeight(closure_2[14]);
    const showActionSheet = tmp5.showActionSheet;
    const obj2 = { key: text, content: closure_1_10(tmp6, obj3) };
    obj3 = { guildId: guildId.guildId, guildName: guildId.name, footerAction: closure_1_10(youBarTotalHeight(closure_2[16]).ServerActionButton, obj4) };
    obj4 = {
      server: guildId,
      variant: "primary",
      fullWidth: true,
      onAction: function handleSheetAction(type, arg1) {
        if (type.type === WaterwheelsCardTypes.WaterwheelsActionType.OPEN_GUILD) {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(first);
        }
        callback1(dependencyMap, type, arg1);
      }
    };
    tmp6 = first(closure_2[15]);
    showActionSheet(obj2);
  }, items1);
  const items2 = [callback1, callback2, extraData];
  const items3 = [youBarTotalHeight];
  const callback3 = callback1.useCallback((entry) => {
    const obj = { entry: entry.item, joiningGuildIds, onAction: callback1, onProfileOpen: callback2 };
    return authStore(WaterwheelsDiscoverCardDefault, obj);
  }, items2);
  const memo = callback1.useMemo(() => {
    const obj = { contentContainer: obj2, scrollIndicator: { bottom: youBarTotalHeight } };
    return obj;
  }, items3);
  const tmp18 = callback2;
  if ("cards" !== status) {
    let obj4 = { style: items4, children: tmp17(tmp9(19021), obj5) };
    items4 = [tmp.feed, memo.contentContainer];
    obj5 = { status, onRetry: retry, retryAfterAt: snapshot.retryAfterAt };
    obj6 = obj4;
  } else {
    obj6 = { style: tmp.feed, children: tmp17(FlashList, obj7, loadId) };
    obj7 = { data: entries, extraData, renderItem: callback3, keyExtractor, getItemType, ItemSeparatorComponent: RowSeparator, ListHeaderComponent: tmp17Result, contentContainerStyle: null, scrollIndicatorInsets: null, viewabilityConfigCallbackPairs, accessibilityLabel: intl.string(tmp9(2569)["EZRv/H"]) };
    tmp17Result = undefined;
    FlashList = tmp2(7888).FlashList;
    if ("error" === snapshot.status) {
      const obj13 = { onRetry: retry, retryAfterAt: snapshot.retryAfterAt };
      tmp17Result = tmp17(tmp2(19021).WaterwheelsDiscoverRefreshError, obj13);
    }
    ({ contentContainer: obj8.contentContainerStyle, scrollIndicator: obj8.scrollIndicatorInsets } = memo);
    intl = tmp2(1113).intl;
    loadId = snapshot.loadId;
    if (loadId == null) {
      loadId = WaterwheelsDiscoverPanel_str;
    }
  }
  return closure_10(tmp18, obj6);
}
const View = react_native.View;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const WaterwheelsDiscoverPanel_str = "WaterwheelsDiscoverPanel";
let c13 = 0;
let obj = { content: { flex: 1 }, feed: { flex: 1 }, separator: obj2 };
obj2 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_14 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/waterwheels/discover/native/WaterwheelsDiscoverPanel.tsx");

export default function WaterwheelsDiscoverPanel(style) {
  let id;
  let items2;
  let tmp9;
  let waterwheelsDiscoverEnabled;
  style = style.style;
  let tmp = closure_14();
  let obj = waterwheelsDiscoverEnabled(10215);
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
  const obj3 = { style, children: tmp9 };
  tmp9 = null;
  const tmp7 = gateReady;
  const tmp8 = gateReady(18770);
  if (waterwheelsDiscoverEnabled) {
    const obj4 = { style: tmp.content, children: items2 };
    items2 = [closure_10(tmp7(19024), {}), ];
    const obj5 = { enabled: waterwheelsDiscoverEnabled };
    items2[1] = closure_10(WaterwheelsDiscoverFeed, obj5, userId);
    tmp9 = closure_11(View, obj4);
  }
  return closure_10(tmp8, obj3);
};
