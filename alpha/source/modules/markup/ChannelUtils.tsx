// Module ID: 5484
// Function ID: 5485
// Name: markup/ChannelUtils
// Dependencies: [2069, 2]
// Exports: isChannelTypeMentionable

// Module 5484 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 2069 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export const isChannelTypeMentionable = function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
};
