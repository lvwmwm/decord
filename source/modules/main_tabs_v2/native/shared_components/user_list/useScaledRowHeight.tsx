// Module ID: 8871
// Function ID: 69833
// Name: useScaledRowHeightData
// Dependencies: [4549, 3834, 689, 2]
// Exports: default

// Module 8871 (useScaledRowHeightData)
function useScaledRowHeightData() {
  let obj = require(4549) /* getFontScale */;
  const fontScale = obj.useFontScale();
  const token = require(3834) /* map */.useToken(importDefault(689).modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = require(3834) /* map */;
  const token1 = require(3834) /* map */.useToken(importDefault(689).modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  const result = fontScale * token1;
  obj = { rowHeight: token + Math.max(result - token1, 0), rowContentHeight: result };
  return obj;
}
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx");

export default function useScaledRowHeight() {
  return useScaledRowHeightData().rowHeight;
};
export { useScaledRowHeightData };
