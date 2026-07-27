// Module ID: 15048
// Function ID: 114664
// Name: FavoritesGuildHeaderActionButton
// Dependencies: [31, 33, 15049, 6625, 5120, 11311, 15050, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 15048 (FavoritesGuildHeaderActionButton)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useFavoritesGuildHeaderAction").fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = function FavoritesGuildHeaderActionButton() {
  let exitPreview;
  let isPreview;
  const tmp2 = importDefault(15049)();
  ({ isPreview, exitPreview } = tmp2);
  const obj = { variant: "secondary", size: "sm" };
  if (isPreview) {
    let tmp5 = 5120;
  } else {
    tmp5 = 11311;
  }
  obj.icon = importDefault(tmp5);
  if (!isPreview) {
    exitPreview = require(15050) /* handleAddToFavorites */.openFavoritesGuildAddActionSheet;
  }
  obj.onPress = exitPreview;
  obj.accessibilityLabel = tmp2.label;
  obj.maxFontSizeMultiplier = 1;
  return jsx(require(6625) /* IconButton */.IconButton, { variant: "secondary", size: "sm" });
};
