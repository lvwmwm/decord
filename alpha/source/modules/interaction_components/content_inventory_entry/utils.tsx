// Module ID: 8777
// Function ID: 8778
// Name: utils
// Dependencies: [1071, 1404, 2]
// Exports: isContentInventoryFallbackEmbed

// Module 8777 (utils)
import Constants from "Constants" /* 1071 */;
import FlagUtils from "FlagUtils" /* 1404 */;
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
