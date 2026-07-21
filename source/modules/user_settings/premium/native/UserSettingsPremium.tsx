// Module ID: 6645
// Function ID: 51032
// Name: UserSettingsPremium
// Dependencies: []
// Exports: default

// Module 6645 (UserSettingsPremium)
let USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_5, View: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
const tmp2 = arg1(dependencyMap[2]);
({ AnalyticEvents: closure_14, AppStates: closure_15, UserSettingsSections: closure_16, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = arg1(dependencyMap[9]));
const tmp3 = arg1(dependencyMap[9]);
({ PremiumTypes: closure_17, PREMIUM_SUBSCRIPTION_APPLICATION: closure_18 } = arg1(dependencyMap[10]));
const jsx = arg1(dependencyMap[11]).jsx;
const tmp4 = arg1(dependencyMap[10]);
let closure_20 = arg1(dependencyMap[12]).createStyles({ root: { flex: 1 }, container: { paddingVertical: 24, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, subscriptionHeader: {}, billingInfo: {}, accountCredit: { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, loadingSpinnerContainer: { 9223372036854775807: 0, 618913616341: 0, 0: 0, 9223372036854775807: 0 } });
const obj = arg1(dependencyMap[12]);
const result = arg1(dependencyMap[44]).fileFinishedImporting("modules/user_settings/premium/native/UserSettingsPremium.tsx");

export default function UserSettingsPremium(applicationId) {
  let isFromTextSection;
  let onClose;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let premiumFeatureCardOrder;
  let tmp8;
  let tmp9;
  applicationId = applicationId.applicationId;
  const arg1 = applicationId;
  ({ activitySessionId: closure_1, channelId: closure_2, guildId: closure_3, onClose, premiumFeatureCardOrder } = applicationId);
  let React;
  let closure_5;
  let closure_6;
  let stateFromStores;
  let closure_8;
  let closure_9;
  let closure_10;
  ({ isFromTextSection, onPaymentSuccess, onPaymentDismiss } = applicationId);
  let tmp = callback2();
  importDefault(dependencyMap[13])();
  if (isFromTextSection) {
    const items = [importDefault(dependencyMap[16]).TEXT_AND_IMAGES];
    let items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [...items1, importDefault(dependencyMap[16]).PREMIUM_MARKETING];
  const analyticsLocations = importDefault(dependencyMap[15])(items2).analyticsLocations;
  React = analyticsLocations;
  let obj = arg1(dependencyMap[17]);
  closure_5 = obj.useSettingNavigationRoute();
  importDefault(dependencyMap[18])(() => {
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
    obj = { application_id: applicationId, location_stack: analyticsLocations, activity_session_id: callback, channel_id: closure_2, guild_id: closure_3 };
    const merged = Object.assign(obj);
    callback(closure_2[19]).track(constants.PREMIUM_MARKETING_PAGE_VIEWED, obj);
  });
  let obj1 = arg1(dependencyMap[20]);
  const items3 = [closure_10];
  const tmp3 = importDefault(dependencyMap[15]);
  [tmp8, tmp9] = callback(obj1.useStateFromStoresArray(items3, () => {
    const items = [premiumDiscountOffer.getPremiumTypeSubscription(), premiumDiscountOffer.hasFetchedSubscriptions()];
    return items;
  }), 2);
  let obj2 = arg1(dependencyMap[21]);
  closure_6 = obj2.useNavigation();
  let obj3 = arg1(dependencyMap[20]);
  const items4 = [closure_12];
  stateFromStores = obj3.useStateFromStores(items4, () => state.getState());
  closure_8 = React.useRef(stateFromStores);
  let obj4 = arg1(dependencyMap[20]);
  const items5 = [closure_11];
  const stateFromStores1 = obj4.useStateFromStores(items5, () => {
    const items = [closure_18];
    return closure_11.hasFetchedForApplicationIds(items);
  });
  let obj5 = arg1(dependencyMap[20]);
  const items6 = [closure_11];
  const stateFromStores2 = obj5.useStateFromStores(items6, () => {
    let forApplication = closure_11.getForApplication(closure_18);
    if (null == forApplication) {
      const _Set = Set;
      forApplication = new Set();
    }
    return forApplication;
  }, [], arg1(dependencyMap[22]).areSetsEqual);
  let obj6 = arg1(dependencyMap[20]);
  const items7 = [closure_9];
  let stateFromStores3 = obj6.useStateFromStores(items7, () => premiumTrialOffer.isLoadedForPremiumSKUs());
  let obj7 = arg1(dependencyMap[20]);
  const items8 = [closure_13];
  const stateFromStores4 = obj7.useStateFromStores(items8, () => product.getProduct(applicationId(closure_2[23]).ProductIds.PREMIUM_TIER_2_MONTHLY));
  let obj8 = arg1(dependencyMap[20]);
  const items9 = [closure_8];
  const stateFromStores5 = obj8.useStateFromStores(items9, () => {
    const currentUser = ref.getCurrentUser();
    let result;
    if (null != currentUser) {
      result = currentUser.isPremiumWithPremiumGroup();
    }
    return null != result && result;
  });
  const tmp7 = callback(obj1.useStateFromStoresArray(items3, () => {
    const items = [premiumDiscountOffer.getPremiumTypeSubscription(), premiumDiscountOffer.hasFetchedSubscriptions()];
    return items;
  }), 2);
  const isPaymentsBlocked = arg1(dependencyMap[24]).useIsPaymentsBlocked();
  const effect = React.useEffect(() => {
    callback(closure_2[25]).wait(() => callback(closure_2[26]).init());
    const obj = callback(closure_2[25]);
    const userEntitlementsForApplication = applicationId(closure_2[27]).fetchUserEntitlementsForApplication(closure_18);
  }, []);
  const items10 = [stateFromStores];
  const effect1 = React.useEffect(() => {
    let tmp = stateFromStores === constants2.ACTIVE;
    if (tmp) {
      tmp = ref.current === constants2.BACKGROUND;
    }
    if (tmp) {
      callback(closure_2[25]).wait(() => callback(closure_2[26]).init());
      const obj = callback(closure_2[25]);
    }
    ref.current = stateFromStores;
  }, items10);
  const obj10 = arg1(dependencyMap[24]);
  const premiumTrialOffer = arg1(dependencyMap[28]).usePremiumTrialOffer();
  closure_9 = premiumTrialOffer;
  const obj11 = arg1(dependencyMap[28]);
  const premiumDiscountOffer = arg1(dependencyMap[29]).usePremiumDiscountOffer();
  closure_10 = premiumDiscountOffer;
  const obj12 = arg1(dependencyMap[29]);
  const premiumTrialOfferPremiumType = arg1(dependencyMap[30]).usePremiumTrialOfferPremiumType();
  const items11 = [premiumTrialOffer, premiumDiscountOffer];
  const effect2 = React.useEffect(() => {
    if (null != premiumTrialOffer) {
      const result = callback(closure_2[31]).acknowledgeUserTrialOffer(premiumTrialOffer);
      const obj = callback(closure_2[31]);
    }
    if (null != premiumDiscountOffer) {
      applicationId(closure_2[32]).acknowledgeUserOffer(undefined, premiumDiscountOffer);
      const obj2 = applicationId(closure_2[32]);
    }
  }, items11);
  let tmp23 = null != tmp8 && stateFromStores3 && tmp9;
  arg1(dependencyMap[35]);
  if (null != stateFromStores4) {
    if (stateFromStores3) {
      if (tmp9) {
        if (stateFromStores1) {
          if (isPaymentsBlocked) {
            obj = { style: tmp.container };
            tmp = importDefault(dependencyMap[42]);
            obj.children = tmp26(tmp, {});
            let tmp26Result = tmp26(stateFromStores, obj);
          } else {
            obj = {};
            const items12 = [tmp.root, ];
            obj1 = {};
            let num3 = 0;
            if (obj17.isAndroid()) {
              num3 = importDefault(dependencyMap[14])().bottom;
            }
            obj1.marginBottom = num3;
            items12[1] = obj1;
            obj.style = items12;
            obj2 = { value: analyticsLocations };
            if (tmp25) {
              if (null == premiumFeatureCardOrder) {
                obj3 = { onClose };
                let tmp40Result = jsx(importDefault(dependencyMap[39]), obj3);
              }
              obj2.children = tmp40Result;
              obj.children = tmp30(tmp33, obj2);
              tmp26Result = tmp26(tmp27, obj);
            }
            let TIER_2_LEADING = premiumFeatureCardOrder;
            if (null == premiumFeatureCardOrder) {
              if (premiumTrialOfferPremiumType === closure_17.TIER_0) {
                TIER_2_LEADING = arg1(dependencyMap[40]).PremiumFeatureCardOrder.TIER_0_LEADING;
              } else {
                TIER_2_LEADING = premiumFeatureCardOrder;
                if (premiumTrialOfferPremiumType === closure_17.TIER_2) {
                  TIER_2_LEADING = arg1(dependencyMap[40]).PremiumFeatureCardOrder.TIER_2_LEADING;
                }
              }
            }
            obj4 = { applicationId, userHasSubscription: tmp23 };
            let tmp44 = tmp23;
            const obj17 = arg1(dependencyMap[43]);
            const tmp27 = closure_6;
            const tmp30 = jsx;
            const tmp40 = jsx;
            if (tmp23) {
              obj5 = {
                style: tmp.subscriptionHeader,
                onClickManagePremiumGuild: function handleLearnMorePremiumGuild() {
                              const routes = navigation2.getState().routes;
                              const found = routes.find((name) => name.name === constants.GUILD_BOOSTING);
                              let obj = callback(closure_2[33]);
                              obj.setSection(constants3.GUILD_BOOSTING);
                              obj = { destinationPane: constants3.GUILD_BOOSTING };
                              const result = applicationId(closure_2[34]).trackUserSettingsPaneViewed(obj);
                              if (null != found) {
                                navigation2.navigate(found);
                              } else {
                                navigation2.push(constants3.GUILD_BOOSTING);
                              }
                            },
                subscription: tmp8
              };
              tmp44 = jsx(importDefault(dependencyMap[36]), obj5);
            }
            obj4.subscriptionDetails = tmp44;
            if (tmp23) {
              obj6 = { style: tmp.billingInfo, subscription: tmp8 };
              tmp23 = jsx(importDefault(dependencyMap[37]), obj6);
            }
            obj4.billingInfo = tmp23;
            if (stateFromStores3) {
              obj7 = { style: tmp.accountCredit, currentSubscription: tmp8, entitlements: stateFromStores2, hasPremiumGroup: stateFromStores5 };
              stateFromStores3 = jsx(importDefault(dependencyMap[38]), obj7);
            }
            obj4.accountCredit = stateFromStores3;
            obj4.onClose = onClose;
            if (null != TIER_2_LEADING) {
              let TIER_2_LEADING2 = TIER_2_LEADING;
            } else {
              TIER_2_LEADING2 = arg1(dependencyMap[40]).PremiumFeatureCardOrder.TIER_2_LEADING;
            }
            obj4.premiumFeatureCardOrder = TIER_2_LEADING2;
            obj4.entitlements = stateFromStores2;
            obj4.onPaymentSuccess = onPaymentSuccess;
            obj4.onPaymentDismiss = onPaymentDismiss;
            tmp40Result = tmp40(importDefault(dependencyMap[41]), obj4);
            const tmp43 = importDefault(dependencyMap[41]);
          }
        }
      }
    }
  }
  obj8 = { style: tmp.loadingSpinnerContainer, children: <closure_5 font={397} dx={97} /> };
  return <closure_6 {...obj8} />;
};
