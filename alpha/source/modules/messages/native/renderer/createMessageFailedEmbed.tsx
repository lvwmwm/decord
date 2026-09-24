// Module ID: 8502
// Function ID: 8503
// Name: createMessageFailedEmbed
// Dependencies: [8281, 1074, 8294, 8503, 1115, 8504, 5438, 2]
// Exports: createAutomodBlockedMessageEmbed, default

// Module 8502 (createMessageFailedEmbed)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8281 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8294 */;
import _modDef8503 from "module_8503" /* 8503 */;
import _modDef8504 from "module_8504" /* 8504 */;
import size from "module_2" /* 2 */;

const MessageFailureState = RowGeneratorConstants.MessageFailureState;
const MessageEmbedTypes = Constants.MessageEmbedTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/createMessageFailedEmbed.tsx");

export default function createMessageFailedEmbed(useAttachmentUploadPreview) {
  ({ uploaderFile, colors } = useAttachmentUploadPreview);
  if (null != uploaderFile) {
    if (useAttachmentUploadPreview.useAttachmentUploadPreview) {
      const obj2 = { type: MessageEmbedTypes.TEXT, messageSendError: null, failureState: null, disableBackgroundColor: true, bodyTextColor: null, iconURL: null };
      const intl3 = util.intl;
      obj2.messageSendError = intl3.string(util.t.lBLP4u);
      obj2.failureState = MessageFailureState.UNSPECIFIED;
      obj2.bodyTextColor = colors.failedMessageBodyTextColor;
      colors = renderer_EmbedUtils.getAssetUriForEmbed;
      obj2.iconURL = colors(_modDef8504);
      let obj3 = obj2;
    } else {
      obj3 = { type: MessageEmbedTypes.TEXT, numAttachments: null, failureState: null, attachmentsSize: null, bodyTextColor: null };
      const intl2 = util.intl;
      const obj4 = { count: uploaderFile.attachmentsCount };
      obj3.numAttachments = intl2.formatToPlainString(util.t.D0noUt, obj4);
      obj3.failureState = MessageFailureState.UPLOAD_FAILED;
      let str = "";
      if (0 !== uploaderFile.currentSize) {
        const _HermesInternal = HermesInternal;
        str = " (" + tmp6(5438).sizeString(uploaderFile.currentSize) + ")";
        const tmp6Result = tmp6(5438);
      }
      obj3.attachmentsSize = "" + str;
      obj3.bodyTextColor = colors.embedBodyTextColor;
      tmp6 = require;
    }
  } else {
    const obj = { type: MessageEmbedTypes.TEXT, messageSendError: null, failureState: null, disableBackgroundColor: true, bodyTextColor: null };
    const intl = util.intl;
    obj.messageSendError = intl.string(util.t.lBLP4u);
    obj.failureState = MessageFailureState.UNSPECIFIED;
    obj.bodyTextColor = colors.failedMessageBodyTextColor;
    return obj;
  }
};
export const createAutomodBlockedMessageEmbed = function createAutomodBlockedMessageEmbed(errorMessage) {
  const obj = { type: MessageEmbedTypes.TEXT, messageSendError: errorMessage.errorMessage, failureState: MessageFailureState.AUTO_MODERATION_BLOCKED_MESSAGE, disableBackgroundColor: true, bodyTextColor: errorMessage.colors.automodBlockedBodyTextColor, iconURL: renderer_EmbedUtils.getAssetUriForEmbed(_modDef8503) };
  return obj;
};
