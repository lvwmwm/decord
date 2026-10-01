// Module ID: 13095
// Function ID: 13096
// Name: UserSettingsPremiumGifting
// Dependencies: [32, 19, 17, 7637, 6814, 1074, 1374, 21, 4836, 576, 5999, 6834, 1485, 1613, 504, 12, 5089, 6837, 13096, 10204, 7629, 12939, 573, 6820, 6839, 7642, 6411, 6416, 8663, 13097, 4832, 1115, 13098, 13104, 13106, 13109, 13111, 10979, 6419, 2583, 13112, 5889, 2]

// Module 13095 (UserSettingsPremiumGifting)
import _modDef12 from "module_12" /* 12 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import GiftCodeUtils from "GiftCodeUtils" /* 5089 */;
import TableRowGroup from "TableRowGroup" /* 5999 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6411 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6416 */;
import BadgeId from "BadgeId" /* 7629 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7642 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8663 */;
import OutboundPromotionCardDefault from "OutboundPromotionCard" /* 13098 */;
import EntitlementGiftGroupCardDefault from "EntitlementGiftGroupCard" /* 13104 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7637 */;
import EntitlementStore from "EntitlementStore" /* 6814 */;
import Constants from "Constants" /* 1074 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let StyleSheet;
let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
function GiftingSectionTitle(title) {
  return authStore2(TableRowGroup.TableRowGroupTitle, { title: title.title });
}
let _slicedToArray = _slicedToArray_mod;
({ Image: hasOwnProperty, View: metroRequire, ScrollView: metroImportDefault, StyleSheet } = react_native);
({ UserSettingsSections: c10, AnalyticsPages: unpackModuleId } = Constants);
({ PremiumTypes: closure_12, SubscriptionPlans: map1 } = PremiumConstants);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { scrollView: obj2, giftingSettingsContainer: { flex: 1 }, inventorySectionWrapper: { flex: 1 }, giftPurchaseSectionWrapper: { flex: 1, paddingTop: 36, paddingBottom: 16 }, emptyGiftLinks: obj3, emptyImage: { marginRight: 18 }, emptyGiftHeader: { lineHeight: 20 }, emptyGiftDescription: { flex: 1 }, emptyGiftInformation: { marginTop: 8 }, titleWrapper: { paddingTop: 28, paddingBottom: 8 }, cardText: { lineHeight: 18 }, tierCard: { marginTop: 16 }, giftPurchaseButton: { marginTop: 8, height: 40 }, buttonWrapper: { marginTop: 16 }, loading: { marginTop: 32 }, warningMargins: { marginHorizontal: 16 } };
obj2 = { paddingHorizontal: nativeDefault.modules.mobile.GIFTING_SETTINGS_PADDING_HORIZONTAL };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, flexDirection: "row", alignItems: "center", paddingVertical: 16, borderWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_17 = createStyles(obj);
const forwardRefResult = react.forwardRef(function UserSettingsPremiumGifting(arg0, ref) {
  let _undefined;
  let activeOutboundPromotions;
  let analyticsLocation;
  let badgeById;
  let c3;
  let c5;
  let claimedEndedOutboundPromotions;
  let closure_0;
  let giftable;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items5;
  let items7;
  let items8;
  let items9;
  let obj10;
  let obj15;
  let obj25;
  let obj28;
  let obj34;
  let obj42;
  let promotionsLoaded;
  let recipientUserId;
  let tmp13;
  let tmp17Result8;
  ({ recipientUserId, analyticsLocation } = arg0);
  if (analyticsLocation === undefined) {
    let obj = { page: constants2.GIFTING_SETTINGS };
    let tmp = constants2;
    analyticsLocation = obj;
  }
  _require = undefined;
  let stateFromStoresArray;
  let memo;
  _slicedToArray = undefined;
  let enabled;
  c5 = undefined;
  const tmp2 = closure_17();
  stateFromStoresArray(memo[11])();
  let obj2 = require("useNavigation");
  _require = obj2.useNavigation();
  const bottom = stateFromStoresArray(memo[13])().bottom;
  let obj3 = require("get initialized");
  const items = [EntitlementStore];
  stateFromStoresArray = obj3.useStateFromStoresArray(items, () => giftable.getGiftable());
  const items1 = [stateFromStoresArray];
  memo = enabled.useMemo(() => {
    let obj = _modDef12;
    return obj.groupBy(stateFromStoresArray, (skuId) => {
      const obj = closure_1_0(memo[16]);
      return obj.makeComboId(skuId.skuId, skuId.subscriptionPlanId, skuId.giftStyle);
    });
  }, items1);
  let obj4 = require("BlockedPaymentsCountryExperiment");
  const isPaymentsBlocked = obj4.useIsPaymentsBlocked();
  const obj5 = require("PromotionsHooks");
  const outboundPromotions = obj5.useOutboundPromotions();
  ({ activeOutboundPromotions, claimedEndedOutboundPromotions, claimedOutboundPromotionCodeMap: c3, promotionsLoaded } = outboundPromotions);
  const GiftingBadgeExperiment = require("GiftingBadgeExperiment").GiftingBadgeExperiment;
  enabled = GiftingBadgeExperiment.useConfig({ location: "gift_inventory" }).enabled;
  const items2 = [BadgeDirectoryStore];
  const obj6 = require("get initialized");
  const stateFromStores = obj6.useStateFromStores(items2, () => badgeById.getBadgeById(closure_0(memo[20]).BadgeId.GIFTING));
  [tmp13, c5] = enabled.useState(false);
  _slicedToArray(enabled.useState(false), 2);
  const obj7 = require("useSubscriptionPlansLoaded");
  const subscriptionPlansLoaded = obj7.useSubscriptionPlansLoaded();
  const effect = enabled.useEffect(() => {
    let obj = DispatcherDefault;
    obj.wait(() => {
      const obj = closure_0(memo[23]);
      const giftableEntitlements = obj.fetchGiftableEntitlements();
      giftableEntitlements.then(() => closure_1_5(true));
      const obj2 = stateFromStoresArray(memo[24]);
      obj2.init();
    });
  }, []);
  const items3 = [enabled];
  const effect1 = enabled.useEffect(() => {
    const tmp = enabled;
    if (tmp) {
      const obj = BadgeDirectoryActionCreators;
      const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
    }
  }, items3);
  const obj8 = { paddingBottom: bottom + stateFromStoresArray(memo[9]).space.PX_16 };
  if (isPaymentsBlocked) {
    const obj9 = { style: tmp2.giftingSettingsContainer, children: closure_14(closure_7, obj10) };
    obj10 = { ref, contentInset: { top: 40 }, contentContainerStyle: obj8, style: tmp2.scrollView, children: closure_14(stateFromStoresArray(memo[37]), {}) };
    tmp17Result8 = closure_14(closure_6, obj9);
  } else {
    const obj11 = { style: tmp2.giftingSettingsContainer, children: null };
    const items4 = [closure_14(tmp3(memo[38]), {}), ];
    const obj12 = { ref, style: tmp2.scrollView, contentContainerStyle: obj8, children: null };
    const tmp20 = closure_7;
    if (enabled) {
      enabled = null != stateFromStores;
    }
    if (enabled) {
      const obj13 = { children: items5 };
      const obj14 = { style: tmp2.titleWrapper, children: closure_14(GiftingSectionTitle, obj15) };
      obj15 = { title: intl.string(stateFromStoresArray(memo[39]).sFokBp) };
      intl = tmp6(tmp4[31]).intl;
      items5 = [closure_14(closure_6, obj14), ];
      const obj16 = { analyticsLocation };
      items5[1] = closure_14(stateFromStoresArray(memo[40]), obj16);
      enabled = tmp17(closure_16, obj13);
    }
    const items6 = [enabled, , ];
    if (tmp13) {
      if (promotionsLoaded) {
        let tmp19Result;
        if (subscriptionPlansLoaded) {
          const _Object = Object;
          const keys = Object.keys(memo);
          if (0 === keys.length) {
            if (0 === activeOutboundPromotions.length) {
              let tmp17Result;
              if (0 === claimedEndedOutboundPromotions.length) {
                const obj17 = { style: tmp2.emptyGiftLinks, children: items7 };
                const obj18 = { style: tmp2.emptyImage, source: stateFromStoresArray(memo[29]) };
                items7 = [closure_14(c5, obj18), ];
                const obj19 = { style: tmp2.emptyGiftDescription, accessible: true, children: items8 };
                const obj20 = { style: tmp2.emptyGiftHeader, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl3.string(require("intl").t.B1qgZn) };
                const Text = tmp6(tmp4[30]).Text;
                intl3 = tmp6(tmp4[31]).intl;
                items8 = [closure_14(Text, obj20), ];
                const obj21 = { style: tmp2.emptyGiftInformation, variant: "text-sm/medium", color: "text-default", children: intl4.string(require("intl").t["OV/u0n"]) };
                const Text2 = tmp6(tmp4[30]).Text;
                intl4 = tmp6(tmp4[31]).intl;
                items8[1] = closure_14(Text2, obj21);
                items7[1] = closure_15(closure_6, obj19);
                tmp17Result = tmp17(tmp18, obj17);
              }
              tmp19Result = tmp17Result;
            }
          }
          let tmp17Result5 = null;
          const obj22 = { style: tmp2.inventorySectionWrapper, children: items10 };
          if (activeOutboundPromotions.length + claimedEndedOutboundPromotions.length > 0) {
            const obj23 = { children: items9 };
            const obj24 = { style: tmp2.titleWrapper, children: closure_14(GiftingSectionTitle, obj25) };
            obj25 = { title: intl8.string(require("intl").t.wFsj3B) };
            intl8 = tmp6(tmp4[31]).intl;
            items9 = [
              closure_14(closure_6, obj24),
              claimedEndedOutboundPromotions.map((code) => {
                          const outboundPromotion = code.promotion;
                          return closure_1_14(stateFromStoresArray(memo[32]), { outboundPromotion, code: code.code }, outboundPromotion.id);
                        }),
              activeOutboundPromotions.map((outboundPromotion) => {
                          const obj = { outboundPromotion, code: c3[outboundPromotion.id] };
                          return authStore2(OutboundPromotionCardDefault, obj, outboundPromotion.id);
                        })
            ];
            tmp17Result5 = tmp17(closure_16, obj23);
          }
          items10 = [tmp17Result5, ];
          let tmp17Result6 = null;
          if (keys.length > 0) {
            const obj26 = { children: items11 };
            const obj27 = { style: tmp2.titleWrapper, children: closure_14(GiftingSectionTitle, obj28) };
            obj28 = { title: intl2.string(require("intl").t["9KeUbY"]) };
            intl2 = tmp6(tmp4[31]).intl;
            items11 = [
              closure_14(closure_6, obj27),
              keys.map((item) => {
                          let giftStyle;
                          let skuId;
                          let subscriptionPlanId;
                          const obj = GiftCodeUtils;
                          ({ skuId, subscriptionPlanId, giftStyle } = obj.parseComboId(item));
                          const obj2 = { skuId, subscriptionPlanId, entitlements: memo[item], giftStyle };
                          obj.parseComboId(item);
                          return authStore2(EntitlementGiftGroupCardDefault, obj2, item);
                        })
            ];
            tmp17Result6 = tmp17(closure_16, obj26);
          }
          items10[1] = tmp17Result6;
          tmp17Result = tmp17(tmp18, obj22);
        }
        const obj29 = { children: tmp19Result };
        items6[1] = closure_14(closure_6, obj29);
        let tmp17Result7 = null;
        if (subscriptionPlansLoaded) {
          const obj30 = { style: tmp2.giftPurchaseSectionWrapper, children: items12 };
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
          const obj31 = { title: intl5.string(require("intl").t["55Ccy0"]) };
          intl5 = tmp6(tmp4[31]).intl;
          items12 = [closure_14(GiftingSectionTitle, obj31), , , ];
          const obj32 = { premiumType: closure_12.TIER_2, style: tmp2.tierCard, children: items13 };
          const obj33 = { style: tmp2.cardText, variant: "text-sm/medium", color: "text-default", children: intl6.format(require("intl").t.thORji, obj34) };
          const tmp3Result = stateFromStoresArray(memo[34]);
          const Text3 = tmp6(tmp4[30]).Text;
          intl6 = tmp6(tmp4[31]).intl;
          obj34 = { onClick: handleLearnMorePremiumClick };
          items13 = [closure_14(Text3, obj33), ];
          const obj35 = { style: tmp2.buttonWrapper, children: items14 };
          const obj36 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "active", planId: closure_13.PREMIUM_YEAR_TIER_2, analyticsLocation };
          items14 = [closure_14(tmp3(memo[35]), obj36), ];
          const obj37 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "secondary", planId: closure_13.PREMIUM_MONTH_TIER_2, analyticsLocation };
          items14[1] = closure_14(stateFromStoresArray(memo[35]), obj37);
          items13[1] = closure_15(closure_6, obj35);
          items12[1] = closure_15(tmp3Result, obj32);
          const obj38 = { style: tmp2.warningMargins };
          items12[2] = closure_14(stateFromStoresArray(memo[36]), obj38);
          const obj39 = { children: items17 };
          const obj40 = { premiumType: closure_12.TIER_0, style: tmp2.tierCard, children: items15 };
          const obj41 = { style: tmp2.cardText, variant: "text-sm/medium", color: "text-default", children: intl7.format(require("intl").t.NmpnsP, obj42) };
          const tmp3Result2 = stateFromStoresArray(memo[34]);
          const Text4 = tmp6(tmp4[30]).Text;
          intl7 = tmp6(tmp4[31]).intl;
          obj42 = { onClick: handleLearnMoreNitroBasicClick };
          items15 = [closure_14(Text4, obj41), ];
          const obj43 = { style: tmp2.buttonWrapper, children: items16 };
          const obj44 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "active", planId: closure_13.PREMIUM_YEAR_TIER_0, analyticsLocation };
          items16 = [closure_14(tmp3(memo[35]), obj44), ];
          const obj45 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "secondary", planId: closure_13.PREMIUM_MONTH_TIER_0, analyticsLocation };
          items16[1] = closure_14(stateFromStoresArray(memo[35]), obj45);
          items15[1] = closure_15(closure_6, obj43);
          items17 = [closure_15(tmp3Result2, obj40), ];
          const obj46 = { style: tmp2.warningMargins };
          items17[1] = closure_14(stateFromStoresArray(memo[36]), obj46);
          items12[3] = closure_15(closure_16, obj39);
          tmp17Result7 = tmp17(tmp18, obj30);
        }
        items6[2] = tmp17Result7;
        obj12.children = items6;
        items4[1] = closure_15(tmp20, obj12);
        obj11.children = items4;
        tmp17Result8 = tmp17(tmp18, obj11);
      }
    }
    const obj47 = { style: tmp2.loading };
    tmp19Result = tmp19(tmp6(tmp4[41]).ActivityIndicator, obj47);
  }
  return tmp17Result8;
});
let result = size.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremiumGifting.tsx");

export default forwardRefResult;
