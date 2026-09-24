// Module ID: 5254
// Function ID: 5255
// Name: markup/ChannelUtils
// Dependencies: [2049, 2]
// Exports: isChannelTypeMentionable

// Module 5254 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 2049 */;
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
