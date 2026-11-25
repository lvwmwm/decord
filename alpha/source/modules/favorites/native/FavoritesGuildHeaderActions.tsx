// Module ID: 17819
// Function ID: 17820
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 7910, 13113, 17820, 1112, 3856, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 17819 (FavoritesGuildHeaderActions)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import _modDef3856 from "module_3856" /* 3856 */;
import IconButton2 from "IconButton" /* 7910 */;
import AssetRegistryDefault from "AssetRegistry" /* 13113 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 17820 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const IconButton = IconButton2.IconButton;
  const intl = intl2.intl;
  return <IconButton variant="secondary" size="sm" icon={AssetRegistryDefault} onPress={FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet} accessibilityLabel={intl.string(_modDef3856.G9fGlP)} maxFontSizeMultiplier={1} />;
}
