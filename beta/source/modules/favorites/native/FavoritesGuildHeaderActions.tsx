// Module ID: 16489
// Function ID: 16490
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 558, 568, 16490, 5847, 12345, 16491, 8178, 2]

// Module 16489 (FavoritesGuildHeaderActions)
import c from "c" /* 568 */;
import IconButton from "IconButton" /* 8178 */;
import useFavoritesGuildHeaderActionDefault from "useFavoritesGuildHeaderAction" /* 16490 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 16491 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  const tmp4 = importDefault;
  ({ isPreview, label, exitPreview } = useFavoritesGuildHeaderActionDefault());
  const tmp4Result = tmp4(isPreview ? 5847 : 12345);
  if (!isPreview) {
    exitPreview = tmp(16491).openFavoritesGuildAddActionSheet;
  }
  if (cResult[0] === label) {
    if (cResult[1] === tmp4Result) {
      if (cResult[2] === exitPreview) {
        let tmp7 = cResult[3];
      }
      return tmp7;
    }
  }
  const tmp8 = jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: tmp4Result, onPress: exitPreview, accessibilityLabel: label, maxFontSizeMultiplier: 1 });
  cResult[0] = label;
  cResult[1] = tmp4Result;
  cResult[2] = exitPreview;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : (() => {
  ({ isPreview, exitPreview, label } = useFavoritesGuildHeaderActionDefault());
  const obj = { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 5847 : 12345), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 };
  if (!isPreview) {
    exitPreview = FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet;
  }
  obj.onPress = exitPreview;
  obj.accessibilityLabel = label;
  return jsx(IconButton.IconButton, { variant: "secondary", size: "sm", icon: importDefault(isPreview ? 5847 : 12345), onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1 });
});
