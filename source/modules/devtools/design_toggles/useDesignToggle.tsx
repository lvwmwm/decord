// Module ID: 5581
// Function ID: 5582
// Name: useDesignToggle
// Dependencies: [5582, 586, 2]
// Exports: default

// Module 5581 (useDesignToggle)
import closure_2 from "getUserAgnosticState" /* 5582 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/devtools/design_toggles/useDesignToggle.tsx");

export default function useDesignToggle(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const items1 = [arg0];
  return _require(586).useStateFromStores(items, () => closure_1_2.get(closure_0), items1);
};
