// Module ID: 12744
// Function ID: 12745
// Name: createConversationHeader
// Dependencies: [8582, 8157, 12745, 1113, 4023, 10363, 2]
// Exports: default, findConversationHeaderRowIndex

// Module 12744 (createConversationHeader)
import intl2 from "intl" /* 1113 */;
import _modDef4023 from "module_4023" /* 4023 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8157 */;
import computeScrollData from "computeScrollData" /* 10363 */;
import AssetRegistryDefault from "AssetRegistry" /* 12745 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8582 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ RowType: c3, SeparatorType: closure_4 } = RowGeneratorConstants);
const result = size.fileFinishedImporting("modules/conversations/native/createConversationHeader.tsx");

export default function createConversationHeader(conversationId) {
  let intl;
  let obj2;
  const obj = { conversationId: conversationId.id, channelId: conversationId.channelId, startMessageId: conversationId.startMessageId, title: conversationId.title, expandIconUrl: obj2.getAssetUriForEmbed(AssetRegistryDefault), expandAccessibilityLabel: intl.string(_modDef4023.pU5Dut) };
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
