// Module ID: 16072
// Function ID: 16073
// Name: FavoritesGuildHeaderActionButton
// Dependencies: [19, 21, 16073, 8028, 5636, 12131, 16074, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 16072 (FavoritesGuildHeaderActionButton)
import noopAll from "noop" /* 19 */;
import IconButton from "IconButton" /* 8028 */;
import useFavoritesGuildHeaderActionDefault from "useFavoritesGuildHeaderAction" /* 16073 */;
import handleCreateCategory from "handleCreateCategory" /* 16074 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = function FavoritesGuildHeaderActionButton() {
  ({ isPreview, exitPreview, label } = useFavoritesGuildHeaderActionDefault());
  const obj = { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 5636 : 12131), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  if (!isPreview) {
    exitPreview = handleCreateCategory.openFavoritesGuildAddActionSheet;
  }
  obj[3] = exitPreview;
  obj[4] = label;
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 5636 : 12131), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
};
