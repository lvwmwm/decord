// Module ID: 17130
// Function ID: 17131
// Name: useFetchNameplate
// Dependencies: [11832, 2114, 2111, 2]
// Exports: useFetchNameplate

// Module 17130 (useFetchNameplate)
import utils from "utils" /* 2111 */;
import CollectiblesItemType from "CollectiblesItemType" /* 2114 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 11832 */;
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
