// Module ID: 8823
// Function ID: 8824
// Name: useScaledRowHeight
// Dependencies: [4606, 3893, 712, 2]
// Exports: default, useScaledRowHeightData

// Module 8823 (useScaledRowHeight)
let result = require("Themes").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx");

export default function useScaledRowHeight() {
  const fontScale = require(4606) /* getFontScale */.useFontScale();
  const obj = require(4606) /* getFontScale */;
  const token = require(3893) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = require(3893) /* map */;
  const token1 = require(3893) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
};
export const useScaledRowHeightData = function useScaledRowHeightData() {
  let obj = require(4606) /* getFontScale */;
  const fontScale = obj.useFontScale();
  const token = require(3893) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = require(3893) /* map */;
  const token1 = require(3893) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  const result = fontScale * token1;
  obj = { rowHeight: token + Math.max(result - token1, 0), rowContentHeight: result };
  return obj;
};
