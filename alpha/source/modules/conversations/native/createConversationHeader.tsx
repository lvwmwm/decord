// Module ID: 13069
// Function ID: 13070
// Name: createConversationHeader
// Dependencies: [8132, 8275, 12470, 1125, 3733, 9996, 2]
// Exports: default, findConversationHeaderRowIndex

// Module 13069 (createConversationHeader)
import intl2 from "intl" /* 1125 */;
import _modDef3733 from "module_3733" /* 3733 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8275 */;
import computeScrollData from "computeScrollData" /* 9996 */;
import AssetRegistryDefault from "AssetRegistry" /* 12470 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8132 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ RowType: c3, SeparatorType: closure_4 } = RowGeneratorConstants);
const result = size.fileFinishedImporting("modules/conversations/native/createConversationHeader.tsx");

export default function createConversationHeader(conversationId) {
  let intl;
  let obj2;
  const obj = { conversationId: conversationId.id, channelId: conversationId.channelId, startMessageId: conversationId.startMessageId, title: conversationId.title, expandIconUrl: obj2.getAssetUriForEmbed(AssetRegistryDefault), expandAccessibilityLabel: intl.string(_modDef3733.pU5Dut) };
  obj2 = renderer_EmbedUtils;
  intl = intl2.intl;
  return obj;
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
