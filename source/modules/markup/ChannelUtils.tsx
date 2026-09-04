// Module ID: 4969
// Function ID: 4970
// Name: isChannelTypeMentionable
// Dependencies: [1390, 2]
// Exports: isChannelTypeMentionable

// Module 4969 (isChannelTypeMentionable)
import set from "set" /* 2 */;
import createChannelRecord from "createChannelRecord" /* 1390 */;

({ isGuildSelectableChannelType: c0, isGuildVocalChannelType: closure_1 } = createChannelRecord);
const result = set.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export const isChannelTypeMentionable = function isChannelTypeMentionable(type) {
  let tmp = callback(type);
  if (!tmp) {
    tmp = callback2(type);
  }
  return tmp;
};
