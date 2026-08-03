// Module ID: 7798
// Function ID: 7799
// Name: useLegacyTextMigrationHighlight
// Dependencies: [4254, 4255, 712, 589, 2]
// Exports: useLegacyTextMigrationHighlight

// Module 7798 (useLegacyTextMigrationHighlight)
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
