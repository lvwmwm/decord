// Module ID: 8230
// Function ID: 8231
// Name: UploadTargets
// Dependencies: [4857, 1084, 8220, 8205, 8201, 8231, 8233, 2]
// Exports: getUploadTarget

// Module 8230 (UploadTargets)
import UploadUtils from "UploadUtils" /* 8201 */;
import FileUtilsAll from "FileUtils" /* 8205 */;
import UploadLimits from "UploadLimits" /* 8220 */;
import GuildProductAttachmentUploadTargetDefault from "GuildProductAttachmentUploadTarget" /* 8231 */;
import ICYMIAttachmentUploadTargetDefault from "ICYMIAttachmentUploadTarget" /* 8233 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ Endpoints: hasOwnProperty, MAX_UPLOAD_COUNT: metroRequire } = Constants);
class MessageAttachmentUploadTarget {
  getCreateAttachmentURL(arg0) {
    return hasOwnProperty.MESSAGE_CREATE_ATTACHMENT_UPLOAD(arg0);
  }
  getDeleteUploadURL(arg0) {
    return hasOwnProperty.MESSAGE_DELETE_UPLOAD(arg0);
  }
  getMaxFileSize(arg0) {
    const basicChannel = ChannelStore.getBasicChannel(arg0);
    const getEffectiveUploadLimit = UploadLimits.getEffectiveUploadLimit;
    UploadLimits;
    let guild_id;
    const maxFileSize = FileUtilsAll.maxFileSize;
    FileUtilsAll;
    if (basicChannel != null) {
      guild_id = basicChannel.guild_id;
    }
    return getEffectiveUploadLimit(maxFileSize(guild_id));
  }
  getMaxAttachmentsCount() {
    return metroRequire;
  }
  getMaxTotalAttachmentSize() {
    const obj = UploadUtils;
    return obj.getMaxTotalAttachmentSize({ location: "MessageAttachmentUploadTarget" });
  }
}
Object.defineProperty(MessageAttachmentUploadTarget.prototype, "shouldReactNativeCompressUploads", {
  get: function shouldReactNativeCompressUploads() {
    return true;
  },
  set: undefined
});
const UploadTargets = { MESSAGE_ATTACHMENT: 0, [0]: "MESSAGE_ATTACHMENT", GUILD_PRODUCT_ATTACHMENT: 1, [1]: "GUILD_PRODUCT_ATTACHMENT", GRAVITY_ATTACHMENT: 2, [2]: "GRAVITY_ATTACHMENT" };
const result = size.fileFinishedImporting("lib/uploader/UploadTargets.tsx");

export { UploadTargets };
export function getUploadTarget(target) {
  if (obj.GUILD_PRODUCT_ATTACHMENT === target) {
    const self4 = this;
    const self5 = this;
    const tmp8 = new GuildProductAttachmentUploadTargetDefault();
    return tmp8;
  } else if (obj.GRAVITY_ATTACHMENT === target) {
    const self2 = this;
    const self3 = this;
    const tmp4 = new ICYMIAttachmentUploadTargetDefault();
    return tmp4;
  } else {
    const MESSAGE_ATTACHMENT = tmp.MESSAGE_ATTACHMENT;
    const self = this;
    if (typeof MessageAttachmentUploadTarget === "function") {
      return Object.create(MessageAttachmentUploadTarget.prototype);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
