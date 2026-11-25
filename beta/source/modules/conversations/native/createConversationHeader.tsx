// Module ID: 12819
// Function ID: 12820
// Name: createConversationHeader
// Dependencies: [8670, 8245, 12820, 1112, 4092, 10408, 2]
// Exports: default, findConversationHeaderRowIndex

// Module 12819 (createConversationHeader)
import intl2 from "intl" /* 1112 */;
import _modDef4092 from "module_4092" /* 4092 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8245 */;
import computeScrollData from "computeScrollData" /* 10408 */;
import AssetRegistryDefault from "AssetRegistry" /* 12820 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8670 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ RowType: c3, SeparatorType: closure_4 } = RowGeneratorConstants);
const result = size.fileFinishedImporting("modules/conversations/native/createConversationHeader.tsx");

export default function createConversationHeader(conversationId) {
  let intl;
  let obj2;
  const obj = { conversationId: conversationId.id, channelId: conversationId.channelId, startMessageId: conversationId.startMessageId, title: conversationId.title, expandIconUrl: obj2.getAssetUriForEmbed(AssetRegistryDefault), expandAccessibilityLabel: intl.string(_modDef4092.pU5Dut) };
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
