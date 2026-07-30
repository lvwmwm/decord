// Module ID: 12324
// Function ID: 12325
// Name: GiftCodeRedeemSuccess
// Dependencies: [19, 17, 4234, 8036, 21, 4189, 712, 589, 8038, 5521, 8042, 5810, 1901, 8043, 9793, 5177, 5662, 8050, 5525, 8053, 4389, 1297, 8072, 8741, 9820, 12320, 4185, 1236, 4424, 4600, 4395, 2]
// Exports: default

// Module 12324 (GiftCodeRedeemSuccess)
import "BundleStaticPreviewContent";
import get_ActivityIndicator from "SlayerStorefrontItemCard";
import addSku from "addSku";
import { BUNDLE_PREVIEW_CONFIG } from "SAMPLE_PROFILE_ASPECT_RATIO";
import jsxProd from "Button";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let closure_6;
let error;
const require = arg1;
({ View: c3, ScrollView: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = { width: BUNDLE_PREVIEW_CONFIG.large.bundleWidth, height: BUNDLE_PREVIEW_CONFIG.large.bundleHeight };
createCacheKey = { container: null, body: null, nameplateContainer: null, bundleContainer: null, header: null, message: null, footer: null, gameItemCard: null };
createCacheKey = { flex: 1, justifyContent: "space-between", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28, paddingBottom: 12, paddingHorizontal: 32 };
createCacheKey[2] = { width: "100%", paddingTop: require("Themes").space.PX_24 };
let obj1 = { width: "100%", paddingTop: require("Themes").space.PX_24 };
createCacheKey[3] = { width: "100%", alignItems: "center", paddingTop: require("Themes").space.PX_24 };
createCacheKey[4] = { marginTop: 32, textAlign: "center" };
createCacheKey[5] = { marginTop: 8, textAlign: "center" };
createCacheKey[6] = { paddingHorizontal: 24 };
createCacheKey[7] = { marginTop: 20 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { width: "100%", alignItems: "center", paddingTop: require("Themes").space.PX_24 };
const result = require("addSku").fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemSuccess.tsx");

export default function GiftCodeRedeemSuccess(giftCode) {
  let canUseNow;
  let firstAvatarDecoration;
  let firstNameplate;
  let firstProfileEffect;
  let handleUseNow;
  giftCode = giftCode.giftCode;
  const user = giftCode.user;
  let dependencyMap;
  const tmp = createCacheKey();
  dependencyMap = tmp;
  let obj = giftCode(589);
  const items = [addSku];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.get(giftCode.skuId));
  let obj1 = giftCode(8038);
  const getOrFetchSubscriptionPlan = obj1.useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  let obj2 = giftCode(5521);
  const getOrFetchApplication = obj2.useGetOrFetchApplication(giftCode.applicationId);
  let obj3 = giftCode(8042);
  let obj4 = giftCode(5810);
  let skuId = null;
  if (obj4.isCollectiblesGiftCode(giftCode)) {
    skuId = giftCode.skuId;
  }
  const product = obj3.useFetchCollectiblesProduct(skuId, true).product;
  let first;
  if (product != null) {
    first = product.items[0];
  }
  let type;
  if (product != null) {
    type = product.type;
  }
  let tmp2Result = tmp2(8043);
  let tmp10 = product;
  if (product == null) {
    obj = { items: null };
    obj[0] = [];
    tmp10 = obj;
  }
  const shopProductItems = tmp2Result.useShopProductItems(tmp10);
  ({ firstAvatarDecoration, firstProfileEffect, firstNameplate } = shopProductItems);
  tmp2Result = tmp2(9793);
  let tmp12 = product;
  if (product == null) {
    obj = { skuId: "", type: null, items: null };
    obj[1] = tmp2(1901).CollectiblesItemType.BUNDLE;
    obj[2] = [];
    tmp12 = obj;
  }
  handleUseNow = tmp2Result.useHandleUseNow({ product: tmp12 });
  const isApplying = handleUseNow.isApplying;
  ({ handleUseNow, canUseNow } = handleUseNow);
  obj1 = { bottom: true, style: tmp.container, children: null };
  obj2 = { contentContainerStyle: tmp.body, alwaysBounceVertical: false, children: null };
  if (null == first) {
    if (null != getOrFetchApplication) {
      if (tmp2Result1.isGameItemSKU(stateFromStores)) {
        obj3 = { style: null, children: null };
        obj3[0] = tmp.gameItemCard;
        obj4 = { sku: null };
        obj4[0] = stateFromStores;
        obj3[1] = tmp21(user(8050), obj4);
        let tmp21Result = tmp21(closure_3, obj3);
      } else {
        const obj5 = { game: null, size: null, skuId: null };
        obj5[0] = getOrFetchApplication;
        obj5[1] = tmp2(5525).GameIconSizes.LARGE;
        obj5[2] = giftCode.skuId;
        tmp21Result = tmp21(user(5525), obj5);
        const tmp23 = user(5525);
      }
      tmp2Result1 = tmp2(5662);
    }
  }
  if (type === giftCode(1901).CollectiblesItemType.BUNDLE) {
    if (null != product) {
      if (null != firstAvatarDecoration) {
        if (null != firstProfileEffect) {
          const obj6 = { style: null, children: null };
          obj6[0] = tmp.bundleContainer;
          const obj7 = { deco: null, pfx: null, nameplate: null, size: "large", targetSize: null };
          obj7[0] = firstAvatarDecoration;
          obj7[1] = firstProfileEffect;
          obj7[2] = firstNameplate;
          obj7[4] = closure_8;
          obj6[1] = callback(user(8053), obj7);
          let otherwiseResult = callback(closure_3, obj6);
        }
        const items1 = [otherwiseResult, , ];
        if (null == stateFromStores) {
          const obj8 = { variant: "heading-xl/bold", style: null, accessibilityRole: "header", children: null };
          obj8[1] = tmp.header;
          const intl4 = tmp2(1236).intl;
          obj8[3] = intl4.string(tmp2(1236).t["+BNMcF"]);
          let tmp28 = callback(tmp2(4185).Text, obj8);
        } else {
          if (tmp2Result2.isGameItemSKU(stateFromStores)) {
            const obj9 = { variant: "heading-xl/bold", style: null, accessibilityRole: "header", children: null };
            obj9[1] = tmp.header;
            const intl3 = tmp2(1236).intl;
            obj9[3] = intl3.string(tmp2(1236).t["5glWta"]);
            tmp28 = callback(tmp2(4185).Text, obj9);
          } else {
            if (giftCode.isSubscription) {
              if (null != getOrFetchSubscriptionPlan) {
                const obj10 = { variant: "heading-xl/bold", style: null, accessibilityRole: "header", children: null };
                obj10[1] = tmp.header;
                const intl2 = tmp2(1236).intl;
                const obj11 = { skuName: null };
                obj11[0] = stateFromStores.name;
                obj10[3] = intl2.format(tmp2(1236).t["1C2BG/"], obj11);
                tmp28 = callback(tmp2(4185).Text, obj10);
              }
            }
            if (null != first) {
              const obj12 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: null, accessibilityRole: "header", children: null };
              obj12[2] = tmp.header;
              const intl = tmp2(1236).intl;
              obj12[4] = intl.string(tmp2(1236).t.IMffmm);
              tmp28 = callback(tmp2(4185).Text, obj12);
            }
          }
          tmp2Result2 = tmp2(5662);
        }
        items1[1] = tmp28;
        if (tmp2Result3.isGameItemSKU(stateFromStores)) {
          if (null != getOrFetchApplication) {
            const obj13 = { variant: "text-md/medium", style: null, children: null };
            obj13[1] = tmp.message;
            const intl7 = tmp2(1236).intl;
            let str2;
            if (stateFromStores != null) {
              str2 = stateFromStores.name;
            }
            if (str2 == null) {
              str2 = "";
            }
            const obj14 = { skuName: null, applicationName: null };
            obj14[0] = str2;
            obj14[1] = getOrFetchApplication.name;
            obj13[2] = intl7.formatToPlainString(tmp2(1236).t.W2znvX, obj14);
            let tmp33Result = tmp39(tmp2(4185).Text, obj13);
            let tmp33 = tmp39;
          }
          items1[2] = tmp33Result;
          obj2[2] = items1;
          const items2 = [tmp14(tmp15, obj2), ];
          const obj15 = { style: null, children: null };
          obj15[0] = tmp.footer;
          if (null != first) {
            if (canUseNow) {
              const obj16 = { text: null, size: "md", loading: null, disabled: null, onPress: null };
              const intl9 = tmp2(1236).intl;
              obj16[0] = intl9.string(tmp2(1236).t.MAS7uK);
              obj16[2] = isApplying;
              obj16[3] = isApplying;
              obj16[4] = handleUseNow;
              let obj17 = obj16;
            }
            obj15[1] = tmp33(tmp41, obj17);
            items2[1] = tmp33(tmp40, obj15);
            obj1[2] = items2;
            return tmp14(tmp2(5177).SafeAreaPaddingView, obj1);
          }
          obj17 = { text: null, size: "md", onPress: null };
          const intl8 = tmp2(1236).intl;
          obj17[0] = intl8.string(tmp2(1236).t["NX+WJN"]);
          obj17[2] = user(4395).pop;
          tmp40 = closure_3;
        }
        if (giftCode.isSubscription) {
          if (null != getOrFetchSubscriptionPlan) {
            const obj18 = { variant: "text-md/medium", style: null, children: null };
            obj18[1] = tmp.message;
            obj18[2] = tmp2(4424).getSubscriptionGiftSuccessText(getOrFetchSubscriptionPlan);
            tmp33Result = callback(tmp2(4185).Text, obj18);
            tmp33 = callback;
            const tmp2Result4 = tmp2(4424);
          }
        }
        tmp33 = callback;
        const obj19 = { variant: "text-md/medium", style: null, children: null };
        obj19[1] = tmp.message;
        if (null != first) {
          let name;
          if (stateFromStores != null) {
            name = stateFromStores.name;
          }
          if (null != name) {
            const intl6 = tmp2(1236).intl;
            const obj20 = { itemName: null };
            obj20[0] = stateFromStores.name;
            let formatToPlainStringResult = intl6.formatToPlainString(tmp2(1236).t["4kp0AB"], obj20);
          }
          obj19[2] = formatToPlainStringResult;
          tmp33Result = tmp33(tmp34, obj19);
        }
        const intl5 = tmp2(1236).intl;
        formatToPlainStringResult = intl5.string(tmp2(1236).t["5ayf7w"]);
        tmp2Result3 = tmp2(5662);
      }
    }
  }
  const match = giftCode(4389).match(first);
  const str = giftCode(4389);
  tmp15 = closure_4;
  const obj21 = { type: giftCode(1901).CollectiblesItemType.AVATAR_DECORATION };
  const withResult = match.with({ type: giftCode(1901).CollectiblesItemType.AVATAR_DECORATION }, (avatarDecoration) => {
    let obj = user;
    let avatarSource;
    if (user != null) {
      avatarSource = obj.getAvatarSource(null, true, tmp2(tmp3[21]).AVATAR_SIZE_MAP[tmp2(undefined, tmp3[21]).AvatarSizes.GIFT_SUCCESS]);
    }
    obj = { source: avatarSource, avatarDecoration, size: tmp2(tmp3[21]).AvatarSizes.GIFT_SUCCESS, animate: true };
    return outer1_6(giftCode(_undefined[21]).Avatar, obj);
  });
  const obj22 = { type: giftCode(1901).CollectiblesItemType.PROFILE_EFFECT };
  const withResult1 = withResult.with({ type: giftCode(1901).CollectiblesItemType.PROFILE_EFFECT }, (profileEffect) => outer1_6(user(_undefined[22]), { user, profileEffect }));
  const obj23 = { type: giftCode(1901).CollectiblesItemType.PROFILE_FRAME };
  const withResult2 = withResult1.with({ type: giftCode(1901).CollectiblesItemType.PROFILE_FRAME }, (profileFrame) => outer1_6(user(_undefined[23]), { user, profileFrame }));
  const obj24 = { type: giftCode(1901).CollectiblesItemType.NAMEPLATE };
  otherwiseResult = withResult2.with({ type: giftCode(1901).CollectiblesItemType.NAMEPLATE }, (nameplate) => {
    obj = { style: _undefined.nameplateContainer, children: outer1_6(giftCode(_undefined[24]).NameplatePreview, obj) };
    obj = { user, nameplate };
    return outer1_6(outer1_3, obj);
  }).otherwise(() => outer1_6(user(_undefined[25]), { giftStyle: giftCode.giftStyle }));
};
