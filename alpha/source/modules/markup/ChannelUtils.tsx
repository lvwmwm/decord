// Module ID: 5421
// Function ID: 5422
// Name: markup/ChannelUtils
// Dependencies: [2068, 2]
// Exports: isChannelTypeMentionable

// Module 5421 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 2068 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export const isChannelTypeMentionable = function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
};
