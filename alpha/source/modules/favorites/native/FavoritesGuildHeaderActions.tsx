// Module ID: 18572
// Function ID: 18573
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 8102, 11639, 18573, 1113, 3608, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 18572 (FavoritesGuildHeaderActions)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3608 from "module_3608" /* 3608 */;
import IconButton2 from "IconButton" /* 8102 */;
import AssetRegistryDefault from "AssetRegistry" /* 11639 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 18573 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const IconButton = IconButton2.IconButton;
  const intl = intl2.intl;
  return <IconButton variant="secondary" size="sm" icon={AssetRegistryDefault} onPress={FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet} accessibilityLabel={intl.string(_modDef3608.G9fGlP)} maxFontSizeMultiplier={1} />;
}
