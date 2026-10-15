// Module ID: 12700
// Function ID: 12701
// Name: createConversationHeader
// Dependencies: [7964, 8108, 12184, 1126, 3764, 9817, 2]
// Exports: default, findConversationHeaderRowIndex, isConversationStartMessage

// Module 12700 (createConversationHeader)
import intl2 from "intl" /* 1126 */;
import _modDef3764 from "module_3764" /* 3764 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8108 */;
import computeScrollData from "computeScrollData" /* 9817 */;
import AssetRegistryDefault from "AssetRegistry" /* 12184 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7964 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ RowType: c3, SeparatorType: closure_4 } = RowGeneratorConstants);
const result = size.fileFinishedImporting("modules/conversations/native/createConversationHeader.tsx");

export default function createConversationHeader(conversationId) {
  let intl;
  let obj2;
  const obj = { conversationId: conversationId.id, channelId: conversationId.channelId, startMessageId: conversationId.startMessageId, title: conversationId.title, expandIconUrl: obj2.getAssetUriForEmbed(AssetRegistryDefault), expandAccessibilityLabel: intl.string(_modDef3764.pU5Dut) };
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
