// Module ID: 11432
// Function ID: 11433
// Name: createConversationHeader
// Dependencies: [7388, 11433, 1115, 3617, 2]
// Exports: default, isConversationStartMessage

// Module 11432 (createConversationHeader)
import intl2 from "intl" /* 1115 */;
import _modDef3617 from "module_3617" /* 3617 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7388 */;
import AssetRegistryDefault from "AssetRegistry" /* 11433 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conversations/native/createConversationHeader.tsx");

export default function createConversationHeader(startMessageId, arg1) {
  let intl;
  let obj2;
  if (null != startMessageId) {
    const tmp = null != startMessageId && startMessageId.startMessageId === arg1 && startMessageId.messageCount > 1;
    if (tmp) {
      const obj = { conversationId: null, title: null, expandIconUrl: obj2.getAssetUriForEmbed(AssetRegistryDefault), expandAccessibilityLabel: intl.string(_modDef3617.pU5Dut) };
      ({ id: obj.conversationId, title: obj.title } = startMessageId);
      obj2 = renderer_EmbedUtils;
      intl = intl2.intl;
      return obj;
    }
  }
};
export const isConversationStartMessage = function isConversationStartMessage(startMessageId, id) {
  return null != startMessageId && startMessageId.startMessageId === id && startMessageId.messageCount > 1;
};
