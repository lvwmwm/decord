// Module ID: 15490
// Function ID: 15491
// Name: useMaybeFetchTieredTenureBadgeData
// Dependencies: [1385, 1387, 504, 11555, 5716, 8882, 2]
// Exports: useMaybeFetchTieredTenureBadgeData

// Module 15490 (useMaybeFetchTieredTenureBadgeData)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import useMountEffectDefault from "useMountEffect" /* 5716 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8882 */;
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
