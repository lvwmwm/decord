// Module ID: 6956
// Function ID: 6957
// Name: markup/ChannelUtils
// Dependencies: [4770, 2]
// Exports: isChannelTypeMentionable

// Module 6956 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 4770 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
}
