// Module ID: 7924
// Function ID: 62780
// Name: createMessageFailedEmbed
// Dependencies: [7711, 653, 7724, 7925, 1212, 7926, 4670, 2]
// Exports: createAutomodBlockedMessageEmbed, default

// Module 7924 (createMessageFailedEmbed)
import { MessageFailureState } from "Changeset";
import { MessageEmbedTypes } from "ME";

const result = require("frozen").fileFinishedImporting("modules/messages/native/renderer/createMessageFailedEmbed.tsx");

export default function createMessageFailedEmbed(useAttachmentUploadPreview) {
  let colors;
  let uploaderFile;
  ({ uploaderFile, colors } = useAttachmentUploadPreview);
  if (null != uploaderFile) {
    if (useAttachmentUploadPreview.useAttachmentUploadPreview) {
      let obj = { type: MessageEmbedTypes.TEXT };
      const intl3 = require(1212) /* getSystemLocale */.intl;
      obj.messageSendError = intl3.string(require(1212) /* getSystemLocale */.t.lBLP4u);
      obj.failureState = MessageFailureState.UNSPECIFIED;
      obj.disableBackgroundColor = true;
      obj.bodyTextColor = colors.failedMessageBodyTextColor;
      colors = require(7724) /* frozen */.getAssetUriForEmbed;
      obj.iconURL = colors(importDefault(7926));
      const tmp16 = require(7724) /* frozen */;
    } else {
      obj = { type: MessageEmbedTypes.TEXT };
      const intl2 = require(1212) /* getSystemLocale */.intl;
      const obj1 = { count: uploaderFile.attachmentsCount };
      obj.numAttachments = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.D0noUt, obj1);
      obj.failureState = MessageFailureState.UPLOAD_FAILED;
      let str = "";
      if (0 !== uploaderFile.currentSize) {
        const _HermesInternal = HermesInternal;
        str = " (" + require(4670) /* _createForOfIteratorHelperLoose */.sizeString(uploaderFile.currentSize) + ")";
        const obj4 = require(4670) /* _createForOfIteratorHelperLoose */;
      }
      obj.attachmentsSize = "" + str;
      obj.bodyTextColor = colors.embedBodyTextColor;
    }
  } else {
    obj = { type: MessageEmbedTypes.TEXT };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.messageSendError = intl.string(require(1212) /* getSystemLocale */.t.lBLP4u);
    obj.failureState = MessageFailureState.UNSPECIFIED;
    obj.disableBackgroundColor = true;
    obj.bodyTextColor = colors.failedMessageBodyTextColor;
    return obj;
  }
};
export const createAutomodBlockedMessageEmbed = function createAutomodBlockedMessageEmbed(errorMessage) {
  const obj = { type: MessageEmbedTypes.TEXT, messageSendError: errorMessage.errorMessage, failureState: MessageFailureState.AUTO_MODERATION_BLOCKED_MESSAGE, disableBackgroundColor: true, bodyTextColor: errorMessage.colors.automodBlockedBodyTextColor, iconURL: require(7724) /* frozen */.getAssetUriForEmbed(importDefault(7925)) };
  return obj;
};
