// Module ID: 14671
// Function ID: 14672
// Name: SettingBlocklistStore
// Dependencies: [4506, 2]

// Module 14671 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4506 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
