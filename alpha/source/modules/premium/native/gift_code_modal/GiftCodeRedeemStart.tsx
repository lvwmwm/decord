// Module ID: 10500
// Function ID: 10501
// Name: GiftCodeRedeemStart
// Dependencies: [32, 19, 17, 10490, 1390, 6087, 1085, 21, 5633, 6930, 1126, 5745, 1993, 5092, 587, 558, 576, 1503, 504, 4962, 10501, 10502, 6857, 10506, 7275, 8295, 6854, 10507, 6851, 6878, 1265, 10156, 7047, 5088, 10508, 6861, 9000, 1200, 10510, 10626, 10627, 10628, 5379, 10499, 5934, 8949, 10493, 6156, 10632, 10633, 6813, 2]

// Module 10500 (GiftCodeRedeemStart)
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1993 */;
import UserUtilsDefault from "UserUtils" /* 4962 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import GiftCodeUtils from "GiftCodeUtils" /* 5633 */;
import merged5 from "merged5" /* 5745 */;
import GameIcon from "GameIcon" /* 6861 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6930 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7047 */;
import ExperimentalGameControllerLinkIcon2 from "ExperimentalGameControllerLinkIcon" /* 8949 */;
import BundleSampleV2Default from "BundleSampleV2" /* 9000 */;
import actions_GiftCodeActionCreatorsDefault from "actions/GiftCodeActionCreators" /* 10493 */;
import GiftCodeRedeemModal from "GiftCodeRedeemModal" /* 10499 */;
import SlayerStorefrontGiftPreviewDefault from "SlayerStorefrontGiftPreview" /* 10508 */;
import ProfileEffectUserPreviewDefault from "ProfileEffectUserPreview" /* 10510 */;
import ProfileFrameUserPreviewDefault from "ProfileFrameUserPreview" /* 10626 */;
import NameplatePreview from "NameplatePreview" /* 10627 */;
import GiftBoxAnimationDefault from "GiftBoxAnimation" /* 10628 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GiftCodeStore from "GiftCodeStore" /* 10490 */;
import UserStore from "UserStore" /* 1390 */;
import SKUStore_mod from "SKUStore" /* 6087 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let navigation;

let StyleSheet;
let c10;
let closure_12;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let tmp;
let unpackModuleId;
const SocialLayerStorefrontActionCreators = tmp(10156);
function getGiftCodeHeaderText(isSubscription) {
  let P;
  let P2;
  let P3;
  let P4;
  let P5;
  let isBundle;
  let itemType;
  let sender;
  let sku;
  let subscriptionGiftStartHeaderText;
  let subscriptionPlan;
  const f105123 = () => {
    const intl = intl7.intl;
    const obj = { sender };
    return intl.formatToPlainString(intl7.t.JUV1tL, obj);
  };
  const f105124 = () => {
    const intl = sender(dependencyMap[10]).intl;
    return intl.string(sender(dependencyMap[10]).t.iJ8823);
  };
  const f105125 = () => {
    const intl = intl7.intl;
    const obj = { sender };
    return intl.formatToPlainString(intl7.t.SKduyh, obj);
  };
  const f105126 = () => {
    const intl = intl7.intl;
    const obj = { sender };
    return intl.formatToPlainString(intl7.t["1w42T2"], obj);
  };
  const f105127 = () => {
    const intl = intl7.intl;
    const obj = { sender };
    return intl.formatToPlainString(intl7.t.vFiQlU, obj);
  };
  const f105128 = () => {
    const intl = intl7.intl;
    const obj = { sender };
    return intl.formatToPlainString(intl7.t["UH/EQL"], obj);
  };
  const f105129 = () => {
    const intl = sender(dependencyMap[10]).intl;
    return intl.string(sender(dependencyMap[10]).t["2ZO6CC"]);
  };
  const f105130 = () => {
    const intl = sender(dependencyMap[10]).intl;
    return intl.string(sender(dependencyMap[10]).t["2NxdjX"]);
  };
  const f105131 = () => {
    const intl = sender(dependencyMap[10]).intl;
    return intl.string(sender(dependencyMap[10]).t.v7F232);
  };
  ({ subscriptionPlan, sender } = isSubscription);
  ({ sku, itemType, isBundle } = isSubscription);
  if (isSubscription.isSubscription) {
    if (null != subscriptionPlan) {
      let name;
      const getSubscriptionGiftStartHeaderText = sender(5633).getSubscriptionGiftStartHeaderText;
      sender(5633);
      if (sku != null) {
        name = sku.name;
      }
      subscriptionGiftStartHeaderText = getSubscriptionGiftStartHeaderText(subscriptionPlan, sender, name);
    }
    return subscriptionGiftStartHeaderText;
  }
  let obj = sender(6930);
  if (obj.isGameItemSKU(sku)) {
    let intl = tmp2(1126).intl;
    subscriptionGiftStartHeaderText = intl.string(tmp2(1126).t["Bn1J+a"]);
  } else {
    const obj2 = { type: itemType, isBundle, sender };
    const str = sender(5745);
    const match = str.match(obj2);
    const obj3 = { isBundle: true, sender: P.not(sender(5745).P.nullish) };
    const _with = match.with;
    P = tmp2(5745).P;
    const obj4 = { isBundle: true, sender: sender(5745).P.nullish };
    const _with2 = _with(obj3, f105123).with;
    _with(obj3, f105123);
    const obj5 = { type: sender(1993).CollectiblesItemType.AVATAR_DECORATION, sender: P2.not(sender(5745).P.nullish) };
    const _with3 = _with2(obj4, f105124).with;
    _with2(obj4, f105124);
    P2 = tmp2(5745).P;
    const obj6 = { type: sender(1993).CollectiblesItemType.PROFILE_EFFECT, sender: P3.not(sender(5745).P.nullish) };
    const _with4 = _with3(obj5, f105125).with;
    _with3(obj5, f105125);
    P3 = tmp2(5745).P;
    const obj7 = { type: sender(1993).CollectiblesItemType.NAMEPLATE, sender: P4.not(sender(5745).P.nullish) };
    const _with5 = _with4(obj6, f105126).with;
    _with4(obj6, f105126);
    P4 = tmp2(5745).P;
    const obj8 = { type: sender(1993).CollectiblesItemType.PROFILE_FRAME, sender: P5.not(sender(5745).P.nullish) };
    const _with6 = _with5(obj7, f105127).with;
    _with5(obj7, f105127);
    P5 = tmp2(5745).P;
    const obj9 = { type: sender(1993).CollectiblesItemType.AVATAR_DECORATION, sender: sender(5745).P.nullish };
    const _with7 = _with6(obj8, f105128).with;
    _with6(obj8, f105128);
    const obj10 = { type: sender(1993).CollectiblesItemType.PROFILE_EFFECT, sender: sender(5745).P.nullish };
    const _with8 = _with7(obj9, f105129).with;
    _with7(obj9, f105129);
    const obj11 = { type: sender(1993).CollectiblesItemType.NAMEPLATE, sender: sender(5745).P.nullish };
    const _with9 = _with8(obj10, f105130).with;
    _with8(obj10, f105130);
    const obj12 = { type: sender(1993).CollectiblesItemType.PROFILE_FRAME, sender: sender(5745).P.nullish };
    const _with10 = _with9(obj11, f105131).with;
    _with9(obj11, f105131);
    const _with10Result = _with10(obj12, () => {
      const intl = sender(dependencyMap[10]).intl;
      return intl.string(sender(dependencyMap[10]).t["1+tgC0"]);
    });
    subscriptionGiftStartHeaderText = _with10Result.otherwise(() => {
      const intl = sender(dependencyMap[10]).intl;
      return intl.string(sender(dependencyMap[10]).t["2BWscv"]);
    });
  }
}
({ View: hasOwnProperty, ScrollView: metroRequire, StyleSheet } = react_native);
let SKUStore = SKUStore_mod;
({ AnalyticEvents: c10, GiftCodeModalStates: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, body: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28 }, bodyWithMessage: { flex: 0 }, nameplateContainer: { width: "100%" }, nameplateContainerOffCenter: { paddingBottom: 56 }, message: { gap: 8 }, text: { textAlign: "center", paddingHorizontal: 32 }, footer: { paddingHorizontal: 24, paddingBottom: 12 }, confettiBackground: { justifyContent: "center", width: "100%", position: "absolute", top: 0, left: 0, opacity: 0.4, height: 275 }, confettiImage: obj3, emojiContainer: { justifyContent: "center", alignItems: "center" }, imageWrapper: { position: "relative", width: "100%", alignItems: "center", justifyContent: "center" }, collectiblesAsset: { margin: 40 }, collectiblesAssetBundle: { margin: 20, alignSelf: "stretch", minHeight: 250, alignItems: "center", justifyContent: "center" }, giftCardAsset: { marginTop: 20, marginBottom: 40 }, linkAccountIcon: { marginRight: 4 } };
obj2 = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { width: "100%", height: 275 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_15 = createStyles(obj);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftCodeRedeemStart(giftCode) {
  let closure_9;
  let first;
  let firstAvatarDecoration;
  let onLayout;
  let ref;
  let soundId;
  let stateFromStores;
  let str;
  let tmp19;
  let tmp23;
  let tmp25;
  let tmp8;
  let tmp = giftCode;
  let tmp2 = soundId;
  let obj = giftCode(soundId[16]);
  const cResult = obj.c(119);
  giftCode = giftCode.giftCode;
  const customMessage = giftCode.customMessage;
  soundId = giftCode.soundId;
  const emojiName = giftCode.emojiName;
  const user = giftCode.user;
  let tmp4 = firstAvatarDecoration();
  let closure_5 = tmp4;
  let obj2 = giftCode(soundId[17]);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = stateFromStores;
    let items = [stateFromStores];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== giftCode.code) {
    const fn = function f() {
      return GiftCodeStore.getIsAccepting(giftCode.code);
    };
    cResult[1] = giftCode.code;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  let tmpResult = tmp(tmp2[18]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  const items1 = [str];
  const tmpResult9 = tmp(tmp2[18]);
  str = tmpResult9.useStateFromStores(items1, () => {
    const obj = UserUtilsDefault;
    return obj.getName(UserStore.getUser(giftCode.userId));
  });
  if (str == null) {
    str = "";
  }
  let tmp10 = customMessage;
  const tmp11 = customMessage(tmp2[20])(giftCode.code, user);
  SKUStore = tmp11;
  const tmpResult10 = tmp(tmp2[21]);
  const getOrFetchSubscriptionPlan = tmpResult10.useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  const tmpResult11 = tmp(tmp2[22]);
  const getOrFetchApplication = tmpResult11.useGetOrFetchApplication(giftCode.applicationId);
  const useFetchCollectiblesProduct = tmp(tmp2[23]).useFetchCollectiblesProduct;
  tmp(tmp2[23]);
  let skuId = null;
  const tmpResult13 = tmp(tmp2[24]);
  if (tmpResult13.isCollectiblesGiftCode(giftCode)) {
    skuId = giftCode.skuId;
  }
  const product = useFetchCollectiblesProduct(skuId, true).product;
  let first1;
  if (product != null) {
    first1 = product.items[0];
  }
  let type;
  if (product != null) {
    type = product.type;
  }
  const isBundle = type === tmp(tmp2[12]).CollectiblesItemType.BUNDLE;
  const tmp18 = type === tmp(tmp2[12]).CollectiblesItemType.BUNDLE;
  if (cResult[3] !== product) {
    let tmp20 = product;
    if (product == null) {
      let obj3 = { items: [] };
      tmp20 = obj3;
    }
    cResult[3] = product;
    cResult[4] = tmp20;
    tmp19 = tmp20;
  } else {
    tmp19 = cResult[4];
  }
  const tmpResult14 = tmp(tmp2[25]);
  const shopProductItems = tmpResult14.useShopProductItems(tmp19);
  firstAvatarDecoration = shopProductItems.firstAvatarDecoration;
  const firstProfileEffect = shopProductItems.firstProfileEffect;
  const firstNameplate = shopProductItems.firstNameplate;
  let closure_18 = null != customMessage && customMessage.length > 0;
  const tmp22 = null != customMessage && customMessage.length > 0;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [SKUStore];
    cResult[5] = items2;
    tmp23 = items2;
  } else {
    tmp23 = cResult[5];
  }
  if (cResult[6] !== giftCode.skuId) {
    class M {
      constructor() {
        return SKUStore.get(giftCode.skuId);
      }
    }
    cResult[6] = giftCode.skuId;
    cResult[7] = M;
    tmp25 = M;
  } else {
    class M {
      constructor() {
        return SKUStore.get(giftCode.skuId);
      }
    }
  }
  const tmpResult15 = tmp(tmp2[18]);
  const stateFromStores1 = tmpResult15.useStateFromStores(tmp23, tmp25);
  let tmp27 = tmp10(tmp2[26])(getOrFetchApplication);
  const fetched = tmp27.fetched;
  const hasAlreadyLinked = tmp27.hasAlreadyLinked;
  const canStartAuthorization = tmp27.canStartAuthorization;
  const startAuthorization = tmp27.startAuthorization;
  const tmpResult16 = tmp(tmp2[27]);
  const socialLayerStorefrontMobileAccountLinkingDisabled = tmpResult16.useSocialLayerStorefrontMobileAccountLinkingDisabled(giftCode.applicationId);
  const tmp10Result = tmp10(tmp2[28]);
  const analyticsLocations = tmp10Result(tmp10(tmp2[29]).GIFT_CODE_MODAL).analyticsLocations;
  if (cResult[8] === analyticsLocations) {
    class M {
      constructor() {
        return SKUStore.get(giftCode.skuId);
      }
    }
  }
  let obj4 = { analyticsLocations, skuId: giftCode.skuId, applicationId: giftCode.applicationId, canStartAuthorization };
  cResult[8] = analyticsLocations;
  cResult[9] = canStartAuthorization;
  cResult[10] = giftCode.applicationId;
  cResult[11] = giftCode.skuId;
  cResult[12] = obj4;
}) : (function GiftCodeRedeemStart(giftCode) {
  let ExperimentalGameControllerLinkIcon;
  let _undefined;
  let c16;
  let firstAvatarDecoration;
  let firstNameplate;
  let firstProfileEffect;
  let intl;
  let intl2;
  let intl3;
  let intl5;
  let intl6;
  let items10;
  let items11;
  let obj14;
  let obj18;
  let obj24;
  let obj9;
  let stringResult;
  let tmp27;
  let tmp29Result;
  let tmp32Result;
  let tmp32Result3;
  let tmp32Result4;
  let tmp33;
  let type1;
  let withResult3;
  giftCode = giftCode.giftCode;
  const customMessage = giftCode.customMessage;
  const soundId = giftCode.soundId;
  const emojiName = giftCode.emojiName;
  const user = giftCode.user;
  let message;
  let closure_8;
  let stateFromStores1;
  let fetched;
  let hasAlreadyLinked;
  let canStartAuthorization;
  let startAuthorization;
  let analyticsLocations;
  let ref;
  c16 = undefined;
  let tmp = ref();
  let closure_5 = tmp;
  let tmp2 = giftCode;
  const tmp3 = soundId;
  let obj = giftCode(soundId[17]);
  let closure_6 = obj.useNavigation();
  let obj2 = giftCode(soundId[18]);
  let items = [message];
  const stateFromStores = obj2.useStateFromStores(items, () => GiftCodeStore.getIsAccepting(giftCode.code));
  let obj3 = giftCode(soundId[18]);
  const items1 = [closure_8];
  let str = obj3.useStateFromStores(items1, () => {
    const obj = UserUtilsDefault;
    return obj.getName(UserStore.getUser(giftCode.userId));
  });
  if (str == null) {
    str = "";
  }
  const tmp6 = customMessage(tmp3[20])(giftCode.code, user);
  message = tmp6;
  const tmp2Result = tmp2(tmp3[21]);
  const getOrFetchSubscriptionPlan = tmp2Result.useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  const tmp2Result9 = tmp2(tmp3[22]);
  const getOrFetchApplication = tmp2Result9.useGetOrFetchApplication(giftCode.applicationId);
  const useFetchCollectiblesProduct = tmp2(tmp3[23]).useFetchCollectiblesProduct;
  tmp2(tmp3[23]);
  let skuId = null;
  const tmp2Result11 = tmp2(tmp3[24]);
  if (tmp2Result11.isCollectiblesGiftCode(giftCode)) {
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
  const BUNDLE = tmp2(tmp3[12]).CollectiblesItemType.BUNDLE;
  let tmp14 = product;
  const useShopProductItems = tmp2(tmp3[25]).useShopProductItems;
  tmp2(tmp3[25]);
  if (product == null) {
    let obj4 = { items: [] };
    tmp14 = obj4;
  }
  const shopProductItems = useShopProductItems(tmp14);
  let tmp29Result2 = null != customMessage;
  ({ firstAvatarDecoration, firstProfileEffect, firstNameplate } = shopProductItems);
  if (tmp29Result2) {
    tmp29Result2 = customMessage.length > 0;
  }
  closure_8 = tmp29Result2;
  const items2 = [stateFromStores1];
  const tmp2Result13 = tmp2(tmp3[18]);
  stateFromStores1 = tmp2Result13.useStateFromStores(items2, () => SKUStore.get(giftCode.skuId));
  const tmp18 = customMessage(tmp3[26])(getOrFetchApplication);
  fetched = tmp18.fetched;
  hasAlreadyLinked = tmp18.hasAlreadyLinked;
  canStartAuthorization = tmp18.canStartAuthorization;
  startAuthorization = tmp18.startAuthorization;
  const tmp2Result14 = tmp2(tmp3[27]);
  const socialLayerStorefrontMobileAccountLinkingDisabled = tmp2Result14.useSocialLayerStorefrontMobileAccountLinkingDisabled(giftCode.applicationId);
  const tmp5Result = customMessage(tmp3[28]);
  analyticsLocations = tmp5Result(tmp5(tmp3[29]).GIFT_CODE_MODAL).analyticsLocations;
  const obj5 = { analyticsLocations, skuId: giftCode.skuId, applicationId: giftCode.applicationId, canStartAuthorization };
  ref = user.useRef(obj5);
  const items3 = [canStartAuthorization];
  const effect = user.useEffect(() => {
    ref.current.canStartAuthorization = canStartAuthorization;
  }, items3);
  const items4 = [fetched, hasAlreadyLinked, stateFromStores1];
  const effect1 = user.useEffect(() => {
    let applicationId;
    let skuId;
    const tmp = fetched;
    if (tmp) {
      const obj = SlayerStorefrontUtils;
      if (obj.isGameItemSKU(stateFromStores1)) {
        ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = ref.current);
        const obj3 = { location_stack: analyticsLocations, sku_id: skuId, application_id: applicationId, is_gift: true, is_account_linked: hasAlreadyLinked, can_start_authorization: canStartAuthorization };
        const obj2 = AnalyticsUtilsDefault;
        obj2.track(fetched.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj3);
      }
    }
  }, items4);
  const items5 = [stateFromStores1];
  const effect2 = user.useEffect(() => {
    const obj = SlayerStorefrontUtils;
    if (obj.isGameItemSKU(stateFromStores1)) {
      const tmpResult = SocialLayerStorefrontActionCreators;
      const socialLayerStorefrontConfig = tmpResult.fetchSocialLayerStorefrontConfig();
    }
  }, items5);
  const items6 = [giftCode, customMessage, emojiName, soundId];
  const effect3 = user.useEffect(() => {
    const obj = GiftCodeUtils;
    const obj2 = { step: unpackModuleId.CONFIRM, giftCode, customMessage, emojiName, soundId };
    obj.trackStep(obj2);
  }, items6);
  const items7 = [soundId, giftCode.giftStyle];
  const effect4 = user.useEffect(() => {
    const tmp = null != giftCode.giftStyle && null != soundId;
    if (tmp) {
      const obj2 = { soundId, volume: 1 };
      const obj = SoundboardActionCreators;
      obj.playSoundLocally(null, obj2);
    }
  }, items7);
  [tmp27, c16] = emojiName(user.useState(), 2);
  emojiName(user.useState(), 2);
  const callback = user.useCallback((nativeEvent) => {
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
  const obj6 = { bottom: true, style: tmp.container, children: null };
  const items8 = [tmp.body, ];
  let bodyWithMessage;
  const SafeAreaPaddingView = tmp2(tmp3[50]).SafeAreaPaddingView;
  const tmp30 = closure_6;
  if (tmp29Result2) {
    bodyWithMessage = tmp.bodyWithMessage;
  }
  const obj7 = { contentContainerStyle: items8, alwaysBounceVertical: false, children: null };
  items8[1] = bodyWithMessage;
  const obj8 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.text, accessibilityRole: "header", children: tmp33(obj9) };
  obj9 = { isSubscription: giftCode.isSubscription, subscriptionPlan: getOrFetchSubscriptionPlan, sender: str, itemType: type1, isBundle: type === BUNDLE, sku: stateFromStores1 };
  type1 = undefined;
  const Text = tmp2(tmp3[33]).Text;
  tmp33 = analyticsLocations;
  if (first != null) {
    type1 = first.type;
  }
  const items9 = [canStartAuthorization(Text, obj8), , , ];
  const obj10 = { style: tmp.imageWrapper, children: tmp29Result };
  tmp29Result = null != emojiName;
  if (tmp29Result) {
    const obj11 = { style: tmp.confettiBackground, children: items10 };
    const obj12 = { source: tmp2(tmp3[48]), style: tmp.confettiImage };
    const tmp5Result3 = customMessage(tmp3[47]);
    items10 = [canStartAuthorization(tmp5Result3, obj12), ];
    const obj13 = { style: tmp.emojiContainer, children: canStartAuthorization(customMessage(tmp3[49]), obj14) };
    obj14 = { emojiName, randomizeSizing: true };
    items10[1] = canStartAuthorization(closure_5, obj13);
    tmp29Result = tmp29(tmp36, obj11);
  }
  items9[1] = canStartAuthorization(closure_5, obj10);
  if (null == first) {
    if (null != getOrFetchApplication) {
      const tmp2Result15 = tmp2(tmp3[9]);
      if (tmp2Result15.isGameItemSKU(stateFromStores1)) {
        const obj15 = { sku: stateFromStores1, application: getOrFetchApplication, sender: str, hasAccountLinked: hasAlreadyLinked, canStartAuthorization, mobileAccountLinkingDisabled: socialLayerStorefrontMobileAccountLinkingDisabled };
        tmp32Result = tmp32(tmp5(tmp3[34]), obj15);
      }
      items9[2] = tmp32Result;
      if (tmp29Result2) {
        const obj16 = { style: tmp.message, children: items11 };
        const obj17 = { variant: "eyebrow", color: "text-default", style: tmp.text, children: intl.format(tmp2(tmp3[10]).t["6yrIzU"], obj18) };
        const Text2 = tmp2(tmp3[33]).Text;
        intl = tmp2(tmp3[10]).intl;
        obj18 = { sender: str };
        items11 = [canStartAuthorization(Text2, obj17), ];
        let str3 = "heading-xxl/semibold";
        const Text3 = tmp2(tmp3[33]).Text;
        if (customMessage.length > 110) {
          str3 = "heading-xl/semibold";
        }
        const obj19 = { variant: str3, style: tmp.text, children: customMessage };
        items11[1] = canStartAuthorization(Text3, obj19);
        tmp29Result2 = tmp29(tmp36, obj16);
      }
      items9[3] = tmp29Result2;
      obj7.children = items9;
      const items12 = [startAuthorization(tmp30, obj7), ];
      const obj20 = { style: tmp.footer, children: tmp32Result3 };
      if (giftCode.isClaimed) {
        const obj21 = {
          text: intl6.string(tmp2(tmp3[10]).t.XiOHRX),
          size: "md",
          onPress() {
                  const obj = { giftCode };
                  return closure_6.push(GiftCodeRedeemModal.GiftCodeModalScreens.SUCCESS, obj);
                }
        };
        const Button3 = tmp2(tmp3[42]).Button;
        intl6 = tmp2(tmp3[10]).intl;
        tmp32Result3 = tmp32(Button3, obj21);
      } else if (null != tmp6) {
        const obj22 = {
          text: intl5.string(tmp2(tmp3[10]).t["3nWhcJ"]),
          size: "md",
          onPress() {
                  const obj = GiftCodeUtils;
                  const obj2 = { step: unpackModuleId.ERROR, giftCode, customMessage, emojiName, soundId };
                  obj.trackStep(obj2);
                  const obj3 = { message };
                  closure_6.push(GiftCodeRedeemModal.GiftCodeModalScreens.ERROR, obj3);
                }
        };
        const Button2 = tmp2(tmp3[42]).Button;
        intl5 = tmp2(tmp3[10]).intl;
        tmp32Result3 = tmp32(Button2, obj22);
      } else {
        const tmp2Result16 = tmp2(tmp3[9]);
        if (tmp2Result16.isGameItemSKU(stateFromStores1)) {
          if (!hasAlreadyLinked) {
            if (canStartAuthorization) {
              let obj23;
              if (!socialLayerStorefrontMobileAccountLinkingDisabled) {
                obj23 = {
                  text: intl2.string(tmp2(tmp3[10]).t["VDAhr+"]),
                  size: "md",
                  icon: canStartAuthorization(ExperimentalGameControllerLinkIcon, obj24),
                  onPress() {
                                  const obj = AnalyticsUtilsDefault;
                                  const obj2 = { location_stack: analyticsLocations, sku_id: giftCode.skuId, application_id: giftCode.applicationId, is_gift: true };
                                  obj.track(fetched.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, obj2);
                                  const obj3 = { analyticsLocations };
                                  startAuthorization(obj3);
                                }
                };
                intl2 = tmp2(tmp3[10]).intl;
                obj24 = { size: "xs", color: customMessage(tmp3[14]).colors.WHITE, style: tmp.linkAccountIcon };
                ExperimentalGameControllerLinkIcon = tmp2(tmp3[45]).ExperimentalGameControllerLinkIcon;
              }
              tmp32Result3 = tmp32(tmp42, obj23);
            }
            const obj25 = {
              text: intl3.string(tmp2(tmp3[10]).t.cpT0Cq),
              size: "md",
              onPress() {
                          const arr = customMessage(soundId[44]);
                          arr.pop();
                        }
            };
            intl3 = tmp2(tmp3[10]).intl;
            obj23 = obj25;
          }
        }
        const obj26 = {
          disabled: stateFromStores,
          text: stringResult,
          size: "md",
          onPress() {
                  let obj = actions_GiftCodeActionCreatorsDefault;
                  let obj2 = {
                    code: giftCode.code,
                    onRedeemed() {
                      const obj = giftCode(soundId[8]);
                      const obj2 = { step: hasAlreadyLinked.SUCCESS, giftCode, customMessage, emojiName, soundId };
                      obj.trackStep(obj2);
                      const obj3 = { giftCode };
                      closure_1_6.push(giftCode(soundId[43]).GiftCodeModalScreens.SUCCESS, obj3);
                    },
                    onError(error) {
                      let obj4;
                      const obj = giftCode(soundId[8]);
                      const obj2 = { step: hasAlreadyLinked.ERROR, giftCode, customMessage, emojiName, soundId };
                      obj.trackStep(obj2);
                      const push = closure_1_6.push;
                      const obj3 = { message: obj4.getGiftCodeRedeemError(error, user) };
                      const ERROR = giftCode(soundId[43]).GiftCodeModalScreens.ERROR;
                      obj4 = giftCode(soundId[8]);
                      push(ERROR, obj3);
                    }
                  };
                  obj.redeemGiftCode(obj2);
                }
        };
        const Button = tmp2(tmp3[42]).Button;
        const intl4 = tmp2(tmp3[10]).intl;
        const string = intl4.string;
        const t = tmp2(tmp3[10]).t;
        if (stateFromStores) {
          stringResult = string(t.rTeOBK);
        } else {
          stringResult = string(t["3nWhcJ"]);
        }
        tmp32Result3 = tmp32(Button, obj26);
      }
      items12[1] = canStartAuthorization(closure_5, obj20);
      obj6.children = items12;
      return startAuthorization(SafeAreaPaddingView, obj6);
    }
  }
  if (null == first) {
    if (null != getOrFetchApplication) {
      if (null == giftCode.giftStyle) {
        const obj27 = { game: getOrFetchApplication, size: tmp2(tmp3[35]).GameIconSizes.LARGE, skuId: giftCode.skuId };
        const tmp5Result4 = customMessage(tmp3[35]);
        tmp32Result = tmp32(tmp5Result4, obj27);
      }
    }
  }
  if (type === BUNDLE) {
    let obj30;
    if (null != product) {
      const obj28 = { style: tmp.collectiblesAssetBundle, onLayout: callback, children: tmp32Result4 };
      tmp32Result4 = null != tmp27;
      if (tmp32Result4) {
        const obj29 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, previewAssets: product.previewAssets, disableStaticBackground: true, size: "large", targetSize: tmp27 };
        tmp32Result4 = tmp32(tmp5(tmp3[36]), obj29);
      }
      obj30 = obj28;
    }
    tmp32Result = tmp32(tmp36, obj30);
  }
  obj30 = {
    style: giftCode.isSubscription ? tmp.giftCardAsset : tmp.collectiblesAsset,
    children: withResult3.otherwise(() => {
      const obj = { giftStyle: giftCode.giftStyle };
      return authStore2(GiftBoxAnimationDefault, obj);
    })
  };
  const str2 = tmp2(tmp3[11]);
  const match = str2.match(first);
  const obj31 = { type: tmp2(tmp3[12]).CollectiblesItemType.AVATAR_DECORATION };
  const withResult = match.with(obj31, (avatarDecoration) => {
    let getAvatarSource;
    const obj = { source: getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_START]), avatarDecoration, size: native.AvatarSizes.GIFT_START, animate: true };
    const Avatar = native.Avatar;
    getAvatarSource = user.getAvatarSource;
    return authStore2(Avatar, obj);
  });
  const obj32 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_EFFECT };
  const withResult1 = withResult.with(obj32, (profileEffect) => {
    const obj = { user, profileEffect };
    return authStore2(ProfileEffectUserPreviewDefault, obj);
  });
  const obj33 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_FRAME };
  const withResult2 = withResult1.with(obj33, (profileFrame) => {
    const obj = { user, profileFrame };
    return authStore2(ProfileFrameUserPreviewDefault, obj);
  });
  const obj34 = { type: tmp2(tmp3[12]).CollectiblesItemType.NAMEPLATE };
  withResult3 = withResult2.with(obj34, (nameplate) => {
    let obj2;
    const items = [hasOwnProperty.nameplateContainer, ];
    let prop;
    const tmp2 = hasOwnProperty;
    if (!closure_8) {
      prop = hasOwnProperty.nameplateContainerOffCenter;
    }
    items[1] = prop;
    const obj = { style: items, children: authStore2(NameplatePreview.NameplatePreview, obj2) };
    obj2 = { user, nameplate };
    return authStore2(tmp2, obj);
  });
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemStart.tsx");

export default tmp7;
