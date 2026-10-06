// Module ID: 5805
// Function ID: 5806
// Name: markup/ChannelUtils
// Dependencies: [2055, 2]
// Exports: isChannelTypeMentionable

// Module 5805 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 2055 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export const isChannelTypeMentionable = function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
};
