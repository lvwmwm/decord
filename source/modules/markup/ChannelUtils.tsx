// Module ID: 4746
// Function ID: 4747
// Name: isChannelTypeMentionable
// Dependencies: [1395, 2]
// Exports: isChannelTypeMentionable

// Module 4746 (isChannelTypeMentionable)
import createChannelRecord from "createChannelRecord";

let c0;
let closure_1;
({ isGuildSelectableChannelType: c0, isGuildVocalChannelType: closure_1 } = createChannelRecord);
const result = require("set").fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export const isChannelTypeMentionable = function isChannelTypeMentionable(type) {
  let tmp = callback(type);
  if (!tmp) {
    tmp = callback2(type);
  }
  return tmp;
};
