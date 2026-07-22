// Module ID: 15016
// Function ID: 113061
// Name: getIconSize
// Dependencies: []
// Exports: getIconSize

// Module 15016 (getIconSize)
const obj = { custom: undefined };
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/design/components/Icon/getIconSize.tsx");

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
