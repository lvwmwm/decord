// Module ID: 13709
// Function ID: 105145
// Name: useFetchNameplate
// Dependencies: [8021, 1877, 1874, 2]
// Exports: useFetchNameplate

// Module 13709 (useFetchNameplate)
const result = require("getNameplateData").fileFinishedImporting("modules/collectibles/nameplates/hooks/useFetchNameplate.tsx");

export const useFetchNameplate = function useFetchNameplate(skuId) {
  let obj = require(8021) /* useFetchCollectiblesProduct */;
  const fetchCollectiblesProduct = obj.useFetchCollectiblesProduct(skuId);
  const product = fetchCollectiblesProduct.product;
  let type;
  if (null != product) {
    const first = product.items[0];
    if (null != first) {
      type = first.type;
    }
  }
  let first1;
  if (type === require(1877) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE) {
    first1 = product.items[0];
  }
  obj = { nameplateProduct: product, nameplateRecord: first1, nameplateData: require(1874) /* getNameplateData */.getNameplateData(first1), isFetching: fetchCollectiblesProduct.isFetching };
  return obj;
};
