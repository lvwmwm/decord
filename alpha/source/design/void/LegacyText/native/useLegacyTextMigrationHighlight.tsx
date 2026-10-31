// Module ID: 8195
// Function ID: 8196
// Name: useLegacyTextMigrationHighlight
// Dependencies: [5627, 5014, 575, 504, 2]
// Exports: useLegacyTextMigrationHighlight

// Module 8195 (useLegacyTextMigrationHighlight)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import DevSettingsStore from "DevSettingsStore" /* 5627 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj = { highlight: { borderWidth: 1, borderColor: nativeDefault.colors.STATUS_DANGER } };
({ borderWidth: 1, borderColor: nativeDefault.colors.STATUS_DANGER });
let closure_3 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("design/void/LegacyText/native/useLegacyTextMigrationHighlight.tsx");

export function useLegacyTextMigrationHighlight() {
  const items = [DevSettingsStore];
  let highlight = null;
  const tmp = closure_3();
  const obj = get_initialized;
  if (obj.useStateFromStores(items, () => DevSettingsStore.get("highlight_mana_text"))) {
    highlight = tmp.highlight;
  }
  return highlight;
}
