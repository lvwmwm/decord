// Module ID: 4575
// Function ID: 40114
// Name: isChannelTypeMentionable
// Dependencies: [1352, 2]
// Exports: isChannelTypeMentionable

// Module 4575 (isChannelTypeMentionable)
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
