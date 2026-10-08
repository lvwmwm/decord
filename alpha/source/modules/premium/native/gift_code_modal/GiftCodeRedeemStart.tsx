// Module ID: 10476
// Function ID: 10477
// Name: GiftCodeRedeemStart
// Dependencies: [32, 19, 17, 10466, 1389, 6092, 1085, 21, 5629, 6917, 1126, 5741, 1992, 5090, 587, 558, 576, 1502, 504, 4922, 10477, 10478, 6847, 10482, 7264, 8271, 6844, 10483, 6841, 6865, 1264, 10142, 7038, 5086, 10484, 6851, 8970, 1200, 10486, 11186, 11187, 11237, 5375, 10475, 5940, 8919, 10469, 11241, 11242, 6803, 2]

// Module 10476 (GiftCodeRedeemStart)
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1992 */;
import UserUtilsDefault from "UserUtils" /* 4922 */;
import Text_Text from "Text/Text" /* 5086 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import GiftCodeUtils from "GiftCodeUtils" /* 5629 */;
import merged5 from "merged5" /* 5741 */;
import GameIcon from "GameIcon" /* 6851 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6917 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7038 */;
import ExperimentalGameControllerLinkIcon2 from "ExperimentalGameControllerLinkIcon" /* 8919 */;
import BundleSampleV2Default from "BundleSampleV2" /* 8970 */;
import actions_GiftCodeActionCreatorsDefault from "actions/GiftCodeActionCreators" /* 10469 */;
import GiftCodeRedeemModal from "GiftCodeRedeemModal" /* 10475 */;
import SlayerStorefrontGiftPreviewDefault from "SlayerStorefrontGiftPreview" /* 10484 */;
import ProfileEffectUserPreviewDefault from "ProfileEffectUserPreview" /* 10486 */;
import ProfileFrameUserPreviewDefault from "ProfileFrameUserPreview" /* 11186 */;
import NameplatePreview from "NameplatePreview" /* 11187 */;
import GiftBoxAnimationDefault from "GiftBoxAnimation" /* 11237 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GiftCodeStore from "GiftCodeStore" /* 10466 */;
import UserStore from "UserStore" /* 1389 */;
import SKUStore from "SKUStore" /* 6092 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_9, navigation;

let StyleSheet;
let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp;
let unpackModuleId;
const SocialLayerStorefrontActionCreators = tmp(10142);
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
  const f104499 = () => {
    const intl = intl7.intl;
    const obj = { sender };
    return intl.formatToPlainString(intl7.t.JUV1tL, obj);
  };
  const f104500 = () => {
    const intl = sender(dependencyMap[10]).intl;
    return intl.string(sender(dependencyMap[10]).t.iJ8823);
  };
  const f104501 = () => {
    const intl = intl7.intl;
    const obj = { sender };
    return intl.formatToPlainString(intl7.t.SKduyh, obj);
  };
  const f104502 = () => {
    const intl = intl7.intl;
    const obj = { sender };
    return intl.formatToPlainString(intl7.t["1w42T2"], obj);
  };
  const f104503 = () => {
    const intl = intl7.intl;
    const obj = { sender };
    return intl.formatToPlainString(intl7.t.vFiQlU, obj);
  };
  const f104504 = () => {
    const intl = intl7.intl;
    const obj = { sender };
    return intl.formatToPlainString(intl7.t["UH/EQL"], obj);
  };
  const f104505 = () => {
    const intl = sender(dependencyMap[10]).intl;
    return intl.string(sender(dependencyMap[10]).t["2ZO6CC"]);
  };
  const f104506 = () => {
    const intl = sender(dependencyMap[10]).intl;
    return intl.string(sender(dependencyMap[10]).t["2NxdjX"]);
  };
  const f104507 = () => {
    const intl = sender(dependencyMap[10]).intl;
    return intl.string(sender(dependencyMap[10]).t.v7F232);
  };
  ({ subscriptionPlan, sender } = isSubscription);
  ({ sku, itemType, isBundle } = isSubscription);
  if (isSubscription.isSubscription) {
    if (null != subscriptionPlan) {
      let name;
      const getSubscriptionGiftStartHeaderText = sender(5629).getSubscriptionGiftStartHeaderText;
      sender(5629);
      if (sku != null) {
        name = sku.name;
      }
      subscriptionGiftStartHeaderText = getSubscriptionGiftStartHeaderText(subscriptionPlan, sender, name);
    }
    return subscriptionGiftStartHeaderText;
  }
  let obj = sender(6917);
  if (obj.isGameItemSKU(sku)) {
    let intl = tmp2(1126).intl;
    subscriptionGiftStartHeaderText = intl.string(tmp2(1126).t["Bn1J+a"]);
  } else {
    const obj2 = { type: itemType, isBundle, sender };
    const str = sender(5741);
    const match = str.match(obj2);
    const obj3 = { isBundle: true, sender: P.not(sender(5741).P.nullish) };
    const _with = match.with;
    P = tmp2(5741).P;
    const obj4 = { isBundle: true, sender: sender(5741).P.nullish };
    const _with2 = _with(obj3, f104499).with;
    _with(obj3, f104499);
    const obj5 = { type: sender(1992).CollectiblesItemType.AVATAR_DECORATION, sender: P2.not(sender(5741).P.nullish) };
    const _with3 = _with2(obj4, f104500).with;
    _with2(obj4, f104500);
    P2 = tmp2(5741).P;
    const obj6 = { type: sender(1992).CollectiblesItemType.PROFILE_EFFECT, sender: P3.not(sender(5741).P.nullish) };
    const _with4 = _with3(obj5, f104501).with;
    _with3(obj5, f104501);
    P3 = tmp2(5741).P;
    const obj7 = { type: sender(1992).CollectiblesItemType.NAMEPLATE, sender: P4.not(sender(5741).P.nullish) };
    const _with5 = _with4(obj6, f104502).with;
    _with4(obj6, f104502);
    P4 = tmp2(5741).P;
    const obj8 = { type: sender(1992).CollectiblesItemType.PROFILE_FRAME, sender: P5.not(sender(5741).P.nullish) };
    const _with6 = _with5(obj7, f104503).with;
    _with5(obj7, f104503);
    P5 = tmp2(5741).P;
    const obj9 = { type: sender(1992).CollectiblesItemType.AVATAR_DECORATION, sender: sender(5741).P.nullish };
    const _with7 = _with6(obj8, f104504).with;
    _with6(obj8, f104504);
    const obj10 = { type: sender(1992).CollectiblesItemType.PROFILE_EFFECT, sender: sender(5741).P.nullish };
    const _with8 = _with7(obj9, f104505).with;
    _with7(obj9, f104505);
    const obj11 = { type: sender(1992).CollectiblesItemType.NAMEPLATE, sender: sender(5741).P.nullish };
    const _with9 = _with8(obj10, f104506).with;
    _with8(obj10, f104506);
    const obj12 = { type: sender(1992).CollectiblesItemType.PROFILE_FRAME, sender: sender(5741).P.nullish };
    const _with10 = _with9(obj11, f104507).with;
    _with9(obj11, f104507);
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
({ Image: hasOwnProperty, View: metroRequire, ScrollView: metroImportDefault, StyleSheet } = react_native);
({ AnalyticEvents: unpackModuleId, GiftCodeModalStates: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, body: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28 }, bodyWithMessage: { flex: 0 }, nameplateContainer: { width: "100%" }, nameplateContainerOffCenter: { paddingBottom: 56 }, message: { gap: 8 }, text: { textAlign: "center", paddingHorizontal: 32 }, footer: { paddingHorizontal: 24, paddingBottom: 12 }, confettiBackground: { justifyContent: "center", width: "100%", position: "absolute", top: 0, left: 0, opacity: 0.4, height: 275 }, confettiImage: obj3, emojiContainer: { justifyContent: "center", alignItems: "center" }, imageWrapper: { position: "relative", width: "100%", alignItems: "center", justifyContent: "center" }, collectiblesAsset: { margin: 40 }, collectiblesAssetBundle: { margin: 20, alignSelf: "stretch", minHeight: 250, alignItems: "center", justifyContent: "center" }, giftCardAsset: { marginTop: 20, marginBottom: 40 }, linkAccountIcon: { marginRight: 4 } };
obj2 = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { width: "100%", height: 275 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_16 = createStyles(obj);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftCodeRedeemStart(giftCode) {
  let first;
  let firstProfileEffect;
  let onLayout;
  let ref;
  let soundId;
  let stateFromStores1;
  let tmp17;
  let tmp22;
  let tmp23;
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
  let tmp4 = firstProfileEffect();
  let closure_5 = tmp4;
  let obj2 = giftCode(soundId[17]);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = stateFromStores1;
    let items = [stateFromStores1];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== giftCode.code) {
    class S {
      constructor() {
        return GiftCodeStore.getIsAccepting(giftCode.code);
      }
    }
    cResult[1] = giftCode.code;
    cResult[2] = S;
    tmp8 = S;
  } else {
    class S {
      constructor() {
        return GiftCodeStore.getIsAccepting(giftCode.code);
      }
    }
  }
  let tmpResult = tmp(tmp2[18]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  const items1 = [closure_9];
  const tmpResult9 = tmp(tmp2[18]);
  stateFromStores1 = tmpResult9.useStateFromStores(items1, () => {
    const obj = UserUtilsDefault;
    return obj.getName(UserStore.getUser(giftCode.userId));
  });
  if (stateFromStores1 == null) {
    class S {
      constructor() {
        return GiftCodeStore.getIsAccepting(giftCode.code);
      }
    }
  }
  const tmp11 = customMessage;
  const tmp12 = customMessage(tmp2[20])(giftCode.code, user);
  closure_9 = tmp12;
  const tmpResult10 = tmp(tmp2[21]);
  const getOrFetchSubscriptionPlan = tmpResult10.useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  const tmpResult11 = tmp(tmp2[22]);
  const getOrFetchApplication = tmpResult11.useGetOrFetchApplication(giftCode.applicationId);
  const useFetchCollectiblesProduct = tmp(tmp2[23]).useFetchCollectiblesProduct;
  tmp(tmp2[23]);
  const tmpResult13 = tmp(tmp2[24]);
  if (tmpResult13.isCollectiblesGiftCode(giftCode)) {
    class S {
      constructor() {
        return GiftCodeStore.getIsAccepting(giftCode.code);
      }
    }
  }
  const product = useFetchCollectiblesProduct(null, true).product;
  if (product != null) {
    class S {
      constructor() {
        return GiftCodeStore.getIsAccepting(giftCode.code);
      }
    }
  }
  let c13;
  if (product != null) {
    class S {
      constructor() {
        return GiftCodeStore.getIsAccepting(giftCode.code);
      }
    }
  }
  let tmp16 = undefined === tmp(tmp2[12]).CollectiblesItemType.BUNDLE;
  const isBundle = tmp16;
  if (cResult[3] !== product) {
    class S {
      constructor() {
        return GiftCodeStore.getIsAccepting(giftCode.code);
      }
    }
    if (product == null) {
      class S {
        constructor() {
          return GiftCodeStore.getIsAccepting(giftCode.code);
        }
      }
      tmp19[0] = [];
    }
    cResult[3] = product;
    cResult[4] = tmp18;
    tmp17 = tmp18;
  } else {
    class S {
      constructor() {
        return GiftCodeStore.getIsAccepting(giftCode.code);
      }
    }
  }
  const tmpResult14 = tmp(tmp2[25]);
  const shopProductItems = tmpResult14.useShopProductItems(tmp17);
  const firstAvatarDecoration = shopProductItems.firstAvatarDecoration;
  firstProfileEffect = shopProductItems.firstProfileEffect;
  const firstNameplate = shopProductItems.firstNameplate;
  let tmp21 = null != customMessage;
  if (tmp21) {
    class S {
      constructor() {
        return GiftCodeStore.getIsAccepting(giftCode.code);
      }
    }
    tmp21 = customMessage.length > 0;
  }
  let closure_18 = tmp21;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return GiftCodeStore.getIsAccepting(giftCode.code);
      }
    }
    const items2 = [getOrFetchSubscriptionPlan];
    cResult[5] = items2;
    tmp22 = items2;
  } else {
    class S {
      constructor() {
        return GiftCodeStore.getIsAccepting(giftCode.code);
      }
    }
  }
  if (cResult[6] !== giftCode.skuId) {
    class U {
      constructor() {
        return SKUStore.get(giftCode.skuId);
      }
    }
    cResult[6] = giftCode.skuId;
    cResult[7] = U;
    tmp23 = U;
  } else {
    class U {
      constructor() {
        return SKUStore.get(giftCode.skuId);
      }
    }
  }
  const tmpResult15 = tmp(tmp2[18]);
  const stateFromStores2 = tmpResult15.useStateFromStores(tmp22, tmp23);
  let tmp25 = tmp11(tmp2[26])(getOrFetchApplication);
  const fetched = tmp25.fetched;
  const hasAlreadyLinked = tmp25.hasAlreadyLinked;
  const canStartAuthorization = tmp25.canStartAuthorization;
  const startAuthorization = tmp25.startAuthorization;
  const tmpResult16 = tmp(tmp2[27]);
  const socialLayerStorefrontMobileAccountLinkingDisabled = tmpResult16.useSocialLayerStorefrontMobileAccountLinkingDisabled(giftCode.applicationId);
  const tmp11Result = tmp11(tmp2[28]);
  const analyticsLocations = tmp11Result(tmp11(tmp2[29]).GIFT_CODE_MODAL).analyticsLocations;
  if (cResult[8] === analyticsLocations) {
    class U {
      constructor() {
        return SKUStore.get(giftCode.skuId);
      }
    }
  }
  let obj3 = { analyticsLocations, skuId: giftCode.skuId, applicationId: giftCode.applicationId, canStartAuthorization };
  cResult[8] = analyticsLocations;
  cResult[9] = canStartAuthorization;
  cResult[10] = giftCode.applicationId;
  cResult[11] = giftCode.skuId;
  cResult[12] = obj3;
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
  let tmp = c16();
  let closure_5 = tmp;
  let tmp2 = giftCode;
  let obj = giftCode(soundId[17]);
  let closure_6 = obj.useNavigation();
  let obj2 = giftCode(soundId[18]);
  let items = [closure_8];
  const stateFromStores = obj2.useStateFromStores(items, () => GiftCodeStore.getIsAccepting(giftCode.code));
  let obj3 = giftCode(soundId[18]);
  const items1 = [stateFromStores1];
  let str = obj3.useStateFromStores(items1, () => {
    const obj = UserUtilsDefault;
    return obj.getName(UserStore.getUser(giftCode.userId));
  });
  if (str == null) {
    str = "";
  }
  const tmp6 = customMessage(soundId[20])(giftCode.code, user);
  message = tmp6;
  const tmp2Result = tmp2(soundId[21]);
  const getOrFetchSubscriptionPlan = tmp2Result.useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  const tmp2Result9 = tmp2(soundId[22]);
  const getOrFetchApplication = tmp2Result9.useGetOrFetchApplication(giftCode.applicationId);
  const useFetchCollectiblesProduct = tmp2(tmp3[23]).useFetchCollectiblesProduct;
  tmp2(soundId[23]);
  let skuId = null;
  const tmp2Result11 = tmp2(soundId[24]);
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
  tmp2(soundId[25]);
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
  const items2 = [fetched];
  const tmp2Result13 = tmp2(soundId[18]);
  stateFromStores1 = tmp2Result13.useStateFromStores(items2, () => SKUStore.get(giftCode.skuId));
  const tmp18 = customMessage(soundId[26])(getOrFetchApplication);
  fetched = tmp18.fetched;
  hasAlreadyLinked = tmp18.hasAlreadyLinked;
  canStartAuthorization = tmp18.canStartAuthorization;
  startAuthorization = tmp18.startAuthorization;
  const tmp2Result14 = tmp2(soundId[27]);
  const socialLayerStorefrontMobileAccountLinkingDisabled = tmp2Result14.useSocialLayerStorefrontMobileAccountLinkingDisabled(giftCode.applicationId);
  const tmp5Result = customMessage(soundId[28]);
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
        obj2.track(unpackModuleId.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj3);
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
    const obj2 = { step: canStartAuthorization.CONFIRM, giftCode, customMessage, emojiName, soundId };
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
  const SafeAreaPaddingView = tmp2(tmp3[49]).SafeAreaPaddingView;
  const tmp30 = message;
  if (tmp29Result2) {
    bodyWithMessage = tmp.bodyWithMessage;
  }
  const obj7 = { contentContainerStyle: items8, alwaysBounceVertical: false, children: null };
  items8[1] = bodyWithMessage;
  const obj8 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.text, accessibilityRole: "header", children: tmp33(obj9) };
  obj9 = { isSubscription: giftCode.isSubscription, subscriptionPlan: getOrFetchSubscriptionPlan, sender: str, itemType: type1, isBundle: type === BUNDLE, sku: stateFromStores1 };
  type1 = undefined;
  const Text = tmp2(tmp3[33]).Text;
  tmp33 = ref;
  if (first != null) {
    type1 = first.type;
  }
  const items9 = [startAuthorization(Text, obj8), , , ];
  const obj10 = { style: tmp.imageWrapper, children: tmp29Result };
  tmp29Result = null != emojiName;
  if (tmp29Result) {
    const obj11 = { style: tmp.confettiBackground, children: items10 };
    const obj12 = { source: tmp2(soundId[47]), style: tmp.confettiImage };
    items10 = [startAuthorization(closure_5, obj12), ];
    const obj13 = { style: tmp.emojiContainer, children: startAuthorization(customMessage(soundId[48]), obj14) };
    obj14 = { emojiName, randomizeSizing: true };
    items10[1] = startAuthorization(closure_6, obj13);
    tmp29Result = tmp29(tmp36, obj11);
  }
  items9[1] = startAuthorization(closure_6, obj10);
  if (null == first) {
    if (null != getOrFetchApplication) {
      const tmp2Result15 = tmp2(soundId[9]);
      if (tmp2Result15.isGameItemSKU(stateFromStores1)) {
        const obj15 = { sku: stateFromStores1, application: getOrFetchApplication, sender: str, hasAccountLinked: hasAlreadyLinked, canStartAuthorization, mobileAccountLinkingDisabled: socialLayerStorefrontMobileAccountLinkingDisabled };
        tmp32Result = tmp32(tmp5(tmp3[34]), obj15);
      }
      items9[2] = tmp32Result;
      if (tmp29Result2) {
        const obj16 = { style: tmp.message, children: items11 };
        const obj17 = { variant: "eyebrow", color: "text-default", style: tmp.text, children: intl.format(tmp2(soundId[10]).t["6yrIzU"], obj18) };
        const Text2 = tmp2(tmp3[33]).Text;
        intl = tmp2(tmp3[10]).intl;
        obj18 = { sender: str };
        items11 = [startAuthorization(Text2, obj17), ];
        let str3 = "heading-xxl/semibold";
        const Text3 = tmp2(tmp3[33]).Text;
        if (customMessage.length > 110) {
          str3 = "heading-xl/semibold";
        }
        const obj19 = { variant: str3, style: tmp.text, children: customMessage };
        items11[1] = startAuthorization(Text3, obj19);
        tmp29Result2 = tmp29(tmp36, obj16);
      }
      items9[3] = tmp29Result2;
      obj7.children = items9;
      const items12 = [analyticsLocations(tmp30, obj7), ];
      const obj20 = { style: tmp.footer, children: tmp32Result3 };
      if (giftCode.isClaimed) {
        const obj21 = {
          text: intl6.string(tmp2(soundId[10]).t.XiOHRX),
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
          text: intl5.string(tmp2(soundId[10]).t["3nWhcJ"]),
          size: "md",
          onPress() {
                  const obj = GiftCodeUtils;
                  const obj2 = { step: canStartAuthorization.ERROR, giftCode, customMessage, emojiName, soundId };
                  obj.trackStep(obj2);
                  const obj3 = { message };
                  closure_6.push(GiftCodeRedeemModal.GiftCodeModalScreens.ERROR, obj3);
                }
        };
        const Button2 = tmp2(tmp3[42]).Button;
        intl5 = tmp2(tmp3[10]).intl;
        tmp32Result3 = tmp32(Button2, obj22);
      } else {
        const tmp2Result16 = tmp2(soundId[9]);
        if (tmp2Result16.isGameItemSKU(stateFromStores1)) {
          if (!hasAlreadyLinked) {
            if (canStartAuthorization) {
              let obj23;
              if (!socialLayerStorefrontMobileAccountLinkingDisabled) {
                obj23 = {
                  text: intl2.string(tmp2(tmp3[10]).t["VDAhr+"]),
                  size: "md",
                  icon: startAuthorization(ExperimentalGameControllerLinkIcon, obj24),
                  onPress() {
                                  const obj = AnalyticsUtilsDefault;
                                  const obj2 = { location_stack: analyticsLocations, sku_id: giftCode.skuId, application_id: giftCode.applicationId, is_gift: true };
                                  obj.track(unpackModuleId.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, obj2);
                                  const obj3 = { analyticsLocations };
                                  startAuthorization(obj3);
                                }
                };
                intl2 = tmp2(tmp3[10]).intl;
                obj24 = { size: "xs", color: customMessage(soundId[14]).colors.WHITE, style: tmp.linkAccountIcon };
                ExperimentalGameControllerLinkIcon = tmp2(tmp3[45]).ExperimentalGameControllerLinkIcon;
              }
              tmp32Result3 = tmp32(tmp42, obj23);
            }
            const obj25 = {
              text: intl3.string(tmp2(soundId[10]).t.cpT0Cq),
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
                      const obj2 = { step: canStartAuthorization.SUCCESS, giftCode, customMessage, emojiName, soundId };
                      obj.trackStep(obj2);
                      const obj3 = { giftCode };
                      closure_1_6.push(giftCode(soundId[43]).GiftCodeModalScreens.SUCCESS, obj3);
                    },
                    onError(error) {
                      let obj4;
                      const obj = giftCode(soundId[8]);
                      const obj2 = { step: canStartAuthorization.ERROR, giftCode, customMessage, emojiName, soundId };
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
      items12[1] = startAuthorization(closure_6, obj20);
      obj6.children = items12;
      return analyticsLocations(SafeAreaPaddingView, obj6);
    }
  }
  if (null == first) {
    if (null != getOrFetchApplication) {
      if (null == giftCode.giftStyle) {
        const obj27 = { game: getOrFetchApplication, size: tmp2(soundId[35]).GameIconSizes.LARGE, skuId: giftCode.skuId };
        const tmp5Result2 = customMessage(soundId[35]);
        tmp32Result = tmp32(tmp5Result2, obj27);
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
      return map1(GiftBoxAnimationDefault, obj);
    })
  };
  const str2 = tmp2(soundId[11]);
  const match = str2.match(first);
  const obj31 = { type: tmp2(soundId[12]).CollectiblesItemType.AVATAR_DECORATION };
  const withResult = match.with(obj31, (avatarDecoration) => {
    let getAvatarSource;
    const obj = { source: getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_START]), avatarDecoration, size: native.AvatarSizes.GIFT_START, animate: true };
    const Avatar = native.Avatar;
    getAvatarSource = user.getAvatarSource;
    return map1(Avatar, obj);
  });
  const obj32 = { type: tmp2(soundId[12]).CollectiblesItemType.PROFILE_EFFECT };
  const withResult1 = withResult.with(obj32, (profileEffect) => {
    const obj = { user, profileEffect };
    return map1(ProfileEffectUserPreviewDefault, obj);
  });
  const obj33 = { type: tmp2(soundId[12]).CollectiblesItemType.PROFILE_FRAME };
  const withResult2 = withResult1.with(obj33, (profileFrame) => {
    const obj = { user, profileFrame };
    return map1(ProfileFrameUserPreviewDefault, obj);
  });
  const obj34 = { type: tmp2(soundId[12]).CollectiblesItemType.NAMEPLATE };
  withResult3 = withResult2.with(obj34, (nameplate) => {
    let obj2;
    const items = [closure_5.nameplateContainer, ];
    let prop;
    const tmp2 = metroRequire;
    if (!closure_8) {
      prop = closure_5.nameplateContainerOffCenter;
    }
    items[1] = prop;
    const obj = { style: items, children: map1(NameplatePreview.NameplatePreview, obj2) };
    obj2 = { user, nameplate };
    return map1(tmp2, obj);
  });
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemStart.tsx");

export default tmp7;
