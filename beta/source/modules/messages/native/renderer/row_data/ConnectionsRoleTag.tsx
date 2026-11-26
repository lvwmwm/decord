// Module ID: 14288
// Function ID: 14289
// Name: ConnectionsRoleTag
// Dependencies: [17, 1071, 575, 1089, 2]
// Exports: createConnectionsRoleTag

// Module 14288 (ConnectionsRoleTag)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1089 */;
import size from "module_2" /* 2 */;

const processColor = react_native.processColor;
const DEFAULT_ROLE_COLOR_HEX = Constants.DEFAULT_ROLE_COLOR_HEX;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/ConnectionsRoleTag.tsx");

export function createConnectionsRoleTag(visibleConnectionsRole) {
  let colorString = visibleConnectionsRole.colorString;
  if (colorString == null) {
    colorString = DEFAULT_ROLE_COLOR_HEX;
  }
  let PRIMARY_630 = nativeDefault.unsafe_rawColors.WHITE;
  const obj = utils_ColorUtils;
  const hex2intResult = obj.hex2int(colorString);
  const obj2 = utils_ColorUtils;
  if (obj2.getDarkness(hex2intResult) < 0.3) {
    PRIMARY_630 = nativeDefault.unsafe_rawColors.PRIMARY_630;
  }
  const obj3 = { id: visibleConnectionsRole.id, name: visibleConnectionsRole.name, backgroundColor: processColor(colorString), iconColor: processColor(PRIMARY_630) };
  return obj3;
}
