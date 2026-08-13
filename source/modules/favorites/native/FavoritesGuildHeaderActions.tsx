// Module ID: 15347
// Function ID: 15348
// Name: FavoritesGuildHeaderActionButton
// Dependencies: [19, 21, 15348, 7796, 5367, 11641, 15349, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 15347 (FavoritesGuildHeaderActionButton)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useFavoritesGuildHeaderAction").fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = function FavoritesGuildHeaderActionButton() {
  let exitPreview;
  let isPreview;
  let label;
  ({ isPreview, exitPreview, label } = importDefault(15348)());
  const obj = { variant: "secondary", size: "sm", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  obj[2] = importDefault(isPreview ? 5367 : 11641);
  if (!isPreview) {
    exitPreview = require(15349) /* handleCreateCategory */.openFavoritesGuildAddActionSheet;
  }
  obj[3] = exitPreview;
  obj[4] = label;
  return jsx(require(7796) /* IconButton */.IconButton, { variant: "secondary", size: "sm", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
};
