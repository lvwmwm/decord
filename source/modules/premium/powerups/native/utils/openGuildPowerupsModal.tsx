// Module ID: 11501
// Function ID: 89621
// Name: openGuildPowerupsModal
// Dependencies: []
// Exports: default

// Module 11501 (openGuildPowerupsModal)
let closure_3 = 0;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsModal.tsx");

export default function openGuildPowerupsModal(navigationParams) {
  let obj = Object.create(null);
  obj.navigationParams = 0;
  const merged = Object.assign(navigationParams, obj);
  let tmp3 = merged;
  if (null != merged.autoOpenPerkId) {
    obj = {};
    const merged1 = Object.assign(merged);
    const sum = closure_3 + 1;
    closure_3 = sum;
    obj["autoOpenRequestId"] = sum;
    tmp3 = obj;
  }
  importDefault(dependencyMap[0]).pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), tmp3, "guild_powerups_modal_key", navigationParams.navigationParams);
};
