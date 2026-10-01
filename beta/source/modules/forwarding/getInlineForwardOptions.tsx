// Module ID: 11412
// Function ID: 11413
// Name: getInlineForwardOptions
// Dependencies: [1074, 4986, 2]
// Exports: getInlineForwardOptions

// Module 11412 (getInlineForwardOptions)
import Constants from "Constants" /* 1074 */;
import MediaFormatTesters from "MediaFormatTesters" /* 4986 */;
import size from "module_2" /* 2 */;

let filename;

const MessageReferenceTypes = Constants.MessageReferenceTypes;
const result = size.fileFinishedImporting("modules/forwarding/getInlineForwardOptions.tsx");

export const getInlineForwardOptions = function getInlineForwardOptions(message, nativeSyntheticEventData) {
  let embedIndex;
  let items;
  let targetKind;
  ({ targetKind, embedIndex } = nativeSyntheticEventData);
  if ("media" === targetKind) {
    let tmp2 = message;
    const messageReference = message.messageReference;
    let type;
    if (messageReference != null) {
      type = messageReference.type;
    }
    let tmp6 = message;
    if (type === MessageReferenceTypes.FORWARD) {
      const first = message.messageSnapshots[0];
      message = undefined;
      if (first != null) {
        message = first.message;
      }
      tmp6 = message;
    }
    let mapped;
    if (tmp6 != null) {
      const attachments = tmp6.attachments;
      const found = attachments.filter((filename) => {
        filename = filename.filename;
        const obj = MediaFormatTesters;
        let isImageFileResult = obj.isImageFile(filename);
        const tmp = require;
        const tmp2 = dependencyMap;
        if (!isImageFileResult) {
          const tmpResult = tmp(tmp2[1]);
          isImageFileResult = tmpResult.isVideoFile(filename);
        }
        return isImageFileResult;
      });
      mapped = found.map((id) => id.id);
    }
    return { onlyAttachmentIds: mapped };
  } else {
    let obj;
    if ("embed" === targetKind) {
      let tmp = null;
      if (null != embedIndex) {
        const obj3 = { onlyEmbedIndices: items };
        items = [embedIndex];
        obj = obj3;
      }
      return obj;
    }
    if ("shortcut" === targetKind) {
      obj = {};
    }
  }
};
