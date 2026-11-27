// Module ID: 18711
// Function ID: 18712
// Name: useConjureSettingsLoaded
// Dependencies: [7710, 504, 2]
// Exports: default

// Module 18711 (useConjureSettingsLoaded)
import ConjureSettingsStore from "ConjureSettingsStore" /* 7710 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/settings/useConjureSettingsLoaded.tsx");

export default function useConjureSettingsLoaded(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ConjureSettingsStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => null != ConjureSettingsStore.getSettings(closure_0), items1);
};
