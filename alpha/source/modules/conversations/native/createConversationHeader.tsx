// Module ID: 14452
// Function ID: 14453
// Name: createConversationHeader
// Dependencies: [9093, 8588, 13634, 1113, 3981, 11815, 2]
// Exports: default, findConversationHeaderRowIndex

// Module 14452 (createConversationHeader)
import intl2 from "intl" /* 1113 */;
import _modDef3981 from "module_3981" /* 3981 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8588 */;
import computeScrollData from "computeScrollData" /* 11815 */;
import AssetRegistryDefault from "AssetRegistry" /* 13634 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 9093 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ RowType: c3, SeparatorType: closure_4 } = RowGeneratorConstants);
const result = size.fileFinishedImporting("modules/conversations/native/createConversationHeader.tsx");

export default function createConversationHeader(conversationId) {
  let intl;
  let obj2;
  const obj = { conversationId: conversationId.id, channelId: conversationId.channelId, startMessageId: conversationId.startMessageId, title: conversationId.title, expandIconUrl: obj2.getAssetUriForEmbed(AssetRegistryDefault), expandAccessibilityLabel: intl.string(_modDef3981.pU5Dut) };
  obj2 = renderer_EmbedUtils;
  intl = intl2.intl;
  return obj;
};
export function findConversationHeaderRowIndex(previousRows, startMessageId) {
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
}
