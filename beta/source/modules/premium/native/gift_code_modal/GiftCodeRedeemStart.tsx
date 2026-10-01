// Module ID: 10983
// Function ID: 10984
// Name: GiftCodeRedeemStart
// Dependencies: [32, 19, 17, 10973, 1372, 5822, 1074, 21, 5089, 6647, 1115, 5021, 1974, 4836, 576, 1485, 504, 4678, 10984, 10985, 6589, 10508, 6974, 7616, 6586, 10472, 6583, 6603, 1241, 10263, 6756, 6544, 4832, 10989, 10990, 10991, 6593, 8260, 1177, 10571, 10789, 10790, 10992, 5281, 10982, 5039, 8197, 10976, 2]
// Exports: default

// Module 10983 (GiftCodeRedeemStart)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import GiftCodeUtils from "GiftCodeUtils" /* 5089 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6647 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 6756 */;
import ProfileEffectUserPreviewDefault from "ProfileEffectUserPreview" /* 10571 */;
import ProfileFrameUserPreviewDefault from "ProfileFrameUserPreview" /* 10789 */;
import NameplatePreview from "NameplatePreview" /* 10790 */;
import actions_GiftCodeActionCreatorsDefault from "actions/GiftCodeActionCreators" /* 10976 */;
import GiftCodeRedeemModal from "GiftCodeRedeemModal" /* 10982 */;
import GiftBoxAnimationDefault from "GiftBoxAnimation" /* 10992 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GiftCodeStore from "GiftCodeStore" /* 10973 */;
import UserStore from "UserStore" /* 1372 */;
import SKUStore from "SKUStore" /* 5822 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_12;
let closure_14;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp;
let unpackModuleId;
const SocialLayerStorefrontActionCreators = tmp(10263);
({ ImageBackground: hasOwnProperty, View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ AnalyticEvents: unpackModuleId, GiftCodeModalStates: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let obj = { container: obj2, body: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28 }, bodyWithMessage: { flex: 0 }, nameplateContainer: { width: "100%" }, nameplateContainerOffCenter: { paddingBottom: 56 }, message: { gap: 8 }, text: { textAlign: "center", paddingHorizontal: 32 }, footer: { paddingHorizontal: 24, paddingBottom: 12 }, confettiBackground: { justifyContent: "center", width: "100%", position: "absolute", top: 0, left: 0, opacity: 0.4, height: 275 }, emojiContainer: { justifyContent: "center", alignItems: "center" }, imageWrapper: { position: "relative", width: "100%", alignItems: "center", justifyContent: "center" }, collectiblesAsset: { margin: 40 }, collectiblesAssetBundle: { margin: 20, alignSelf: "stretch", minHeight: 250, alignItems: "center", justifyContent: "center" }, giftCardAsset: { marginTop: 20, marginBottom: 40 }, linkAccountIcon: { marginRight: 4 } };
obj2 = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_15 = createStyles.createStyles(obj);
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
  let obj11;
  let obj12;
  let obj16;
  let obj22;
  let stringResult;
  let subscriptionGiftStartHeaderText;
  let tmp27;
  let tmp32Result;
  let tmp32Result5;
  let tmp32Result6;
  let type;
  const f92443 = () => {
    const intl = giftCode(soundId[10]).intl;
    const obj = { sender: str };
    return intl.formatToPlainString(giftCode(soundId[10]).t.JUV1tL, obj);
  };
  const f92444 = () => {
    const intl = giftCode(soundId[10]).intl;
    return intl.string(giftCode(soundId[10]).t.iJ8823);
  };
  const f92445 = () => {
    const intl = giftCode(soundId[10]).intl;
    const obj = { sender: str };
    return intl.formatToPlainString(giftCode(soundId[10]).t.SKduyh, obj);
  };
  const f92446 = () => {
    const intl = giftCode(soundId[10]).intl;
    const obj = { sender: str };
    return intl.formatToPlainString(giftCode(soundId[10]).t["1w42T2"], obj);
  };
  const f92447 = () => {
    const intl = giftCode(soundId[10]).intl;
    const obj = { sender: str };
    return intl.formatToPlainString(giftCode(soundId[10]).t.vFiQlU, obj);
  };
  const f92448 = () => {
    const intl = giftCode(soundId[10]).intl;
    const obj = { sender: str };
    return intl.formatToPlainString(giftCode(soundId[10]).t["UH/EQL"], obj);
  };
  const f92449 = () => {
    const intl = giftCode(soundId[10]).intl;
    return intl.string(giftCode(soundId[10]).t["2ZO6CC"]);
  };
  const f92450 = () => {
    const intl = giftCode(soundId[10]).intl;
    return intl.string(giftCode(soundId[10]).t["2NxdjX"]);
  };
  const f92451 = () => {
    const intl = giftCode(soundId[10]).intl;
    return intl.string(giftCode(soundId[10]).t.v7F232);
  };
  const f92463 = (avatarDecoration) => {
    let getAvatarSource;
    const obj = { source: getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_START]), avatarDecoration, size: native.AvatarSizes.GIFT_START, animate: true };
    const Avatar = native.Avatar;
    getAvatarSource = user.getAvatarSource;
    return map1(Avatar, obj);
  };
  const f92464 = (profileEffect) => {
    const obj = { user, profileEffect };
    return map1(ProfileEffectUserPreviewDefault, obj);
  };
  const f92465 = (profileFrame) => {
    const obj = { user, profileFrame };
    return map1(ProfileFrameUserPreviewDefault, obj);
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
  let tmp = ref();
  let closure_5 = tmp;
  let tmp2 = giftCode;
  const tmp3 = soundId;
  let obj = giftCode(soundId[15]);
  let closure_6 = obj.useNavigation();
  let obj2 = giftCode(soundId[16]);
  let items = [closure_8];
  const stateFromStores = obj2.useStateFromStores(items, () => GiftCodeStore.getIsAccepting(giftCode.code));
  let obj3 = giftCode(soundId[16]);
  const items1 = [stateFromStores1];
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
  let tmp29Result = null != customMessage;
  ({ firstAvatarDecoration, firstProfileEffect, firstNameplate } = shopProductItems);
  if (tmp29Result) {
    tmp29Result = customMessage.length > 0;
  }
  closure_8 = tmp29Result;
  const items2 = [fetched];
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
  const SafeAreaPaddingView = tmp2(tmp3[31]).SafeAreaPaddingView;
  const tmp30 = message;
  if (tmp29Result) {
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
    let tmp32Result4;
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
    const items9 = [startAuthorization(Text, obj8), , , ];
    const obj9 = { style: tmp.imageWrapper, children: tmp32Result };
    tmp32Result = null != emojiName;
    if (tmp32Result) {
      const obj10 = { source: tmp2(tmp3[33]), style: tmp.confettiBackground, children: startAuthorization(closure_6, obj11) };
      obj11 = { style: tmp.emojiContainer, children: startAuthorization(customMessage(tmp3[34]), obj12) };
      obj12 = { emojiName, randomizeSizing: true };
      tmp32Result = tmp32(closure_5, obj10);
    }
    items9[1] = startAuthorization(closure_6, obj9);
    if (null == first) {
      if (null != getOrFetchApplication) {
        const tmp2Result18 = tmp2(tmp3[9]);
        if (tmp2Result18.isGameItemSKU(stateFromStores1)) {
          const obj13 = { sku: stateFromStores1, application: getOrFetchApplication, sender: str, hasAccountLinked: hasAlreadyLinked, canStartAuthorization, mobileAccountLinkingDisabled: socialLayerStorefrontMobileAccountLinkingDisabled };
          tmp32Result4 = tmp32(tmp5(tmp3[35]), obj13);
        }
        items9[2] = tmp32Result4;
        if (tmp29Result) {
          const obj14 = { style: tmp.message, children: items10 };
          const obj15 = { variant: "eyebrow", color: "text-default", style: tmp.text, children: intl2.format(tmp2(tmp3[10]).t["6yrIzU"], obj16) };
          const Text2 = tmp2(tmp3[32]).Text;
          intl2 = tmp2(tmp3[10]).intl;
          obj16 = { sender: str };
          items10 = [startAuthorization(Text2, obj15), ];
          let str4 = "heading-xxl/semibold";
          const Text3 = tmp2(tmp3[32]).Text;
          if (customMessage.length > 110) {
            str4 = "heading-xl/semibold";
          }
          const obj17 = { variant: str4, style: tmp.text, children: customMessage };
          items10[1] = startAuthorization(Text3, obj17);
          tmp29Result = tmp29(tmp47, obj14);
        }
        items9[3] = tmp29Result;
        obj7.children = items9;
        const items11 = [analyticsLocations(tmp30, obj7), ];
        const obj18 = { style: tmp.footer, children: tmp32Result5 };
        if (giftCode.isClaimed) {
          const obj19 = {
            text: intl7.string(tmp2(tmp3[10]).t.XiOHRX),
            size: "md",
            onPress() {
                      const obj = { giftCode };
                      return closure_6.push(GiftCodeRedeemModal.GiftCodeModalScreens.SUCCESS, obj);
                    }
          };
          const Button3 = tmp2(tmp3[43]).Button;
          intl7 = tmp2(tmp3[10]).intl;
          tmp32Result5 = tmp32(Button3, obj19);
        } else if (null != tmp6) {
          const obj20 = {
            text: intl6.string(tmp2(tmp3[10]).t["3nWhcJ"]),
            size: "md",
            onPress() {
                      const obj = GiftCodeUtils;
                      const obj2 = { step: canStartAuthorization.ERROR, giftCode, customMessage, emojiName, soundId };
                      obj.trackStep(obj2);
                      const obj3 = { message };
                      closure_6.push(GiftCodeRedeemModal.GiftCodeModalScreens.ERROR, obj3);
                    }
          };
          const Button2 = tmp2(tmp3[43]).Button;
          intl6 = tmp2(tmp3[10]).intl;
          tmp32Result5 = tmp32(Button2, obj20);
        } else {
          const tmp2Result19 = tmp2(tmp3[9]);
          if (tmp2Result19.isGameItemSKU(stateFromStores1)) {
            if (!hasAlreadyLinked) {
              if (canStartAuthorization) {
                let obj21;
                if (!socialLayerStorefrontMobileAccountLinkingDisabled) {
                  obj21 = {
                    text: intl3.string(tmp2(tmp3[10]).t["VDAhr+"]),
                    size: "md",
                    icon: startAuthorization(ExperimentalGameControllerLinkIcon, obj22),
                    onPress() {
                                      const obj = AnalyticsUtilsDefault;
                                      const obj2 = { location_stack: analyticsLocations, sku_id: giftCode.skuId, application_id: giftCode.applicationId, is_gift: true };
                                      obj.track(unpackModuleId.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, obj2);
                                      const obj3 = { analyticsLocations };
                                      startAuthorization(obj3);
                                    }
                  };
                  intl3 = tmp2(tmp3[10]).intl;
                  obj22 = { size: "xs", color: customMessage(tmp3[14]).colors.WHITE, style: tmp.linkAccountIcon };
                  ExperimentalGameControllerLinkIcon = tmp2(tmp3[46]).ExperimentalGameControllerLinkIcon;
                }
                tmp32Result5 = tmp32(tmp57, obj21);
              }
              const obj23 = {
                text: intl4.string(tmp2(tmp3[10]).t.cpT0Cq),
                size: "md",
                onPress() {
                              const arr = customMessage(soundId[45]);
                              arr.pop();
                            }
              };
              intl4 = tmp2(tmp3[10]).intl;
              obj21 = obj23;
            }
          }
          const obj24 = {
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
                          closure_1_6.push(giftCode(soundId[44]).GiftCodeModalScreens.SUCCESS, obj3);
                        },
                        onError(error) {
                          let obj4;
                          const obj = giftCode(soundId[8]);
                          const obj2 = { step: canStartAuthorization.ERROR, giftCode, customMessage, emojiName, soundId };
                          obj.trackStep(obj2);
                          const push = closure_1_6.push;
                          const obj3 = { message: obj4.getGiftCodeRedeemError(error, user) };
                          const ERROR = giftCode(soundId[44]).GiftCodeModalScreens.ERROR;
                          obj4 = giftCode(soundId[8]);
                          push(ERROR, obj3);
                        }
                      };
                      obj.redeemGiftCode(obj2);
                    }
          };
          const Button = tmp2(tmp3[43]).Button;
          const intl5 = tmp2(tmp3[10]).intl;
          const string = intl5.string;
          const t = tmp2(tmp3[10]).t;
          if (stateFromStores) {
            stringResult = string(t.rTeOBK);
          } else {
            stringResult = string(t["3nWhcJ"]);
          }
          tmp32Result5 = tmp32(Button, obj24);
        }
        items11[1] = startAuthorization(closure_6, obj18);
        obj6.children = items11;
        return analyticsLocations(SafeAreaPaddingView, obj6);
      }
    }
    if (null == first) {
      if (null != getOrFetchApplication) {
        if (null == giftCode.giftStyle) {
          const obj25 = { game: getOrFetchApplication, size: tmp2(tmp3[36]).GameIconSizes.LARGE, skuId: giftCode.skuId };
          const tmp5Result2 = customMessage(tmp3[36]);
          tmp32Result4 = tmp32(tmp5Result2, obj25);
        }
      }
    }
    if (type1 === BUNDLE) {
      let obj28;
      if (null != product) {
        const obj26 = { style: tmp.collectiblesAssetBundle, onLayout: callback, children: tmp32Result6 };
        tmp32Result6 = null != tmp27;
        if (tmp32Result6) {
          const obj27 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, previewAssets: product.previewAssets, disableStaticBackground: true, size: "large", targetSize: tmp27 };
          tmp32Result6 = tmp32(tmp5(tmp3[37]), obj27);
        }
        obj28 = obj26;
      }
      tmp32Result4 = tmp32(tmp47, obj28);
    }
    obj28 = {
      style: giftCode.isSubscription ? tmp.giftCardAsset : tmp.collectiblesAsset,
      children: _with14Result.otherwise(() => {
          const obj = { giftStyle: giftCode.giftStyle };
          return map1(GiftBoxAnimationDefault, obj);
        })
    };
    const str3 = tmp2(tmp3[11]);
    const match = str3.match(first);
    const obj29 = { type: tmp2(tmp3[12]).CollectiblesItemType.AVATAR_DECORATION };
    const _with11 = match.with;
    const obj30 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_EFFECT };
    const _with12 = _with11(obj29, f92463).with;
    _with11(obj29, f92463);
    const obj31 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_FRAME };
    const _with13 = _with12(obj30, f92464).with;
    _with12(obj30, f92464);
    const obj32 = { type: tmp2(tmp3[12]).CollectiblesItemType.NAMEPLATE };
    const _with14 = _with13(obj31, f92465).with;
    _with13(obj31, f92465);
    _with14Result = _with14(obj32, (nameplate) => {
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
  }
  const tmp2Result20 = tmp2(tmp3[9]);
  if (tmp2Result20.isGameItemSKU(stateFromStores1)) {
    let intl = tmp2(tmp3[10]).intl;
    subscriptionGiftStartHeaderText = intl.string(tmp2(tmp3[10]).t["Bn1J+a"]);
  } else {
    const obj33 = { type, isBundle: type1 === BUNDLE, sender: str };
    const str2 = tmp2(tmp3[11]);
    const match1 = str2.match(obj33);
    const obj34 = { isBundle: true, sender: P.not(tmp2(tmp3[11]).P.nullish) };
    const _with = match1.with;
    P = tmp2(tmp3[11]).P;
    const obj35 = { isBundle: true, sender: tmp2(tmp3[11]).P.nullish };
    const _with2 = _with(obj34, f92443).with;
    _with(obj34, f92443);
    const obj36 = { type: tmp2(tmp3[12]).CollectiblesItemType.AVATAR_DECORATION, sender: P2.not(tmp2(tmp3[11]).P.nullish) };
    const _with3 = _with2(obj35, f92444).with;
    _with2(obj35, f92444);
    P2 = tmp2(tmp3[11]).P;
    const obj37 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_EFFECT, sender: P3.not(tmp2(tmp3[11]).P.nullish) };
    const _with4 = _with3(obj36, f92445).with;
    _with3(obj36, f92445);
    P3 = tmp2(tmp3[11]).P;
    const obj38 = { type: tmp2(tmp3[12]).CollectiblesItemType.NAMEPLATE, sender: P4.not(tmp2(tmp3[11]).P.nullish) };
    const _with5 = _with4(obj37, f92446).with;
    _with4(obj37, f92446);
    P4 = tmp2(tmp3[11]).P;
    const obj39 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_FRAME, sender: P5.not(tmp2(tmp3[11]).P.nullish) };
    const _with6 = _with5(obj38, f92447).with;
    _with5(obj38, f92447);
    P5 = tmp2(tmp3[11]).P;
    const obj40 = { type: tmp2(tmp3[12]).CollectiblesItemType.AVATAR_DECORATION, sender: tmp2(tmp3[11]).P.nullish };
    const _with7 = _with6(obj39, f92448).with;
    _with6(obj39, f92448);
    const obj41 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_EFFECT, sender: tmp2(tmp3[11]).P.nullish };
    const _with8 = _with7(obj40, f92449).with;
    _with7(obj40, f92449);
    const obj42 = { type: tmp2(tmp3[12]).CollectiblesItemType.NAMEPLATE, sender: tmp2(tmp3[11]).P.nullish };
    const _with9 = _with8(obj41, f92450).with;
    _with8(obj41, f92450);
    const obj43 = { type: tmp2(tmp3[12]).CollectiblesItemType.PROFILE_FRAME, sender: tmp2(tmp3[11]).P.nullish };
    const _with10 = _with9(obj42, f92451).with;
    _with9(obj42, f92451);
    const _with10Result = _with10(obj43, () => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t["1+tgC0"]);
    });
    subscriptionGiftStartHeaderText = _with10Result.otherwise(() => {
      const intl = giftCode(soundId[10]).intl;
      return intl.string(giftCode(soundId[10]).t["2BWscv"]);
    });
  }
};
