// Module ID: 16684
// Function ID: 16685
// Name: SettingBlocklistStore
// Dependencies: [5335, 2]

// Module 16684 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5335 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
