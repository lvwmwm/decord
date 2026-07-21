// Module ID: 11065
// Function ID: 86084
// Name: getInlineForwardOptions
// Dependencies: []
// Exports: getInlineForwardOptions

// Module 11065 (getInlineForwardOptions)
const MessageReferenceTypes = require(dependencyMap[0]).MessageReferenceTypes;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/forwarding/getInlineForwardOptions.tsx");

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
        let isImageFileResult = callback(closure_1[1]).isImageFile(filename);
        if (!isImageFileResult) {
          isImageFileResult = callback(closure_1[1]).isVideoFile(filename);
          const obj2 = callback(closure_1[1]);
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
