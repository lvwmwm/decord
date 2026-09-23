// Module ID: 5929
// Function ID: 5930
// Name: useDesignToggle
// Dependencies: [5930, 504, 2]
// Exports: default

// Module 5929 (useDesignToggle)
import DesignTogglesStore from "DesignTogglesStore" /* 5930 */;

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
