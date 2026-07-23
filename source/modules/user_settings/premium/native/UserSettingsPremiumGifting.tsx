// Module ID: 12485
// Function ID: 96757
// Name: GiftingSectionTitle
// Dependencies: [57, 31, 27, 8268, 6637, 653, 1851, 33, 4130, 689, 1324, 5503, 4126, 6652, 1456, 1557, 566, 22, 4366, 6656, 12393, 8776, 8265, 7429, 686, 6638, 6658, 8271, 7375, 5793, 7999, 12486, 1212, 12487, 12493, 12497, 5459, 12500, 12502, 7187, 9234, 2294, 12503, 5586, 2]

// Module 12485 (GiftingSectionTitle)
import _slicedToArray from "_slicedToArray";
import importAllResult from "registerAsset";
import get_ActivityIndicator from "urlUserId";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import GuildFeatures from "GuildFeatures";
import jsxProd from "TermsAndConditionsActionSheet";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function GiftingSectionTitle(title) {
  title = title.title;
  if (importDefault(1324)("UserSettingsPremiumGifting")) {
    let obj = { title };
    let tmp2Result = tmp2(tmp3(5503).TableRowGroupTitle, obj);
  } else {
    obj = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", color: "text-default", children: title };
    tmp2Result = tmp2(tmp3(4126).Text, obj);
  }
  return tmp2Result;
}
({ Image: closure_5, View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ UserSettingsSections: closure_10, AnalyticsPages: closure_11 } = ME);
({ PremiumTypes: closure_12, SubscriptionPlans: closure_13 } = GuildFeatures);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
let obj = {};
obj = { paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.GIFTING_SETTINGS_PADDING_HORIZONTAL };
obj.scrollView = obj;
obj.giftingSettingsContainer = { flex: 1 };
obj.inventorySectionWrapper = { flex: 1 };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
obj.inventorySectionWrapperLegacy = _createForOfIteratorHelperLoose;
obj.giftPurchaseSectionWrapper = { flex: 1, paddingTop: 36, paddingBottom: 16 };
obj.giftPurchaseSectionWrapperLegacy = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
let obj3 = { flex: 1, flexDirection: "row", alignItems: "center", paddingVertical: 16, borderWidth: get_ActivityIndicator.StyleSheet.hairlineWidth, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL };
obj.emptyGiftLinks = obj3;
obj.emptyImage = { marginRight: 18 };
obj.emptyGiftHeader = { lineHeight: 20 };
obj.emptyGiftDescription = { flex: 1 };
obj.emptyGiftInformation = { marginTop: 8 };
let obj4 = { lineHeight: 16, textTransform: "uppercase", marginHorizontal: ME.USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
obj.title = obj4;
obj.titleWrapper = { paddingTop: 28, paddingBottom: 8 };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
obj.titleWrapperLegacy = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
obj.cardText = { lineHeight: 18 };
obj.tierCard = { marginTop: 16 };
obj.giftPurchaseButton = { marginTop: 8, height: 40 };
obj.buttonWrapper = { marginTop: 16 };
obj.loading = { marginTop: 32 };
obj.warningMargins = { marginHorizontal: 16 };
let closure_17 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj5 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
const forwardRefResult = importAllResult.forwardRef(function UserSettingsPremiumGifting(arg0, ref) {
  let analyticsLocation;
  let c5;
  let c6;
  let c7;
  let recipientUserId;
  ({ recipientUserId, analyticsLocation } = arg0);
  if (analyticsLocation === undefined) {
    let obj = { page: constants.GIFTING_SETTINGS };
    analyticsLocation = obj;
  }
  let _require;
  let importDefault;
  let dependencyMap;
  let stateFromStoresArray;
  let importAllResult;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  let enabled;
  let closure_9;
  const tmp2 = callback3();
  _require = tmp2;
  const tmp3 = importDefault(1324)("UserSettingsPremiumGifting");
  importDefault = tmp3;
  importDefault(6652)();
  let obj1 = _require(1456);
  dependencyMap = obj1.useNavigation();
  let obj2 = _require(566);
  let items = [closure_9];
  stateFromStoresArray = obj2.useStateFromStoresArray(items, () => giftable.getGiftable());
  let items1 = [stateFromStoresArray];
  importAllResult = importAllResult.useMemo(() => _undefined2(arr[17]).groupBy(stateFromStoresArray, (skuId) => callback(table[18]).makeComboId(skuId.skuId, skuId.subscriptionPlanId, skuId.giftStyle)), items1);
  let obj3 = _require(6656);
  const isPaymentsBlocked = obj3.useIsPaymentsBlocked();
  let obj4 = _require(12393);
  const outboundPromotions = obj4.useOutboundPromotions();
  ({ activeOutboundPromotions: c5, claimedEndedOutboundPromotions: c6, claimedOutboundPromotionCodeMap: c7 } = outboundPromotions);
  const GiftingBadgeExperiment = _require(8776).GiftingBadgeExperiment;
  enabled = GiftingBadgeExperiment.useConfig({ location: "gift_inventory" }).enabled;
  let obj5 = _require(566);
  let items2 = [enabled];
  const stateFromStores = obj5.useStateFromStores(items2, () => enabled.getBadgeById(_undefined(arr[22]).BadgeId.GIFTING));
  const tmp9 = stateFromStoresArray(importAllResult.useState(false), 2);
  closure_9 = tmp9[1];
  let obj6 = _require(7429);
  const subscriptionPlansLoaded = obj6.useSubscriptionPlansLoaded();
  const effect = importAllResult.useEffect(() => {
    _undefined2(arr[24]).wait(() => {
      const giftableEntitlements = callback(6638).fetchGiftableEntitlements();
      giftableEntitlements.then(() => outer2_9(true));
      const obj = callback(6638);
      callback2(6658).init();
    });
  }, []);
  let items3 = [enabled];
  const effect1 = importAllResult.useEffect(() => {
    if (enabled) {
      const badge = _undefined(arr[27]).fetchBadge(_undefined(arr[22]).BadgeId.GIFTING);
      const obj = _undefined(arr[27]);
    }
  }, items3);
  obj = { paddingBottom: importDefault(1557)().bottom + importDefault(689).space.PX_16 };
  if (isPaymentsBlocked) {
    obj = { style: tmp2.giftingSettingsContainer };
    obj1 = { ref };
    obj2 = { top: 40 };
    obj1.contentInset = obj2;
    obj1.contentContainerStyle = obj;
    obj1.style = tmp2.scrollView;
    obj1.children = callback(importDefault(7187), {});
    obj.children = callback(c7, obj1);
    let tmp13Result = callback(c6, obj);
  } else {
    obj3 = { style: tmp2.giftingSettingsContainer };
    let items4 = [callback(importDefault(9234), {}), ];
    obj4 = { ref, style: tmp2.scrollView, contentContainerStyle: obj };
    if (enabled) {
      enabled = null != stateFromStores;
    }
    if (enabled) {
      obj5 = {};
      obj6 = {};
      let items5 = [tmp2.titleWrapper, ];
      let titleWrapperLegacy = null;
      if (!tmp3) {
        titleWrapperLegacy = tmp2.titleWrapperLegacy;
      }
      items5[1] = titleWrapperLegacy;
      obj6.style = items5;
      let obj7 = {};
      let intl = _require(1212).intl;
      obj7.title = intl.string(importDefault(2294).sFokBp);
      obj6.children = callback(GiftingSectionTitle, obj7);
      let items6 = [callback(c6, obj6), ];
      let obj8 = { analyticsLocation };
      items6[1] = callback(importDefault(12503), obj8);
      obj5.children = items6;
      enabled = callback2(closure_16, obj5);
      let tmp20 = callback2;
      const tmp21 = closure_16;
      const tmp22 = callback;
      const tmp23 = c6;
    }
    let items7 = [enabled, , ];
    let obj9 = {};
    if (tmp9[0]) {
      if (outboundPromotions.promotionsLoaded) {
        if (subscriptionPlansLoaded) {
          let tmp36 = (function renderInventory() {
            const keys = Object.keys(closure_4);
            if (0 === keys.length) {
              if (0 === _undefined3.length) {
                if (0 === _undefined4.length) {
                  let obj = { style: _undefined.emptyGiftLinks };
                  obj = { style: _undefined.emptyImage, source: _undefined2(arr[31]) };
                  const items = [outer1_14(_undefined3, obj), ];
                  const obj1 = { style: _undefined.emptyGiftDescription, accessible: true };
                  const obj2 = { style: _undefined.emptyGiftHeader, variant: "text-md/semibold", color: "mobile-text-heading-primary" };
                  const intl3 = _undefined(arr[32]).intl;
                  obj2.children = intl3.string(_undefined(arr[32]).t.B1qgZn);
                  const items1 = [outer1_14(_undefined(arr[12]).Text, obj2), ];
                  const obj3 = { style: _undefined.emptyGiftInformation, variant: "text-sm/medium", color: "text-default" };
                  const intl4 = _undefined(arr[32]).intl;
                  obj3.children = intl4.string(_undefined(arr[32]).t["OV/u0n"]);
                  items1[1] = outer1_14(_undefined(arr[12]).Text, obj3);
                  obj1.children = items1;
                  items[1] = outer1_15(_undefined4, obj1);
                  obj.children = items;
                  let tmp3Result = outer1_15(_undefined4, obj);
                }
                return tmp3Result;
              }
            }
            obj = {};
            const items2 = [_undefined.inventorySectionWrapper, ];
            let prop = null;
            if (!_undefined2) {
              prop = _undefined.inventorySectionWrapperLegacy;
            }
            items2[1] = prop;
            obj.style = items2;
            let tmp44Result = null;
            if (_undefined3.length + _undefined4.length > 0) {
              const obj4 = {};
              const obj5 = {};
              const items3 = [_undefined.titleWrapper, ];
              let titleWrapperLegacy = null;
              if (!_undefined2) {
                titleWrapperLegacy = _undefined.titleWrapperLegacy;
              }
              items3[1] = titleWrapperLegacy;
              obj5.style = items3;
              const obj6 = {};
              const intl = _undefined(arr[32]).intl;
              obj6.title = intl.string(_undefined(arr[32]).t.wFsj3B);
              obj5.children = outer1_14(outer1_18, obj6);
              const items4 = [
                outer1_14(_undefined4, obj5),
                _undefined4.map((code) => {
                    const outboundPromotion = code.promotion;
                    return outer2_14(callback2(12487), { outboundPromotion, code: code.code }, outboundPromotion.id);
                  }),
                _undefined3.map((id) => outer2_14(callback2(12487), { outboundPromotion: id, code: outer1_7[id.id] }, id.id))
              ];
              obj4.children = items4;
              tmp44Result = outer1_15(outer1_16, obj4);
              const tmp44 = outer1_15;
              const tmp45 = outer1_16;
              const tmp46 = outer1_14;
              const tmp47 = _undefined4;
            }
            const items5 = [tmp44Result, ];
            let tmp17Result = null;
            if (keys.length > 0) {
              const obj7 = {};
              const obj8 = {};
              const items6 = [_undefined.titleWrapper, ];
              let titleWrapperLegacy1 = null;
              if (!_undefined2) {
                titleWrapperLegacy1 = _undefined.titleWrapperLegacy;
              }
              items6[1] = titleWrapperLegacy1;
              obj8.style = items6;
              const obj9 = {};
              const intl2 = _undefined(arr[32]).intl;
              obj9.title = intl2.string(_undefined(arr[32]).t["9KeUbY"]);
              obj8.children = outer1_14(outer1_18, obj9);
              const items7 = [
                outer1_14(_undefined4, obj8),
                keys.map((arg0) => {
                    let giftStyle;
                    let skuId;
                    let subscriptionPlanId;
                    let obj = callback(4366);
                    ({ skuId, subscriptionPlanId, giftStyle } = obj.parseComboId(arg0));
                    obj = { skuId, subscriptionPlanId, entitlements: outer1_4[arg0], giftStyle, isRefreshEnabled: outer1_1 };
                    return outer2_14(callback2(12493), obj, arg0);
                  })
              ];
              obj7.children = items7;
              tmp17Result = outer1_15(outer1_16, obj7);
              const tmp17 = outer1_15;
              const tmp18 = outer1_16;
              const tmp19 = outer1_14;
              const tmp20 = _undefined4;
            }
            items5[1] = tmp17Result;
            obj.children = items5;
            tmp3Result = outer1_15(_undefined4, obj);
          })();
        }
        obj9.children = tmp36;
        items7[1] = tmp31(tmp32, obj9);
        let tmp38Result = null;
        if (subscriptionPlansLoaded) {
          const obj10 = {};
          const items8 = [tmp2.giftPurchaseSectionWrapper, ];
          let prop = null;
          if (!tmp3) {
            prop = tmp2.giftPurchaseSectionWrapperLegacy;
          }
          items8[1] = prop;
          obj10.style = items8;
          const obj11 = {};
          let intl2 = _require(1212).intl;
          obj11.title = intl2.string(_require(1212).t["55Ccy0"]);
          const items9 = [callback(GiftingSectionTitle, obj11), , , ];
          const obj12 = { premiumType: closure_12.TIER_2, style: tmp2.tierCard };
          const obj13 = { style: tmp2.cardText, variant: "text-sm/medium", color: "text-default" };
          let intl3 = _require(1212).intl;
          const obj14 = {
            onClick: function handleLearnMorePremiumClick() {
                      let obj = _undefined2(arr[28]);
                      obj.setSection(outer1_10.PREMIUM_GIFTING);
                      obj = { destinationPane: outer1_10.PREMIUM_GIFTING };
                      const result = _undefined(arr[29]).trackUserSettingsPaneViewed(obj);
                      arr = arr.push(outer1_10.PREMIUM);
                    }
          };
          obj13.children = intl3.format(_require(1212).t.thORji, obj14);
          const items10 = [callback(_require(5459).TextWithIOSLinkWorkaround, obj13), ];
          const obj15 = { style: tmp2.buttonWrapper };
          const obj16 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "active", planId: closure_13.PREMIUM_YEAR_TIER_2, analyticsLocation };
          const items11 = [callback(importDefault(12500), obj16), ];
          const obj17 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "secondary", planId: closure_13.PREMIUM_MONTH_TIER_2, analyticsLocation };
          items11[1] = callback(importDefault(12500), obj17);
          obj15.children = items11;
          items10[1] = callback2(c6, obj15);
          obj12.children = items10;
          items9[1] = callback2(importDefault(12497), obj12);
          const obj18 = { style: tmp2.warningMargins };
          items9[2] = callback(importDefault(12502), obj18);
          const obj19 = {};
          const obj20 = { premiumType: closure_12.TIER_0, style: tmp2.tierCard };
          const tmp38 = callback2;
          const tmp39 = c6;
          let tmp47 = importDefault(12497);
          const obj21 = { style: tmp2.cardText, variant: "text-sm/medium", color: "text-default" };
          let intl4 = _require(1212).intl;
          const obj22 = {
            onClick: function handleLearnMoreNitroBasicClick() {
                      let obj = _undefined2(arr[28]);
                      obj.setSection(outer1_10.PREMIUM_GIFTING);
                      obj = { destinationPane: outer1_10.PREMIUM_GIFTING };
                      const result = _undefined(arr[29]).trackUserSettingsPaneViewed(obj);
                      obj = { premiumFeatureCardOrder: _undefined(arr[30]).PremiumFeatureCardOrder.TIER_0_LEADING };
                      arr = arr.push(outer1_10.PREMIUM, obj);
                    }
          };
          obj21.children = intl4.format(_require(1212).t.NmpnsP, obj22);
          const items12 = [callback(_require(5459).TextWithIOSLinkWorkaround, obj21), ];
          const obj23 = { style: tmp2.buttonWrapper };
          const obj24 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "active", planId: closure_13.PREMIUM_YEAR_TIER_0, analyticsLocation };
          const items13 = [callback(importDefault(12500), obj24), ];
          const obj25 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "secondary", planId: closure_13.PREMIUM_MONTH_TIER_0, analyticsLocation };
          items13[1] = callback(importDefault(12500), obj25);
          obj23.children = items13;
          items12[1] = callback2(c6, obj23);
          obj20.children = items12;
          const items14 = [callback2(importDefault(12497), obj20), ];
          const obj26 = { style: tmp2.warningMargins };
          items14[1] = callback(importDefault(12502), obj26);
          obj19.children = items14;
          items9[3] = callback2(closure_16, obj19);
          obj10.children = items9;
          tmp38Result = tmp38(tmp39, obj10);
          const tmp56 = importDefault(12497);
        }
        items7[2] = tmp38Result;
        obj4.children = items7;
        items4[1] = tmp13(tmp18, obj4);
        obj3.children = items4;
        tmp13Result = tmp13(tmp14, obj3);
      }
    }
    const obj27 = { style: tmp2.loading };
    tmp36 = callback(_require(5586).ActivityIndicator, obj27);
    tmp14 = c6;
    tmp18 = c7;
  }
  return tmp13Result;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremiumGifting.tsx");

export default forwardRefResult;
