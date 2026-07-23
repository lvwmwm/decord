// Module ID: 7016
// Function ID: 56296
// Name: collectThreadMetadata
// Dependencies: [7012, 5683, 1352, 3758, 653, 1198, 21, 2]
// Exports: collectThreadMetadata

// Module 7016 (collectThreadMetadata)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { THREAD_CHANNEL_TYPES } from "_callSuper";
import closure_6 from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
const result = require("_callSuper").fileFinishedImporting("modules/app_analytics/ThreadAnalyticsUtils.tsx");

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
        lastRouteChangeSource = require(1198) /* shouldNavigate */.getLastRouteChangeSource();
        const obj2 = require(1198) /* shouldNavigate */;
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
      obj.thread_approximate_creation_date = importDefault(21).extractTimestamp(channel.id);
      obj.can_send_message = closure_6.can(Permissions.SEND_MESSAGES, channel);
      obj.parent_channel_type = channel.parentChannelThreadType;
      tmp = obj;
      const obj3 = importDefault(21);
    }
  }
  return tmp;
};
