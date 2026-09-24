// Module ID: 5307
// Function ID: 5308
// Name: markup/ChannelUtils
// Dependencies: [2048, 2]
// Exports: isChannelTypeMentionable

// Module 5307 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 2048 */;
import size from "module_2" /* 2 */;

({ isGuildSelectableChannelType: closure_0, isGuildVocalChannelType: closure_1 } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export const isChannelTypeMentionable = function isChannelTypeMentionable(type) {
  let tmp = React(type);
  if (!tmp) {
    tmp = framebus(type);
  }
  return tmp;
};
