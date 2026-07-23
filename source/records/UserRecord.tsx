// Module ID: 1857
// Function ID: 20446
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1858, 653, 1851, 1859, 1860, 1864, 1865, 1870, 1871, 483, 21, 1392, 1360, 1872, 1867, 1828, 1873, 2]

// Module 1857 (_isNativeReflectConstruct)
import closure_4 from "ME";
import closure_5 from "GuildFeatures";
import DISCORD_EPOCH from "DISCORD_EPOCH";
import hasFlag from "hasFlag";
import isPremiumAtLeast from "isPremiumAtLeast";
import ME from "ME";
import GuildFeatures from "GuildFeatures";
import tmp5 from "Record";
import importDefaultResult from "Record";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ LOCAL_BOT_ID: closure_9, NON_USER_BOT_DISCRIMINATOR: closure_10, PREMIUM_TYPE_NONE: closure_11, UserFlags: closure_12 } = ME);
({ SKU_ID_PURCHASED_FLAGS: closure_13, PremiumTypes: closure_14, PurchasedFlags: closure_15 } = GuildFeatures);
tmp5 = new tmp5({ id: "0" });
let obj = { id: "0" };
let result = require("_possibleConstructorReturn").fileFinishedImporting("records/UserRecord.tsx");

export default tmp5;
export const PLACEHOLDER_USER_RECORD = tmp5;
