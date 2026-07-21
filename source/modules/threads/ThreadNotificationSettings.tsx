// Module ID: 10215
// Function ID: 78922
// Name: computeThreadNotificationSetting
// Dependencies: []
// Exports: useThreadNotificationSetting

// Module 10215 (computeThreadNotificationSetting)
function computeThreadNotificationSetting(channel) {
  let obj = arg1;
  let obj2 = arg2;
  let obj3 = arg3;
  if (arg1 === undefined) {
    obj = closure_4;
  }
  if (obj2 === undefined) {
    obj2 = closure_3;
  }
  if (obj3 === undefined) {
    obj3 = closure_2;
  }
  const flagsResult = obj.flags(channel.id);
  if (null == flagsResult) {
    return ThreadMemberFlags.NO_MESSAGES;
  } else {
    if (obj6.hasFlag(flagsResult, ThreadMemberFlags.ALL_MESSAGES)) {
      return ThreadMemberFlags.ALL_MESSAGES;
    } else {
      if (obj4.hasFlag(flagsResult, ThreadMemberFlags.ONLY_MENTIONS)) {
        return ThreadMemberFlags.ONLY_MENTIONS;
      } else {
        if (obj5.hasFlag(flagsResult, ThreadMemberFlags.NO_MESSAGES)) {
          return ThreadMemberFlags.NO_MESSAGES;
        } else {
          channel = obj3.getChannel(channel.parent_id);
          if (null == channel) {
            return ThreadMemberFlags.NO_MESSAGES;
          } else if (obj2.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id)) {
            return ThreadMemberFlags.NO_MESSAGES;
          } else {
            const result = obj2.resolvedMessageNotifications(channel);
            if (result === UserNotificationSettings.NO_MESSAGES) {
              let ALL_MESSAGES = ThreadMemberFlags.NO_MESSAGES;
            } else if (result === UserNotificationSettings.ONLY_MENTIONS) {
              ALL_MESSAGES = ThreadMemberFlags.ONLY_MENTIONS;
            } else {
              ALL_MESSAGES = ThreadMemberFlags.ALL_MESSAGES;
            }
            return ALL_MESSAGES;
          }
        }
        const obj5 = arg1(dependencyMap[5]);
      }
      const obj4 = arg1(dependencyMap[5]);
    }
    const obj6 = arg1(dependencyMap[5]);
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const ThreadMemberFlags = arg1(dependencyMap[3]).ThreadMemberFlags;
const UserNotificationSettings = arg1(dependencyMap[4]).UserNotificationSettings;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/threads/ThreadNotificationSettings.tsx");

export { computeThreadNotificationSetting };
export const useThreadNotificationSetting = function useThreadNotificationSetting(channel) {
  const arg1 = channel;
  const items = [closure_4, closure_3, closure_2];
  const items1 = [channel];
  return arg1(dependencyMap[6]).useStateFromStores(items, () => callback(arg0), items1);
};
