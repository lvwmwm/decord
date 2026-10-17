// Module ID: 5524
// Function ID: 5525
// Name: markup/ChannelUtils
// Dependencies: [2072, 2]
// Exports: isChannelTypeMentionable

// Module 5524 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 2072 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export const isChannelTypeMentionable = function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
};
