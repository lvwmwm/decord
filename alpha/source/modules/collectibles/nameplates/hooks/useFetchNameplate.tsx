// Module ID: 16454
// Function ID: 16455
// Name: useFetchNameplate
// Dependencies: [11349, 1988, 1985, 2]
// Exports: useFetchNameplate

// Module 16454 (useFetchNameplate)
import utils from "utils" /* 1985 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1988 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 11349 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/nameplates/hooks/useFetchNameplate.tsx");

export function useFetchNameplate(skuId) {
  let tmpResult;
  const obj = useFetchCollectiblesProduct;
  const fetchCollectiblesProduct = obj.useFetchCollectiblesProduct(skuId);
  const product = fetchCollectiblesProduct.product;
  let type;
  const isFetching = fetchCollectiblesProduct.isFetching;
  if (product != null) {
    const first = product.items[0];
    if (first != null) {
      type = first.type;
    }
  }
  let first1;
  if (type === CollectiblesItemType.CollectiblesItemType.NAMEPLATE) {
    first1 = product.items[0];
  }
  const obj2 = { nameplateProduct: product, nameplateRecord: first1, nameplateData: tmpResult.getNameplateData(first1), isFetching };
  tmpResult = utils;
  return obj2;
}
