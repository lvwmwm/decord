// Module ID: 7051
// Function ID: 7052
// Name: markup/ChannelUtils
// Dependencies: [4865, 2]
// Exports: isChannelTypeMentionable

// Module 7051 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 4865 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
}
