// Module ID: 6054
// Function ID: 6055
// Name: markup/ChannelUtils
// Dependencies: [4867, 2]
// Exports: isChannelTypeMentionable

// Module 6054 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 4867 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
}
