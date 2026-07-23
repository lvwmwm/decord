// Module ID: 13602
// Function ID: 104516
// Name: useFetchNameplate
// Dependencies: [8206, 1876, 1873, 2]
// Exports: useFetchNameplate

// Module 13602 (useFetchNameplate)
const result = require("getNameplateData").fileFinishedImporting("modules/collectibles/nameplates/hooks/useFetchNameplate.tsx");

export const useFetchNameplate = function useFetchNameplate(skuId) {
  let obj = require(8206) /* useFetchCollectiblesProduct */;
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
  if (type === require(1876) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE) {
    first1 = product.items[0];
  }
  obj = { nameplateProduct: product, nameplateRecord: first1, nameplateData: require(1873) /* getNameplateData */.getNameplateData(first1), isFetching: fetchCollectiblesProduct.isFetching };
  return obj;
};
