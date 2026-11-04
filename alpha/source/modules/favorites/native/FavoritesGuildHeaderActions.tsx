// Module ID: 18463
// Function ID: 18464
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 8168, 11674, 18464, 1113, 3577, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 18463 (FavoritesGuildHeaderActions)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3577 from "module_3577" /* 3577 */;
import IconButton2 from "IconButton" /* 8168 */;
import AssetRegistryDefault from "AssetRegistry" /* 11674 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 18464 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const IconButton = IconButton2.IconButton;
  const intl = intl2.intl;
  return <IconButton variant="secondary" size="sm" icon={AssetRegistryDefault} onPress={FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet} accessibilityLabel={intl.string(_modDef3577.G9fGlP)} maxFontSizeMultiplier={1} />;
}
