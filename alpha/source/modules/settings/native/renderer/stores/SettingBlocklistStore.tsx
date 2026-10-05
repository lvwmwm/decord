// Module ID: 14408
// Function ID: 14409
// Name: SettingBlocklistStore
// Dependencies: [4749, 2]

// Module 14408 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4749 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
