// Module ID: 8745
// Function ID: 69157
// Name: useCollectiblesExternalGatewayFacet
// Dependencies: [31, 1849, 566, 8719, 2]
// Exports: default

// Module 8745 (useCollectiblesExternalGatewayFacet)
import { useMemo } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("initialize").fileFinishedImporting("modules/collectibles/native/hooks/useCollectiblesExternalGatewayFacet.android.tsx");

export default function useCollectiblesExternalGatewayFacet(arg0) {
  const _require = arg0;
  let items = [_isNativeReflectConstruct];
  stateFromStores = _require(stateFromStores[2]).useStateFromStores(items, () => outer1_3.getCurrentUser());
  const items1 = [stateFromStores, arg0];
  return useMemo(() => {
    let obj = callback(stateFromStores[3]);
    const collectibleGoogleSkuId = obj.getCollectibleGoogleSkuId(callback, stateFromStores);
    if (null != collectibleGoogleSkuId) {
      obj = {};
      obj = { external_product_id: collectibleGoogleSkuId };
      const items = [obj];
      obj.line_items = items;
      return obj;
    }
  }, items1);
};
