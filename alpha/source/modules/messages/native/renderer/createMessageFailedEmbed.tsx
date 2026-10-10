// Module ID: 8278
// Function ID: 8279
// Name: createMessageFailedEmbed
// Dependencies: [7747, 1085, 7890, 8279, 1126, 8280, 7764, 2]
// Exports: createAutomodBlockedMessageEmbed, default

// Module 8278 (createMessageFailedEmbed)
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7747 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7890 */;
import AssetRegistryDefault from "AssetRegistry" /* 8279 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8280 */;
import size from "module_2" /* 2 */;

const MessageFailureState = RowGeneratorConstants.MessageFailureState;
const MessageEmbedTypes = Constants.MessageEmbedTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/createMessageFailedEmbed.tsx");

export default function createMessageFailedEmbed(useAttachmentUploadPreview) {
  let colors;
  let intl;
  let intl2;
  let intl3;
  let obj;
  let obj4;
  let obj6;
  let str;
  let uploaderFile;
  ({ uploaderFile, colors } = useAttachmentUploadPreview);
  if (null != uploaderFile) {
    let obj3;
    if (useAttachmentUploadPreview.useAttachmentUploadPreview) {
      const obj2 = { type: MessageEmbedTypes.TEXT, messageSendError: intl3.string(intl4.t.lBLP4u), failureState: MessageFailureState.UNSPECIFIED, disableBackgroundColor: true, bodyTextColor: colors.failedMessageBodyTextColor, iconURL: obj6.getAssetUriForEmbed(AssetRegistryDefault2) };
      intl3 = intl4.intl;
      obj3 = obj2;
      obj6 = renderer_EmbedUtils;
    } else {
      obj3 = { type: MessageEmbedTypes.TEXT, numAttachments: intl2.formatToPlainString(intl4.t.D0noUt, obj4), failureState: MessageFailureState.UPLOAD_FAILED, attachmentsSize: "" + str, bodyTextColor: colors.embedBodyTextColor };
      intl2 = intl4.intl;
      str = "";
      obj4 = { count: uploaderFile.attachmentsCount };
      const tmp6 = require;
      if (0 !== uploaderFile.currentSize) {
        const _HermesInternal = HermesInternal;
        const tmp6Result = tmp6(7764);
        str = " (" + tmp6Result.sizeString(uploaderFile.currentSize) + ")";
      }
    }
    obj = obj3;
  } else {
    obj = { type: MessageEmbedTypes.TEXT, messageSendError: intl.string(intl4.t.lBLP4u), failureState: MessageFailureState.UNSPECIFIED, disableBackgroundColor: true, bodyTextColor: colors.failedMessageBodyTextColor };
    intl = intl4.intl;
  }
  return obj;
};
export const createAutomodBlockedMessageEmbed = function createAutomodBlockedMessageEmbed(errorMessage) {
  let obj2;
  const obj = { type: MessageEmbedTypes.TEXT, messageSendError: errorMessage.errorMessage, failureState: MessageFailureState.AUTO_MODERATION_BLOCKED_MESSAGE, disableBackgroundColor: true, bodyTextColor: errorMessage.colors.automodBlockedBodyTextColor, iconURL: obj2.getAssetUriForEmbed(AssetRegistryDefault) };
  obj2 = renderer_EmbedUtils;
  return obj;
};
