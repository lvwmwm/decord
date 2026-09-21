// Module ID: 5220
// Function ID: 5221
// Name: markup/ChannelUtils
// Dependencies: [2045, 2]
// Exports: isChannelTypeMentionable

// Module 5220 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 2045 */;
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
