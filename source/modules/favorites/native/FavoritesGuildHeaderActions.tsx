// Module ID: 15158
// Function ID: 15159
// Name: FavoritesGuildHeaderActionButton
// Dependencies: [19, 21, 15159, 7672, 5271, 11496, 15160, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 15158 (FavoritesGuildHeaderActionButton)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useFavoritesGuildHeaderAction").fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = function FavoritesGuildHeaderActionButton() {
  let exitPreview;
  let isPreview;
  let label;
  ({ isPreview, exitPreview, label } = importDefault(15159)());
  const obj = { variant: "secondary", size: "sm", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  obj[2] = importDefault(isPreview ? 5271 : 11496);
  if (!isPreview) {
    exitPreview = require(15160) /* handleAddToFavorites */.openFavoritesGuildAddActionSheet;
  }
  obj[3] = exitPreview;
  obj[4] = label;
  return jsx(require(7672) /* IconButton */.IconButton, { variant: "secondary", size: "sm", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
};
