// Module ID: 18911
// Function ID: 18912
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 7999, 13692, 18912, 1113, 3681, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 18911 (FavoritesGuildHeaderActions)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3681 from "module_3681" /* 3681 */;
import IconButton2 from "IconButton" /* 7999 */;
import AssetRegistryDefault from "AssetRegistry" /* 13692 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 18912 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const IconButton = IconButton2.IconButton;
  const intl = intl2.intl;
  return <IconButton variant="secondary" size="sm" icon={AssetRegistryDefault} onPress={FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet} accessibilityLabel={intl.string(_modDef3681.G9fGlP)} maxFontSizeMultiplier={1} />;
}
