// Module ID: 7082
// Function ID: 7083
// Name: markup/ChannelUtils
// Dependencies: [4896, 2]
// Exports: isChannelTypeMentionable

// Module 7082 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 4896 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
}
