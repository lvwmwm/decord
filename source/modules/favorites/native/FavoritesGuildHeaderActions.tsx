// Module ID: 15199
// Function ID: 15200
// Name: FavoritesGuildHeaderActionButton
// Dependencies: [19, 21, 15200, 7691, 5326, 11517, 15201, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 15199 (FavoritesGuildHeaderActionButton)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useFavoritesGuildHeaderAction").fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = function FavoritesGuildHeaderActionButton() {
  let exitPreview;
  let isPreview;
  let label;
  ({ isPreview, exitPreview, label } = importDefault(15200)());
  const obj = { variant: "secondary", size: "sm", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  obj[2] = importDefault(isPreview ? 5326 : 11517);
  if (!isPreview) {
    exitPreview = require(15201) /* handleCreateCategory */.openFavoritesGuildAddActionSheet;
  }
  obj[3] = exitPreview;
  obj[4] = label;
  return jsx(require(7691) /* IconButton */.IconButton, { variant: "secondary", size: "sm", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
};
