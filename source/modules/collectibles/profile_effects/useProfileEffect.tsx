// Module ID: 8219
// Function ID: 64964
// Name: useProfileEffect
// Dependencies: []
// Exports: default

// Module 8219 (useProfileEffect)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const isProfileEffectRecord = arg1(dependencyMap[3]).isProfileEffectRecord;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/collectibles/profile_effects/useProfileEffect.tsx");

export default function useProfileEffect(arg0) {
  const arg1 = arg0;
  const items = [closure_3, closure_4];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => {
    if (null != arg0) {
      const product = product.getProduct(arg0);
      let first;
      if (null != product) {
        first = product.items[0];
      }
      if (tmp4(first)) {
        return product.items[0];
      } else {
        const purchase = purchase.getPurchase(arg0);
        let first1;
        if (null != purchase) {
          first1 = purchase.items[0];
        }
        let first2;
        if (closure_5(first1)) {
          first2 = purchase.items[0];
        }
        return first2;
      }
      const tmp4 = closure_5;
    }
  });
  const dependencyMap = tmp2;
  const items1 = [null != arg0 && null == stateFromStores, arg0];
  const effect = React.useEffect(() => {
    if (tmp2) {
      const result = arg0(tmp2[5]).maybeFetchCollectiblesProduct(arg0);
      const obj = arg0(tmp2[5]);
    }
  }, items1);
  return stateFromStores;
};
