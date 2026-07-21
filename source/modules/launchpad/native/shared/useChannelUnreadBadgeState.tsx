// Module ID: 14745
// Function ID: 111170
// Name: useBaseChannelUnreadBadgeState
// Dependencies: []
// Exports: useChannelUnreadBadgeState

// Module 14745 (useBaseChannelUnreadBadgeState)
function useBaseChannelUnreadBadgeState(channel, muted) {
  muted = channel;
  const dependencyMap = muted;
  const items = [closure_3];
  return muted(dependencyMap[3]).useStateFromStoresObject(items, () => {
    const obj = { ackMessageId: store.ackMessageId(arg0.id) };
    let hasUnreadResult = !arg1;
    if (hasUnreadResult) {
      hasUnreadResult = store.hasUnread(arg0.id);
    }
    obj.unread = hasUnreadResult;
    obj.mentionCount = store.getMentionCount(arg0.id);
    obj.isMentionLowImportance = store.getIsMentionLowImportance(arg0.id);
    return obj;
  });
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/launchpad/native/shared/useChannelUnreadBadgeState.tsx");

export const useChannelUnreadBadgeState = function useChannelUnreadBadgeState(channel, flag) {
  let isMentionLowImportance;
  let mentionCount;
  let unread;
  flag = channel;
  ({ unread, mentionCount, isMentionLowImportance } = useBaseChannelUnreadBadgeState(channel, flag));
  let obj = flag(dependencyMap[3]);
  const items = [closure_2];
  const items1 = [, ];
  ({ guild_id: arr2[0], id: arr2[1] } = channel);
  const stateFromStores = obj.useStateFromStores(items, (self) => closure_2.shouldIndicateNewChannel(self.guild_id, self.id), items1);
  const tmp = useBaseChannelUnreadBadgeState(channel, flag);
  obj = { unread };
  const optInEnabledForGuild = flag(dependencyMap[4]).useOptInEnabledForGuild(channel.guild_id);
  const obj2 = flag(dependencyMap[4]);
  const items2 = [closure_4];
  obj.resolvedUnreadSetting = flag(dependencyMap[3]).useStateFromStores(items2, () => closure_4.resolveUnreadSetting(arg0));
  obj.newChannel = stateFromStores;
  obj.optInEnabled = optInEnabledForGuild;
  obj.mentionCount = mentionCount;
  obj.isMentionLowImportance = isMentionLowImportance;
  return obj;
};
export { useBaseChannelUnreadBadgeState };
