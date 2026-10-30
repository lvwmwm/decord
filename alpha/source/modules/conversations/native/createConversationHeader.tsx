// Module ID: 13669
// Function ID: 13670
// Name: createConversationHeader
// Dependencies: [8370, 8388, 12725, 1114, 3767, 10087, 2]
// Exports: default, findConversationHeaderRowIndex

// Module 13669 (createConversationHeader)
import intl2 from "intl" /* 1114 */;
import _modDef3767 from "module_3767" /* 3767 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8388 */;
import computeScrollData from "computeScrollData" /* 10087 */;
import AssetRegistryDefault from "AssetRegistry" /* 12725 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8370 */;
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
