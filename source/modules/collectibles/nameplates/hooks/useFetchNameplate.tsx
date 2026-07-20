// Module ID: 13472
// Function ID: 102282
// Name: useFetchNameplate
// Dependencies: []
// Exports: useFetchNameplate

// Module 13472 (useFetchNameplate)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/collectibles/nameplates/hooks/useFetchNameplate.tsx");

export const useFetchNameplate = function useFetchNameplate(skuId) {
  let obj = require(dependencyMap[0]);
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
  if (type === require(dependencyMap[1]).CollectiblesItemType.NAMEPLATE) {
    first1 = product.items[0];
  }
  obj = { nameplateProduct: product, nameplateRecord: first1, nameplateData: require(dependencyMap[2]).getNameplateData(first1), isFetching: fetchCollectiblesProduct.isFetching };
  return obj;
};
