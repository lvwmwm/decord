// Module ID: 12039
// Function ID: 12040
// Name: openGuildPowerupsModal
// Dependencies: [4611, 12040, 2009, 2]
// Exports: default

// Module 12039 (openGuildPowerupsModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4611 from "module_4611" /* 4611 */;

let c3 = 0;
const result = set.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsModal.tsx");

export default function openGuildPowerupsModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  let tmp2 = merged;
  if (null != merged.autoOpenPerkId) {
    const obj = {};
    const merged1 = Object.assign(merged);
    const sum = c3 + 1;
    c3 = sum;
    obj.autoOpenRequestId = sum;
    tmp2 = obj;
  }
  _modDef4611.pushLazy(asyncRequireImpl(12040, dependencyMap.paths), tmp2, "guild_powerups_modal_key", navigationParams.navigationParams);
};
