// Module ID: 6187
// Function ID: 6188
// Name: markup/ChannelUtils
// Dependencies: [4993, 2]
// Exports: isChannelTypeMentionable

// Module 6187 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 4993 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
}
