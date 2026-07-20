// Module ID: 13678
// Function ID: 103556
// Name: FamilyCenterActivityGiftRow
// Dependencies: []
// Exports: default

// Module 13678 (FamilyCenterActivityGiftRow)
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
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityGiftRow.tsx");

export default function FamilyCenterActivityGiftRow(arg0) {
  let claimed;
  let claimedAt;
  let displayName;
  let gifterUserId;
  let isSubscription;
  let offeredAt;
  let price;
  let skuId;
  let subscriptionPlanId;
  ({ skuId, subscriptionPlanId } = arg0);
  ({ price, gifterUserId, claimed, offeredAt, claimedAt } = arg0);
  const tmp = callback3();
  const product = importDefault(dependencyMap[5])(skuId).product;
  let obj = arg1(dependencyMap[6]);
  const teenUserForId = obj.useTeenUserForId(gifterUserId);
  let obj1 = arg1(dependencyMap[7]);
  let tmp3 = null;
  if (null != product) {
    tmp3 = product;
  }
  const purchaseDisplayInfo = obj1.getPurchaseDisplayInfo(tmp3, subscriptionPlanId);
  ({ displayName, isSubscription } = purchaseDisplayInfo);
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
    obj = { claimed, price };
    let name = null;
    if (null != teenUserForId) {
      let obj2 = importDefault(dependencyMap[9]);
      name = obj2.getName(teenUserForId);
    }
    obj.gifterName = name;
    obj.offeredAt = offeredAt;
    obj.claimedAt = claimedAt;
    obj = { style: tmp.container };
    const giftSubtext = arg1(dependencyMap[8]).getGiftSubtext(obj);
    obj1 = { displayName };
    let tmp15 = null;
    const obj9 = arg1(dependencyMap[8]);
    const tmp10 = View;
    const tmp11 = callback;
    const tmp9 = callback2;
    if (null != product) {
      tmp15 = product;
    }
    obj1.product = tmp15;
    obj1.isSubscription = isSubscription;
    obj1.subscriptionPlanId = subscriptionPlanId;
    const items = [tmp11(importDefault(dependencyMap[10]), obj1), ];
    obj2 = { style: tmp.textContainer };
    const obj3 = { 0: 0.706, -9223372036854775808: 0.000000000000000018217984681387264, 0: -0.000030517578125, 0: 78804188533482670000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, children: displayName };
    const items1 = [callback(arg1(dependencyMap[11]).Text, obj3), ];
    const obj4 = { INTEGRATION_CREATE: true, ConstraintReasonCode: true, children: giftSubtext };
    items1[1] = callback(arg1(dependencyMap[11]).Text, obj4);
    obj2.children = items1;
    items[1] = callback2(View, obj2);
    obj.children = items;
    return tmp9(tmp10, obj);
  }
};
