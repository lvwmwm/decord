// Module ID: 16782
// Function ID: 16783
// Name: SettingBlocklistStore
// Dependencies: [5359, 2]

// Module 16782 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5359 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
