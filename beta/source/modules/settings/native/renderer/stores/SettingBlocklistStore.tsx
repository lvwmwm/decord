// Module ID: 14891
// Function ID: 14892
// Name: SettingBlocklistStore
// Dependencies: [4658, 2]

// Module 14891 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4658 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
