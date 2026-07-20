// Module ID: 13674
// Function ID: 103536
// Name: FamilyCenterActivityPurchaseRow
// Dependencies: []
// Exports: default

// Module 13674 (FamilyCenterActivityPurchaseRow)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { borderBottomColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
obj.container = obj;
obj.textContainer = {};
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityPurchaseRow.tsx");

export default function FamilyCenterActivityPurchaseRow(arg0) {
  let currency;
  let displayName;
  let isSubscription;
  let skuId;
  let subscriptionPlanId;
  let total;
  let typeName;
  ({ skuId, subscriptionPlanId } = arg0);
  ({ total, currency } = arg0);
  const tmp = callback3();
  const product = importDefault(dependencyMap[5])(skuId).product;
  let obj = arg1(dependencyMap[6]);
  let tmp2 = null;
  if (null != product) {
    tmp2 = product;
  }
  const purchaseDisplayInfo = obj.getPurchaseDisplayInfo(tmp2, subscriptionPlanId);
  ({ displayName, typeName, isSubscription } = purchaseDisplayInfo);
  if (null != skuId) {
    if (!isSubscription) {
      if (null == product) {
        return null;
      }
    }
  }
  if (null == displayName) {
    return null;
  } else {
    let combined = displayName;
    const obj7 = arg1(dependencyMap[7]);
    if (null != typeName) {
      const _HermesInternal = HermesInternal;
      combined = "" + displayName + " \u2022 " + typeName;
    }
    obj = { style: tmp.container };
    obj = { displayName };
    let tmp12 = null;
    const formatPriceResult = arg1(dependencyMap[7]).formatPrice(total, currency);
    const tmp6 = callback2;
    const tmp7 = View;
    const tmp8 = callback;
    if (null != product) {
      tmp12 = product;
    }
    obj.product = tmp12;
    obj.isSubscription = isSubscription;
    obj.subscriptionPlanId = subscriptionPlanId;
    const items = [tmp8(importDefault(dependencyMap[8]), obj), ];
    const obj1 = { style: tmp.textContainer };
    const obj2 = { 0: 0.706, -9223372036854775808: 0.000000000000000018217984681387264, 0: -0.000030517578125, 0: 78804188533482670000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, children: combined };
    const items1 = [callback(arg1(dependencyMap[9]).Text, obj2), ];
    const obj3 = { INTEGRATION_CREATE: true, ConstraintReasonCode: true, children: formatPriceResult };
    items1[1] = callback(arg1(dependencyMap[9]).Text, obj3);
    obj1.children = items1;
    items[1] = callback2(View, obj1);
    obj.children = items;
    return tmp6(tmp7, obj);
  }
};
