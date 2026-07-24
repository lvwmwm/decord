// Module ID: 10266
// Function ID: 79273
// Name: hasMedia
// Dependencies: [31, 10267, 653, 22, 491, 478, 5679, 4324, 2]
// Exports: generateInAppNotificationId, getMessagePreviewTextVariant, isReactionMilestoneNotification, trackDismissed, trackInAppNotificationAccessoryClicked, useHasPreviewableMedia

// Module 10266 (hasMedia)
import result from "result";
import { REACTION_MILESTONE_COUNTS } from "set";
import ME from "ME";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function hasMedia(hasFlag) {
  let hasFlagResult = hasFlag.hasFlag(constants4.IS_VOICE_MESSAGE);
  if (!hasFlagResult) {
    hasFlagResult = hasFlag.attachments.length > 0;
  }
  if (!hasFlagResult) {
    let everyResult = hasFlag.embeds.length > 0;
    if (everyResult) {
      const embeds = hasFlag.embeds;
      everyResult = embeds.every((type) => type.type === outer1_8.GIFV);
    }
    hasFlagResult = everyResult;
  }
  if (!hasFlagResult) {
    hasFlagResult = hasFlag.stickerItems.length > 0;
  }
  return hasFlagResult;
}
function extractMetadataFromNotification(notification) {
  let type = notification.type;
  if (constants3.MESSAGE !== type) {
    if (constants3.REACTION !== type) {
      if (constants3.ALERT === type) {
        const guild = notification.guild;
        let id;
        if (null != guild) {
          id = guild.id;
        }
        if (null == id) {
          const channel3 = notification.channel;
          let guild_id;
          if (null != channel3) {
            guild_id = channel3.guild_id;
          }
          id = guild_id;
        }
        const channel4 = notification.channel;
        let id1;
        if (null != channel4) {
          id1 = channel4.id;
        }
        const channel5 = notification.channel;
        type = undefined;
        if (null != channel5) {
          type = channel5.type;
        }
        let tmp4 = type;
        let tmp2 = id;
        let channelId = id1;
      } else if (constants3.FORUM_THREAD_CREATED === type) {
        const thread = notification.thread;
        let guild_id1;
        if (null != thread) {
          guild_id1 = thread.guild_id;
        }
        const thread2 = notification.thread;
        let id2;
        if (null != thread2) {
          id2 = thread2.id;
        }
        channelId = id2;
        tmp2 = guild_id1;
      } else if (constants3.MESSAGE_FAILED_TO_SEND === type) {
        channelId = notification.channelId;
      } else if (constants3.MESSAGE_REMINDER === type) {
        const channel9 = notification.channel;
        let guild_id2;
        if (null != channel9) {
          guild_id2 = channel9.guild_id;
        }
        const channel = notification.channel;
        let id3;
        if (null != channel) {
          id3 = channel.id;
        }
        const channel2 = notification.channel;
        let type1;
        if (null != channel2) {
          type1 = channel2.type;
        }
        tmp4 = type1;
        tmp2 = guild_id2;
        channelId = id3;
      }
    }
    const obj = { guildId: tmp2, channelId, messageId: id6, channelType: tmp4 };
    return obj;
  }
  const guild2 = notification.guild;
  let id4;
  if (null != guild2) {
    id4 = guild2.id;
  }
  if (null == id4) {
    const channel6 = notification.channel;
    let guild_id3;
    if (null != channel6) {
      guild_id3 = channel6.guild_id;
    }
    id4 = guild_id3;
  }
  const channel7 = notification.channel;
  let id5;
  if (null != channel7) {
    id5 = channel7.id;
  }
  const message = notification.message;
  id6 = undefined;
  if (null != message) {
    id6 = message.id;
  }
  const channel8 = notification.channel;
  let type2;
  if (null != channel8) {
    type2 = channel8.type;
  }
  tmp4 = type2;
  tmp2 = id4;
  channelId = id5;
}
({ AnalyticEvents: closure_5, ChannelTypes: closure_6, InAppNotificationTypes: closure_7, MessageEmbedTypes: closure_8, MessageFlags: closure_9 } = ME);
const result = require("ME").fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationUtils.tsx");

export const isReactionMilestoneNotification = function isReactionMilestoneNotification(reactions, type) {
  if (null != type) {
    if (type !== constants2.GUILD_ANNOUNCEMENT) {
      return REACTION_MILESTONE_COUNTS.has(require(22) /* apply */.sumBy(reactions, (count_details) => {
        count_details = count_details.count_details;
        let burst;
        if (null != count_details) {
          burst = count_details.burst;
        }
        let num = 0;
        if (null != burst) {
          num = burst;
        }
        let normal;
        if (null != count_details) {
          normal = count_details.normal;
        }
        let num2 = 0;
        if (null != normal) {
          num2 = normal;
        }
        return num + num2;
      }));
    }
  }
  return false;
};
export const generateInAppNotificationId = function generateInAppNotificationId() {
  return require(491) /* v1 */.v4();
};
export const getMessagePreviewTextVariant = function getMessagePreviewTextVariant() {
  let str = "text-md/medium";
  if (obj.isIOS()) {
    str = "text-md/normal";
  }
  return str;
};
export const useHasPreviewableMedia = function useHasPreviewableMedia(message) {
  let closure_0 = message;
  const items = [message];
  return React.useMemo(() => {
    let tmp = outer1_10(message);
    if (!tmp) {
      let someResult = outer1_1(outer1_2[6])(message);
      if (someResult) {
        const messageSnapshots = message.messageSnapshots;
        someResult = messageSnapshots.some((message) => outer2_10(message.message));
      }
      tmp = someResult;
    }
    return tmp;
  }, items);
};
export { extractMetadataFromNotification };
export const trackInAppNotificationAccessoryClicked = function trackInAppNotificationAccessoryClicked(notification, REACTION_BUTTON) {
  let channelId;
  let guildId;
  let messageId;
  ({ guildId, channelId, messageId } = extractMetadataFromNotification(notification));
  let obj = importDefault(4324);
  obj = { type: notification.type, in_app_notification_id: notification.inAppNotificationId, notif_guild_id: guildId, notif_channel_id: channelId, message_id: messageId, accessory: REACTION_BUTTON };
  obj.trackWithMetadata(constants.IN_APP_NOTIFICATION_ACCESSORY_CLICKED, obj);
};
export const trackDismissed = function trackDismissed(arg0) {
  let channelId;
  let dismissReason;
  let guildId;
  let inAppNotificationId;
  let messageId;
  let type;
  ({ guildId, channelId, type, dismissReason, inAppNotificationId, messageId } = arg0);
  importDefault(4324).trackWithMetadata(constants.IN_APP_NOTIFICATION_DISMISSED, { type, guild_id: guildId, channel_id: channelId, dismiss_reason: dismissReason, in_app_notification_id: inAppNotificationId, message_id: messageId });
};
