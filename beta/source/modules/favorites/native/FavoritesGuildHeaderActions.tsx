// Module ID: 15782
// Function ID: 15783
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 15783, 7363, 5993, 11681, 15784, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 15782 (FavoritesGuildHeaderActions)
import Fragment from "Fragment" /* 21 */;
import IconButton2 from "IconButton" /* 7363 */;
import useFavoritesGuildHeaderActionDefault from "useFavoritesGuildHeaderAction" /* 15783 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp5;
const FavoritesGuildAddActionSheet = tmp5(15784);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = function FavoritesGuildHeaderActionButton() {
  let exitPreview;
  let isPreview;
  let label;
  ({ isPreview, exitPreview, label } = useFavoritesGuildHeaderActionDefault());
  const obj = { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 5993 : 11681), onPress: exitPreview, accessibilityLabel: label, maxFontSizeMultiplier: 1 };
  useFavoritesGuildHeaderActionDefault();
  const IconButton = IconButton2.IconButton;
  const tmp4 = jsx;
  if (!isPreview) {
    exitPreview = FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet;
  }
  return tmp4(IconButton, obj);
};
