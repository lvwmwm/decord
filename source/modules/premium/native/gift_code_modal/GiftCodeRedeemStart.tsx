// Module ID: 8199
// Function ID: 64825
// Name: getGiftCodeHeaderText
// Dependencies: [31, 27, 8193, 1849, 4175, 653, 8200, 33, 4366, 5611, 1212, 4329, 1876, 4130, 689, 1456, 566, 3969, 8201, 8202, 5470, 8206, 6786, 8207, 5467, 8208, 5464, 5484, 675, 7459, 5733, 5121, 4126, 8209, 8210, 8211, 5474, 8215, 1273, 8234, 8750, 9805, 12257, 4543, 8198, 4337, 8648, 8197, 2]
// Exports: default

// Module 8199 (getGiftCodeHeaderText)
import SafeAreaPaddingView from "SafeAreaPaddingView";
import get_ActivityIndicator from "QUICK_SWITCHER";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import { BUNDLE_PREVIEW_CONFIG } from "SAMPLE_PROFILE_ASPECT_RATIO";
import jsxProd from "registerAsset";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function getGiftCodeHeaderText(isSubscription) {
  let isBundle;
  let itemType;
  let sender;
  let sku;
  let subscriptionPlan;
  ({ subscriptionPlan, sender } = isSubscription);
  ({ sku, itemType, isBundle } = isSubscription);
  if (isSubscription.isSubscription) {
    if (null != subscriptionPlan) {
      let name;
      if (null != sku) {
        name = sku.name;
      }
      let subscriptionGiftStartHeaderText = sender(4366).getSubscriptionGiftStartHeaderText(subscriptionPlan, sender, name);
      const obj24 = sender(4366);
    }
    return subscriptionGiftStartHeaderText;
  }
  let obj = sender(5611);
  if (obj.isGameItemSKU(sku)) {
    let intl = tmp2(1212).intl;
    subscriptionGiftStartHeaderText = intl.string(tmp2(1212).t["Bn1J+a"]);
  } else {
    obj = { type: itemType, isBundle, sender };
    const match = tmp2(4329).match(obj);
    obj = { isBundle: true };
    const P = tmp2(4329).P;
    obj.sender = P.not(tmp2(4329).P.nullish);
    const str = tmp2(4329);
    const obj1 = { isBundle: true, sender: tmp2(4329).P.nullish };
    const withResult = match.with(obj, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.JUV1tL, { sender });
    });
    const obj2 = { type: tmp2(1876).CollectiblesItemType.AVATAR_DECORATION };
    const P2 = tmp2(4329).P;
    obj2.sender = P2.not(tmp2(4329).P.nullish);
    const withResult1 = match.with(obj, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t.iJ8823);
    });
    const obj3 = { type: tmp2(1876).CollectiblesItemType.PROFILE_EFFECT };
    const P3 = tmp2(4329).P;
    obj3.sender = P3.not(tmp2(4329).P.nullish);
    const withResult2 = match.with(obj, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.SKduyh, { sender });
    });
    const obj4 = { type: tmp2(1876).CollectiblesItemType.NAMEPLATE };
    const P4 = tmp2(4329).P;
    obj4.sender = P4.not(tmp2(4329).P.nullish);
    const withResult3 = match.with(obj, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t["1w42T2"], { sender });
    });
    const obj5 = { type: tmp2(1876).CollectiblesItemType.PROFILE_FRAME };
    const P5 = tmp2(4329).P;
    obj5.sender = P5.not(tmp2(4329).P.nullish);
    const withResult4 = match.with(obj, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t["1w42T2"], { sender });
    }).with(obj4, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.vFiQlU, { sender });
    });
    const obj6 = { type: tmp2(1876).CollectiblesItemType.AVATAR_DECORATION, sender: tmp2(4329).P.nullish };
    const withResult5 = match.with(obj, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t["1w42T2"], { sender });
    }).with(obj4, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.vFiQlU, { sender });
    }).with(obj5, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t["UH/EQL"], { sender });
    });
    const obj7 = { type: tmp2(1876).CollectiblesItemType.PROFILE_EFFECT, sender: tmp2(4329).P.nullish };
    const withResult6 = match.with(obj, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t["1w42T2"], { sender });
    }).with(obj4, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.vFiQlU, { sender });
    }).with(obj5, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t["UH/EQL"], { sender });
    }).with(obj6, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t["2ZO6CC"]);
    });
    const obj8 = { type: tmp2(1876).CollectiblesItemType.NAMEPLATE, sender: tmp2(4329).P.nullish };
    const withResult7 = match.with(obj, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t["1w42T2"], { sender });
    }).with(obj4, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.vFiQlU, { sender });
    }).with(obj5, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t["UH/EQL"], { sender });
    }).with(obj6, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t["2ZO6CC"]);
    }).with(obj7, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t["2NxdjX"]);
    });
    const obj9 = { type: tmp2(1876).CollectiblesItemType.PROFILE_FRAME, sender: tmp2(4329).P.nullish };
    const withResult8 = match.with(obj, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t["1w42T2"], { sender });
    }).with(obj4, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.vFiQlU, { sender });
    }).with(obj5, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t["UH/EQL"], { sender });
    }).with(obj6, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t["2ZO6CC"]);
    }).with(obj7, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t["2NxdjX"]);
    }).with(obj8, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t.v7F232);
    });
    subscriptionGiftStartHeaderText = match.with(obj, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t["1w42T2"], { sender });
    }).with(obj4, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.vFiQlU, { sender });
    }).with(obj5, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t["UH/EQL"], { sender });
    }).with(obj6, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t["2ZO6CC"]);
    }).with(obj7, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t["2NxdjX"]);
    }).with(obj8, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t.v7F232);
    }).with(obj9, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t["1+tgC0"]);
    }).otherwise(() => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t["2BWscv"]);
    });
    const withResult9 = match.with(obj, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.JUV1tL, { sender });
    }).with(obj1, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t.iJ8823);
    }).with(obj2, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.SKduyh, { sender });
    }).with(obj3, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t["1w42T2"], { sender });
    }).with(obj4, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t.vFiQlU, { sender });
    }).with(obj5, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.formatToPlainString(sender(outer1_2[10]).t["UH/EQL"], { sender });
    }).with(obj6, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t["2ZO6CC"]);
    }).with(obj7, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t["2NxdjX"]);
    }).with(obj8, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t.v7F232);
    }).with(obj9, () => {
      const intl = sender(outer1_2[10]).intl;
      return intl.string(sender(outer1_2[10]).t["1+tgC0"]);
    });
  }
}
({ ImageBackground: closure_4, View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: closure_10, GiftCodeModalStates: closure_11 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
let closure_14 = { width: BUNDLE_PREVIEW_CONFIG.large.bundleWidth, height: BUNDLE_PREVIEW_CONFIG.large.bundleHeight };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, justifyContent: "space-between", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.body = { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28 };
_createForOfIteratorHelperLoose.bodyWithMessage = { flex: 0 };
_createForOfIteratorHelperLoose.nameplateContainer = { width: "100%" };
_createForOfIteratorHelperLoose.nameplateContainerOffCenter = { paddingBottom: 56 };
_createForOfIteratorHelperLoose.message = { gap: 8 };
_createForOfIteratorHelperLoose.text = { textAlign: "center", paddingHorizontal: 32 };
_createForOfIteratorHelperLoose.footer = { paddingHorizontal: 24, paddingBottom: 12 };
_createForOfIteratorHelperLoose.confettiBackground = { justifyContent: "center", width: "100%", position: "absolute", top: 0, left: 0, opacity: 0.4, height: 275 };
_createForOfIteratorHelperLoose.emojiContainer = { justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.imageWrapper = { position: "relative", width: "100%", alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.collectiblesAsset = { margin: 40 };
_createForOfIteratorHelperLoose.collectiblesAssetBundle = { margin: 20 };
_createForOfIteratorHelperLoose.giftCardAsset = { marginTop: 20, marginBottom: 40 };
_createForOfIteratorHelperLoose.linkAccountIcon = { marginRight: 4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemStart.tsx");

export default function GiftCodeRedeemStart(giftCode) {
  let firstAvatarDecoration;
  let firstProfileEffect;
  giftCode = giftCode.giftCode;
  const customMessage = giftCode.customMessage;
  const soundId = giftCode.soundId;
  const emojiName = giftCode.emojiName;
  const user = giftCode.user;
  let c7;
  let c8;
  let stateFromStores2;
  let fetched;
  let hasAlreadyLinked;
  let canStartAuthorization;
  let startAuthorization;
  let analyticsLocations;
  let _createForOfIteratorHelperLoose;
  let tmp = _createForOfIteratorHelperLoose();
  let closure_5 = tmp;
  let obj = giftCode(soundId[15]);
  let closure_6 = obj.useNavigation();
  let obj1 = giftCode(soundId[16]);
  let items = [c7];
  const stateFromStores = obj1.useStateFromStores(items, () => _undefined.getIsAccepting(giftCode.code));
  let obj2 = giftCode(soundId[16]);
  const items1 = [c8];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => customMessage(soundId[17]).getName(_undefined2.getUser(giftCode.userId)));
  let str = "";
  if (null != stateFromStores1) {
    str = stateFromStores1;
  }
  const tmp4 = customMessage(soundId[18])(giftCode.code, user);
  c7 = tmp4;
  let obj3 = giftCode(soundId[19]);
  const getOrFetchSubscriptionPlan = obj3.useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  let obj4 = giftCode(soundId[20]);
  const getOrFetchApplication = obj4.useGetOrFetchApplication(giftCode.applicationId);
  let obj5 = giftCode(soundId[21]);
  let obj6 = giftCode(soundId[22]);
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
  const tmp10 = type === giftCode(soundId[12]).CollectiblesItemType.BUNDLE;
  let obj7 = giftCode(soundId[23]);
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
  c8 = tmp55Result;
  let obj9 = giftCode(soundId[16]);
  const items2 = [stateFromStores2];
  stateFromStores2 = obj9.useStateFromStores(items2, () => stateFromStores2.get(giftCode.skuId));
  const tmp15 = customMessage(soundId[24])(getOrFetchApplication);
  fetched = tmp15.fetched;
  hasAlreadyLinked = tmp15.hasAlreadyLinked;
  canStartAuthorization = tmp15.canStartAuthorization;
  startAuthorization = tmp15.startAuthorization;
  let obj10 = giftCode(soundId[25]);
  const socialLayerStorefrontMobileAccountLinkingDisabled = obj10.useSocialLayerStorefrontMobileAccountLinkingDisabled(giftCode.applicationId);
  analyticsLocations = customMessage(soundId[26])(customMessage(soundId[27]).GIFT_CODE_MODAL).analyticsLocations;
  obj = { analyticsLocations, skuId: giftCode.skuId, applicationId: giftCode.applicationId, canStartAuthorization };
  _createForOfIteratorHelperLoose = emojiName.useRef(obj);
  const items3 = [canStartAuthorization];
  const effect = emojiName.useEffect(() => {
    ref.current.canStartAuthorization = canStartAuthorization;
  }, items3);
  const items4 = [fetched, hasAlreadyLinked, stateFromStores2];
  const effect1 = emojiName.useEffect(() => {
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
  const effect2 = emojiName.useEffect(() => {
    if (obj.isGameItemSKU(stateFromStores2)) {
      const socialLayerStorefrontConfig = giftCode(soundId[29]).fetchSocialLayerStorefrontConfig();
      const obj2 = giftCode(soundId[29]);
    }
  }, items5);
  const items6 = [giftCode, customMessage, emojiName, soundId];
  const effect3 = emojiName.useEffect(() => {
    let obj = giftCode(soundId[8]);
    obj = { step: hasAlreadyLinked.CONFIRM, giftCode, customMessage, emojiName, soundId };
    obj.trackStep(obj);
  }, items6);
  const items7 = [soundId, giftCode.giftStyle];
  const effect4 = emojiName.useEffect(() => {
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
  obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.text, accessibilityRole: "header" };
  obj4 = { isSubscription: giftCode.isSubscription, subscriptionPlan: getOrFetchSubscriptionPlan, sender: str };
  let type1;
  if (null != first) {
    type1 = first.type;
  }
  obj4.itemType = type1;
  obj4.isBundle = tmp10;
  obj4.sku = stateFromStores2;
  obj3.children = getGiftCodeHeaderText(obj4);
  const items9 = [canStartAuthorization(giftCode(soundId[32]).Text, obj3), , , ];
  obj5 = { style: tmp.imageWrapper };
  let tmp31 = null != emojiName;
  if (tmp31) {
    obj6 = { source: giftCode(soundId[33]), style: tmp.confettiBackground };
    obj7 = { style: tmp.emojiContainer };
    const obj8 = { emojiName, randomizeSizing: true };
    obj7.children = canStartAuthorization(customMessage(soundId[34]), obj8);
    obj6.children = canStartAuthorization(closure_5, obj7);
    tmp31 = canStartAuthorization(user, obj6);
  }
  obj5.children = tmp31;
  items9[1] = canStartAuthorization(closure_5, obj5);
  if (null == first) {
    if (null != getOrFetchApplication) {
      let obj20 = giftCode(soundId[9]);
      if (obj20.isGameItemSKU(stateFromStores2)) {
        obj9 = { sku: stateFromStores2, application: getOrFetchApplication, sender: str, hasAccountLinked: hasAlreadyLinked, canStartAuthorization, mobileAccountLinkingDisabled: socialLayerStorefrontMobileAccountLinkingDisabled };
        let tmp40Result = canStartAuthorization(customMessage(soundId[35]), obj9);
      }
      items9[2] = tmp40Result;
      if (tmp55Result) {
        obj10 = { style: tmp.message };
        const obj11 = { variant: "eyebrow", color: "text-default", style: tmp.text };
        const intl = giftCode(soundId[10]).intl;
        const obj12 = { sender: str };
        obj11.children = intl.format(giftCode(soundId[10]).t["6yrIzU"], obj12);
        const items10 = [canStartAuthorization(giftCode(soundId[32]).Text, obj11), ];
        const obj13 = {};
        let str4 = "heading-xxl/semibold";
        if (customMessage.length > 110) {
          str4 = "heading-xl/semibold";
        }
        obj13.variant = str4;
        obj13.style = tmp.text;
        obj13.children = customMessage;
        items10[1] = canStartAuthorization(giftCode(soundId[32]).Text, obj13);
        obj10.children = items10;
        tmp55Result = startAuthorization(closure_5, obj10);
        const tmp55 = startAuthorization;
        const tmp56 = closure_5;
        const tmp57 = canStartAuthorization;
      }
      items9[3] = tmp55Result;
      obj2.children = items9;
      const items11 = [tmp23(tmp24, obj2), ];
      const obj14 = { style: tmp.footer };
      if (giftCode.isClaimed) {
        const obj15 = {};
        const intl6 = giftCode(soundId[10]).intl;
        obj15.text = intl6.string(giftCode(soundId[10]).t.XiOHRX);
        obj15.size = "md";
        obj15.onPress = function onPress() {
          return arr.push(giftCode(soundId[44]).GiftCodeModalScreens.SUCCESS, { giftCode });
        };
        let tmp62Result = canStartAuthorization(giftCode(soundId[43]).Button, obj15);
      } else if (null != tmp4) {
        const obj16 = {};
        const intl5 = giftCode(soundId[10]).intl;
        obj16.text = intl5.string(giftCode(soundId[10]).t["3nWhcJ"]);
        obj16.size = "md";
        obj16.onPress = function onPress() {
          let obj = giftCode(soundId[8]);
          obj = { step: hasAlreadyLinked.ERROR, giftCode, customMessage, emojiName, soundId };
          obj.trackStep(obj);
          obj = { message: c7 };
        };
        tmp62Result = canStartAuthorization(giftCode(soundId[43]).Button, obj16);
      } else {
        if (obj47.isGameItemSKU(stateFromStores2)) {
          if (!hasAlreadyLinked) {
            if (canStartAuthorization) {
              if (!socialLayerStorefrontMobileAccountLinkingDisabled) {
                let obj17 = {};
                const intl2 = giftCode(soundId[10]).intl;
                obj17.text = intl2.string(giftCode(soundId[10]).t["VDAhr+"]);
                obj17.size = "md";
                const obj18 = { size: "xs", color: customMessage(soundId[14]).colors.WHITE, style: tmp.linkAccountIcon };
                obj17.icon = canStartAuthorization(giftCode(soundId[46]).ExperimentalGameControllerLinkIcon, obj18);
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
            const intl3 = giftCode(soundId[10]).intl;
            obj19.text = intl3.string(giftCode(soundId[10]).t.cpT0Cq);
            obj19.size = "md";
            obj19.onPress = function onPress() {
              let arr = customMessage(soundId[45]);
              arr = arr.pop();
            };
            obj17 = obj19;
            tmp62 = canStartAuthorization;
          }
        }
        obj20 = { disabled: stateFromStores };
        const intl4 = giftCode(soundId[10]).intl;
        const string = intl4.string;
        let rTeOBK = giftCode(soundId[10]).t;
        if (stateFromStores) {
          rTeOBK = rTeOBK.rTeOBK;
          let stringResult = string(rTeOBK);
        } else {
          stringResult = string(rTeOBK["3nWhcJ"]);
        }
        obj20.text = stringResult;
        obj20.size = "md";
        obj20.onPress = function onPress() {
          let obj = customMessage(soundId[47]);
          obj = {
            code: giftCode.code,
            onRedeemed() {
              let obj = giftCode(soundId[8]);
              obj = { step: hasAlreadyLinked.SUCCESS, giftCode: outer1_0, customMessage: outer1_1, emojiName: outer1_3, soundId: outer1_2 };
              obj.trackStep(obj);
              obj = { giftCode: outer1_0 };
              outer1_6.push(giftCode(soundId[44]).GiftCodeModalScreens.SUCCESS, obj);
            },
            onError(code) {
              let obj = giftCode(soundId[8]);
              obj = { step: hasAlreadyLinked.ERROR, giftCode: outer1_0, customMessage: outer1_1, emojiName: outer1_3, soundId: outer1_2 };
              obj.trackStep(obj);
              obj = { message: giftCode(soundId[8]).getGiftCodeRedeemError(code, outer1_4) };
              outer1_6.push(giftCode(soundId[44]).GiftCodeModalScreens.ERROR, obj);
            }
          };
          obj.redeemGiftCode(obj);
        };
        canStartAuthorization(giftCode(soundId[43]).Button, obj20);
        obj47 = giftCode(soundId[9]);
        const tmp73 = canStartAuthorization;
      }
      obj14.children = tmp62Result;
      items11[1] = canStartAuthorization(closure_5, obj14);
      obj1.children = items11;
      return tmp23(giftCode(soundId[31]).SafeAreaPaddingView, obj1);
    }
  }
  if (null == first) {
    if (null != getOrFetchApplication) {
      if (null == giftCode.giftStyle) {
        const obj21 = { game: getOrFetchApplication, size: giftCode(soundId[36]).GameIconSizes.LARGE, skuId: giftCode.skuId };
        tmp40Result = canStartAuthorization(customMessage(soundId[36]), obj21);
        const tmp50 = customMessage(soundId[36]);
      }
    }
  }
  if (tmp10) {
    if (null != product) {
      if (null != firstAvatarDecoration) {
        if (null != firstProfileEffect) {
          const obj22 = { style: tmp.collectiblesAssetBundle };
          const obj23 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: shopProductItems.firstNameplate, size: "large", targetSize: analyticsLocations };
          obj22.children = canStartAuthorization(customMessage(soundId[37]), obj23);
          let obj24 = obj22;
        }
        tmp40Result = tmp40(tmp41, obj24);
      }
    }
  }
  obj24 = { style: giftCode.isSubscription ? tmp.giftCardAsset : tmp.collectiblesAsset };
  const tmp17 = customMessage(soundId[26]);
  tmp24 = closure_6;
  const tmp26 = canStartAuthorization;
  const tmp27 = getGiftCodeHeaderText;
  const tmp29 = canStartAuthorization;
  const tmp30 = closure_5;
  const match = giftCode(soundId[11]).match(first);
  const str2 = giftCode(soundId[11]);
  const obj25 = { type: giftCode(soundId[12]).CollectiblesItemType.AVATAR_DECORATION };
  const withResult = match.with({ type: giftCode(soundId[12]).CollectiblesItemType.AVATAR_DECORATION }, (avatarDecoration) => {
    const obj = { source: user.getAvatarSource(null, true, giftCode(soundId[38]).AVATAR_SIZE_MAP[giftCode(undefined, soundId[38]).AvatarSizes.GIFT_START]), avatarDecoration, size: giftCode(soundId[38]).AvatarSizes.GIFT_START, animate: true };
    return canStartAuthorization(giftCode(soundId[38]).Avatar, obj);
  });
  const obj26 = { type: giftCode(soundId[12]).CollectiblesItemType.PROFILE_EFFECT };
  const withResult1 = withResult.with({ type: giftCode(soundId[12]).CollectiblesItemType.PROFILE_EFFECT }, (profileEffect) => canStartAuthorization(customMessage(soundId[39]), { user, profileEffect }));
  const obj27 = { type: giftCode(soundId[12]).CollectiblesItemType.PROFILE_FRAME };
  const withResult2 = withResult1.with({ type: giftCode(soundId[12]).CollectiblesItemType.PROFILE_FRAME }, (profileFrame) => canStartAuthorization(customMessage(soundId[40]), { user, profileFrame }));
  const obj28 = { type: giftCode(soundId[12]).CollectiblesItemType.NAMEPLATE };
  obj24.children = withResult2.with({ type: giftCode(soundId[12]).CollectiblesItemType.NAMEPLATE }, (nameplate) => {
    let obj = {};
    const items = [tmp.nameplateContainer, ];
    let prop;
    if (!c8) {
      prop = tmp.nameplateContainerOffCenter;
    }
    items[1] = prop;
    obj.style = items;
    obj = { user, nameplate };
    obj.children = canStartAuthorization(giftCode(soundId[41]).NameplatePreview, obj);
    return canStartAuthorization(canStartAuthorization, obj);
  }).otherwise(() => canStartAuthorization(customMessage(soundId[42]), { giftStyle: giftCode.giftStyle }));
};
