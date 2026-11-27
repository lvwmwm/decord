// Module ID: 13921
// Function ID: 13922
// Name: useMaybeFetchTieredTenureBadgeData
// Dependencies: [1387, 504, 9821, 5604, 6309, 2]
// Exports: useMaybeFetchTieredTenureBadgeData

// Module 13921 (useMaybeFetchTieredTenureBadgeData)
import useMountEffectDefault from "useMountEffect" /* 5604 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 6309 */;
import UserStore from "UserStore" /* 1387 */;
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
