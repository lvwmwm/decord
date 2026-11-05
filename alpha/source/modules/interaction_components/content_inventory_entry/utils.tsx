// Module ID: 8837
// Function ID: 8838
// Name: utils
// Dependencies: [1072, 1398, 2]
// Exports: isContentInventoryFallbackEmbed

// Module 8837 (utils)
import Constants from "Constants" /* 1072 */;
import FlagUtils from "FlagUtils" /* 1398 */;
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
