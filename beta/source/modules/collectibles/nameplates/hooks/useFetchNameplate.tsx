// Module ID: 14938
// Function ID: 14939
// Name: useFetchNameplate
// Dependencies: [558, 568, 11378, 1977, 1974, 2]

// Module 14938 (useFetchNameplate)
import c from "c" /* 568 */;
import utils from "utils" /* 1974 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1977 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 11378 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/nameplates/hooks/useFetchNameplate.tsx");

export const useFetchNameplate = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(7);
  const fetchCollectiblesProduct = useFetchCollectiblesProduct.useFetchCollectiblesProduct(arg0);
  ({ product, isFetching } = fetchCollectiblesProduct);
  let type;
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
  if (cResult[0] !== first1) {
    const nameplateData = tmp(1974).getNameplateData(first1);
    cResult[0] = first1;
    cResult[1] = nameplateData;
    let tmp8 = nameplateData;
    const tmpResult = tmp(1974);
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === isFetching) {
    if (cResult[3] === tmp8) {
      if (cResult[4] === first1) {
        if (cResult[5] === product) {
          let tmp10 = cResult[6];
        }
        return tmp10;
      }
    }
  }
  const obj3 = { nameplateProduct: product, nameplateRecord: first1, nameplateData: tmp8, isFetching };
  cResult[2] = isFetching;
  cResult[3] = tmp8;
  cResult[4] = first1;
  cResult[5] = product;
  cResult[6] = obj3;
  tmp10 = obj3;
}) : ((arg0) => {
  const fetchCollectiblesProduct = useFetchCollectiblesProduct.useFetchCollectiblesProduct(arg0);
  const product = fetchCollectiblesProduct.product;
  let type;
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
  const obj2 = { nameplateProduct: product, nameplateRecord: first1, nameplateData: null, isFetching: null };
  obj2.nameplateData = utils.getNameplateData(first1);
  obj2.isFetching = fetchCollectiblesProduct.isFetching;
  return obj2;
});
