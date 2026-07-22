// Module ID: 4706
// Function ID: 40949
// Name: ICYMIAttachmentUploadTarget
// Dependencies: []

// Module 4706 (ICYMIAttachmentUploadTarget)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ Endpoints: closure_4, MAX_ATTACHMENT_SIZE: closure_5, MAX_UPLOAD_COUNT: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const tmp3 = () => {
  class ICYMIAttachmentUploadTarget {
    constructor() {
      tmp = closure_2(this, ICYMIAttachmentUploadTarget);
      return;
    }
  }
  const arg1 = ICYMIAttachmentUploadTarget;
  let obj = {
    key: "getCreateAttachmentURL",
    value() {
      return closure_4.GRAVITY_ATTACHMENTS;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getDeleteUploadURL",
    value(arg0) {
      return closure_4.MESSAGE_DELETE_UPLOAD(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getMaxFileSize",
    value() {
      return closure_5;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMaxAttachmentsCount",
    value() {
      return closure_6;
    }
  };
  items[4] = {
    key: "getMaxTotalAttachmentSize",
    value() {
      return ICYMIAttachmentUploadTarget(closure_1[3]).MAX_TOTAL_ATTACHMENT_SIZE;
    }
  };
  items[5] = {
    key: "shouldReactNativeCompressUploads",
    get() {
      return true;
    }
  };
  return callback(ICYMIAttachmentUploadTarget, items);
}();
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/icymi/ICYMIAttachmentUploadTarget.tsx");

export default tmp3;
