// Module ID: 12330
// Function ID: 12331
// Name: conjurePublishPopoutMode
// Dependencies: [10837, 2]
// Exports: conjurePublishPopoutMode

// Module 12330 (conjurePublishPopoutMode)
import ConjurePublishTypes from "ConjurePublishTypes" /* 10837 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishPopoutMode.tsx");

export const conjurePublishPopoutMode = function conjurePublishPopoutMode(status) {
  let str = "initial";
  if (null != status) {
    str = "initial";
    const obj = ConjurePublishTypes;
    if (obj.isConjureLive(status.publishState)) {
      let str2 = "published";
      if ("live_outdated" === status.publishState) {
        str2 = "notPublished";
      }
      str = str2;
    }
  }
  return str;
};
