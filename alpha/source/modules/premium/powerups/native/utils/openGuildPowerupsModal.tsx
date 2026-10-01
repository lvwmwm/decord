// Module ID: 12188
// Function ID: 12189
// Name: openGuildPowerupsModal
// Dependencies: [5048, 12189, 1981, 2]
// Exports: default

// Module 12188 (openGuildPowerupsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5048 */;
import size from "module_2" /* 2 */;

let c3 = 0;
const result = size.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsModal.tsx");

export default function openGuildPowerupsModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  let tmp2 = merged;
  if (null != merged.autoOpenPerkId) {
    const obj = {};
    const merged1 = Object.assign(merged);
    const sum = c3 + 1;
    c3 = sum;
    obj.autoOpenRequestId = sum;
    tmp2 = obj;
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12189, dependencyMap.paths), tmp2, "guild_powerups_modal_key", navigationParams.navigationParams);
};
