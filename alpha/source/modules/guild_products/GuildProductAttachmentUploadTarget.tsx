// Module ID: 8116
// Function ID: 8117
// Name: GuildProductAttachmentUploadTarget
// Dependencies: [8117, 1071, 2]

// Module 8116 (GuildProductAttachmentUploadTarget)
import Constants from "Constants" /* 1071 */;
import GuildProductConstants from "GuildProductConstants" /* 8117 */;
import size from "module_2" /* 2 */;

let _window;
let c2;
let map;
({ MAX_ATTACHMENT_UPLOAD_COUNT: _window, MAX_ATTACHMENT_UPLOAD_FILESIZE_BYTES: map, MAX_ATTACHMENT_UPLOAD_TOTAL_FILESIZE_BYTES: c2 } = GuildProductConstants);
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/guild_products/GuildProductAttachmentUploadTarget.tsx");
class GuildProductAttachmentUploadTarget {
  getCreateAttachmentURL(arg0) {
    return Endpoints.GUILD_PRODUCT_CREATE_ATTACHMENT_UPLOAD(arg0);
  }
  getDeleteUploadURL(arg0) {
    return Endpoints.MESSAGE_DELETE_UPLOAD(arg0);
  }
  getMaxFileSize() {
    return map;
  }
  getMaxAttachmentsCount() {
    return React;
  }
  getMaxTotalAttachmentSize() {
    return React2;
  }
}
Object.defineProperty(GuildProductAttachmentUploadTarget.prototype, "shouldReactNativeCompressUploads", {
  get: function shouldReactNativeCompressUploads() {
    return false;
  },
  set: undefined
});

export default GuildProductAttachmentUploadTarget;
