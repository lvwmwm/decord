// Module ID: 11494
// Function ID: 11495
// Name: MessageAttachmentUtils
// Dependencies: [4469, 1074, 6710, 6715, 6714, 7323, 563, 2021, 7719, 1115, 2]
// Exports: getObscureReasonForAttachment, getObscureReasonForEmbed, getObscureReasonForUnfurledMediaItem, getObscuredAlt, useShouldObscure

// Module 11494 (MessageAttachmentUtils)
import util from "util" /* 1115 */;
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 6710 */;
import ObscureMediaModels from "ObscureMediaModels" /* 6714 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 6715 */;
import ForumPostMediaUtils from "ForumPostMediaUtils" /* 7323 */;
import computeGlobalSpoilerDisplayDefault from "computeGlobalSpoilerDisplay" /* 7719 */;
import PermissionStore from "PermissionStore" /* 4469 */;

require = fn;
function getForumPostShouldObscure(media, arg1, enabledHarmTypesBitmaskForChannelType) {
  if (null == media) {
    const items = [false, undefined];
    return items;
  } else {
    const type = media.type;
    if (ForumPostMediaUtils.ForumPostMediaTypes.EMBED === type) {
      const obj2 = { type: tmp4(6715).ObscuredMediaTypes.Embed, media };
      let tmp = obj2;
    } else if (tmp4(7323).ForumPostMediaTypes.ATTACHMENT === type) {
      const obj = { type: tmp4(6715).ObscuredMediaTypes.Attachment, media };
      tmp = obj;
    } else {
      tmp = null;
      if (tmp4(7323).ForumPostMediaTypes.COMPONENT === type) {
        const obj3 = { type: tmp4(6715).ObscuredMediaTypes.GenericMedia, media: media.srcUnfurledMediaItem };
        tmp = obj3;
      }
    }
    if (null == tmp) {
      const items1 = [false, undefined];
      return items1;
    } else {
      const mediaObscuredReasonFromBitmask = tmp4(6710).getMediaObscuredReasonFromBitmask(tmp, enabledHarmTypesBitmaskForChannelType);
      tmp4(6710);
      if (mediaObscuredReasonFromBitmask.length > 0) {
        const items2 = [true, mediaObscuredReasonFromBitmask[0]];
        let tmp2 = items2;
      } else {
        const items3 = [, ];
        if (tmp8) {
          items3[0] = true;
          items3[1] = tmp4(6714).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
          tmp2 = items3;
        } else if (media.spoiler) {
          items3[0] = arg1;
          items3[1] = tmp4(6714).ObscureReason.SPOILER;
          tmp2 = items3;
        } else {
          items3[0] = false;
          items3[1] = undefined;
          tmp2 = items3;
        }
      }
      return tmp2;
    }
  }
}
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/MessageAttachmentUtils.tsx");

export const getObscureReasonForAttachment = function getObscureReasonForAttachment(attachment, enabledHarmTypesBitmaskForChannelAndAuthorId, c2) {
  let flag = c2;
  if (c2 === undefined) {
    flag = false;
  }
  const obj = ObscuredMediaUtils;
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask({ type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: attachment }, enabledHarmTypesBitmaskForChannelAndAuthorId);
  ObscuredMediaUtils;
  { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: attachment };
  if (mediaObscuredReasonFromBitmask.length > 0) {
    let first = mediaObscuredReasonFromBitmask[0];
  } else if (tmp4) {
    first = tmp(6714).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    first = null;
    if (flag) {
      first = tmp(6714).ObscureReason.SPOILER;
    }
  }
  return first;
};
export const getObscureReasonForEmbed = function getObscureReasonForEmbed(embed, message, flag2, enabledContentHarmTypeFlags) {
  const obj = ObscuredMediaUtils;
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask({ type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: embed }, enabledContentHarmTypeFlags);
  const bot = message.author.bot;
  let isMediaScanPendingResult = !bot;
  if (!bot) {
    const obj3 = { type: tmp(6715).ObscuredMediaTypes.Embed, media: embed };
    isMediaScanPendingResult = tmp(6710).isMediaScanPending(obj3, enabledContentHarmTypeFlags);
    const tmpResult = tmp(6710);
  }
  if (mediaObscuredReasonFromBitmask.length > 0) {
    let first = mediaObscuredReasonFromBitmask[0];
  } else if (isMediaScanPendingResult) {
    first = tmp(6714).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    first = null;
    if (flag2) {
      first = tmp(6714).ObscureReason.SPOILER;
    }
  }
  return first;
};
export const getObscureReasonForUnfurledMediaItem = function getObscureReasonForUnfurledMediaItem(unfurledMediaItem, enabledHarmTypesBitmaskForChannelAndAuthorId, arg2, isBot) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let flag2 = isBot;
  if (isBot === undefined) {
    flag2 = false;
  }
  const obj = ObscuredMediaUtils;
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask({ type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: unfurledMediaItem }, enabledHarmTypesBitmaskForChannelAndAuthorId);
  let isMediaScanPendingResult = !flag2;
  if (!flag2) {
    const obj3 = { type: tmp(6715).ObscuredMediaTypes.GenericMedia, media: unfurledMediaItem };
    isMediaScanPendingResult = tmp(6710).isMediaScanPending(obj3, enabledHarmTypesBitmaskForChannelAndAuthorId);
    const tmpResult = tmp(6710);
  }
  if (mediaObscuredReasonFromBitmask.includes(ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT)) {
    let EXPLICIT_CONTENT = tmp(6714).ObscureReason.EXPLICIT_CONTENT;
  } else if (mediaObscuredReasonFromBitmask.includes(tmp(6714).ObscureReason.GORE_CONTENT)) {
    EXPLICIT_CONTENT = tmp(6714).ObscureReason.GORE_CONTENT;
  } else if (mediaObscuredReasonFromBitmask.includes(tmp(6714).ObscureReason.SELF_HARM_CONTENT)) {
    EXPLICIT_CONTENT = tmp(6714).ObscureReason.SELF_HARM_CONTENT;
  } else if (isMediaScanPendingResult) {
    EXPLICIT_CONTENT = tmp(6714).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    EXPLICIT_CONTENT = null;
    if (flag) {
      EXPLICIT_CONTENT = tmp(6714).ObscureReason.SPOILER;
    }
  }
  return EXPLICIT_CONTENT;
};
export { getForumPostShouldObscure };
export const useShouldObscure = function useShouldObscure(channel) {
  channel = channel.channel;
  const items = [PermissionStore];
  const stateFromStores = channel(563).useStateFromStores(items, () => {
    let canResult = null != channel;
    if (canResult) {
      canResult = PermissionStore.can(Permissions.MANAGE_MESSAGES, tmp);
    }
    return canResult;
  });
  const RenderSpoilers = channel(2021).RenderSpoilers;
  const setting = RenderSpoilers.useSetting();
  const obj = channel(563);
  const enabledHarmTypesBitmaskForChannelType = channel(6710).getEnabledHarmTypesBitmaskForChannelType(channel(6715).ContentHarmTypeChannel.GUILD);
  return getForumPostShouldObscure(channel.media, !computeGlobalSpoilerDisplayDefault(setting, stateFromStores), enabledHarmTypesBitmaskForChannelType);
};
export const getObscuredAlt = function getObscuredAlt(arg0) {
  if (ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT !== arg0) {
    if (tmp(6714).ObscureReason.GORE_CONTENT !== arg0) {
      if (tmp(6714).ObscureReason.SELF_HARM_CONTENT !== arg0) {
        if (tmp(6714).ObscureReason.SPOILER === arg0) {
          const intl = tmp(1115).intl;
          return intl.string(tmp(1115).t["XpfDH+"]);
        }
      }
    }
  }
  const intl2 = tmp(1115).intl;
  return intl2.string(util.t.SEgHFh);
};
