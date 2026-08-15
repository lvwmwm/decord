// Module ID: 9278
// Function ID: 9279
// Name: useCollectiblesExternalGatewayFacet
// Dependencies: [19, 1922, 589, 9249, 2]
// Exports: default

// Module 9278 (useCollectiblesExternalGatewayFacet)
import { useMemo } from "noop";
import mergeGuildAvatar from "mergeGuildAvatar";

const result = require("initialize").fileFinishedImporting("modules/collectibles/native/hooks/useCollectiblesExternalGatewayFacet.android.tsx");

export default function useCollectiblesExternalGatewayFacet(arg0) {
  const _require = arg0;
  let items = [mergeGuildAvatar];
  stateFromStores = _require(stateFromStores[2]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [stateFromStores, arg0];
  return useMemo(() => {
    let obj = callback(stateFromStores[3]);
    const collectibleGoogleSkuId = obj.getCollectibleGoogleSkuId(callback, stateFromStores);
    if (null != collectibleGoogleSkuId) {
      obj = { line_items: null };
      obj = { external_product_id: null };
      obj[0] = collectibleGoogleSkuId;
      const items = [obj];
      obj[0] = items;
      return obj;
    }
  }, items1);
};
