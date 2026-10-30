// Module ID: 18155
// Function ID: 18156
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 8020, 11450, 18156, 1114, 3447, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 18155 (FavoritesGuildHeaderActions)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1114 */;
import _modDef3447 from "module_3447" /* 3447 */;
import IconButton2 from "IconButton" /* 8020 */;
import AssetRegistryDefault from "AssetRegistry" /* 11450 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 18156 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const IconButton = IconButton2.IconButton;
  const intl = intl2.intl;
  return <IconButton variant="secondary" size="sm" icon={AssetRegistryDefault} onPress={FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet} accessibilityLabel={intl.string(_modDef3447.G9fGlP)} maxFontSizeMultiplier={1} />;
}
