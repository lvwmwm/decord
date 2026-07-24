// Module ID: 14919
// Function ID: 113736
// Name: useBaseChannelUnreadBadgeState
// Dependencies: [6764, 4142, 4325, 566, 6767, 2]
// Exports: useChannelUnreadBadgeState

// Module 14919 (useBaseChannelUnreadBadgeState)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
function useBaseChannelUnreadBadgeState(channel, muted) {
  const _require = channel;
  const dependencyMap = muted;
  const items = [closure_3];
  return _require(566).useStateFromStoresObject(items, () => {
    const obj = { ackMessageId: outer1_3.ackMessageId(user.id) };
    let hasUnreadResult = !closure_1;
    if (hasUnreadResult) {
      hasUnreadResult = outer1_3.hasUnread(user.id);
    }
    obj.unread = hasUnreadResult;
    obj.mentionCount = outer1_3.getMentionCount(user.id);
    obj.isMentionLowImportance = outer1_3.getIsMentionLowImportance(user.id);
    return obj;
  });
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/launchpad/native/shared/useChannelUnreadBadgeState.tsx");

export const useChannelUnreadBadgeState = function useChannelUnreadBadgeState(channel, flag) {
  let isMentionLowImportance;
  let mentionCount;
  let unread;
  const _require = channel;
  ({ unread, mentionCount, isMentionLowImportance } = useBaseChannelUnreadBadgeState(channel, flag));
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = channel);
  const stateFromStores = obj.useStateFromStores(items, () => outer1_2.shouldIndicateNewChannel(channel.guild_id, channel.id), items1);
  const tmp = useBaseChannelUnreadBadgeState(channel, flag);
  obj = { unread };
  const optInEnabledForGuild = _require(6767).useOptInEnabledForGuild(channel.guild_id);
  const obj2 = _require(6767);
  const items2 = [closure_4];
  obj.resolvedUnreadSetting = _require(566).useStateFromStores(items2, () => outer1_4.resolveUnreadSetting(closure_0));
  obj.newChannel = stateFromStores;
  obj.optInEnabled = optInEnabledForGuild;
  obj.mentionCount = mentionCount;
  obj.isMentionLowImportance = isMentionLowImportance;
  return obj;
};
export { useBaseChannelUnreadBadgeState };
