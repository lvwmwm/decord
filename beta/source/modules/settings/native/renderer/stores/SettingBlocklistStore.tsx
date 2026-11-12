// Module ID: 16785
// Function ID: 16786
// Name: SettingBlocklistStore
// Dependencies: [5359, 2]

// Module 16785 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5359 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
