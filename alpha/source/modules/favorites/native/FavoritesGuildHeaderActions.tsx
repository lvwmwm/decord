// Module ID: 17544
// Function ID: 17545
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 7471, 12951, 17545, 1112, 3703, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 17544 (FavoritesGuildHeaderActions)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import _modDef3703 from "module_3703" /* 3703 */;
import IconButton2 from "IconButton" /* 7471 */;
import AssetRegistryDefault from "AssetRegistry" /* 12951 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 17545 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const IconButton = IconButton2.IconButton;
  const intl = intl2.intl;
  return <IconButton variant="secondary" size="sm" icon={AssetRegistryDefault} onPress={FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet} accessibilityLabel={intl.string(_modDef3703.G9fGlP)} maxFontSizeMultiplier={1} />;
}
