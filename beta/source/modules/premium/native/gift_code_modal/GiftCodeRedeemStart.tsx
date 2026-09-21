// Module ID: 11571
// Function ID: 11572
// Name: GiftCodeRedeemStart
// Dependencies: [32, 19, 17, 11561, 1376, 5729, 1078, 21, 4996, 7473, 1119, 4943, 1977, 4758, 580, 558, 568, 1488, 504, 4603, 11572, 11573, 7415, 11342, 7801, 8445, 7412, 11306, 7409, 7429, 1245, 11097, 7582, 4754, 11577, 7419, 9076, 1181, 11389, 11473, 11474, 11578, 5188, 11570, 4961, 9013, 11564, 11582, 11583, 7371, 2]

// Module 11571 (GiftCodeRedeemStart)
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import native from "native" /* 1181 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1977 */;
import UserUtilsDefault from "UserUtils" /* 4603 */;
import Text_Text from "Text/Text" /* 4754 */;
import _mod4943 from "module_4943" /* 4943 */;
import GiftCodeUtils from "GiftCodeUtils" /* 4996 */;
import components_Button_Button from "components/Button/Button" /* 5188 */;
import GameIcon from "GameIcon" /* 7419 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7473 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7582 */;
import ExperimentalGameControllerLinkIcon from "ExperimentalGameControllerLinkIcon" /* 9013 */;
import BundleSampleV2Default from "BundleSampleV2" /* 9076 */;
import SocialLayerStorefrontActionCreators from "SocialLayerStorefrontActionCreators" /* 11097 */;
import ProfileEffectUserPreviewDefault from "ProfileEffectUserPreview" /* 11389 */;
import ProfileFrameUserPreviewDefault from "ProfileFrameUserPreview" /* 11473 */;
import NameplatePreview from "NameplatePreview" /* 11474 */;
import actions_GiftCodeActionCreatorsDefault from "actions/GiftCodeActionCreators" /* 11564 */;
import GiftCodeRedeemModal from "GiftCodeRedeemModal" /* 11570 */;
import SlayerStorefrontGiftPreviewDefault from "SlayerStorefrontGiftPreview" /* 11577 */;
import GiftBoxAnimationDefault from "GiftBoxAnimation" /* 11578 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GiftCodeStore from "GiftCodeStore" /* 11561 */;
import UserStore from "UserStore" /* 1376 */;
import SKUStore from "SKUStore" /* 5729 */;

require = fn;
function getGiftCodeHeaderText(isSubscription) {
  ({ subscriptionPlan, sender } = isSubscription);
  ({ sku, itemType, isBundle } = isSubscription);
  if (isSubscription.isSubscription) {
    if (null != subscriptionPlan) {
      let name;
      if (sku != null) {
        name = sku.name;
      }
      let subscriptionGiftStartHeaderText = sender(4996).getSubscriptionGiftStartHeaderText(subscriptionPlan, sender, name);
      const obj24 = sender(4996);
    }
    return subscriptionGiftStartHeaderText;
  }
  if (obj.isGameItemSKU(sku)) {
    let intl = tmp2(1119).intl;
    subscriptionGiftStartHeaderText = intl.string(tmp2(1119).t["Bn1J+a"]);
  } else {
    const obj2 = { type: itemType, isBundle, sender };
    const match = tmp2(4943).match(obj2);
    const obj3 = { isBundle: true, sender: null };
    const P = tmp2(4943).P;
    obj3.sender = P.not(tmp2(4943).P.nullish);
    const str = tmp2(4943);
    const obj4 = { isBundle: true, sender: tmp2(4943).P.nullish };
    const withResult = match.with(obj3, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender });
    });
    const obj5 = { type: tmp2(1977).CollectiblesItemType.AVATAR_DECORATION, sender: null };
    const P2 = tmp2(4943).P;
    obj5.sender = P2.not(tmp2(4943).P.nullish);
    const withResult1 = match.with(obj3, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender });
    }).with(obj4, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t.iJ8823);
    });
    const obj6 = { type: tmp2(1977).CollectiblesItemType.PROFILE_EFFECT, sender: null };
    const P3 = tmp2(4943).P;
    obj6.sender = P3.not(tmp2(4943).P.nullish);
    const withResult2 = match.with(obj3, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender });
    }).with(obj4, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t.iJ8823);
    }).with(obj5, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender });
    });
    const obj7 = { type: tmp2(1977).CollectiblesItemType.NAMEPLATE, sender: null };
    const P4 = tmp2(4943).P;
    obj7.sender = P4.not(tmp2(4943).P.nullish);
    const withResult3 = match.with(obj3, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender });
    }).with(obj4, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t.iJ8823);
    }).with(obj5, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender });
    }).with(obj6, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender });
    });
    const obj8 = { type: tmp2(1977).CollectiblesItemType.PROFILE_FRAME, sender: null };
    const P5 = tmp2(4943).P;
    obj8.sender = P5.not(tmp2(4943).P.nullish);
    const withResult4 = match.with(obj3, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender });
    }).with(obj4, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t.iJ8823);
    }).with(obj5, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender });
    }).with(obj6, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender });
    }).with(obj7, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.vFiQlU, { sender });
    });
    const obj9 = { type: tmp2(1977).CollectiblesItemType.AVATAR_DECORATION, sender: tmp2(4943).P.nullish };
    const withResult5 = match.with(obj3, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender });
    }).with(obj4, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t.iJ8823);
    }).with(obj5, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender });
    }).with(obj6, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender });
    }).with(obj7, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.vFiQlU, { sender });
    }).with(obj8, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["UH/EQL"], { sender });
    });
    const obj10 = { type: tmp2(1977).CollectiblesItemType.PROFILE_EFFECT, sender: tmp2(4943).P.nullish };
    const withResult6 = match.with(obj3, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender });
    }).with(obj4, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t.iJ8823);
    }).with(obj5, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender });
    }).with(obj6, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender });
    }).with(obj7, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.vFiQlU, { sender });
    }).with(obj8, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["UH/EQL"], { sender });
    }).with(obj9, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t["2ZO6CC"]);
    });
    const obj11 = { type: tmp2(1977).CollectiblesItemType.NAMEPLATE, sender: tmp2(4943).P.nullish };
    const withResult7 = match.with(obj3, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender });
    }).with(obj4, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t.iJ8823);
    }).with(obj5, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender });
    }).with(obj6, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender });
    }).with(obj7, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.vFiQlU, { sender });
    }).with(obj8, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["UH/EQL"], { sender });
    }).with(obj9, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t["2ZO6CC"]);
    }).with(obj10, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t["2NxdjX"]);
    });
    const obj12 = { type: tmp2(1977).CollectiblesItemType.PROFILE_FRAME, sender: tmp2(4943).P.nullish };
    const withResult8 = match.with(obj3, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender });
    }).with(obj4, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t.iJ8823);
    }).with(obj5, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender });
    }).with(obj6, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender });
    }).with(obj7, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.vFiQlU, { sender });
    }).with(obj8, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["UH/EQL"], { sender });
    }).with(obj9, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t["2ZO6CC"]);
    }).with(obj10, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t["2NxdjX"]);
    }).with(obj11, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t.v7F232);
    });
    subscriptionGiftStartHeaderText = match.with(obj3, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender });
    }).with(obj4, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t.iJ8823);
    }).with(obj5, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender });
    }).with(obj6, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender });
    }).with(obj7, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.vFiQlU, { sender });
    }).with(obj8, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["UH/EQL"], { sender });
    }).with(obj9, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t["2ZO6CC"]);
    }).with(obj10, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t["2NxdjX"]);
    }).with(obj11, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t.v7F232);
    }).with(obj12, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t["1+tgC0"]);
    }).otherwise(() => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t["2BWscv"]);
    });
    const withResult9 = match.with(obj3, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.JUV1tL, { sender });
    }).with(obj4, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t.iJ8823);
    }).with(obj5, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.SKduyh, { sender });
    }).with(obj6, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["1w42T2"], { sender });
    }).with(obj7, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t.vFiQlU, { sender });
    }).with(obj8, () => {
      const intl = util.intl;
      return intl.formatToPlainString(util.t["UH/EQL"], { sender });
    }).with(obj9, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t["2ZO6CC"]);
    }).with(obj10, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t["2NxdjX"]);
    }).with(obj11, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t.v7F232);
    }).with(obj12, () => {
      const intl = sender(1119).intl;
      return intl.string(sender(1119).t["1+tgC0"]);
    });
  }
}
get_ActivityIndicator = fn(17);
({ ImageBackground: hasOwnProperty, View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const Constants = fn(1078);
({ AnalyticEvents: closure_11, GiftCodeModalStates: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { container: { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, body: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28 }, bodyWithMessage: { flex: 0 }, nameplateContainer: { width: "100%" }, nameplateContainerOffCenter: { paddingBottom: 56 }, message: { gap: 8 }, text: { textAlign: "center", paddingHorizontal: 32 }, footer: { paddingHorizontal: 24, paddingBottom: 12 }, confettiBackground: { justifyContent: "center", width: "100%", position: "absolute", top: 0, left: 0, opacity: 0.4, height: 275 }, emojiContainer: { justifyContent: "center", alignItems: "center" }, imageWrapper: { position: "relative", width: "100%", alignItems: "center", justifyContent: "center" }, collectiblesAsset: { margin: 40 }, collectiblesAssetBundle: { margin: 20, alignSelf: "stretch", minHeight: 250, alignItems: "center", justifyContent: "center" }, giftCardAsset: { marginTop: 20, marginBottom: 40 }, linkAccountIcon: { marginRight: 4 } };
let closure_16 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemStart.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((giftCode) => {
  const cResult = giftCode(soundId[16]).c(118);
  giftCode = giftCode.giftCode;
  const customMessage = giftCode.customMessage;
  soundId = giftCode.soundId;
  const emojiName = giftCode.emojiName;
  const user = giftCode.user;
  let obj = giftCode(soundId[16]);
  closure_5 = firstProfileEffect();
  let tmp4 = firstProfileEffect();
  const navigation = giftCode(soundId[17]).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [str];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== giftCode.code) {
    const fn = function y() {
      return GiftCodeStore.getIsAccepting(giftCode.code);
    };
    cResult[1] = giftCode.code;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  let obj2 = giftCode(soundId[17]);
  const stateFromStores = giftCode(soundId[18]).useStateFromStores(first, tmp8);
  let tmpResult = giftCode(soundId[18]);
  const items1 = [closure_9];
  str = giftCode(soundId[18]).useStateFromStores(items1, () => UserUtilsDefault.getName(UserStore.getUser(giftCode.userId)));
  if (str == null) {
    str = "";
  }
  const tmpResult9 = giftCode(soundId[18]);
  closure_9 = customMessage(soundId[20])(giftCode.code, user);
  const tmp11 = customMessage(soundId[20])(giftCode.code, user);
  const getOrFetchSubscriptionPlan = giftCode(soundId[21]).useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  const tmpResult10 = giftCode(soundId[21]);
  const getOrFetchApplication = giftCode(soundId[22]).useGetOrFetchApplication(giftCode.applicationId);
  const tmpResult11 = giftCode(soundId[22]);
  const tmpResult12 = giftCode(soundId[23]);
  let skuId = null;
  if (tmpResult13.isCollectiblesGiftCode(giftCode)) {
    skuId = giftCode.skuId;
  }
  const product = tmpResult12.useFetchCollectiblesProduct(skuId, true).product;
  let first1;
  if (product != null) {
    first1 = product.items[0];
  }
  let type;
  if (product != null) {
    type = product.type;
  }
  tmpResult13 = giftCode(soundId[24]);
  const isBundle = type === giftCode(soundId[12]).CollectiblesItemType.BUNDLE;
  if (cResult[3] !== product) {
    let tmp19 = product;
    if (product == null) {
      let obj3 = { items: [] };
      tmp19 = obj3;
    }
    cResult[3] = product;
    cResult[4] = tmp19;
    let tmp18 = tmp19;
  } else {
    tmp18 = cResult[4];
  }
  const tmp17 = type === giftCode(soundId[12]).CollectiblesItemType.BUNDLE;
  const shopProductItems = giftCode(soundId[25]).useShopProductItems(tmp18);
  const firstAvatarDecoration = shopProductItems.firstAvatarDecoration;
  firstProfileEffect = shopProductItems.firstProfileEffect;
  const firstNameplate = shopProductItems.firstNameplate;
  let tmp21 = null != customMessage;
  if (tmp21) {
    tmp21 = customMessage.length > 0;
  }
  closure_18 = tmp21;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [getOrFetchSubscriptionPlan];
    cResult[5] = items2;
    let tmp22 = items2;
  } else {
    tmp22 = cResult[5];
  }
  if (cResult[6] !== giftCode.skuId) {
    class U {
      constructor() {
        return closure_10.get(giftCode.skuId);
      }
    }
    cResult[6] = giftCode.skuId;
    cResult[7] = U;
    const tmp24 = U;
  } else {
    class U {
      constructor() {
        return closure_10.get(giftCode.skuId);
      }
    }
  }
  const tmpResult14 = giftCode(soundId[25]);
  const stateFromStores1 = giftCode(soundId[18]).useStateFromStores(tmp22, tmp24);
  let tmp26 = customMessage(soundId[26])(getOrFetchApplication);
  const fetched = tmp26.fetched;
  const hasAlreadyLinked = tmp26.hasAlreadyLinked;
  const canStartAuthorization = tmp26.canStartAuthorization;
  const startAuthorization = tmp26.startAuthorization;
  const tmpResult15 = giftCode(soundId[18]);
  const socialLayerStorefrontMobileAccountLinkingDisabled = giftCode(soundId[27]).useSocialLayerStorefrontMobileAccountLinkingDisabled(giftCode.applicationId);
  const tmpResult16 = giftCode(soundId[27]);
  const analyticsLocations = customMessage(soundId[28])(tmp10(tmp2[29]).GIFT_CODE_MODAL).analyticsLocations;
  if (cResult[8] === analyticsLocations) {
    class U {
      constructor() {
        return closure_10.get(giftCode.skuId);
      }
    }
  }
  cResult[8] = analyticsLocations;
  cResult[9] = canStartAuthorization;
  cResult[10] = giftCode.applicationId;
  cResult[11] = giftCode.skuId;
  cResult[12] = { analyticsLocations, skuId: giftCode.skuId, applicationId: giftCode.applicationId, canStartAuthorization };
}) : ((giftCode) => {
  giftCode = giftCode.giftCode;
  const customMessage = giftCode.customMessage;
  const soundId = giftCode.soundId;
  const emojiName = giftCode.emojiName;
  const user = giftCode.user;
  let message;
  closure_8 = undefined;
  let stateFromStores1;
  let fetched;
  let hasAlreadyLinked;
  let canStartAuthorization;
  let startAuthorization;
  let analyticsLocations;
  let ref;
  c16 = undefined;
  let tmp = c16();
  closure_5 = tmp;
  closure_6 = giftCode(soundId[17]).useNavigation();
  let obj = giftCode(soundId[17]);
  let items = [closure_8];
  const stateFromStores = giftCode(soundId[18]).useStateFromStores(items, () => GiftCodeStore.getIsAccepting(giftCode.code));
  let obj2 = giftCode(soundId[18]);
  const items1 = [stateFromStores1];
  let str = giftCode(soundId[18]).useStateFromStores(items1, () => UserUtilsDefault.getName(UserStore.getUser(giftCode.userId)));
  if (str == null) {
    str = "";
  }
  const tmp6 = customMessage(soundId[20])(giftCode.code, user);
  message = tmp6;
  let obj3 = giftCode(soundId[18]);
  const getOrFetchSubscriptionPlan = giftCode(soundId[21]).useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  const tmp2Result = giftCode(soundId[21]);
  const getOrFetchApplication = giftCode(soundId[22]).useGetOrFetchApplication(giftCode.applicationId);
  const tmp2Result9 = giftCode(soundId[22]);
  const tmp2Result10 = giftCode(soundId[23]);
  let skuId = null;
  if (tmp2Result11.isCollectiblesGiftCode(giftCode)) {
    skuId = giftCode.skuId;
  }
  const product = tmp2Result10.useFetchCollectiblesProduct(skuId, true).product;
  let first;
  if (product != null) {
    first = product.items[0];
  }
  let type;
  if (product != null) {
    type = product.type;
  }
  tmp2Result11 = giftCode(soundId[24]);
  let tmp12 = product;
  if (product == null) {
    const obj4 = { items: [] };
    tmp12 = obj4;
  }
  const shopProductItems = giftCode(soundId[25]).useShopProductItems(tmp12);
  let tmp27Result = null != customMessage;
  ({ firstAvatarDecoration, firstProfileEffect, firstNameplate } = shopProductItems);
  if (tmp27Result) {
    tmp27Result = customMessage.length > 0;
  }
  closure_8 = tmp27Result;
  const tmp2Result12 = giftCode(soundId[25]);
  const items2 = [fetched];
  stateFromStores1 = giftCode(soundId[18]).useStateFromStores(items2, () => SKUStore.get(giftCode.skuId));
  const tmp16 = customMessage(soundId[26])(getOrFetchApplication);
  fetched = tmp16.fetched;
  hasAlreadyLinked = tmp16.hasAlreadyLinked;
  canStartAuthorization = tmp16.canStartAuthorization;
  startAuthorization = tmp16.startAuthorization;
  const tmp2Result13 = giftCode(soundId[18]);
  const socialLayerStorefrontMobileAccountLinkingDisabled = giftCode(soundId[27]).useSocialLayerStorefrontMobileAccountLinkingDisabled(giftCode.applicationId);
  const tmp2Result14 = giftCode(soundId[27]);
  analyticsLocations = customMessage(soundId[28])(tmp5(tmp3[29]).GIFT_CODE_MODAL).analyticsLocations;
  ref = user.useRef({ analyticsLocations, skuId: giftCode.skuId, applicationId: giftCode.applicationId, canStartAuthorization });
  const items3 = [canStartAuthorization];
  const effect = user.useEffect(() => {
    ref.current.canStartAuthorization = canStartAuthorization;
  }, items3);
  const items4 = [fetched, hasAlreadyLinked, stateFromStores1];
  const effect1 = user.useEffect(() => {
    if (fetched) {
      if (obj.isGameItemSKU(stateFromStores1)) {
        ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = ref.current);
        const obj3 = { location_stack: analyticsLocations, sku_id: skuId, application_id: applicationId, is_gift: true, is_account_linked: hasAlreadyLinked, can_start_authorization: canStartAuthorization };
        AnalyticsUtilsDefault.track(constants.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj3);
      }
      obj = SlayerStorefrontUtils;
    }
  }, items4);
  const items5 = [stateFromStores1];
  const effect2 = user.useEffect(() => {
    if (obj.isGameItemSKU(stateFromStores1)) {
      const socialLayerStorefrontConfig = SocialLayerStorefrontActionCreators.fetchSocialLayerStorefrontConfig();
      const tmpResult = SocialLayerStorefrontActionCreators;
    }
  }, items5);
  const items6 = [giftCode, customMessage, emojiName, soundId];
  const effect3 = user.useEffect(() => {
    GiftCodeUtils.trackStep({ step: constants2.CONFIRM, giftCode, customMessage, emojiName, soundId });
  }, items6);
  const items7 = [soundId, giftCode.giftStyle];
  const effect4 = user.useEffect(() => {
    let tmp = null != giftCode.giftStyle;
    if (tmp) {
      tmp = null != soundId;
    }
    if (tmp) {
      const obj2 = { soundId, volume: 1 };
      SoundboardActionCreators.playSoundLocally(null, obj2);
    }
  }, items7);
  const obj5 = { analyticsLocations, skuId: giftCode.skuId, applicationId: giftCode.applicationId, canStartAuthorization };
  const tmp5Result = customMessage(soundId[28]);
  [tmp25, c16] = emojiName(user.useState(), 2);
  const callback = user.useCallback((nativeEvent) => {
    ({ width: giftCode, height: customMessage } = nativeEvent.nativeEvent.layout);
    _undefined((arg0) => {
      let size = arg0;
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
  if (tmp27Result) {
    bodyWithMessage = tmp.bodyWithMessage;
  }
  const obj7 = { contentContainerStyle: items8, alwaysBounceVertical: false, children: null };
  items8[1] = bodyWithMessage;
  const obj8 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.text, accessibilityRole: "header", children: null };
  const obj9 = { isSubscription: giftCode.isSubscription, subscriptionPlan: getOrFetchSubscriptionPlan, sender: str, itemType: null, isBundle: null, sku: null };
  let type1;
  if (first != null) {
    type1 = first.type;
  }
  const tmp33 = type === giftCode(soundId[12]).CollectiblesItemType.BUNDLE;
  obj9.itemType = type1;
  obj9.isBundle = tmp33;
  obj9.sku = stateFromStores1;
  obj8.children = ref(obj9);
  const items9 = [startAuthorization(giftCode(soundId[33]).Text, obj8), , , ];
  const obj10 = { style: tmp.imageWrapper, children: null };
  let tmp30Result = null != emojiName;
  if (tmp30Result) {
    const obj11 = { source: tmp2(tmp3[47]), style: tmp.confettiBackground, children: null };
    const obj12 = { style: tmp.emojiContainer, children: null };
    const obj13 = { emojiName, randomizeSizing: true };
    obj12.children = tmp30(tmp5(tmp3[48]), obj13);
    obj11.children = tmp30(tmp34, obj12);
    tmp30Result = tmp30(closure_5, obj11);
  }
  obj10.children = tmp30Result;
  items9[1] = startAuthorization(closure_6, obj10);
  if (null == first) {
    if (null != getOrFetchApplication) {
      if (tmp2Result15.isGameItemSKU(stateFromStores1)) {
        const obj14 = { sku: stateFromStores1, application: getOrFetchApplication, sender: str, hasAccountLinked: hasAlreadyLinked, canStartAuthorization, mobileAccountLinkingDisabled: socialLayerStorefrontMobileAccountLinkingDisabled };
        let tmp30Result5 = tmp30(tmp5(tmp3[34]), obj14);
      }
      items9[2] = tmp30Result5;
      if (tmp27Result) {
        const obj15 = { style: tmp.message, children: null };
        const obj16 = { variant: "eyebrow", color: "text-default", style: tmp.text, children: null };
        const intl = tmp2(tmp3[10]).intl;
        const obj17 = { sender: str };
        obj16.children = intl.format(tmp2(tmp3[10]).t["6yrIzU"], obj17);
        const items10 = [tmp30(tmp2(tmp3[33]).Text, obj16), ];
        let str3 = "heading-xxl/semibold";
        if (customMessage.length > 110) {
          str3 = "heading-xl/semibold";
        }
        const obj18 = { variant: str3, style: tmp.text, children: customMessage };
        items10[1] = tmp30(tmp2(tmp3[33]).Text, obj18);
        obj15.children = items10;
        tmp27Result = tmp27(tmp34, obj15);
      }
      items9[3] = tmp27Result;
      obj7.children = items9;
      const items11 = [tmp27(tmp28, obj7), ];
      const obj19 = { style: tmp.footer, children: null };
      if (giftCode.isClaimed) {
        const obj20 = { text: null, size: "md", onPress: null };
        const intl6 = tmp2(tmp3[10]).intl;
        obj20.text = intl6.string(tmp2(tmp3[10]).t.XiOHRX);
        obj20.onPress = function onPress() {
          return closure_6.push(GiftCodeRedeemModal.GiftCodeModalScreens.SUCCESS, { giftCode });
        };
        let tmp30Result6 = tmp30(tmp2(tmp3[42]).Button, obj20);
      } else if (null != tmp6) {
        const obj21 = { text: null, size: "md", onPress: null };
        const intl5 = tmp2(tmp3[10]).intl;
        obj21.text = intl5.string(tmp2(tmp3[10]).t["3nWhcJ"]);
        obj21.onPress = function onPress() {
          GiftCodeUtils.trackStep({ step: constants2.ERROR, giftCode, customMessage, emojiName, soundId });
          closure_6.push(GiftCodeRedeemModal.GiftCodeModalScreens.ERROR, { message });
        };
        tmp30Result6 = tmp30(tmp2(tmp3[42]).Button, obj21);
      } else {
        if (tmp2Result16.isGameItemSKU(stateFromStores1)) {
          if (!hasAlreadyLinked) {
            if (canStartAuthorization) {
              if (!socialLayerStorefrontMobileAccountLinkingDisabled) {
                let obj22 = { text: null, size: "md", icon: null, onPress: null };
                const intl2 = tmp2(tmp3[10]).intl;
                obj22.text = intl2.string(tmp2(tmp3[10]).t["VDAhr+"]);
                const obj23 = { size: "xs", color: tmp5(tmp3[14]).colors.WHITE, style: tmp.linkAccountIcon };
                obj22.icon = tmp30(tmp2(tmp3[45]).ExperimentalGameControllerLinkIcon, obj23);
                obj22.onPress = function onPress() {
                  AnalyticsUtilsDefault.track(constants.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, { location_stack: analyticsLocations, sku_id: giftCode.skuId, application_id: giftCode.applicationId, is_gift: true });
                  startAuthorization({ analyticsLocations });
                };
              }
              tmp30Result6 = tmp30(tmp40, obj22);
            }
            const obj24 = { text: null, size: "md", onPress: null };
            const intl3 = tmp2(tmp3[10]).intl;
            obj24.text = intl3.string(tmp2(tmp3[10]).t.cpT0Cq);
            obj24.onPress = function onPress() {
              customMessage(soundId[44]).pop();
            };
            obj22 = obj24;
          }
        }
        const obj25 = { disabled: stateFromStores, text: null, size: "md", onPress: null };
        const intl4 = tmp2(tmp3[10]).intl;
        const string = intl4.string;
        let rTeOBK = tmp2(tmp3[10]).t;
        if (stateFromStores) {
          rTeOBK = rTeOBK.rTeOBK;
          let stringResult = string(rTeOBK);
        } else {
          stringResult = string(rTeOBK["3nWhcJ"]);
        }
        obj25.text = stringResult;
        obj25.onPress = function onPress() {
          actions_GiftCodeActionCreatorsDefault.redeemGiftCode({
            code: giftCode.code,
            onRedeemed() {
              giftCode(soundId[8]).trackStep({ step: canStartAuthorization.SUCCESS, giftCode, customMessage, emojiName, soundId });
              closure_1_6.push(giftCode(soundId[43]).GiftCodeModalScreens.SUCCESS, { giftCode });
            },
            onError(error) {
              giftCode(soundId[8]).trackStep({ step: canStartAuthorization.ERROR, giftCode, customMessage, emojiName, soundId });
              const obj3 = { message: null };
              const obj = giftCode(soundId[8]);
              const obj2 = { step: canStartAuthorization.ERROR, giftCode, customMessage, emojiName, soundId };
              obj3.message = giftCode(soundId[8]).getGiftCodeRedeemError(error, user);
              closure_1_6.push(giftCode(soundId[43]).GiftCodeModalScreens.ERROR, obj3);
            }
          });
        };
        tmp30(tmp2(tmp3[42]).Button, obj25);
        tmp2Result16 = tmp2(tmp3[9]);
      }
      obj19.children = tmp30Result6;
      items11[1] = tmp30(tmp34, obj19);
      obj6.children = items11;
      return tmp27(tmp2(tmp3[49]).SafeAreaPaddingView, obj6);
    }
  }
  if (null == first) {
    if (null != getOrFetchApplication) {
      if (null == giftCode.giftStyle) {
        const obj26 = { game: getOrFetchApplication, size: tmp2(tmp3[35]).GameIconSizes.LARGE, skuId: giftCode.skuId };
        tmp30Result5 = tmp30(tmp5(tmp3[35]), obj26);
        const tmp5Result2 = tmp5(tmp3[35]);
      }
    }
  }
  if (tmp33) {
    if (null != product) {
      const obj27 = { style: tmp.collectiblesAssetBundle, onLayout: callback, children: null };
      let tmp30Result8 = null != tmp25;
      if (tmp30Result8) {
        const obj28 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, previewAssets: product.previewAssets, disableStaticBackground: true, size: "large", targetSize: tmp25 };
        tmp30Result8 = tmp30(tmp5(tmp3[36]), obj28);
      }
      obj27.children = tmp30Result8;
      let obj29 = obj27;
    }
    tmp30Result5 = tmp30(tmp34, obj29);
  }
  obj29 = { style: giftCode.isSubscription ? tmp.giftCardAsset : tmp.collectiblesAsset, children: null };
  const tmp24 = emojiName(user.useState(), 2);
  tmp28 = message;
  const match = giftCode(soundId[11]).match(first);
  const str2 = giftCode(soundId[11]);
  const obj30 = { type: giftCode(soundId[12]).CollectiblesItemType.AVATAR_DECORATION };
  const withResult = match.with({ type: giftCode(soundId[12]).CollectiblesItemType.AVATAR_DECORATION }, (avatarDecoration) => __initData2(native.Avatar, { source: user.getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_START]), avatarDecoration, size: native.AvatarSizes.GIFT_START, animate: true }));
  const obj31 = { type: giftCode(soundId[12]).CollectiblesItemType.PROFILE_EFFECT };
  const withResult1 = withResult.with({ type: giftCode(soundId[12]).CollectiblesItemType.PROFILE_EFFECT }, (profileEffect) => __initData2(ProfileEffectUserPreviewDefault, { user, profileEffect }));
  const obj32 = { type: giftCode(soundId[12]).CollectiblesItemType.PROFILE_FRAME };
  const withResult2 = withResult1.with({ type: giftCode(soundId[12]).CollectiblesItemType.PROFILE_FRAME }, (profileFrame) => __initData2(ProfileFrameUserPreviewDefault, { user, profileFrame }));
  const obj33 = { type: giftCode(soundId[12]).CollectiblesItemType.NAMEPLATE };
  obj29.children = withResult2.with({ type: giftCode(soundId[12]).CollectiblesItemType.NAMEPLATE }, (nameplate) => {
    const items = [closure_5.nameplateContainer, ];
    let prop;
    if (!closure_8) {
      prop = closure_5.nameplateContainerOffCenter;
    }
    const obj = { style: items, children: __initData2(NameplatePreview.NameplatePreview, { user, nameplate }) };
    items[1] = prop;
    return __initData2(timestampProducer, obj);
  }).otherwise(() => __initData2(GiftBoxAnimationDefault, { giftStyle: giftCode.giftStyle }));
});
