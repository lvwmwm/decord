// Module ID: 13011
// Function ID: 13012
// Name: createConversationHeader
// Dependencies: [8132, 8275, 12442, 1128, 3732, 9993, 2]
// Exports: default, findConversationHeaderRowIndex

// Module 13011 (createConversationHeader)
import intl2 from "intl" /* 1128 */;
import _modDef3732 from "module_3732" /* 3732 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8275 */;
import computeScrollData from "computeScrollData" /* 9993 */;
import AssetRegistryDefault from "AssetRegistry" /* 12442 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8132 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ RowType: c3, SeparatorType: closure_4 } = RowGeneratorConstants);
const result = size.fileFinishedImporting("modules/conversations/native/createConversationHeader.tsx");

export default function createConversationHeader(conversationId) {
  let intl;
  let obj2;
  const obj = { conversationId: conversationId.id, channelId: conversationId.channelId, startMessageId: conversationId.startMessageId, title: conversationId.title, expandIconUrl: obj2.getAssetUriForEmbed(AssetRegistryDefault), expandAccessibilityLabel: intl.string(_modDef3732.pU5Dut) };
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
