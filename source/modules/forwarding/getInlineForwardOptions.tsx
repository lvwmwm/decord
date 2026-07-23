// Module ID: 11076
// Function ID: 86158
// Name: getInlineForwardOptions
// Dependencies: [653, 4317, 2]
// Exports: getInlineForwardOptions

// Module 11076 (getInlineForwardOptions)
import { MessageReferenceTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/forwarding/getInlineForwardOptions.tsx");

export const getInlineForwardOptions = function getInlineForwardOptions(message, nativeSyntheticEventData) {
  let embedIndex;
  let targetKind;
  ({ targetKind, embedIndex } = nativeSyntheticEventData);
  if ("media" === targetKind) {
    const messageReference = message.messageReference;
    let type;
    if (null != messageReference) {
      type = messageReference.type;
    }
    let tmp5 = message;
    if (type === MessageReferenceTypes.FORWARD) {
      const first = message.messageSnapshots[0];
      message = undefined;
      if (null != first) {
        message = first.message;
      }
      tmp5 = message;
    }
    let obj = {};
    let mapped;
    if (null != tmp5) {
      const attachments = tmp5.attachments;
      const found = attachments.filter((filename) => {
        filename = filename.filename;
        let isImageFileResult = outer1_0(outer1_1[1]).isImageFile(filename);
        if (!isImageFileResult) {
          isImageFileResult = outer1_0(outer1_1[1]).isVideoFile(filename);
          const obj2 = outer1_0(outer1_1[1]);
        }
        return isImageFileResult;
      });
      mapped = found.map((id) => id.id);
    }
    obj.onlyAttachmentIds = mapped;
    return obj;
  } else {
    if ("embed" === targetKind) {
      if (null != embedIndex) {
        obj = {};
        const items = [embedIndex];
        obj.onlyEmbedIndices = items;
      }
      return obj;
    }
    if ("shortcut" === targetKind) {
      obj = {};
    }
  }
};
