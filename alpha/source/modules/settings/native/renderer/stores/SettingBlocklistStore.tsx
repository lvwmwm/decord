// Module ID: 14342
// Function ID: 14343
// Name: SettingBlocklistStore
// Dependencies: [4735, 2]

// Module 14342 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4735 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
