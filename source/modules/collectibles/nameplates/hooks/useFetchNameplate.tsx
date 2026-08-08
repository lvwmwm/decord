// Module ID: 13943
// Function ID: 13944
// Name: useFetchNameplate
// Dependencies: [10113, 1930, 1927, 2]
// Exports: useFetchNameplate

// Module 13943 (useFetchNameplate)
const result = require("getNameplateData").fileFinishedImporting("modules/collectibles/nameplates/hooks/useFetchNameplate.tsx");

export const useFetchNameplate = function useFetchNameplate(skuId) {
  let obj = require(10113) /* useFetchCollectiblesProduct */;
  const fetchCollectiblesProduct = obj.useFetchCollectiblesProduct(skuId);
  const product = fetchCollectiblesProduct.product;
  let type;
  if (product != null) {
    const first = product.items[0];
    if (first != null) {
      type = first.type;
    }
  }
  let first1;
  if (type === require(1930) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE) {
    first1 = product.items[0];
  }
  obj = { nameplateProduct: product, nameplateRecord: first1, nameplateData: null, isFetching: null };
  obj[2] = require(1927) /* getNameplateData */.getNameplateData(first1);
  obj[3] = fetchCollectiblesProduct.isFetching;
  return obj;
};
