// Module ID: 12735
// Function ID: 12736
// Name: createConversationHeader
// Dependencies: [8083, 8680, 12736, 1112, 4094, 11867, 2]
// Exports: default, findConversationHeaderRowIndex

// Module 12735 (createConversationHeader)
import intl2 from "intl" /* 1112 */;
import _modDef4094 from "module_4094" /* 4094 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8680 */;
import computeScrollData from "computeScrollData" /* 11867 */;
import AssetRegistryDefault from "AssetRegistry" /* 12736 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8083 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ RowType: c3, SeparatorType: closure_4 } = RowGeneratorConstants);
const result = size.fileFinishedImporting("modules/conversations/native/createConversationHeader.tsx");

export default function createConversationHeader(conversationId) {
  let intl;
  let obj2;
  const obj = { conversationId: conversationId.id, channelId: conversationId.channelId, startMessageId: conversationId.startMessageId, title: conversationId.title, expandIconUrl: obj2.getAssetUriForEmbed(AssetRegistryDefault), expandAccessibilityLabel: intl.string(_modDef4094.pU5Dut) };
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
