// Module ID: 13519
// Function ID: 13520
// Name: createConversationHeader
// Dependencies: [8189, 8331, 12575, 1125, 3766, 10060, 2]
// Exports: default, findConversationHeaderRowIndex

// Module 13519 (createConversationHeader)
import intl2 from "intl" /* 1125 */;
import _modDef3766 from "module_3766" /* 3766 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8331 */;
import computeScrollData from "computeScrollData" /* 10060 */;
import AssetRegistryDefault from "AssetRegistry" /* 12575 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8189 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ RowType: c3, SeparatorType: closure_4 } = RowGeneratorConstants);
const result = size.fileFinishedImporting("modules/conversations/native/createConversationHeader.tsx");

export default function createConversationHeader(conversationId) {
  let intl;
  let obj2;
  const obj = { conversationId: conversationId.id, channelId: conversationId.channelId, startMessageId: conversationId.startMessageId, title: conversationId.title, expandIconUrl: obj2.getAssetUriForEmbed(AssetRegistryDefault), expandAccessibilityLabel: intl.string(_modDef3766.pU5Dut) };
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
