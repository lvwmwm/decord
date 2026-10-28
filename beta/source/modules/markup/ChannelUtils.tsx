// Module ID: 6034
// Function ID: 6035
// Name: markup/ChannelUtils
// Dependencies: [4859, 2]
// Exports: isChannelTypeMentionable

// Module 6034 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 4859 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export const isChannelTypeMentionable = function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
};
