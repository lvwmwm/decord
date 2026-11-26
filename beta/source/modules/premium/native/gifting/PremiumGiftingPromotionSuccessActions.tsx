// Module ID: 13955
// Function ID: 13956
// Name: PremiumGiftingPromotionSuccessActions
// Dependencies: [19, 17, 21, 4913, 575, 9468, 1500, 11923, 9466, 9410, 9507, 1112, 2888, 5511, 2]
// Exports: default

// Module 13955 (PremiumGiftingPromotionSuccessActions)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators" /* 9410 */;
import PremiumGiftModal from "PremiumGiftModal" /* 9466 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let navigation;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let react = react_mod;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, promoDetails: obj3 };
obj2 = { flexDirection: "column", alignItems: "center", gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "stretch", paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftingPromotionSuccessActions.tsx");

export default function PremiumGiftingPromotionSuccessActions(purchase) {
  let c3;
  let intl;
  let intl2;
  let items2;
  let name;
  let onClose;
  navigation = undefined;
  let onCancel;
  purchase = purchase.purchase;
  const tmp = closure_7();
  const tmp2 = onClose;
  let obj = onClose(navigation[5]);
  const nativeGiftContext = obj.useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  let obj2 = onClose(navigation[6]);
  navigation = obj2.useNavigation();
  let obj3 = onClose(navigation[7]);
  const fetchCollectiblesProduct = obj3.useFetchCollectiblesProduct(purchase.skuId);
  const product = fetchCollectiblesProduct.product;
  react = product;
  let tmp12Result = null != product;
  const isFetching = fetchCollectiblesProduct.isFetching;
  if (tmp12Result) {
    tmp12Result = product.items.length > 0;
  }
  const items = [prePurchaseGiftingBadgeProgress, navigation];
  onCancel = react.useCallback(() => {
    if (null != prePurchaseGiftingBadgeProgress) {
      const obj = { currentProgress: tmp };
      navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
    }
  }, items);
  const items1 = [product, onClose, onCancel, prePurchaseGiftingBadgeProgress, navigation];
  const obj4 = { style: tmp.container, children: items2 };
  const callback1 = react.useCallback(() => {
    if (null != c3) {
      const obj3 = { product: tmp, onCancel };
      const obj2 = ProductPurchaseSuccessActionCreatorsDefault;
      obj2.open(obj3);
    } else if (null != prePurchaseGiftingBadgeProgress) {
      const obj = { currentProgress: tmp2 };
      navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
    } else {
      onClose();
    }
  }, items1);
  const tmp10 = closure_6;
  const tmp11 = onCancel;
  if (tmp12Result) {
    const obj5 = { style: tmp.promoDetails, product, title: intl.string(prePurchaseGiftingBadgeProgress(navigation[12]).XeLTZl), subtitle: name };
    const PremiumGiftPromotionCollectibleRewardDetails = tmp2(tmp3[10]).PremiumGiftPromotionCollectibleRewardDetails;
    intl = tmp2(tmp3[11]).intl;
    name = undefined;
    const tmp12 = closure_5;
    if (product != null) {
      name = product.name;
    }
    tmp12Result = tmp12(PremiumGiftPromotionCollectibleRewardDetails, obj5);
  }
  items2 = [tmp12Result, ];
  const obj6 = { grow: true, text: intl2.string(tmp2(navigation[11]).t.kMYVwv), loading: isFetching, onPress: callback1 };
  const Button = tmp2(tmp3[13]).Button;
  intl2 = tmp2(tmp3[11]).intl;
  items2[1] = closure_5(Button, obj6);
  return tmp10(tmp11, obj4);
};
