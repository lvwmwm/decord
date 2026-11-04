// Module ID: 7141
// Function ID: 7142
// Name: useDesignToggle
// Dependencies: [7142, 504, 2]
// Exports: default

// Module 7141 (useDesignToggle)
import DesignTogglesStore from "DesignTogglesStore" /* 7142 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/devtools/design_toggles/useDesignToggle.tsx");

export default function useDesignToggle(arg0) {
  let closure_0;
  _require = arg0;
  const items = [DesignTogglesStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => DesignTogglesStore.get(closure_0), items1);
};
