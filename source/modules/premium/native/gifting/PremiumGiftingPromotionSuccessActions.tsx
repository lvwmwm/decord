// Module ID: 9763
// Function ID: 75932
// Name: PremiumGiftingPromotionSuccessActions
// Dependencies: []
// Exports: default

// Module 9763 (PremiumGiftingPromotionSuccessActions)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const isAvatarDecorationRecord = arg1(dependencyMap[2]).isAvatarDecorationRecord;
const isNameplateRecord = arg1(dependencyMap[3]).isNameplateRecord;
let closure_7 = importDefault(dependencyMap[4]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { gap: importDefault(dependencyMap[7]).space.PX_16 };
obj.container = obj;
const tmp2 = arg1(dependencyMap[5]);
obj.nameplateContainer = { borderRadius: importDefault(dependencyMap[7]).radii.sm };
const obj2 = { 1414937445: null, 710171746: null, -1884505083: null, 1632514476: null, -1072868960: null, 1549977185: null, 651579746: null, borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.nameplateWrapper = obj2;
obj.singleAvatarContainer = {};
let closure_10 = obj.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[7]).radii.sm };
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/premium/native/gifting/PremiumGiftingPromotionSuccessActions.tsx");

export default function PremiumGiftingPromotionSuccessActions(purchase) {
  purchase = purchase.purchase;
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = arg1(dependencyMap[9]);
  const nativeGiftContext = obj1.useNativeGiftContext();
  const onClose = nativeGiftContext.onClose;
  const arg1 = onClose;
  const prePurchaseGiftingBadgeProgress = nativeGiftContext.prePurchaseGiftingBadgeProgress;
  const importDefault = prePurchaseGiftingBadgeProgress;
  let obj2 = arg1(dependencyMap[10]);
  const navigation = obj2.useNavigation();
  const dependencyMap = navigation;
  const GiftingBadgeExperiment = arg1(dependencyMap[11]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "PremiumGiftingPromotionSuccessActions" }).enabled;
  const React = enabled;
  let obj3 = arg1(dependencyMap[12]);
  const fetchCollectiblesProduct = obj3.useFetchCollectiblesProduct(purchase.skuId);
  const product = fetchCollectiblesProduct.product;
  const View = product;
  const items1 = [enabled, prePurchaseGiftingBadgeProgress, navigation];
  const callback = React.useCallback(() => {
    let tmp = enabled;
    if (enabled) {
      tmp = null != prePurchaseGiftingBadgeProgress;
    }
    if (tmp) {
      const obj = { currentProgress: prePurchaseGiftingBadgeProgress };
      navigation.navigate(onClose(navigation[13]).PremiumGiftScreens.GIFTING_BADGE, obj);
    }
  }, items1);
  const isAvatarDecorationRecord = callback;
  const items2 = [product, onClose, callback, enabled, prePurchaseGiftingBadgeProgress, navigation];
  const first = purchase.items[0];
  obj = { style: tmp.container };
  const callback1 = React.useCallback(() => {
    if (null != product) {
      let obj = { product, onCancel: callback };
      prePurchaseGiftingBadgeProgress(navigation[14]).open(obj);
      const obj2 = prePurchaseGiftingBadgeProgress(navigation[14]);
    } else {
      if (enabled) {
        if (null != prePurchaseGiftingBadgeProgress) {
          obj = { currentProgress: prePurchaseGiftingBadgeProgress };
          navigation.navigate(onClose(navigation[13]).PremiumGiftScreens.GIFTING_BADGE, obj);
        }
      }
      onClose();
    }
  }, items2);
  if (isNameplateRecord(first)) {
    obj = { style: tmp.nameplateContainer };
    obj1 = { style: tmp.nameplateWrapper };
    obj2 = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null };
    const tmp23 = importDefault(dependencyMap[15]);
    obj2.nameplate = arg1(dependencyMap[16]).getNameplateData(first);
    obj1.children = callback(tmp23, obj2);
    const items3 = [callback(View, obj1), ];
    obj3 = { style: tmp.singleAvatarContainer };
    const obj4 = { user: stateFromStores, guildId: undefined, size: arg1(dependencyMap[17]).AvatarSizes.SMALL, aria-hidden: true };
    obj3.children = callback(arg1(dependencyMap[17]).Avatar, obj4);
    items3[1] = callback(View, obj3);
    obj.children = items3;
    let tmp12 = callback2(View, obj);
    const obj10 = arg1(dependencyMap[16]);
  } else if (isAvatarDecorationRecord(first)) {
    const obj5 = { size: arg1(dependencyMap[17]).AvatarSizes.LARGE, asset: first.asset };
    tmp12 = callback(importDefault(dependencyMap[18]), obj5);
    const tmp16 = importDefault(dependencyMap[18]);
  }
  const items4 = [tmp12, ];
  const obj6 = { grow: true };
  const intl = arg1(dependencyMap[20]).intl;
  obj6.text = intl.string(arg1(dependencyMap[20]).t.kMYVwv);
  obj6.loading = fetchCollectiblesProduct.isFetching;
  obj6.onPress = callback1;
  items4[1] = callback(arg1(dependencyMap[19]).Button, obj6);
  obj.children = items4;
  return callback2(View, obj);
};
