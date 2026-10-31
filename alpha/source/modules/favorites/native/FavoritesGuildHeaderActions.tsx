// Module ID: 18198
// Function ID: 18199
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 8028, 11484, 18199, 1113, 3450, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 18198 (FavoritesGuildHeaderActions)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3450 from "module_3450" /* 3450 */;
import IconButton2 from "IconButton" /* 8028 */;
import AssetRegistryDefault from "AssetRegistry" /* 11484 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 18199 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const IconButton = IconButton2.IconButton;
  const intl = intl2.intl;
  return <IconButton variant="secondary" size="sm" icon={AssetRegistryDefault} onPress={FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet} accessibilityLabel={intl.string(_modDef3450.G9fGlP)} maxFontSizeMultiplier={1} />;
}
