// Module ID: 11508
// Function ID: 89646
// Name: openGuildPowerupsModal
// Dependencies: [4338, 11509, 1935, 2]
// Exports: default

// Module 11508 (openGuildPowerupsModal)
let c3 = 0;
const result = require("maybeLoadBundle").fileFinishedImporting("modules/premium/powerups/native/utils/openGuildPowerupsModal.tsx");

export default function openGuildPowerupsModal(navigationParams) {
  let obj = Object.create(null);
  obj.navigationParams = 0;
  const merged = Object.assign(navigationParams, obj);
  let tmp3 = merged;
  if (null != merged.autoOpenPerkId) {
    obj = {};
    const merged1 = Object.assign(merged);
    const sum = c3 + 1;
    c3 = sum;
    obj["autoOpenRequestId"] = sum;
    tmp3 = obj;
  }
  importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(11509, dependencyMap.paths), tmp3, "guild_powerups_modal_key", navigationParams.navigationParams);
};
