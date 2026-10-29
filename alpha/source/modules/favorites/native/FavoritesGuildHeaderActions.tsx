// Module ID: 18094
// Function ID: 18095
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 558, 576, 8014, 11245, 18095, 1125, 3446, 2]

// Module 18094 (FavoritesGuildHeaderActions)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1125 */;
import _modDef3446 from "module_3446" /* 3446 */;
import IconButton2 from "IconButton" /* 8014 */;
import AssetRegistryDefault from "AssetRegistry" /* 11245 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 18095 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function FavoritesGuildHeaderActionButton() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const IconButton = tmp(8014).IconButton;
    const intl = tmp(1125).intl;
    const tmp7 = <IconButton variant="secondary" size="sm" icon={AssetRegistryDefault} onPress={FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet} accessibilityLabel={intl.string(_modDef3446.G9fGlP)} maxFontSizeMultiplier={1} />;
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function FavoritesGuildHeaderActionButton() {
  const IconButton = IconButton2.IconButton;
  const intl = intl2.intl;
  return <IconButton variant="secondary" size="sm" icon={AssetRegistryDefault} onPress={FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet} accessibilityLabel={intl.string(_modDef3446.G9fGlP)} maxFontSizeMultiplier={1} />;
});
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = tmp3;
