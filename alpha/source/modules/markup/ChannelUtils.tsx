// Module ID: 6038
// Function ID: 6039
// Name: markup/ChannelUtils
// Dependencies: [4860, 2]
// Exports: isChannelTypeMentionable

// Module 6038 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 4860 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export const isChannelTypeMentionable = function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
};
