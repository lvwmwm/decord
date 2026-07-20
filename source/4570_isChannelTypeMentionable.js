// Module ID: 4570
// Function ID: 40026
// Name: isChannelTypeMentionable
// Dependencies: []
// Exports: isChannelTypeMentionable

// Module 4570 (isChannelTypeMentionable)
const _module = require(dependencyMap[0]);
({ isGuildSelectableChannelType: closure_0, isGuildVocalChannelType: closure_1 } = _module);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export const isChannelTypeMentionable = function isChannelTypeMentionable(type) {
  let tmp = closure_0(type);
  if (!tmp) {
    tmp = closure_1(type);
  }
  return tmp;
};
