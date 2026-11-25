// Module ID: 11884
// Function ID: 11885
// Name: GiftCodeRedeemStart
// Dependencies: [32, 19, 17, 11879, 1386, 6329, 1388, 1071, 21, 1112, 2910, 5759, 7557, 5805, 2112, 5012, 575, 1500, 504, 11885, 11886, 5068, 11887, 11888, 7484, 11563, 6292, 9389, 7481, 11614, 6348, 6349, 1255, 9366, 10361, 7449, 5603, 5699, 11892, 11893, 11894, 7488, 9424, 1186, 9441, 11241, 11895, 11899, 5610, 11883, 6099, 11615, 11882, 2]
// Exports: default

// Module 11884 (GiftCodeRedeemStart)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1186 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import UserUtilsDefault from "UserUtils" /* 5068 */;
import GiftCodeUtils from "GiftCodeUtils" /* 5759 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7557 */;
import ProfileEffectUserPreviewDefault from "ProfileEffectUserPreview" /* 9441 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 10361 */;
import ProfileFrameUserPreviewDefault from "ProfileFrameUserPreview" /* 11241 */;
import actions_GiftCodeActionCreatorsDefault from "actions/GiftCodeActionCreators" /* 11882 */;
import GiftCodeRedeemModal from "GiftCodeRedeemModal" /* 11883 */;
import NameplatePreview from "NameplatePreview" /* 11895 */;
import GiftBoxAnimationDefault from "GiftBoxAnimation" /* 11899 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GiftCodeStore from "GiftCodeStore" /* 11879 */;
import UserStore from "UserStore" /* 1386 */;
import SKUStore from "SKUStore" /* 6329 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5012 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
let tmp;
let unpackModuleId;
const SocialLayerStorefrontActionCreators = tmp(9366);
({ View: hasOwnProperty, ScrollView: metroRequire, StyleSheet } = react_native);
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
({ AnalyticEvents: unpackModuleId, GiftCodeModalStates: closure_12, NOOP: map1 } = Constants);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, body: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28 }, bodyWithMessage: { flex: 0 }, nameplateContainer: { width: "100%" }, nameplateContainerOffCenter: { paddingBottom: 56 }, message: { gap: 8 }, text: { textAlign: "center", paddingHorizontal: 32 }, footer: { paddingHorizontal: 24, paddingBottom: 12 }, renewsText: obj3, confettiBackground: { justifyContent: "center", width: "100%", position: "absolute", top: 0, left: 0, opacity: 0.4, height: 275 }, confettiImage: obj4, emojiContainer: { justifyContent: "center", alignItems: "center" }, imageWrapper: { position: "relative", width: "100%", alignItems: "center", justifyContent: "center" }, collectiblesAsset: { margin: 40 }, collectiblesAssetBundle: { margin: 20, alignSelf: "stretch", minHeight: 250, alignItems: "center", justifyContent: "center" }, giftCardAsset: { marginTop: 20, marginBottom: 40 }, linkAccountIcon: { marginRight: 4 } };
obj2 = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { textAlign: "center", paddingHorizontal: 32, marginTop: nativeDefault.space.PX_8 };
obj4 = { width: "100%", height: 275 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_17 = createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemStart.tsx");

export default function GiftCodeRedeemStart(giftCode) {
  let ExperimentalGameControllerLinkIcon;
  let P;
  let P2;
  let P3;
  let P4;
  let P5;
  let RdrnRc;
  let _undefined;
  let c17;
  let firstAvatarDecoration;
  let firstNameplate;
  let firstProfileEffect;
  let formatToPlainStringResult;
  let intl10;
  let intl4;
  let intl5;
  let intl6;
  let intl8;
  let intl9;
  let items12;
  let items13;
  let obj26;
  let obj30;
  let obj37;
  let string;
  let string2Result;
  let tmp29;
  let tmp31Result;
  let tmp35Result4;
  let tmp35Result5;
  let tmp35Result6;
  let type;
  let withResult3;
  const f100800 = () => {
    const intl = giftCode(soundId[9]).intl;
    const obj = { sender: str };
    return intl.formatToPlainString(giftCode(soundId[9]).t.JUV1tL, obj);
  };
  const f100801 = () => {
    const intl = giftCode(soundId[9]).intl;
    return intl.string(giftCode(soundId[9]).t.iJ8823);
  };
  const f100802 = () => {
    const intl = giftCode(soundId[9]).intl;
    const obj = { sender: str };
    return intl.formatToPlainString(giftCode(soundId[9]).t.SKduyh, obj);
  };
  const f100803 = () => {
    const intl = giftCode(soundId[9]).intl;
    const obj = { sender: str };
    return intl.formatToPlainString(giftCode(soundId[9]).t["1w42T2"], obj);
  };
  const f100804 = () => {
    const intl = giftCode(soundId[9]).intl;
    const obj = { sender: str };
    return intl.formatToPlainString(giftCode(soundId[9]).t.vFiQlU, obj);
  };
  const f100805 = () => {
    const intl = giftCode(soundId[9]).intl;
    const obj = { sender: str };
    return intl.formatToPlainString(giftCode(soundId[9]).t["UH/EQL"], obj);
  };
  const f100806 = () => {
    const intl = giftCode(soundId[9]).intl;
    return intl.string(giftCode(soundId[9]).t["2ZO6CC"]);
  };
  const f100807 = () => {
    const intl = giftCode(soundId[9]).intl;
    return intl.string(giftCode(soundId[9]).t["2NxdjX"]);
  };
  const f100808 = () => {
    const intl = giftCode(soundId[9]).intl;
    return intl.string(giftCode(soundId[9]).t.v7F232);
  };
  giftCode = giftCode.giftCode;
  const customMessage = giftCode.customMessage;
  const soundId = giftCode.soundId;
  const emojiName = giftCode.emojiName;
  const user = giftCode.user;
  let stateFromStores1;
  let message;
  let closure_9;
  let stateFromStores2;
  let fetched;
  let hasAlreadyLinked;
  let canStartAuthorization;
  let startAuthorization;
  let analyticsLocations;
  let ref;
  c17 = undefined;
  let tmp = c17();
  let closure_5 = tmp;
  let tmp2 = giftCode;
  const tmp3 = soundId;
  let obj = giftCode(soundId[17]);
  let closure_6 = obj.useNavigation();
  let obj2 = giftCode(soundId[18]);
  let items = [stateFromStores1];
  const stateFromStores = obj2.useStateFromStores(items, () => GiftCodeStore.getIsAccepting(giftCode.code));
  let obj3 = giftCode(soundId[18]);
  const items1 = [stateFromStores1];
  stateFromStores1 = obj3.useStateFromStores(items1, () => GiftCodeStore.get(giftCode.code));
  if (stateFromStores1 == null) {
    stateFromStores1 = giftCode;
  }
  const tmp2Result = tmp2(tmp3[19]);
  const result = tmp2Result.isPendingGiftSubscriptionCode(stateFromStores1);
  const isResolvingAgreement = customMessage(tmp3[20])(stateFromStores1).isResolvingAgreement;
  const items2 = [message];
  const tmp2Result13 = tmp2(tmp3[18]);
  let str = tmp2Result13.useStateFromStores(items2, () => {
    const obj = UserUtilsDefault;
    return obj.getName(UserStore.getUser(giftCode.userId));
  });
  if (str == null) {
    str = "";
  }
  const tmp8 = customMessage(tmp3[22])(giftCode.code, user);
  message = tmp8;
  const tmp2Result14 = tmp2(tmp3[23]);
  const getOrFetchSubscriptionPlan = tmp2Result14.useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  const tmp2Result15 = tmp2(tmp3[24]);
  const getOrFetchApplication = tmp2Result15.useGetOrFetchApplication(giftCode.applicationId);
  const useFetchCollectiblesProduct = tmp2(tmp3[25]).useFetchCollectiblesProduct;
  tmp2(tmp3[25]);
  let skuId = null;
  const tmp2Result17 = tmp2(tmp3[26]);
  if (tmp2Result17.isCollectiblesGiftCode(giftCode)) {
    skuId = giftCode.skuId;
  }
  const product = useFetchCollectiblesProduct(skuId, true).product;
  let first;
  if (product != null) {
    first = product.items[0];
  }
  let type1;
  if (product != null) {
    type1 = product.type;
  }
  const BUNDLE = tmp2(tmp3[14]).CollectiblesItemType.BUNDLE;
  let tmp16 = product;
  const useShopProductItems = tmp2(tmp3[27]).useShopProductItems;
  tmp2(tmp3[27]);
  if (product == null) {
    let obj4 = { items: [] };
    tmp16 = obj4;
  }
  const shopProductItems = useShopProductItems(tmp16);
  let tmp31Result2 = null != customMessage;
  ({ firstAvatarDecoration, firstProfileEffect, firstNameplate } = shopProductItems);
  if (tmp31Result2) {
    tmp31Result2 = customMessage.length > 0;
  }
  closure_9 = tmp31Result2;
  const items3 = [closure_9];
  const tmp2Result19 = tmp2(tmp3[18]);
  stateFromStores2 = tmp2Result19.useStateFromStores(items3, () => SKUStore.get(giftCode.skuId));
  const tmp20 = customMessage(tmp3[28])(getOrFetchApplication);
  fetched = tmp20.fetched;
  hasAlreadyLinked = tmp20.hasAlreadyLinked;
  canStartAuthorization = tmp20.canStartAuthorization;
  startAuthorization = tmp20.startAuthorization;
  const tmp2Result20 = tmp2(tmp3[29]);
  const socialLayerStorefrontMobileAccountLinkingDisabled = tmp2Result20.useSocialLayerStorefrontMobileAccountLinkingDisabled(giftCode.applicationId);
  const tmp7Result = customMessage(tmp3[30]);
  analyticsLocations = tmp7Result(tmp7(tmp3[31]).GIFT_CODE_MODAL).analyticsLocations;
  const obj5 = { analyticsLocations, skuId: giftCode.skuId, applicationId: giftCode.applicationId, canStartAuthorization };
  ref = user.useRef(obj5);
  const items4 = [canStartAuthorization];
  const effect = user.useEffect(() => {
    ref.current.canStartAuthorization = canStartAuthorization;
  }, items4);
  const items5 = [fetched, hasAlreadyLinked, stateFromStores2];
  const effect1 = user.useEffect(() => {
    let applicationId;
    let skuId;
    const tmp = fetched;
    if (tmp) {
      const obj = SlayerStorefrontUtils;
      if (obj.isGameItemSKU(stateFromStores2)) {
        ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = ref.current);
        const obj3 = { location_stack: analyticsLocations, sku_id: skuId, application_id: applicationId, is_gift: true, is_account_linked: hasAlreadyLinked, can_start_authorization: canStartAuthorization };
        const obj2 = AnalyticsUtilsDefault;
        obj2.track(unpackModuleId.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj3);
      }
    }
  }, items5);
  const items6 = [stateFromStores2];
  const effect2 = user.useEffect(() => {
    const obj = SlayerStorefrontUtils;
    if (obj.isGameItemSKU(stateFromStores2)) {
      const tmpResult = SocialLayerStorefrontActionCreators;
      const socialLayerStorefrontConfig = tmpResult.fetchSocialLayerStorefrontConfig();
    }
  }, items6);
  const items7 = [giftCode, customMessage, emojiName, soundId];
  const effect3 = user.useEffect(() => {
    const obj = GiftCodeUtils;
    const obj2 = { step: hasAlreadyLinked.CONFIRM, giftCode, customMessage, emojiName, soundId };
    obj.trackStep(obj2);
  }, items7);
  const items8 = [soundId, giftCode.giftStyle];
  const effect4 = user.useEffect(() => {
    const tmp = null != giftCode.giftStyle && null != soundId;
    if (tmp) {
      const obj2 = { soundId, volume: 1 };
      const obj = SoundboardActionCreators;
      obj.playSoundLocally(null, obj2);
    }
  }, items8);
  [tmp29, c17] = emojiName(user.useState(), 2);
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
  const items9 = [tmp.body, ];
  let bodyWithMessage;
  const SafeAreaPaddingView = tmp2(tmp3[35]).SafeAreaPaddingView;
  const tmp32 = closure_6;
  if (tmp31Result2) {
    bodyWithMessage = tmp.bodyWithMessage;
  }
  const obj7 = { contentContainerStyle: items9, alwaysBounceVertical: false, children: null };
  items9[1] = bodyWithMessage;
  const obj8 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp.text, accessibilityRole: "header", children: formatToPlainStringResult };
  const Text = tmp2(tmp3[36]).Text;
  const isSubscription = giftCode.isSubscription;
  const tmp34 = analyticsLocations;
  if (first != null) {
    type = first.type;
  }
  if (result) {
    const intl2 = tmp2(tmp3[9]).intl;
    const obj9 = { name: str };
    formatToPlainStringResult = intl2.formatToPlainString(tmp7(tmp3[10]).lhj054, obj9);
  } else {
    if (isSubscription) {
      if (null != getOrFetchSubscriptionPlan) {
        let name;
        const getSubscriptionGiftStartHeaderText = tmp2(tmp3[11]).getSubscriptionGiftStartHeaderText;
        tmp2(tmp3[11]);
        if (stateFromStores2 != null) {
          name = stateFromStores2.name;
        }
        formatToPlainStringResult = getSubscriptionGiftStartHeaderText(getOrFetchSubscriptionPlan, str, name);
      }
    }
    const tmp2Result22 = tmp2(tmp3[12]);
    if (tmp2Result22.isGameItemSKU(stateFromStores2)) {
      let intl = tmp2(tmp3[9]).intl;
      formatToPlainStringResult = intl.string(tmp2(tmp3[9]).t["Bn1J+a"]);
    } else {
      const obj10 = { type, isBundle: type1 === BUNDLE, sender: str };
      const str2 = tmp2(tmp3[13]);
      const match = str2.match(obj10);
      const obj11 = { isBundle: true, sender: P.not(tmp2(tmp3[13]).P.nullish) };
      const _with = match.with;
      P = tmp2(tmp3[13]).P;
      const obj12 = { isBundle: true, sender: tmp2(tmp3[13]).P.nullish };
      const _with2 = _with(obj11, f100800).with;
      _with(obj11, f100800);
      const obj13 = { type: tmp2(tmp3[14]).CollectiblesItemType.AVATAR_DECORATION, sender: P2.not(tmp2(tmp3[13]).P.nullish) };
      const _with3 = _with2(obj12, f100801).with;
      _with2(obj12, f100801);
      P2 = tmp2(tmp3[13]).P;
      const obj14 = { type: tmp2(tmp3[14]).CollectiblesItemType.PROFILE_EFFECT, sender: P3.not(tmp2(tmp3[13]).P.nullish) };
      const _with4 = _with3(obj13, f100802).with;
      _with3(obj13, f100802);
      P3 = tmp2(tmp3[13]).P;
      const obj15 = { type: tmp2(tmp3[14]).CollectiblesItemType.NAMEPLATE, sender: P4.not(tmp2(tmp3[13]).P.nullish) };
      const _with5 = _with4(obj14, f100803).with;
      _with4(obj14, f100803);
      P4 = tmp2(tmp3[13]).P;
      const obj16 = { type: tmp2(tmp3[14]).CollectiblesItemType.PROFILE_FRAME, sender: P5.not(tmp2(tmp3[13]).P.nullish) };
      const _with6 = _with5(obj15, f100804).with;
      _with5(obj15, f100804);
      P5 = tmp2(tmp3[13]).P;
      const obj17 = { type: tmp2(tmp3[14]).CollectiblesItemType.AVATAR_DECORATION, sender: tmp2(tmp3[13]).P.nullish };
      const _with7 = _with6(obj16, f100805).with;
      _with6(obj16, f100805);
      const obj18 = { type: tmp2(tmp3[14]).CollectiblesItemType.PROFILE_EFFECT, sender: tmp2(tmp3[13]).P.nullish };
      const _with8 = _with7(obj17, f100806).with;
      _with7(obj17, f100806);
      const obj19 = { type: tmp2(tmp3[14]).CollectiblesItemType.NAMEPLATE, sender: tmp2(tmp3[13]).P.nullish };
      const _with9 = _with8(obj18, f100807).with;
      _with8(obj18, f100807);
      const obj20 = { type: tmp2(tmp3[14]).CollectiblesItemType.PROFILE_FRAME, sender: tmp2(tmp3[13]).P.nullish };
      const _with10 = _with9(obj19, f100808).with;
      _with9(obj19, f100808);
      const _with10Result = _with10(obj20, () => {
        const intl = giftCode(soundId[9]).intl;
        return intl.string(giftCode(soundId[9]).t["1+tgC0"]);
      });
      formatToPlainStringResult = _with10Result.otherwise(() => {
        const intl = giftCode(soundId[9]).intl;
        return intl.string(giftCode(soundId[9]).t["2BWscv"]);
      });
    }
  }
  const items10 = [startAuthorization(Text, obj8), ];
  let tmp35Result = result && null != getOrFetchSubscriptionPlan;
  if (tmp35Result) {
    const obj21 = { variant: "body-md/medium", style: tmp.renewsText, children: string(RdrnRc) };
    const Text2 = tmp2(tmp3[36]).Text;
    const intl3 = tmp2(tmp3[9]).intl;
    string = intl3.string;
    if (getOrFetchSubscriptionPlan.interval === stateFromStores2.MONTH) {
      RdrnRc = tmp7(tmp3[10]).p3wUY4;
    } else {
      RdrnRc = tmp7(tmp3[10]).RdrnRc;
    }
    tmp35Result = tmp35(Text2, obj21);
  }
  items10[1] = tmp35Result;
  const items11 = [ref(tmp34, { children: items10 }), , , ];
  const obj22 = { style: tmp.imageWrapper, children: tmp31Result };
  tmp31Result = null != emojiName;
  if (tmp31Result) {
    const obj23 = { style: tmp.confettiBackground, children: items12 };
    const obj24 = { source: tmp2(tmp3[38]), style: tmp.confettiImage };
    const tmp7Result3 = customMessage(tmp3[37]);
    items12 = [startAuthorization(tmp7Result3, obj24), ];
    const obj25 = { style: tmp.emojiContainer, children: startAuthorization(customMessage(tmp3[39]), obj26) };
    obj26 = { emojiName, randomizeSizing: true };
    items12[1] = startAuthorization(closure_5, obj25);
    tmp31Result = tmp31(tmp52, obj23);
  }
  items11[1] = startAuthorization(closure_5, obj22);
  if (null == first) {
    if (null != getOrFetchApplication) {
      const tmp2Result23 = tmp2(tmp3[12]);
      if (tmp2Result23.isGameItemSKU(stateFromStores2)) {
        const obj27 = { sku: stateFromStores2, application: getOrFetchApplication, sender: str, hasAccountLinked: hasAlreadyLinked, canStartAuthorization, mobileAccountLinkingDisabled: socialLayerStorefrontMobileAccountLinkingDisabled };
        tmp35Result4 = tmp35(tmp7(tmp3[40]), obj27);
      }
      items11[2] = tmp35Result4;
      if (tmp31Result2) {
        const obj28 = { style: tmp.message, children: items13 };
        const obj29 = { variant: "body-sm/medium", color: "text-default", style: tmp.text, children: intl4.format(tmp2(tmp3[9]).t["6yrIzU"], obj30) };
        const Text3 = tmp2(tmp3[36]).Text;
        intl4 = tmp2(tmp3[9]).intl;
        obj30 = { sender: str };
        items13 = [startAuthorization(Text3, obj29), ];
        let str4 = "heading-xxl/semibold";
        const Text4 = tmp2(tmp3[36]).Text;
        if (customMessage.length > 110) {
          str4 = "heading-xl/semibold";
        }
        const obj31 = { variant: str4, style: tmp.text, children: customMessage };
        items13[1] = startAuthorization(Text4, obj31);
        tmp31Result2 = tmp31(tmp52, obj28);
      }
      items11[3] = tmp31Result2;
      obj7.children = items11;
      const items14 = [ref(tmp32, obj7), ];
      const obj32 = { style: tmp.footer, children: tmp35Result5 };
      if (giftCode.isClaimed) {
        const obj33 = {
          text: intl10.string(tmp2(tmp3[9]).t.XiOHRX),
          size: "md",
          onPress() {
                  const obj = { giftCode: stateFromStores1 };
                  return closure_6.push(GiftCodeRedeemModal.GiftCodeModalScreens.SUCCESS, obj);
                }
        };
        const Button4 = tmp2(tmp3[48]).Button;
        intl10 = tmp2(tmp3[9]).intl;
        tmp35Result5 = tmp35(Button4, obj33);
      } else if (isResolvingAgreement) {
        const obj34 = { text: intl9.string(tmp2(tmp3[9]).t["3nWhcJ"]), size: "md", loading: true, disabled: true, onPress: canStartAuthorization };
        const Button3 = tmp2(tmp3[48]).Button;
        intl9 = tmp2(tmp3[9]).intl;
        tmp35Result5 = tmp35(Button3, obj34);
      } else if (null != tmp8) {
        const obj35 = {
          text: intl8.string(tmp2(tmp3[9]).t["3nWhcJ"]),
          size: "md",
          onPress() {
                  const obj = GiftCodeUtils;
                  const obj2 = { step: hasAlreadyLinked.ERROR, giftCode, customMessage, emojiName, soundId };
                  obj.trackStep(obj2);
                  const obj3 = { message };
                  closure_6.push(GiftCodeRedeemModal.GiftCodeModalScreens.ERROR, obj3);
                }
        };
        const Button2 = tmp2(tmp3[48]).Button;
        intl8 = tmp2(tmp3[9]).intl;
        tmp35Result5 = tmp35(Button2, obj35);
      } else {
        const tmp2Result24 = tmp2(tmp3[12]);
        if (tmp2Result24.isGameItemSKU(stateFromStores2)) {
          if (!hasAlreadyLinked) {
            if (canStartAuthorization) {
              let obj36;
              if (!socialLayerStorefrontMobileAccountLinkingDisabled) {
                obj36 = {
                  text: intl5.string(tmp2(tmp3[9]).t["VDAhr+"]),
                  size: "md",
                  icon: startAuthorization(ExperimentalGameControllerLinkIcon, obj37),
                  onPress() {
                                  const obj = AnalyticsUtilsDefault;
                                  const obj2 = { location_stack: analyticsLocations, sku_id: giftCode.skuId, application_id: giftCode.applicationId, is_gift: true };
                                  obj.track(unpackModuleId.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, obj2);
                                  const obj3 = { analyticsLocations };
                                  startAuthorization(obj3);
                                }
                };
                intl5 = tmp2(tmp3[9]).intl;
                obj37 = { size: "xs", color: customMessage(tmp3[16]).colors.WHITE, style: tmp.linkAccountIcon };
                ExperimentalGameControllerLinkIcon = tmp2(tmp3[51]).ExperimentalGameControllerLinkIcon;
              }
              tmp35Result5 = tmp35(tmp58, obj36);
            }
            const obj38 = {
              text: intl6.string(tmp2(tmp3[9]).t.cpT0Cq),
              size: "md",
              onPress() {
                          const arr = customMessage(soundId[50]);
                          arr.pop();
                        }
            };
            intl6 = tmp2(tmp3[9]).intl;
            obj36 = obj38;
          }
        }
        const obj39 = {
          disabled: stateFromStores,
          text: string2Result,
          size: "md",
          onPress() {
                  let giftCode2;
                  let obj = actions_GiftCodeActionCreatorsDefault;
                  let obj2 = {
                    code: giftCode.code,
                    onRedeemed() {
                      const obj = giftCode(soundId[11]);
                      const obj2 = { step: hasAlreadyLinked.SUCCESS, giftCode, customMessage, emojiName, soundId };
                      obj.trackStep(obj2);
                      const obj3 = { giftCode: giftCode2 };
                      closure_1_6.push(giftCode(soundId[49]).GiftCodeModalScreens.SUCCESS, obj3);
                    },
                    onError(error) {
                      let obj4;
                      const obj = giftCode(soundId[11]);
                      const obj2 = { step: hasAlreadyLinked.ERROR, giftCode, customMessage, emojiName, soundId };
                      obj.trackStep(obj2);
                      const push = closure_1_6.push;
                      const obj3 = { message: obj4.getGiftCodeRedeemError(error, user) };
                      const ERROR = giftCode(soundId[49]).GiftCodeModalScreens.ERROR;
                      obj4 = giftCode(soundId[11]);
                      push(ERROR, obj3);
                    }
                  };
                  obj.redeemGiftCode(obj2);
                }
        };
        const Button = tmp2(tmp3[48]).Button;
        const intl7 = tmp2(tmp3[9]).intl;
        const string2 = intl7.string;
        const t = tmp2(tmp3[9]).t;
        if (stateFromStores) {
          string2Result = string2(t.rTeOBK);
        } else {
          string2Result = string2(t["3nWhcJ"]);
        }
        tmp35Result5 = tmp35(Button, obj39);
      }
      items14[1] = startAuthorization(closure_5, obj32);
      obj6.children = items14;
      return ref(SafeAreaPaddingView, obj6);
    }
  }
  if (null == first) {
    if (null != getOrFetchApplication) {
      if (null == giftCode.giftStyle) {
        const obj40 = { game: getOrFetchApplication, size: tmp2(tmp3[41]).GameIconSizes.LARGE, skuId: giftCode.skuId };
        const tmp7Result4 = customMessage(tmp3[41]);
        tmp35Result4 = tmp35(tmp7Result4, obj40);
      }
    }
  }
  if (type1 === BUNDLE) {
    let obj43;
    if (null != product) {
      const obj41 = { style: tmp.collectiblesAssetBundle, onLayout: callback, children: tmp35Result6 };
      tmp35Result6 = null != tmp29;
      if (tmp35Result6) {
        const obj42 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, previewAssets: product.previewAssets, disableStaticBackground: true, size: "large", targetSize: tmp29 };
        tmp35Result6 = tmp35(tmp7(tmp3[42]), obj42);
      }
      obj43 = obj41;
    }
    tmp35Result4 = tmp35(tmp52, obj43);
  }
  obj43 = {
    style: giftCode.isSubscription ? tmp.giftCardAsset : tmp.collectiblesAsset,
    children: withResult3.otherwise(() => {
      const obj = { giftStyle: giftCode.giftStyle };
      return gesture(GiftBoxAnimationDefault, obj);
    })
  };
  const str3 = tmp2(tmp3[13]);
  const match1 = str3.match(first);
  const obj44 = { type: tmp2(tmp3[14]).CollectiblesItemType.AVATAR_DECORATION };
  const withResult = match1.with(obj44, (avatarDecoration) => {
    let getAvatarSource;
    const obj = { source: getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_START]), avatarDecoration, size: native.AvatarSizes.GIFT_START, animate: true };
    const Avatar = native.Avatar;
    getAvatarSource = user.getAvatarSource;
    return gesture(Avatar, obj);
  });
  const obj45 = { type: tmp2(tmp3[14]).CollectiblesItemType.PROFILE_EFFECT };
  const withResult1 = withResult.with(obj45, (profileEffect) => {
    const obj = { user, profileEffect };
    return gesture(ProfileEffectUserPreviewDefault, obj);
  });
  const obj46 = { type: tmp2(tmp3[14]).CollectiblesItemType.PROFILE_FRAME };
  const withResult2 = withResult1.with(obj46, (profileFrame) => {
    const obj = { user, profileFrame };
    return gesture(ProfileFrameUserPreviewDefault, obj);
  });
  const obj47 = { type: tmp2(tmp3[14]).CollectiblesItemType.NAMEPLATE };
  withResult3 = withResult2.with(obj47, (nameplate) => {
    let obj2;
    const items = [hasOwnProperty.nameplateContainer, ];
    let prop;
    const tmp2 = hasOwnProperty;
    if (!closure_9) {
      prop = hasOwnProperty.nameplateContainerOffCenter;
    }
    items[1] = prop;
    const obj = { style: items, children: gesture(NameplatePreview.NameplatePreview, obj2) };
    obj2 = { user, nameplate };
    return gesture(tmp2, obj);
  });
};
