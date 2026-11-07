// Module ID: 18530
// Function ID: 18531
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 8098, 11630, 18531, 1113, 3608, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 18530 (FavoritesGuildHeaderActions)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3608 from "module_3608" /* 3608 */;
import IconButton2 from "IconButton" /* 8098 */;
import AssetRegistryDefault from "AssetRegistry" /* 11630 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 18531 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const IconButton = IconButton2.IconButton;
  const intl = intl2.intl;
  return <IconButton variant="secondary" size="sm" icon={AssetRegistryDefault} onPress={FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet} accessibilityLabel={intl.string(_modDef3608.G9fGlP)} maxFontSizeMultiplier={1} />;
}
