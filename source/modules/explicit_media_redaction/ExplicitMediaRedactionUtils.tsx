// Module ID: 6835
// Function ID: 53993
// Name: timeoutAttachmentsAndEmbedsForMessage
// Dependencies: [4129, 1348, 5671, 6836, 653, 1282, 1212, 675, 5669, 6837, 6842, 6843, 3809, 4956, 4347, 5674, 2]
// Exports: handleExplicitMediaScanTimeoutForMessage, hasMessageSnapshotsWithAttachmentsOrEmbeds, isObscuredMediaBelowConstraints, isPendingScanVersion, redactionSettingToRenderedString, shouldAgeVerifyForExplicitMedia, trackExplicitMediaRedactableMessagedLoaded, trackExplicitMediaScanComplete, trackMediaRedactionAction, trackRedactableMessageLoaded, trackScanTiming, trackScanningTimedOut, trackToggleMediaObscurityV2, useShouldAgeVerifyForReason

// Module 6835 (timeoutAttachmentsAndEmbedsForMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import USER_SETTING_ACTION_SHEET_KEY from "USER_SETTING_ACTION_SHEET_KEY";
import { AnalyticEvents } from "ME";

let closure_6;
let closure_7;
const require = arg1;
function timeoutAttachmentsAndEmbedsForMessage(message) {
  let attachments;
  let embeds;
  ({ attachments, embeds } = message);
  return {
    attachments: attachments.map((arg0) => {
      arg0.content_scan_version = -1;
      return arg0;
    }),
    embeds: embeds.map((arg0) => {
      arg0.contentScanVersion = -1;
      return arg0;
    })
  };
}
function useShouldAgeVerifyForExplicitMedia() {
  let isFeatureAgeGated = require(3809) /* isFeatureAgeGated */.useIsFeatureAgeGated(require(4956) /* AgeGatedFeature */.AgeGatedFeature.SENSITIVE_CONTENT_SHOW_SETTING);
  const obj = require(3809) /* isFeatureAgeGated */;
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
}
({ EXPLICIT_MEDIA_MIN_HEIGHT: closure_6, EXPLICIT_MEDIA_MIN_WIDTH: closure_7 } = USER_SETTING_ACTION_SHEET_KEY);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaRedactionUtils.tsx");

export const redactionSettingToRenderedString = function redactionSettingToRenderedString(prop) {
  if (require(1282) /* _callSuper */.ExplicitContentRedaction.SHOW === prop) {
    return () => {
      const intl = outer1_0(outer1_2[6]).intl;
      return intl.string(outer1_0(outer1_2[6]).t["5k5OFp"]);
    };
  } else if (require(1282) /* _callSuper */.ExplicitContentRedaction.BLUR === prop) {
    return () => {
      const intl = outer1_0(outer1_2[6]).intl;
      return intl.string(outer1_0(outer1_2[6]).t.S49Uad);
    };
  } else if (require(1282) /* _callSuper */.ExplicitContentRedaction.BLOCK === prop) {
    return () => {
      const intl = outer1_0(outer1_2[6]).intl;
      return intl.string(outer1_0(outer1_2[6]).t["D/157Y"]);
    };
  }
};
export const isPendingScanVersion = function isPendingScanVersion(contentScanVersion) {
  let tmp = !_isNativeReflectConstruct.get("explicit_media_redaction_ignore_pending_scan");
  if (tmp) {
    let tmp2 = 0 !== contentScanVersion;
    if (tmp2) {
      tmp2 = -1 !== contentScanVersion;
    }
    if (tmp2) {
      let tmp4 = null == contentScanVersion;
      if (!tmp4) {
        tmp4 = contentScanVersion !== obj.validContentScanVersion;
      }
      tmp2 = tmp4;
    }
    tmp = tmp2;
  }
  return tmp;
};
export const TrackMediaRedactionActionType = { EXPLICIT_MEDIA_LEARN_MORE_VIEWED: "explicit_media_learn_more_viewed", EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS: "explicit_media_learn_more_click_settings", EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE: "explicit_media_learn_more_click_learn_more", EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS: "explicit_media_learn_more_click_dismiss", EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE: "explicit_media_learn_more_click_false_positive", EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY: "explicit_media_learn_more_click_age_verify_reverify", EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE: "explicit_media_learn_more_click_age_verify_learn_more", EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED: "explicit_media_false_positive_viewed", EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM: "explicit_media_false_positive_click_confirm", EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL: "explicit_media_false_positive_click_cancel", EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED: "explicit_media_sender_false_positive_button_clicked", EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT: "explicit_media_false_positive_clyde_message_sent" };
export const TrackMediaRedactionContext = { EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW: "explicit_media_obscured_false_positive_flow", EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW: "explicit_media_sender_false_positive_flow", EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED: "explicit_media_message_send_blocked", EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED: "explicit_media_add_media_to_forum_post_blocked" };
export const trackMediaRedactionAction = function trackMediaRedactionAction(arg0) {
  let channelId;
  let messageId;
  ({ channelId, messageId } = arg0);
  if (null != channelId) {
    if (null != messageId) {
      const channel = store.getChannel(channelId);
      let obj = { action: tmp };
      let guild_id;
      if (null != channel) {
        guild_id = channel.guild_id;
      }
      obj.guild_id = guild_id;
      obj.channel_id = channelId;
      obj.message_id = messageId;
      obj = require(5669) /* isCurrentUserTeen */;
      obj.user_is_underage = obj.isCurrentUserTeen();
      obj.context = tmp2;
      importDefault(675).track(AnalyticEvents.EXPLICIT_MEDIA_ACTION, obj);
      const obj2 = importDefault(675);
    }
  }
};
export const TimeoutCancelSource = { UPDATE: "update", TIMEOUT: "timeout" };
export const trackScanTiming = function trackScanTiming(setAt, UPDATE) {
  const bound = Math.min(Math.floor((Date.now() - setAt) / 1000), 3);
  let obj = importDefault(6837);
  obj = { name: require(6842) /* set */.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING };
  const items = ["timingBucket:" + bound, "source:" + UPDATE, "metricVersion:1"];
  obj.tags = items;
  obj.increment(obj);
};
export const trackScanningTimedOut = function trackScanningTimedOut(arg0) {
  let attachmentIds;
  let channelId;
  let embedIds;
  let messageId;
  ({ channelId, messageId, attachmentIds, embedIds } = arg0);
  if (null != channelId) {
    if (null != messageId) {
      let length;
      if (null != attachmentIds) {
        length = attachmentIds.length;
      }
      let num2 = 0;
      if (null != length) {
        num2 = length;
      }
      if (0 !== num2) {
        const channel = store.getChannel(channelId);
        let obj = importDefault(675);
        obj = { channel_id: channelId };
        let guild_id;
        if (null != channel) {
          guild_id = channel.guild_id;
        }
        obj.guild_id = guild_id;
        obj.message_id = messageId;
        obj.embed_ids = embedIds;
        obj.user_is_underage = require(5669) /* isCurrentUserTeen */.isCurrentUserTeen();
        obj.scan_timeout_duration = require(6843) /* _isNativeReflectConstruct */.MESSAGE_SCAN_TIMEOUT;
        obj.attachment_ids_v2 = attachmentIds;
        obj.track(AnalyticEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, obj);
        const obj3 = require(5669) /* isCurrentUserTeen */;
        obj = { name: require(6842) /* set */.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, tags: ["metricVersion:1"] };
        importDefault(6837).increment(obj);
        const obj4 = importDefault(6837);
        const obj1 = { name: require(6842) /* set */.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION };
        let length1;
        if (null != attachmentIds) {
          length1 = attachmentIds.length;
        }
        let num9 = 0;
        if (null != length1) {
          num9 = length1;
        }
        let length2;
        if (null != embedIds) {
          length2 = embedIds.length;
        }
        let num10 = 0;
        if (null != length2) {
          num10 = length2;
        }
        importDefault(6837).distribution(obj1, num9 + num10);
        const obj6 = importDefault(6837);
      } else {
        let length3;
        if (null != embedIds) {
          length3 = embedIds.length;
        }
        let num3 = 0;
        if (null != length3) {
          num3 = length3;
        }
      }
    }
  }
};
export const trackExplicitMediaRedactableMessagedLoaded = function trackExplicitMediaRedactableMessagedLoaded(arg0) {
  let channelId;
  let numOfAttachmentsPendingScan;
  let numOfEmbedsPendingScan;
  ({ channelId, numOfAttachmentsPendingScan, numOfEmbedsPendingScan } = arg0);
  if (null != channelId) {
    const channel = store.getChannel(channelId);
    let obj = { channel_id: channelId };
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    obj.guild_id = guild_id;
    obj.num_of_attachments = tmp;
    obj.num_of_attachments_pending_scan = numOfAttachmentsPendingScan;
    obj.num_of_embeds = tmp2;
    obj.num_of_embeds_pending_scan = numOfEmbedsPendingScan;
    importDefault(675).track(AnalyticEvents.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, obj);
    const sum = numOfAttachmentsPendingScan + numOfEmbedsPendingScan;
    if (sum > 0) {
      obj = importDefault(6837);
      obj = { name: require(6842) /* set */.MetricEvents.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2 };
      obj.distribution(obj, sum);
    }
    const obj3 = importDefault(675);
  }
};
export const trackRedactableMessageLoaded = function trackRedactableMessageLoaded(arg0) {
  let channelId;
  let messageId;
  let numOfAttachments;
  let numOfEmbeds;
  let numOfExplicitAttachments;
  let numOfExplicitEmbeds;
  let numOfGoreAttachments;
  let numOfGoreEmbeds;
  let numOfSelfHarmAttachments;
  let numOfSelfHarmEmbeds;
  ({ messageId, channelId, numOfSelfHarmAttachments, numOfGoreAttachments, numOfExplicitAttachments, numOfSelfHarmEmbeds, numOfGoreEmbeds, numOfExplicitEmbeds } = arg0);
  let tmp = numOfExplicitAttachments > 0;
  ({ numOfAttachments, numOfEmbeds } = arg0);
  if (!tmp) {
    tmp = numOfExplicitEmbeds > 0;
  }
  if (null != channelId) {
    if (null != messageId) {
      const channel = store.getChannel(channelId);
      let obj = importDefault(675);
      obj = { message_id: messageId, channel_id: channelId };
      let type;
      if (null != channel) {
        type = channel.type;
      }
      obj.channel_type = type;
      let guild_id;
      if (null != channel) {
        guild_id = channel.guild_id;
      }
      obj.guild_id = guild_id;
      obj.num_of_attachments = numOfAttachments;
      obj.num_of_gore_attachments = numOfGoreAttachments;
      obj.num_of_explicit_attachments = numOfExplicitAttachments;
      obj.num_of_self_harm_attachments = numOfSelfHarmAttachments;
      obj.num_of_embeds = numOfEmbeds;
      obj.num_of_gore_embeds = numOfGoreEmbeds;
      obj.num_of_explicit_embeds = numOfExplicitEmbeds;
      obj.num_of_self_harm_embeds = numOfSelfHarmEmbeds;
      obj.has_redactable_explicit = tmp;
      obj.has_redactable_gore = tmp2;
      obj.has_redactable_self_harm = tmp3;
      obj.track(AnalyticEvents.REDACTABLE_MESSAGE_LOADED, obj);
    }
  }
};
export const trackExplicitMediaScanComplete = function trackExplicitMediaScanComplete(channelId) {
  channelId = channelId.channelId;
  if (null != channelId) {
    const channel = store.getChannel(channelId);
    let obj = importDefault(675);
    obj = { message_id: tmp, channel_id: channelId };
    let type;
    if (null != channel) {
      type = channel.type;
    }
    obj.channel_type = type;
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    obj.guild_id = guild_id;
    obj.num_of_attachments = tmp2;
    obj.num_of_explicit_attachments = tmp3;
    obj.num_of_embeds = tmp4;
    obj.num_of_explicit_embeds = tmp5;
    obj.track(AnalyticEvents.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, obj);
  }
};
export const handleExplicitMediaScanTimeoutForMessage = function handleExplicitMediaScanTimeoutForMessage(message) {
  let attachments;
  let embeds;
  ({ attachments, embeds } = timeoutAttachmentsAndEmbedsForMessage(message));
  let tmp = timeoutAttachmentsAndEmbedsForMessage(message);
  return message.merge({
    attachments,
    embeds,
    messageSnapshots: (function handleExplicitMediaScanTimeoutForForwardedMessage(messageSnapshots) {
      messageSnapshots = messageSnapshots.messageSnapshots;
      if (null != messageSnapshots) {
        if (0 !== messageSnapshots.length) {
          return messageSnapshots.map((message) => {
            message = message.message;
            const tmp = outer2_9(message);
            let obj = { attachments: tmp.attachments, embeds: tmp.embeds };
            obj = { message: message.merge(obj) };
            return message.merge(obj);
          });
        }
      }
      return messageSnapshots;
    })(message)
  });
};
export const isObscuredMediaBelowConstraints = function isObscuredMediaBelowConstraints(arg0, arg1) {
  let tmp = null != arg0 && null != arg1;
  if (tmp) {
    let tmp3 = arg0 <= closure_7;
    if (!tmp3) {
      tmp3 = arg1 <= closure_6;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const shouldAgeVerifyForExplicitMedia = function shouldAgeVerifyForExplicitMedia() {
  let isFeatureAgeGatedResult = require(3809) /* isFeatureAgeGated */.isFeatureAgeGated(require(4956) /* AgeGatedFeature */.AgeGatedFeature.SENSITIVE_CONTENT_SHOW_SETTING);
  const obj = require(3809) /* isFeatureAgeGated */;
  if (isFeatureAgeGatedResult) {
    isFeatureAgeGatedResult = obj2.shouldShowTiggerPawtect();
  }
  return isFeatureAgeGatedResult;
};
export { useShouldAgeVerifyForExplicitMedia };
export const useShouldAgeVerifyForReason = function useShouldAgeVerifyForReason(obscureReason) {
  let tmp = !useShouldAgeVerifyForExplicitMedia();
  if (!tmp) {
    tmp = null == obscureReason;
  }
  let hasItem = !tmp;
  if (!tmp) {
    const AGE_VERIFICATION_OBSCURABLE_REASONS = require(5674) /* ObscureReason */.AGE_VERIFICATION_OBSCURABLE_REASONS;
    hasItem = AGE_VERIFICATION_OBSCURABLE_REASONS.has(obscureReason);
  }
  return hasItem;
};
export const trackToggleMediaObscurityV2 = function trackToggleMediaObscurityV2(obscure) {
  let obj = require(4347) /* isReactiveCheckEnabled */;
  if (obj.isVerifiedAdult()) {
    obj = {};
    let str = "show";
    if (obscure.obscure) {
      str = "hide";
    }
    obj.toggle_direction = str;
    importDefault(675).track(AnalyticEvents.EXPLICIT_MEDIA_OBSCURITY_TOGGLE_V2, obj);
    const obj2 = importDefault(675);
  }
};
export const hasMessageSnapshotsWithAttachmentsOrEmbeds = function hasMessageSnapshotsWithAttachmentsOrEmbeds(message) {
  const message_snapshots = message.message_snapshots;
  let someResult;
  if (null != message_snapshots) {
    someResult = message_snapshots.some((message) => {
      message = message.message;
      let attachments;
      if (null != message) {
        attachments = message.attachments;
      }
      let tmp2 = null != attachments;
      if (tmp2) {
        tmp2 = message.message.attachments.length > 0;
      }
      if (!tmp2) {
        const message2 = message.message;
        let embeds;
        if (null != message2) {
          embeds = message2.embeds;
        }
        let tmp4 = null != embeds;
        if (tmp4) {
          tmp4 = message.message.embeds.length > 0;
        }
        tmp2 = tmp4;
      }
      return tmp2;
    });
  }
  return someResult;
};
