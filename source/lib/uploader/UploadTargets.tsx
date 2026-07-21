// Module ID: 4703
// Function ID: 40920
// Name: MessageAttachmentUploadTarget
// Dependencies: []
// Exports: getUploadTarget

// Module 4703 (MessageAttachmentUploadTarget)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
({ Endpoints: closure_7, MAX_UPLOAD_COUNT: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = () => {
  class MessageAttachmentUploadTarget {
    constructor() {
      tmp = closure_4(this, MessageAttachmentUploadTarget);
      return;
    }
  }
  const arg1 = MessageAttachmentUploadTarget;
  let obj = {
    key: "getCreateAttachmentURL",
    value(arg0) {
      return closure_7.MESSAGE_CREATE_ATTACHMENT_UPLOAD(arg0);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getDeleteUploadURL",
    value(arg0) {
      return closure_7.MESSAGE_DELETE_UPLOAD(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getMaxFileSize",
    value(arg0) {
      const basicChannel = basicChannel.getBasicChannel(arg0);
      let guild_id;
      if (null != basicChannel) {
        guild_id = basicChannel.guild_id;
      }
      return callback(closure_3[4]).maxFileSize(guild_id);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMaxAttachmentsCount",
    value() {
      return closure_8;
    }
  };
  items[4] = {
    key: "getMaxTotalAttachmentSize",
    value() {
      return MessageAttachmentUploadTarget(closure_3[5]).MAX_TOTAL_ATTACHMENT_SIZE;
    }
  };
  items[5] = {
    key: "shouldReactNativeCompressUploads",
    get() {
      return true;
    }
  };
  return callback(MessageAttachmentUploadTarget, items);
}();
const obj = { MESSAGE_ATTACHMENT: 0, [0]: "MESSAGE_ATTACHMENT", GUILD_PRODUCT_ATTACHMENT: 1, [1]: "GUILD_PRODUCT_ATTACHMENT", GRAVITY_ATTACHMENT: 2, [2]: "GRAVITY_ATTACHMENT" };
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("lib/uploader/UploadTargets.tsx");

export const UploadTargets = obj;
export const getUploadTarget = function getUploadTarget(target) {
  if (obj.GUILD_PRODUCT_ATTACHMENT === target) {
    let tmp17 = importDefault(dependencyMap[6]);
    const prototype3 = tmp17.prototype;
    tmp17 = new tmp17();
    return tmp17;
  } else if (obj.GRAVITY_ATTACHMENT === target) {
    let tmp10 = importDefault(dependencyMap[7]);
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
