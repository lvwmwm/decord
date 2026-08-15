// Module ID: 8633
// Function ID: 8634
// Name: useScaledRowHeight
// Dependencies: [4751, 4097, 712, 2]
// Exports: default, useScaledRowHeightData

// Module 8633 (useScaledRowHeight)
let result = require("Themes").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx");

export default function useScaledRowHeight() {
  const fontScale = require(4751) /* getFontScale */.useFontScale();
  const obj = require(4751) /* getFontScale */;
  const token = require(4097) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = require(4097) /* map */;
  const token1 = require(4097) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
};
export const useScaledRowHeightData = function useScaledRowHeightData() {
  let obj = require(4751) /* getFontScale */;
  const fontScale = obj.useFontScale();
  const token = require(4097) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = require(4097) /* map */;
  const token1 = require(4097) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  const result = fontScale * token1;
  obj = { rowHeight: token + Math.max(result - token1, 0), rowContentHeight: result };
  return obj;
};
