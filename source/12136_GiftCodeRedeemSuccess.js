// Module ID: 12136
// Function ID: 93513
// Name: GiftCodeRedeemSuccess
// Dependencies: []
// Exports: default

// Module 12136 (GiftCodeRedeemSuccess)
importAll(dependencyMap[0]);
({ View: closure_3, ScrollView: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { -9223372036854775808: 0.129, 0: 1, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.body = { 0: true, 9223372036854775807: true, 0: true, 0: true, 0: true, 0: true };
const tmp4 = arg1(dependencyMap[3]);
obj.nameplateContainer = { width: "100%", paddingTop: importDefault(dependencyMap[5]).space.PX_24 };
const obj1 = { width: "100%", paddingTop: importDefault(dependencyMap[5]).space.PX_24 };
obj.bundleContainer = { paddingTop: importDefault(dependencyMap[5]).space.PX_24 };
obj.header = { accessible: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000029233630968962463, id: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000026408941893 };
obj.message = { accessible: null, id: null };
obj.footer = { paddingHorizontal: 24 };
obj.gameItemCard = { marginTop: 20 };
let closure_8 = obj.createStyles(obj);
const obj2 = { paddingTop: importDefault(dependencyMap[5]).space.PX_24 };
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemSuccess.tsx");

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
  let obj = arg1(dependencyMap[6]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_5.get(giftCode.skuId));
  let obj1 = arg1(dependencyMap[7]);
  const getOrFetchSubscriptionPlan = obj1.useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  let obj2 = arg1(dependencyMap[8]);
  const getOrFetchApplication = obj2.useGetOrFetchApplication(giftCode.applicationId);
  let obj3 = arg1(dependencyMap[9]);
  let obj4 = arg1(dependencyMap[10]);
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
  let tmp8 = type === arg1(dependencyMap[11]).CollectiblesItemType.BUNDLE;
  let obj5 = arg1(dependencyMap[12]);
  let tmp9 = product;
  if (null == product) {
    obj = { items: [] };
    tmp9 = obj;
  }
  const shopProductItems = obj5.useShopProductItems(tmp9);
  ({ firstAvatarDecoration, firstProfileEffect } = shopProductItems);
  let obj7 = arg1(dependencyMap[13]);
  obj = {};
  let tmp11 = product;
  if (null == product) {
    obj1 = { skuId: "", type: arg1(dependencyMap[11]).CollectiblesItemType.BUNDLE, items: [] };
    tmp11 = obj1;
  }
  obj.product = tmp11;
  handleUseNow = obj7.useHandleUseNow(obj);
  ({ handleUseNow, isApplying } = handleUseNow);
  obj2 = { bottom: true, style: tmp.container };
  obj3 = { contentContainerStyle: tmp.body, alwaysBounceVertical: false };
  if (null == first) {
    if (null != getOrFetchApplication) {
      let obj23 = arg1(dependencyMap[15]);
      if (obj23.isGameItemSKU(stateFromStores)) {
        obj4 = { style: tmp.gameItemCard };
        obj5 = { sku: stateFromStores };
        obj4.children = tmp24(importDefault(dependencyMap[16]), obj5);
        let tmp24Result = tmp24(closure_3, obj4);
      } else {
        const obj6 = { game: getOrFetchApplication, size: arg1(dependencyMap[17]).GameIconSizes.LARGE, skuId: giftCode.skuId };
        tmp24Result = tmp24(importDefault(dependencyMap[17]), obj6);
        const tmp27 = importDefault(dependencyMap[17]);
      }
    }
  }
  if (tmp8) {
    if (null != product) {
      if (null != firstAvatarDecoration) {
        if (null != firstProfileEffect) {
          obj7 = { style: tmp.bundleContainer };
          const obj8 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: shopProductItems.firstNameplate, size: "large" };
          obj7.children = callback(importDefault(dependencyMap[18]), obj8);
          let otherwiseResult = callback(closure_3, obj7);
        }
        const items1 = [otherwiseResult, , ];
        if (null == stateFromStores) {
          const obj9 = { "Bool(true)": 88, "Bool(true)": 80, "Bool(true)": null, style: tmp.header };
          const intl4 = arg1(dependencyMap[26]).intl;
          obj9.children = intl4.string(arg1(dependencyMap[26]).t.+BNMcF);
          let tmp34 = callback(arg1(dependencyMap[25]).Text, obj9);
        } else {
          if (obj43.isGameItemSKU(stateFromStores)) {
            const obj10 = { "Bool(true)": 88, "Bool(true)": 80, "Bool(true)": null, style: tmp.header };
            const intl3 = arg1(dependencyMap[26]).intl;
            obj10.children = intl3.string(arg1(dependencyMap[26]).t.5glWta);
            tmp34 = callback(arg1(dependencyMap[25]).Text, obj10);
          } else {
            if (giftCode.isSubscription) {
              if (null != getOrFetchSubscriptionPlan) {
                const obj11 = { "Bool(true)": 88, "Bool(true)": 80, "Bool(true)": null, style: tmp.header };
                const intl2 = arg1(dependencyMap[26]).intl;
                const obj12 = { skuName: stateFromStores.name };
                obj11.children = intl2.format(arg1(dependencyMap[26]).t.1C2BG/, obj12);
                tmp34 = callback(arg1(dependencyMap[25]).Text, obj11);
              }
            }
            if (null != first) {
              const obj13 = { style: tmp.header };
              const intl = arg1(dependencyMap[26]).intl;
              obj13.children = intl.string(arg1(dependencyMap[26]).t.IMffmm);
              tmp34 = callback(arg1(dependencyMap[25]).Text, obj13);
            }
          }
          const obj43 = arg1(dependencyMap[15]);
        }
        items1[1] = tmp34;
        if (obj33.isGameItemSKU(stateFromStores)) {
          if (null != getOrFetchApplication) {
            const obj14 = { variant: "text-md/medium", style: tmp.message };
            const intl7 = arg1(dependencyMap[26]).intl;
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
            obj14.children = intl7.formatToPlainString(arg1(dependencyMap[26]).t.W2znvX, obj15);
            let tmp49Result = callback(arg1(dependencyMap[25]).Text, obj14);
            const tmp63 = callback;
          }
          items1[2] = tmp49Result;
          obj3.children = items1;
          const items2 = [tmp15(tmp16, obj3), ];
          const obj16 = { style: tmp.footer };
          if (null == first) {
            const obj17 = {};
            const intl8 = arg1(dependencyMap[26]).intl;
            obj17.text = intl8.string(arg1(dependencyMap[26]).t.NX+WJN);
            obj17.size = "md";
            obj17.onPress = importDefault(dependencyMap[29]).pop;
            let obj18 = obj17;
          } else {
            obj18 = {};
            const intl9 = arg1(dependencyMap[26]).intl;
            obj18.text = intl9.string(arg1(dependencyMap[26]).t.MAS7uK);
            obj18.size = "md";
            obj18.loading = isApplying;
            let tmp72 = null != first;
            if (tmp72) {
              let tmp71 = !tmp8;
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
                tmp71 = tmp8;
              }
              tmp72 = tmp71;
            }
            obj18.disabled = !tmp72;
            obj18.onPress = handleUseNow;
          }
          obj16.children = callback(arg1(dependencyMap[28]).Button, obj18);
          items2[1] = callback(closure_3, obj16);
          obj2.children = items2;
          return tmp15(arg1(dependencyMap[14]).SafeAreaPaddingView, obj2);
        }
        if (giftCode.isSubscription) {
          if (null != getOrFetchSubscriptionPlan) {
            const obj19 = { variant: "text-md/medium", style: tmp.message, children: arg1(dependencyMap[27]).getSubscriptionGiftSuccessText(getOrFetchSubscriptionPlan) };
            tmp49Result = callback(arg1(dependencyMap[25]).Text, obj19);
            const obj37 = arg1(dependencyMap[27]);
          }
        }
        const obj20 = { variant: "text-md/medium", style: tmp.message };
        if (null != first) {
          let name1;
          if (null != stateFromStores) {
            name1 = stateFromStores.name;
          }
          if (null != name1) {
            const intl6 = arg1(dependencyMap[26]).intl;
            const obj21 = { itemName: stateFromStores.name };
            let formatToPlainStringResult = intl6.formatToPlainString(arg1(dependencyMap[26]).t.4kp0AB, obj21);
          }
          obj20.children = formatToPlainStringResult;
          tmp49Result = tmp49(tmp52, obj20);
        }
        const intl5 = arg1(dependencyMap[26]).intl;
        formatToPlainStringResult = intl5.string(arg1(dependencyMap[26]).t.5ayf7w);
        const obj33 = arg1(dependencyMap[15]);
        const tmp49 = callback;
      }
    }
  }
  const match = arg1(dependencyMap[19]).match(first);
  const str2 = arg1(dependencyMap[19]);
  const tmp16 = closure_4;
  const obj22 = { type: arg1(dependencyMap[11]).CollectiblesItemType.AVATAR_DECORATION };
  obj23 = { type: arg1(dependencyMap[11]).CollectiblesItemType.PROFILE_EFFECT };
  const withResult = match.with({ type: arg1(dependencyMap[11]).CollectiblesItemType.AVATAR_DECORATION }, (avatarDecoration) => {
    const obj = {};
    let avatarSource;
    if (null != user) {
      avatarSource = user.getAvatarSource(null, true, giftCode(tmp[20]).AVATAR_SIZE_MAP[closure_0(undefined, closure_2[20]).AvatarSizes.GIFT_SUCCESS]);
    }
    obj.source = avatarSource;
    obj.avatarDecoration = avatarDecoration;
    obj.size = giftCode(closure_6[20]).AvatarSizes.GIFT_SUCCESS;
    obj.animate = true;
    return closure_6(giftCode(closure_6[20]).Avatar, obj);
  });
  const withResult1 = match.with({ type: arg1(dependencyMap[11]).CollectiblesItemType.AVATAR_DECORATION }, (avatarDecoration) => {
    const obj = {};
    let avatarSource;
    if (null != user) {
      avatarSource = user.getAvatarSource(null, true, giftCode(tmp[20]).AVATAR_SIZE_MAP[closure_0(undefined, closure_2[20]).AvatarSizes.GIFT_SUCCESS]);
    }
    obj.source = avatarSource;
    obj.avatarDecoration = avatarDecoration;
    obj.size = giftCode(closure_6[20]).AvatarSizes.GIFT_SUCCESS;
    obj.animate = true;
    return closure_6(giftCode(closure_6[20]).Avatar, obj);
  }).with(obj23, (profileEffect) => callback(user(tmp[21]), { user, profileEffect }));
  const obj24 = { type: arg1(dependencyMap[11]).CollectiblesItemType.PROFILE_FRAME };
  const withResult2 = withResult1.with({ type: arg1(dependencyMap[11]).CollectiblesItemType.PROFILE_FRAME }, (profileFrame) => callback(user(tmp[22]), { user, profileFrame }));
  const obj25 = { type: arg1(dependencyMap[11]).CollectiblesItemType.NAMEPLATE };
  otherwiseResult = withResult2.with({ type: arg1(dependencyMap[11]).CollectiblesItemType.NAMEPLATE }, (nameplate) => {
    let obj = { style: tmp.nameplateContainer, children: callback(giftCode(tmp[23]).NameplatePreview, obj) };
    obj = { user, nameplate };
    return callback(closure_3, obj);
  }).otherwise(() => callback(user(tmp[24]), { giftStyle: giftCode.giftStyle }));
};
