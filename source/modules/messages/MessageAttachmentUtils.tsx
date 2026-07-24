// Module ID: 11166
// Function ID: 86926
// Name: getForumPostShouldObscure
// Dependencies: [3758, 653, 5670, 5675, 5674, 1360, 8372, 624, 3803, 10875, 1212, 2]
// Exports: getObscureReasonForAttachment, getObscureReasonForEmbed, getObscureReasonForUnfurledMediaItem, getObscuredAlt, useShouldObscure

// Module 11166 (getForumPostShouldObscure)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
function getForumPostShouldObscure(media, arg1, enabledHarmTypesBitmaskForChannelType) {
  if (null == media) {
    const items = [false, undefined];
    return items;
  } else {
    const type = media.type;
    if (require(8372) /* isValidImageAttachment */.ForumPostMediaTypes.EMBED === type) {
      let obj = { type: require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.Embed, media };
      let tmp3 = obj;
    } else if (require(8372) /* isValidImageAttachment */.ForumPostMediaTypes.ATTACHMENT === type) {
      obj = { type: require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.Attachment, media };
      tmp3 = obj;
    } else {
      tmp3 = null;
      if (require(8372) /* isValidImageAttachment */.ForumPostMediaTypes.COMPONENT === type) {
        obj = { type: require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.GenericMedia, media: media.srcUnfurledMediaItem };
        tmp3 = obj;
      }
    }
    if (null == tmp3) {
      const items1 = [false, undefined];
      return items1;
    } else {
      const mediaObscuredReasonFromBitmask = require(5670) /* _createForOfIteratorHelperLoose */.getMediaObscuredReasonFromBitmask(tmp3, enabledHarmTypesBitmaskForChannelType);
      require(5670) /* _createForOfIteratorHelperLoose */;
      if (mediaObscuredReasonFromBitmask.length > 0) {
        const items2 = [true, mediaObscuredReasonFromBitmask[0]];
        let tmp8 = items2;
      } else {
        const items3 = [, ];
        if (tmp23) {
          items3[0] = true;
          items3[1] = require(5674) /* ObscureReason */.ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
          tmp8 = items3;
        } else if (media.spoiler) {
          items3[0] = arg1;
          items3[1] = require(5674) /* ObscureReason */.ObscureReason.SPOILER;
          tmp8 = items3;
        } else {
          items3[0] = false;
          items3[1] = undefined;
          tmp8 = items3;
        }
      }
      return tmp8;
    }
  }
}
({ MessageAttachmentFlags: closure_4, Permissions: closure_5 } = ME);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/messages/MessageAttachmentUtils.tsx");

export const getObscureReasonForAttachment = function getObscureReasonForAttachment(attachment, enabledHarmTypesBitmaskForChannelAndAuthorId) {
  const flags = attachment.flags;
  let num = 0;
  if (undefined !== flags) {
    num = flags;
  }
  let obj = require(5670) /* _createForOfIteratorHelperLoose */;
  obj = { type: require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.Attachment, media: attachment };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj, enabledHarmTypesBitmaskForChannelAndAuthorId);
  require(5670) /* _createForOfIteratorHelperLoose */;
  obj = { type: require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.Attachment, media: attachment };
  if (mediaObscuredReasonFromBitmask.length > 0) {
    let first = mediaObscuredReasonFromBitmask[0];
  } else if (tmp2) {
    first = tmp3(5674).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    first = null;
    if (tmp3Result.hasFlag(num, constants.IS_SPOILER)) {
      first = require(5674) /* ObscureReason */.ObscureReason.SPOILER;
    }
    tmp3Result = tmp3(1360);
  }
  return first;
};
export const getObscureReasonForEmbed = function getObscureReasonForEmbed(embed, message, arg2, _isNativeReflectConstruct) {
  let obj = require(5670) /* _createForOfIteratorHelperLoose */;
  obj = { type: require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.Embed, media: embed };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj, _isNativeReflectConstruct);
  let isMediaScanPendingResult = !message.author.bot;
  if (isMediaScanPendingResult) {
    obj = { type: require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.Embed, media: embed };
    isMediaScanPendingResult = require(5670) /* _createForOfIteratorHelperLoose */.isMediaScanPending(obj, _isNativeReflectConstruct);
    const obj3 = require(5670) /* _createForOfIteratorHelperLoose */;
  }
  if (mediaObscuredReasonFromBitmask.length > 0) {
    let first = mediaObscuredReasonFromBitmask[0];
  } else if (isMediaScanPendingResult) {
    first = require(5674) /* ObscureReason */.ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    first = null;
    if (arg2) {
      first = require(5674) /* ObscureReason */.ObscureReason.SPOILER;
    }
  }
  return first;
};
export const getObscureReasonForUnfurledMediaItem = function getObscureReasonForUnfurledMediaItem(media, enabledContentHarmTypeFlags, arg2, isBot) {
  let flag = arg2;
  let flag2 = isBot;
  if (arg2 === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = require(5670) /* _createForOfIteratorHelperLoose */;
  obj = { type: require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.GenericMedia, media };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj, enabledContentHarmTypeFlags);
  let isMediaScanPendingResult = !flag2;
  if (isMediaScanPendingResult) {
    obj = { type: require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.GenericMedia, media };
    isMediaScanPendingResult = require(5670) /* _createForOfIteratorHelperLoose */.isMediaScanPending(obj, enabledContentHarmTypeFlags);
    const obj4 = require(5670) /* _createForOfIteratorHelperLoose */;
  }
  if (mediaObscuredReasonFromBitmask.includes(require(5674) /* ObscureReason */.ObscureReason.EXPLICIT_CONTENT)) {
    let EXPLICIT_CONTENT = require(5674) /* ObscureReason */.ObscureReason.EXPLICIT_CONTENT;
  } else if (mediaObscuredReasonFromBitmask.includes(require(5674) /* ObscureReason */.ObscureReason.GORE_CONTENT)) {
    EXPLICIT_CONTENT = require(5674) /* ObscureReason */.ObscureReason.GORE_CONTENT;
  } else if (mediaObscuredReasonFromBitmask.includes(require(5674) /* ObscureReason */.ObscureReason.SELF_HARM_CONTENT)) {
    EXPLICIT_CONTENT = require(5674) /* ObscureReason */.ObscureReason.SELF_HARM_CONTENT;
  } else if (isMediaScanPendingResult) {
    EXPLICIT_CONTENT = require(5674) /* ObscureReason */.ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    EXPLICIT_CONTENT = null;
    if (flag) {
      EXPLICIT_CONTENT = require(5674) /* ObscureReason */.ObscureReason.SPOILER;
    }
  }
  return EXPLICIT_CONTENT;
};
export { getForumPostShouldObscure };
export const useShouldObscure = function useShouldObscure(channel) {
  channel = channel.channel;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = channel(624).useStateFromStores(items, () => {
    let canResult = null != channel;
    if (canResult) {
      canResult = outer1_3.can(outer1_5.MANAGE_MESSAGES, channel);
    }
    return canResult;
  });
  const RenderSpoilers = channel(3803).RenderSpoilers;
  const setting = RenderSpoilers.useSetting();
  const obj = channel(624);
  const enabledHarmTypesBitmaskForChannelType = channel(5670).getEnabledHarmTypesBitmaskForChannelType(channel(5675).ContentHarmTypeChannel.GUILD);
  return getForumPostShouldObscure(channel.media, !importDefault(10875)(setting, stateFromStores), enabledHarmTypesBitmaskForChannelType);
};
export const getObscuredAlt = function getObscuredAlt(obscureReason) {
  if (require(5674) /* ObscureReason */.ObscureReason.EXPLICIT_CONTENT !== obscureReason) {
    if (require(5674) /* ObscureReason */.ObscureReason.GORE_CONTENT !== obscureReason) {
      if (require(5674) /* ObscureReason */.ObscureReason.SELF_HARM_CONTENT !== obscureReason) {
        if (require(5674) /* ObscureReason */.ObscureReason.SPOILER === obscureReason) {
          const intl = require(1212) /* getSystemLocale */.intl;
          return intl.string(require(1212) /* getSystemLocale */.t["XpfDH+"]);
        }
      }
    }
  }
  const intl2 = require(1212) /* getSystemLocale */.intl;
  return intl2.string(require(1212) /* getSystemLocale */.t.SEgHFh);
};
