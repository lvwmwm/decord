// Module ID: 6042
// Function ID: 6043
// Name: markup/ChannelUtils
// Dependencies: [4861, 2]
// Exports: isChannelTypeMentionable

// Module 6042 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 4861 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
}
