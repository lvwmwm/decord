// Module ID: 4576
// Function ID: 40130
// Name: isChannelTypeMentionable
// Dependencies: [1352, 2]
// Exports: isChannelTypeMentionable

// Module 4576 (isChannelTypeMentionable)
import _callSuper from "_callSuper";

({ isGuildSelectableChannelType: closure_0, isGuildVocalChannelType: closure_1 } = _callSuper);
const result = require("set").fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export const isChannelTypeMentionable = function isChannelTypeMentionable(type) {
  let tmp = closure_0(type);
  if (!tmp) {
    tmp = closure_1(type);
  }
  return tmp;
};
