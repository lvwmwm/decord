// Module ID: 13760
// Function ID: 13761
// Name: MessageAttachmentUtils
// Dependencies: [4946, 1072, 7463, 7469, 7468, 8928, 563, 4839, 8845, 1113, 2]
// Exports: getObscureReasonForAttachment, getObscureReasonForEmbed, getObscureReasonForUnfurledMediaItem, getObscuredAlt, useShouldObscure

// Module 13760 (MessageAttachmentUtils)
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 7463 */;
import ObscureMediaModels from "ObscureMediaModels" /* 7468 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 7469 */;
import computeGlobalSpoilerDisplayDefault from "computeGlobalSpoilerDisplay" /* 8845 */;
import ForumPostMediaUtils from "ForumPostMediaUtils" /* 8928 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import size from "module_2" /* 2 */;

function getForumPostShouldObscure(media, arg1, enabledHarmTypesBitmaskForChannelType) {
  if (null == media) {
    const items = [false, undefined];
    return items;
  } else {
    let tmp;
    const type = media.type;
    if (ForumPostMediaUtils.ForumPostMediaTypes.EMBED === type) {
      tmp = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media };
      const obj2 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media };
    } else if (ForumPostMediaUtils.ForumPostMediaTypes.ATTACHMENT === type) {
      tmp = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media };
      const obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media };
    } else {
      tmp = null;
      if (ForumPostMediaUtils.ForumPostMediaTypes.COMPONENT === type) {
        tmp = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: media.srcUnfurledMediaItem };
        const obj3 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: media.srcUnfurledMediaItem };
      }
    }
    if (null == tmp) {
      const items1 = [false, undefined];
      return items1;
    } else {
      let tmp2;
      const tmp4Result = ObscuredMediaUtils;
      const mediaObscuredReasonFromBitmask = tmp4Result.getMediaObscuredReasonFromBitmask(tmp, enabledHarmTypesBitmaskForChannelType);
      ObscuredMediaUtils;
      if (mediaObscuredReasonFromBitmask.length > 0) {
        const items2 = [true, mediaObscuredReasonFromBitmask[0]];
        tmp2 = items2;
      } else {
        const items3 = [, ];
        if (tmp8) {
          items3[0] = true;
          items3[1] = ObscureMediaModels.ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
          tmp2 = items3;
        } else if (media.spoiler) {
          items3[0] = arg1;
          items3[1] = ObscureMediaModels.ObscureReason.SPOILER;
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
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/messages/MessageAttachmentUtils.tsx");

export function getObscureReasonForAttachment(attachment, enabledHarmTypesBitmaskForChannelAndAuthorId, c2) {
  let first;
  let flag = c2;
  if (c2 === undefined) {
    flag = false;
  }
  const obj = ObscuredMediaUtils;
  const obj2 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: attachment };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj2, enabledHarmTypesBitmaskForChannelAndAuthorId);
  ObscuredMediaUtils;
  ({ type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: attachment });
  if (mediaObscuredReasonFromBitmask.length > 0) {
    first = mediaObscuredReasonFromBitmask[0];
  } else if (tmp4) {
    first = tmp(7468).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    first = null;
    if (flag) {
      first = tmp(7468).ObscureReason.SPOILER;
    }
  }
  return first;
}
export function getObscureReasonForEmbed(embed, message, flag2, enabledContentHarmTypeFlags) {
  let first;
  const obj = ObscuredMediaUtils;
  const obj2 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: embed };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj2, enabledContentHarmTypeFlags);
  let isMediaScanPendingResult = !message.author.bot;
  if (isMediaScanPendingResult) {
    const obj3 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: embed };
    const isMediaScanPending = ObscuredMediaUtils.isMediaScanPending;
    ObscuredMediaUtils;
    isMediaScanPendingResult = isMediaScanPending(obj3, enabledContentHarmTypeFlags);
  }
  if (mediaObscuredReasonFromBitmask.length > 0) {
    first = mediaObscuredReasonFromBitmask[0];
  } else if (isMediaScanPendingResult) {
    first = tmp(7468).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    first = null;
    if (flag2) {
      first = tmp(7468).ObscureReason.SPOILER;
    }
  }
  return first;
}
export function getObscureReasonForUnfurledMediaItem(unfurledMediaItem, enabledHarmTypesBitmaskForChannelAndAuthorId, arg2, isBot) {
  let EXPLICIT_CONTENT;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let flag2 = isBot;
  if (isBot === undefined) {
    flag2 = false;
  }
  const obj = ObscuredMediaUtils;
  const obj2 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: unfurledMediaItem };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj2, enabledHarmTypesBitmaskForChannelAndAuthorId);
  let isMediaScanPendingResult = !flag2;
  if (isMediaScanPendingResult) {
    const obj3 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: unfurledMediaItem };
    const isMediaScanPending = ObscuredMediaUtils.isMediaScanPending;
    ObscuredMediaUtils;
    isMediaScanPendingResult = isMediaScanPending(obj3, enabledHarmTypesBitmaskForChannelAndAuthorId);
  }
  if (mediaObscuredReasonFromBitmask.includes(ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT)) {
    EXPLICIT_CONTENT = tmp(7468).ObscureReason.EXPLICIT_CONTENT;
  } else if (mediaObscuredReasonFromBitmask.includes(ObscureMediaModels.ObscureReason.GORE_CONTENT)) {
    EXPLICIT_CONTENT = tmp(7468).ObscureReason.GORE_CONTENT;
  } else if (mediaObscuredReasonFromBitmask.includes(ObscureMediaModels.ObscureReason.SELF_HARM_CONTENT)) {
    EXPLICIT_CONTENT = tmp(7468).ObscureReason.SELF_HARM_CONTENT;
  } else if (isMediaScanPendingResult) {
    EXPLICIT_CONTENT = tmp(7468).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    EXPLICIT_CONTENT = null;
    if (flag) {
      EXPLICIT_CONTENT = tmp(7468).ObscureReason.SPOILER;
    }
  }
  return EXPLICIT_CONTENT;
}
export { getForumPostShouldObscure };
export function useShouldObscure(channel) {
  channel = channel.channel;
  const media = channel.media;
  const items = [PermissionStore];
  const obj = channel(563);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const canResult = null != channel && PermissionStore.can(Permissions.MANAGE_MESSAGES, tmp);
    return canResult;
  });
  const RenderSpoilers = channel(4839).RenderSpoilers;
  const setting = RenderSpoilers.useSetting();
  const obj2 = channel(7463);
  const enabledHarmTypesBitmaskForChannelType = obj2.getEnabledHarmTypesBitmaskForChannelType(channel(7469).ContentHarmTypeChannel.GUILD);
  return getForumPostShouldObscure(media, !computeGlobalSpoilerDisplayDefault(setting, stateFromStores), enabledHarmTypesBitmaskForChannelType);
}
export function getObscuredAlt(arg0) {
  if (ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT !== arg0) {
    if (ObscureMediaModels.ObscureReason.GORE_CONTENT !== arg0) {
      if (ObscureMediaModels.ObscureReason.SELF_HARM_CONTENT !== arg0) {
        if (ObscureMediaModels.ObscureReason.SPOILER === arg0) {
          const intl = tmp(1113).intl;
          return intl.string(intl3.t["XpfDH+"]);
        }
      }
    }
  }
  const intl2 = tmp(1113).intl;
  return intl2.string(intl3.t.SEgHFh);
}
