// Module ID: 14789
// Function ID: 111464
// Name: useMessagesData
// Dependencies: []
// Exports: default

// Module 14789 (useMessagesData)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const obj = { HappeningNow: 0, [0]: "HappeningNow", EmptyState: 1, [1]: "EmptyState" };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesData.tsx");

export default function useMessagesData() {
  let obj = arg1(dependencyMap[6]);
  const items = [closure_6, closure_5];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ connected: null != numFriendSuggestions.getSessionId(), connectedToGateway: friendSuggestions.isConnected() }));
  const connected = stateFromStoresObject.connected;
  const arg1 = connected;
  const connectedToGateway = stateFromStoresObject.connectedToGateway;
  const importDefault = connectedToGateway;
  const items1 = [closure_8];
  const tmp2 = callback(arg1(dependencyMap[6]).useStateFromStoresArray(items1, () => stateFromStores.getSortedChannels()), 2);
  const first = tmp2[0];
  const dependencyMap = first;
  const callback = tmp4;
  obj = { location: "Messages Tab" };
  let tmp6 = connected;
  const obj2 = arg1(dependencyMap[6]);
  if (connected) {
    tmp6 = connectedToGateway;
  }
  obj.isConnected = tmp6;
  const tmp5Result = importDefault(dependencyMap[7])(obj);
  const setAdded = tmp5Result.setAdded;
  const React = setAdded;
  const friendSuggestions = tmp5Result.friendSuggestions;
  closure_5 = friendSuggestions;
  const numFriendSuggestions = tmp5Result.numFriendSuggestions;
  closure_6 = numFriendSuggestions;
  const HappeningNowCardsDisabled = arg1(dependencyMap[8]).HappeningNowCardsDisabled;
  const setting = HappeningNowCardsDisabled.useSetting();
  let closure_7 = setting;
  const tmp5 = importDefault(dependencyMap[7]);
  const items2 = [closure_7];
  const stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items2, () => setting.getFriendCount());
  closure_8 = stateFromStores;
  let closure_9 = React.useRef(-1);
  const items3 = [connected, connectedToGateway, first, tmp2[1], numFriendSuggestions, friendSuggestions, setting, stateFromStores, setAdded];
  return React.useMemo(() => {
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
