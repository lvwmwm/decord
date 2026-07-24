// Module ID: 6650
// Function ID: 51083
// Name: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING
// Dependencies: [57, 31, 27, 1849, 3781, 3782, 6637, 6651, 5619, 653, 1851, 33, 4130, 6652, 1557, 5462, 5482, 6653, 4559, 675, 566, 1456, 1390, 6654, 6656, 686, 6658, 6638, 6686, 7125, 6685, 7373, 7374, 7375, 5793, 3776, 7376, 7378, 7418, 7420, 7421, 8059, 12399, 12447, 7187, 477, 2]
// Exports: default

// Module 6650 (USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING)
import _slicedToArray from "_slicedToArray";
import module_7373 from "module_7373";
import get_ActivityIndicator from "_fetchUserEntitlements";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import ME from "ME";
import GuildFeatures from "GuildFeatures";
import { jsx } from "dispatcher";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ ActivityIndicator: closure_5, View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ AnalyticEvents: closure_14, AppStates: closure_15, UserSettingsSections: closure_16, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = ME);
({ PremiumTypes: closure_17, PREMIUM_SUBSCRIPTION_APPLICATION: closure_18 } = GuildFeatures);
_createForOfIteratorHelperLoose = { marginTop: 20, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, width: "100%" };
let closure_20 = _createForOfIteratorHelperLoose.createStyles({ root: { flex: 1 }, container: { paddingVertical: 24, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, subscriptionHeader: { marginTop: 20, width: "100%" }, billingInfo: { marginTop: 20, width: "100%" }, accountCredit: _createForOfIteratorHelperLoose, loadingSpinnerContainer: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" } });
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremium.tsx");

export default function UserSettingsPremium(applicationId) {
  let _slicedToArray;
  let dependencyMap;
  let importDefault;
  let isFullScreenPresentation;
  let onClose;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let premiumFeatureCardOrder;
  let tmp8;
  let tmp9;
  applicationId = applicationId.applicationId;
  ({ activitySessionId: importDefault, channelId: dependencyMap, guildId: _slicedToArray, onClose, premiumFeatureCardOrder, onPaymentSuccess, onPaymentDismiss, isFullScreenPresentation } = applicationId);
  if (isFullScreenPresentation === undefined) {
    isFullScreenPresentation = false;
  }
  let analyticsLocations;
  let closure_5;
  let closure_6;
  let stateFromStores;
  let _isNativeReflectConstruct;
  let premiumTrialOffer;
  let premiumDiscountOffer;
  let tmp = callback2();
  importDefault(6652)();
  if (applicationId.isFromTextSection) {
    let items = [importDefault(5482).TEXT_AND_IMAGES];
    let items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [...items1, importDefault(5482).PREMIUM_MARKETING];
  analyticsLocations = importDefault(5462)(items2).analyticsLocations;
  let obj = applicationId(6653);
  closure_5 = obj.useSettingNavigationRoute();
  importDefault(4559)(() => {
    const params = navigation.params;
    let analyticsLocation;
    if (null != params) {
      analyticsLocation = params.analyticsLocation;
    }
    let section;
    if (null != analyticsLocation) {
      section = analyticsLocation.section;
    }
    if (null != section) {
      let obj = { source_section: section };
    } else {
      obj = {};
    }
    obj = { application_id: applicationId, location_stack: analyticsLocations, activity_session_id: closure_1, channel_id: closure_2, guild_id: _slicedToArray };
    const merged = Object.assign(obj);
    outer1_1(outer1_2[19]).track(outer1_14.PREMIUM_MARKETING_PAGE_VIEWED, obj);
  });
  let obj1 = applicationId(566);
  const items3 = [premiumDiscountOffer];
  const tmp3 = importDefault(5462);
  [tmp8, tmp9] = callback(obj1.useStateFromStoresArray(items3, () => {
    const items = [premiumDiscountOffer.getPremiumTypeSubscription(), premiumDiscountOffer.hasFetchedSubscriptions()];
    return items;
  }), 2);
  let obj2 = applicationId(1456);
  closure_6 = obj2.useNavigation();
  let obj3 = applicationId(566);
  const items4 = [closure_12];
  stateFromStores = obj3.useStateFromStores(items4, () => outer1_12.getState());
  _isNativeReflectConstruct = analyticsLocations.useRef(stateFromStores);
  let obj4 = applicationId(566);
  const items5 = [closure_11];
  const stateFromStores1 = obj4.useStateFromStores(items5, () => {
    const items = [outer1_18];
    return outer1_11.hasFetchedForApplicationIds(items);
  });
  let obj5 = applicationId(566);
  const items6 = [closure_11];
  const stateFromStores2 = obj5.useStateFromStores(items6, () => {
    let forApplication = outer1_11.getForApplication(outer1_18);
    if (null == forApplication) {
      const _Set = Set;
      forApplication = new Set();
    }
    return forApplication;
  }, [], applicationId(1390).areSetsEqual);
  let obj6 = applicationId(566);
  const items7 = [premiumTrialOffer];
  let stateFromStores3 = obj6.useStateFromStores(items7, () => premiumTrialOffer.isLoadedForPremiumSKUs());
  let obj7 = applicationId(566);
  const items8 = [closure_13];
  const stateFromStores4 = obj7.useStateFromStores(items8, () => outer1_13.getProduct(applicationId(outer1_2[23]).ProductIds.PREMIUM_TIER_2_MONTHLY));
  let obj8 = applicationId(566);
  const items9 = [_isNativeReflectConstruct];
  const stateFromStores5 = obj8.useStateFromStores(items9, () => {
    const currentUser = ref.getCurrentUser();
    let result;
    if (null != currentUser) {
      result = currentUser.isPremiumWithPremiumGroup();
    }
    return null != result && result;
  });
  let obj9 = applicationId(6656);
  const isPaymentsBlocked = obj9.useIsPaymentsBlocked();
  const effect = analyticsLocations.useEffect(() => {
    outer1_1(outer1_2[25]).wait(() => outer2_1(outer2_2[26]).init());
    const obj = outer1_1(outer1_2[25]);
    const userEntitlementsForApplication = applicationId(outer1_2[27]).fetchUserEntitlementsForApplication(outer1_18);
  }, []);
  const items10 = [stateFromStores];
  const effect1 = analyticsLocations.useEffect(() => {
    let tmp = stateFromStores === outer1_15.ACTIVE;
    if (tmp) {
      tmp = ref.current === outer1_15.BACKGROUND;
    }
    if (tmp) {
      outer1_1(outer1_2[25]).wait(() => outer2_1(outer2_2[26]).init());
      const obj = outer1_1(outer1_2[25]);
    }
    ref.current = stateFromStores;
  }, items10);
  let obj10 = applicationId(6686);
  premiumTrialOffer = obj10.usePremiumTrialOffer();
  const tmp7 = callback(obj1.useStateFromStoresArray(items3, () => {
    const items = [premiumDiscountOffer.getPremiumTypeSubscription(), premiumDiscountOffer.hasFetchedSubscriptions()];
    return items;
  }), 2);
  premiumDiscountOffer = applicationId(7125).usePremiumDiscountOffer();
  const obj12 = applicationId(7125);
  const premiumTrialOfferPremiumType = applicationId(6685).usePremiumTrialOfferPremiumType();
  const items11 = [premiumTrialOffer, premiumDiscountOffer];
  const effect2 = analyticsLocations.useEffect(() => {
    if (null != premiumTrialOffer) {
      const result = outer1_1(outer1_2[31]).acknowledgeUserTrialOffer(premiumTrialOffer);
      const obj = outer1_1(outer1_2[31]);
    }
    if (null != premiumDiscountOffer) {
      applicationId(outer1_2[32]).acknowledgeUserOffer(undefined, premiumDiscountOffer);
      const obj2 = applicationId(outer1_2[32]);
    }
  }, items11);
  let tmp23 = null != tmp8 && stateFromStores3 && tmp9;
  const obj13 = applicationId(6685);
  const hasTier2Premium = applicationId(3776).useHasTier2Premium();
  const obj14 = applicationId(3776);
  obj = { userHasSubscription: tmp23 };
  let tmp26 = hasTier2Premium;
  if (hasTier2Premium) {
    tmp26 = null == premiumFeatureCardOrder;
  }
  obj.isNitroHomeSurface = tmp26;
  obj.isConfirmedNonSubscriber = tmp9;
  const buyNitroExperiment = applicationId(7376).useBuyNitroExperiment(obj);
  if (null == stateFromStores4 || !stateFromStores3 || !tmp9 || !stateFromStores1) {
    if (!buyNitroExperiment.canRenderRedesignUpsellEarly) {
      obj = { style: tmp.loadingSpinnerContainer, children: <closure_5 animating size="large" /> };
      return <closure_6 style={tmp.loadingSpinnerContainer}><closure_5 animating size="large" /></closure_6>;
    }
  }
  if (isPaymentsBlocked) {
    obj1 = { style: tmp.container };
    tmp = importDefault(7187);
    obj1.children = tmp31(tmp, {});
    tmp31(stateFromStores, obj1);
  } else {
    obj2 = {};
    const items12 = [tmp.root, ];
    obj3 = {};
    let num3 = 0;
    if (obj20.isAndroid()) {
      num3 = importDefault(1557)().bottom;
    }
    obj3.marginBottom = num3;
    items12[1] = obj3;
    obj2.style = items12;
    obj4 = { value: analyticsLocations };
    if (buyNitroExperiment.showRedesignUpsell) {
      obj5 = { onClose, applicationId, initialLoadCompleted: !tmp24, onPaymentSuccess, onPaymentDismiss };
      if (null == premiumFeatureCardOrder) {
        obj5.initialTier = undefined;
        let tmp44Result = tmp64(tmp67, obj5);
      } else if (premiumFeatureCardOrder === applicationId(8059).PremiumFeatureCardOrder.TIER_0_LEADING) {
        let TIER_2 = closure_17.TIER_0;
      } else {
        TIER_2 = closure_17.TIER_2;
      }
      tmp64 = jsx;
    } else {
      if (hasTier2Premium) {
        if (null == premiumFeatureCardOrder) {
          obj6 = { onClose };
          tmp44Result = jsx(importDefault(12399), { onClose });
        }
      }
      let TIER_2_LEADING = premiumFeatureCardOrder;
      if (null == premiumFeatureCardOrder) {
        if (premiumTrialOfferPremiumType === closure_17.TIER_0) {
          TIER_2_LEADING = applicationId(8059).PremiumFeatureCardOrder.TIER_0_LEADING;
        } else {
          TIER_2_LEADING = premiumFeatureCardOrder;
          if (premiumTrialOfferPremiumType === closure_17.TIER_2) {
            TIER_2_LEADING = applicationId(8059).PremiumFeatureCardOrder.TIER_2_LEADING;
          }
        }
      }
      obj7 = { applicationId, userHasSubscription: tmp23 };
      let tmp48 = tmp23;
      if (tmp23) {
        obj8 = {
          style: tmp.subscriptionHeader,
          onClickManagePremiumGuild: function handleLearnMorePremiumGuild() {
                  const routes = navigation2.getState().routes;
                  const found = routes.find((name) => name.name === outer2_16.GUILD_BOOSTING);
                  let obj = outer1_1(outer1_2[33]);
                  obj.setSection(outer1_16.GUILD_BOOSTING);
                  obj = { destinationPane: outer1_16.GUILD_BOOSTING };
                  const result = applicationId(outer1_2[34]).trackUserSettingsPaneViewed(obj);
                  if (null != found) {
                    navigation2.navigate(found);
                  } else {
                    navigation2.push(outer1_16.GUILD_BOOSTING);
                  }
                },
          subscription: tmp8
        };
        tmp48 = jsx(importDefault(7378), {
          style: tmp.subscriptionHeader,
          onClickManagePremiumGuild: function handleLearnMorePremiumGuild() {
                  const routes = navigation2.getState().routes;
                  const found = routes.find((name) => name.name === outer2_16.GUILD_BOOSTING);
                  let obj = outer1_1(outer1_2[33]);
                  obj.setSection(outer1_16.GUILD_BOOSTING);
                  obj = { destinationPane: outer1_16.GUILD_BOOSTING };
                  const result = applicationId(outer1_2[34]).trackUserSettingsPaneViewed(obj);
                  if (null != found) {
                    navigation2.navigate(found);
                  } else {
                    navigation2.push(outer1_16.GUILD_BOOSTING);
                  }
                },
          subscription: tmp8
        });
      }
      obj7.subscriptionDetails = tmp48;
      if (tmp23) {
        obj9 = { style: tmp.billingInfo, subscription: tmp8 };
        tmp23 = jsx(importDefault(7418), { style: tmp.billingInfo, subscription: tmp8 });
      }
      obj7.billingInfo = tmp23;
      if (stateFromStores3) {
        obj10 = { style: tmp.accountCredit, currentSubscription: tmp8, entitlements: stateFromStores2, hasPremiumGroup: stateFromStores5 };
        stateFromStores3 = jsx(importDefault(7420), { style: tmp.accountCredit, currentSubscription: tmp8, entitlements: stateFromStores2, hasPremiumGroup: stateFromStores5 });
      }
      obj7.accountCredit = stateFromStores3;
      obj7.onClose = onClose;
      if (null != TIER_2_LEADING) {
        let TIER_2_LEADING2 = TIER_2_LEADING;
      } else {
        TIER_2_LEADING2 = applicationId(8059).PremiumFeatureCardOrder.TIER_2_LEADING;
      }
      obj7.premiumFeatureCardOrder = TIER_2_LEADING2;
      obj7.entitlements = stateFromStores2;
      obj7.onPaymentSuccess = onPaymentSuccess;
      obj7.onPaymentDismiss = onPaymentDismiss;
      obj7.isFullScreenPresentation = isFullScreenPresentation;
      tmp44Result = jsx(importDefault(12447), { applicationId, userHasSubscription: tmp23 });
      const tmp44 = jsx;
      const tmp47 = importDefault(12447);
    }
    obj4.children = tmp44Result;
    obj2.children = jsx(applicationId(5462).AnalyticsLocationProvider, { value: analyticsLocations });
    tmp31(closure_6, obj2);
    obj20 = applicationId(477);
    const tmp32 = closure_6;
    const tmp35 = jsx;
  }
};
