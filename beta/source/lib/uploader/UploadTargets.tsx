// Module ID: 5426
// Function ID: 5427
// Name: UploadTargets
// Dependencies: [2045, 1078, 5412, 5384, 5379, 5427, 5429, 2]
// Exports: getUploadTarget

// Module 5426 (UploadTargets)
import UploadUtils from "UploadUtils" /* 5379 */;
import FileUtilsAll from "FileUtils" /* 5384 */;
import UploadLimits from "UploadLimits" /* 5412 */;
import GuildProductAttachmentUploadTargetDefault from "GuildProductAttachmentUploadTarget" /* 5427 */;
import ICYMIAttachmentUploadTargetDefault from "ICYMIAttachmentUploadTarget" /* 5429 */;
import ChannelStore from "ChannelStore" /* 2045 */;

require = fn;
const Constants = fn(1078);
({ Endpoints: hasOwnProperty, MAX_UPLOAD_COUNT: metroRequire } = Constants);
class MessageAttachmentUploadTarget {
}
const prototype = MessageAttachmentUploadTarget.prototype;
prototype["getCreateAttachmentURL"] = function getCreateAttachmentURL(arg0) {
  return hasOwnProperty.MESSAGE_CREATE_ATTACHMENT_UPLOAD(arg0);
};
prototype["getDeleteUploadURL"] = function getDeleteUploadURL(arg0) {
  return hasOwnProperty.MESSAGE_DELETE_UPLOAD(arg0);
};
prototype["getMaxFileSize"] = function getMaxFileSize(arg0) {
  const basicChannel = ChannelStore.getBasicChannel(arg0);
  const obj = UploadLimits;
  let guild_id;
  if (basicChannel != null) {
    guild_id = basicChannel.guild_id;
  }
  return obj.getEffectiveUploadLimit(FileUtilsAll.maxFileSize(guild_id));
};
prototype["getMaxAttachmentsCount"] = function getMaxAttachmentsCount() {
  return timestampProducer;
};
prototype["getMaxTotalAttachmentSize"] = function getMaxTotalAttachmentSize() {
  return UploadUtils.getMaxTotalAttachmentSize({ location: "MessageAttachmentUploadTarget" });
};
Object.defineProperty(prototype, "shouldReactNativeCompressUploads", {
  get: function shouldReactNativeCompressUploads() {
    return true;
  },
  set: undefined
});
const UploadTargets = { MESSAGE_ATTACHMENT: 0, [0]: "MESSAGE_ATTACHMENT", GUILD_PRODUCT_ATTACHMENT: 1, [1]: "GUILD_PRODUCT_ATTACHMENT", GRAVITY_ATTACHMENT: 2, [2]: "GRAVITY_ATTACHMENT" };
const size = fn(2);
const result = size.fileFinishedImporting("lib/uploader/UploadTargets.tsx");

export { UploadTargets };
export const getUploadTarget = function getUploadTarget(target) {
  if (obj.GUILD_PRODUCT_ATTACHMENT === target) {
    const tmp13 = new GuildProductAttachmentUploadTargetDefault();
    return tmp13;
  } else if (tmp.GRAVITY_ATTACHMENT === target) {
    const tmp7 = new ICYMIAttachmentUploadTargetDefault();
    return tmp7;
  } else {
    const MESSAGE_ATTACHMENT = tmp.MESSAGE_ATTACHMENT;
    if (typeof MessageAttachmentUploadTarget === "function") {
      return Object.create(MessageAttachmentUploadTarget.prototype);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
};
