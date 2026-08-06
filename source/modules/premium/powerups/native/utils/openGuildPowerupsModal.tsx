// Module ID: 11758
// Function ID: 11759
// Name: openGuildPowerupsModal
// Dependencies: [4490, 11759, 1988, 2]
// Exports: default

// Module 11758 (openGuildPowerupsModal)
let c3 = 0;
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsModal.tsx");

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
  importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(11759, dependencyMap.paths), tmp2, "guild_powerups_modal_key", navigationParams.navigationParams);
};
