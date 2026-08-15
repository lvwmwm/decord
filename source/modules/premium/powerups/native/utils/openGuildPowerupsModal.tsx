// Module ID: 11648
// Function ID: 11649
// Name: openGuildPowerupsModal
// Dependencies: [5260, 11649, 2007, 2]
// Exports: default

// Module 11648 (openGuildPowerupsModal)
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
  importDefault(5260).pushLazy(require(2007) /* asyncRequireImpl */(11649, dependencyMap.paths), tmp2, "guild_powerups_modal_key", navigationParams.navigationParams);
};
