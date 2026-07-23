// Module ID: 8140
// Function ID: 64407
// Name: getAttachmentUploadAbortAlertContent
// Dependencies: [653, 1212, 4666, 2]
// Exports: getAttachmentUploadAbortAlertContent

// Module 8140 (getAttachmentUploadAbortAlertContent)
import { AbortCodes } from "ME";

const result = require("items").fileFinishedImporting("modules/media_uploads/getAttachmentUploadAbortAlert.tsx");

export const getAttachmentUploadAbortAlertContent = function getAttachmentUploadAbortAlertContent(code) {
  const intl = require(1212) /* getSystemLocale */.intl;
  const stringResult = intl.string(require(1212) /* getSystemLocale */.t.B3vFdU);
  if (AbortCodes.TOTAL_ATTACHMENT_SIZE_TOO_LARGE === code) {
    let obj = { title: stringResult };
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj = { maxSizeMb: require(4666) /* items */.MAX_TOTAL_ATTACHMENT_SIZE_MB };
    obj.body = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.DYFPg2, obj);
    return obj;
  } else if (AbortCodes.CLOUD_UPLOAD_NOT_FOUND === code) {
    const obj1 = { title: stringResult };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj1.body = intl3.string(require(1212) /* getSystemLocale */.t.bQldfH);
    return obj1;
  } else if (AbortCodes.INVALID_PERMISSIONS === code) {
    obj = { title: stringResult };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.body = intl2.string(require(1212) /* getSystemLocale */.t.zl4Weq);
    return obj;
  } else {
    return null;
  }
};
