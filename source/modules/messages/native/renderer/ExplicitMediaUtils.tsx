// Module ID: 7801
// Function ID: 62261
// Name: getContentScanVersionFromMedia
// Dependencies: []
// Exports: getAttachmentObscurityDefaults, getAttachmentObscurityProps, getUnfurledMediaItemObscurityProps

// Module 7801 (getContentScanVersionFromMedia)
function getContentScanVersionFromMedia(attachment) {
  if (undefined !== attachment.content_scan_version) {
    return attachment.content_scan_version;
  } else {
    let contentScanVersion;
    if (undefined !== attachment.contentScanVersion) {
      contentScanVersion = attachment.contentScanVersion;
    }
    return contentScanVersion;
  }
}
function getSpoilerDescriptionForType(type) {
  if ("image" === type) {
    const intl4 = require(dependencyMap[5]).intl;
    return intl4.string(require(dependencyMap[5]).t.sb2W2J);
  } else if ("video" === type) {
    const intl3 = require(dependencyMap[5]).intl;
    return intl3.string(require(dependencyMap[5]).t.ehBaMc);
  } else if ("file" === type) {
    const intl2 = require(dependencyMap[5]).intl;
    return intl2.string(require(dependencyMap[5]).t.3Gc2XP);
  } else if ("generic" === type) {
    const intl = require(dependencyMap[5]).intl;
    return intl.string(require(dependencyMap[5]).t.G71b77);
  }
}
const MessageAttachmentFlags = require(dependencyMap[0]).MessageAttachmentFlags;
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/ExplicitMediaUtils.tsx");

export const getAttachmentObscurityProps = function getAttachmentObscurityProps(shouldAgeVerify) {
  let attachment;
  let enabledContentHarmTypeFlags;
  let shouldObscureSpoiler;
  ({ attachment, shouldObscureSpoiler, enabledContentHarmTypeFlags } = shouldAgeVerify);
  let obj = require(dependencyMap[1]);
  const flags = attachment.flags;
  let num = 0;
  if (null != flags) {
    num = flags;
  }
  const hasFlagResult = obj.hasFlag(num, MessageAttachmentFlags.IS_SPOILER);
  obj = {};
  const tmp2 = getContentScanVersionFromMedia(attachment);
  let num2 = 0;
  if (null != tmp2) {
    num2 = tmp2;
  }
  obj.contentScanVersion = num2;
  const flags2 = attachment.flags;
  let num3 = 0;
  if (null != flags2) {
    num3 = flags2;
  }
  obj.flags = num3;
  let obj2 = require(dependencyMap[2]);
  obj = { type: require(dependencyMap[3]).ObscuredMediaTypes.Attachment, media: obj };
  const mediaObscuredReasonFromBitmask = obj2.getMediaObscuredReasonFromBitmask(obj, enabledContentHarmTypeFlags);
  const obj5 = require(dependencyMap[2]);
  let isVerifiedTeenResult = tmp4;
  const obj1 = { type: require(dependencyMap[3]).ObscuredMediaTypes.Attachment, media: obj };
  if (mediaObscuredReasonFromBitmask.length > 0) {
    isVerifiedTeenResult = require(dependencyMap[4]).isVerifiedTeen();
    const obj7 = require(dependencyMap[4]);
  }
  obj2 = {};
  let tmp8 = shouldObscureSpoiler;
  if (shouldObscureSpoiler) {
    tmp8 = hasFlagResult;
  }
  obj2.isSpoiler = tmp8;
  let str = "";
  let str2 = "";
  if (shouldObscureSpoiler) {
    str2 = str;
    if (hasFlagResult) {
      const intl = require(dependencyMap[5]).intl;
      str2 = intl.string(require(dependencyMap[5]).t.F+x38C).toUpperCase();
      const str3 = intl.string(require(dependencyMap[5]).t.F+x38C);
    }
  }
  obj2.spoiler = str2;
  obj2.obscure = mediaObscuredReasonFromBitmask.length > 0;
  if (mediaObscuredReasonFromBitmask.length > 0) {
    const intl2 = require(dependencyMap[5]).intl;
    str = intl2.string(require(dependencyMap[5]).t.SpxcUR);
  }
  obj2.obscureDescription = str;
  obj2.obscureAwaitingScan = obj5.isMediaScanPending({ type: require(dependencyMap[3]).ObscuredMediaTypes.Attachment, media: obj }, enabledContentHarmTypeFlags);
  shouldAgeVerify = tmp4;
  if (mediaObscuredReasonFromBitmask.length > 0) {
    shouldAgeVerify = shouldAgeVerify.shouldAgeVerify;
  }
  obj2.verifyAge = shouldAgeVerify;
  obj2.obscureHideControls = isVerifiedTeenResult;
  obj2.obscureIsOpaque = mediaObscuredReasonFromBitmask.length > 0;
  return obj2;
};
export const getUnfurledMediaItemObscurityProps = function getUnfurledMediaItemObscurityProps(arg0) {
  let enabledContentHarmTypeFlags;
  let isAuthorBot;
  let isSpoilered;
  let mediaItem;
  let shouldAgeVerify;
  let shouldObscureSpoiler;
  let type;
  ({ mediaItem, isSpoilered, enabledContentHarmTypeFlags } = arg0);
  ({ type, isAuthorBot, shouldObscureSpoiler, shouldAgeVerify } = arg0);
  let obj = require(dependencyMap[2]);
  obj = { type: require(dependencyMap[3]).ObscuredMediaTypes.GenericMedia, media: mediaItem };
  let isMediaScanPendingResult = !isAuthorBot;
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj, enabledContentHarmTypeFlags);
  if (isMediaScanPendingResult) {
    obj = { type: require(dependencyMap[3]).ObscuredMediaTypes.GenericMedia, media: mediaItem };
    isMediaScanPendingResult = require(dependencyMap[2]).isMediaScanPending(obj, enabledContentHarmTypeFlags);
    const obj3 = require(dependencyMap[2]);
  }
  if (isSpoilered) {
    isSpoilered = shouldObscureSpoiler;
  }
  let isVerifiedTeenResult = tmp4;
  if (mediaObscuredReasonFromBitmask.length > 0) {
    isVerifiedTeenResult = require(dependencyMap[4]).isVerifiedTeen();
    const obj5 = require(dependencyMap[4]);
  }
  const obj1 = { isSpoiler: isSpoilered };
  let tmp8 = null;
  if (isSpoilered) {
    tmp8 = getSpoilerDescriptionForType(type);
  }
  obj1.spoilerDescription = tmp8;
  obj1.isObscured = mediaObscuredReasonFromBitmask.length > 0;
  let stringResult = null;
  if (mediaObscuredReasonFromBitmask.length > 0) {
    const intl = require(dependencyMap[5]).intl;
    stringResult = intl.string(require(dependencyMap[5]).t.SpxcUR);
  }
  obj1.obscureDescription = stringResult;
  obj1.obscureAwaitingScan = isMediaScanPendingResult;
  let tmp13 = tmp4;
  if (mediaObscuredReasonFromBitmask.length > 0) {
    tmp13 = shouldAgeVerify;
  }
  obj1.verifyAge = tmp13;
  obj1.obscureHideControls = isVerifiedTeenResult;
  obj1.obscureIsOpaque = mediaObscuredReasonFromBitmask.length > 0;
  return obj1;
};
export function getAttachmentObscurityDefaults() {
  return { display: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", flexDirection: null };
}
