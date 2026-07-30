// Module ID: 13725
// Function ID: 13726
// Name: useFetchNameplate
// Dependencies: [8042, 1901, 1898, 2]
// Exports: useFetchNameplate

// Module 13725 (useFetchNameplate)
const result = require("getNameplateData").fileFinishedImporting("modules/collectibles/nameplates/hooks/useFetchNameplate.tsx");

export const useFetchNameplate = function useFetchNameplate(skuId) {
  let obj = require(8042) /* useFetchCollectiblesProduct */;
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
  if (type === require(1901) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE) {
    first1 = product.items[0];
  }
  obj = { nameplateProduct: product, nameplateRecord: first1, nameplateData: null, isFetching: null };
  obj[2] = require(1898) /* getNameplateData */.getNameplateData(first1);
  obj[3] = fetchCollectiblesProduct.isFetching;
  return obj;
};
