// Module ID: 14326
// Function ID: 14327
// Name: openGuildPowerupsModal
// Dependencies: [6831, 14327, 2118, 2]
// Exports: default

// Module 14326 (openGuildPowerupsModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import size from "module_2" /* 2 */;

let c3 = 0;
const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsModal.tsx");

export default function openGuildPowerupsModal(navigationParams) {
  let sum;
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  let tmp2 = merged;
  if (null != merged.autoOpenPerkId) {
    const obj = { autoOpenRequestId: sum };
    const merged1 = Object.assign(merged);
    sum = c3 + 1;
    c3 = sum;
    tmp2 = obj;
  }
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(14327, dependencyMap.paths), tmp2, "guild_powerups_modal_key", navigationParams);
};
