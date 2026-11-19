// Module ID: 17717
// Function ID: 17718
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 7472, 12981, 17718, 1113, 3701, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 17717 (FavoritesGuildHeaderActions)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3701 from "module_3701" /* 3701 */;
import IconButton2 from "IconButton" /* 7472 */;
import AssetRegistryDefault from "AssetRegistry" /* 12981 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 17718 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const IconButton = IconButton2.IconButton;
  const intl = intl2.intl;
  return <IconButton variant="secondary" size="sm" icon={AssetRegistryDefault} onPress={FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet} accessibilityLabel={intl.string(_modDef3701.G9fGlP)} maxFontSizeMultiplier={1} />;
}
