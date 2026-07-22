// Module ID: 7011
// Function ID: 56262
// Name: collectThreadMetadata
// Dependencies: []
// Exports: collectThreadMetadata

// Module 7011 (collectThreadMetadata)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const THREAD_CHANNEL_TYPES = arg1(dependencyMap[2]).THREAD_CHANNEL_TYPES;
let closure_6 = importDefault(dependencyMap[3]);
const Permissions = arg1(dependencyMap[4]).Permissions;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/app_analytics/ThreadAnalyticsUtils.tsx");

export const collectThreadMetadata = function collectThreadMetadata(channel, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let tmp = null;
  if (null != channel) {
    tmp = null;
    if (THREAD_CHANNEL_TYPES.has(channel.type)) {
      const obj = {};
      let lastRouteChangeSource;
      if (flag) {
        lastRouteChangeSource = arg1(dependencyMap[5]).getLastRouteChangeSource();
        const obj2 = arg1(dependencyMap[5]);
      }
      obj.location = lastRouteChangeSource;
      obj.thread_approximate_member_count = memberCount.getMemberCount(channel.id);
      obj.thread_approximate_message_count = count.getCount(channel.id);
      const threadMetadata = channel.threadMetadata;
      let archived;
      if (null != threadMetadata) {
        archived = threadMetadata.archived;
      }
      obj.thread_archived = true === archived;
      const threadMetadata2 = channel.threadMetadata;
      let locked;
      if (null != threadMetadata2) {
        locked = threadMetadata2.locked;
      }
      obj.thread_locked = null != locked && locked;
      const threadMetadata3 = channel.threadMetadata;
      let autoArchiveDuration;
      if (null != threadMetadata3) {
        autoArchiveDuration = threadMetadata3.autoArchiveDuration;
      }
      let num2 = 0;
      if (null != autoArchiveDuration) {
        num2 = autoArchiveDuration;
      }
      obj.thread_auto_archive_duration_minutes = num2;
      obj.thread_approximate_creation_date = importDefault(dependencyMap[6]).extractTimestamp(channel.id);
      obj.can_send_message = closure_6.can(Permissions.SEND_MESSAGES, channel);
      obj.parent_channel_type = channel.parentChannelThreadType;
      tmp = obj;
      const obj3 = importDefault(dependencyMap[6]);
    }
  }
  return tmp;
};
