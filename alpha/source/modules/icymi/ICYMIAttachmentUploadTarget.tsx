// Module ID: 8127
// Function ID: 8128
// Name: ICYMIAttachmentUploadTarget
// Dependencies: [1087, 8093, 2]

// Module 8127 (ICYMIAttachmentUploadTarget)
import UploadUtils from "UploadUtils" /* 8093 */;
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
({ Endpoints: c2, MAX_ATTACHMENT_SIZE: c3, MAX_UPLOAD_COUNT: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/icymi/ICYMIAttachmentUploadTarget.tsx");
class ICYMIAttachmentUploadTarget {
  getCreateAttachmentURL() {
    return React2.GRAVITY_ATTACHMENTS;
  }
  getDeleteUploadURL(arg0) {
    return React2.MESSAGE_DELETE_UPLOAD(arg0);
  }
  getMaxFileSize() {
    return _false;
  }
  getMaxAttachmentsCount() {
    return React3;
  }
  getMaxTotalAttachmentSize() {
    const obj = UploadUtils;
    return obj.getMaxTotalAttachmentSize({ location: "ICYMIAttachmentUploadTarget" });
  }
}
Object.defineProperty(ICYMIAttachmentUploadTarget.prototype, "shouldReactNativeCompressUploads", {
  get: function shouldReactNativeCompressUploads() {
    return true;
  },
  set: undefined
});

export default ICYMIAttachmentUploadTarget;
