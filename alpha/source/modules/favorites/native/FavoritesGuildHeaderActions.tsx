// Module ID: 18744
// Function ID: 18745
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 7922, 13442, 18745, 1113, 3629, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 18744 (FavoritesGuildHeaderActions)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3629 from "module_3629" /* 3629 */;
import IconButton2 from "IconButton" /* 7922 */;
import AssetRegistryDefault from "AssetRegistry" /* 13442 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 18745 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const IconButton = IconButton2.IconButton;
  const intl = intl2.intl;
  return <IconButton variant="secondary" size="sm" icon={AssetRegistryDefault} onPress={FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet} accessibilityLabel={intl.string(_modDef3629.G9fGlP)} maxFontSizeMultiplier={1} />;
}
