// Module ID: 6363
// Function ID: 6364
// Name: markup/ChannelUtils
// Dependencies: [5163, 2]
// Exports: isChannelTypeMentionable

// Module 6363 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 5163 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
}
