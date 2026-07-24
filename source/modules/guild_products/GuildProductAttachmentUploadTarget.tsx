// Module ID: 4707
// Function ID: 40961
// Name: GuildProductAttachmentUploadTarget
// Dependencies: [6, 7, 4708, 653, 2]

// Module 4707 (GuildProductAttachmentUploadTarget)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import GUILD_PRODUCT_EDIT_MODAL_KEY from "GUILD_PRODUCT_EDIT_MODAL_KEY";
import { Endpoints } from "ME";

let closure_2;
let closure_3;
let closure_4;
({ MAX_ATTACHMENT_UPLOAD_COUNT: closure_2, MAX_ATTACHMENT_UPLOAD_FILESIZE_BYTES: closure_3, MAX_ATTACHMENT_UPLOAD_TOTAL_FILESIZE_BYTES: closure_4 } = GUILD_PRODUCT_EDIT_MODAL_KEY);
const tmp3 = (() => {
  class GuildProductAttachmentUploadTarget {
    constructor() {
      tmp = GuildProductAttachmentUploadTarget(this, GuildProductAttachmentUploadTarget);
      return;
    }
  }
  let obj = {
    key: "getCreateAttachmentURL",
    value(arg0) {
      return outer1_5.GUILD_PRODUCT_CREATE_ATTACHMENT_UPLOAD(arg0);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getDeleteUploadURL",
    value(arg0) {
      return outer1_5.MESSAGE_DELETE_UPLOAD(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getMaxFileSize",
    value() {
      return outer1_3;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMaxAttachmentsCount",
    value() {
      return outer1_2;
    }
  };
  items[4] = {
    key: "getMaxTotalAttachmentSize",
    value() {
      return outer1_4;
    }
  };
  items[5] = {
    key: "shouldReactNativeCompressUploads",
    get() {
      return false;
    }
  };
  return callback(GuildProductAttachmentUploadTarget, items);
})();
const result = require("GUILD_PRODUCT_EDIT_MODAL_KEY").fileFinishedImporting("modules/guild_products/GuildProductAttachmentUploadTarget.tsx");

export default tmp3;
