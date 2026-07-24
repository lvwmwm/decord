// Module ID: 14726
// Function ID: 112237
// Name: useManaTextMigrationHighlightRestartNotice
// Dependencies: [31, 4129, 566, 4471, 2]
// Exports: useManaTextMigrationHighlightRestartNotice

// Module 14726 (useManaTextMigrationHighlightRestartNotice)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("design/components/Text/native/useManaTextMigrationHighlightRestartNotice.tsx");

export const useManaTextMigrationHighlightRestartNotice = function useManaTextMigrationHighlightRestartNotice() {
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_4.get("highlight_mana_text"));
  _require = React.useRef(true);
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (ref.current) {
      ref.current = false;
    } else {
      outer1_1(outer1_2[3]).show({ title: "Mana Text Migration Highlighter", body: "Restart the app (force quit and reopen) to see the change." });
      const obj = outer1_1(outer1_2[3]);
    }
  }, items1);
};
