// Module ID: 15974
// Function ID: 15975
// Name: SettingBlocklistStore
// Dependencies: [5201, 2]

// Module 15974 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5201 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
