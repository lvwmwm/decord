// Module ID: 4703
// Function ID: 40882
// Name: GuildProductAttachmentUploadTarget
// Dependencies: []

// Module 4703 (GuildProductAttachmentUploadTarget)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
({ MAX_ATTACHMENT_UPLOAD_COUNT: closure_2, MAX_ATTACHMENT_UPLOAD_FILESIZE_BYTES: closure_3, MAX_ATTACHMENT_UPLOAD_TOTAL_FILESIZE_BYTES: closure_4 } = arg1(dependencyMap[2]));
const Endpoints = arg1(dependencyMap[3]).Endpoints;
const tmp2 = arg1(dependencyMap[2]);
const tmp3 = () => {
  class GuildProductAttachmentUploadTarget {
    constructor() {
      tmp = GuildProductAttachmentUploadTarget(this, GuildProductAttachmentUploadTarget);
      return;
    }
  }
  let closure_0 = GuildProductAttachmentUploadTarget;
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
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_products/GuildProductAttachmentUploadTarget.tsx");

export default tmp3;
