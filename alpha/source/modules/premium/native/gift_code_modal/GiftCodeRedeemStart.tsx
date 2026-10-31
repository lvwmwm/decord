// Module ID: 11379
// Function ID: 11380
// Name: GiftCodeRedeemStart
// Dependencies: [32, 19, 17, 11369, 1383, 6896, 1072, 21, 6444, 7404, 1113, 6556, 1987, 5014, 575, 1497, 504, 5068, 11380, 11381, 7330, 11385, 7732, 8742, 7327, 11386, 7326, 7351, 1252, 10670, 7517, 7292, 5624, 5717, 11387, 11388, 11389, 7334, 9493, 1187, 11391, 11505, 11506, 11507, 5634, 11378, 6744, 9440, 11372, 2]
// Exports: default

// Module 11379 (GiftCodeRedeemStart)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import UserUtilsDefault from "UserUtils" /* 5068 */;
import GiftCodeUtils from "GiftCodeUtils" /* 6444 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7404 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7517 */;
import actions_GiftCodeActionCreatorsDefault from "actions/GiftCodeActionCreators" /* 11372 */;
import GiftCodeRedeemModal from "GiftCodeRedeemModal" /* 11378 */;
import ProfileEffectUserPreviewDefault from "ProfileEffectUserPreview" /* 11391 */;
import ProfileFrameUserPreviewDefault from "ProfileFrameUserPreview" /* 11505 */;
import NameplatePreview from "NameplatePreview" /* 11506 */;
import GiftBoxAnimationDefault from "GiftBoxAnimation" /* 11507 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GiftCodeStore from "GiftCodeStore" /* 11369 */;
import UserStore from "UserStore" /* 1383 */;
import SKUStore from "SKUStore" /* 6896 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

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
const SocialLayerStorefrontActionCreators = tmp(10670);
({ View: hasOwnProperty, ScrollView: metroRequire, StyleSheet } = react_native);
({ AnalyticEvents: c10, GiftCodeModalStates: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, body: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28 }, bodyWithMessage: { flex: 0 }, nameplateContainer: { width: "100%" }, nameplateContainerOffCenter: { paddingBottom: 56 }, message: { gap: 8 }, text: { textAlign: "center", paddingHorizontal: 32 }, footer: { paddingHorizontal: 24, paddingBottom: 12 }, confettiBackground: { justifyContent: "center", width: "100%", position: "absolute", top: 0, left: 0, opacity: 0.4, height: 275 }, confettiImage: obj3, emojiContainer: { justifyContent: "center", alignItems: "center" }, imageWrapper: { position: "relative", width: "100%", alignItems: "center", justifyContent: "center" }, collectiblesAsset: { margin: 40 }, collectiblesAssetBundle: { margin: 20, alignSelf: "stretch", minHeight: 250, alignItems: "center", justifyContent: "center" }, giftCardAsset: { marginTop: 20, marginBottom: 40 }, linkAccountIcon: { marginRight: 4 } };
obj2 = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { width: "100%", height: 275 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_14 = createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemStart.tsx");

export default function GiftCodeRedeemStart(giftCode) {
  let ExperimentalGameControllerLinkIcon;
  let P;
  let P2;
  let P3;
  let P4;
  let P5;
  let _undefined;
  let _with14Result;
  let c16;
  let firstAvatarDecoration;
  let firstNameplate;
  let firstProfileEffect;
  let intl2;
  let intl3;
  let intl4;
  let intl6;
  let intl7;
  let items10;
  let items11;
  let obj13;
  let obj17;
  let obj23;
  let stringResult;
  let subscriptionGiftStartHeaderText;
  let tmp27;
  let tmp29Result;
  let tmp32Result3;
  let tmp32Result4;
  let type;
  const f99257 = () => {
    const intl = giftCode(soundId[10]).intl;
    const obj = { sender: str };
    return intl.formatToPlainString(giftCode(soundId[10]).t.JUV1tL, obj);
  };
  const f99258 = () => {
    const intl = giftCode(soundId[10]).intl;
    return intl.string(giftCode(soundId[10]).t.iJ8823);
  };
  const f99259 = () => {
    const intl = giftCode(soundId[10]).intl;
    const obj = { sender: str };
    return intl.formatToPlainString(giftCode(soundId[10]).t.SKduyh, obj);
  };
  const f99260 = () => {
    const intl = giftCode(soundId[10]).intl;
    const obj = { sender: str };
    return intl.formatToPlainString(giftCode(soundId[10]).t["1w42T2"], obj);
  };
  const f99261 = () => {
    const intl = giftCode(soundId[10]).intl;
    const obj = { sender: str };
    return intl.formatToPlainString(giftCode(soundId[10]).t.vFiQlU, obj);
  };
  const f99262 = () => {
    const intl = giftCode(soundId[10]).intl;
    const obj = { sender: str };
    return intl.formatToPlainString(giftCode(soundId[10]).t["UH/EQL"], obj);
  };
  const f99263 = () => {
    const intl = giftCode(soundId[10]).intl;
    return intl.string(giftCode(soundId[10]).t["2ZO6CC"]);
  };
  const f99264 = () => {
    const intl = giftCode(soundId[10]).intl;
    return intl.string(giftCode(soundId[10]).t["2NxdjX"]);
  };
  const f99265 = () => {
    const intl = giftCode(soundId[10]).intl;
    return intl.string(giftCode(soundId[10]).t.v7F232);
  };
  const f126438 = (avatarDecoration) => {
    let getAvatarSource;
    const obj = { source: getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_START]), avatarDecoration, size: native.AvatarSizes.GIFT_START, animate: true };
    const Avatar = native.Avatar;
    getAvatarSource = user.getAvatarSource;
    return authStore2(Avatar, obj);
  };
  const f126439 = (profileEffect) => {
    const obj = { user, profileEffect };
    return authStore2(ProfileEffectUserPreviewDefault, obj);
  };
  const f126440 = (profileFrame) => {
    const obj = { user, profileFrame };
    return authStore2(ProfileFrameUserPreviewDefault, obj);
  };
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
  let tmp = analyticsLocations();
  let closure_5 = tmp;
  let tmp2 = giftCode;
  const tmp3 = soundId;
  let obj = giftCode(soundId[15]);
  let closure_6 = obj.useNavigation();
  let obj2 = giftCode(soundId[16]);
  let items = [message];
  const stateFromStores = obj2.useStateFromStores(items, () => GiftCodeStore.getIsAccepting(giftCode.code));
  let obj3 = giftCode(soundId[16]);
  const items1 = [closure_8];
  let str = obj3.useStateFromStores(items1, () => {
    const obj = UserUtilsDefault;
    return obj.getName(UserStore.getUser(giftCode.userId));
  });
  if (str == null) {
    str = "";
  }
  const tmp6 = customMessage(tmp3[18])(giftCode.code, user);
  message = tmp6;
  const tmp2Result = tmp2(tmp3[19]);
  const getOrFetchSubscriptionPlan = tmp2Result.useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  const tmp2Result11 = tmp2(tmp3[20]);
  const getOrFetchApplication = tmp2Result11.useGetOrFetchApplication(giftCode.applicationId);
  const useFetchCollectiblesProduct = tmp2(tmp3[21]).useFetchCollectiblesProduct;
  tmp2(tmp3[21]);
  let skuId = null;
  const tmp2Result13 = tmp2(tmp3[22]);
  if (tmp2Result13.isCollectiblesGiftCode(giftCode)) {
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
  const BUNDLE = tmp2(tmp3[12]).CollectiblesItemType.BUNDLE;
  let tmp14 = product;
  const useShopProductItems = tmp2(tmp3[23]).useShopProductItems;
  tmp2(tmp3[23]);
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
  const tmp2Result15 = tmp2(tmp3[16]);
  stateFromStores1 = tmp2Result15.useStateFromStores(items2, () => SKUStore.get(giftCode.skuId));
  const tmp18 = customMessage(tmp3[24])(getOrFetchApplication);
  fetched = tmp18.fetched;
  hasAlreadyLinked = tmp18.hasAlreadyLinked;
  canStartAuthorization = tmp18.canStartAuthorization;
  startAuthorization = tmp18.startAuthorization;
  const tmp2Result16 = tmp2(tmp3[25]);
  const socialLayerStorefrontMobileAccountLinkingDisabled = tmp2Result16.useSocialLayerStorefrontMobileAccountLinkingDisabled(giftCode.applicationId);
  const tmp5Result = customMessage(tmp3[26]);
  analyticsLocations = tmp5Result(tmp5(tmp3[27]).GIFT_CODE_MODAL).analyticsLocations;
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
  const SafeAreaPaddingView = tmp2(tmp3[31]).SafeAreaPaddingView;
  const tmp30 = closure_6;
  if (tmp29Result2) {
    bodyWithMessage = tmp.bodyWithMessage;
  }
  const obj7 = { contentContainerStyle: items8, alwaysBounceVertical: false, children: null };
  items8[1] = bodyWithMessage;
  const obj8 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.text, accessibilityRole: "header", children: null };
  const Text = tmp2(tmp3[32]).Text;
  const isSubscription = giftCode.isSubscription;
  if (first != null) {
    type = first.type;
  }
  if (isSubscription) {
    let tmp32Result;
    if (null != getOrFetchSubscriptionPlan) {
      let name;
      const getSubscriptionGiftStartHeaderText = tmp2(tmp3[8]).getSubscriptionGiftStartHeaderText;
      tmp2(tmp3[8]);
      if (stateFromStores1 != null) {
        name = stateFromStores1.name;
      }
      subscriptionGiftStartHeaderText = getSubscriptionGiftStartHeaderText(getOrFetchSubscriptionPlan, str, name);
    }
    obj8.children = subscriptionGiftStartHeaderText;
    const items9 = [canStartAuthorization(Text, obj8), , , ];
    const obj9 = { style: tmp.imageWrapper, children: tmp29Result };
    tmp29Result = null != emojiName;
    if (tmp29Result) {
      const obj10 = { style: tmp.confettiBackground, children: items10 };
      const obj11 = { source: tmp2(tmp3[34]), style: tmp.confettiImage };
      const tmp5Result3 = customMessage(tmp3[33]);
      items10 = [canStartAuthorization(tmp5Result3, obj11), ];
      const obj12 = { style: tmp.emojiContainer, children: canStartAuthorization(customMessage(tmp3[35]), obj13) };
      obj13 = { emojiName, randomizeSizing: true };
      items10[1] = canStartAuthorization(closure_5, obj12);
      tmp29Result = tmp29(tmp47, obj10);
    }
    items9[1] = canStartAuthorization(closure_5, obj9);
    if (null == first) {
      if (null != getOrFetchApplication) {
        const tmp2Result18 = tmp2(tmp3[9]);
        if (tmp2Result18.isGameItemSKU(stateFromStores1)) {
          const obj14 = { sku: stateFromStores1, application: getOrFetchApplication, sender: str, hasAccountLinked: hasAlreadyLinked, canStartAuthorization, mobileAccountLinkingDisabled: socialLayerStorefrontMobileAccountLinkingDisabled };
          tmp32Result = tmp32(tmp5(tmp3[36]), obj14);
        }
        items9[2] = tmp32Result;
        if (tmp29Result2) {
          const obj15 = { style: tmp.message, children: items11 };
          const obj16 = { variant: "eyebrow", color: "text-default", style: tmp.text, children: intl2.format(tmp2(tmp3[10]).t["6yrIzU"], obj17) };
          const Text2 = tmp2(tmp3[32]).Text;
          intl2 = tmp2(tmp3[10]).intl;
          obj17 = { sender: str };
          items11 = [canStartAuthorization(Text2, obj16), ];
          let str4 = "heading-xxl/semibold";
          const Text3 = tmp2(tmp3[32]).Text;
          if (customMessage.length > 110) {
            str4 = "heading-xl/semibold";
          }
          const obj18 = { variant: str4, style: tmp.text, children: customMessage };
          items11[1] = canStartAuthorization(Text3, obj18);
          tmp29Result2 = tmp29(tmp47, obj15);
        }
        items9[3] = tmp29Result2;
        obj7.children = items9;
        const items12 = [startAuthorization(tmp30, obj7), ];
        const obj19 = { style: tmp.footer, children: tmp32Result3 };
        if (giftCode.isClaimed) {
          const obj20 = {
            text: intl7.string(tmp2(tmp3[10]).t.XiOHRX),
            size: "md",
            onPress() {
                      const obj = { giftCode };
                      return closure_6.push(GiftCodeRedeemModal.GiftCodeModalScreens.SUCCESS, obj);
                    }
          };
          const Button3 = tmp2(tmp3[44]).Button;
          intl7 = tmp2(tmp3[10]).intl;
          tmp32Result3 = tmp32(Button3, obj20);
        } else if (null != tmp6) {
          const obj21 = {
            text: intl6.string(tmp2(tmp3[10]).t["3nWhcJ"]),
            size: "md",
            onPress() {
                      const obj = GiftCodeUtils;
                      const obj2 = { step: unpackModuleId.ERROR, giftCode, customMessage, emojiName, soundId };
                      obj.trackStep(obj2);
                      const obj3 = { message };
                      closure_6.push(GiftCodeRedeemModal.GiftCodeModalScreens.ERROR, obj3);
                    }
          };
          const Button2 = tmp2(tmp3[44]).Button;
          intl6 = tmp2(tmp3[10]).intl;
          tmp32Result3 = tmp32(Button2, obj21);
        } else {
          const tmp2Result19 = tmp2(tmp3[9]);
          if (tmp2Result19.isGameItemSKU(stateFromStores1)) {
            if (!hasAlreadyLinked) {
              if (canStartAuthorization) {
                let obj22;
                if (!socialLayerStorefrontMobileAccountLinkingDisabled) {
                  obj22 = {
                    text: intl3.string(tmp2(tmp3[10]).t["VDAhr+"]),
                    size: "md",
                    icon: canStartAuthorization(ExperimentalGameControllerLinkIcon, obj23),
                    onPress() {
                                      const obj = AnalyticsUtilsDefault;
                                      const obj2 = { location_stack: analyticsLocations, sku_id: giftCode.skuId, application_id: giftCode.applicationId, is_gift: true };
                                      obj.track(fetched.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, obj2);
                                      const obj3 = { analyticsLocations };
                                      startAuthorization(obj3);
                                    }
                  };
                  intl3 = tmp2(tmp3[10]).intl;
                  obj23 = { size: "xs", color: customMessage(tmp3[14]).colors.WHITE, style: tmp.linkAccountIcon };
                  ExperimentalGameControllerLinkIcon = tmp2(tmp3[47]).ExperimentalGameControllerLinkIcon;
                }
                tmp32Result3 = tmp32(tmp57, obj22);
              }
              const obj24 = {
                text: intl4.string(tmp2(tmp3[10]).t.cpT0Cq),
                size: "md",
                onPress() {
                              const arr = customMessage(soundId[46]);
                              arr.pop();
                            }
              };
              intl4 = tmp2(tmp3[10]).intl;
              obj22 = obj24;
            }
          }
          const obj25 = {
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
                          closure_1_6.push(giftCode(soundId[45]).GiftCodeModalScreens.SUCCESS, obj3);
                        },
                        onError(error) {
                          let obj4;
                          const obj = giftCode(soundId[8]);
                          const obj2 = { step: hasAlreadyLinked.ERROR, giftCode, customMessage, emojiName, soundId };
                          obj.trackStep(obj2);
                          const push = closure_1_6.push;
                          const obj3 = { message: obj4.getGiftCodeRedeemError(error, user) };
                          const ERROR = giftCode(soundId[45]).GiftCodeModalScreens.ERROR;
                          obj4 = giftCode(soundId[8]);
                          push(ERROR, obj3);
                        }
                      };
                      obj.redeemGiftCode(obj2);
                    }
          };
          const Button = tmp2(tmp3[44]).Button;
          const intl5 = tmp2(tmp3[10]).intl;
          const string = intl5.string;
          const t = tmp2(tmp3[10]).t;
          if (stateFromStores) {
            stringResult = string(t.rTeOBK);
          } else {
            stringResult = string(t["3nWhcJ"]);
          }
          tmp32Result3 = tmp32(Button, obj25);
        }
        items12[1] = canStartAuthorization(closure_5, obj19);
        obj6.children = items12;
        return startAuthorization(SafeAreaPaddingView, obj6);
      }
    }
    if (null == first) {
      if (null != getOrFetchApplication) {
        if (null == giftCode.giftStyle) {
          const obj26 = { game: getOrFetchApplication, size: tmp2(tmp3[37]).GameIconSizes.LARGE, skuId: giftCode.skuId };
          const tmp5Result4 = customMessage(tmp3[37]);
          tmp32Result = tmp32(tmp5Result4, obj26);
        }
      }
    }
    if (type1 === BUNDLE) {
      let obj29;
      if (null != product) {
        const obj27 = { style: tmp.collectiblesAssetBundle, onLayout: callback, children: tmp32Result4 };
        tmp32Result4 = null != tmp27;
        if (tmp32Result4) {
          const obj28 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, previewAssets: product.previewAssets, disableStaticBackground: true, size: "large", targetSize: tmp27 };
          tmp32Result4 = tmp32(tmp5(tmp3[38]), obj28);
        }
        obj29 = obj27;
      }
      tmp32Result = tmp32(tmp47, obj29);
    }
    obj29 = {
      style: giftCode.isSubscription ? tmp.giftCardAsset : tmp.collectiblesAsset,
      children: _with14Result.otherwise(() => {
          const obj = { giftStyle: giftCode.giftStyle };
          return authStore2(GiftBoxAnimationDefault, obj);
        })
    };
    const str3 = tmp2(tmp3[11]);
    const match = str3.match(first);
    const obj30 = { type: tmp2(tmp3[12]).CollectiblesItemType.AVATAR_DECORATION };
    const _with11 = match.with;
    const obj31 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_EFFECT };
    const _with12 = _with11(obj30, f126438).with;
    _with11(obj30, f126438);
    const obj32 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_FRAME };
    const _with13 = _with12(obj31, f126439).with;
    _with12(obj31, f126439);
    const obj33 = { type: tmp2(tmp3[12]).CollectiblesItemType.NAMEPLATE };
    const _with14 = _with13(obj32, f126440).with;
    _with13(obj32, f126440);
    _with14Result = _with14(obj33, (nameplate) => {
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
  }
  const tmp2Result20 = tmp2(tmp3[9]);
  if (tmp2Result20.isGameItemSKU(stateFromStores1)) {
    let intl = tmp2(tmp3[10]).intl;
    subscriptionGiftStartHeaderText = intl.string(tmp2(tmp3[10]).t["Bn1J+a"]);
  } else {
    const obj34 = { type, isBundle: type1 === BUNDLE, sender: str };
    const str2 = tmp2(tmp3[11]);
    const match1 = str2.match(obj34);
    const obj35 = { isBundle: true, sender: P.not(tmp2(tmp3[11]).P.nullish) };
    const _with = match1.with;
    P = tmp2(tmp3[11]).P;
    const obj36 = { isBundle: true, sender: tmp2(tmp3[11]).P.nullish };
    const _with2 = _with(obj35, f99257).with;
    _with(obj35, f99257);
    const obj37 = { type: tmp2(tmp3[12]).CollectiblesItemType.AVATAR_DECORATION, sender: P2.not(tmp2(tmp3[11]).P.nullish) };
    const _with3 = _with2(obj36, f99258).with;
    _with2(obj36, f99258);
    P2 = tmp2(tmp3[11]).P;
    const obj38 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_EFFECT, sender: P3.not(tmp2(tmp3[11]).P.nullish) };
    const _with4 = _with3(obj37, f99259).with;
    _with3(obj37, f99259);
    P3 = tmp2(tmp3[11]).P;
    const obj39 = { type: tmp2(tmp3[12]).CollectiblesItemType.NAMEPLATE, sender: P4.not(tmp2(tmp3[11]).P.nullish) };
    const _with5 = _with4(obj38, f99260).with;
    _with4(obj38, f99260);
    P4 = tmp2(tmp3[11]).P;
    const obj40 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_FRAME, sender: P5.not(tmp2(tmp3[11]).P.nullish) };
    const _with6 = _with5(obj39, f99261).with;
    _with5(obj39, f99261);
    P5 = tmp2(tmp3[11]).P;
    const obj41 = { type: tmp2(tmp3[12]).CollectiblesItemType.AVATAR_DECORATION, sender: tmp2(tmp3[11]).P.nullish };
    const _with7 = _with6(obj40, f99262).with;
    _with6(obj40, f99262);
    const obj42 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_EFFECT, sender: tmp2(tmp3[11]).P.nullish };
    const _with8 = _with7(obj41, f99263).with;
    _with7(obj41, f99263);
    const obj43 = { type: tmp2(tmp3[12]).CollectiblesItemType.NAMEPLATE, sender: tmp2(tmp3[11]).P.nullish };
    const _with9 = _with8(obj42, f99264).with;
    _with8(obj42, f99264);
    const obj44 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_FRAME, sender: tmp2(tmp3[11]).P.nullish };
    const _with10 = _with9(obj43, f99265).with;
    _with9(obj43, f99265);
    const _with10Result = _with10(obj44, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t["1+tgC0"]);
    });
    subscriptionGiftStartHeaderText = _with10Result.otherwise(() => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t["2BWscv"]);
    });
  }
};
