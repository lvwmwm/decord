// Module ID: 18872
// Function ID: 18873
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 7988, 13541, 18873, 1113, 3679, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 18872 (FavoritesGuildHeaderActions)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import _modDef3679 from "module_3679" /* 3679 */;
import IconButton2 from "IconButton" /* 7988 */;
import AssetRegistryDefault from "AssetRegistry" /* 13541 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 18873 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const IconButton = IconButton2.IconButton;
  const intl = intl2.intl;
  return <IconButton variant="secondary" size="sm" icon={AssetRegistryDefault} onPress={FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet} accessibilityLabel={intl.string(_modDef3679.G9fGlP)} maxFontSizeMultiplier={1} />;
}
