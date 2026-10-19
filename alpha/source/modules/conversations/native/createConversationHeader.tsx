// Module ID: 12818
// Function ID: 12819
// Name: createConversationHeader
// Dependencies: [8014, 8158, 12293, 1128, 3785, 9896, 2]
// Exports: default, findConversationHeaderRowIndex

// Module 12818 (createConversationHeader)
import intl2 from "intl" /* 1128 */;
import _modDef3785 from "module_3785" /* 3785 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8158 */;
import computeScrollData from "computeScrollData" /* 9896 */;
import AssetRegistryDefault from "AssetRegistry" /* 12293 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8014 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ RowType: c3, SeparatorType: closure_4 } = RowGeneratorConstants);
const result = size.fileFinishedImporting("modules/conversations/native/createConversationHeader.tsx");

export default function createConversationHeader(conversationId) {
  let intl;
  let obj2;
  const obj = { conversationId: conversationId.id, channelId: conversationId.channelId, startMessageId: conversationId.startMessageId, title: conversationId.title, expandIconUrl: obj2.getAssetUriForEmbed(AssetRegistryDefault), expandAccessibilityLabel: intl.string(_modDef3785.pU5Dut) };
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
