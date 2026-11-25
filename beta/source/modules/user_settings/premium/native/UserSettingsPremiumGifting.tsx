// Module ID: 14167
// Function ID: 14168
// Name: UserSettingsPremiumGifting
// Dependencies: [32, 19, 17, 8137, 2178, 8120, 1071, 1388, 21, 4913, 575, 7348, 9102, 1500, 1628, 504, 14168, 12, 6347, 9105, 9946, 8070, 14170, 14171, 9376, 8123, 9107, 8142, 7411, 7415, 10510, 5600, 14172, 5504, 1112, 14173, 14179, 2888, 14183, 14195, 14198, 14200, 9242, 7417, 2920, 14201, 7020, 2]
// Exports: default

// Module 14167 (UserSettingsPremiumGifting)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 575 */;
import GiftCodeUtils from "GiftCodeUtils" /* 6347 */;
import TableRowGroup from "TableRowGroup" /* 7348 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7411 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7415 */;
import EntitlementActionCreators from "EntitlementActionCreators" /* 8123 */;
import BillingActionCreatorsDefault from "BillingActionCreators" /* 9107 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 10510 */;
import GiftedSubscriptionUtils from "GiftedSubscriptionUtils" /* 14168 */;
import OutboundPromotionCardDefault from "OutboundPromotionCard" /* 14173 */;
import EntitlementGiftGroupCardDefault from "EntitlementGiftGroupCard" /* 14183 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8137 */;
import SubscriptionStore from "SubscriptionStore" /* 2178 */;
import EntitlementStore from "EntitlementStore" /* 8120 */;
import Constants from "Constants" /* 1071 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, entitlementIds, subscriptions;

let StyleSheet;
let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
function GiftingSectionTitle(title) {
  return gesture(TableRowGroup.TableRowGroupTitle, { title: title.title });
}
({ View: hasOwnProperty, ScrollView: metroRequire, StyleSheet } = react_native);
({ UserSettingsSections: c10, AnalyticsPages: unpackModuleId } = Constants);
({ PremiumTypes: closure_12, SubscriptionPlans: map1 } = PremiumConstants);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { scrollView: obj2, giftingSettingsContainer: { flex: 1 }, inventorySectionWrapper: { flex: 1 }, giftPurchaseSectionWrapper: { flex: 1, paddingTop: 36, paddingBottom: 16 }, emptyGiftLinks: obj3, emptyImage: { marginRight: 18 }, emptyGiftHeader: { lineHeight: 20 }, emptyGiftDescription: { flex: 1 }, emptyGiftInformation: { marginTop: 8 }, titleWrapper: { paddingTop: 28, paddingBottom: 8 }, cardText: { lineHeight: 18 }, tierCard: { marginTop: 16 }, giftPurchaseButton: { marginTop: 8, height: 40 }, buttonWrapper: { marginTop: 16 }, loading: { marginTop: 32 }, warningMargins: { marginHorizontal: 16 } };
obj2 = { paddingHorizontal: nativeDefault.modules.mobile.GIFTING_SETTINGS_PADDING_HORIZONTAL };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, flexDirection: "row", alignItems: "center", paddingVertical: 16, borderWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_17 = createStyles(obj);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremiumGifting.tsx");

export default function UserSettingsPremiumGifting(ref) {
  let _undefined;
  let activeOutboundPromotions;
  let analyticsLocation;
  let badgeById;
  let c5;
  let c7;
  let claimedEndedOutboundPromotions;
  let closure_0;
  let giftable;
  let intl;
  let intl2;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items20;
  let items7;
  let items9;
  let obj11;
  let obj16;
  let obj26;
  let obj29;
  let obj32;
  let obj38;
  let obj46;
  let promotionsLoaded;
  let recipientUserId;
  let tmp16;
  let tmp20Result12;
  let tmp36;
  ({ recipientUserId, analyticsLocation } = ref);
  if (analyticsLocation === undefined) {
    let obj = { page: constants2.GIFTING_SETTINGS };
    analyticsLocation = obj;
  }
  _require = undefined;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  let memo2;
  c5 = undefined;
  c7 = undefined;
  const tmp2 = closure_17();
  stateFromStoresArray(stateFromStoresArray1[12])();
  let obj2 = require("useNavigation");
  _require = obj2.useNavigation();
  const bottom = stateFromStoresArray(stateFromStoresArray1[14])().bottom;
  let obj3 = require("get initialized");
  const items = [EntitlementStore];
  stateFromStoresArray = obj3.useStateFromStoresArray(items, () => giftable.getGiftable());
  let obj4 = require("get initialized");
  const items1 = [SubscriptionStore];
  stateFromStoresArray1 = obj4.useStateFromStoresArray(items1, () => {
    const getGiftedSubscriptions = closure_0(stateFromStoresArray1[16]).getGiftedSubscriptions;
    const _Object = Object;
    closure_0(stateFromStoresArray1[16]);
    subscriptions = subscriptions.getSubscriptions();
    if (subscriptions == null) {
      subscriptions = {};
    }
    return getGiftedSubscriptions(values(subscriptions));
  });
  const items2 = [stateFromStoresArray1];
  const memo = memo2.useMemo(() => {
    const obj = GiftedSubscriptionUtils;
    return obj.getPendingGiftSubscriptionGrants(stateFromStoresArray1);
  }, items2);
  const items3 = [stateFromStoresArray1];
  const memo1 = memo2.useMemo(() => {
    let obj = _modDef12;
    return obj.sortBy(stateFromStoresArray1, (subscription) => {
      let num = 1;
      const obj = closure_1_0(stateFromStoresArray1[16]);
      if ("pending" === obj.getGiftedSubscriptionRowState(subscription).kind) {
        num = 0;
      }
      return num;
    });
  }, items3);
  const items4 = [stateFromStoresArray, memo];
  memo2 = memo2.useMemo(() => {
    let obj = _modDef12;
    return obj.groupBy(stateFromStoresArray.filter((id) => {
      entitlementIds = entitlementIds.entitlementIds;
      return !entitlementIds.has(id.id);
    }), (skuId) => {
      const obj = closure_1_0(stateFromStoresArray1[18]);
      return obj.makeComboId(skuId.skuId, skuId.subscriptionPlanId, skuId.giftStyle);
    });
  }, items4);
  const obj5 = require("BlockedPaymentsCountryExperiment");
  const isPaymentsBlocked = obj5.useIsPaymentsBlocked();
  const obj6 = require("PromotionsHooks");
  const outboundPromotions = obj6.useOutboundPromotions();
  ({ activeOutboundPromotions, claimedEndedOutboundPromotions, claimedOutboundPromotionCodeMap: c5, promotionsLoaded } = outboundPromotions);
  const items5 = [c7];
  const obj7 = require("get initialized");
  const stateFromStores = obj7.useStateFromStores(items5, () => badgeById.getBadgeById(closure_0(stateFromStoresArray1[21]).BadgeId.GIFTING));
  stateFromStoresArray(stateFromStoresArray1[22])(stateFromStoresArray1);
  const tmp14 = stateFromStoresArray(stateFromStoresArray1[23])();
  const succeeded = tmp14.succeeded;
  const loaded = tmp14.loaded;
  [tmp16, c7] = memo(memo2.useState(false), 2);
  memo(memo2.useState(false), 2);
  const obj8 = require("useSubscriptionPlansLoaded");
  const subscriptionPlansLoaded = obj8.useSubscriptionPlansLoaded();
  const effect = memo2.useEffect(() => {
    const obj = EntitlementActionCreators;
    const giftableEntitlements = obj.fetchGiftableEntitlements();
    giftableEntitlements.then(() => _undefined2(true));
    const obj2 = BillingActionCreatorsDefault;
    obj2.init({ shouldFetchSubscriptions: false });
  }, []);
  const effect1 = memo2.useEffect(() => {
    const obj = closure_0(stateFromStoresArray1[27]);
    const badge = obj.fetchBadge(closure_0(stateFromStoresArray1[21]).BadgeId.GIFTING);
  }, []);
  const obj9 = { paddingBottom: bottom + stateFromStoresArray(stateFromStoresArray1[10]).space.PX_16 };
  if (isPaymentsBlocked) {
    const obj10 = { style: tmp2.giftingSettingsContainer, children: closure_14(succeeded, obj11) };
    obj11 = { ref: ref.ref, contentInset: { top: 40 }, contentContainerStyle: obj9, style: tmp2.scrollView, children: closure_14(stateFromStoresArray(stateFromStoresArray1[42]), {}) };
    tmp20Result12 = closure_14(c5, obj10);
  } else {
    const obj12 = { style: tmp2.giftingSettingsContainer, children: null };
    const items6 = [closure_14(stateFromStoresArray(stateFromStoresArray1[43]), {}), ];
    const obj13 = { ref: ref.ref, style: tmp2.scrollView, contentContainerStyle: obj9, children: null };
    let tmp20Result = null != stateFromStores;
    const tmp23 = succeeded;
    if (tmp20Result) {
      const obj14 = { children: items7 };
      const obj15 = { style: tmp2.titleWrapper, children: closure_14(GiftingSectionTitle, obj16) };
      obj16 = { title: intl.string(stateFromStoresArray(stateFromStoresArray1[44]).sFokBp) };
      intl = tmp6(tmp4[34]).intl;
      items7 = [closure_14(c5, obj15), ];
      const obj17 = { analyticsLocation };
      items7[1] = closure_14(stateFromStoresArray(stateFromStoresArray1[45]), obj17);
      tmp20Result = tmp20(closure_16, obj14);
    }
    const items8 = [tmp20Result, , ];
    if (tmp16) {
      if (loaded) {
        if (promotionsLoaded) {
          let tmp22Result;
          if (subscriptionPlansLoaded) {
            let _Object = Object;
            const keys = Object.keys(memo2);
            let num = 0;
            if (0 === keys.length) {
              if (0 === stateFromStoresArray1.length) {
                if (0 === activeOutboundPromotions.length) {
                  let tmp20Result7;
                  if (0 === claimedEndedOutboundPromotions.length) {
                    const obj18 = { style: tmp2.emptyGiftLinks, children: items9 };
                    const obj19 = { style: tmp2.emptyImage, source: stateFromStoresArray(stateFromStoresArray1[32]) };
                    const tmp3Result = stateFromStoresArray(stateFromStoresArray1[31]);
                    items9 = [closure_14(tmp3Result, obj19), ];
                    const obj20 = { style: tmp2.emptyGiftDescription, accessible: true, children: items10 };
                    const obj21 = { style: tmp2.emptyGiftHeader, variant: "body-md/semibold", color: "mobile-text-heading-primary", children: intl4.string(require("intl").t.B1qgZn) };
                    const Text = tmp6(tmp4[33]).Text;
                    intl4 = tmp6(tmp4[34]).intl;
                    items10 = [closure_14(Text, obj21), ];
                    const obj22 = { style: tmp2.emptyGiftInformation, variant: "body-sm/medium", color: "text-default", children: intl5.string(require("intl").t["OV/u0n"]) };
                    const Text2 = tmp6(tmp4[33]).Text;
                    intl5 = tmp6(tmp4[34]).intl;
                    items10[1] = closure_14(Text2, obj22);
                    items9[1] = closure_15(c5, obj20);
                    tmp20Result7 = tmp20(tmp21, obj18);
                  }
                  tmp22Result = tmp20Result7;
                }
              }
            }
            let tmp20Result8 = null;
            const obj23 = { style: tmp2.inventorySectionWrapper, children: items12 };
            if (activeOutboundPromotions.length + claimedEndedOutboundPromotions.length > 0) {
              const obj24 = { children: items11 };
              const obj25 = { style: tmp2.titleWrapper, children: closure_14(GiftingSectionTitle, obj26) };
              obj26 = { title: intl9.string(require("intl").t.wFsj3B) };
              intl9 = tmp6(tmp4[34]).intl;
              items11 = [
                closure_14(c5, obj25),
                claimedEndedOutboundPromotions.map((code) => {
                              const outboundPromotion = code.promotion;
                              return closure_1_14(stateFromStoresArray(stateFromStoresArray1[35]), { outboundPromotion, code: code.code }, outboundPromotion.id);
                            }),
                activeOutboundPromotions.map((outboundPromotion) => {
                              const obj = { outboundPromotion, code: c5[outboundPromotion.id] };
                              return gesture(OutboundPromotionCardDefault, obj, outboundPromotion.id);
                            })
              ];
              tmp20Result8 = tmp20(closure_16, obj24);
            }
            items12 = [tmp20Result8, , ];
            let tmp20Result9 = null;
            if (memo1.length > 0) {
              const obj27 = { children: items13 };
              const obj28 = { style: tmp2.titleWrapper, children: closure_14(GiftingSectionTitle, obj29) };
              obj29 = { title: intl2.string(require("intl").t.trSpHX) };
              intl2 = tmp6(tmp4[34]).intl;
              items13 = [
                closure_14(c5, obj28),
                memo1.map((subscription) => {
                              const obj = { subscription };
                              return closure_1_14(stateFromStoresArray(stateFromStoresArray1[36]), obj, subscription.id);
                            })
              ];
              tmp20Result9 = tmp20(closure_16, obj27);
            }
            items12[1] = tmp20Result9;
            let tmp20Result10 = null;
            if (keys.length > 0) {
              let LO0a0F;
              const obj30 = { style: tmp2.titleWrapper, children: closure_14(tmp36, obj32) };
              const intl3 = tmp6(tmp4[34]).intl;
              const string = intl3.string;
              const tmp35 = closure_16;
              tmp36 = GiftingSectionTitle;
              if (stateFromStoresArray1.length > 0) {
                LO0a0F = tmp3(tmp4[37]).LO0a0F;
              } else {
                LO0a0F = tmp6(tmp4[34]).t["9KeUbY"];
              }
              const obj31 = { children: items14 };
              obj32 = { title: string(LO0a0F) };
              items14 = [
                closure_14(c5, obj30),
                keys.map((item) => {
                              let giftStyle;
                              let skuId;
                              let subscriptionPlanId;
                              const obj = GiftCodeUtils;
                              ({ skuId, subscriptionPlanId, giftStyle } = obj.parseComboId(item));
                              const obj2 = { skuId, subscriptionPlanId, entitlements: memo2[item], giftStyle, pendingGiftSubscriptionCodes: memo.giftCodes, canRevokeGiftCodes: succeeded };
                              obj.parseComboId(item);
                              return gesture(EntitlementGiftGroupCardDefault, obj2, item);
                            })
              ];
              tmp20Result10 = tmp20(tmp35, obj31);
            }
            items12[2] = tmp20Result10;
            tmp20Result7 = tmp20(tmp21, obj23);
          }
          const obj33 = { children: tmp22Result };
          items8[1] = closure_14(c5, obj33);
          let tmp20Result11 = null;
          if (subscriptionPlansLoaded) {
            const obj34 = { style: tmp2.giftPurchaseSectionWrapper, children: items15 };
            function handleLearnMorePremiumClick() {
              const obj = UserSettingsModalActionCreatorsDefault;
              obj.setSection(constants.PREMIUM_GIFTING);
              const obj2 = UserSettingsUtils;
              const obj3 = { destinationPane: constants.PREMIUM_GIFTING };
              const result = obj2.trackUserSettingsPaneViewed(obj3);
              closure_0.push(constants.PREMIUM);
            }
            function handleLearnMoreNitroBasicClick() {
              const obj = UserSettingsModalActionCreatorsDefault;
              obj.setSection(constants.PREMIUM_GIFTING);
              const obj2 = UserSettingsUtils;
              const obj3 = { destinationPane: constants.PREMIUM_GIFTING };
              const result = obj2.trackUserSettingsPaneViewed(obj3);
              const obj4 = { premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING };
              closure_0.push(constants.PREMIUM, obj4);
            }
            const obj35 = { title: intl6.string(require("intl").t["55Ccy0"]) };
            intl6 = tmp6(tmp4[34]).intl;
            items15 = [closure_14(GiftingSectionTitle, obj35), , , ];
            const obj36 = { premiumType: closure_12.TIER_2, style: tmp2.tierCard, children: items16 };
            const obj37 = { style: tmp2.cardText, variant: "body-sm/medium", color: "text-default", children: intl7.format(require("intl").t.thORji, obj38) };
            const tmp3Result3 = stateFromStoresArray(stateFromStoresArray1[39]);
            const Text3 = tmp6(tmp4[33]).Text;
            intl7 = tmp6(tmp4[34]).intl;
            obj38 = { onClick: handleLearnMorePremiumClick };
            items16 = [closure_14(Text3, obj37), ];
            const obj39 = { style: tmp2.buttonWrapper, children: items17 };
            const obj40 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "active", planId: closure_13.PREMIUM_YEAR_TIER_2, analyticsLocation };
            items17 = [closure_14(stateFromStoresArray(stateFromStoresArray1[40]), obj40), ];
            const obj41 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "secondary", planId: closure_13.PREMIUM_MONTH_TIER_2, analyticsLocation };
            items17[1] = closure_14(stateFromStoresArray(stateFromStoresArray1[40]), obj41);
            items16[1] = closure_15(c5, obj39);
            items15[1] = closure_15(tmp3Result3, obj36);
            const obj42 = { style: tmp2.warningMargins };
            items15[2] = closure_14(stateFromStoresArray(stateFromStoresArray1[41]), obj42);
            const obj43 = { children: items20 };
            const obj44 = { premiumType: closure_12.TIER_0, style: tmp2.tierCard, children: items18 };
            const obj45 = { style: tmp2.cardText, variant: "body-sm/medium", color: "text-default", children: intl8.format(require("intl").t.NmpnsP, obj46) };
            const tmp3Result4 = stateFromStoresArray(stateFromStoresArray1[39]);
            const Text4 = tmp6(tmp4[33]).Text;
            intl8 = tmp6(tmp4[34]).intl;
            obj46 = { onClick: handleLearnMoreNitroBasicClick };
            items18 = [closure_14(Text4, obj45), ];
            const obj47 = { style: tmp2.buttonWrapper, children: items19 };
            const obj48 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "active", planId: closure_13.PREMIUM_YEAR_TIER_0, analyticsLocation };
            items19 = [closure_14(stateFromStoresArray(stateFromStoresArray1[40]), obj48), ];
            const obj49 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "secondary", planId: closure_13.PREMIUM_MONTH_TIER_0, analyticsLocation };
            items19[1] = closure_14(stateFromStoresArray(stateFromStoresArray1[40]), obj49);
            items18[1] = closure_15(c5, obj47);
            items20 = [closure_15(tmp3Result4, obj44), ];
            const obj50 = { style: tmp2.warningMargins };
            items20[1] = closure_14(stateFromStoresArray(stateFromStoresArray1[41]), obj50);
            items15[3] = closure_15(closure_16, obj43);
            tmp20Result11 = tmp20(tmp21, obj34);
          }
          items8[2] = tmp20Result11;
          obj13.children = items8;
          items6[1] = closure_15(tmp23, obj13);
          obj12.children = items6;
          tmp20Result12 = tmp20(tmp21, obj12);
        }
      }
    }
    const obj51 = { style: tmp2.loading };
    tmp22Result = tmp22(tmp6(tmp4[46]).ActivityIndicator, obj51);
  }
  return tmp20Result12;
};
