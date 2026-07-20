// Module ID: 7824
// Function ID: 62389
// Name: createMessageFailedEmbed
// Dependencies: []
// Exports: createAutomodBlockedMessageEmbed, default

// Module 7824 (createMessageFailedEmbed)
const MessageFailureState = require(dependencyMap[0]).MessageFailureState;
const MessageEmbedTypes = require(dependencyMap[1]).MessageEmbedTypes;
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/createMessageFailedEmbed.tsx");

export default function createMessageFailedEmbed(useAttachmentUploadPreview) {
  let colors;
  let uploaderFile;
  ({ uploaderFile, colors } = useAttachmentUploadPreview);
  if (null != uploaderFile) {
    if (useAttachmentUploadPreview.useAttachmentUploadPreview) {
      let obj = { type: MessageEmbedTypes.TEXT };
      const intl3 = require(dependencyMap[4]).intl;
      obj.messageSendError = intl3.string(require(dependencyMap[4]).t.lBLP4u);
      obj.failureState = MessageFailureState.UNSPECIFIED;
      obj.disableBackgroundColor = true;
      obj.bodyTextColor = colors.failedMessageBodyTextColor;
      colors = require(dependencyMap[2]).getAssetUriForEmbed;
      obj.iconURL = colors(importDefault(dependencyMap[5]));
      const tmp16 = require(dependencyMap[2]);
    } else {
      obj = { type: MessageEmbedTypes.TEXT };
      const intl2 = require(dependencyMap[4]).intl;
      const obj1 = { count: uploaderFile.attachmentsCount };
      obj.numAttachments = intl2.formatToPlainString(require(dependencyMap[4]).t.D0noUt, obj1);
      obj.failureState = MessageFailureState.UPLOAD_FAILED;
      let str = "";
      if (0 !== uploaderFile.currentSize) {
        const _HermesInternal = HermesInternal;
        str = " (" + require(dependencyMap[6]).sizeString(uploaderFile.currentSize) + ")";
        const obj4 = require(dependencyMap[6]);
      }
      obj.attachmentsSize = "" + str;
      obj.bodyTextColor = colors.embedBodyTextColor;
    }
  } else {
    obj = { type: MessageEmbedTypes.TEXT };
    const intl = require(dependencyMap[4]).intl;
    obj.messageSendError = intl.string(require(dependencyMap[4]).t.lBLP4u);
    obj.failureState = MessageFailureState.UNSPECIFIED;
    obj.disableBackgroundColor = true;
    obj.bodyTextColor = colors.failedMessageBodyTextColor;
    return obj;
  }
};
export const createAutomodBlockedMessageEmbed = function createAutomodBlockedMessageEmbed(errorMessage) {
  const obj = { type: MessageEmbedTypes.TEXT, messageSendError: errorMessage.errorMessage, failureState: MessageFailureState.AUTO_MODERATION_BLOCKED_MESSAGE, disableBackgroundColor: true, bodyTextColor: errorMessage.colors.automodBlockedBodyTextColor, iconURL: require(dependencyMap[2]).getAssetUriForEmbed(importDefault(dependencyMap[3])) };
  return obj;
};
