// Module ID: 14755
// Function ID: 14756
// Name: SettingBlocklistStore
// Dependencies: [4950, 2]

// Module 14755 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4950 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
