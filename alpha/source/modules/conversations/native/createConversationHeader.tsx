// Module ID: 12726
// Function ID: 12727
// Name: createConversationHeader
// Dependencies: [7967, 8111, 12208, 1128, 3767, 9833, 2]
// Exports: default, findConversationHeaderRowIndex, isConversationStartMessage

// Module 12726 (createConversationHeader)
import intl2 from "intl" /* 1128 */;
import _modDef3767 from "module_3767" /* 3767 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8111 */;
import computeScrollData from "computeScrollData" /* 9833 */;
import AssetRegistryDefault from "AssetRegistry" /* 12208 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7967 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ RowType: c3, SeparatorType: closure_4 } = RowGeneratorConstants);
const result = size.fileFinishedImporting("modules/conversations/native/createConversationHeader.tsx");

export default function createConversationHeader(conversationId) {
  let intl;
  let obj2;
  const obj = { conversationId: conversationId.id, channelId: conversationId.channelId, startMessageId: conversationId.startMessageId, title: conversationId.title, expandIconUrl: obj2.getAssetUriForEmbed(AssetRegistryDefault), expandAccessibilityLabel: intl.string(_modDef3767.pU5Dut) };
  obj2 = renderer_EmbedUtils;
  intl = intl2.intl;
  return obj;
};
export const isConversationStartMessage = function isConversationStartMessage(startMessageId, id) {
  return startMessageId.startMessageId === id && startMessageId.messageCount > 1;
};
export const findConversationHeaderRowIndex = function findConversationHeaderRowIndex(previousRows, startMessageId) {
  const obj = computeScrollData;
  const findMessageRowIndexResult = obj.findMessageRowIndex(previousRows, startMessageId.startMessageId);
  if (null != findMessageRowIndexResult) {
    let type;
    if (previousRows[findMessageRowIndexResult + 1] != null) {
      type = tmp2.type;
    }
    let sum;
    if (type === constants.SEPARATOR) {
      if (previousRows[findMessageRowIndexResult + 1].id === constants2.CONVERSATION) {
        sum = findMessageRowIndexResult + 1;
      }
    }
    return sum;
  }
};
