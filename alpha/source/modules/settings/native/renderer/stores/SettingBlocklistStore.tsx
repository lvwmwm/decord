// Module ID: 16025
// Function ID: 16026
// Name: SettingBlocklistStore
// Dependencies: [5232, 2]

// Module 16025 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5232 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
