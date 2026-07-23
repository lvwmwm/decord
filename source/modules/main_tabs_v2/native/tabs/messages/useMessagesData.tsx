// Module ID: 14913
// Function ID: 113675
// Name: useMessagesData
// Dependencies: [57, 31, 4808, 1194, 3767, 5603, 566, 14914, 3803, 2]
// Exports: default

// Module 14913 (useMessagesData)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";

const require = arg1;
let obj = { HappeningNow: 0, [0]: "HappeningNow", EmptyState: 1, [1]: "EmptyState" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesData.tsx");

export default function useMessagesData() {
  let obj = connected(first[6]);
  let items = [numFriendSuggestions, friendSuggestions];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ connected: null != numFriendSuggestions.getSessionId(), connectedToGateway: friendSuggestions.isConnected() }));
  connected = stateFromStoresObject.connected;
  const connectedToGateway = stateFromStoresObject.connectedToGateway;
  const items1 = [stateFromStores];
  const tmp2 = callback(connected(first[6]).useStateFromStoresArray(items1, () => stateFromStores.getSortedChannels()), 2);
  first = tmp2[0];
  callback = tmp4;
  obj = { location: "Messages Tab" };
  let tmp6 = connected;
  const obj2 = connected(first[6]);
  if (connected) {
    tmp6 = connectedToGateway;
  }
  obj.isConnected = tmp6;
  const tmp5Result = connectedToGateway(first[7])(obj);
  const setAdded = tmp5Result.setAdded;
  friendSuggestions = tmp5Result.friendSuggestions;
  numFriendSuggestions = tmp5Result.numFriendSuggestions;
  const HappeningNowCardsDisabled = connected(first[8]).HappeningNowCardsDisabled;
  const setting = HappeningNowCardsDisabled.useSetting();
  const tmp5 = connectedToGateway(first[7]);
  const items2 = [setting];
  stateFromStores = connected(first[6]).useStateFromStores(items2, () => setting.getFriendCount());
  let closure_9 = setAdded.useRef(-1);
  const items3 = [connected, connectedToGateway, first, tmp2[1], numFriendSuggestions, friendSuggestions, setting, stateFromStores, setAdded];
  return setAdded.useMemo(() => {
    if (-1 === closure_9.current) {
      closure_9.current = 0;
    } else {
      let tmp = connected;
      if (connected) {
        tmp = connectedToGateway;
      }
      if (tmp) {
        closure_9.current = closure_9.current + 1;
      }
    }
    if (numFriendSuggestions <= 0) {
      if (tmp4) {
        let num3 = 0;
      } else {
        num3 = 15;
      }
      let bound = num3;
    } else {
      const _Math = Math;
      bound = Math.min(numFriendSuggestions, 5);
    }
    const items = [];
    items.push(first.length);
    items.push(first.length + tmp4.length > 0.length);
    let num4 = 0;
    if (numFriendSuggestions > 0) {
      num4 = 1;
    }
    items.push(num4);
    let num5 = 0;
    if (numFriendSuggestions > 0) {
      num5 = 0;
      if (connected) {
        num5 = 0;
        if (connectedToGateway) {
          num5 = friendSuggestions.length;
        }
      }
    }
    items.push(num5);
    items.push(bound);
    if (first.length + tmp4.length > 0) {
      let HappeningNow = null;
      if (!setting) {
        HappeningNow = closure_9.HappeningNow;
      }
      let EmptyState = HappeningNow;
    } else {
      EmptyState = null;
      if (tmp5) {
        EmptyState = closure_9.EmptyState;
      }
    }
    const obj = { channels: first.length + tmp4.length > 0, channelFavorites: first };
    let combined = null;
    if (closure_9.current > 0) {
      const _HermesInternal = HermesInternal;
      combined = "" + closure_9.current;
    }
    obj.dataKey = combined;
    let tmp28 = !tmp4;
    if (first.length + tmp4.length <= 0) {
      tmp28 = connected;
    }
    if (tmp28) {
      tmp28 = !tmp5;
    }
    obj.showFullscreenEmptyState = tmp28;
    obj.setAddedFriendSuggestions = setAdded;
    obj.friendSuggestions = friendSuggestions;
    obj.renderHeader = EmptyState;
    let tmp29 = connected;
    if (connected) {
      tmp29 = stateFromStores < 4;
    }
    if (tmp29) {
      tmp29 = tmp4;
    }
    if (!tmp29) {
      tmp29 = tmp5;
    }
    obj.renderFooter = tmp29;
    obj.sections = items;
    return obj;
  }, items3);
};
export const MessagesDataSections = { FavoriteChannels: 0, [0]: "FavoriteChannels", Channels: 1, [1]: "Channels", Separator: 2, [2]: "Separator", SuggestedFriends: 3, [3]: "SuggestedFriends", Placeholders: 4, [4]: "Placeholders" };
export const MessagesDataHeader = obj;
