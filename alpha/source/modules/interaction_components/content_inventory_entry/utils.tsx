// Module ID: 8649
// Function ID: 8650
// Name: utils
// Dependencies: [1084, 1402, 2]
// Exports: isContentInventoryFallbackEmbed

// Module 8649 (utils)
import Constants from "Constants" /* 1084 */;
import FlagUtils from "FlagUtils" /* 1402 */;
import size from "module_2" /* 2 */;

const MessageEmbedFlags = Constants.MessageEmbedFlags;
const result = size.fileFinishedImporting("modules/interaction_components/content_inventory_entry/utils.tsx");

export function isContentInventoryFallbackEmbed(flags) {
  let num = flags.flags;
  const hasFlag = FlagUtils.hasFlag;
  FlagUtils;
  if (num == null) {
    num = 0;
  }
  return hasFlag(num, MessageEmbedFlags.IS_CONTENT_INVENTORY_ENTRY);
}
