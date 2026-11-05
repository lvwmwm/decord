// Module ID: 6192
// Function ID: 6193
// Name: markup/ChannelUtils
// Dependencies: [4996, 2]
// Exports: isChannelTypeMentionable

// Module 6192 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 4996 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
}
