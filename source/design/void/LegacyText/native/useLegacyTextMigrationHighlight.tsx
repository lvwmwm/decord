// Module ID: 8116
// Function ID: 8117
// Name: useLegacyTextMigrationHighlight
// Dependencies: [4737, 4661, 712, 589, 2]
// Exports: useLegacyTextMigrationHighlight

// Module 8116 (useLegacyTextMigrationHighlight)
import getUserAgnosticState from "getUserAgnosticState";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { highlight: null };
createCacheKey = { borderWidth: 1, borderColor: require("Themes").colors.STATUS_DANGER };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("Themes").fileFinishedImporting("design/void/LegacyText/native/useLegacyTextMigrationHighlight.tsx");

export const useLegacyTextMigrationHighlight = function useLegacyTextMigrationHighlight() {
  const tmp = createCacheKey();
  const items = [getUserAgnosticState];
  let highlight = null;
  if (obj.useStateFromStores(items, () => getUserAgnosticState.get("highlight_mana_text"))) {
    highlight = tmp.highlight;
  }
  return highlight;
};
