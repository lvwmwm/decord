// Module ID: 9799
// Function ID: 76163
// Name: PremiumGiftSuccess
// Dependencies: [31, 27, 7129, 1345, 33, 4130, 689, 1557, 8848, 44, 9800, 9724, 7948, 566, 1336, 1334, 9801, 9802, 9803, 2]
// Exports: default

// Module 9799 (PremiumGiftSuccess)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let closure_9;
let require = arg1;
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW, paddingHorizontal: importDefault(689).space.PX_16, flex: 1, alignContent: "center", justifyContent: "center", flexGrow: 1 };
  obj.bodyContainer = obj;
  obj = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW, paddingTop: importDefault(689).space.PX_16, paddingBottom: arg0 + importDefault(689).space.PX_16, paddingHorizontal: importDefault(689).space.PX_16, gap: importDefault(689).space.PX_8 };
  const merged = Object.assign(importDefault(689).shadows.SHADOW_TOP_LOW);
  obj.actionContainer = obj;
  return obj;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftSuccess.tsx");

export default function PremiumGiftSuccess() {
  let giftCodeRecord;
  let recipientUser;
  let tmp = callback3(importDefault(stateFromStores[7])().bottom);
  let obj = require(stateFromStores[8]);
  const nativeGiftContext = obj.useNativeGiftContext();
  ({ recipientUser, giftCodeRecord } = nativeGiftContext);
  importDefault(stateFromStores[9])(null != giftCodeRecord, "Gift code record cannot be null on success screen");
  const tmp4 = importDefault(stateFromStores[10])();
  require = tmp4;
  const tmp5 = importDefault(stateFromStores[11])();
  importDefault = tmp5;
  let obj1 = require(stateFromStores[12]);
  const getOrFetchPurchase = obj1.useGetOrFetchPurchase(nativeGiftContext.selectedGiftingPromotionReward, false);
  let obj2 = require(stateFromStores[13]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj2.useStateFromStores(items, () => {
    const giftPromotion = outer1_5.getGiftPromotion();
    let id;
    if (null != giftPromotion) {
      id = giftPromotion.id;
    }
    return id;
  });
  const items1 = [tmp5, tmp4, stateFromStores];
  const effect = React.useEffect(() => {
    let tmp = null != tmp4;
    if (tmp) {
      tmp = null != tmp4.reminderNotice;
    }
    if (tmp) {
      tmp = closure_1;
    }
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      let obj = tmp4(stateFromStores[14]);
      obj = { dismissAction: outer1_6.INDIRECT_ACTION };
      const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(tmp4(stateFromStores[15]).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores, obj);
    }
  }, items1);
  if (null == recipientUser) {
    obj = { giftCodeRecord };
    let tmp12 = callback(importDefault(stateFromStores[16]), obj);
  } else {
    tmp12 = callback(importDefault(stateFromStores[17]), {});
  }
  if (null != getOrFetchPurchase) {
    obj = { purchase: getOrFetchPurchase };
    let tmp19 = callback(importDefault(stateFromStores[18]), obj);
  } else if (null == recipientUser) {
    obj1 = { giftCodeRecord };
    tmp19 = callback(require(stateFromStores[16]).PremiumGiftSuccessActions, obj1);
  } else {
    tmp19 = callback(require(stateFromStores[17]).PremiumGiftDMSuccessActions, {});
  }
  obj2 = {};
  const obj3 = { style: tmp.bodyContainer, children: tmp12 };
  const items2 = [callback(View, obj3), ];
  const obj4 = { style: tmp.actionContainer, children: tmp19 };
  items2[1] = callback(View, obj4);
  obj2.children = items2;
  return callback2(closure_8, obj2);
};
