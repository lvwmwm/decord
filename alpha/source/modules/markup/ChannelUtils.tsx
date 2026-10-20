// Module ID: 5960
// Function ID: 5961
// Name: markup/ChannelUtils
// Dependencies: [4804, 2]
// Exports: isChannelTypeMentionable

// Module 5960 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 4804 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export const isChannelTypeMentionable = function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
};
