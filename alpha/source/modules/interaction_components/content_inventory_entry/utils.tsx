// Module ID: 8539
// Function ID: 8540
// Name: utils
// Dependencies: [1087, 1405, 2]
// Exports: isContentInventoryFallbackEmbed

// Module 8539 (utils)
import Constants from "Constants" /* 1087 */;
import FlagUtils from "FlagUtils" /* 1405 */;
import size from "module_2" /* 2 */;

const MessageEmbedFlags = Constants.MessageEmbedFlags;
const result = size.fileFinishedImporting("modules/interaction_components/content_inventory_entry/utils.tsx");

export const isContentInventoryFallbackEmbed = function isContentInventoryFallbackEmbed(flags) {
  let num = flags.flags;
  const hasFlag = FlagUtils.hasFlag;
  FlagUtils;
  if (num == null) {
    num = 0;
  }
  return hasFlag(num, MessageEmbedFlags.IS_CONTENT_INVENTORY_ENTRY);
};
