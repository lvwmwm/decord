// Module ID: 11184
// Function ID: 11185
// Name: InAppNotificationUtils
// Dependencies: [19, 11185, 1072, 12, 1266, 1357, 1089, 5806, 5921, 2]
// Exports: extractMetadataFromNotification, generateInAppNotificationId, getMessagePreviewTextVariant, getNotificationDuration, isReactionMilestoneNotification, trackDismissed, useHasPreviewableMedia

// Module 11184 (InAppNotificationUtils)
import _mod12 from "module_12" /* 12 */;
import DurationsDefault from "Durations" /* 1089 */;
import v1 from "v1" /* 1266 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import isForwardMessageDefault from "isForwardMessage" /* 5806 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5921 */;
import InAppNotificationConstants from "InAppNotificationConstants" /* 11185 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let count_details;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const REACTION_MILESTONE_COUNTS = InAppNotificationConstants.REACTION_MILESTONE_COUNTS;
({ AnalyticEvents: hasOwnProperty, ChannelTypes: metroRequire, InAppNotificationTypes: metroImportDefault, MessageEmbedTypes: metroImportAll, MessageFlags: c9 } = Constants);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/InAppNotificationUtils.tsx");

export function isReactionMilestoneNotification(reactions, type) {
  if (null != type) {
    if (type !== metroRequire.GUILD_ANNOUNCEMENT) {
      const obj = _mod12;
      return REACTION_MILESTONE_COUNTS.has(obj.sumBy(reactions, (count_details) => {
        count_details = count_details.count_details;
        let num;
        if (count_details != null) {
          num = count_details.burst;
        }
        if (num == null) {
          num = 0;
        }
        let num2;
        if (count_details != null) {
          num2 = count_details.normal;
        }
        if (num2 == null) {
          num2 = 0;
        }
        return num + num2;
      }));
    }
  }
  return false;
}
export function generateInAppNotificationId() {
  const obj = v1;
  return obj.v4();
}
export function getMessagePreviewTextVariant() {
  let str = "body-md/medium";
  const obj = utils_PlatformUtils;
  if (obj.isIOS()) {
    str = "body-md/normal";
  }
  return str;
}
export function getNotificationDuration(ALERT) {
  if (metroImportDefault.MESSAGE !== ALERT) {
    if (metroImportDefault.MESSAGE_FAILED_TO_SEND !== ALERT) {
      if (metroImportDefault.FORUM_THREAD_CREATED !== ALERT) {
        if (metroImportDefault.BUG_REPORTER !== ALERT) {
          if (metroImportDefault.REACTION !== ALERT) {
            if (metroImportDefault.MESSAGE_REQUEST !== ALERT) {
              if (metroImportDefault.ALERT === ALERT) {
                return 30 * DurationsDefault.Millis.SECOND;
              } else {
                if (metroImportDefault.MESSAGE_REMINDER !== ALERT) {
                  if (metroImportDefault.RESTRICTED_HOURS_WARNING !== ALERT) {
                    if (metroImportDefault.STAGE_SPEAK_INVITE === ALERT) {
                      return 15 * DurationsDefault.Millis.SECOND;
                    } else if (metroImportDefault.RESTRICTED_SCHEDULE_UPDATED === ALERT) {
                      return 7 * DurationsDefault.Millis.SECOND;
                    }
                  }
                }
                return 10 * DurationsDefault.Millis.SECOND;
              }
            }
          }
        }
      }
    }
  }
  return 5 * DurationsDefault.Millis.SECOND;
}
export function useHasPreviewableMedia(message) {
  const items = [message];
  return react.useMemo(() => {
    const f100416 = (type) => type.type === constants.GIFV;
    let hasFlagResult = message.hasFlag(constants.IS_VOICE_MESSAGE);
    if (!hasFlagResult) {
      hasFlagResult = tmp.attachments.length > 0;
    }
    if (!hasFlagResult) {
      let everyResult = tmp.embeds.length > 0;
      if (everyResult) {
        let embeds = tmp.embeds;
        everyResult = embeds.every(f100416);
      }
      hasFlagResult = everyResult;
    }
    if (!hasFlagResult) {
      hasFlagResult = tmp.stickerItems.length > 0;
    }
    if (!hasFlagResult) {
      let someResult = isForwardMessageDefault(tmp);
      if (someResult) {
        const messageSnapshots = tmp.messageSnapshots;
        someResult = messageSnapshots.some((message) => {
          message = message.message;
          let hasFlagResult = message.hasFlag(constants.IS_VOICE_MESSAGE) || message.attachments.length > 0;
          if (!hasFlagResult) {
            let everyResult = message.embeds.length > 0;
            if (everyResult) {
              const embeds = message.embeds;
              everyResult = embeds.every(f100416);
            }
            hasFlagResult = everyResult;
          }
          if (!hasFlagResult) {
            hasFlagResult = message.stickerItems.length > 0;
          }
          return hasFlagResult;
        });
      }
      hasFlagResult = someResult;
    }
    return hasFlagResult;
  }, items);
}
export function extractMetadataFromNotification(notification) {
  let id6;
  const type = notification.type;
  if (metroImportDefault.MESSAGE !== type) {
    let channelId;
    let tmp4;
    let tmp2;
    if (metroImportDefault.REACTION !== type) {
      if (metroImportDefault.ALERT !== type) {
        if (metroImportDefault.STAGE_SPEAK_INVITE !== type) {
          if (metroImportDefault.FORUM_THREAD_CREATED === type) {
            const thread = notification.thread;
            let guild_id;
            if (thread != null) {
              guild_id = thread.guild_id;
            }
            const thread2 = notification.thread;
            let id;
            if (thread2 != null) {
              id = thread2.id;
            }
            channelId = id;
            tmp4 = guild_id;
          } else if (metroImportDefault.MESSAGE_FAILED_TO_SEND === type) {
            channelId = notification.channelId;
          } else if (metroImportDefault.MESSAGE_REMINDER === type) {
            const channel9 = notification.channel;
            let guild_id1;
            if (channel9 != null) {
              guild_id1 = channel9.guild_id;
            }
            const channel = notification.channel;
            let id1;
            if (channel != null) {
              id1 = channel.id;
            }
            const channel2 = notification.channel;
            let type1;
            if (channel2 != null) {
              type1 = channel2.type;
            }
            tmp2 = type1;
            channelId = id1;
            tmp4 = guild_id1;
          }
        }
      }
      const guild = notification.guild;
      let id2;
      if (guild != null) {
        id2 = guild.id;
      }
      if (id2 == null) {
        const channel3 = notification.channel;
        let guild_id2;
        if (channel3 != null) {
          guild_id2 = channel3.guild_id;
        }
        id2 = guild_id2;
      }
      const channel4 = notification.channel;
      let id3;
      if (channel4 != null) {
        id3 = channel4.id;
      }
      const channel5 = notification.channel;
      let type2;
      if (channel5 != null) {
        type2 = channel5.type;
      }
      tmp2 = type2;
      channelId = id3;
      tmp4 = id2;
    }
    return { guildId: tmp4, channelId, messageId: id6, channelType: tmp2 };
  }
  const guild2 = notification.guild;
  let id4;
  if (guild2 != null) {
    id4 = guild2.id;
  }
  if (id4 == null) {
    const channel6 = notification.channel;
    let guild_id3;
    if (channel6 != null) {
      guild_id3 = channel6.guild_id;
    }
    id4 = guild_id3;
  }
  const channel7 = notification.channel;
  let id5;
  if (channel7 != null) {
    id5 = channel7.id;
  }
  const message = notification.message;
  id6 = undefined;
  if (message != null) {
    id6 = message.id;
  }
  const channel8 = notification.channel;
  let type3;
  if (channel8 != null) {
    type3 = channel8.type;
  }
  tmp2 = type3;
  channelId = id5;
  tmp4 = id4;
}
export function trackDismissed(arg0) {
  let channelId;
  let dismissReason;
  let guildId;
  let inAppNotificationId;
  let messageId;
  let type;
  ({ guildId, channelId, type, dismissReason, inAppNotificationId, messageId } = arg0);
  const obj = AppAnalyticsUtilsDefault;
  obj.trackWithMetadata(hasOwnProperty.IN_APP_NOTIFICATION_DISMISSED, { type, guild_id: guildId, channel_id: channelId, dismiss_reason: dismissReason, in_app_notification_id: inAppNotificationId, message_id: messageId });
}
