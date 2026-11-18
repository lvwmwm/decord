// Module ID: 5865
// Function ID: 5866
// Name: markup/ChannelUtils
// Dependencies: [4676, 2]
// Exports: isChannelTypeMentionable

// Module 5865 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 4676 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
}
