// Module ID: 15216
// Function ID: 15217
// Name: useMaybeFetchTieredTenureBadgeData
// Dependencies: [1385, 504, 15177, 5836, 8417, 2]
// Exports: useMaybeFetchTieredTenureBadgeData

// Module 15216 (useMaybeFetchTieredTenureBadgeData)
import useMountEffectDefault from "useMountEffect" /* 5836 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8417 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, id, importDefault;

const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx");

export function useMaybeFetchTieredTenureBadgeData() {
  let closure_1;
  let currentUser;
  const items = [UserStore];
  const obj = require("get initialized");
  _require = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = require("useCanUseTenureBadge");
  importDefault = obj2.useCanUseTenureBadge();
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
