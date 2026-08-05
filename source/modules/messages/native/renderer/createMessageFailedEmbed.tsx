// Module ID: 8038
// Function ID: 8039
// Name: createMessageFailedEmbed
// Dependencies: [7824, 676, 7837, 8039, 1236, 8040, 4807, 2]
// Exports: createAutomodBlockedMessageEmbed, default

// Module 8038 (createMessageFailedEmbed)
import { MessageFailureState } from "Changeset";
import { MessageEmbedTypes } from "ME";

const result = require("frozen").fileFinishedImporting("modules/messages/native/renderer/createMessageFailedEmbed.tsx");

export default function createMessageFailedEmbed(useAttachmentUploadPreview) {
  let colors;
  let uploaderFile;
  ({ uploaderFile, colors } = useAttachmentUploadPreview);
  if (null != uploaderFile) {
    if (useAttachmentUploadPreview.useAttachmentUploadPreview) {
      let obj = { type: null, messageSendError: null, failureState: null, disableBackgroundColor: true, bodyTextColor: null, iconURL: null };
      obj[0] = MessageEmbedTypes.TEXT;
      const intl3 = require(1236) /* getSystemLocale */.intl;
      obj[1] = intl3.string(require(1236) /* getSystemLocale */.t.lBLP4u);
      obj[2] = MessageFailureState.UNSPECIFIED;
      obj[4] = colors.failedMessageBodyTextColor;
      colors = require(7837) /* frozen */.getAssetUriForEmbed;
      obj[5] = colors(importDefault(8040));
      const tmp14 = require(7837) /* frozen */;
    } else {
      obj = { type: null, numAttachments: null, failureState: null, attachmentsSize: null, bodyTextColor: null };
      obj[0] = MessageEmbedTypes.TEXT;
      const intl2 = require(1236) /* getSystemLocale */.intl;
      const obj1 = { count: null };
      obj1[0] = uploaderFile.attachmentsCount;
      obj[1] = intl2.formatToPlainString(require(1236) /* getSystemLocale */.t.D0noUt, obj1);
      obj[2] = MessageFailureState.UPLOAD_FAILED;
      let str = "";
      if (0 !== uploaderFile.currentSize) {
        const _HermesInternal = HermesInternal;
        str = " (" + tmp6(4807).sizeString(uploaderFile.currentSize) + ")";
        const tmp6Result = tmp6(4807);
      }
      obj[3] = "" + str;
      obj[4] = colors.embedBodyTextColor;
      tmp6 = require;
    }
  } else {
    obj = { type: null, messageSendError: null, failureState: null, disableBackgroundColor: true, bodyTextColor: null };
    obj[0] = MessageEmbedTypes.TEXT;
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl.string(require(1236) /* getSystemLocale */.t.lBLP4u);
    obj[2] = MessageFailureState.UNSPECIFIED;
    obj[4] = colors.failedMessageBodyTextColor;
    return obj;
  }
};
export const createAutomodBlockedMessageEmbed = function createAutomodBlockedMessageEmbed(errorMessage) {
  const obj = { type: MessageEmbedTypes.TEXT, messageSendError: errorMessage.errorMessage, failureState: MessageFailureState.AUTO_MODERATION_BLOCKED_MESSAGE, disableBackgroundColor: true, bodyTextColor: errorMessage.colors.automodBlockedBodyTextColor, iconURL: null };
  obj[5] = require(7837) /* frozen */.getAssetUriForEmbed(importDefault(8039));
  return obj;
};
