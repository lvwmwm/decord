// Module ID: 17477
// Function ID: 17478
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 558, 576, 7943, 11116, 17478, 1128, 3412, 2]

// Module 17477 (FavoritesGuildHeaderActions)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1128 */;
import _modDef3412 from "module_3412" /* 3412 */;
import IconButton2 from "IconButton" /* 7943 */;
import AssetRegistryDefault from "AssetRegistry" /* 11116 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 17478 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function FavoritesGuildHeaderActionButton() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const IconButton = tmp(7943).IconButton;
    const intl = tmp(1128).intl;
    const tmp7 = <IconButton variant="secondary" size="sm" icon={AssetRegistryDefault} onPress={FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet} accessibilityLabel={intl.string(_modDef3412.G9fGlP)} maxFontSizeMultiplier={1} />;
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function FavoritesGuildHeaderActionButton() {
  const IconButton = IconButton2.IconButton;
  const intl = intl2.intl;
  return <IconButton variant="secondary" size="sm" icon={AssetRegistryDefault} onPress={FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet} accessibilityLabel={intl.string(_modDef3412.G9fGlP)} maxFontSizeMultiplier={1} />;
});
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export const FavoritesGuildHeaderActionButton = tmp3;
