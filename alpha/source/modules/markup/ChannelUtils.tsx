// Module ID: 6003
// Function ID: 6004
// Name: markup/ChannelUtils
// Dependencies: [4828, 2]
// Exports: isChannelTypeMentionable

// Module 6003 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 4828 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export const isChannelTypeMentionable = function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
};
