// Module ID: 8191
// Function ID: 64763
// Name: getGiftCodeHeaderText
// Dependencies: []
// Exports: default

// Module 8191 (getGiftCodeHeaderText)
function getGiftCodeHeaderText(isSubscription) {
  let isBundle;
  let itemType;
  let sender;
  let sku;
  let subscriptionPlan;
  ({ subscriptionPlan, sender } = isSubscription);
  const arg1 = sender;
  ({ sku, itemType, isBundle } = isSubscription);
  if (isSubscription.isSubscription) {
    if (null != subscriptionPlan) {
      let name;
      if (null != sku) {
        name = sku.name;
      }
      let subscriptionGiftStartHeaderText = arg1(dependencyMap[7]).getSubscriptionGiftStartHeaderText(subscriptionPlan, sender, name);
      const obj24 = arg1(dependencyMap[7]);
    }
    return subscriptionGiftStartHeaderText;
  }
  let obj = arg1(dependencyMap[8]);
  if (obj.isGameItemSKU(sku)) {
    const intl = tmp2(tmp3[9]).intl;
    subscriptionGiftStartHeaderText = intl.string(tmp2(tmp3[9]).t.Bn1J+a);
  } else {
    obj = { type: itemType, isBundle, sender };
    const match = tmp2(tmp3[10]).match(obj);
    obj = { isBundle: true };
    const P = tmp2(tmp3[10]).P;
    obj.sender = P.not(tmp2(tmp3[10]).P.nullish);
    const str = tmp2(tmp3[10]);
    const obj1 = { isBundle: true, sender: tmp2(tmp3[10]).P.nullish };
    const withResult = match.with(obj, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.JUV1tL, { sender });
    });
    const obj2 = { type: tmp2(tmp3[11]).CollectiblesItemType.AVATAR_DECORATION };
    const P2 = tmp2(tmp3[10]).P;
    obj2.sender = P2.not(tmp2(tmp3[10]).P.nullish);
    const withResult1 = match.with(obj, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.iJ8823);
    });
    const obj3 = { type: tmp2(tmp3[11]).CollectiblesItemType.PROFILE_EFFECT };
    const P3 = tmp2(tmp3[10]).P;
    obj3.sender = P3.not(tmp2(tmp3[10]).P.nullish);
    const withResult2 = match.with(obj, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.SKduyh, { sender });
    });
    const obj4 = { type: tmp2(tmp3[11]).CollectiblesItemType.NAMEPLATE };
    const P4 = tmp2(tmp3[10]).P;
    obj4.sender = P4.not(tmp2(tmp3[10]).P.nullish);
    const withResult3 = match.with(obj, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.1w42T2, { sender });
    });
    const obj5 = { type: tmp2(tmp3[11]).CollectiblesItemType.PROFILE_FRAME };
    const P5 = tmp2(tmp3[10]).P;
    obj5.sender = P5.not(tmp2(tmp3[10]).P.nullish);
    const withResult4 = match.with(obj, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.1w42T2, { sender });
    }).with(obj4, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.vFiQlU, { sender });
    });
    const obj6 = { type: tmp2(tmp3[11]).CollectiblesItemType.AVATAR_DECORATION, sender: tmp2(tmp3[10]).P.nullish };
    const withResult5 = match.with(obj, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.1w42T2, { sender });
    }).with(obj4, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.vFiQlU, { sender });
    }).with(obj5, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.UH/EQL, { sender });
    });
    const obj7 = { type: tmp2(tmp3[11]).CollectiblesItemType.PROFILE_EFFECT, sender: tmp2(tmp3[10]).P.nullish };
    const withResult6 = match.with(obj, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.1w42T2, { sender });
    }).with(obj4, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.vFiQlU, { sender });
    }).with(obj5, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.UH/EQL, { sender });
    }).with(obj6, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.2ZO6CC);
    });
    const obj8 = { type: tmp2(tmp3[11]).CollectiblesItemType.NAMEPLATE, sender: tmp2(tmp3[10]).P.nullish };
    const withResult7 = match.with(obj, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.1w42T2, { sender });
    }).with(obj4, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.vFiQlU, { sender });
    }).with(obj5, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.UH/EQL, { sender });
    }).with(obj6, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.2ZO6CC);
    }).with(obj7, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.2NxdjX);
    });
    const obj9 = { type: tmp2(tmp3[11]).CollectiblesItemType.PROFILE_FRAME, sender: tmp2(tmp3[10]).P.nullish };
    const withResult8 = match.with(obj, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.1w42T2, { sender });
    }).with(obj4, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.vFiQlU, { sender });
    }).with(obj5, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.UH/EQL, { sender });
    }).with(obj6, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.2ZO6CC);
    }).with(obj7, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.2NxdjX);
    }).with(obj8, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.v7F232);
    });
    subscriptionGiftStartHeaderText = match.with(obj, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.1w42T2, { sender });
    }).with(obj4, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.vFiQlU, { sender });
    }).with(obj5, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.UH/EQL, { sender });
    }).with(obj6, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.2ZO6CC);
    }).with(obj7, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.2NxdjX);
    }).with(obj8, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.v7F232);
    }).with(obj9, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.1+tgC0);
    }).otherwise(() => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.2BWscv);
    });
    const withResult9 = match.with(obj, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.1w42T2, { sender });
    }).with(obj4, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.vFiQlU, { sender });
    }).with(obj5, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.formatToPlainString(sender(closure_2[9]).t.UH/EQL, { sender });
    }).with(obj6, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.2ZO6CC);
    }).with(obj7, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.2NxdjX);
    }).with(obj8, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.v7F232);
    }).with(obj9, () => {
      const intl = sender(closure_2[9]).intl;
      return intl.string(sender(closure_2[9]).t.1+tgC0);
    });
  }
}
let closure_3 = importAll(dependencyMap[0]);
({ ImageBackground: closure_4, View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[1]));
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[1]);
({ AnalyticEvents: closure_10, GiftCodeModalStates: closure_11 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[12]);
obj = {};
obj = { markAsSpoilerTitle: 0.129, keyboardAppearance: 1, backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.body = { wideBannerAnimatedUrl: 1.75, EMPTY_SCHEDULE_SNAPSHOT: "gr", disableControlsUpdate: null, <string:1459331288>: "Ship Glass" };
obj.bodyWithMessage = { flex: 0 };
obj.nameplateContainer = { width: "100%" };
obj.nameplateContainerOffCenter = { paddingBottom: 56 };
obj.message = { gap: 8 };
obj.text = { "Null": 6, "Null": "focus_mode_expires_at_ms" };
obj.footer = {};
obj.confettiBackground = { y: null, mutate: null, useQuestHowToHelpArticle: null, fetchSocialLayerStorefrontSku: null, y: null, fetchStaleChannels: null, y: null };
obj.emojiContainer = { "Null": null, "Null": null };
obj.imageWrapper = { <string:3334668292>: null, <string:3334799364>: "900d6a1aeefc6f4c571ad9d81203dc5c", <string:3334406148>: "img_nitro_classic_icon_80px", <string:3334537220>: "png" };
obj.collectiblesAsset = { margin: 40 };
obj.collectiblesAssetBundle = { margin: 20 };
obj.giftCardAsset = {};
obj.linkAccountIcon = { marginRight: 4 };
let closure_14 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[47]).fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemStart.tsx");

export default function GiftCodeRedeemStart(giftCode) {
  let firstAvatarDecoration;
  let firstProfileEffect;
  giftCode = giftCode.giftCode;
  const arg1 = giftCode;
  const customMessage = giftCode.customMessage;
  const importDefault = customMessage;
  const soundId = giftCode.soundId;
  const dependencyMap = soundId;
  const emojiName = giftCode.emojiName;
  const React = emojiName;
  const user = giftCode.user;
  let closure_7;
  let closure_8;
  let closure_9;
  let fetched;
  let hasAlreadyLinked;
  let canStartAuthorization;
  let startAuthorization;
  let callback;
  let closure_15;
  const tmp = callback();
  let obj = arg1(dependencyMap[14]);
  let closure_6 = obj.useNavigation();
  let obj1 = arg1(dependencyMap[15]);
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => tmp4.getIsAccepting(giftCode.code));
  let obj2 = arg1(dependencyMap[15]);
  const items1 = [closure_8];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => customMessage(soundId[16]).getName(tmp54Result.getUser(giftCode.userId)));
  let str = "";
  if (null != stateFromStores1) {
    str = stateFromStores1;
  }
  const tmp4 = importDefault(dependencyMap[17])(giftCode.code, user);
  closure_7 = tmp4;
  let obj3 = arg1(dependencyMap[18]);
  const getOrFetchSubscriptionPlan = obj3.useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  let obj4 = arg1(dependencyMap[19]);
  const getOrFetchApplication = obj4.useGetOrFetchApplication(giftCode.applicationId);
  let obj5 = arg1(dependencyMap[20]);
  let obj6 = arg1(dependencyMap[21]);
  let skuId = null;
  if (obj6.isCollectiblesGiftCode(giftCode)) {
    skuId = giftCode.skuId;
  }
  const product = obj5.useFetchCollectiblesProduct(skuId, true).product;
  let first;
  if (null != product) {
    first = product.items[0];
  }
  let type;
  if (null != product) {
    type = product.type;
  }
  const tmp10 = type === arg1(dependencyMap[11]).CollectiblesItemType.BUNDLE;
  let obj7 = arg1(dependencyMap[22]);
  let tmp11 = product;
  if (null == product) {
    obj = { items: [] };
    tmp11 = obj;
  }
  const shopProductItems = obj7.useShopProductItems(tmp11);
  ({ firstAvatarDecoration, firstProfileEffect } = shopProductItems);
  let tmp54Result = null != customMessage;
  if (tmp54Result) {
    tmp54Result = customMessage.length > 0;
  }
  closure_8 = tmp54Result;
  let obj9 = arg1(dependencyMap[15]);
  const items2 = [closure_9];
  const stateFromStores2 = obj9.useStateFromStores(items2, () => stateFromStores2.get(giftCode.skuId));
  closure_9 = stateFromStores2;
  const tmp15 = importDefault(dependencyMap[23])(getOrFetchApplication);
  fetched = tmp15.fetched;
  hasAlreadyLinked = tmp15.hasAlreadyLinked;
  canStartAuthorization = tmp15.canStartAuthorization;
  startAuthorization = tmp15.startAuthorization;
  let obj10 = arg1(dependencyMap[24]);
  const socialLayerStorefrontMobileAccountLinkingDisabled = obj10.useSocialLayerStorefrontMobileAccountLinkingDisabled(giftCode.applicationId);
  const analyticsLocations = importDefault(dependencyMap[25])(importDefault(dependencyMap[26]).GIFT_CODE_MODAL).analyticsLocations;
  callback = analyticsLocations;
  obj = { analyticsLocations, skuId: giftCode.skuId, applicationId: giftCode.applicationId, canStartAuthorization };
  closure_15 = React.useRef(obj);
  const items3 = [canStartAuthorization];
  const effect = React.useEffect(() => {
    ref.current.canStartAuthorization = canStartAuthorization;
  }, items3);
  const items4 = [fetched, hasAlreadyLinked, stateFromStores2];
  const effect1 = React.useEffect(() => {
    let analyticsLocations;
    let applicationId;
    let canStartAuthorization;
    let skuId;
    if (fetched) {
      let obj = giftCode(soundId[8]);
      if (obj.isGameItemSKU(stateFromStores2)) {
        ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = ref.current);
        obj = { location_stack: analyticsLocations, sku_id: skuId, application_id: applicationId, is_gift: true, is_account_linked: hasAlreadyLinked, can_start_authorization: canStartAuthorization };
        customMessage(soundId[27]).track(fetched.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj);
        const obj2 = customMessage(soundId[27]);
      }
    }
  }, items4);
  const items5 = [stateFromStores2];
  const effect2 = React.useEffect(() => {
    if (obj.isGameItemSKU(stateFromStores2)) {
      const socialLayerStorefrontConfig = giftCode(soundId[28]).fetchSocialLayerStorefrontConfig();
      const obj2 = giftCode(soundId[28]);
    }
  }, items5);
  const items6 = [giftCode, customMessage, emojiName, soundId];
  const effect3 = React.useEffect(() => {
    let obj = giftCode(soundId[7]);
    obj = { step: hasAlreadyLinked.CONFIRM, giftCode, customMessage, emojiName, soundId };
    obj.trackStep(obj);
  }, items6);
  const items7 = [soundId, giftCode.giftStyle];
  const effect4 = React.useEffect(() => {
    let tmp = null != giftCode.giftStyle;
    if (tmp) {
      tmp = null != soundId;
    }
    if (tmp) {
      let obj = giftCode(soundId[29]);
      obj = { soundId, volume: 1 };
      obj.playSoundLocally(null, obj);
    }
  }, items7);
  obj1 = { bottom: true, style: tmp.container };
  obj2 = {};
  const items8 = [tmp.body, ];
  let bodyWithMessage;
  if (tmp54Result) {
    bodyWithMessage = tmp.bodyWithMessage;
  }
  items8[1] = bodyWithMessage;
  obj2.contentContainerStyle = items8;
  obj2.alwaysBounceVertical = false;
  obj3 = { y: 1548812289, isArray: 186630151, split: -1224736477, ix: 2013266539, style: tmp.text };
  obj4 = { isSubscription: giftCode.isSubscription, subscriptionPlan: getOrFetchSubscriptionPlan, sender: str };
  let type1;
  if (null != first) {
    type1 = first.type;
  }
  obj4.itemType = type1;
  obj4.isBundle = tmp10;
  obj4.sku = stateFromStores2;
  obj3.children = closure_15(obj4);
  const items9 = [canStartAuthorization(arg1(dependencyMap[31]).Text, obj3), , , ];
  obj5 = { style: tmp.imageWrapper };
  let tmp31 = null != emojiName;
  if (tmp31) {
    obj6 = { source: arg1(dependencyMap[32]), style: tmp.confettiBackground };
    obj7 = { style: tmp.emojiContainer };
    const obj8 = { emojiName, randomizeSizing: true };
    obj7.children = canStartAuthorization(importDefault(dependencyMap[33]), obj8);
    obj6.children = canStartAuthorization(tmp, obj7);
    tmp31 = canStartAuthorization(user, obj6);
  }
  obj5.children = tmp31;
  items9[1] = canStartAuthorization(tmp, obj5);
  if (null == first) {
    if (null != getOrFetchApplication) {
      let obj20 = arg1(dependencyMap[8]);
      if (obj20.isGameItemSKU(stateFromStores2)) {
        obj9 = { sku: stateFromStores2, application: getOrFetchApplication, sender: str, hasAccountLinked: hasAlreadyLinked, canStartAuthorization, mobileAccountLinkingDisabled: socialLayerStorefrontMobileAccountLinkingDisabled };
        let tmp40Result = canStartAuthorization(importDefault(dependencyMap[34]), obj9);
      }
      items9[2] = tmp40Result;
      if (tmp54Result) {
        obj10 = { style: tmp.message };
        const obj11 = { style: tmp.text };
        const intl = arg1(dependencyMap[9]).intl;
        const obj12 = { sender: str };
        obj11.children = intl.format(arg1(dependencyMap[9]).t.6yrIzU, obj12);
        const items10 = [canStartAuthorization(arg1(dependencyMap[31]).Text, obj11), ];
        const obj13 = {};
        let str4 = "heading-xxl/semibold";
        if (customMessage.length > 110) {
          str4 = "heading-xl/semibold";
        }
        obj13.variant = str4;
        obj13.style = tmp.text;
        obj13.children = customMessage;
        items10[1] = canStartAuthorization(arg1(dependencyMap[31]).Text, obj13);
        obj10.children = items10;
        tmp54Result = startAuthorization(tmp, obj10);
        const tmp54 = startAuthorization;
        const tmp55 = tmp;
        const tmp56 = canStartAuthorization;
      }
      items9[3] = tmp54Result;
      obj2.children = items9;
      const items11 = [tmp23(tmp24, obj2), ];
      const obj14 = { style: tmp.footer };
      if (giftCode.isClaimed) {
        const obj15 = {};
        const intl6 = arg1(dependencyMap[9]).intl;
        obj15.text = intl6.string(arg1(dependencyMap[9]).t.XiOHRX);
        obj15.size = "md";
        obj15.onPress = function onPress() {
          return arr.push(giftCode(soundId[43]).GiftCodeModalScreens.SUCCESS, { giftCode });
        };
        let tmp61Result = canStartAuthorization(arg1(dependencyMap[42]).Button, obj15);
      } else if (null != tmp4) {
        const obj16 = {};
        const intl5 = arg1(dependencyMap[9]).intl;
        obj16.text = intl5.string(arg1(dependencyMap[9]).t.3nWhcJ);
        obj16.size = "md";
        obj16.onPress = function onPress() {
          let obj = giftCode(soundId[7]);
          obj = { step: hasAlreadyLinked.ERROR, giftCode, customMessage, emojiName, soundId };
          obj.trackStep(obj);
          obj = { message: tmp4 };
        };
        tmp61Result = canStartAuthorization(arg1(dependencyMap[42]).Button, obj16);
      } else {
        if (obj47.isGameItemSKU(stateFromStores2)) {
          if (!hasAlreadyLinked) {
            if (canStartAuthorization) {
              if (!socialLayerStorefrontMobileAccountLinkingDisabled) {
                let obj17 = {};
                const intl2 = arg1(dependencyMap[9]).intl;
                obj17.text = intl2.string(arg1(dependencyMap[9]).t.VDAhr+);
                obj17.size = "md";
                const obj18 = { size: "xs", color: importDefault(dependencyMap[13]).colors.WHITE, style: tmp.linkAccountIcon };
                obj17.icon = canStartAuthorization(arg1(dependencyMap[45]).ExperimentalGameControllerLinkIcon, obj18);
                obj17.onPress = function onPress() {
                  let obj = customMessage(soundId[27]);
                  obj = { location_stack: analyticsLocations, sku_id: giftCode.skuId, application_id: giftCode.applicationId, is_gift: true };
                  obj.track(fetched.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, obj);
                  obj = { analyticsLocations };
                  startAuthorization(obj);
                };
              }
              tmp61Result = tmp61(tmp64, obj17);
            }
            const obj19 = {};
            const intl3 = arg1(dependencyMap[9]).intl;
            obj19.text = intl3.string(arg1(dependencyMap[9]).t.cpT0Cq);
            obj19.size = "md";
            obj19.onPress = function onPress() {
              let arr = customMessage(soundId[44]);
              arr = arr.pop();
            };
            obj17 = obj19;
            const tmp61 = canStartAuthorization;
          }
        }
        obj20 = { disabled: stateFromStores };
        const intl4 = arg1(dependencyMap[9]).intl;
        const string = intl4.string;
        let rTeOBK = arg1(dependencyMap[9]).t;
        if (stateFromStores) {
          rTeOBK = rTeOBK.rTeOBK;
          let stringResult = string(rTeOBK);
        } else {
          stringResult = string(rTeOBK.3nWhcJ);
        }
        obj20.text = stringResult;
        obj20.size = "md";
        obj20.onPress = function onPress() {
          let obj = customMessage(soundId[46]);
          obj = {
            code: giftCode.code,
            onRedeemed() {
              let obj = callback(closure_2[7]);
              obj = { step: constants.SUCCESS, giftCode: callback, customMessage: closure_1, emojiName: closure_3, soundId: closure_2 };
              obj.trackStep(obj);
              obj = { giftCode: callback };
            },
            onError(code) {
              let obj = callback(closure_2[7]);
              obj = { step: constants.ERROR, giftCode: callback, customMessage: closure_1, emojiName: closure_3, soundId: closure_2 };
              obj.trackStep(obj);
              obj = { message: callback(closure_2[7]).getGiftCodeRedeemError(code, closure_4) };
              const obj4 = callback(closure_2[7]);
            }
          };
          obj.redeemGiftCode(obj);
        };
        canStartAuthorization(arg1(dependencyMap[42]).Button, obj20);
        const obj47 = arg1(dependencyMap[8]);
        const tmp72 = canStartAuthorization;
      }
      obj14.children = tmp61Result;
      items11[1] = canStartAuthorization(tmp, obj14);
      obj1.children = items11;
      return tmp23(arg1(dependencyMap[30]).SafeAreaPaddingView, obj1);
    }
  }
  if (null == first) {
    if (null != getOrFetchApplication) {
      if (null == giftCode.giftStyle) {
        const obj21 = { game: getOrFetchApplication, size: arg1(dependencyMap[35]).GameIconSizes.LARGE, skuId: giftCode.skuId };
        tmp40Result = canStartAuthorization(importDefault(dependencyMap[35]), obj21);
        const tmp49 = importDefault(dependencyMap[35]);
      }
    }
  }
  if (tmp10) {
    if (null != product) {
      if (null != firstAvatarDecoration) {
        if (null != firstProfileEffect) {
          const obj22 = { style: tmp.collectiblesAssetBundle };
          const obj23 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: shopProductItems.firstNameplate, size: "large" };
          obj22.children = canStartAuthorization(importDefault(dependencyMap[36]), obj23);
          let obj24 = obj22;
        }
        tmp40Result = tmp40(tmp41, obj24);
      }
    }
  }
  obj24 = { style: giftCode.isSubscription ? tmp.giftCardAsset : tmp.collectiblesAsset };
  const tmp17 = importDefault(dependencyMap[25]);
  const tmp24 = closure_6;
  const tmp26 = canStartAuthorization;
  const tmp27 = closure_15;
  const tmp29 = canStartAuthorization;
  const tmp30 = tmp;
  const match = arg1(dependencyMap[10]).match(first);
  const str2 = arg1(dependencyMap[10]);
  const obj25 = { type: arg1(dependencyMap[11]).CollectiblesItemType.AVATAR_DECORATION };
  const withResult = match.with({ type: arg1(dependencyMap[11]).CollectiblesItemType.AVATAR_DECORATION }, (avatarDecoration) => {
    const obj = { source: user.getAvatarSource(null, true, giftCode(soundId[37]).AVATAR_SIZE_MAP[closure_0(undefined, closure_2[37]).AvatarSizes.GIFT_START]), avatarDecoration, size: giftCode(soundId[37]).AvatarSizes.GIFT_START, animate: true };
    return canStartAuthorization(giftCode(soundId[37]).Avatar, obj);
  });
  const obj26 = { type: arg1(dependencyMap[11]).CollectiblesItemType.PROFILE_EFFECT };
  const withResult1 = withResult.with({ type: arg1(dependencyMap[11]).CollectiblesItemType.PROFILE_EFFECT }, (profileEffect) => canStartAuthorization(customMessage(soundId[38]), { user, profileEffect }));
  const obj27 = { type: arg1(dependencyMap[11]).CollectiblesItemType.PROFILE_FRAME };
  const withResult2 = withResult1.with({ type: arg1(dependencyMap[11]).CollectiblesItemType.PROFILE_FRAME }, (profileFrame) => canStartAuthorization(customMessage(soundId[39]), { user, profileFrame }));
  const obj28 = { type: arg1(dependencyMap[11]).CollectiblesItemType.NAMEPLATE };
  obj24.children = withResult2.with({ type: arg1(dependencyMap[11]).CollectiblesItemType.NAMEPLATE }, (nameplate) => {
    let obj = {};
    const items = [tmp.nameplateContainer, ];
    let prop;
    if (!tmp54Result) {
      prop = tmp.nameplateContainerOffCenter;
    }
    items[1] = prop;
    obj.style = items;
    obj = { user, nameplate };
    obj.children = canStartAuthorization(giftCode(soundId[40]).NameplatePreview, obj);
    return canStartAuthorization(canStartAuthorization, obj);
  }).otherwise(() => canStartAuthorization(customMessage(soundId[41]), { giftStyle: giftCode.giftStyle }));
};
