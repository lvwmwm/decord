// Module ID: 7639
// Function ID: 7640
// Name: useCanRing
// Dependencies: [502, 6707, 4992, 5085, 1072, 504, 2]
// Exports: canRingUsersInChannel, useCanRing

// Module 7639 (useCanRing)
import Constants from "Constants" /* 1072 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 6707 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import RelationshipStore from "RelationshipStore" /* 5085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const ChannelTypesSets = Constants.ChannelTypesSets;
const result = size.fileFinishedImporting("modules/calls/useCanRing.tsx");

export function useCanRing(user, selectedVoiceChannelId) {
  _require = user;
  dependencyMap = selectedVoiceChannelId;
  const items = [ChannelStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(selectedVoiceChannelId));
  const items1 = [AuthenticationStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => AuthenticationStore.getId() === user.id);
  const items2 = [RelationshipStore];
  const obj3 = require("get initialized");
  let stateFromStores2 = obj3.useStateFromStores(items2, () => RelationshipStore.isFriend(user.id));
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  let hasItem = null != type;
  if (hasItem) {
    const CALLABLE = ChannelTypesSets.CALLABLE;
    hasItem = CALLABLE.has(type);
  }
  if (stateFromStores2) {
    stateFromStores2 = !stateFromStores1;
  }
  if (stateFromStores2) {
    stateFromStores2 = !user.bot;
  }
  if (stateFromStores2) {
    stateFromStores2 = !user.system;
  }
  if (stateFromStores2) {
    stateFromStores2 = !user.isProvisional;
  }
  if (stateFromStores2) {
    stateFromStores2 = hasItem;
  }
  return stateFromStores2;
}
export function canRingUsersInChannel(channel) {
  const CALLABLE = ChannelTypesSets.CALLABLE;
  if (CALLABLE.has(channel.type)) {
    const call = CallStore.getCall(channel.id);
    const tmp3 = null != call && null != call.messageId && !CallStore.isCallUnavailable(channel.id);
    return tmp3;
  } else {
    return false;
  }
}
