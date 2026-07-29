// Module ID: 15124
// Function ID: 15125
// Name: FavoritesGuildHeaderActionButton
// Dependencies: [19, 21, 15125, 6682, 5176, 11373, 15126, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 15124 (FavoritesGuildHeaderActionButton)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useFavoritesGuildHeaderAction").fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = function FavoritesGuildHeaderActionButton() {
  let exitPreview;
  let isPreview;
  let label;
  ({ isPreview, exitPreview, label } = importDefault(15125)());
  const obj = { variant: "secondary", size: "sm", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  obj[2] = importDefault(isPreview ? 5176 : 11373);
  if (!isPreview) {
    exitPreview = require(15126) /* handleAddToFavorites */.openFavoritesGuildAddActionSheet;
  }
  obj[3] = exitPreview;
  obj[4] = label;
  return jsx(require(6682) /* IconButton */.IconButton, { variant: "secondary", size: "sm", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
};
