// Module ID: 8446
// Function ID: 8447
// Name: useScaledRowHeight
// Dependencies: [4701, 3988, 712, 2]
// Exports: default, useScaledRowHeightData

// Module 8446 (useScaledRowHeight)
let result = require("Themes").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx");

export default function useScaledRowHeight() {
  const fontScale = require(4701) /* getFontScale */.useFontScale();
  const obj = require(4701) /* getFontScale */;
  const token = require(3988) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = require(3988) /* map */;
  const token1 = require(3988) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
};
export const useScaledRowHeightData = function useScaledRowHeightData() {
  let obj = require(4701) /* getFontScale */;
  const fontScale = obj.useFontScale();
  const token = require(3988) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = require(3988) /* map */;
  const token1 = require(3988) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  const result = fontScale * token1;
  obj = { rowHeight: token + Math.max(result - token1, 0), rowContentHeight: result };
  return obj;
};
