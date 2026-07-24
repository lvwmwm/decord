// Module ID: 5507
// Function ID: 46941
// Name: getHigherContrastColor
// Dependencies: [57, 665, 2]
// Exports: getHigherContrastColor

// Module 5507 (getHigherContrastColor)
import _slicedToArray from "_slicedToArray";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_profile/utils/getHigherContrastColor.tsx");

export const getHigherContrastColor = function getHigherContrastColor(backgroundColor) {
  backgroundColor = backgroundColor.backgroundColor;
  const tmp = callback(backgroundColor.colors, 2);
  const first = tmp[0];
  let tmp3 = tmp[1];
  let hex2intResult = backgroundColor;
  if ("string" === typeof backgroundColor) {
    hex2intResult = require(665) /* pad2 */.hex2int(backgroundColor);
    const obj = require(665) /* pad2 */;
  }
  let hex2intResult1 = first;
  if ("string" === typeof first) {
    hex2intResult1 = require(665) /* pad2 */.hex2int(first);
    const obj2 = require(665) /* pad2 */;
  }
  let hex2intResult2 = tmp3;
  if ("string" === typeof tmp3) {
    hex2intResult2 = require(665) /* pad2 */.hex2int(tmp3);
    const obj3 = require(665) /* pad2 */;
  }
  const contrast = require(665) /* pad2 */.getContrast(hex2intResult, hex2intResult1);
  const obj4 = require(665) /* pad2 */;
  if (contrast > obj5.getContrast(hex2intResult, hex2intResult2)) {
    tmp3 = first;
  }
  return tmp3;
};
