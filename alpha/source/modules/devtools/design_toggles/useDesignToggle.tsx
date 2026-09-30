// Module ID: 6134
// Function ID: 6135
// Name: useDesignToggle
// Dependencies: [6135, 504, 2]
// Exports: default

// Module 6134 (useDesignToggle)
import DesignTogglesStore from "DesignTogglesStore" /* 6135 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/design_toggles/useDesignToggle.tsx");

export default function useDesignToggle(arg0) {
  _require = arg0;
  const items = [DesignTogglesStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => DesignTogglesStore.get(closure_0), items1);
};
