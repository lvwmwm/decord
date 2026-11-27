// Module ID: 11959
// Function ID: 11960
// Name: GiftCodeRedeemSuccess
// Dependencies: [32, 19, 17, 6360, 21, 5043, 575, 504, 11944, 7515, 11619, 6323, 2113, 9432, 9429, 7480, 7588, 11173, 7519, 9467, 5836, 1186, 9484, 11288, 11951, 11955, 5634, 1112, 11941, 2911, 5790, 5641, 6130, 2]
// Exports: default

// Module 11959 (GiftCodeRedeemSuccess)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1186 */;
import ProfileEffectUserPreviewDefault from "ProfileEffectUserPreview" /* 9484 */;
import ProfileFrameUserPreviewDefault from "ProfileFrameUserPreview" /* 11288 */;
import NameplatePreview from "NameplatePreview" /* 11951 */;
import GiftBoxAnimationDefault from "GiftBoxAnimation" /* 11955 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SKUStore from "SKUStore" /* 6360 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, body: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28, paddingBottom: 12, paddingHorizontal: 32 }, nameplateContainer: obj3, bundleContainer: obj4, bundlePreview: { alignSelf: "stretch", minHeight: 250, alignItems: "center", justifyContent: "center" }, header: { marginTop: 32, textAlign: "center" }, message: { marginTop: 8, textAlign: "center" }, footer: { paddingHorizontal: 24 }, gameItemCard: { marginTop: 20 } };
obj2 = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { width: "100%", paddingTop: nativeDefault.space.PX_24 };
obj4 = { width: "100%", alignItems: "center", paddingTop: nativeDefault.space.PX_24 };
let closure_10 = createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemSuccess.tsx");

export default function GiftCodeRedeemSuccess(giftCode) {
  let W2znvX;
  let _undefined;
  let c3;
  let canUseNow;
  let firstAvatarDecoration;
  let firstNameplate;
  let firstProfileEffect;
  let formatToPlainString;
  let handleUseNow;
  let intl;
  let intl10;
  let intl2;
  let intl3;
  let intl4;
  let intl7;
  let intl9;
  let nameplateContainer;
  let obj10;
  let obj15;
  let obj18;
  let obj27;
  let tmp18;
  let tmp24Result;
  let tmp24Result2;
  let tmp2Result12;
  giftCode = giftCode.giftCode;
  const user = giftCode.user;
  _slicedToArray = undefined;
  let tmp = closure_10();
  dependencyMap = tmp;
  const tmp2 = giftCode;
  let obj = giftCode(504);
  const items = [SKUStore];
  const stateFromStores = obj.useStateFromStores(items, () => SKUStore.get(giftCode.skuId));
  let obj2 = giftCode(11944);
  const getOrFetchSubscriptionPlan = obj2.useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  const obj3 = giftCode(7515);
  const getOrFetchApplication = obj3.useGetOrFetchApplication(giftCode.applicationId);
  const useFetchCollectiblesProduct = giftCode(11619).useFetchCollectiblesProduct;
  giftCode(11619);
  let skuId = null;
  const obj4 = giftCode(6323);
  if (obj4.isCollectiblesGiftCode(giftCode)) {
    skuId = giftCode.skuId;
  }
  const product = useFetchCollectiblesProduct(skuId, true).product;
  let first;
  if (product != null) {
    first = product.items[0];
  }
  let type;
  if (product != null) {
    type = product.type;
  }
  const BUNDLE = tmp2(2113).CollectiblesItemType.BUNDLE;
  let tmp12 = product;
  const useShopProductItems = tmp2(9432).useShopProductItems;
  tmp2(9432);
  if (product == null) {
    tmp12 = { items: [] };
    const obj5 = { items: [] };
  }
  const shopProductItems = useShopProductItems(tmp12);
  ({ firstAvatarDecoration, firstProfileEffect, firstNameplate } = shopProductItems);
  let tmp15 = product;
  const useHandleUseNow = tmp2(9429).useHandleUseNow;
  tmp2(9429);
  if (product == null) {
    tmp15 = { skuId: "", type: tmp2(2113).CollectiblesItemType.BUNDLE, items: [] };
    const obj6 = { skuId: "", type: tmp2(2113).CollectiblesItemType.BUNDLE, items: [] };
  }
  const handleUseNow1 = useHandleUseNow({ product: tmp15 });
  const isApplying = handleUseNow1.isApplying;
  ({ handleUseNow, canUseNow } = handleUseNow1);
  [tmp18, c3] = react.useState();
  _slicedToArray(react.useState(), 2);
  const callback = react.useCallback((nativeEvent) => {
    let closure_129_0;
    let closure_129_1;
    ({ width: closure_129_0, height: closure_129_1 } = nativeEvent.nativeEvent.layout);
    _undefined((arg0) => {
      size = arg0;
      if (null != arg0) {
        return size;
      }
      const size1 = { width, height };
      size = size1;
    });
  }, []);
  const obj7 = { bottom: true, style: tmp.container, children: null };
  const obj8 = { contentContainerStyle: tmp.body, alwaysBounceVertical: false, children: null };
  if (null == first) {
    let tmp34;
    let tmp39;
    let tmp39Result;
    if (null != getOrFetchApplication) {
      let tmp28Result;
      const tmp2Result8 = tmp2(7588);
      if (tmp2Result8.isGameItemSKU(stateFromStores)) {
        const obj9 = { style: tmp.gameItemCard, children: closure_8(user(11173), obj10) };
        obj10 = { sku: stateFromStores };
        tmp28Result = tmp28(closure_5, obj9);
      } else {
        const obj11 = { game: getOrFetchApplication, size: tmp2(7519).GameIconSizes.LARGE, skuId: giftCode.skuId };
        const tmp30 = user(7519);
        tmp28Result = tmp28(tmp30, obj11);
      }
      tmp24Result2 = tmp28Result;
    }
    const items1 = [tmp24Result2, , ];
    if (null == stateFromStores) {
      const obj12 = { variant: "heading-xl/semibold", style: tmp.header, accessibilityRole: "header", children: intl4.string(tmp2(1112).t["+BNMcF"]) };
      const Text4 = tmp2(5634).Text;
      intl4 = tmp2(1112).intl;
      tmp34 = closure_8(Text4, obj12);
    } else {
      const tmp2Result9 = tmp2(7588);
      if (tmp2Result9.isGameItemSKU(stateFromStores)) {
        const obj13 = { variant: "heading-xl/semibold", style: tmp.header, accessibilityRole: "header", children: intl3.string(tmp2(1112).t["5glWta"]) };
        const Text3 = tmp2(5634).Text;
        intl3 = tmp2(1112).intl;
        tmp34 = closure_8(Text3, obj13);
      } else {
        if (giftCode.isSubscription) {
          if (null != getOrFetchSubscriptionPlan) {
            const obj14 = { variant: "heading-xl/semibold", style: tmp.header, accessibilityRole: "header", children: intl2.format(tmp2(1112).t["1C2BG/"], obj15) };
            const Text2 = tmp2(5634).Text;
            intl2 = tmp2(1112).intl;
            obj15 = { skuName: stateFromStores.name };
            tmp34 = closure_8(Text2, obj14);
          }
        }
        if (null != first) {
          const obj16 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp.header, accessibilityRole: "header", children: intl.string(tmp2(1112).t.IMffmm) };
          const Text = tmp2(5634).Text;
          intl = tmp2(1112).intl;
          tmp34 = closure_8(Text, obj16);
        }
      }
    }
    items1[1] = tmp34;
    const tmp2Result10 = tmp2(7588);
    if (tmp2Result10.isGameItemSKU(stateFromStores)) {
      if (null != getOrFetchApplication) {
        const obj17 = { variant: "body-md/medium", style: tmp.message, children: formatToPlainString(W2znvX, obj18) };
        const Text7 = tmp2(5634).Text;
        const intl8 = tmp2(1112).intl;
        formatToPlainString = intl8.formatToPlainString;
        let str2;
        W2znvX = tmp2(1112).t.W2znvX;
        if (stateFromStores != null) {
          str2 = stateFromStores.name;
        }
        if (str2 == null) {
          str2 = "";
        }
        obj18 = { skuName: str2, applicationName: getOrFetchApplication.name };
        tmp39Result = tmp47(Text7, obj17);
        tmp39 = tmp47;
      }
      items1[2] = tmp39Result;
      obj8.children = items1;
      const items2 = [closure_9(tmp22, obj8), ];
      const obj19 = { style: tmp.footer, children: null };
      const tmp48 = closure_5;
      if (null != first) {
        let obj21;
        if (canUseNow) {
          const obj20 = { text: intl10.string(tmp2(1112).t.MAS7uK), size: "md", loading: isApplying, disabled: isApplying, onPress: handleUseNow };
          intl10 = tmp2(1112).intl;
          obj21 = obj20;
        }
        obj19.children = tmp39(tmp49, obj21);
        items2[1] = tmp39(tmp48, obj19);
        obj7.children = items2;
        return closure_9(tmp21, obj7);
      }
      obj21 = { text: intl9.string(tmp2(1112).t["NX+WJN"]), size: "md", onPress: user(6130).pop };
      intl9 = tmp2(1112).intl;
    }
    const tmp2Result11 = tmp2(11941);
    if (tmp2Result11.isPendingGiftSubscriptionCode(giftCode)) {
      const obj22 = { variant: "body-md/medium", style: tmp.message, children: intl7.string(user(2911).fdrOGN) };
      const Text6 = tmp2(5634).Text;
      intl7 = tmp2(1112).intl;
      tmp39Result = closure_8(Text6, obj22);
      tmp39 = closure_8;
    } else {
      if (giftCode.isSubscription) {
        if (null != getOrFetchSubscriptionPlan) {
          const obj23 = { variant: "body-md/medium", style: tmp.message, children: tmp2Result12.getSubscriptionGiftSuccessText(getOrFetchSubscriptionPlan) };
          const Text5 = tmp2(5634).Text;
          tmp2Result12 = tmp2(5790);
          tmp39Result = closure_8(Text5, obj23);
          tmp39 = closure_8;
        }
      }
      tmp39 = closure_8;
      const obj24 = { variant: "body-md/medium", style: tmp.message, children: null };
      if (null != first) {
        let formatToPlainStringResult;
        let name;
        if (stateFromStores != null) {
          name = stateFromStores.name;
        }
        if (null != name) {
          const intl6 = tmp2(1112).intl;
          const obj25 = { itemName: stateFromStores.name };
          formatToPlainStringResult = intl6.formatToPlainString(tmp2(1112).t["4kp0AB"], obj25);
        }
        obj24.children = formatToPlainStringResult;
        tmp39Result = tmp39(tmp40, obj24);
      }
      const intl5 = tmp2(1112).intl;
      formatToPlainStringResult = intl5.string(tmp2(1112).t["5ayf7w"]);
    }
  }
  if (type === BUNDLE) {
    if (null != product) {
      const obj26 = { style: tmp.bundleContainer, children: closure_8(closure_5, obj27) };
      obj27 = { style: tmp.bundlePreview, onLayout: callback, children: tmp24Result };
      tmp24Result = null != tmp18;
      if (tmp24Result) {
        const obj28 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, previewAssets: product.previewAssets, disableStaticBackground: true, size: "large", targetSize: tmp18 };
        tmp24Result = tmp24(user(9467), obj28);
      }
      tmp24Result2 = tmp24(tmp25, obj26);
    }
  }
  const str = tmp2(5836);
  const match = str.match(first);
  const obj29 = { type: tmp2(2113).CollectiblesItemType.AVATAR_DECORATION };
  const withResult = match.with(obj29, (avatarDecoration) => {
    let avatarSource;
    const Avatar = native.Avatar;
    const tmp = metroImportAll;
    const tmp4 = user;
    if (user != null) {
      const getAvatarSource = tmp4.getAvatarSource;
      avatarSource = getAvatarSource(null, true, tmp2(1186).AVATAR_SIZE_MAP[tmp2(undefined, 1186).AvatarSizes.GIFT_SUCCESS]);
    }
    const obj = { source: avatarSource, avatarDecoration, size: native.AvatarSizes.GIFT_SUCCESS, animate: true };
    return tmp(Avatar, obj);
  });
  const obj30 = { type: tmp2(2113).CollectiblesItemType.PROFILE_EFFECT };
  const withResult1 = withResult.with(obj30, (profileEffect) => {
    const obj = { user, profileEffect };
    return metroImportAll(ProfileEffectUserPreviewDefault, obj);
  });
  const obj31 = { type: tmp2(2113).CollectiblesItemType.PROFILE_FRAME };
  const withResult2 = withResult1.with(obj31, (profileFrame) => {
    const obj = { user, profileFrame };
    return metroImportAll(ProfileFrameUserPreviewDefault, obj);
  });
  const obj32 = { type: tmp2(2113).CollectiblesItemType.NAMEPLATE };
  const withResult3 = withResult2.with(obj32, (nameplate) => {
    let obj2;
    const obj = { style: nameplateContainer.nameplateContainer, children: metroImportAll(NameplatePreview.NameplatePreview, obj2) };
    obj2 = { user, nameplate };
    return metroImportAll(hasOwnProperty, obj);
  });
  tmp24Result2 = withResult3.otherwise(() => {
    const obj = { giftStyle: giftCode.giftStyle };
    return metroImportAll(GiftBoxAnimationDefault, obj);
  });
};
