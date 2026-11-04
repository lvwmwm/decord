// Module ID: 18211
// Function ID: 18212
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 8028, 11485, 18212, 1113, 3450, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 18211 (FavoritesGuildHeaderActions)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3450 from "module_3450" /* 3450 */;
import IconButton2 from "IconButton" /* 8028 */;
import AssetRegistryDefault from "AssetRegistry" /* 11485 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 18212 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const IconButton = IconButton2.IconButton;
  const intl = intl2.intl;
  return <IconButton variant="secondary" size="sm" icon={AssetRegistryDefault} onPress={FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet} accessibilityLabel={intl.string(_modDef3450.G9fGlP)} maxFontSizeMultiplier={1} />;
}
