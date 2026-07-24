// Module ID: 7669
// Function ID: 60912
// Name: useLegacyTextMigrationHighlight
// Dependencies: [4129, 4130, 689, 566, 2]
// Exports: useLegacyTextMigrationHighlight

// Module 7669 (useLegacyTextMigrationHighlight)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.STATUS_DANGER };
_createForOfIteratorHelperLoose.highlight = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("design/void/LegacyText/native/useLegacyTextMigrationHighlight.tsx");

export const useLegacyTextMigrationHighlight = function useLegacyTextMigrationHighlight() {
  const tmp = _createForOfIteratorHelperLoose();
  const items = [_isNativeReflectConstruct];
  let highlight = null;
  if (obj.useStateFromStores(items, () => outer1_2.get("highlight_mana_text"))) {
    highlight = tmp.highlight;
  }
  return highlight;
};
