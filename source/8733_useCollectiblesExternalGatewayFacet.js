// Module ID: 8733
// Function ID: 69081
// Name: useCollectiblesExternalGatewayFacet
// Dependencies: []
// Exports: default

// Module 8733 (useCollectiblesExternalGatewayFacet)
const useMemo = require(dependencyMap[0]).useMemo;
let closure_3 = importDefault(dependencyMap[1]);
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/collectibles/native/hooks/useCollectiblesExternalGatewayFacet.android.tsx");

export default function useCollectiblesExternalGatewayFacet(arg0) {
  const require = arg0;
  const items = [closure_3];
  const stateFromStores = require(dependencyMap[2]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const dependencyMap = stateFromStores;
  const items1 = [stateFromStores, arg0];
  return useMemo(() => {
    let obj = arg0(stateFromStores[3]);
    const collectibleGoogleSkuId = obj.getCollectibleGoogleSkuId(arg0, stateFromStores);
    if (null != collectibleGoogleSkuId) {
      obj = {};
      obj = { external_product_id: collectibleGoogleSkuId };
      const items = [obj];
      obj.line_items = items;
      return obj;
    }
  }, items1);
};
