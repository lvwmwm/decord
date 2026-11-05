// Module ID: 15591
// Function ID: 15592
// Name: useMaybeFetchTieredTenureBadgeData
// Dependencies: [1385, 1387, 504, 11614, 5731, 8904, 2]
// Exports: useMaybeFetchTieredTenureBadgeData

// Module 15591 (useMaybeFetchTieredTenureBadgeData)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import useMountEffectDefault from "useMountEffect" /* 5731 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8904 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, id, importDefault;

const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx");

export function useMaybeFetchTieredTenureBadgeData() {
  let closure_1;
  let currentUser;
  const items = [UserStore];
  const obj = require("get initialized");
  _require = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = require("useIsPremiumSubscriber");
  importDefault = obj2.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  const tmp = useMountEffectDefault(() => {
    id = undefined;
    if (id != null) {
      id = tmp.id;
    }
    const tmp3 = null != id && closure_1;
    if (tmp3) {
      maybeFetchUserProfileDefault(id.id);
    }
  });
}
