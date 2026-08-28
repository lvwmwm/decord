// Module ID: 11977
// Function ID: 11978
// Name: openGuildPowerupsModal
// Dependencies: [4689, 11978, 2010, 2]
// Exports: default

// Module 11977 (openGuildPowerupsModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import _modDef4689 from "module_4689" /* 4689 */;

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
  _modDef4689.pushLazy(asyncRequireImpl(11978, dependencyMap.paths), tmp2, "guild_powerups_modal_key", navigationParams.navigationParams);
};
