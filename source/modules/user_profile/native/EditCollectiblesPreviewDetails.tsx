// Module ID: 7871
// Function ID: 62672
// Name: EditCollectiblesPreviewDescription
// Dependencies: []
// Exports: default

// Module 7871 (EditCollectiblesPreviewDescription)
function EditCollectiblesPreviewDescription(arg0) {
  let nitroJoinCTA;
  let nitroUpgradeCTA;
  let product;
  let purchase;
  let user;
  ({ user, purchase } = arg0);
  ({ product, nitroJoinCTA, nitroUpgradeCTA } = arg0);
  let obj = arg1(dependencyMap[5]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  let obj1 = importDefault(dependencyMap[6]);
  const canUseCollectiblesResult = obj1.canUseCollectibles(user);
  let obj2 = arg1(dependencyMap[7]);
  let result = obj2.isPremiumCollectiblesProduct(product);
  if (!result) {
    let obj3 = arg1(dependencyMap[7]);
    result = obj3.isPremiumCollectiblesPurchase(purchase);
  }
  let result1 = !canUseCollectiblesResult;
  if (result1) {
    let obj4 = arg1(dependencyMap[7]);
    result1 = obj4.isPremiumCollectiblesPurchase(purchase);
  }
  if (null != purchase) {
    if (!result1) {
      let expiresAt;
      if (null != purchase) {
        expiresAt = purchase.expiresAt;
      }
      let diffAsUnitsResult = null;
      if (null != expiresAt) {
        let obj5 = arg1(dependencyMap[8]);
        const _Date = Date;
        const date = new Date();
        diffAsUnitsResult = obj5.diffAsUnits(date, purchase.expiresAt);
      }
      obj = {};
      let tmp20 = null != diffAsUnitsResult;
      if (tmp20) {
        obj = {};
        const intl = arg1(dependencyMap[10]).intl;
        obj1 = { days: diffAsUnitsResult.days.toString() };
        obj.children = intl.format(arg1(dependencyMap[10]).t.Io7ozn, obj1);
        tmp20 = callback(arg1(dependencyMap[9]).Text, obj);
        const str = diffAsUnitsResult.days;
      }
      const items1 = [tmp20, , ];
      obj2 = {};
      const intl2 = arg1(dependencyMap[10]).intl;
      obj3 = {};
      let toLocaleDateStringResult;
      if (null != purchase) {
        const purchasedAt = purchase.purchasedAt;
        toLocaleDateStringResult = purchasedAt.toLocaleDateString(stateFromStores, { paddingTop: null, paddingBottom: null });
      }
      obj3.date = toLocaleDateStringResult;
      obj2.children = intl2.format(arg1(dependencyMap[10]).t.gW9R4B, obj3);
      items1[1] = callback(arg1(dependencyMap[9]).Text, obj2);
      let expiresAt1;
      if (null != purchase) {
        expiresAt1 = purchase.expiresAt;
      }
      let tmp29 = null != expiresAt1;
      if (tmp29) {
        obj4 = {};
        const intl3 = arg1(dependencyMap[10]).intl;
        obj5 = {};
        expiresAt = purchase.expiresAt;
        obj5.date = expiresAt.toLocaleDateString(stateFromStores, {});
        obj4.children = intl3.format(arg1(dependencyMap[10]).t.eZSTa5, obj5);
        tmp29 = callback(arg1(dependencyMap[9]).Text, obj4);
      }
      items1[2] = tmp29;
      obj.children = items1;
      return closure_7(closure_6, obj);
    }
  }
  if (result) {
    if (canUseCollectiblesResult) {
      const obj6 = {};
      const intl5 = arg1(dependencyMap[10]).intl;
      obj6.children = intl5.string(arg1(dependencyMap[10]).t.hmyYK8);
      let tmp39Result = callback(arg1(dependencyMap[9]).Text, obj6);
    } else {
      const obj15 = importDefault(dependencyMap[6]);
      const Text = arg1(dependencyMap[9]).Text;
      const obj7 = {};
      if (isPremiumResult) {
        obj7.children = nitroUpgradeCTA;
        tmp39Result = tmp39(Text, obj7);
      } else {
        obj7.children = nitroJoinCTA;
        tmp39Result = tmp39(Text, obj7);
      }
      const isPremiumResult = importDefault(dependencyMap[6]).isPremium(user);
    }
  } else {
    const obj8 = {};
    const intl4 = arg1(dependencyMap[10]).intl;
    obj8.children = intl4.string(arg1(dependencyMap[10]).t.fEGjVQ);
    return callback(arg1(dependencyMap[9]).Text, obj8);
  }
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).createStyles({ productDetailsContainer: {} });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/user_profile/native/EditCollectiblesPreviewDetails.tsx");

export default function EditCollectiblesPreviewDetails(previewSkuId) {
  let nitroJoinCTA;
  let nitroUpgradeCTA;
  let product;
  let purchase;
  let user;
  previewSkuId = previewSkuId.previewSkuId;
  ({ user, nitroJoinCTA, nitroUpgradeCTA } = previewSkuId);
  const tmp = callback2();
  ({ product, purchase } = importDefault(dependencyMap[11])(previewSkuId));
  let tmp4Result = null;
  if (null != previewSkuId) {
    if (null != product) {
      let obj = { style: tmp.productDetailsContainer };
      obj = { hasMaxConnections: true, isBoostOnlySubscription: true };
      let name;
      if (null != product) {
        name = product.name;
      }
      if (null == name) {
        let name1;
        if (null != purchase) {
          name1 = purchase.name;
        }
        name = name1;
      }
      obj.children = name;
      const items = [callback(arg1(dependencyMap[9]).Text, obj), ];
      obj = { user, product, purchase, nitroJoinCTA, nitroUpgradeCTA };
      items[1] = callback(EditCollectiblesPreviewDescription, obj);
      obj.children = items;
      tmp4Result = closure_7(View, obj);
      const tmp4 = closure_7;
      const tmp5 = View;
      const tmp6 = callback;
    } else {
      tmp4Result = null;
    }
  }
  return tmp4Result;
};
