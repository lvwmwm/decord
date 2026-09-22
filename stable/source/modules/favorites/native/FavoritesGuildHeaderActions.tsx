// Module ID: 16247
// Function ID: 16248
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 16248, 8202, 5762, 12332, 16249, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 16247 (FavoritesGuildHeaderActions)
import IconButton from "IconButton" /* 8202 */;
import useFavoritesGuildHeaderActionDefault from "useFavoritesGuildHeaderAction" /* 16248 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 16249 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = function FavoritesGuildHeaderActionButton() {
  ({ isPreview, exitPreview, label } = useFavoritesGuildHeaderActionDefault());
  const obj = { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 5762 : 12332), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  if (!isPreview) {
    exitPreview = FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet;
  }
  obj.onPress = exitPreview;
  obj.accessibilityLabel = label;
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 5762 : 12332), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
};
