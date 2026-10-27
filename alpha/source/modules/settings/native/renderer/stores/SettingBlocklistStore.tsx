// Module ID: 15868
// Function ID: 15869
// Name: SettingBlocklistStore
// Dependencies: [5164, 2]

// Module 15868 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5164 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
