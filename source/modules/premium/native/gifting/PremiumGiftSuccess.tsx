// Module ID: 9759
// Function ID: 75915
// Name: PremiumGiftSuccess
// Dependencies: []
// Exports: default

// Module 9759 (PremiumGiftSuccess)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const ContentDismissActionType = arg1(dependencyMap[3]).ContentDismissActionType;
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_10 = arg1(dependencyMap[5]).createStyles((arg0) => {
  let obj = {};
  obj = { "Bool(true)": false, "Bool(true)": false, "Bool(true)": false, "Bool(true)": false, "Bool(true)": false, "Bool(true)": false, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
  obj.bodyContainer = obj;
  obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, paddingTop: importDefault(dependencyMap[6]).space.PX_16, paddingBottom: arg0 + importDefault(dependencyMap[6]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, gap: importDefault(dependencyMap[6]).space.PX_8 };
  const merged = Object.assign(importDefault(dependencyMap[6]).shadows.SHADOW_TOP_LOW);
  obj.actionContainer = obj;
  return obj;
});
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/premium/native/gifting/PremiumGiftSuccess.tsx");

export default function PremiumGiftSuccess() {
  let giftCodeRecord;
  let recipientUser;
  const tmp = callback3(importDefault(dependencyMap[7])().bottom);
  let obj = arg1(dependencyMap[8]);
  const nativeGiftContext = obj.useNativeGiftContext();
  ({ recipientUser, giftCodeRecord } = nativeGiftContext);
  importDefault(dependencyMap[9])(null != giftCodeRecord, "Gift code record cannot be null on success screen");
  const tmp4 = importDefault(dependencyMap[10])();
  const arg1 = tmp4;
  const tmp5 = importDefault(dependencyMap[11])();
  const importDefault = tmp5;
  let obj1 = arg1(dependencyMap[12]);
  const getOrFetchPurchase = obj1.useGetOrFetchPurchase(nativeGiftContext.selectedGiftingPromotionReward, false);
  let obj2 = arg1(dependencyMap[13]);
  const items = [closure_5];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const giftPromotion = giftPromotion.getGiftPromotion();
    let id;
    if (null != giftPromotion) {
      id = giftPromotion.id;
    }
    return id;
  });
  const dependencyMap = stateFromStores;
  const items1 = [tmp5, tmp4, stateFromStores];
  const effect = React.useEffect(() => {
    let tmp = null != tmp4;
    if (tmp) {
      tmp = null != tmp4.reminderNotice;
    }
    if (tmp) {
      tmp = tmp5;
    }
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      let obj = tmp4(stateFromStores[14]);
      obj = { dismissAction: constants.INDIRECT_ACTION };
      const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(tmp4(stateFromStores[15]).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores, obj);
      const tmp5 = stateFromStores;
    }
  }, items1);
  if (null == recipientUser) {
    obj = { giftCodeRecord };
    let tmp12 = callback(importDefault(dependencyMap[16]), obj);
  } else {
    tmp12 = callback(importDefault(dependencyMap[17]), {});
  }
  if (null != getOrFetchPurchase) {
    obj = { purchase: getOrFetchPurchase };
    let tmp19 = callback(importDefault(dependencyMap[18]), obj);
  } else if (null == recipientUser) {
    obj1 = { giftCodeRecord };
    tmp19 = callback(arg1(dependencyMap[16]).PremiumGiftSuccessActions, obj1);
  } else {
    tmp19 = callback(arg1(dependencyMap[17]).PremiumGiftDMSuccessActions, {});
  }
  obj2 = {};
  const obj3 = { style: tmp.bodyContainer, children: tmp12 };
  const items2 = [callback(View, obj3), ];
  const obj4 = { style: tmp.actionContainer, children: tmp19 };
  items2[1] = callback(View, obj4);
  obj2.children = items2;
  return callback2(closure_8, obj2);
};
