// Module ID: 6189
// Function ID: 6190
// Name: markup/ChannelUtils
// Dependencies: [4995, 2]
// Exports: isChannelTypeMentionable

// Module 6189 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 4995 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
}
