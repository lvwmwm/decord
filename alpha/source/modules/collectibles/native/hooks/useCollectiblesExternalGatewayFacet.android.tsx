// Module ID: 14654
// Function ID: 14655
// Name: useCollectiblesExternalGatewayFacet
// Dependencies: [19, 1385, 504, 9704, 2]
// Exports: default

// Module 14654 (useCollectiblesExternalGatewayFacet)
import react from "react" /* 19 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 9704 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useMemo = react.useMemo;
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useCollectiblesExternalGatewayFacet.android.tsx");

export default function useCollectiblesExternalGatewayFacet(arg0) {
  let closure_0;
  let currentUser;
  let stateFromStores;
  _require = arg0;
  let obj = require("get initialized");
  let items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [stateFromStores, arg0];
  return useMemo(() => {
    let items;
    const obj = collectibles_CollectiblesUtils;
    const collectibleGoogleSkuId = obj.getCollectibleGoogleSkuId(closure_0, stateFromStores);
    if (null != collectibleGoogleSkuId) {
      const obj2 = { line_items: items };
      items = [{ external_product_id: collectibleGoogleSkuId }];
      return obj2;
    }
  }, items1);
};
