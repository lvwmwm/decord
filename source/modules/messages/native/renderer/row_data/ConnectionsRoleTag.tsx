// Module ID: 7906
// Function ID: 62921
// Name: createConnectionsRoleTag
// Dependencies: []
// Exports: createConnectionsRoleTag

// Module 7906 (createConnectionsRoleTag)
const processColor = require(dependencyMap[0]).processColor;
const DEFAULT_ROLE_COLOR_HEX = require(dependencyMap[1]).DEFAULT_ROLE_COLOR_HEX;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/row_data/ConnectionsRoleTag.tsx");

export const createConnectionsRoleTag = function createConnectionsRoleTag(merged) {
  let colorString = merged.colorString;
  if (null == colorString) {
    colorString = DEFAULT_ROLE_COLOR_HEX;
  }
  let PRIMARY_630 = importDefault(dependencyMap[2]).unsafe_rawColors.WHITE;
  let obj = require(dependencyMap[3]);
  const hex2intResult = obj.hex2int(colorString);
  if (obj2.getDarkness(hex2intResult) < 0.3) {
    PRIMARY_630 = importDefault(dependencyMap[2]).unsafe_rawColors.PRIMARY_630;
  }
  obj = { id: merged.id, name: merged.name, backgroundColor: processColor(colorString), iconColor: processColor(PRIMARY_630) };
  return obj;
};
