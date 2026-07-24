// Module ID: 15179
// Function ID: 115551
// Name: getIconSize
// Dependencies: [2]
// Exports: getIconSize

// Module 15179 (getIconSize)
let obj = { xxs: 12, xs: 16, sm: 18, md: 24, lg: 32, custom: undefined, refresh_sm: 20 };
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Icon/getIconSize.tsx");

export const getIconSize = function getIconSize(arg0) {
  if ("custom" === arg0) {
    return null;
  } else {
    const obj = {};
    obj.width = obj[arg0];
    obj.height = obj[arg0];
    return obj;
  }
};
export const ICON_SIZE = obj;
