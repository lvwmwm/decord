// Module ID: 8426
// Function ID: 8427
// Name: ExplicitMediaUtils
// Dependencies: [1074, 1385, 7566, 7571, 5000, 1115, 2]
// Exports: getAttachmentObscurityDefaults, getAttachmentObscurityProps, getUnfurledMediaItemObscurityProps

// Module 8426 (ExplicitMediaUtils)
import Constants from "Constants" /* 1074 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 7566 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 7571 */;
import size from "module_2" /* 2 */;

const MessageAttachmentFlags = Constants.MessageAttachmentFlags;
const result = size.fileFinishedImporting("modules/messages/native/renderer/ExplicitMediaUtils.tsx");

export const getAttachmentObscurityProps = function getAttachmentObscurityProps(shouldAgeVerify) {
  ({ attachment, shouldObscureSpoiler, enabledContentHarmTypeFlags } = shouldAgeVerify);
  let num = attachment.flags;
  if (num == null) {
    num = 0;
  }
  const hasFlagResult = FlagUtils.hasFlag(num, MessageAttachmentFlags.IS_SPOILER);
  if (undefined !== attachment.content_scan_version) {
    let num2 = attachment.content_scan_version;
  } else if (undefined !== attachment.contentScanVersion) {
    num2 = attachment.contentScanVersion;
  }
  if (num2 == null) {
    num2 = 0;
  }
  const obj2 = { contentScanVersion: num2, flags: null };
  let num3 = attachment.flags;
  if (num3 == null) {
    num3 = 0;
  }
  obj2.flags = num3;
  const tmpResult = ObscuredMediaUtils;
  const mediaObscuredReasonFromBitmask = tmpResult.getMediaObscuredReasonFromBitmask({ type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: obj2 }, enabledContentHarmTypeFlags);
  const obj3 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: obj2 };
  const tmpResult3 = ObscuredMediaUtils;
  let isVerifiedTeenResult = tmp5;
  const obj4 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: obj2 };
  if (mediaObscuredReasonFromBitmask.length > 0) {
    isVerifiedTeenResult = tmp(5000).isVerifiedTeen();
    const tmpResult4 = tmp(5000);
  }
  let tmp7 = shouldObscureSpoiler;
  if (shouldObscureSpoiler) {
    tmp7 = hasFlagResult;
  }
  const obj5 = { isSpoiler: tmp7, spoiler: null, obscure: null, obscureDescription: null, obscureAwaitingScan: null, verifyAge: null, obscureHideControls: null, obscureIsOpaque: null };
  let str = "";
  let str2 = "";
  if (shouldObscureSpoiler) {
    str2 = str;
    if (hasFlagResult) {
      const intl = tmp(1115).intl;
      str2 = intl.string(tmp(1115).t["F+x38C"]).toUpperCase();
      const str3 = intl.string(tmp(1115).t["F+x38C"]);
    }
  }
  obj5.spoiler = str2;
  obj5.obscure = mediaObscuredReasonFromBitmask.length > 0;
  if (mediaObscuredReasonFromBitmask.length > 0) {
    const intl2 = tmp(1115).intl;
    str = intl2.string(tmp(1115).t.SpxcUR);
  }
  obj5.obscureDescription = str;
  obj5.obscureAwaitingScan = tmpResult3.isMediaScanPending({ type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: obj2 }, enabledContentHarmTypeFlags);
  shouldAgeVerify = tmp5;
  if (mediaObscuredReasonFromBitmask.length > 0) {
    shouldAgeVerify = shouldAgeVerify.shouldAgeVerify;
  }
  obj5.verifyAge = shouldAgeVerify;
  obj5.obscureHideControls = isVerifiedTeenResult;
  obj5.obscureIsOpaque = mediaObscuredReasonFromBitmask.length > 0;
  return obj5;
};
export const getUnfurledMediaItemObscurityProps = function getUnfurledMediaItemObscurityProps(arg0) {
  ({ type, mediaItem, isSpoilered, isAuthorBot, enabledContentHarmTypeFlags } = arg0);
  ({ shouldObscureSpoiler, shouldAgeVerify } = arg0);
  const obj = ObscuredMediaUtils;
  let isMediaScanPendingResult = !isAuthorBot;
  const mediaObscuredReasonFromBitmask = obj.getMediaObscuredReasonFromBitmask({ type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media: mediaItem }, enabledContentHarmTypeFlags);
  if (!isAuthorBot) {
    const obj3 = { type: tmp(7571).ObscuredMediaTypes.GenericMedia, media: mediaItem };
    isMediaScanPendingResult = tmp(7566).isMediaScanPending(obj3, enabledContentHarmTypeFlags);
    const tmpResult = tmp(7566);
  }
  if (isSpoilered) {
    isSpoilered = shouldObscureSpoiler;
  }
  let isVerifiedTeenResult = tmp4;
  if (mediaObscuredReasonFromBitmask.length > 0) {
    isVerifiedTeenResult = tmp(5000).isVerifiedTeen();
    const tmpResult2 = tmp(5000);
  }
  const obj4 = { isSpoiler: isSpoilered, spoilerDescription: null, isObscured: null, obscureDescription: null, obscureAwaitingScan: null, verifyAge: null, obscureHideControls: null, obscureIsOpaque: null };
  if (!isSpoilered) {
    obj4.spoilerDescription = null;
    obj4.isObscured = tmp4;
    let stringResult = null;
    if (tmp4) {
      const intl4 = tmp(1115).intl;
      stringResult = intl4.string(tmp(1115).t.SpxcUR);
    }
    obj4.obscureDescription = stringResult;
    obj4.obscureAwaitingScan = isMediaScanPendingResult;
    let tmp9 = tmp4;
    if (tmp4) {
      tmp9 = shouldAgeVerify;
    }
    obj4.verifyAge = tmp9;
    obj4.obscureHideControls = isVerifiedTeenResult;
    obj4.obscureIsOpaque = tmp4;
    return obj4;
  } else if ("image" === type) {
    const intl3 = tmp(1115).intl;
    let stringResult1 = intl3.string(tmp(1115).t.sb2W2J);
  } else {
    if ("video" === type) {
      const intl2 = tmp(1115).intl;
      stringResult1 = intl2.string(tmp(1115).t.ehBaMc);
    } else if ("file" !== type) {
      if ("generic" === type) {
        const intl5 = tmp(1115).intl;
        stringResult1 = intl5.string(tmp(1115).t.G71b77);
      }
    }
    const intl = tmp(1115).intl;
    stringResult1 = intl.string(tmp(1115).t["3Gc2XP"]);
  }
};
export function getAttachmentObscurityDefaults() {
  return { isSpoiler: false, spoiler: "" };
}
