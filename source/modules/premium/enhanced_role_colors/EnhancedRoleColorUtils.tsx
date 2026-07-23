// Module ID: 1913
// Function ID: 21580
// Name: extractColorStringsFromServerColors
// Dependencies: [653, 665, 2]
// Exports: extractColorStringsFromServerColors, getAuthorHasGradientRole, getIsDefaultErc

// Module 1913 (extractColorStringsFromServerColors)
import { DEFAULT_ROLE_COLOR_HEX } from "ME";

const result = require("set").fileFinishedImporting("modules/premium/enhanced_role_colors/EnhancedRoleColorUtils.tsx");

export const extractColorStringsFromServerColors = function extractColorStringsFromServerColors(colors) {
  const obj = {};
  if (0 === colors.primary_color) {
    let int2hexResult = DEFAULT_ROLE_COLOR_HEX;
  } else {
    int2hexResult = require(665) /* pad2 */.int2hex(colors.primary_color);
    const obj2 = require(665) /* pad2 */;
  }
  obj.primaryColor = int2hexResult;
  let int2hexResult1 = null;
  if (null != colors.secondary_color) {
    int2hexResult1 = require(665) /* pad2 */.int2hex(colors.secondary_color);
    const obj3 = require(665) /* pad2 */;
  }
  obj.secondaryColor = int2hexResult1;
  let int2hexResult2 = null;
  if (null != colors.tertiary_color) {
    int2hexResult2 = require(665) /* pad2 */.int2hex(colors.tertiary_color);
    const obj4 = require(665) /* pad2 */;
  }
  obj.tertiaryColor = int2hexResult2;
  return obj;
};
export const getAuthorHasGradientRole = function getAuthorHasGradientRole(colorStrings) {
  let tmp = null != colorStrings;
  if (tmp) {
    tmp = null != colorStrings.colorStrings && null != colorStrings.colorStrings.primaryColor && null != colorStrings.colorStrings.secondaryColor;
    const tmp2 = null != colorStrings.colorStrings && null != colorStrings.colorStrings.primaryColor && null != colorStrings.colorStrings.secondaryColor;
  }
  return tmp;
};
export const getIsDefaultErc = function getIsDefaultErc(role) {
  let tmp = 0 === role.color;
  if (!tmp) {
    tmp = tmp2;
  }
  return tmp;
};
