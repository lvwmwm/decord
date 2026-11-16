// Module ID: 6219
// Function ID: 6220
// Name: markup/ChannelUtils
// Dependencies: [5023, 2]
// Exports: isChannelTypeMentionable

// Module 6219 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 5023 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
}
