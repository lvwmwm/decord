// Module ID: 5988
// Function ID: 5989
// Name: markup/ChannelUtils
// Dependencies: [4825, 2]
// Exports: isChannelTypeMentionable

// Module 5988 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 4825 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export const isChannelTypeMentionable = function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
};
