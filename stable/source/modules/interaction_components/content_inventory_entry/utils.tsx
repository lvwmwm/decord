// Module ID: 9388
// Function ID: 9389
// Name: utils
// Dependencies: [1072, 1406, 2]
// Exports: isContentInventoryFallbackEmbed

// Module 9388 (utils)
import Constants from "Constants" /* 1072 */;
import FlagUtils from "FlagUtils" /* 1406 */;
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
