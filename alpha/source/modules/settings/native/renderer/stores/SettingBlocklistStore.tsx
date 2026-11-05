// Module ID: 16697
// Function ID: 16698
// Name: SettingBlocklistStore
// Dependencies: [5337, 2]

// Module 16697 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5337 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  new Set();
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
