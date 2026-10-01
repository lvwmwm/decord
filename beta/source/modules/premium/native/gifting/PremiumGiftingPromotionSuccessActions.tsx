// Module ID: 10541
// Function ID: 10542
// Name: PremiumGiftingPromotionSuccessActions
// Dependencies: [19, 17, 21, 4836, 576, 10162, 1485, 10204, 10508, 10125, 10542, 10219, 1115, 2551, 5281, 2]
// Exports: default

// Module 10541 (PremiumGiftingPromotionSuccessActions)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import PremiumGiftModal from "PremiumGiftModal" /* 10125 */;
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators" /* 10542 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
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
  let intl;
  let intl2;
  let items2;
  let name;
  let onClose;
  navigation = undefined;
  let onCancel;
  purchase = purchase.purchase;
  let tmp = closure_7();
  let tmp2 = onClose;
  const tmp3 = navigation;
  let obj = onClose(navigation[5]);
  const nativeGiftContext = obj.useNativeGiftContext();
  onClose = nativeGiftContext.onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  let obj2 = onClose(navigation[6]);
  navigation = obj2.useNavigation();
  const GiftingBadgeExperiment = onClose(navigation[7]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftingPromotionSuccessActions" }).enabled;
  let obj3 = onClose(navigation[8]);
  const fetchCollectiblesProduct = obj3.useFetchCollectiblesProduct(purchase.skuId);
  const product = fetchCollectiblesProduct.product;
  let c4 = product;
  let tmp12Result = null != product;
  const isFetching = fetchCollectiblesProduct.isFetching;
  if (tmp12Result) {
    tmp12Result = product.items.length > 0;
  }
  const items = [enabled, prePurchaseGiftingBadgeProgress, navigation];
  onCancel = enabled.useCallback(() => {
    const tmp = enabled && null != prePurchaseGiftingBadgeProgress;
    if (tmp) {
      const obj = { currentProgress: prePurchaseGiftingBadgeProgress };
      navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
    }
  }, items);
  const items1 = [product, onClose, onCancel, enabled, prePurchaseGiftingBadgeProgress, navigation];
  const obj4 = { style: tmp.container, children: items2 };
  const callback1 = enabled.useCallback(() => {
    if (null != c4) {
      const obj3 = { product: tmp, onCancel };
      const obj2 = ProductPurchaseSuccessActionCreatorsDefault;
      obj2.open(obj3);
    } else {
      const tmp2 = enabled;
      if (tmp2) {
        if (null != prePurchaseGiftingBadgeProgress) {
          const obj = { currentProgress: tmp3 };
          navigation.navigate(PremiumGiftModal.PremiumGiftScreens.GIFTING_BADGE, obj);
        }
      }
      onClose();
    }
  }, items1);
  const tmp10 = closure_6;
  const tmp11 = c4;
  if (tmp12Result) {
    const obj5 = { style: tmp.promoDetails, product, title: intl.string(prePurchaseGiftingBadgeProgress(tmp3[13]).XeLTZl), subtitle: name };
    const PremiumGiftPromotionCollectibleRewardDetails = tmp2(tmp3[11]).PremiumGiftPromotionCollectibleRewardDetails;
    intl = tmp2(tmp3[12]).intl;
    name = undefined;
    const tmp12 = onCancel;
    if (product != null) {
      name = product.name;
    }
    tmp12Result = tmp12(PremiumGiftPromotionCollectibleRewardDetails, obj5);
  }
  items2 = [tmp12Result, ];
  const obj6 = { grow: true, text: intl2.string(tmp2(tmp3[12]).t.kMYVwv), loading: isFetching, onPress: callback1 };
  const Button = tmp2(tmp3[14]).Button;
  intl2 = tmp2(tmp3[12]).intl;
  items2[1] = onCancel(Button, obj6);
  return tmp10(tmp11, obj4);
};
