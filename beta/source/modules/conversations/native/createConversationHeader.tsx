// Module ID: 11307
// Function ID: 11308
// Name: createConversationHeader
// Dependencies: [7392, 11308, 1127, 3620, 2]
// Exports: default, isConversationStartMessage

// Module 11307 (createConversationHeader)
import intl2 from "intl" /* 1127 */;
import _modDef3620 from "module_3620" /* 3620 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7392 */;
import AssetRegistryDefault from "AssetRegistry" /* 11308 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conversations/native/createConversationHeader.tsx");

export default function createConversationHeader(startMessageId, arg1) {
  let intl;
  let obj2;
  if (null != startMessageId) {
    const tmp = null != startMessageId && startMessageId.startMessageId === arg1 && startMessageId.messageCount > 1;
    if (tmp) {
      const obj = { conversationId: null, title: null, expandIconUrl: obj2.getAssetUriForEmbed(AssetRegistryDefault), expandAccessibilityLabel: intl.string(_modDef3620.pU5Dut) };
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
