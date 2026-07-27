// Module ID: 11509
// Function ID: 89651
// Name: openGuildPowerupsModal
// Dependencies: [4338, 11510, 1935, 2]
// Exports: default

// Module 11509 (openGuildPowerupsModal)
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
  importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(11510, dependencyMap.paths), tmp3, "guild_powerups_modal_key", navigationParams.navigationParams);
};
