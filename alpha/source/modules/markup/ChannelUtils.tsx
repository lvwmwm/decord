// Module ID: 6365
// Function ID: 6366
// Name: markup/ChannelUtils
// Dependencies: [5159, 2]
// Exports: isChannelTypeMentionable

// Module 6365 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 5159 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
}
