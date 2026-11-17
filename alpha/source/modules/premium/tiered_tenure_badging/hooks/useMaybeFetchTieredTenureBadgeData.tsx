// Module ID: 15361
// Function ID: 15362
// Name: useMaybeFetchTieredTenureBadgeData
// Dependencies: [1388, 504, 15322, 5893, 8494, 2]
// Exports: useMaybeFetchTieredTenureBadgeData

// Module 15361 (useMaybeFetchTieredTenureBadgeData)
import useMountEffectDefault from "useMountEffect" /* 5893 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8494 */;
import UserStore from "UserStore" /* 1388 */;
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
