// Module ID: 5089
// Function ID: 5090
// Name: markup/ChannelUtils
// Dependencies: [1961, 2]
// Exports: isChannelTypeMentionable

// Module 5089 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 1961 */;
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
