// Module ID: 12868
// Function ID: 12869
// Name: createConversationHeader
// Dependencies: [8081, 8225, 12332, 1128, 3722, 9922, 2]
// Exports: default, findConversationHeaderRowIndex

// Module 12868 (createConversationHeader)
import intl2 from "intl" /* 1128 */;
import _modDef3722 from "module_3722" /* 3722 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8225 */;
import computeScrollData from "computeScrollData" /* 9922 */;
import AssetRegistryDefault from "AssetRegistry" /* 12332 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8081 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ RowType: c3, SeparatorType: closure_4 } = RowGeneratorConstants);
const result = size.fileFinishedImporting("modules/conversations/native/createConversationHeader.tsx");

export default function createConversationHeader(conversationId) {
  let intl;
  let obj2;
  const obj = { conversationId: conversationId.id, channelId: conversationId.channelId, startMessageId: conversationId.startMessageId, title: conversationId.title, expandIconUrl: obj2.getAssetUriForEmbed(AssetRegistryDefault), expandAccessibilityLabel: intl.string(_modDef3722.pU5Dut) };
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
