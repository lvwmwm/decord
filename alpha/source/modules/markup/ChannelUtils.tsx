// Module ID: 6049
// Function ID: 6050
// Name: markup/ChannelUtils
// Dependencies: [4862, 2]
// Exports: isChannelTypeMentionable

// Module 6049 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 4862 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
}
