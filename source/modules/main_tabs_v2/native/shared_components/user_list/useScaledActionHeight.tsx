// Module ID: 8863
// Function ID: 69793
// Name: useScaledActionHeight
// Dependencies: [4549, 3834, 689, 2]
// Exports: default

// Module 8863 (useScaledActionHeight)
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledActionHeight.tsx");

export default function useScaledActionHeight() {
  const fontScale = require(4549) /* getFontScale */.useFontScale();
  const obj = require(4549) /* getFontScale */;
  const token = require(3834) /* map */.useToken(importDefault(689).modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = require(3834) /* map */;
  const token1 = require(3834) /* map */.useToken(importDefault(689).modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
};
