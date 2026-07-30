// Module ID: 8815
// Function ID: 8816
// Name: useScaledActionHeight
// Dependencies: [4606, 3893, 712, 2]
// Exports: default

// Module 8815 (useScaledActionHeight)
const result = require("Themes").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useScaledActionHeight.tsx");

export default function useScaledActionHeight() {
  const fontScale = require(4606) /* getFontScale */.useFontScale();
  const obj = require(4606) /* getFontScale */;
  const token = require(3893) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_HEIGHT);
  const obj2 = require(3893) /* map */;
  const token1 = require(3893) /* map */.useToken(importDefault(712).modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
};
