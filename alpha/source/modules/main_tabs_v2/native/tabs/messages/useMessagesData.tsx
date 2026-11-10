// Module ID: 18468
// Function ID: 18469
// Name: useMessagesData
// Dependencies: [32, 19, 6625, 502, 5084, 7462, 504, 18469, 4967, 2]
// Exports: default

// Module 18468 (useMessagesData)
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6625 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RelationshipStore from "RelationshipStore" /* 5084 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 7462 */;
import size from "module_2" /* 2 */;

let _slicedToArray = _slicedToArray_mod;
const MessagesDataHeader = { HappeningNow: 0, [0]: "HappeningNow", EmptyState: 1, [1]: "EmptyState" };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesData.tsx");

export default function useMessagesData() {
  let connected;
  let first;
  let friendSuggestions;
  let length;
  let numFriendSuggestions;
  let stateFromStores;
  let tmp6;
  const tmp = connected;
  const tmp2 = channelFavorites;
  let obj = connected(channelFavorites[6]);
  let items = [numFriendSuggestions, friendSuggestions];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { connected: null != numFriendSuggestions.getSessionId(), connectedToGateway: friendSuggestions.isConnected() };
    return obj;
  });
  connected = stateFromStoresObject.connected;
  const connectedToGateway = stateFromStoresObject.connectedToGateway;
  const items1 = [stateFromStores];
  const obj2 = connected(channelFavorites[6]);
  [first, tmp6] = obj2.useStateFromStoresArray(items1, () => stateFromStores.getSortedChannels());
  _slicedToArray = tmp6;
  let tmp8 = connected;
  const tmp7 = connectedToGateway(channelFavorites[7]);
  if (connected) {
    tmp8 = connectedToGateway;
  }
  const tmp7Result = tmp7({ location: "Messages Tab", isConnected: tmp8 });
  const setAdded = tmp7Result.setAdded;
  friendSuggestions = tmp7Result.friendSuggestions;
  numFriendSuggestions = tmp7Result.numFriendSuggestions;
  const HappeningNowCardsDisabled = tmp(tmp2[8]).HappeningNowCardsDisabled;
  const setting = HappeningNowCardsDisabled.useSetting();
  const items2 = [setting];
  const tmpResult = tmp(tmp2[6]);
  stateFromStores = tmpResult.useStateFromStores(items2, () => setting.getFriendCount());
  const items3 = [connected, connectedToGateway, channelFavorites, tmp6, numFriendSuggestions, friendSuggestions, setting, stateFromStores, setAdded];
  return setAdded.useMemo(() => {
    let EmptyState;
    let bound;
    let obj;
    if (numFriendSuggestions <= 0) {
      let num2;
      if (channelFavorites.length + length.length > 0) {
        num2 = 0;
      } else {
        num2 = 15;
      }
      bound = num2;
    } else {
      const _Math = Math;
      bound = Math.min(tmp2, 5);
    }
    const items = [];
    items.push(channelFavorites.length);
    items.push(length.length);
    let num3 = 0;
    const push = items.push;
    if (numFriendSuggestions > 0) {
      num3 = 1;
    }
    push(num3);
    let num4 = 0;
    const push2 = items.push;
    if (numFriendSuggestions > 0) {
      num4 = 0;
      if (connected) {
        num4 = 0;
        if (connectedToGateway) {
          num4 = friendSuggestions.length;
        }
      }
    }
    push2(num4);
    items.push(bound);
    if (channelFavorites.length + length.length > 0) {
      let HappeningNow = null;
      if (!setting) {
        HappeningNow = obj.HappeningNow;
      }
      EmptyState = HappeningNow;
    } else {
      EmptyState = null;
      if (numFriendSuggestions > 0) {
        EmptyState = obj.EmptyState;
      }
    }
    obj = { channels: length, channelFavorites, showFullscreenEmptyState: channelFavorites.length + length.length <= 0 && connected && numFriendSuggestions <= 0, setAddedFriendSuggestions: setAdded, friendSuggestions, renderHeader: EmptyState, renderFooter: tmp22, sections: items };
    return obj;
  }, items3);
};
export const MessagesDataSections = { FavoriteChannels: 0, [0]: "FavoriteChannels", Channels: 1, [1]: "Channels", Separator: 2, [2]: "Separator", SuggestedFriends: 3, [3]: "SuggestedFriends", Placeholders: 4, [4]: "Placeholders" };
export { MessagesDataHeader };
