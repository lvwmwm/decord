// Module ID: 8824
// Function ID: 69554
// Name: useScaledRowHeightData
// Dependencies: []
// Exports: default

// Module 8824 (useScaledRowHeightData)
function useScaledRowHeightData() {
  let obj = require(dependencyMap[0]);
  const fontScale = obj.useFontScale();
  const token = require(dependencyMap[1]).useToken(importDefault(dependencyMap[2]).modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = require(dependencyMap[1]);
  const token1 = require(dependencyMap[1]).useToken(importDefault(dependencyMap[2]).modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  const result = fontScale * token1;
  obj = { rowHeight: token + Math.max(result - token1, 0), rowContentHeight: result };
  return obj;
}
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx");

export default function useScaledRowHeight() {
  return useScaledRowHeightData().rowHeight;
};
export { useScaledRowHeightData };
