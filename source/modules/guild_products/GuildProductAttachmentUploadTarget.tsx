// Module ID: 4704
// Function ID: 40930
// Name: GuildProductAttachmentUploadTarget
// Dependencies: [4741, 4742, 4743, 4744, 4745]

// Module 4704 (GuildProductAttachmentUploadTarget)
import error from "error";
import getStringFromDataView from "getStringFromDataView";
import DataView from "DataView";
import { Endpoints } from "addFileType";
import module_4745 from "module_4745";

({ MAX_ATTACHMENT_UPLOAD_COUNT: closure_2, MAX_ATTACHMENT_UPLOAD_FILESIZE_BYTES: closure_3, MAX_ATTACHMENT_UPLOAD_TOTAL_FILESIZE_BYTES: closure_4 } = DataView);
const result = module_4745.fileFinishedImporting("modules/guild_products/GuildProductAttachmentUploadTarget.tsx");

export default () => {
  class GuildProductAttachmentUploadTarget {
    constructor() {
      tmp = GuildProductAttachmentUploadTarget(this, GuildProductAttachmentUploadTarget);
      return;
    }
  }
  let error = GuildProductAttachmentUploadTarget;
  let obj = {
    key: "getCreateAttachmentURL",
    value(arg0) {
      return closure_5.GUILD_PRODUCT_CREATE_ATTACHMENT_UPLOAD(arg0);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getDeleteUploadURL",
    value(arg0) {
      return closure_5.MESSAGE_DELETE_UPLOAD(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getMaxFileSize",
    value() {
      return closure_3;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMaxAttachmentsCount",
    value() {
      return closure_2;
    }
  };
  items[4] = {
    key: "getMaxTotalAttachmentSize",
    value() {
      return closure_4;
    }
  };
  items[5] = {
    key: "shouldReactNativeCompressUploads",
    get() {
      return false;
    }
  };
  return callback(GuildProductAttachmentUploadTarget, items);
}();
