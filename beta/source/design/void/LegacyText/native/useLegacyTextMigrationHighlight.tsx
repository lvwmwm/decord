// Module ID: 8073
// Function ID: 8074
// Name: useLegacyTextMigrationHighlight
// Dependencies: [4835, 4836, 576, 504, 2]
// Exports: useLegacyTextMigrationHighlight

// Module 8073 (useLegacyTextMigrationHighlight)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import DevSettingsStore from "DevSettingsStore" /* 4835 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj = { highlight: { borderWidth: 1, borderColor: nativeDefault.colors.STATUS_DANGER } };
({ borderWidth: 1, borderColor: nativeDefault.colors.STATUS_DANGER });
let closure_3 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("design/void/LegacyText/native/useLegacyTextMigrationHighlight.tsx");

export const useLegacyTextMigrationHighlight = function useLegacyTextMigrationHighlight() {
  const items = [DevSettingsStore];
  let highlight = null;
  const tmp = closure_3();
  const obj = get_initialized;
  if (obj.useStateFromStores(items, () => DevSettingsStore.get("highlight_mana_text"))) {
    highlight = tmp.highlight;
  }
  return highlight;
};
