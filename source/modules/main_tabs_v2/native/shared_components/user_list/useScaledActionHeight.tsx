// Module ID: 8816
// Function ID: 69525
// Name: useScaledActionHeight
// Dependencies: []
// Exports: default

// Module 8816 (useScaledActionHeight)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledActionHeight.tsx");

export default function useScaledActionHeight() {
  const fontScale = require(dependencyMap[0]).useFontScale();
  const obj = require(dependencyMap[0]);
  const token = require(dependencyMap[1]).useToken(importDefault(dependencyMap[2]).modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = require(dependencyMap[1]);
  const token1 = require(dependencyMap[1]).useToken(importDefault(dependencyMap[2]).modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
};
