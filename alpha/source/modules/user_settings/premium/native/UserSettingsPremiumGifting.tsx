// Module ID: 13773
// Function ID: 13774
// Name: UserSettingsPremiumGifting
// Dependencies: [32, 19, 17, 8300, 7103, 1085, 1392, 21, 5091, 587, 558, 576, 6269, 7127, 1503, 1631, 504, 5630, 12, 7130, 9100, 10066, 8292, 13616, 584, 7109, 7132, 8305, 6678, 6682, 9367, 6163, 13774, 5087, 1126, 13775, 13781, 13783, 13786, 13788, 2661, 13789, 6160, 10462, 6684, 2]

// Module 13773 (UserSettingsPremiumGifting)
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import intl9 from "intl" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import _modDef2661 from "module_2661" /* 2661 */;
import Text_Text from "Text/Text" /* 5087 */;
import GiftCodeUtils from "GiftCodeUtils" /* 5630 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6160 */;
import FastImageDefault from "FastImage" /* 6163 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6678 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6682 */;
import useStoreConnectionErrorAlertDefault from "useStoreConnectionErrorAlert" /* 7127 */;
import BadgeId from "BadgeId" /* 8292 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8305 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9367 */;
import AssetRegistryDefault from "AssetRegistry" /* 13774 */;
import OutboundPromotionCardDefault from "OutboundPromotionCard" /* 13775 */;
import EntitlementGiftGroupCardDefault from "EntitlementGiftGroupCard" /* 13781 */;
import PremiumTierCardDefault from "PremiumTierCard" /* 13783 */;
import GiftPurchaseButtonDefault from "GiftPurchaseButton" /* 13786 */;
import PremiumUnverifiedWarningDefault from "PremiumUnverifiedWarning" /* 13788 */;
import UserSettingsGiftingBadgeProgressDefault from "UserSettingsGiftingBadgeProgress" /* 13789 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8300 */;
import EntitlementStore from "EntitlementStore" /* 7103 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, constants2, dependencyMap, importDefault, navigation;

let StyleSheet;
let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let tmp;
let tmp8;
let unpackModuleId;
const _modDef12 = tmp8(12);
const TableRowGroup = tmp(6269);
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: hasOwnProperty, ScrollView: metroRequire, StyleSheet } = react_native);
({ UserSettingsSections: c9, AnalyticsPages: c10 } = Constants);
({ PremiumTypes: unpackModuleId, SubscriptionPlans: closure_12 } = PremiumConstants);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { scrollView: obj2, giftingSettingsContainer: { flex: 1 }, inventorySectionWrapper: { flex: 1 }, giftPurchaseSectionWrapper: { flex: 1, paddingTop: 36, paddingBottom: 16 }, emptyGiftLinks: obj3, emptyImage: { marginRight: 18 }, emptyGiftHeader: { lineHeight: 20 }, emptyGiftDescription: { flex: 1 }, emptyGiftInformation: { marginTop: 8 }, titleWrapper: { paddingTop: 28, paddingBottom: 8 }, cardText: { lineHeight: 18 }, tierCard: { marginTop: 16 }, giftPurchaseButton: { marginTop: 8, height: 40 }, buttonWrapper: { marginTop: 16 }, loading: { marginTop: 32 }, warningMargins: { marginHorizontal: 16 } };
obj2 = { paddingHorizontal: nativeDefault.modules.mobile.GIFTING_SETTINGS_PADDING_HORIZONTAL };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, flexDirection: "row", alignItems: "center", paddingVertical: 16, borderWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_16 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingSectionTitle(title) {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  title = title.title;
  if (cResult[0] !== title) {
    const obj2 = { title };
    const tmp6 = map1(TableRowGroup.TableRowGroupTitle, obj2);
    cResult[0] = title;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function GiftingSectionTitle(title) {
  return map1(TableRowGroup.TableRowGroupTitle, { title: title.title });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsPremiumGifting(recipientUserId) {
  let analyticsLocation;
  let claimedOutboundPromotionCodeMap;
  let closure_10;
  let closure_2;
  let ref;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp20;
  let tmp22;
  let tmp23;
  let tmp27;
  let tmp28;
  let tmp31;
  let tmp32;
  let tmp34;
  let tmp36;
  let tmp4;
  let tmp = recipientUserId;
  const tmp2 = dependencyMap;
  let obj = recipientUserId(576);
  const cResult = obj.c(93);
  recipientUserId = recipientUserId.recipientUserId;
  ({ analyticsLocation, ref } = recipientUserId);
  if (cResult[0] !== analyticsLocation) {
    let tmp5 = analyticsLocation;
    if (undefined === analyticsLocation) {
      let obj2 = { page: constants2.GIFTING_SETTINGS };
      tmp5 = obj2;
    }
    cResult[0] = analyticsLocation;
    cResult[1] = tmp5;
    tmp4 = tmp5;
  } else {
    tmp4 = cResult[1];
  }
  importDefault = tmp4;
  const tmp7 = closure_16();
  dependencyMap = tmp7;
  useStoreConnectionErrorAlertDefault();
  let tmpResult = tmp(1503);
  navigation = tmpResult.useNavigation();
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [claimedOutboundPromotionCodeMap];
    const fn = function x() {
      return claimedOutboundPromotionCodeMap.getGiftable();
    };
    cResult[2] = items;
    cResult[3] = fn;
    tmp12 = fn;
    tmp11 = items;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  const tmpResult6 = tmp(504);
  const stateFromStoresArray = tmpResult6.useStateFromStoresArray(tmp11, tmp12);
  if (cResult[4] !== stateFromStoresArray) {
    let tmp16;
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor(skuId) {
          const obj = recipientUserId(closure_2[17]);
          return obj.makeComboId(skuId.skuId, skuId.subscriptionPlanId, skuId.giftStyle);
        }
      }
      cResult[6] = L;
      tmp16 = L;
    } else {
      class L {
        constructor(skuId) {
          const obj = recipientUserId(closure_2[17]);
          return obj.makeComboId(skuId.skuId, skuId.subscriptionPlanId, skuId.giftStyle);
        }
      }
    }
    const tmp8Result = _modDef12;
    const groupByResult = tmp8Result.groupBy(stateFromStoresArray, tmp16);
    cResult[4] = stateFromStoresArray;
    cResult[5] = groupByResult;
    tmp15 = groupByResult;
  } else {
    class L {
      constructor(skuId) {
        const obj = recipientUserId(closure_2[17]);
        return obj.makeComboId(skuId.skuId, skuId.subscriptionPlanId, skuId.giftStyle);
      }
    }
  }
  react = tmp15;
  const tmpResult7 = tmp(7130);
  const isPaymentsBlocked = tmpResult7.useIsPaymentsBlocked();
  const tmpResult8 = tmp(9100);
  const outboundPromotions = tmpResult8.useOutboundPromotions();
  const promotionsLoaded = outboundPromotions.promotionsLoaded;
  const activeOutboundPromotions = outboundPromotions.activeOutboundPromotions;
  const claimedEndedOutboundPromotions = outboundPromotions.claimedEndedOutboundPromotions;
  claimedOutboundPromotionCodeMap = outboundPromotions.claimedOutboundPromotionCodeMap;
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor(skuId) {
        const obj = recipientUserId(closure_2[17]);
        return obj.makeComboId(skuId.skuId, skuId.subscriptionPlanId, skuId.giftStyle);
      }
    }
    cResult[7] = tmp21;
    tmp20 = tmp21;
  } else {
    class L {
      constructor(skuId) {
        const obj = recipientUserId(closure_2[17]);
        return obj.makeComboId(skuId.skuId, skuId.subscriptionPlanId, skuId.giftStyle);
      }
    }
  }
  const GiftingBadgeExperiment = tmp(10066).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig(tmp20).enabled;
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor(skuId) {
        const obj = recipientUserId(closure_2[17]);
        return obj.makeComboId(skuId.skuId, skuId.subscriptionPlanId, skuId.giftStyle);
      }
    }
    let items1 = [claimedEndedOutboundPromotions];
    class K {
      constructor() {
        return claimedEndedOutboundPromotions.getBadgeById(recipientUserId(closure_2[22]).BadgeId.GIFTING);
      }
    }
    cResult[8] = items1;
    cResult[9] = K;
    tmp23 = K;
    tmp22 = items1;
  } else {
    class L {
      constructor(skuId) {
        const obj = recipientUserId(closure_2[17]);
        return obj.makeComboId(skuId.skuId, skuId.subscriptionPlanId, skuId.giftStyle);
      }
    }
    tmp23 = cResult[9];
  }
  const tmpResult9 = tmp(504);
  const stateFromStores = tmpResult9.useStateFromStores(tmp22, tmp23);
  let obj9 = react;
  const tmp25 = navigation(react.useState(false), 2);
  constants2 = tmp25[0];
  let closure_11 = tmp25[1];
  const tmpResult10 = tmp(13616);
  const subscriptionPlansLoaded = tmpResult10.useSubscriptionPlansLoaded();
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor(skuId) {
        const obj = recipientUserId(closure_2[17]);
        return obj.makeComboId(skuId.skuId, skuId.subscriptionPlanId, skuId.giftStyle);
      }
    }
    let items2 = [];
    class K {
      constructor() {
        return claimedEndedOutboundPromotions.getBadgeById(recipientUserId(closure_2[22]).BadgeId.GIFTING);
      }
    }
    cResult[11] = tmp29;
    tmp28 = tmp29;
    tmp27 = items2;
  } else {
    class L {
      constructor(skuId) {
        const obj = recipientUserId(closure_2[17]);
        return obj.makeComboId(skuId.skuId, skuId.subscriptionPlanId, skuId.giftStyle);
      }
    }
    tmp28 = cResult[11];
  }
  const effect = obj9.useEffect(tmp28, tmp27);
  if (cResult[12] !== enabled) {
    class X {
      constructor() {
        const tmp = enabled;
        if (tmp) {
          const obj = BadgeDirectoryActionCreators;
          const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
        }
      }
    }
    const items3 = [enabled];
    class K {
      constructor() {
        return claimedEndedOutboundPromotions.getBadgeById(recipientUserId(closure_2[22]).BadgeId.GIFTING);
      }
    }
    cResult[12] = enabled;
    cResult[13] = X;
    cResult[14] = items3;
    tmp32 = items3;
    tmp31 = X;
  } else {
    class X {
      constructor() {
        const tmp = enabled;
        if (tmp) {
          const obj = BadgeDirectoryActionCreators;
          const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
        }
      }
    }
    tmp32 = cResult[14];
  }
  const effect1 = obj9.useEffect(tmp31, tmp32);
  if (cResult[15] !== navigation) {
    class X {
      constructor() {
        const tmp = enabled;
        if (tmp) {
          const obj = BadgeDirectoryActionCreators;
          const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
        }
      }
    }
    cResult[15] = navigation;
    class K {
      constructor() {
        return claimedEndedOutboundPromotions.getBadgeById(recipientUserId(closure_2[22]).BadgeId.GIFTING);
      }
    }
    cResult[16] = tmp35;
    tmp34 = tmp35;
  } else {
    class X {
      constructor() {
        const tmp = enabled;
        if (tmp) {
          const obj = BadgeDirectoryActionCreators;
          const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
        }
      }
    }
  }
  const onClick = tmp34;
  if (cResult[17] !== navigation) {
    class X {
      constructor() {
        const tmp = enabled;
        if (tmp) {
          const obj = BadgeDirectoryActionCreators;
          const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
        }
      }
    }
    cResult[17] = navigation;
    class K {
      constructor() {
        return claimedEndedOutboundPromotions.getBadgeById(recipientUserId(closure_2[22]).BadgeId.GIFTING);
      }
    }
    cResult[18] = tmp37;
    tmp36 = tmp37;
  } else {
    class X {
      constructor() {
        const tmp = enabled;
        if (tmp) {
          const obj = BadgeDirectoryActionCreators;
          const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
        }
      }
    }
  }
  const onClick2 = tmp36;
  if (cResult[19] === tmp7.emptyGiftDescription) {
    class X {
      constructor() {
        const tmp = enabled;
        if (tmp) {
          const obj = BadgeDirectoryActionCreators;
          const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
        }
      }
    }
  }
  function renderEmptyState() {
    let intl;
    let intl2;
    let items;
    let items1;
    const obj = { style: closure_2.emptyGiftLinks, children: items };
    const obj2 = { style: closure_2.emptyImage, source: AssetRegistryDefault };
    const tmp = FastImageDefault;
    items = [map1(tmp, obj2), ];
    const obj3 = { style: closure_2.emptyGiftDescription, accessible: true, children: items1 };
    const obj4 = { style: closure_2.emptyGiftHeader, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl.string(intl9.t.B1qgZn) };
    const Text = Text_Text.Text;
    intl = intl9.intl;
    items1 = [map1(Text, obj4), ];
    const obj5 = { style: closure_2.emptyGiftInformation, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl9.t["OV/u0n"]) };
    const Text2 = Text_Text.Text;
    intl2 = intl9.intl;
    items1[1] = map1(Text2, obj5);
    items[1] = authStore3(hasOwnProperty, obj3);
    return authStore3(hasOwnProperty, obj);
  }
  cResult[19] = tmp7.emptyGiftDescription;
  cResult[20] = tmp7.emptyGiftHeader;
  cResult[21] = tmp7.emptyGiftInformation;
  cResult[22] = tmp7.emptyGiftLinks;
  cResult[23] = tmp7.emptyImage;
  cResult[24] = renderEmptyState;
}) : (function UserSettingsPremiumGifting(ref) {
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
  ({ recipientUserId, analyticsLocation } = ref);
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
  const tmp2 = closure_16();
  stateFromStoresArray(memo[13])();
  let obj2 = require("useNavigation");
  _require = obj2.useNavigation();
  const bottom = stateFromStoresArray(memo[15])().bottom;
  let obj3 = require("get initialized");
  const items = [EntitlementStore];
  stateFromStoresArray = obj3.useStateFromStoresArray(items, () => giftable.getGiftable());
  const items1 = [stateFromStoresArray];
  memo = enabled.useMemo(() => {
    let obj = _modDef12;
    return obj.groupBy(stateFromStoresArray, (skuId) => {
      const obj = closure_1_0(memo[17]);
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
  const stateFromStores = obj6.useStateFromStores(items2, () => badgeById.getBadgeById(closure_0(memo[22]).BadgeId.GIFTING));
  [tmp13, c5] = enabled.useState(false);
  _slicedToArray(enabled.useState(false), 2);
  const obj7 = require("useSubscriptionPlansLoaded");
  const subscriptionPlansLoaded = obj7.useSubscriptionPlansLoaded();
  const effect = enabled.useEffect(() => {
    let obj = DispatcherDefault;
    obj.wait(() => {
      const obj = closure_0(memo[25]);
      const giftableEntitlements = obj.fetchGiftableEntitlements();
      giftableEntitlements.then(() => closure_1_5(true));
      const obj2 = stateFromStoresArray(memo[26]);
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
    const obj9 = { style: tmp2.giftingSettingsContainer, children: closure_13(closure_6, obj10) };
    obj10 = { ref: ref.ref, contentInset: { top: 40 }, contentContainerStyle: obj8, style: tmp2.scrollView, children: closure_13(stateFromStoresArray(memo[43]), {}) };
    tmp17Result8 = closure_13(c5, obj9);
  } else {
    const obj11 = { style: tmp2.giftingSettingsContainer, children: null };
    const items4 = [closure_13(tmp3(memo[44]), {}), ];
    const obj12 = { ref: ref.ref, style: tmp2.scrollView, contentContainerStyle: obj8, children: null };
    const tmp20 = closure_6;
    if (enabled) {
      enabled = null != stateFromStores;
    }
    if (enabled) {
      const obj13 = { children: items5 };
      const obj14 = { style: tmp2.titleWrapper, children: closure_13(closure_17, obj15) };
      obj15 = { title: intl.string(stateFromStoresArray(memo[40]).sFokBp) };
      intl = tmp6(tmp4[34]).intl;
      items5 = [closure_13(c5, obj14), ];
      const obj16 = { analyticsLocation };
      items5[1] = closure_13(stateFromStoresArray(memo[41]), obj16);
      enabled = tmp17(closure_15, obj13);
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
                const obj18 = { style: tmp2.emptyImage, source: stateFromStoresArray(memo[32]) };
                const tmp3Result = stateFromStoresArray(memo[31]);
                items7 = [closure_13(tmp3Result, obj18), ];
                const obj19 = { style: tmp2.emptyGiftDescription, accessible: true, children: items8 };
                const obj20 = { style: tmp2.emptyGiftHeader, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl3.string(require("intl").t.B1qgZn) };
                const Text = tmp6(tmp4[33]).Text;
                intl3 = tmp6(tmp4[34]).intl;
                items8 = [closure_13(Text, obj20), ];
                const obj21 = { style: tmp2.emptyGiftInformation, variant: "text-sm/medium", color: "text-default", children: intl4.string(require("intl").t["OV/u0n"]) };
                const Text2 = tmp6(tmp4[33]).Text;
                intl4 = tmp6(tmp4[34]).intl;
                items8[1] = closure_13(Text2, obj21);
                items7[1] = closure_14(c5, obj19);
                tmp17Result = tmp17(tmp18, obj17);
              }
              tmp19Result = tmp17Result;
            }
          }
          let tmp17Result5 = null;
          const obj22 = { style: tmp2.inventorySectionWrapper, children: items10 };
          if (activeOutboundPromotions.length + claimedEndedOutboundPromotions.length > 0) {
            const obj23 = { children: items9 };
            const obj24 = { style: tmp2.titleWrapper, children: closure_13(closure_17, obj25) };
            obj25 = { title: intl8.string(require("intl").t.wFsj3B) };
            intl8 = tmp6(tmp4[34]).intl;
            items9 = [
              closure_13(c5, obj24),
              claimedEndedOutboundPromotions.map((code) => {
                          const outboundPromotion = code.promotion;
                          return closure_1_13(stateFromStoresArray(memo[35]), { outboundPromotion, code: code.code }, outboundPromotion.id);
                        }),
              activeOutboundPromotions.map((outboundPromotion) => {
                          const obj = { outboundPromotion, code: c3[outboundPromotion.id] };
                          return map1(OutboundPromotionCardDefault, obj, outboundPromotion.id);
                        })
            ];
            tmp17Result5 = tmp17(closure_15, obj23);
          }
          items10 = [tmp17Result5, ];
          let tmp17Result6 = null;
          if (keys.length > 0) {
            const obj26 = { children: items11 };
            const obj27 = { style: tmp2.titleWrapper, children: closure_13(closure_17, obj28) };
            obj28 = { title: intl2.string(require("intl").t["9KeUbY"]) };
            intl2 = tmp6(tmp4[34]).intl;
            items11 = [
              closure_13(c5, obj27),
              keys.map((item) => {
                          let giftStyle;
                          let skuId;
                          let subscriptionPlanId;
                          const obj = GiftCodeUtils;
                          ({ skuId, subscriptionPlanId, giftStyle } = obj.parseComboId(item));
                          const obj2 = { skuId, subscriptionPlanId, entitlements: memo[item], giftStyle };
                          obj.parseComboId(item);
                          return map1(EntitlementGiftGroupCardDefault, obj2, item);
                        })
            ];
            tmp17Result6 = tmp17(closure_15, obj26);
          }
          items10[1] = tmp17Result6;
          tmp17Result = tmp17(tmp18, obj22);
        }
        const obj29 = { children: tmp19Result };
        items6[1] = closure_13(c5, obj29);
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
          intl5 = tmp6(tmp4[34]).intl;
          items12 = [closure_13(closure_17, obj31), , , ];
          const obj32 = { premiumType: closure_11.TIER_2, style: tmp2.tierCard, children: items13 };
          const obj33 = { style: tmp2.cardText, variant: "text-sm/medium", color: "text-default", children: intl6.format(require("intl").t.thORji, obj34) };
          const tmp3Result3 = stateFromStoresArray(memo[37]);
          const Text3 = tmp6(tmp4[33]).Text;
          intl6 = tmp6(tmp4[34]).intl;
          obj34 = { onClick: handleLearnMorePremiumClick };
          items13 = [closure_13(Text3, obj33), ];
          const obj35 = { style: tmp2.buttonWrapper, children: items14 };
          const obj36 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "active", planId: closure_12.PREMIUM_YEAR_TIER_2, analyticsLocation };
          items14 = [closure_13(tmp3(memo[38]), obj36), ];
          const obj37 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "secondary", planId: closure_12.PREMIUM_MONTH_TIER_2, analyticsLocation };
          items14[1] = closure_13(stateFromStoresArray(memo[38]), obj37);
          items13[1] = closure_14(c5, obj35);
          items12[1] = closure_14(tmp3Result3, obj32);
          const obj38 = { style: tmp2.warningMargins };
          items12[2] = closure_13(stateFromStoresArray(memo[39]), obj38);
          const obj39 = { children: items17 };
          const obj40 = { premiumType: closure_11.TIER_0, style: tmp2.tierCard, children: items15 };
          const obj41 = { style: tmp2.cardText, variant: "text-sm/medium", color: "text-default", children: intl7.format(require("intl").t.NmpnsP, obj42) };
          const tmp3Result4 = stateFromStoresArray(memo[37]);
          const Text4 = tmp6(tmp4[33]).Text;
          intl7 = tmp6(tmp4[34]).intl;
          obj42 = { onClick: handleLearnMoreNitroBasicClick };
          items15 = [closure_13(Text4, obj41), ];
          const obj43 = { style: tmp2.buttonWrapper, children: items16 };
          const obj44 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "active", planId: closure_12.PREMIUM_YEAR_TIER_0, analyticsLocation };
          items16 = [closure_13(tmp3(memo[38]), obj44), ];
          const obj45 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "secondary", planId: closure_12.PREMIUM_MONTH_TIER_0, analyticsLocation };
          items16[1] = closure_13(stateFromStoresArray(memo[38]), obj45);
          items15[1] = closure_14(c5, obj43);
          items17 = [closure_14(tmp3Result4, obj40), ];
          const obj46 = { style: tmp2.warningMargins };
          items17[1] = closure_13(stateFromStoresArray(memo[39]), obj46);
          items12[3] = closure_14(closure_15, obj39);
          tmp17Result7 = tmp17(tmp18, obj30);
        }
        items6[2] = tmp17Result7;
        obj12.children = items6;
        items4[1] = closure_14(tmp20, obj12);
        obj11.children = items4;
        tmp17Result8 = tmp17(tmp18, obj11);
      }
    }
    const obj47 = { style: tmp2.loading };
    tmp19Result = tmp19(tmp6(tmp4[42]).ActivityIndicator, obj47);
  }
  return tmp17Result8;
});
let result = size.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremiumGifting.tsx");

export default tmp7;
