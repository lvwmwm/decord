// Module ID: 15830
// Function ID: 15831
// Name: SettingBlocklistStore
// Dependencies: [5163, 2]

// Module 15830 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5163 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
