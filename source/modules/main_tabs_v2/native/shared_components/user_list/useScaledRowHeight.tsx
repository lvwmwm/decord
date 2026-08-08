// Module ID: 8523
// Function ID: 8524
// Name: useScaledRowHeight
// Dependencies: [4720, 4005, 712, 2]
// Exports: default, useScaledRowHeightData

// Module 8523 (useScaledRowHeight)
let result = require("Themes").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx");

export default function useScaledRowHeight() {
  const fontScale = require(4720) /* getFontScale */.useFontScale();
  const obj = require(4720) /* getFontScale */;
  const token = require(4005) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = require(4005) /* map */;
  const token1 = require(4005) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
};
export const useScaledRowHeightData = function useScaledRowHeightData() {
  let obj = require(4720) /* getFontScale */;
  const fontScale = obj.useFontScale();
  const token = require(4005) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = require(4005) /* map */;
  const token1 = require(4005) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  const result = fontScale * token1;
  obj = { rowHeight: token + Math.max(result - token1, 0), rowContentHeight: result };
  return obj;
};
