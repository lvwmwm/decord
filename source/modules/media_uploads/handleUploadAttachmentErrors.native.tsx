// Module ID: 8298
// Function ID: 8299
// Name: handleUploadMessageAttachmentsErrors
// Dependencies: [676, 4895, 4854, 8299, 4640, 1236, 12504, 2]
// Exports: handleUploadMessageAttachmentsErrors

// Module 8298 (handleUploadMessageAttachmentsErrors)
import ME from "ME";

let c3;
let c4;
({ AbortCodes: c3, MAX_UPLOAD_COUNT: c4 } = ME);
const result = require("getUploadFileSizeSum").fileFinishedImporting("modules/media_uploads/handleUploadAttachmentErrors.native.tsx");

export const handleUploadMessageAttachmentsErrors = function handleUploadMessageAttachmentsErrors(arg0) {
  let code;
  let guildId;
  let reason;
  ({ guildId, code, reason } = arg0);
  if (undefined === code) {
    return false;
  } else if (code === constants.ENTITY_TOO_LARGE) {
    const kestrelConfig = require(4895) /* KESTREL_GA_UPLOAD_LIMIT_MB */.getKestrelConfig({ location: "native.handleUploadMessageAttachmentsErrors" });
    const obj10 = require(4895) /* KESTREL_GA_UPLOAD_LIMIT_MB */;
    const maxFileSizeResult = require(4854) /* getUploadFileSizeSum */.maxFileSize(guildId);
    let obj = { file: null, maxSize: null, baseMaxSize: null, guildId: null, analyticsLocations: null, errorReason: null };
    obj[0] = tmp;
    const obj11 = require(4854) /* getUploadFileSizeSum */;
    const tmp27 = importDefault(8299);
    obj[1] = require(4895) /* KESTREL_GA_UPLOAD_LIMIT_MB */.getEffectiveKestrelLimit(kestrelConfig, maxFileSizeResult);
    obj[2] = maxFileSizeResult;
    obj[3] = guildId;
    obj[4] = tmp2;
    let type;
    if (reason != null) {
      type = reason.type;
    }
    obj[5] = type;
    tmp27(obj);
    return true;
  } else if (code === tmp31.TOO_MANY_ATTACHMENTS) {
    obj = { title: null, body: null };
    const intl5 = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl5.string(require(1236) /* getSystemLocale */.t.wOr6hB);
    const intl6 = require(1236) /* getSystemLocale */.intl;
    let obj1 = { limit: null };
    obj1[0] = closure_4;
    obj[1] = intl6.formatToPlainString(require(1236) /* getSystemLocale */.t["qqyp/e"], obj1);
    importDefault(4640).show(obj);
    return true;
  } else if (code === tmp31.ENTITY_EMPTY) {
    let obj2 = { title: null, body: null };
    const intl3 = require(1236) /* getSystemLocale */.intl;
    obj2[0] = intl3.string(require(1236) /* getSystemLocale */.t.B3vFdU);
    const intl4 = require(1236) /* getSystemLocale */.intl;
    obj2[1] = intl4.string(require(1236) /* getSystemLocale */.t["9ZpT2C"]);
    importDefault(4640).show(obj2);
    return true;
  } else if (code === tmp31.INVALID_FILE_ASSET) {
    obj2 = importDefault(4640);
    const obj3 = { title: null, body: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj3[0] = intl.string(require(1236) /* getSystemLocale */.t.B3vFdU);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj3[1] = intl2.string(require(1236) /* getSystemLocale */.t.zMEjJg);
    obj2.show(obj3);
    return true;
  } else {
    obj = require(12504) /* getAttachmentUploadAbortAlertContent */;
    const attachmentUploadAbortAlertContent = obj.getAttachmentUploadAbortAlertContent(code);
    let flag = null != attachmentUploadAbortAlertContent;
    if (flag) {
      obj1 = importDefault(4640);
      obj1.show(attachmentUploadAbortAlertContent);
      flag = true;
    }
    return flag;
  }
};
