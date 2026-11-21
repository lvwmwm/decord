// Module ID: 17668
// Function ID: 17669
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 7591, 13073, 17669, 1112, 3802, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 17668 (FavoritesGuildHeaderActions)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import _modDef3802 from "module_3802" /* 3802 */;
import IconButton2 from "IconButton" /* 7591 */;
import AssetRegistryDefault from "AssetRegistry" /* 13073 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 17669 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const IconButton = IconButton2.IconButton;
  const intl = intl2.intl;
  return <IconButton variant="secondary" size="sm" icon={AssetRegistryDefault} onPress={FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet} accessibilityLabel={intl.string(_modDef3802.G9fGlP)} maxFontSizeMultiplier={1} />;
}
