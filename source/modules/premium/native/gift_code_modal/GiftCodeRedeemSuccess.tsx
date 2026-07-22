// Module ID: 12147
// Function ID: 93574
// Name: GiftCodeRedeemSuccess
// Dependencies: []
// Exports: default

// Module 12147 (GiftCodeRedeemSuccess)
importAll(dependencyMap[0]);
({ View: closure_3, ScrollView: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
const BUNDLE_PREVIEW_CONFIG = arg1(dependencyMap[3]).BUNDLE_PREVIEW_CONFIG;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let closure_8 = { width: BUNDLE_PREVIEW_CONFIG.large.bundleWidth, height: BUNDLE_PREVIEW_CONFIG.large.bundleHeight };
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { "Null": 0.129, "Null": 1, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.body = {};
const tmp4 = arg1(dependencyMap[4]);
obj.nameplateContainer = { width: "100%", paddingTop: importDefault(dependencyMap[6]).space.PX_24 };
const obj1 = { width: "100%", paddingTop: importDefault(dependencyMap[6]).space.PX_24 };
obj.bundleContainer = { paddingTop: importDefault(dependencyMap[6]).space.PX_24 };
obj.header = { MINIMAL: 43691329, currentScreenId: 1869037824 };
obj.message = { MINIMAL: null, currentScreenId: null };
obj.footer = { paddingHorizontal: 24 };
obj.gameItemCard = { marginTop: 20 };
let closure_9 = obj.createStyles(obj);
const obj2 = { paddingTop: importDefault(dependencyMap[6]).space.PX_24 };
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemSuccess.tsx");

export default function GiftCodeRedeemSuccess(giftCode) {
  let firstAvatarDecoration;
  let firstProfileEffect;
  let handleUseNow;
  let isApplying;
  giftCode = giftCode.giftCode;
  const arg1 = giftCode;
  const importDefault = giftCode.user;
  const tmp = callback2();
  const dependencyMap = tmp;
  let obj = arg1(dependencyMap[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_5.get(giftCode.skuId));
  let obj1 = arg1(dependencyMap[8]);
  const getOrFetchSubscriptionPlan = obj1.useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  let obj2 = arg1(dependencyMap[9]);
  const getOrFetchApplication = obj2.useGetOrFetchApplication(giftCode.applicationId);
  let obj3 = arg1(dependencyMap[10]);
  let obj4 = arg1(dependencyMap[11]);
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
  let tmp8 = type === arg1(dependencyMap[12]).CollectiblesItemType.BUNDLE;
  let obj5 = arg1(dependencyMap[13]);
  let tmp9 = product;
  if (null == product) {
    obj = { items: [] };
    tmp9 = obj;
  }
  const shopProductItems = obj5.useShopProductItems(tmp9);
  ({ firstAvatarDecoration, firstProfileEffect } = shopProductItems);
  let obj7 = arg1(dependencyMap[14]);
  obj = {};
  let tmp11 = product;
  if (null == product) {
    obj1 = { skuId: "", type: arg1(dependencyMap[12]).CollectiblesItemType.BUNDLE, items: [] };
    tmp11 = obj1;
  }
  obj.product = tmp11;
  handleUseNow = obj7.useHandleUseNow(obj);
  ({ handleUseNow, isApplying } = handleUseNow);
  obj2 = { bottom: true, style: tmp.container };
  obj3 = { contentContainerStyle: tmp.body, alwaysBounceVertical: false };
  if (null == first) {
    if (null != getOrFetchApplication) {
      let obj23 = arg1(dependencyMap[16]);
      if (obj23.isGameItemSKU(stateFromStores)) {
        obj4 = { style: tmp.gameItemCard };
        obj5 = { sku: stateFromStores };
        obj4.children = tmp25(importDefault(dependencyMap[17]), obj5);
        let tmp25Result = tmp25(closure_3, obj4);
      } else {
        const obj6 = { game: getOrFetchApplication, size: arg1(dependencyMap[18]).GameIconSizes.LARGE, skuId: giftCode.skuId };
        tmp25Result = tmp25(importDefault(dependencyMap[18]), obj6);
        const tmp28 = importDefault(dependencyMap[18]);
      }
    }
  }
  if (tmp8) {
    if (null != product) {
      if (null != firstAvatarDecoration) {
        if (null != firstProfileEffect) {
          obj7 = { style: tmp.bundleContainer };
          const obj8 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: shopProductItems.firstNameplate, size: "large", targetSize: closure_8 };
          obj7.children = callback(importDefault(dependencyMap[19]), obj8);
          let otherwiseResult = callback(closure_3, obj7);
        }
        const items1 = [otherwiseResult, , ];
        if (null == stateFromStores) {
          const obj9 = { <string:3339517956>: "FORWARD_MESSAGE_STARTED", <string:3335454724>: "isArray", <string:2271412228>: "SET_AUDIO_DEVICE_BY_ID", style: tmp.header };
          const intl4 = arg1(dependencyMap[27]).intl;
          obj9.children = intl4.string(arg1(dependencyMap[27]).t.+BNMcF);
          let tmp35 = callback(arg1(dependencyMap[26]).Text, obj9);
        } else {
          if (obj43.isGameItemSKU(stateFromStores)) {
            const obj10 = { <string:3339517956>: "FORWARD_MESSAGE_STARTED", <string:3335454724>: "isArray", <string:2271412228>: "SET_AUDIO_DEVICE_BY_ID", style: tmp.header };
            const intl3 = arg1(dependencyMap[27]).intl;
            obj10.children = intl3.string(arg1(dependencyMap[27]).t.5glWta);
            tmp35 = callback(arg1(dependencyMap[26]).Text, obj10);
          } else {
            if (giftCode.isSubscription) {
              if (null != getOrFetchSubscriptionPlan) {
                const obj11 = { <string:3339517956>: "FORWARD_MESSAGE_STARTED", <string:3335454724>: "isArray", <string:2271412228>: "SET_AUDIO_DEVICE_BY_ID", style: tmp.header };
                const intl2 = arg1(dependencyMap[27]).intl;
                const obj12 = { skuName: stateFromStores.name };
                obj11.children = intl2.format(arg1(dependencyMap[27]).t.1C2BG/, obj12);
                tmp35 = callback(arg1(dependencyMap[26]).Text, obj11);
              }
            }
            if (null != first) {
              const obj13 = { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011454504407100313, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004026493667951817, paddingHorizontal: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003202169671031755, backgroundColor: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000062920633412691296, style: tmp.header };
              const intl = arg1(dependencyMap[27]).intl;
              obj13.children = intl.string(arg1(dependencyMap[27]).t.IMffmm);
              tmp35 = callback(arg1(dependencyMap[26]).Text, obj13);
            }
          }
          const obj43 = arg1(dependencyMap[16]);
        }
        items1[1] = tmp35;
        if (obj33.isGameItemSKU(stateFromStores)) {
          if (null != getOrFetchApplication) {
            const obj14 = { variant: "text-md/medium", style: tmp.message };
            const intl7 = arg1(dependencyMap[27]).intl;
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
            obj14.children = intl7.formatToPlainString(arg1(dependencyMap[27]).t.W2znvX, obj15);
            let tmp50Result = callback(arg1(dependencyMap[26]).Text, obj14);
            const tmp64 = callback;
          }
          items1[2] = tmp50Result;
          obj3.children = items1;
          const items2 = [tmp15(tmp16, obj3), ];
          const obj16 = { style: tmp.footer };
          if (null == first) {
            const obj17 = {};
            const intl8 = arg1(dependencyMap[27]).intl;
            obj17.text = intl8.string(arg1(dependencyMap[27]).t.NX+WJN);
            obj17.size = "md";
            obj17.onPress = importDefault(dependencyMap[30]).pop;
            let obj18 = obj17;
          } else {
            obj18 = {};
            const intl9 = arg1(dependencyMap[27]).intl;
            obj18.text = intl9.string(arg1(dependencyMap[27]).t.MAS7uK);
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
          obj16.children = callback(arg1(dependencyMap[29]).Button, obj18);
          items2[1] = callback(closure_3, obj16);
          obj2.children = items2;
          return tmp15(arg1(dependencyMap[15]).SafeAreaPaddingView, obj2);
        }
        if (giftCode.isSubscription) {
          if (null != getOrFetchSubscriptionPlan) {
            const obj19 = { variant: "text-md/medium", style: tmp.message, children: arg1(dependencyMap[28]).getSubscriptionGiftSuccessText(getOrFetchSubscriptionPlan) };
            tmp50Result = callback(arg1(dependencyMap[26]).Text, obj19);
            const obj37 = arg1(dependencyMap[28]);
          }
        }
        const obj20 = { variant: "text-md/medium", style: tmp.message };
        if (null != first) {
          let name1;
          if (null != stateFromStores) {
            name1 = stateFromStores.name;
          }
          if (null != name1) {
            const intl6 = arg1(dependencyMap[27]).intl;
            const obj21 = { itemName: stateFromStores.name };
            let formatToPlainStringResult = intl6.formatToPlainString(arg1(dependencyMap[27]).t.4kp0AB, obj21);
          }
          obj20.children = formatToPlainStringResult;
          tmp50Result = tmp50(tmp53, obj20);
        }
        const intl5 = arg1(dependencyMap[27]).intl;
        formatToPlainStringResult = intl5.string(arg1(dependencyMap[27]).t.5ayf7w);
        const obj33 = arg1(dependencyMap[16]);
        const tmp50 = callback;
      }
    }
  }
  const match = arg1(dependencyMap[20]).match(first);
  const str2 = arg1(dependencyMap[20]);
  const tmp16 = closure_4;
  const obj22 = { type: arg1(dependencyMap[12]).CollectiblesItemType.AVATAR_DECORATION };
  obj23 = { type: arg1(dependencyMap[12]).CollectiblesItemType.PROFILE_EFFECT };
  const withResult = match.with({ type: arg1(dependencyMap[12]).CollectiblesItemType.AVATAR_DECORATION }, (avatarDecoration) => {
    const obj = {};
    let avatarSource;
    if (null != user) {
      avatarSource = user.getAvatarSource(null, true, giftCode(tmp[21]).AVATAR_SIZE_MAP[closure_0(undefined, closure_2[21]).AvatarSizes.GIFT_SUCCESS]);
    }
    obj.source = avatarSource;
    obj.avatarDecoration = avatarDecoration;
    obj.size = giftCode(closure_6[21]).AvatarSizes.GIFT_SUCCESS;
    obj.animate = true;
    return closure_6(giftCode(closure_6[21]).Avatar, obj);
  });
  const withResult1 = match.with({ type: arg1(dependencyMap[12]).CollectiblesItemType.AVATAR_DECORATION }, (avatarDecoration) => {
    const obj = {};
    let avatarSource;
    if (null != user) {
      avatarSource = user.getAvatarSource(null, true, giftCode(tmp[21]).AVATAR_SIZE_MAP[closure_0(undefined, closure_2[21]).AvatarSizes.GIFT_SUCCESS]);
    }
    obj.source = avatarSource;
    obj.avatarDecoration = avatarDecoration;
    obj.size = giftCode(closure_6[21]).AvatarSizes.GIFT_SUCCESS;
    obj.animate = true;
    return closure_6(giftCode(closure_6[21]).Avatar, obj);
  }).with(obj23, (profileEffect) => callback(user(tmp[22]), { user, profileEffect }));
  const obj24 = { type: arg1(dependencyMap[12]).CollectiblesItemType.PROFILE_FRAME };
  const withResult2 = withResult1.with({ type: arg1(dependencyMap[12]).CollectiblesItemType.PROFILE_FRAME }, (profileFrame) => callback(user(tmp[23]), { user, profileFrame }));
  const obj25 = { type: arg1(dependencyMap[12]).CollectiblesItemType.NAMEPLATE };
  otherwiseResult = withResult2.with({ type: arg1(dependencyMap[12]).CollectiblesItemType.NAMEPLATE }, (nameplate) => {
    let obj = { style: tmp.nameplateContainer, children: callback(giftCode(tmp[24]).NameplatePreview, obj) };
    obj = { user, nameplate };
    return callback(closure_3, obj);
  }).otherwise(() => callback(user(tmp[25]), { giftStyle: giftCode.giftStyle }));
};
