// Module ID: 14887
// Function ID: 14888
// Name: SettingBlocklistStore
// Dependencies: [4661, 2]

// Module 14887 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4661 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
