// Module ID: 18483
// Function ID: 18484
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 8119, 11648, 18484, 1113, 3606, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 18483 (FavoritesGuildHeaderActions)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3606 from "module_3606" /* 3606 */;
import IconButton2 from "IconButton" /* 8119 */;
import AssetRegistryDefault from "AssetRegistry" /* 11648 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 18484 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const IconButton = IconButton2.IconButton;
  const intl = intl2.intl;
  return <IconButton variant="secondary" size="sm" icon={AssetRegistryDefault} onPress={FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet} accessibilityLabel={intl.string(_modDef3606.G9fGlP)} maxFontSizeMultiplier={1} />;
}
