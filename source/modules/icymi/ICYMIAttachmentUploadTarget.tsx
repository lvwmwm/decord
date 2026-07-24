// Module ID: 4709
// Function ID: 40971
// Name: ICYMIAttachmentUploadTarget
// Dependencies: [6, 7, 653, 4666, 2]

// Module 4709 (ICYMIAttachmentUploadTarget)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import ME from "ME";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ Endpoints: closure_4, MAX_ATTACHMENT_SIZE: closure_5, MAX_UPLOAD_COUNT: closure_6 } = ME);
const tmp3 = (() => {
  class ICYMIAttachmentUploadTarget {
    constructor() {
      tmp = outer1_2(this, ICYMIAttachmentUploadTarget);
      return;
    }
  }
  let obj = {
    key: "getCreateAttachmentURL",
    value() {
      return outer1_4.GRAVITY_ATTACHMENTS;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getDeleteUploadURL",
    value(arg0) {
      return outer1_4.MESSAGE_DELETE_UPLOAD(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getMaxFileSize",
    value() {
      return outer1_5;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMaxAttachmentsCount",
    value() {
      return outer1_6;
    }
  };
  items[4] = {
    key: "getMaxTotalAttachmentSize",
    value() {
      return ICYMIAttachmentUploadTarget(outer1_1[3]).MAX_TOTAL_ATTACHMENT_SIZE;
    }
  };
  items[5] = {
    key: "shouldReactNativeCompressUploads",
    get() {
      return true;
    }
  };
  return callback(ICYMIAttachmentUploadTarget, items);
})();
const result = require("ME").fileFinishedImporting("modules/icymi/ICYMIAttachmentUploadTarget.tsx");

export default tmp3;
