// Module ID: 15362
// Function ID: 15363
// Name: FavoritesGuildHeaderActionButton
// Dependencies: [19, 21, 15363, 7817, 5388, 11657, 15364, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 15362 (FavoritesGuildHeaderActionButton)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useFavoritesGuildHeaderAction").fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = function FavoritesGuildHeaderActionButton() {
  let exitPreview;
  let isPreview;
  let label;
  ({ isPreview, exitPreview, label } = importDefault(15363)());
  const obj = { variant: "secondary", size: "sm", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  obj[2] = importDefault(isPreview ? 5388 : 11657);
  if (!isPreview) {
    exitPreview = require(15364) /* handleCreateCategory */.openFavoritesGuildAddActionSheet;
  }
  obj[3] = exitPreview;
  obj[4] = label;
  return jsx(require(7817) /* IconButton */.IconButton, { variant: "secondary", size: "sm", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
};
