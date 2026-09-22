// Module ID: 5221
// Function ID: 5222
// Name: markup/ChannelUtils
// Dependencies: [2046, 2]
// Exports: isChannelTypeMentionable

// Module 5221 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 2046 */;
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
