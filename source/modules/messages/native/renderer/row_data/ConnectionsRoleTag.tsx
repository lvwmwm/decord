// Module ID: 7912
// Function ID: 62968
// Name: createConnectionsRoleTag
// Dependencies: [27, 653, 689, 665, 2]
// Exports: createConnectionsRoleTag

// Module 7912 (createConnectionsRoleTag)
import { processColor } from "get ActivityIndicator";
import { DEFAULT_ROLE_COLOR_HEX } from "ME";

const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/messages/native/renderer/row_data/ConnectionsRoleTag.tsx");

export const createConnectionsRoleTag = function createConnectionsRoleTag(merged) {
  let colorString = merged.colorString;
  if (null == colorString) {
    colorString = DEFAULT_ROLE_COLOR_HEX;
  }
  let PRIMARY_630 = importDefault(689).unsafe_rawColors.WHITE;
  let obj = require(665) /* pad2 */;
  const hex2intResult = obj.hex2int(colorString);
  if (obj2.getDarkness(hex2intResult) < 0.3) {
    PRIMARY_630 = importDefault(689).unsafe_rawColors.PRIMARY_630;
  }
  obj = { id: merged.id, name: merged.name, backgroundColor: processColor(colorString), iconColor: processColor(PRIMARY_630) };
  return obj;
};
