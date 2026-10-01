// Module ID: 10537
// Function ID: 10538
// Name: PremiumGiftSuccess
// Dependencies: [19, 17, 10128, 2042, 21, 4836, 576, 1613, 10162, 38, 10538, 10217, 10198, 504, 2031, 2029, 10539, 10540, 10541, 2]
// Exports: default

// Module 10537 (PremiumGiftSuccess)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2031 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import react from "react" /* 19 */;
import PromotionsStore from "PromotionsStore" /* 10128 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, giftPromotion, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles((arg0) => {
  let obj3;
  const obj = { bodyContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16, flex: 1, alignContent: "center", justifyContent: "center", flexGrow: 1 }, actionContainer: obj3 };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16, flex: 1, alignContent: "center", justifyContent: "center", flexGrow: 1 });
  obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingTop: nativeDefault.space.PX_16, paddingBottom: arg0 + nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_LOW);
  return obj;
});
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftSuccess.tsx");

export default function PremiumGiftSuccess() {
  let closure_1;
  let giftCodeRecord;
  let items2;
  let recipientUser;
  let reminderNotice;
  let selectedGiftingPromotionReward;
  let stateFromStores;
  let tmp12;
  let tmp12Result;
  let tmp13;
  let tmp = importDefault;
  const tmp3 = closure_10(require("useSafeAreaInsets")().bottom);
  let obj = require("NativeGiftContext");
  const nativeGiftContext = obj.useNativeGiftContext();
  ({ recipientUser, giftCodeRecord, selectedGiftingPromotionReward } = nativeGiftContext);
  require("module_38")(null != giftCodeRecord, "Gift code record cannot be null on success screen");
  const tmp7 = require("useGiftingPromotionConfig")();
  _require = tmp7;
  const tmp8 = require("useShouldShowGiftingPromotionDeco")();
  importDefault = tmp8;
  let obj2 = require("useFetchCollectiblesCategoriesAndPurchases");
  const getOrFetchPurchase = obj2.useGetOrFetchPurchase(selectedGiftingPromotionReward, false);
  const items = [PromotionsStore];
  const obj3 = require("get initialized");
  stateFromStores = obj3.useStateFromStores(items, () => {
    giftPromotion = giftPromotion.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  const items1 = [tmp8, tmp7, stateFromStores];
  const effect = react.useEffect(() => {
    const tmp = null != reminderNotice && null != reminderNotice.reminderNotice && closure_1 && null != stateFromStores;
    if (tmp) {
      const obj2 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
      const obj = DismissibleContentUtils;
      const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores, obj2);
    }
  }, items1);
  if (null == recipientUser) {
    const obj4 = { giftCodeRecord };
    tmp13 = closure_7(tmp(tmp2[16]), obj4);
    tmp12 = closure_7;
  } else {
    tmp12 = closure_7;
    tmp13 = closure_7(tmp(tmp2[17]), {});
  }
  if (null != getOrFetchPurchase) {
    const obj5 = { purchase: getOrFetchPurchase };
    tmp12Result = tmp12(tmp(tmp2[18]), obj5);
  } else if (null == recipientUser) {
    const obj6 = { giftCodeRecord };
    tmp12Result = tmp12(tmp4(tmp2[16]).PremiumGiftSuccessActions, obj6);
  } else {
    tmp12Result = tmp12(tmp4(tmp2[17]).PremiumGiftDMSuccessActions, {});
  }
  const obj7 = { children: items2 };
  items2 = [, ];
  const obj8 = { style: tmp3.bodyContainer, children: tmp13 };
  items2[0] = tmp12(View, obj8);
  const obj9 = { style: tmp3.actionContainer, children: tmp12Result };
  items2[1] = tmp12(View, obj9);
  return closure_9(closure_8, obj7);
};
