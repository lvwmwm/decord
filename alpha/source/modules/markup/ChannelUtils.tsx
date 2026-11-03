// Module ID: 6174
// Function ID: 6175
// Name: markup/ChannelUtils
// Dependencies: [4994, 2]
// Exports: isChannelTypeMentionable

// Module 6174 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 4994 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
}
