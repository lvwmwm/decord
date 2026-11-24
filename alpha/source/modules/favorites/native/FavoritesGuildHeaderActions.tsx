// Module ID: 17708
// Function ID: 17709
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 7811, 12990, 17709, 1112, 3804, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 17708 (FavoritesGuildHeaderActions)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import _modDef3804 from "module_3804" /* 3804 */;
import IconButton2 from "IconButton" /* 7811 */;
import AssetRegistryDefault from "AssetRegistry" /* 12990 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 17709 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const IconButton = IconButton2.IconButton;
  const intl = intl2.intl;
  return <IconButton variant="secondary" size="sm" icon={AssetRegistryDefault} onPress={FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet} accessibilityLabel={intl.string(_modDef3804.G9fGlP)} maxFontSizeMultiplier={1} />;
}
