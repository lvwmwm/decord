// Module ID: 5225
// Function ID: 5226
// Name: useDesignToggle
// Dependencies: [5226, 589, 2]
// Exports: default

// Module 5225 (useDesignToggle)
import getUserAgnosticState from "getUserAgnosticState";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/devtools/design_toggles/useDesignToggle.tsx");

export default function useDesignToggle(arg0) {
  const _require = arg0;
  const items = [getUserAgnosticState];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => outer1_2.get(closure_0), items1);
};
