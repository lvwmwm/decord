// Module ID: 12261
// Function ID: 95725
// Name: GiftCodeRedeemSuccess
// Dependencies: [31, 27, 4175, 8200, 33, 4130, 689, 566, 8202, 5470, 8206, 6786, 1876, 8207, 9778, 5121, 5611, 8212, 5474, 8215, 4329, 1273, 8234, 8750, 9805, 12257, 4126, 1212, 4366, 4543, 4337, 2]
// Exports: default

// Module 12261 (GiftCodeRedeemSuccess)
import "set";
import get_ActivityIndicator from "getSystemLocale";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { BUNDLE_PREVIEW_CONFIG } from "SAMPLE_PROFILE_ASPECT_RATIO";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_3, ScrollView: closure_4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = { width: BUNDLE_PREVIEW_CONFIG.large.bundleWidth, height: BUNDLE_PREVIEW_CONFIG.large.bundleHeight };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, justifyContent: "space-between", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.body = { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28, paddingBottom: 12, paddingHorizontal: 32 };
_createForOfIteratorHelperLoose.nameplateContainer = { width: "100%", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj2 = { width: "100%", alignItems: "center", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.bundleContainer = obj2;
_createForOfIteratorHelperLoose.header = { marginTop: 32, textAlign: "center" };
_createForOfIteratorHelperLoose.message = { marginTop: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.footer = { paddingHorizontal: 24 };
_createForOfIteratorHelperLoose.gameItemCard = { marginTop: 20 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { width: "100%", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemSuccess.tsx");

export default function GiftCodeRedeemSuccess(giftCode) {
  let firstAvatarDecoration;
  let firstProfileEffect;
  let handleUseNow;
  let isApplying;
  giftCode = giftCode.giftCode;
  const user = giftCode.user;
  const tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  let obj = giftCode(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.get(giftCode.skuId));
  let obj1 = giftCode(8202);
  const getOrFetchSubscriptionPlan = obj1.useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  let obj2 = giftCode(5470);
  const getOrFetchApplication = obj2.useGetOrFetchApplication(giftCode.applicationId);
  let obj3 = giftCode(8206);
  let obj4 = giftCode(6786);
  let skuId = null;
  if (obj4.isCollectiblesGiftCode(giftCode)) {
    skuId = giftCode.skuId;
  }
  const product = obj3.useFetchCollectiblesProduct(skuId, true).product;
  let first;
  if (null != product) {
    first = product.items[0];
  }
  let type;
  if (null != product) {
    type = product.type;
  }
  let tmp8 = type === giftCode(1876).CollectiblesItemType.BUNDLE;
  let obj5 = giftCode(8207);
  let tmp9 = product;
  if (null == product) {
    obj = { items: [] };
    tmp9 = obj;
  }
  const shopProductItems = obj5.useShopProductItems(tmp9);
  ({ firstAvatarDecoration, firstProfileEffect } = shopProductItems);
  let obj7 = giftCode(9778);
  obj = {};
  let tmp11 = product;
  if (null == product) {
    obj1 = { skuId: "", type: giftCode(1876).CollectiblesItemType.BUNDLE, items: [] };
    tmp11 = obj1;
  }
  obj.product = tmp11;
  handleUseNow = obj7.useHandleUseNow(obj);
  ({ handleUseNow, isApplying } = handleUseNow);
  obj2 = { bottom: true, style: tmp.container };
  obj3 = { contentContainerStyle: tmp.body, alwaysBounceVertical: false };
  if (null == first) {
    if (null != getOrFetchApplication) {
      let obj23 = giftCode(5611);
      if (obj23.isGameItemSKU(stateFromStores)) {
        obj4 = { style: tmp.gameItemCard };
        obj5 = { sku: stateFromStores };
        obj4.children = tmp25(user(8212), obj5);
        let tmp25Result = tmp25(closure_3, obj4);
      } else {
        const obj6 = { game: getOrFetchApplication, size: giftCode(5474).GameIconSizes.LARGE, skuId: giftCode.skuId };
        tmp25Result = tmp25(user(5474), obj6);
        const tmp28 = user(5474);
      }
    }
  }
  if (tmp8) {
    if (null != product) {
      if (null != firstAvatarDecoration) {
        if (null != firstProfileEffect) {
          obj7 = { style: tmp.bundleContainer };
          const obj8 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: shopProductItems.firstNameplate, size: "large", targetSize: closure_8 };
          obj7.children = callback(user(8215), obj8);
          let otherwiseResult = callback(closure_3, obj7);
        }
        const items1 = [otherwiseResult, , ];
        if (null == stateFromStores) {
          const obj9 = { variant: "heading-xl/bold", style: tmp.header, accessibilityRole: "header" };
          const intl4 = giftCode(1212).intl;
          obj9.children = intl4.string(giftCode(1212).t["+BNMcF"]);
          let tmp35 = callback(giftCode(4126).Text, obj9);
        } else {
          if (obj43.isGameItemSKU(stateFromStores)) {
            const obj10 = { variant: "heading-xl/bold", style: tmp.header, accessibilityRole: "header" };
            const intl3 = giftCode(1212).intl;
            obj10.children = intl3.string(giftCode(1212).t["5glWta"]);
            tmp35 = callback(giftCode(4126).Text, obj10);
          } else {
            if (giftCode.isSubscription) {
              if (null != getOrFetchSubscriptionPlan) {
                const obj11 = { variant: "heading-xl/bold", style: tmp.header, accessibilityRole: "header" };
                const intl2 = giftCode(1212).intl;
                const obj12 = { skuName: stateFromStores.name };
                obj11.children = intl2.format(giftCode(1212).t["1C2BG/"], obj12);
                tmp35 = callback(giftCode(4126).Text, obj11);
              }
            }
            if (null != first) {
              const obj13 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.header, accessibilityRole: "header" };
              const intl = giftCode(1212).intl;
              obj13.children = intl.string(giftCode(1212).t.IMffmm);
              tmp35 = callback(giftCode(4126).Text, obj13);
            }
          }
          obj43 = giftCode(5611);
        }
        items1[1] = tmp35;
        if (obj33.isGameItemSKU(stateFromStores)) {
          if (null != getOrFetchApplication) {
            const obj14 = { variant: "text-md/medium", style: tmp.message };
            const intl7 = giftCode(1212).intl;
            const obj15 = {};
            let name;
            if (null != stateFromStores) {
              name = stateFromStores.name;
            }
            let str7 = "";
            if (null != name) {
              str7 = name;
            }
            obj15.skuName = str7;
            obj15.applicationName = getOrFetchApplication.name;
            obj14.children = intl7.formatToPlainString(giftCode(1212).t.W2znvX, obj15);
            let tmp50Result = callback(giftCode(4126).Text, obj14);
            const tmp64 = callback;
          }
          items1[2] = tmp50Result;
          obj3.children = items1;
          const items2 = [tmp15(tmp16, obj3), ];
          const obj16 = { style: tmp.footer };
          if (null == first) {
            const obj17 = {};
            const intl8 = giftCode(1212).intl;
            obj17.text = intl8.string(giftCode(1212).t["NX+WJN"]);
            obj17.size = "md";
            obj17.onPress = user(4337).pop;
            let obj18 = obj17;
          } else {
            obj18 = {};
            const intl9 = giftCode(1212).intl;
            obj18.text = intl9.string(giftCode(1212).t.MAS7uK);
            obj18.size = "md";
            obj18.loading = isApplying;
            let tmp73 = null != first;
            if (tmp73) {
              let tmp72 = !tmp8;
              if (tmp8) {
                if (tmp8) {
                  tmp8 = null != product;
                }
                if (tmp8) {
                  tmp8 = null != firstAvatarDecoration;
                }
                if (tmp8) {
                  tmp8 = null != firstProfileEffect;
                }
                tmp72 = tmp8;
              }
              tmp73 = tmp72;
            }
            obj18.disabled = !tmp73;
            obj18.onPress = handleUseNow;
          }
          obj16.children = callback(giftCode(4543).Button, obj18);
          items2[1] = callback(closure_3, obj16);
          obj2.children = items2;
          return tmp15(giftCode(5121).SafeAreaPaddingView, obj2);
        }
        if (giftCode.isSubscription) {
          if (null != getOrFetchSubscriptionPlan) {
            const obj19 = { variant: "text-md/medium", style: tmp.message, children: giftCode(4366).getSubscriptionGiftSuccessText(getOrFetchSubscriptionPlan) };
            tmp50Result = callback(giftCode(4126).Text, obj19);
            const obj37 = giftCode(4366);
          }
        }
        const obj20 = { variant: "text-md/medium", style: tmp.message };
        if (null != first) {
          let name1;
          if (null != stateFromStores) {
            name1 = stateFromStores.name;
          }
          if (null != name1) {
            const intl6 = giftCode(1212).intl;
            const obj21 = { itemName: stateFromStores.name };
            let formatToPlainStringResult = intl6.formatToPlainString(giftCode(1212).t["4kp0AB"], obj21);
          }
          obj20.children = formatToPlainStringResult;
          tmp50Result = tmp50(tmp53, obj20);
        }
        const intl5 = giftCode(1212).intl;
        formatToPlainStringResult = intl5.string(giftCode(1212).t["5ayf7w"]);
        obj33 = giftCode(5611);
        tmp50 = callback;
      }
    }
  }
  const match = giftCode(4329).match(first);
  const str2 = giftCode(4329);
  tmp16 = closure_4;
  const obj22 = { type: giftCode(1876).CollectiblesItemType.AVATAR_DECORATION };
  obj23 = { type: giftCode(1876).CollectiblesItemType.PROFILE_EFFECT };
  const withResult = match.with({ type: giftCode(1876).CollectiblesItemType.AVATAR_DECORATION }, (avatarDecoration) => {
    const obj = {};
    let avatarSource;
    if (null != user) {
      avatarSource = user.getAvatarSource(null, true, giftCode(tmp[21]).AVATAR_SIZE_MAP[giftCode(undefined, tmp[21]).AvatarSizes.GIFT_SUCCESS]);
    }
    obj.source = avatarSource;
    obj.avatarDecoration = avatarDecoration;
    obj.size = giftCode(outer1_6[21]).AvatarSizes.GIFT_SUCCESS;
    obj.animate = true;
    return outer1_6(giftCode(outer1_6[21]).Avatar, obj);
  });
  const withResult1 = match.with({ type: giftCode(1876).CollectiblesItemType.AVATAR_DECORATION }, (avatarDecoration) => {
    const obj = {};
    let avatarSource;
    if (null != user) {
      avatarSource = user.getAvatarSource(null, true, giftCode(tmp[21]).AVATAR_SIZE_MAP[giftCode(undefined, tmp[21]).AvatarSizes.GIFT_SUCCESS]);
    }
    obj.source = avatarSource;
    obj.avatarDecoration = avatarDecoration;
    obj.size = giftCode(outer1_6[21]).AvatarSizes.GIFT_SUCCESS;
    obj.animate = true;
    return outer1_6(giftCode(outer1_6[21]).Avatar, obj);
  }).with(obj23, (profileEffect) => outer1_6(user(tmp[22]), { user, profileEffect }));
  const obj24 = { type: giftCode(1876).CollectiblesItemType.PROFILE_FRAME };
  const withResult2 = withResult1.with({ type: giftCode(1876).CollectiblesItemType.PROFILE_FRAME }, (profileFrame) => outer1_6(user(tmp[23]), { user, profileFrame }));
  const obj25 = { type: giftCode(1876).CollectiblesItemType.NAMEPLATE };
  otherwiseResult = withResult2.with({ type: giftCode(1876).CollectiblesItemType.NAMEPLATE }, (nameplate) => {
    obj = { style: tmp.nameplateContainer, children: outer1_6(giftCode(tmp[24]).NameplatePreview, obj) };
    obj = { user, nameplate };
    return outer1_6(outer1_3, obj);
  }).otherwise(() => outer1_6(user(tmp[25]), { giftStyle: giftCode.giftStyle }));
};
