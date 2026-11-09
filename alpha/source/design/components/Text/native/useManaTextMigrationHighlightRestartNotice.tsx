// Module ID: 16173
// Function ID: 16174
// Name: useManaTextMigrationHighlightRestartNotice
// Dependencies: [19, 5754, 504, 6091, 2]
// Exports: useManaTextMigrationHighlightRestartNotice

// Module 16173 (useManaTextMigrationHighlightRestartNotice)
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6091 */;
import react from "react" /* 19 */;
import DevSettingsStore from "DevSettingsStore" /* 5754 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("design/components/Text/native/useManaTextMigrationHighlightRestartNotice.tsx");

export function useManaTextMigrationHighlightRestartNotice() {
  let ref;
  let obj = require("get initialized");
  const items = [DevSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => DevSettingsStore.get("highlight_mana_text"));
  _require = react.useRef(true);
  const items1 = [stateFromStores];
  const effect = react.useEffect(() => {
    if (ref.current) {
      tmp.current = false;
    } else {
      const obj = actions_AlertActionCreatorsDefault;
      obj.show({ title: "Mana Text Migration Highlighter", body: "Restart the app (force quit and reopen) to see the change." });
    }
  }, items1);
}
