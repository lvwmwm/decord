// Module ID: 14141
// Function ID: 14142
// Name: SettingBlocklistStore
// Dependencies: [4705, 2]

// Module 14141 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4705 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
