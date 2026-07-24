// Module ID: 11542
// Function ID: 89929
// Name: openGuildPowerupsModal
// Dependencies: [4337, 11543, 1934, 2]
// Exports: default

// Module 11542 (openGuildPowerupsModal)
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
  importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(11543, dependencyMap.paths), tmp3, "guild_powerups_modal_key", navigationParams.navigationParams);
};
