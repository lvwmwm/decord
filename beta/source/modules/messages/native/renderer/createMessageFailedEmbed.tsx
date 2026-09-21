// Module ID: 8428
// Function ID: 8429
// Name: createMessageFailedEmbed
// Dependencies: [8196, 1078, 8209, 8429, 1119, 8430, 5352, 2]
// Exports: createAutomodBlockedMessageEmbed, default

// Module 8428 (createMessageFailedEmbed)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8196 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8209 */;
import _modDef8429 from "module_8429" /* 8429 */;
import _modDef8430 from "module_8430" /* 8430 */;
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
      obj2.iconURL = colors(_modDef8430);
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
        str = " (" + tmp6(5352).sizeString(uploaderFile.currentSize) + ")";
        const tmp6Result = tmp6(5352);
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
  const obj = { type: MessageEmbedTypes.TEXT, messageSendError: errorMessage.errorMessage, failureState: MessageFailureState.AUTO_MODERATION_BLOCKED_MESSAGE, disableBackgroundColor: true, bodyTextColor: errorMessage.colors.automodBlockedBodyTextColor, iconURL: renderer_EmbedUtils.getAssetUriForEmbed(_modDef8429) };
  return obj;
};
