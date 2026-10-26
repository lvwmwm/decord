// Module ID: 6002
// Function ID: 6003
// Name: markup/ChannelUtils
// Dependencies: [4827, 2]
// Exports: isChannelTypeMentionable

// Module 6002 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 4827 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export const isChannelTypeMentionable = function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
};
