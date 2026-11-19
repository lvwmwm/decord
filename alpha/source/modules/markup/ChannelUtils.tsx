// Module ID: 5836
// Function ID: 5837
// Name: markup/ChannelUtils
// Dependencies: [4645, 2]
// Exports: isChannelTypeMentionable

// Module 5836 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 4645 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
}
