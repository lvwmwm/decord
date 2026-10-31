// Module ID: 18403
// Function ID: 18404
// Name: useChannelUnreadBadgeState
// Dependencies: [7711, 6842, 6775, 504, 6885, 2]
// Exports: useBaseChannelUnreadBadgeState, useChannelUnreadBadgeState

// Module 18403 (useChannelUnreadBadgeState)
import NewChannelsStore from "NewChannelsStore" /* 7711 */;
import ReadStateStore from "ReadStateStore" /* 6842 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6775 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/launchpad/native/shared/useChannelUnreadBadgeState.tsx");

export function useChannelUnreadBadgeState(channel, flag) {
  let isMentionLowImportance;
  let items3;
  let mentionCount;
  let obj5;
  let optInEnabledForGuild;
  let unread;
  _require = channel;
  let closure_1 = flag;
  let obj = require("get initialized");
  const items = [ReadStateStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { ackMessageId: ReadStateStore.ackMessageId(id.id), unread: !closure_1 && ReadStateStore.hasUnread(id.id), mentionCount: ReadStateStore.getMentionCount(id.id), isMentionLowImportance: ReadStateStore.getIsMentionLowImportance(id.id) };
    !closure_1 && ReadStateStore.hasUnread(id.id);
    return obj;
  });
  ({ unread, mentionCount, isMentionLowImportance } = stateFromStoresObject);
  const items1 = [NewChannelsStore];
  const items2 = [, ];
  ({ guild_id: arr3[0], id: arr3[1] } = channel);
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items1, () => NewChannelsStore.shouldIndicateNewChannel(channel.guild_id, channel.id), items2);
  const obj4 = { unread, resolvedUnreadSetting: obj5.useStateFromStores(items3, () => UserGuildSettingsStore.resolveUnreadSetting(channel)), newChannel: stateFromStores, optInEnabled: optInEnabledForGuild, mentionCount, isMentionLowImportance };
  const obj3 = require("isOptInEnabled");
  optInEnabledForGuild = obj3.useOptInEnabledForGuild(channel.guild_id);
  items3 = [UserGuildSettingsStore];
  obj5 = require("get initialized");
  return obj4;
}
export function useBaseChannelUnreadBadgeState(channel, muted) {
  _require = channel;
  dependencyMap = muted;
  const items = [ReadStateStore];
  const obj = require("get initialized");
  return obj.useStateFromStoresObject(items, () => {
    const obj = { ackMessageId: ReadStateStore.ackMessageId(id.id), unread: !closure_1 && ReadStateStore.hasUnread(id.id), mentionCount: ReadStateStore.getMentionCount(id.id), isMentionLowImportance: ReadStateStore.getIsMentionLowImportance(id.id) };
    !closure_1 && ReadStateStore.hasUnread(id.id);
    return obj;
  });
}
