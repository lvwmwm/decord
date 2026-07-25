// Module ID: 8759
// Function ID: 69312
// Name: useScaledRowHeightData
// Dependencies: [4550, 3835, 689, 2]
// Exports: default

// Module 8759 (useScaledRowHeightData)
function useScaledRowHeightData() {
  let obj = require(4550) /* getFontScale */;
  const fontScale = obj.useFontScale();
  const token = require(3835) /* map */.useToken(importDefault(689).modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = require(3835) /* map */;
  const token1 = require(3835) /* map */.useToken(importDefault(689).modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  const result = fontScale * token1;
  obj = { rowHeight: token + Math.max(result - token1, 0), rowContentHeight: result };
  return obj;
}
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx");

export default function useScaledRowHeight() {
  return useScaledRowHeightData().rowHeight;
};
export { useScaledRowHeightData };
