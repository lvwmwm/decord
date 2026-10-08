// Module ID: 11639
// Function ID: 11640
// Name: createConversationHeader
// Dependencies: [7720, 7863, 11640, 1126, 3729, 9531, 2]
// Exports: default, findConversationHeaderRowIndex, isConversationStartMessage

// Module 11639 (createConversationHeader)
import intl2 from "intl" /* 1126 */;
import _modDef3729 from "module_3729" /* 3729 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7863 */;
import computeScrollData from "computeScrollData" /* 9531 */;
import AssetRegistryDefault from "AssetRegistry" /* 11640 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7720 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ RowType: c3, SeparatorType: closure_4 } = RowGeneratorConstants);
const result = size.fileFinishedImporting("modules/conversations/native/createConversationHeader.tsx");

export default function createConversationHeader(conversationId) {
  let intl;
  let obj2;
  const obj = { conversationId: conversationId.id, channelId: conversationId.channelId, startMessageId: conversationId.startMessageId, title: conversationId.title, expandIconUrl: obj2.getAssetUriForEmbed(AssetRegistryDefault), expandAccessibilityLabel: intl.string(_modDef3729.pU5Dut) };
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
