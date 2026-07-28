// Module ID: 15091
// Function ID: 114837
// Name: FavoritesGuildHeaderActionButton
// Dependencies: [31, 33, 15092, 6661, 5154, 11349, 15093, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 15091 (FavoritesGuildHeaderActionButton)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useFavoritesGuildHeaderAction").fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = function FavoritesGuildHeaderActionButton() {
  let exitPreview;
  let isPreview;
  const tmp2 = importDefault(15092)();
  ({ isPreview, exitPreview } = tmp2);
  const obj = { variant: "secondary", size: "sm" };
  if (isPreview) {
    let tmp5 = 5154;
  } else {
    tmp5 = 11349;
  }
  obj.icon = importDefault(tmp5);
  if (!isPreview) {
    exitPreview = require(15093) /* handleAddToFavorites */.openFavoritesGuildAddActionSheet;
  }
  obj.onPress = exitPreview;
  obj.accessibilityLabel = tmp2.label;
  obj.maxFontSizeMultiplier = 1;
  return jsx(require(6661) /* IconButton */.IconButton, { variant: "secondary", size: "sm" });
};
