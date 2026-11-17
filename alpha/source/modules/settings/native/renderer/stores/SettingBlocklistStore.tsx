// Module ID: 17094
// Function ID: 17095
// Name: SettingBlocklistStore
// Dependencies: [5499, 2]

// Module 17094 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5499 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
