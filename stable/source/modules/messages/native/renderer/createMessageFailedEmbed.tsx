// Module ID: 8675
// Function ID: 8676
// Name: createMessageFailedEmbed
// Dependencies: [8166, 1087, 8309, 8676, 1128, 8677, 8182, 2]
// Exports: createAutomodBlockedMessageEmbed, default

// Module 8675 (createMessageFailedEmbed)
import Constants from "Constants" /* 1087 */;
import intl4 from "intl" /* 1128 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8166 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8309 */;
import AssetRegistryDefault from "AssetRegistry" /* 8676 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8677 */;
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
        const tmp6Result = tmp6(8182);
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
