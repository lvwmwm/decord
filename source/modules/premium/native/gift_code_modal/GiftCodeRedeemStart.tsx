// Module ID: 8193
// Function ID: 64788
// Name: getGiftCodeHeaderText
// Dependencies: []
// Exports: default

// Module 8193 (getGiftCodeHeaderText)
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
      let subscriptionGiftStartHeaderText = arg1(dependencyMap[8]).getSubscriptionGiftStartHeaderText(subscriptionPlan, sender, name);
      const obj24 = arg1(dependencyMap[8]);
    }
    return subscriptionGiftStartHeaderText;
  }
  let obj = arg1(dependencyMap[9]);
  if (obj.isGameItemSKU(sku)) {
    const intl = tmp2(tmp3[10]).intl;
    subscriptionGiftStartHeaderText = intl.string(tmp2(tmp3[10]).t.Bn1J+a);
  } else {
    obj = { type: itemType, isBundle, sender };
    const match = tmp2(tmp3[11]).match(obj);
    obj = { isBundle: true };
    const P = tmp2(tmp3[11]).P;
    obj.sender = P.not(tmp2(tmp3[11]).P.nullish);
    const str = tmp2(tmp3[11]);
    const obj1 = { isBundle: true, sender: tmp2(tmp3[11]).P.nullish };
    const withResult = match.with(obj, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.JUV1tL, { sender });
    });
    const obj2 = { type: tmp2(tmp3[12]).CollectiblesItemType.AVATAR_DECORATION };
    const P2 = tmp2(tmp3[11]).P;
    obj2.sender = P2.not(tmp2(tmp3[11]).P.nullish);
    const withResult1 = match.with(obj, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.iJ8823);
    });
    const obj3 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_EFFECT };
    const P3 = tmp2(tmp3[11]).P;
    obj3.sender = P3.not(tmp2(tmp3[11]).P.nullish);
    const withResult2 = match.with(obj, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.SKduyh, { sender });
    });
    const obj4 = { type: tmp2(tmp3[12]).CollectiblesItemType.NAMEPLATE };
    const P4 = tmp2(tmp3[11]).P;
    obj4.sender = P4.not(tmp2(tmp3[11]).P.nullish);
    const withResult3 = match.with(obj, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.1w42T2, { sender });
    });
    const obj5 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_FRAME };
    const P5 = tmp2(tmp3[11]).P;
    obj5.sender = P5.not(tmp2(tmp3[11]).P.nullish);
    const withResult4 = match.with(obj, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.1w42T2, { sender });
    }).with(obj4, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.vFiQlU, { sender });
    });
    const obj6 = { type: tmp2(tmp3[12]).CollectiblesItemType.AVATAR_DECORATION, sender: tmp2(tmp3[11]).P.nullish };
    const withResult5 = match.with(obj, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.1w42T2, { sender });
    }).with(obj4, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.vFiQlU, { sender });
    }).with(obj5, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.UH/EQL, { sender });
    });
    const obj7 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_EFFECT, sender: tmp2(tmp3[11]).P.nullish };
    const withResult6 = match.with(obj, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.1w42T2, { sender });
    }).with(obj4, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.vFiQlU, { sender });
    }).with(obj5, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.UH/EQL, { sender });
    }).with(obj6, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.2ZO6CC);
    });
    const obj8 = { type: tmp2(tmp3[12]).CollectiblesItemType.NAMEPLATE, sender: tmp2(tmp3[11]).P.nullish };
    const withResult7 = match.with(obj, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.1w42T2, { sender });
    }).with(obj4, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.vFiQlU, { sender });
    }).with(obj5, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.UH/EQL, { sender });
    }).with(obj6, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.2ZO6CC);
    }).with(obj7, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.2NxdjX);
    });
    const obj9 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_FRAME, sender: tmp2(tmp3[11]).P.nullish };
    const withResult8 = match.with(obj, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.1w42T2, { sender });
    }).with(obj4, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.vFiQlU, { sender });
    }).with(obj5, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.UH/EQL, { sender });
    }).with(obj6, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.2ZO6CC);
    }).with(obj7, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.2NxdjX);
    }).with(obj8, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.v7F232);
    });
    subscriptionGiftStartHeaderText = match.with(obj, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.1w42T2, { sender });
    }).with(obj4, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.vFiQlU, { sender });
    }).with(obj5, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.UH/EQL, { sender });
    }).with(obj6, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.2ZO6CC);
    }).with(obj7, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.2NxdjX);
    }).with(obj8, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.v7F232);
    }).with(obj9, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.1+tgC0);
    }).otherwise(() => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.2BWscv);
    });
    const withResult9 = match.with(obj, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.1w42T2, { sender });
    }).with(obj4, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.vFiQlU, { sender });
    }).with(obj5, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.formatToPlainString(sender(closure_2[10]).t.UH/EQL, { sender });
    }).with(obj6, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.2ZO6CC);
    }).with(obj7, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.2NxdjX);
    }).with(obj8, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.v7F232);
    }).with(obj9, () => {
      const intl = sender(closure_2[10]).intl;
      return intl.string(sender(closure_2[10]).t.1+tgC0);
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
const BUNDLE_PREVIEW_CONFIG = arg1(dependencyMap[6]).BUNDLE_PREVIEW_CONFIG;
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[7]));
let closure_14 = { width: BUNDLE_PREVIEW_CONFIG.large.bundleWidth, height: BUNDLE_PREVIEW_CONFIG.large.bundleHeight };
let obj = arg1(dependencyMap[13]);
obj = {};
obj = { "Null": 0.129, "Null": 1, backgroundColor: importDefault(dependencyMap[14]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.body = {};
obj.bodyWithMessage = { flex: 0 };
obj.nameplateContainer = { width: "100%" };
obj.nameplateContainerOffCenter = { paddingBottom: 56 };
obj.message = { gap: 8 };
obj.text = { "Bool(true)": null, "Bool(true)": null };
obj.footer = {};
obj.confettiBackground = { <string:80183552>: "center", <string:80184064>: "center", <string:80184576>: "transparent", <string:2418757888>: 2000, <string:1597182656>: 0.4, <string:1619918852>: 300, <string:3124101124>: null };
obj.emojiContainer = { "Bool(false)": null, "Bool(false)": null };
obj.imageWrapper = { <string:80184576>: true, <string:2418757888>: true, <string:1597182656>: true, <string:1619918852>: true };
obj.collectiblesAsset = { margin: 40 };
obj.collectiblesAssetBundle = { margin: 20 };
obj.giftCardAsset = { y: "%Float16Array%", channelId: "liveContainer" };
obj.linkAccountIcon = { marginRight: 4 };
let closure_15 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[48]).fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemStart.tsx");

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
  let closure_14;
  let callback;
  const tmp = callback();
  let obj = arg1(dependencyMap[15]);
  let closure_6 = obj.useNavigation();
  let obj1 = arg1(dependencyMap[16]);
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => tmp4.getIsAccepting(giftCode.code));
  let obj2 = arg1(dependencyMap[16]);
  const items1 = [closure_8];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => customMessage(soundId[17]).getName(tmp55Result.getUser(giftCode.userId)));
  let str = "";
  if (null != stateFromStores1) {
    str = stateFromStores1;
  }
  const tmp4 = importDefault(dependencyMap[18])(giftCode.code, user);
  closure_7 = tmp4;
  let obj3 = arg1(dependencyMap[19]);
  const getOrFetchSubscriptionPlan = obj3.useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  let obj4 = arg1(dependencyMap[20]);
  const getOrFetchApplication = obj4.useGetOrFetchApplication(giftCode.applicationId);
  let obj5 = arg1(dependencyMap[21]);
  let obj6 = arg1(dependencyMap[22]);
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
  const tmp10 = type === arg1(dependencyMap[12]).CollectiblesItemType.BUNDLE;
  let obj7 = arg1(dependencyMap[23]);
  let tmp11 = product;
  if (null == product) {
    obj = { items: [] };
    tmp11 = obj;
  }
  const shopProductItems = obj7.useShopProductItems(tmp11);
  ({ firstAvatarDecoration, firstProfileEffect } = shopProductItems);
  let tmp55Result = null != customMessage;
  if (tmp55Result) {
    tmp55Result = customMessage.length > 0;
  }
  closure_8 = tmp55Result;
  let obj9 = arg1(dependencyMap[16]);
  const items2 = [closure_9];
  const stateFromStores2 = obj9.useStateFromStores(items2, () => stateFromStores2.get(giftCode.skuId));
  closure_9 = stateFromStores2;
  const tmp15 = importDefault(dependencyMap[24])(getOrFetchApplication);
  fetched = tmp15.fetched;
  hasAlreadyLinked = tmp15.hasAlreadyLinked;
  canStartAuthorization = tmp15.canStartAuthorization;
  startAuthorization = tmp15.startAuthorization;
  let obj10 = arg1(dependencyMap[25]);
  const socialLayerStorefrontMobileAccountLinkingDisabled = obj10.useSocialLayerStorefrontMobileAccountLinkingDisabled(giftCode.applicationId);
  const analyticsLocations = importDefault(dependencyMap[26])(importDefault(dependencyMap[27]).GIFT_CODE_MODAL).analyticsLocations;
  closure_14 = analyticsLocations;
  obj = { analyticsLocations, skuId: giftCode.skuId, applicationId: giftCode.applicationId, canStartAuthorization };
  callback = React.useRef(obj);
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
      let obj = giftCode(soundId[9]);
      if (obj.isGameItemSKU(stateFromStores2)) {
        ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = ref.current);
        obj = { location_stack: analyticsLocations, sku_id: skuId, application_id: applicationId, is_gift: true, is_account_linked: hasAlreadyLinked, can_start_authorization: canStartAuthorization };
        customMessage(soundId[28]).track(fetched.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj);
        const obj2 = customMessage(soundId[28]);
      }
    }
  }, items4);
  const items5 = [stateFromStores2];
  const effect2 = React.useEffect(() => {
    if (obj.isGameItemSKU(stateFromStores2)) {
      const socialLayerStorefrontConfig = giftCode(soundId[29]).fetchSocialLayerStorefrontConfig();
      const obj2 = giftCode(soundId[29]);
    }
  }, items5);
  const items6 = [giftCode, customMessage, emojiName, soundId];
  const effect3 = React.useEffect(() => {
    let obj = giftCode(soundId[8]);
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
      let obj = giftCode(soundId[30]);
      obj = { soundId, volume: 1 };
      obj.playSoundLocally(null, obj);
    }
  }, items7);
  obj1 = { bottom: true, style: tmp.container };
  obj2 = {};
  const items8 = [tmp.body, ];
  let bodyWithMessage;
  if (tmp55Result) {
    bodyWithMessage = tmp.bodyWithMessage;
  }
  items8[1] = bodyWithMessage;
  obj2.contentContainerStyle = items8;
  obj2.alwaysBounceVertical = false;
  obj3 = { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011454504407100313, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004026493667951817, paddingHorizontal: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003202169671031755, backgroundColor: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000062920633412691296, style: tmp.text };
  obj4 = { isSubscription: giftCode.isSubscription, subscriptionPlan: getOrFetchSubscriptionPlan, sender: str };
  let type1;
  if (null != first) {
    type1 = first.type;
  }
  obj4.itemType = type1;
  obj4.isBundle = tmp10;
  obj4.sku = stateFromStores2;
  obj3.children = getGiftCodeHeaderText(obj4);
  const items9 = [canStartAuthorization(arg1(dependencyMap[32]).Text, obj3), , , ];
  obj5 = { style: tmp.imageWrapper };
  let tmp31 = null != emojiName;
  if (tmp31) {
    obj6 = { source: arg1(dependencyMap[33]), style: tmp.confettiBackground };
    obj7 = { style: tmp.emojiContainer };
    const obj8 = { emojiName, randomizeSizing: true };
    obj7.children = canStartAuthorization(importDefault(dependencyMap[34]), obj8);
    obj6.children = canStartAuthorization(tmp, obj7);
    tmp31 = canStartAuthorization(user, obj6);
  }
  obj5.children = tmp31;
  items9[1] = canStartAuthorization(tmp, obj5);
  if (null == first) {
    if (null != getOrFetchApplication) {
      let obj20 = arg1(dependencyMap[9]);
      if (obj20.isGameItemSKU(stateFromStores2)) {
        obj9 = { sku: stateFromStores2, application: getOrFetchApplication, sender: str, hasAccountLinked: hasAlreadyLinked, canStartAuthorization, mobileAccountLinkingDisabled: socialLayerStorefrontMobileAccountLinkingDisabled };
        let tmp40Result = canStartAuthorization(importDefault(dependencyMap[35]), obj9);
      }
      items9[2] = tmp40Result;
      if (tmp55Result) {
        obj10 = { style: tmp.message };
        const obj11 = { cachedAt: "/assets/images/native/premium/illustrations", edpbxy: 51, style: tmp.text };
        const intl = arg1(dependencyMap[10]).intl;
        const obj12 = { sender: str };
        obj11.children = intl.format(arg1(dependencyMap[10]).t.6yrIzU, obj12);
        const items10 = [canStartAuthorization(arg1(dependencyMap[32]).Text, obj11), ];
        const obj13 = {};
        let str4 = "heading-xxl/semibold";
        if (customMessage.length > 110) {
          str4 = "heading-xl/semibold";
        }
        obj13.variant = str4;
        obj13.style = tmp.text;
        obj13.children = customMessage;
        items10[1] = canStartAuthorization(arg1(dependencyMap[32]).Text, obj13);
        obj10.children = items10;
        tmp55Result = startAuthorization(tmp, obj10);
        const tmp55 = startAuthorization;
        const tmp56 = tmp;
        const tmp57 = canStartAuthorization;
      }
      items9[3] = tmp55Result;
      obj2.children = items9;
      const items11 = [tmp23(tmp24, obj2), ];
      const obj14 = { style: tmp.footer };
      if (giftCode.isClaimed) {
        const obj15 = {};
        const intl6 = arg1(dependencyMap[10]).intl;
        obj15.text = intl6.string(arg1(dependencyMap[10]).t.XiOHRX);
        obj15.size = "md";
        obj15.onPress = function onPress() {
          return arr.push(giftCode(soundId[44]).GiftCodeModalScreens.SUCCESS, { giftCode });
        };
        let tmp62Result = canStartAuthorization(arg1(dependencyMap[43]).Button, obj15);
      } else if (null != tmp4) {
        const obj16 = {};
        const intl5 = arg1(dependencyMap[10]).intl;
        obj16.text = intl5.string(arg1(dependencyMap[10]).t.3nWhcJ);
        obj16.size = "md";
        obj16.onPress = function onPress() {
          let obj = giftCode(soundId[8]);
          obj = { step: hasAlreadyLinked.ERROR, giftCode, customMessage, emojiName, soundId };
          obj.trackStep(obj);
          obj = { message: tmp4 };
        };
        tmp62Result = canStartAuthorization(arg1(dependencyMap[43]).Button, obj16);
      } else {
        if (obj47.isGameItemSKU(stateFromStores2)) {
          if (!hasAlreadyLinked) {
            if (canStartAuthorization) {
              if (!socialLayerStorefrontMobileAccountLinkingDisabled) {
                let obj17 = {};
                const intl2 = arg1(dependencyMap[10]).intl;
                obj17.text = intl2.string(arg1(dependencyMap[10]).t.VDAhr+);
                obj17.size = "md";
                const obj18 = { size: "xs", color: importDefault(dependencyMap[14]).colors.WHITE, style: tmp.linkAccountIcon };
                obj17.icon = canStartAuthorization(arg1(dependencyMap[46]).ExperimentalGameControllerLinkIcon, obj18);
                obj17.onPress = function onPress() {
                  let obj = customMessage(soundId[28]);
                  obj = { location_stack: analyticsLocations, sku_id: giftCode.skuId, application_id: giftCode.applicationId, is_gift: true };
                  obj.track(fetched.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, obj);
                  obj = { analyticsLocations };
                  startAuthorization(obj);
                };
              }
              tmp62Result = tmp62(tmp65, obj17);
            }
            const obj19 = {};
            const intl3 = arg1(dependencyMap[10]).intl;
            obj19.text = intl3.string(arg1(dependencyMap[10]).t.cpT0Cq);
            obj19.size = "md";
            obj19.onPress = function onPress() {
              let arr = customMessage(soundId[45]);
              arr = arr.pop();
            };
            obj17 = obj19;
            const tmp62 = canStartAuthorization;
          }
        }
        obj20 = { disabled: stateFromStores };
        const intl4 = arg1(dependencyMap[10]).intl;
        const string = intl4.string;
        let rTeOBK = arg1(dependencyMap[10]).t;
        if (stateFromStores) {
          rTeOBK = rTeOBK.rTeOBK;
          let stringResult = string(rTeOBK);
        } else {
          stringResult = string(rTeOBK.3nWhcJ);
        }
        obj20.text = stringResult;
        obj20.size = "md";
        obj20.onPress = function onPress() {
          let obj = customMessage(soundId[47]);
          obj = {
            code: giftCode.code,
            onRedeemed() {
              let obj = callback(closure_2[8]);
              obj = { step: constants.SUCCESS, giftCode: callback, customMessage: closure_1, emojiName: closure_3, soundId: closure_2 };
              obj.trackStep(obj);
              obj = { giftCode: callback };
            },
            onError(code) {
              let obj = callback(closure_2[8]);
              obj = { step: constants.ERROR, giftCode: callback, customMessage: closure_1, emojiName: closure_3, soundId: closure_2 };
              obj.trackStep(obj);
              obj = { message: callback(closure_2[8]).getGiftCodeRedeemError(code, closure_4) };
              const obj4 = callback(closure_2[8]);
            }
          };
          obj.redeemGiftCode(obj);
        };
        canStartAuthorization(arg1(dependencyMap[43]).Button, obj20);
        const obj47 = arg1(dependencyMap[9]);
        const tmp73 = canStartAuthorization;
      }
      obj14.children = tmp62Result;
      items11[1] = canStartAuthorization(tmp, obj14);
      obj1.children = items11;
      return tmp23(arg1(dependencyMap[31]).SafeAreaPaddingView, obj1);
    }
  }
  if (null == first) {
    if (null != getOrFetchApplication) {
      if (null == giftCode.giftStyle) {
        const obj21 = { game: getOrFetchApplication, size: arg1(dependencyMap[36]).GameIconSizes.LARGE, skuId: giftCode.skuId };
        tmp40Result = canStartAuthorization(importDefault(dependencyMap[36]), obj21);
        const tmp50 = importDefault(dependencyMap[36]);
      }
    }
  }
  if (tmp10) {
    if (null != product) {
      if (null != firstAvatarDecoration) {
        if (null != firstProfileEffect) {
          const obj22 = { style: tmp.collectiblesAssetBundle };
          const obj23 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: shopProductItems.firstNameplate, size: "large", targetSize: closure_14 };
          obj22.children = canStartAuthorization(importDefault(dependencyMap[37]), obj23);
          let obj24 = obj22;
        }
        tmp40Result = tmp40(tmp41, obj24);
      }
    }
  }
  obj24 = { style: giftCode.isSubscription ? tmp.giftCardAsset : tmp.collectiblesAsset };
  const tmp17 = importDefault(dependencyMap[26]);
  const tmp24 = closure_6;
  const tmp26 = canStartAuthorization;
  const tmp27 = getGiftCodeHeaderText;
  const tmp29 = canStartAuthorization;
  const tmp30 = tmp;
  const match = arg1(dependencyMap[11]).match(first);
  const str2 = arg1(dependencyMap[11]);
  const obj25 = { type: arg1(dependencyMap[12]).CollectiblesItemType.AVATAR_DECORATION };
  const withResult = match.with({ type: arg1(dependencyMap[12]).CollectiblesItemType.AVATAR_DECORATION }, (avatarDecoration) => {
    const obj = { source: user.getAvatarSource(null, true, giftCode(soundId[38]).AVATAR_SIZE_MAP[closure_0(undefined, closure_2[38]).AvatarSizes.GIFT_START]), avatarDecoration, size: giftCode(soundId[38]).AvatarSizes.GIFT_START, animate: true };
    return canStartAuthorization(giftCode(soundId[38]).Avatar, obj);
  });
  const obj26 = { type: arg1(dependencyMap[12]).CollectiblesItemType.PROFILE_EFFECT };
  const withResult1 = withResult.with({ type: arg1(dependencyMap[12]).CollectiblesItemType.PROFILE_EFFECT }, (profileEffect) => canStartAuthorization(customMessage(soundId[39]), { user, profileEffect }));
  const obj27 = { type: arg1(dependencyMap[12]).CollectiblesItemType.PROFILE_FRAME };
  const withResult2 = withResult1.with({ type: arg1(dependencyMap[12]).CollectiblesItemType.PROFILE_FRAME }, (profileFrame) => canStartAuthorization(customMessage(soundId[40]), { user, profileFrame }));
  const obj28 = { type: arg1(dependencyMap[12]).CollectiblesItemType.NAMEPLATE };
  obj24.children = withResult2.with({ type: arg1(dependencyMap[12]).CollectiblesItemType.NAMEPLATE }, (nameplate) => {
    let obj = {};
    const items = [tmp.nameplateContainer, ];
    let prop;
    if (!tmp55Result) {
      prop = tmp.nameplateContainerOffCenter;
    }
    items[1] = prop;
    obj.style = items;
    obj = { user, nameplate };
    obj.children = canStartAuthorization(giftCode(soundId[41]).NameplatePreview, obj);
    return canStartAuthorization(canStartAuthorization, obj);
  }).otherwise(() => canStartAuthorization(customMessage(soundId[42]), { giftStyle: giftCode.giftStyle }));
};
