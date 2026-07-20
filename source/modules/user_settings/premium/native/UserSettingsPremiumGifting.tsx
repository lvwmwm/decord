// Module ID: 12357
// Function ID: 94528
// Name: GiftingSectionTitle
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 12357 (GiftingSectionTitle)
import closure_3 from "result";
import importAllResult from "result";
import result from "result";
import closure_8 from "result";
import closure_9 from "result";
import result from "result";
import result from "result";
import result from "result";
import result from "result";
import result from "result";

function GiftingSectionTitle(title) {
  title = title.title;
  if (importDefault(dependencyMap[10])("UserSettingsPremiumGifting")) {
    let obj = { title };
    let tmp2Result = tmp2(tmp3(tmp4[11]).TableRowGroupTitle, obj);
  } else {
    obj = { 0: "/assets/images/native/premium/logos", 9223372036854775807: 158, 0: 32, -9223372036854775808: null, style: tmp.title, children: title };
    tmp2Result = tmp2(tmp3(tmp4[12]).Text, obj);
  }
  return tmp2Result;
}
({ Image: closure_5, View: closure_6, ScrollView: closure_7 } = result);
({ UserSettingsSections: closure_10, AnalyticsPages: closure_11 } = result);
({ PremiumTypes: closure_12, SubscriptionPlans: closure_13 } = result);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = result);
let obj = {};
obj = { paddingHorizontal: require("result").modules.mobile.GIFTING_SETTINGS_PADDING_HORIZONTAL };
obj.scrollView = obj;
obj.giftingSettingsContainer = { flex: 1 };
obj.inventorySectionWrapper = { flex: 1 };
result = { backgroundColor: require("result").colors.BACKGROUND_BASE_LOWER };
obj.inventorySectionWrapperLegacy = result;
obj.giftPurchaseSectionWrapper = { flexDirection: "ERROR", marginBottom: "ka", alignItems: "MUR" };
obj.giftPurchaseSectionWrapperLegacy = { backgroundColor: require("result").colors.BACKGROUND_BASE_LOWER };
const obj3 = { marginBottom: 123.002, borderRadius: null, backgroundColor: require("result").colors.BACKGROUND_BASE_LOW, height: "Golive Simulcast without prober 720p@500k", borderWidth: result.StyleSheet.hairlineWidth, borderColor: require("result").colors.BACKGROUND_MOD_NORMAL };
obj.emptyGiftLinks = obj3;
obj.emptyImage = { marginRight: 18 };
obj.emptyGiftHeader = { lineHeight: 20 };
obj.emptyGiftDescription = { flex: 1 };
obj.emptyGiftInformation = { marginTop: 8 };
obj.title = { marginHorizontal: result.USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
obj.titleWrapper = { names: null, ks: null };
const obj2 = { backgroundColor: require("result").colors.BACKGROUND_BASE_LOWER };
obj.titleWrapperLegacy = { backgroundColor: require("result").colors.BACKGROUND_BASE_LOWER };
obj.cardText = { lineHeight: 18 };
obj.tierCard = { marginTop: 16 };
obj.giftPurchaseButton = { 1367468898: null, 777097067: null };
obj.buttonWrapper = { marginTop: 16 };
obj.loading = { marginTop: 32 };
obj.warningMargins = { marginHorizontal: 16 };
let closure_17 = result.createStyles(obj);
const obj4 = { backgroundColor: require("result").colors.BACKGROUND_BASE_LOWER };
result = result.fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremiumGifting.tsx");

export default importAllResult.forwardRef(function UserSettingsPremiumGifting(arg0, ref) {
  let analyticsLocation;
  let recipientUserId;
  ({ recipientUserId, analyticsLocation } = arg0);
  if (analyticsLocation === undefined) {
    let obj = { page: constants.GIFTING_SETTINGS };
    analyticsLocation = obj;
  }
  ref = undefined;
  let importDefault;
  let closure_2;
  let callback;
  let React;
  let closure_5;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  const tmp2 = callback4();
  ref = tmp2;
  const tmp3 = importDefault(closure_2[10])("UserSettingsPremiumGifting");
  importDefault = tmp3;
  importDefault(closure_2[13])();
  let obj1 = ref(closure_2[14]);
  closure_2 = obj1.useNavigation();
  let obj2 = ref(closure_2[16]);
  const items = [closure_9];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items, () => giftable.getGiftable());
  callback = stateFromStoresArray;
  const items1 = [stateFromStoresArray];
  React = React.useMemo(() => tmp3(closure_2[17]).groupBy(stateFromStoresArray, (skuId) => callback(closure_2[18]).makeComboId(skuId.skuId, skuId.subscriptionPlanId, skuId.giftStyle)), items1);
  let obj3 = ref(closure_2[19]);
  const isPaymentsBlocked = obj3.useIsPaymentsBlocked();
  let obj4 = ref(closure_2[20]);
  const outboundPromotions = obj4.useOutboundPromotions();
  ({ activeOutboundPromotions: closure_5, claimedEndedOutboundPromotions: closure_6, claimedOutboundPromotionCodeMap: closure_7 } = outboundPromotions);
  const GiftingBadgeExperiment = ref(closure_2[21]).GiftingBadgeExperiment;
  let enabled = GiftingBadgeExperiment.useConfig({ location: "gift_inventory" }).enabled;
  closure_8 = enabled;
  let obj5 = ref(closure_2[16]);
  const items2 = [closure_8];
  const stateFromStores = obj5.useStateFromStores(items2, () => enabled.getBadgeById(tmp2(closure_2[22]).BadgeId.GIFTING));
  const tmp9 = callback(React.useState(false), 2);
  closure_9 = tmp9[1];
  let obj6 = ref(closure_2[23]);
  const subscriptionPlansLoaded = obj6.useSubscriptionPlansLoaded();
  const effect = React.useEffect(() => {
    tmp3(closure_2[24]).wait(() => {
      const giftableEntitlements = callback(closure_2[25]).fetchGiftableEntitlements();
      giftableEntitlements.then(() => callback(true));
      const obj = callback(closure_2[25]);
      callback2(closure_2[26]).init();
    });
  }, []);
  const items3 = [enabled];
  const effect1 = React.useEffect(() => {
    if (enabled) {
      const badge = closure_2(closure_2[27]).fetchBadge(tmp2(closure_2[22]).BadgeId.GIFTING);
      const obj = closure_2(closure_2[27]);
    }
  }, items3);
  obj = { paddingBottom: importDefault(closure_2[15])().bottom + importDefault(closure_2[9]).space.PX_16 };
  if (isPaymentsBlocked) {
    obj = { style: tmp2.giftingSettingsContainer };
    obj1 = { ref };
    obj2 = { top: 40 };
    obj1.contentInset = obj2;
    obj1.contentContainerStyle = obj;
    obj1.style = tmp2.scrollView;
    obj1.children = callback2(importDefault(closure_2[39]), {});
    obj.children = callback2(closure_7, obj1);
    let tmp13Result = callback2(closure_6, obj);
  } else {
    obj3 = { style: tmp2.giftingSettingsContainer };
    const items4 = [callback2(importDefault(closure_2[40]), {}), ];
    obj4 = { ref, style: tmp2.scrollView, contentContainerStyle: obj };
    if (enabled) {
      enabled = null != stateFromStores;
    }
    if (enabled) {
      obj5 = {};
      obj6 = {};
      const items5 = [tmp2.titleWrapper, ];
      let titleWrapperLegacy = null;
      if (!tmp3) {
        titleWrapperLegacy = tmp2.titleWrapperLegacy;
      }
      items5[1] = titleWrapperLegacy;
      obj6.style = items5;
      const obj7 = {};
      const intl = ref(closure_2[32]).intl;
      obj7.title = intl.string(importDefault(closure_2[41]).sFokBp);
      obj6.children = callback2(GiftingSectionTitle, obj7);
      const items6 = [callback2(closure_6, obj6), ];
      const obj8 = { analyticsLocation };
      items6[1] = callback2(importDefault(closure_2[42]), obj8);
      obj5.children = items6;
      enabled = callback3(closure_16, obj5);
      const tmp20 = callback3;
      const tmp21 = closure_16;
      const tmp22 = callback2;
      const tmp23 = closure_6;
    }
    const items7 = [enabled, , ];
    const obj9 = {};
    if (tmp9[0]) {
      if (outboundPromotions.promotionsLoaded) {
        if (subscriptionPlansLoaded) {
          let tmp36 = function renderInventory() {
            const keys = Object.keys(closure_4);
            if (0 === keys.length) {
              if (0 === _undefined.length) {
                const tmp2 = _undefined2;
                if (0 === _undefined2.length) {
                  let obj = { style: tmp2.emptyGiftLinks };
                  obj = { style: tmp2.emptyImage, source: tmp3(closure_2[31]) };
                  const items = [callback(_undefined, obj), ];
                  const obj1 = { style: tmp2.emptyGiftDescription, accessible: true };
                  const obj2 = { style: tmp2.emptyGiftHeader };
                  const intl3 = tmp2(closure_2[32]).intl;
                  obj2.children = intl3.string(tmp2(closure_2[32]).t.B1qgZn);
                  const items1 = [callback(tmp2(closure_2[12]).Text, obj2), ];
                  const obj3 = { style: tmp2.emptyGiftInformation };
                  const intl4 = tmp2(closure_2[32]).intl;
                  obj3.children = intl4.string(tmp2(closure_2[32]).t.OV/u0n);
                  items1[1] = callback(tmp2(closure_2[12]).Text, obj3);
                  obj1.children = items1;
                  items[1] = callback2(_undefined2, obj1);
                  obj.children = items;
                  let tmp3Result = callback2(_undefined2, obj);
                }
                return tmp3Result;
              }
            }
            obj = {};
            const items2 = [tmp2.inventorySectionWrapper, ];
            let prop = null;
            if (!callback2) {
              prop = tmp2.inventorySectionWrapperLegacy;
            }
            items2[1] = prop;
            obj.style = items2;
            let tmp44Result = null;
            if (_undefined.length + _undefined2.length > 0) {
              const obj4 = {};
              const obj5 = {};
              const items3 = [tmp2.titleWrapper, ];
              let titleWrapperLegacy = null;
              if (!tmp3) {
                titleWrapperLegacy = tmp2.titleWrapperLegacy;
              }
              items3[1] = titleWrapperLegacy;
              obj5.style = items3;
              const obj6 = {};
              const intl = tmp2(closure_2[32]).intl;
              obj6.title = intl.string(tmp2(closure_2[32]).t.wFsj3B);
              obj5.children = callback(closure_18, obj6);
              const items4 = [
                callback(_undefined2, obj5),
                _undefined2.map((code) => {
                    const outboundPromotion = code.promotion;
                    return callback3(callback2(closure_2[33]), { outboundPromotion, code: code.code }, outboundPromotion.id);
                  }),
                _undefined.map((id) => callback3(callback2(closure_2[33]), { outboundPromotion: id, code: closure_7[id.id] }, id.id))
              ];
              obj4.children = items4;
              tmp44Result = callback2(closure_16, obj4);
              const tmp44 = callback2;
              const tmp45 = closure_16;
              const tmp46 = callback;
              const tmp47 = _undefined2;
            }
            const items5 = [tmp44Result, ];
            let tmp17Result = null;
            if (keys.length > 0) {
              const obj7 = {};
              const obj8 = {};
              const items6 = [tmp2.titleWrapper, ];
              let titleWrapperLegacy1 = null;
              if (!tmp3) {
                titleWrapperLegacy1 = tmp2.titleWrapperLegacy;
              }
              items6[1] = titleWrapperLegacy1;
              obj8.style = items6;
              const obj9 = {};
              const intl2 = tmp2(closure_2[32]).intl;
              obj9.title = intl2.string(tmp2(closure_2[32]).t.9KeUbY);
              obj8.children = callback(closure_18, obj9);
              const items7 = [
                callback(_undefined2, obj8),
                keys.map((arg0) => {
                    let giftStyle;
                    let skuId;
                    let subscriptionPlanId;
                    let obj = callback(closure_2[18]);
                    ({ skuId, subscriptionPlanId, giftStyle } = obj.parseComboId(arg0));
                    obj = { skuId, subscriptionPlanId, entitlements: closure_4[arg0], giftStyle, isRefreshEnabled: callback2 };
                    return callback3(callback2(closure_2[34]), obj, arg0);
                  })
              ];
              obj7.children = items7;
              tmp17Result = callback2(closure_16, obj7);
              const tmp17 = callback2;
              const tmp18 = closure_16;
              const tmp19 = callback;
              const tmp20 = _undefined2;
            }
            items5[1] = tmp17Result;
            obj.children = items5;
            tmp3Result = tmp3(_undefined2, obj);
          }();
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
          const intl2 = ref(closure_2[32]).intl;
          obj11.title = intl2.string(ref(closure_2[32]).t.55Ccy0);
          const items9 = [callback2(GiftingSectionTitle, obj11), , , ];
          const obj12 = { premiumType: closure_12.TIER_2, style: tmp2.tierCard };
          const obj13 = { style: tmp2.cardText };
          const intl3 = ref(closure_2[32]).intl;
          const obj14 = {
            onClick: function handleLearnMorePremiumClick() {
                      let obj = tmp3(arr[28]);
                      obj.setSection(constants.PREMIUM_GIFTING);
                      obj = { destinationPane: constants.PREMIUM_GIFTING };
                      const result = tmp2(arr[29]).trackUserSettingsPaneViewed(obj);
                      const arr = arr.push(constants.PREMIUM);
                    }
          };
          obj13.children = intl3.format(ref(closure_2[32]).t.thORji, obj14);
          const items10 = [callback2(ref(closure_2[36]).TextWithIOSLinkWorkaround, obj13), ];
          const obj15 = { style: tmp2.buttonWrapper };
          const obj16 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "active", planId: closure_13.PREMIUM_YEAR_TIER_2, analyticsLocation };
          const items11 = [callback2(importDefault(closure_2[37]), obj16), ];
          const obj17 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "secondary", planId: closure_13.PREMIUM_MONTH_TIER_2, analyticsLocation };
          items11[1] = callback2(importDefault(closure_2[37]), obj17);
          obj15.children = items11;
          items10[1] = callback3(closure_6, obj15);
          obj12.children = items10;
          items9[1] = callback3(importDefault(closure_2[35]), obj12);
          const obj18 = { style: tmp2.warningMargins };
          items9[2] = callback2(importDefault(closure_2[38]), obj18);
          const obj19 = {};
          const obj20 = { premiumType: closure_12.TIER_0, style: tmp2.tierCard };
          const tmp38 = callback3;
          const tmp39 = closure_6;
          const tmp47 = importDefault(closure_2[35]);
          const obj21 = { style: tmp2.cardText };
          const intl4 = ref(closure_2[32]).intl;
          const obj22 = {
            onClick: function handleLearnMoreNitroBasicClick() {
                      let obj = tmp3(arr[28]);
                      obj.setSection(constants.PREMIUM_GIFTING);
                      obj = { destinationPane: constants.PREMIUM_GIFTING };
                      const result = tmp2(arr[29]).trackUserSettingsPaneViewed(obj);
                      obj = { premiumFeatureCardOrder: tmp2(arr[30]).PremiumFeatureCardOrder.TIER_0_LEADING };
                      const arr = arr.push(constants.PREMIUM, obj);
                    }
          };
          obj21.children = intl4.format(ref(closure_2[32]).t.NmpnsP, obj22);
          const items12 = [callback2(ref(closure_2[36]).TextWithIOSLinkWorkaround, obj21), ];
          const obj23 = { style: tmp2.buttonWrapper };
          const obj24 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "active", planId: closure_13.PREMIUM_YEAR_TIER_0, analyticsLocation };
          const items13 = [callback2(importDefault(closure_2[37]), obj24), ];
          const obj25 = { recipientUserId, style: tmp2.giftPurchaseButton, variant: "secondary", planId: closure_13.PREMIUM_MONTH_TIER_0, analyticsLocation };
          items13[1] = callback2(importDefault(closure_2[37]), obj25);
          obj23.children = items13;
          items12[1] = callback3(closure_6, obj23);
          obj20.children = items12;
          const items14 = [callback3(importDefault(closure_2[35]), obj20), ];
          const obj26 = { style: tmp2.warningMargins };
          items14[1] = callback2(importDefault(closure_2[38]), obj26);
          obj19.children = items14;
          items9[3] = callback3(closure_16, obj19);
          obj10.children = items9;
          tmp38Result = tmp38(tmp39, obj10);
          const tmp56 = importDefault(closure_2[35]);
        }
        items7[2] = tmp38Result;
        obj4.children = items7;
        items4[1] = tmp13(tmp18, obj4);
        obj3.children = items4;
        tmp13Result = tmp13(tmp14, obj3);
      }
    }
    const obj27 = { style: tmp2.loading };
    tmp36 = callback2(ref(closure_2[43]).ActivityIndicator, obj27);
    const tmp14 = closure_6;
    const tmp18 = closure_7;
  }
  return tmp13Result;
});
