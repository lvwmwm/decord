// Module ID: 8751
// Function ID: 69272
// Name: useScaledActionHeight
// Dependencies: [4550, 3835, 689, 2]
// Exports: default

// Module 8751 (useScaledActionHeight)
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledActionHeight.tsx");

export default function useScaledActionHeight() {
  const fontScale = require(4550) /* getFontScale */.useFontScale();
  const obj = require(4550) /* getFontScale */;
  const token = require(3835) /* map */.useToken(importDefault(689).modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = require(3835) /* map */;
  const token1 = require(3835) /* map */.useToken(importDefault(689).modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
};
