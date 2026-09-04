// Module ID: 8543
// Function ID: 8544
// Name: useLegacyTextMigrationHighlight
// Dependencies: [4480, 4481, 709, 586, 2]
// Exports: useLegacyTextMigrationHighlight

// Module 8543 (useLegacyTextMigrationHighlight)
import ThemesDefault from "Themes" /* 709 */;
import closure_2 from "getUserAgnosticState" /* 4480 */;
import createCacheKey from "createCacheKey" /* 4481 */;

const require = arg1;
createCacheKey = { highlight: null };
createCacheKey = { borderWidth: 1, borderColor: ThemesDefault.colors.STATUS_DANGER };
createCacheKey[0] = createCacheKey;
let closure_3 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("design/void/LegacyText/native/useLegacyTextMigrationHighlight.tsx");

export const useLegacyTextMigrationHighlight = function useLegacyTextMigrationHighlight() {
  const tmp = callback();
  const items = [closure_2];
  let highlight = null;
  if (obj.useStateFromStores(items, () => closure_2.get("highlight_mana_text"))) {
    highlight = tmp.highlight;
  }
  return highlight;
};
