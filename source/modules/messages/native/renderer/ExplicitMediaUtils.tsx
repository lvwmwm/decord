// Module ID: 7807
// Function ID: 62298
// Name: getContentScanVersionFromMedia
// Dependencies: [653, 1360, 5670, 5675, 4347, 1212, 2]
// Exports: getAttachmentObscurityDefaults, getAttachmentObscurityProps, getUnfurledMediaItemObscurityProps

// Module 7807 (getContentScanVersionFromMedia)
import { MessageAttachmentFlags } from "ME";

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
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.sb2W2J);
  } else if ("video" === type) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.ehBaMc);
  } else if ("file" === type) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t["3Gc2XP"]);
  } else if ("generic" === type) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.G71b77);
  }
}
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/messages/native/renderer/ExplicitMediaUtils.tsx");

export const getAttachmentObscurityProps = function getAttachmentObscurityProps(shouldAgeVerify) {
  let attachment;
  let enabledContentHarmTypeFlags;
  let shouldObscureSpoiler;
  ({ attachment, shouldObscureSpoiler, enabledContentHarmTypeFlags } = shouldAgeVerify);
  let obj = require(1360) /* hasFlag */;
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
  let obj2 = require(5670) /* _createForOfIteratorHelperLoose */;
  obj = { type: require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.Attachment, media: obj };
  const mediaObscuredReasonFromBitmask = obj2.getMediaObscuredReasonFromBitmask(obj, enabledContentHarmTypeFlags);
  const obj5 = require(5670) /* _createForOfIteratorHelperLoose */;
  let isVerifiedTeenResult = tmp4;
  const obj1 = { type: require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.Attachment, media: obj };
  if (mediaObscuredReasonFromBitmask.length > 0) {
    isVerifiedTeenResult = require(4347) /* isReactiveCheckEnabled */.isVerifiedTeen();
    const obj7 = require(4347) /* isReactiveCheckEnabled */;
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
      const intl = require(1212) /* getSystemLocale */.intl;
      str2 = intl.string(require(1212) /* getSystemLocale */.t["F+x38C"]).toUpperCase();
      const str3 = intl.string(require(1212) /* getSystemLocale */.t["F+x38C"]);
    }
  }
  obj2.spoiler = str2;
  obj2.obscure = mediaObscuredReasonFromBitmask.length > 0;
  if (mediaObscuredReasonFromBitmask.length > 0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    str = intl2.string(require(1212) /* getSystemLocale */.t.SpxcUR);
  }
  obj2.obscureDescription = str;
  obj2.obscureAwaitingScan = obj5.isMediaScanPending({ type: require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.Attachment, media: obj }, enabledContentHarmTypeFlags);
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
  let obj = require(5670) /* _createForOfIteratorHelperLoose */;
  obj = { type: require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.GenericMedia, media: mediaItem };
  let isMediaScanPendingResult = !isAuthorBot;
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask(obj, enabledContentHarmTypeFlags);
  if (isMediaScanPendingResult) {
    obj = { type: require(5675) /* ContentHarmTypeChannel */.ObscuredMediaTypes.GenericMedia, media: mediaItem };
    isMediaScanPendingResult = require(5670) /* _createForOfIteratorHelperLoose */.isMediaScanPending(obj, enabledContentHarmTypeFlags);
    const obj3 = require(5670) /* _createForOfIteratorHelperLoose */;
  }
  if (isSpoilered) {
    isSpoilered = shouldObscureSpoiler;
  }
  let isVerifiedTeenResult = tmp4;
  if (mediaObscuredReasonFromBitmask.length > 0) {
    isVerifiedTeenResult = require(4347) /* isReactiveCheckEnabled */.isVerifiedTeen();
    const obj5 = require(4347) /* isReactiveCheckEnabled */;
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
    const intl = require(1212) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1212) /* getSystemLocale */.t.SpxcUR);
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
  return { isSpoiler: false, spoiler: "" };
}
