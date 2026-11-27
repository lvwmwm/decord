// Module ID: 17883
// Function ID: 17884
// Name: FavoritesGuildHeaderActions
// Dependencies: [19, 21, 7944, 13173, 17884, 1112, 3857, 2]
// Exports: FavoritesGuildHeaderActionButton

// Module 17883 (FavoritesGuildHeaderActions)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import _modDef3857 from "module_3857" /* 3857 */;
import IconButton2 from "IconButton" /* 7944 */;
import AssetRegistryDefault from "AssetRegistry" /* 13173 */;
import FavoritesGuildAddActionSheet from "FavoritesGuildAddActionSheet" /* 17884 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildHeaderActions.tsx");

export function FavoritesGuildHeaderActionButton() {
  const IconButton = IconButton2.IconButton;
  const intl = intl2.intl;
  return <IconButton variant="secondary" size="sm" icon={AssetRegistryDefault} onPress={FavoritesGuildAddActionSheet.openFavoritesGuildAddActionSheet} accessibilityLabel={intl.string(_modDef3857.G9fGlP)} maxFontSizeMultiplier={1} />;
}
