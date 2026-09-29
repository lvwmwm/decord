// Module ID: 16492
// Function ID: 16493
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 16493, 8211, 5930, 12481, 16494, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 16492 (FavoritesGuildHeaderActions)
import IconButton from "IconButton" /* 8211 */;
import useFavoritesGuildHeaderActionDefault from "useFavoritesGuildHeaderAction" /* 16493 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 16494 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = function FavoritesGuildHeaderActionButton() {
  ({ isPreview, exitPreview, label } = useFavoritesGuildHeaderActionDefault());
  const obj = { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 5930 : 12481), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  if (!isPreview) {
    exitPreview = FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet;
  }
  obj.onPress = exitPreview;
  obj.accessibilityLabel = label;
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 5930 : 12481), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
};
