// Module ID: 5378
// Function ID: 5379
// Name: useDesignToggle
// Dependencies: [5379, 589, 2]
// Exports: default

// Module 5378 (useDesignToggle)
import closure_2 from "getUserAgnosticState" /* 5379 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/devtools/design_toggles/useDesignToggle.tsx");

export default function useDesignToggle(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => closure_1_2.get(closure_0), items1);
};
