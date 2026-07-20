// Module ID: 11119
// Function ID: 86559
// Name: getForumPostShouldObscure
// Dependencies: []
// Exports: getObscureReasonForAttachment, getObscureReasonForEmbed, getObscureReasonForUnfurledMediaItem, getObscuredAlt, useShouldObscure

// Module 11119 (getForumPostShouldObscure)
function getForumPostShouldObscure(media, arg1, enabledHarmTypesBitmaskForChannelType) {
  if (null == media) {
    const items = [false, undefined];
    return items;
  } else {
    const type = media.type;
    if (arg1(dependencyMap[6]).ForumPostMediaTypes.EMBED === type) {
      let obj = { type: arg1(dependencyMap[3]).ObscuredMediaTypes.Embed, media };
      let tmp3 = obj;
    } else if (arg1(dependencyMap[6]).ForumPostMediaTypes.ATTACHMENT === type) {
      obj = { type: arg1(dependencyMap[3]).ObscuredMediaTypes.Attachment, media };
      tmp3 = obj;
    } else {
      tmp3 = null;
      if (arg1(dependencyMap[6]).ForumPostMediaTypes.COMPONENT === type) {
        obj = { type: arg1(dependencyMap[3]).ObscuredMediaTypes.GenericMedia, media: media.srcUnfurledMediaItem };
        tmp3 = obj;
      }
    }
    if (null == tmp3) {
      const items1 = [false, undefined];
      return items1;
    } else {
      const mediaObscuredReasonFromBitmask = arg1(dependencyMap[2]).getMediaObscuredReasonFromBitmask(tmp3, enabledHarmTypesBitmaskForChannelType);
      arg1(dependencyMap[2]);
      if (mediaObscuredReasonFromBitmask.length > 0) {
        const items2 = [true, mediaObscuredReasonFromBitmask[0]];
        let tmp8 = items2;
      } else {
        const items3 = [, ];
        if (tmp23) {
          items3[0] = true;
          items3[1] = arg1(dependencyMap[4]).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
          tmp8 = items3;
        } else if (media.spoiler) {
          items3[0] = arg1;
          items3[1] = arg1(dependencyMap[4]).ObscureReason.SPOILER;
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
let closure_3 = importDefault(dependencyMap[0]);
({ MessageAttachmentFlags: closure_4, Permissions: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/messages/MessageAttachmentUtils.tsx");

export const getObscureReasonForAttachment = function getObscureReasonForAttachment(attachment, enabledHarmTypesBitmaskForChannelAndAuthorId) {
  const flags = attachment.flags;
  let num = 0;
  if (undefined !== flags) {
    num = flags;
  }
  let obj = enabledHarmTypesBitmaskForChannelAndAuthorId(dependencyMap[2]);
  obj = { type: enabledHarmTypesBitmaskForChannelAndAuthorId(dependencyMap[3]).ObscuredMediaTypes.Attachment, media: attachment };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj, enabledHarmTypesBitmaskForChannelAndAuthorId);
  enabledHarmTypesBitmaskForChannelAndAuthorId(dependencyMap[2]);
  obj = { type: enabledHarmTypesBitmaskForChannelAndAuthorId(dependencyMap[3]).ObscuredMediaTypes.Attachment, media: attachment };
  if (mediaObscuredReasonFromBitmask.length > 0) {
    let first = mediaObscuredReasonFromBitmask[0];
  } else if (tmp2) {
    first = tmp3(tmp4[4]).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    first = null;
    if (tmp3Result.hasFlag(num, constants.IS_SPOILER)) {
      first = enabledHarmTypesBitmaskForChannelAndAuthorId(dependencyMap[4]).ObscureReason.SPOILER;
    }
    const tmp3Result = tmp3(tmp4[5]);
  }
  return first;
};
export const getObscureReasonForEmbed = function getObscureReasonForEmbed(embed, message, arg2, closure_3) {
  let obj = message(dependencyMap[2]);
  obj = { type: message(dependencyMap[3]).ObscuredMediaTypes.Embed, media: embed };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj, closure_3);
  let isMediaScanPendingResult = !message.author.bot;
  if (isMediaScanPendingResult) {
    obj = { type: message(dependencyMap[3]).ObscuredMediaTypes.Embed, media: embed };
    isMediaScanPendingResult = message(dependencyMap[2]).isMediaScanPending(obj, closure_3);
    const obj3 = message(dependencyMap[2]);
  }
  if (mediaObscuredReasonFromBitmask.length > 0) {
    let first = mediaObscuredReasonFromBitmask[0];
  } else if (isMediaScanPendingResult) {
    first = message(dependencyMap[4]).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    first = null;
    if (arg2) {
      first = message(dependencyMap[4]).ObscureReason.SPOILER;
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
  let obj = enabledContentHarmTypeFlags(dependencyMap[2]);
  obj = { type: enabledContentHarmTypeFlags(dependencyMap[3]).ObscuredMediaTypes.GenericMedia, media };
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj, enabledContentHarmTypeFlags);
  let isMediaScanPendingResult = !flag2;
  if (isMediaScanPendingResult) {
    obj = { type: enabledContentHarmTypeFlags(dependencyMap[3]).ObscuredMediaTypes.GenericMedia, media };
    isMediaScanPendingResult = enabledContentHarmTypeFlags(dependencyMap[2]).isMediaScanPending(obj, enabledContentHarmTypeFlags);
    const obj4 = enabledContentHarmTypeFlags(dependencyMap[2]);
  }
  if (mediaObscuredReasonFromBitmask.includes(enabledContentHarmTypeFlags(dependencyMap[4]).ObscureReason.EXPLICIT_CONTENT)) {
    let EXPLICIT_CONTENT = enabledContentHarmTypeFlags(dependencyMap[4]).ObscureReason.EXPLICIT_CONTENT;
  } else if (mediaObscuredReasonFromBitmask.includes(enabledContentHarmTypeFlags(dependencyMap[4]).ObscureReason.GORE_CONTENT)) {
    EXPLICIT_CONTENT = enabledContentHarmTypeFlags(dependencyMap[4]).ObscureReason.GORE_CONTENT;
  } else if (mediaObscuredReasonFromBitmask.includes(enabledContentHarmTypeFlags(dependencyMap[4]).ObscureReason.SELF_HARM_CONTENT)) {
    EXPLICIT_CONTENT = enabledContentHarmTypeFlags(dependencyMap[4]).ObscureReason.SELF_HARM_CONTENT;
  } else if (isMediaScanPendingResult) {
    EXPLICIT_CONTENT = enabledContentHarmTypeFlags(dependencyMap[4]).ObscureReason.POTENTIAL_EXPLICIT_CONTENT;
  } else {
    EXPLICIT_CONTENT = null;
    if (flag) {
      EXPLICIT_CONTENT = enabledContentHarmTypeFlags(dependencyMap[4]).ObscureReason.SPOILER;
    }
  }
  return EXPLICIT_CONTENT;
};
export { getForumPostShouldObscure };
export const useShouldObscure = function useShouldObscure(channel) {
  const arg1 = channel.channel;
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items, () => {
    let canResult = null != channel;
    if (canResult) {
      canResult = closure_3.can(constants.MANAGE_MESSAGES, channel);
    }
    return canResult;
  });
  const RenderSpoilers = arg1(dependencyMap[8]).RenderSpoilers;
  const setting = RenderSpoilers.useSetting();
  const obj = arg1(dependencyMap[7]);
  const enabledHarmTypesBitmaskForChannelType = arg1(dependencyMap[2]).getEnabledHarmTypesBitmaskForChannelType(arg1(dependencyMap[3]).ContentHarmTypeChannel.GUILD);
  return getForumPostShouldObscure(channel.media, !importDefault(dependencyMap[9])(setting, stateFromStores), enabledHarmTypesBitmaskForChannelType);
};
export const getObscuredAlt = function getObscuredAlt(obscureReason) {
  if (arg1(dependencyMap[4]).ObscureReason.EXPLICIT_CONTENT !== obscureReason) {
    if (arg1(dependencyMap[4]).ObscureReason.GORE_CONTENT !== obscureReason) {
      if (arg1(dependencyMap[4]).ObscureReason.SELF_HARM_CONTENT !== obscureReason) {
        if (arg1(dependencyMap[4]).ObscureReason.SPOILER === obscureReason) {
          const intl = arg1(dependencyMap[10]).intl;
          return intl.string(arg1(dependencyMap[10]).t.XpfDH+);
        }
      }
    }
  }
  const intl2 = arg1(dependencyMap[10]).intl;
  return intl2.string(arg1(dependencyMap[10]).t.SEgHFh);
};
