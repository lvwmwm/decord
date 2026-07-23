// Module ID: 4706
// Function ID: 40947
// Name: MessageAttachmentUploadTarget
// Dependencies: [6, 7, 1348, 653, 4670, 4666, 4707, 4709, 2]
// Exports: getUploadTarget

// Module 4706 (MessageAttachmentUploadTarget)
import GuildProductAttachmentUploadTarget from "GuildProductAttachmentUploadTarget";
import ICYMIAttachmentUploadTarget from "ICYMIAttachmentUploadTarget";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_7;
let closure_8;
const require = arg1;
({ Endpoints: closure_7, MAX_UPLOAD_COUNT: closure_8 } = ME);
let closure_9 = (() => {
  class MessageAttachmentUploadTarget {
    constructor() {
      tmp = outer1_4(this, MessageAttachmentUploadTarget);
      return;
    }
  }
  let obj = {
    key: "getCreateAttachmentURL",
    value(arg0) {
      return outer1_7.MESSAGE_CREATE_ATTACHMENT_UPLOAD(arg0);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getDeleteUploadURL",
    value(arg0) {
      return outer1_7.MESSAGE_DELETE_UPLOAD(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getMaxFileSize",
    value(arg0) {
      const basicChannel = outer1_6.getBasicChannel(arg0);
      let guild_id;
      if (null != basicChannel) {
        guild_id = basicChannel.guild_id;
      }
      return outer1_2(outer1_3[4]).maxFileSize(guild_id);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMaxAttachmentsCount",
    value() {
      return outer1_8;
    }
  };
  items[4] = {
    key: "getMaxTotalAttachmentSize",
    value() {
      return MessageAttachmentUploadTarget(outer1_3[5]).MAX_TOTAL_ATTACHMENT_SIZE;
    }
  };
  items[5] = {
    key: "shouldReactNativeCompressUploads",
    get() {
      return true;
    }
  };
  return callback(MessageAttachmentUploadTarget, items);
})();
let obj = { MESSAGE_ATTACHMENT: 0, [0]: "MESSAGE_ATTACHMENT", GUILD_PRODUCT_ATTACHMENT: 1, [1]: "GUILD_PRODUCT_ATTACHMENT", GRAVITY_ATTACHMENT: 2, [2]: "GRAVITY_ATTACHMENT" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("lib/uploader/UploadTargets.tsx");

export const UploadTargets = obj;
export const getUploadTarget = function getUploadTarget(target) {
  if (obj.GUILD_PRODUCT_ATTACHMENT === target) {
    let tmp17 = importDefault(4707);
    const prototype3 = tmp17.prototype;
    tmp17 = new tmp17();
    return tmp17;
  } else if (obj.GRAVITY_ATTACHMENT === target) {
    let tmp10 = importDefault(4709);
    const prototype2 = tmp10.prototype;
    tmp10 = new tmp10();
    return tmp10;
  } else {
    const MESSAGE_ATTACHMENT = obj.MESSAGE_ATTACHMENT;
    const prototype = ctor.prototype;
    const tmp6 = new ctor();
    return tmp6;
  }
};
