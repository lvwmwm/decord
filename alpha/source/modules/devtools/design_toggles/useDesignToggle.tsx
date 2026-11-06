// Module ID: 7091
// Function ID: 7092
// Name: useDesignToggle
// Dependencies: [7092, 504, 2]
// Exports: default

// Module 7091 (useDesignToggle)
import DesignTogglesStore from "DesignTogglesStore" /* 7092 */;
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
