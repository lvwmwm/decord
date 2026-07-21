// Module ID: 12308
// Function ID: 94309
// Name: ManagePlanHeader
// Dependencies: []
// Exports: default

// Module 12308 (ManagePlanHeader)
function ManagePlanHeader() {
  const tmp = callback7();
  let obj = callback(dependencyMap[20]);
  const callback = obj.useNavigation();
  obj = { style: tmp.headerContainer };
  obj = {
    style: tmp.backButtonWrapper,
    onPress() {
      return arr.pop();
    },
    children: callback4(callback(dependencyMap[22]).ArrowLargeLeftIcon, { size: "md" })
  };
  const items = [callback4(callback(dependencyMap[21]).PressableOpacity, obj), , ];
  const obj1 = {};
  const intl = callback(dependencyMap[24]).intl;
  obj1.children = intl.string(callback(dependencyMap[24]).t.1bX7Tx);
  items[1] = callback4(callback(dependencyMap[23]).Text, obj1);
  items[2] = callback4(closure_8, { style: tmp.backButtonWrapper });
  obj.children = items;
  return callback5(closure_8, obj);
}
function SubscriptionAndBillingInfo(subscription) {
  let fractionalPremiumInfo;
  let isPremiumGroup;
  let premiumGroupRole;
  let tmp17;
  subscription = subscription.subscription;
  const arg1 = subscription;
  ({ fractionalPremiumInfo, isPremiumGroup, premiumGroupRole } = subscription);
  let callback2;
  let callback3;
  let React;
  let stateFromStores3;
  let tmp14;
  let closure_8;
  const tmp2 = callback8(importDefault(dependencyMap[27])("PremiumManagePlan"));
  const analyticsLocations = importDefault(dependencyMap[28])().analyticsLocations;
  const importDefault = analyticsLocations;
  let obj = arg1(dependencyMap[29]);
  obj = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, subscriptionId: subscription.id, analyticsLocations, analyticsLocation: importDefault(dependencyMap[30]).PREMIUM_SUBSCRIPTION_DETAILS };
  const first = callback3(obj.useFetchSubscriptionInvoicePreview(obj), 1)[0];
  let obj2 = arg1(dependencyMap[29]);
  obj = { subscriptionId: subscription.id, preventFetch: subscription.status !== constants2.PAST_DUE };
  const first1 = callback3(obj2.useGetSubscriptionInvoice(obj), 1)[0];
  let obj4 = arg1(dependencyMap[31]);
  const items = [closure_18];
  const stateFromStores = obj4.useStateFromStores(items, () => {
    if (subscription.isOnPlatformMatchingExternalPaymentGateway) {
      if (null != subscription.paymentGatewayPlanId) {
        if ("" !== subscription.paymentGatewayPlanId) {
          return product.getProduct(subscription.paymentGatewayPlanId);
        }
      }
      const _Error = Error;
      const error = new Error("Subscription missing plan ID");
      throw error;
    } else {
      return null;
    }
  });
  let obj5 = arg1(dependencyMap[31]);
  const items1 = [closure_15];
  const stateFromStores1 = obj5.useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let obj6 = arg1(dependencyMap[31]);
  const items2 = [closure_13];
  const stateFromStores2 = obj6.useStateFromStores(items2, () => obj.isSubscriptionFetching);
  const dependencyMap = stateFromStores2;
  let tmp8 = null !== stateFromStores1 && stateFromStores1.hasActiveTrial;
  let obj7 = arg1(dependencyMap[20]);
  callback2 = obj7.useNavigation();
  let obj8 = arg1(dependencyMap[32]);
  let obj9 = arg1(dependencyMap[33]);
  const isThemeLightResult = obj9.isThemeLight(obj8.useThemeContext().theme);
  const tmp10 = callback3(React.useState(null), 2);
  const first2 = tmp10[0];
  callback3 = first2;
  React = tmp10[1];
  let obj10 = arg1(dependencyMap[31]);
  const items3 = [closure_17];
  stateFromStores3 = obj10.useStateFromStores(items3, () => state.getState());
  const items4 = [first2, stateFromStores2, stateFromStores3];
  const effect = React.useEffect(() => {
    let tmp = "opening_mobile_web" === first2;
    if (tmp) {
      tmp = stateFromStores3 !== subscription(stateFromStores2[34]).AppStates.ACTIVE;
    }
    if (tmp) {
      validElement("in_mobile_web");
    }
    let tmp7 = "in_mobile_web" === first2;
    if (tmp7) {
      tmp7 = stateFromStores3 === subscription(stateFromStores2[34]).AppStates.ACTIVE;
    }
    if (tmp7) {
      const subscriptions = subscription(stateFromStores2[35]).fetchSubscriptions();
      validElement("start_fetching_update");
      const obj = subscription(stateFromStores2[35]);
    }
    if (tmp16) {
      validElement("fetching_update");
    }
    if (!tmp19) {
      validElement(null);
    }
  }, items4);
  tmp14 = importDefault(dependencyMap[36])(() => subscription(stateFromStores2[37]).getNewAnalyticsLoadId());
  const items5 = [subscription, first2, analyticsLocations, tmp14];
  const memo = React.useMemo(() => {
    if ("start_fetching_update" !== first2) {
      if ("fetching_update" !== first2) {
        let obj = {
          loadId: tmp14,
          onSuccessCallback(result_count) {
                closure_31.log("Successfully opened mobile web Nitro Management page");
                let obj = callback(closure_2[39]);
                obj = { load_id: closure_7 };
                const items = [...closure_1, callback(closure_2[30]).MOBILE_APP_MANAGE_PREMIUM_SUBSCRIPTION_CTA];
                obj.location_stack = items;
                obj.custom_checkout_flow = constants2.MOBILE_WEB_REDIRECT_CHECKOUT;
                obj.track(constants.MOBILE_OPEN_STANDALONE_MANAGE_SUBSCRIPTION_PAGE, obj);
                callback2("opening_mobile_web");
              }
        };
        const externalManagementMessage = subscription(stateFromStores2[38]).getExternalManagementMessage(subscription, obj);
        let tmp6 = null;
        if (null != externalManagementMessage) {
          let tmp2 = externalManagementMessage;
          if (!validElement.isValidElement(externalManagementMessage)) {
            obj = { children: externalManagementMessage };
            tmp2 = callback(subscription(stateFromStores2[23]).Text, obj);
          }
          tmp6 = tmp2;
        }
        return tmp6;
      }
    }
    return callback(closure_10, { size: "small" });
  }, items5);
  [tmp17, closure_8] = callback3(React.useState(false), 2);
  if (null == first) {
    return null;
  } else {
    let planIdFromInvoice = importDefault;
    planIdFromInvoice = dependencyMap;
    planIdFromInvoice = importDefault(dependencyMap[40]).getPlanIdFromInvoice(subscription, first);
    const obj58 = importDefault(dependencyMap[40]);
    planIdFromInvoice = importDefault(dependencyMap[40]).getStatusFromInvoice(subscription, first);
    planIdFromInvoice = closure_28;
    planIdFromInvoice = closure_28[planIdFromInvoice];
    planIdFromInvoice = importDefault(dependencyMap[41])(null != planIdFromInvoice, "missing subscription planInfo");
    const obj59 = importDefault(dependencyMap[40]);
    const obj1 = { subscription, planId: planIdFromInvoice };
    let formatRateResult = null;
    if (null != stateFromStores) {
      let obj11 = arg1(dependencyMap[42]);
      formatRateResult = obj11.formatRate(stateFromStores.priceString, planIdFromInvoice.interval, planIdFromInvoice.intervalCount);
    }
    obj1.price = formatRateResult;
    obj1.includePremiumGuilds = true;
    const planDescription = importDefault(dependencyMap[40]).getPlanDescription(obj1);
    if (planIdFromInvoice !== constants2.CANCELED) {
      planIdFromInvoice = constants2;
      if (planIdFromInvoice !== constants2.PAUSE_PENDING) {
        planIdFromInvoice = constants2;
        if (planIdFromInvoice !== constants2.PAST_DUE) {
          if (null != subscription.renewalMutations) {
            const _Date = Date;
            const date = new Date(subscription.currentPeriodEnd);
            let result = date;
            if (!subscription.isPurchasedExternally) {
              let obj26 = arg1(dependencyMap[40]);
              result = obj26.extendDateWithUnconsumedFractionalPremium(date, fractionalPremiumInfo.unactivatedUnits);
            }
            obj2 = { style: tmp2.container };
            const obj3 = { style: tmp2.mutationWarningContainer };
            obj4 = { size: "md" };
            const items6 = [callback4(arg1(dependencyMap[52]).AnnouncementsWarningIcon, obj4), ];
            obj5 = { style: tmp2.mutationText };
            const intl6 = arg1(dependencyMap[24]).intl;
            obj6 = {};
            if (!subscription.hasExternalPlanChange) {
              if (!isNoneSubscription(subscription.renewalMutations.planId)) {
                let obj32 = importDefault(dependencyMap[40]);
                let displayName = obj32.getDisplayName(subscription.renewalMutations.planId);
              }
              obj6.planName = displayName;
              obj6.date = result;
              obj5.children = intl6.format(tmp76, obj6);
              items6[1] = tmp75(arg1(dependencyMap[23]).Text, obj5);
              obj3.children = items6;
              const items7 = [tmp70(tmp71, obj3), , ];
              obj7 = { premiumType: closure_27.TIER_2, hideButton: true, isPremiumGroup, premiumGroupRole };
              items7[1] = callback4(importDefault(dependencyMap[53]), obj7);
              obj8 = { style: tmp2.extraInfoContainer };
              obj9 = { handleMessageFocus: "/assets/images/native/premium/illustrations", enableHome: 51, afterMs: 36 };
              const intl7 = arg1(dependencyMap[24]).intl;
              obj9.children = intl7.string(arg1(dependencyMap[24]).t.YCrcPL);
              const items8 = [callback4(arg1(dependencyMap[23]).Text, obj9), ];
              obj10 = { style: tmp2.extraInfoTextContainer };
              obj11 = {};
              const intl8 = arg1(dependencyMap[24]).intl;
              obj11.children = intl8.string(arg1(dependencyMap[24]).t.MTG+3O);
              const items9 = [callback4(arg1(dependencyMap[23]).Text, obj11), , ];
              const obj12 = {};
              let obj40 = arg1(dependencyMap[50]);
              obj12.children = obj40.getBillingInformationStringNative(subscription, first, first1);
              items9[1] = callback4(arg1(dependencyMap[23]).Text, obj12);
              items9[2] = null != memo && memo;
              obj10.children = items9;
              items8[1] = callback5(closure_8, obj10);
              obj8.children = items8;
              items7[2] = callback5(closure_8, obj8);
              obj2.children = items7;
              return tmp68(tmp69, obj2);
            }
            let obj33 = arg1(dependencyMap[40]);
            displayName = obj33.getExternalPlanDisplayName(subscription.renewalMutations);
            const tmp68 = callback5;
            const tmp69 = closure_8;
            const tmp70 = callback5;
            const tmp71 = closure_8;
            const tmp75 = callback4;
          } else {
            const obj13 = { style: tmp2.container };
            const obj14 = { style: tmp2.pillAndCardContainer };
            planIdFromInvoice = callback5;
            planIdFromInvoice = closure_8;
            planIdFromInvoice = callback5;
            planIdFromInvoice = closure_8;
            if (tmp8) {
              const obj15 = { style: tmp2.pillPosition, children: callback4(arg1(dependencyMap[54]).PremiumReferralTrialPill, {}) };
              tmp8 = callback4(closure_8, obj15);
            }
            const items10 = [tmp8, ];
            const obj16 = { premiumType: closure_27.TIER_2, forFractionalPremium: fractionalPremiumInfo.fractionalState !== constants3.NONE, hideButton: true, isPremiumGroup, premiumGroupRole };
            items10[1] = callback4(importDefault(dependencyMap[53]), obj16);
            obj14.children = items10;
            const items11 = [planIdFromInvoice(planIdFromInvoice, obj14), ];
            const obj17 = { style: tmp2.extraInfoContainer };
            const obj18 = { hasMaxConnections: "/assets/images/native/premium/illustrations", isBoostOnlySubscription: 51 };
            const intl = arg1(dependencyMap[24]).intl;
            obj18.children = intl.string(arg1(dependencyMap[24]).t.YCrcPL);
            const items12 = [callback4(arg1(dependencyMap[23]).Text, obj18), , , ];
            const obj19 = { style: tmp2.extraInfoTextContainer };
            const obj20 = {};
            if (null != memo) {
              const intl3 = arg1(dependencyMap[24]).intl;
              let stringResult = intl3.string(arg1(dependencyMap[24]).t.MTG+3O);
            } else {
              const intl2 = arg1(dependencyMap[24]).intl;
              const obj21 = {
                onSwitchPlans() {
                              return subscription(stateFromStores2[49]).handleManageSubscription(subscription, closure_3, analyticsLocations);
                            },
                onCancel() {
                              return subscription(stateFromStores2[49]).onCancelClick(subscription, analyticsLocations);
                            }
              };
              stringResult = intl2.format(arg1(dependencyMap[24]).t.fvk30i, obj21);
            }
            obj20.children = stringResult;
            const items13 = [callback4(arg1(dependencyMap[55]).TextWithIOSLinkWorkaround, obj20), , ];
            const obj22 = { subscription };
            items13[1] = callback4(arg1(dependencyMap[51]).GoogleManagementLink, obj22);
            items13[2] = null != memo && memo;
            obj19.children = items13;
            items12[1] = callback5(closure_8, obj19);
            const obj23 = { hasMaxConnections: "/assets/images/native/premium/illustrations", isBoostOnlySubscription: 51 };
            const intl4 = arg1(dependencyMap[24]).intl;
            obj23.children = intl4.string(arg1(dependencyMap[24]).t.Sb6wI1);
            items12[2] = callback4(arg1(dependencyMap[23]).Text, obj23);
            const obj24 = {};
            const items14 = [tmp2.extraInfoTextContainer, ];
            let obj25 = { gap: 4 };
            items14[1] = obj25;
            obj24.style = items14;
            obj26 = { hasMaxConnections: false, isBoostOnlySubscription: false };
            const intl5 = arg1(dependencyMap[24]).intl;
            obj26.children = intl5.string(arg1(dependencyMap[24]).t.KXQjfc);
            const items15 = [callback4(arg1(dependencyMap[23]).Text, obj26), ];
            const obj27 = {};
            obj25 = arg1(dependencyMap[50]);
            obj27.children = obj25.getBillingInformationStringNative(subscription, first, first1, false, fractionalPremiumInfo);
            items15[1] = callback4(arg1(dependencyMap[23]).Text, obj27);
            obj24.children = items15;
            items12[3] = callback5(closure_8, obj24);
            obj17.children = items12;
            items11[1] = callback5(closure_8, obj17);
            obj13.children = items11;
            return planIdFromInvoice(planIdFromInvoice, obj13);
          }
        }
      }
    }
    const obj28 = { style: tmp2.container };
    const obj29 = { style: tmp2.errorHeader };
    const obj30 = {};
    planIdFromInvoice = dependencyMap;
    planIdFromInvoice = tmp14;
    planIdFromInvoice = importDefault;
    if (isThemeLightResult) {
      planIdFromInvoice = planIdFromInvoice[43];
    } else {
      planIdFromInvoice = planIdFromInvoice[44];
    }
    obj30.source = planIdFromInvoice(planIdFromInvoice);
    obj30.style = tmp2.headerBackground;
    const obj31 = { style: tmp2.logoContainer };
    planIdFromInvoice = callback4;
    planIdFromInvoice = stateFromStores3;
    obj32 = {};
    planIdFromInvoice = dependencyMap;
    planIdFromInvoice = callback5;
    planIdFromInvoice = closure_8;
    planIdFromInvoice = importDefault;
    obj32.source = importDefault(dependencyMap[45]);
    obj32.style = tmp2.wumpusImg;
    const items16 = [callback4(stateFromStores3, obj32), ];
    obj33 = {};
    planIdFromInvoice = dependencyMap;
    planIdFromInvoice = callback4;
    planIdFromInvoice = stateFromStores3;
    if (isThemeLightResult) {
      planIdFromInvoice = planIdFromInvoice[46];
    } else {
      planIdFromInvoice = planIdFromInvoice[47];
    }
    obj33.source = planIdFromInvoice(planIdFromInvoice);
    obj33.style = tmp2.logoStyle;
    items16[1] = planIdFromInvoice(planIdFromInvoice, obj33);
    obj31.children = items16;
    const items17 = [planIdFromInvoice(planIdFromInvoice, obj31), ];
    planIdFromInvoice = callback4;
    planIdFromInvoice = arg1;
    planIdFromInvoice = dependencyMap;
    const obj34 = { hasMaxConnections: null, isBoostOnlySubscription: "153e24032a5a8790888aef41caaf4b2c", children: planDescription };
    items17[1] = callback4(arg1(dependencyMap[23]).Text, obj34);
    obj30.children = items17;
    const items18 = [callback5(planIdFromInvoice, obj30), ];
    let isOnPlatformMatchingExternalPaymentGateway = subscription.isOnPlatformMatchingExternalPaymentGateway;
    if (isOnPlatformMatchingExternalPaymentGateway) {
      planIdFromInvoice = callback4;
      planIdFromInvoice = closure_8;
      const obj35 = { style: tmp2.errorHeaderPrimaryButton };
      planIdFromInvoice = callback4;
      planIdFromInvoice = arg1;
      planIdFromInvoice = dependencyMap;
      const obj36 = {};
      const intl9 = arg1(dependencyMap[24]).intl;
      obj36.text = intl9.string(arg1(dependencyMap[24]).t.lTCb0c);
      planIdFromInvoice = callback2;
      // CreateGeneratorClosureLongIndex (0x67)
      obj36.onPress = callback2(planIdFromInvoice);
      obj36.loading = tmp17;
      obj36.disabled = tmp17;
      obj35.children = callback4(arg1(dependencyMap[48]).Button, obj36);
      isOnPlatformMatchingExternalPaymentGateway = callback4(closure_8, obj35);
    }
    items18[1] = isOnPlatformMatchingExternalPaymentGateway;
    obj29.children = items18;
    const items19 = [callback5(closure_8, obj29), ];
    const obj37 = { style: tmp2.extraInfoContainer };
    planIdFromInvoice = callback4;
    planIdFromInvoice = arg1;
    planIdFromInvoice = dependencyMap;
    planIdFromInvoice = callback5;
    planIdFromInvoice = closure_8;
    const obj38 = { handleMessageFocus: "/assets/images/native/premium/illustrations", enableHome: 51, afterMs: 36 };
    const intl10 = arg1(dependencyMap[24]).intl;
    obj38.children = intl10.string(arg1(dependencyMap[24]).t.YCrcPL);
    const items20 = [callback4(arg1(dependencyMap[23]).Text, obj38), ];
    const obj39 = { style: tmp2.extraInfoTextContainer };
    planIdFromInvoice = callback4;
    planIdFromInvoice = callback5;
    planIdFromInvoice = closure_8;
    obj40 = {};
    const intl11 = arg1(dependencyMap[24]).intl;
    obj40.children = intl11.string(arg1(dependencyMap[24]).t.MTG+3O);
    const items21 = [callback4(arg1(dependencyMap[23]).Text, obj40), , , ];
    planIdFromInvoice = callback4;
    const obj41 = {};
    const obj60 = importDefault(dependencyMap[40]);
    const tmp95 = callback5;
    const tmp96 = closure_8;
    const tmp97 = callback5;
    const tmp98 = closure_8;
    const tmp99 = callback5;
    obj41.children = arg1(dependencyMap[50]).getBillingInformationStringNative(subscription, first, first1);
    items21[1] = callback4(arg1(dependencyMap[23]).Text, obj41);
    planIdFromInvoice = callback4;
    const obj42 = { subscription };
    items21[2] = callback4(arg1(dependencyMap[51]).GoogleManagementLink, obj42);
    items21[3] = null != memo && memo;
    obj39.children = items21;
    items20[1] = planIdFromInvoice(planIdFromInvoice, obj39);
    obj37.children = items20;
    items19[1] = planIdFromInvoice(planIdFromInvoice, obj37);
    obj28.children = items19;
    return tmp95(tmp96, obj28);
  }
  const tmp16 = callback3(React.useState(false), 2);
}
function FractionalPremiumCredits(durationText) {
  let activationDate;
  let fractionalPremiumInfo;
  let hasUnactivatedUnits;
  let showPremiumFeaturesCard;
  let unactivatedHoursString;
  ({ fractionalPremiumInfo, showPremiumFeaturesCard, hasUnactivatedUnits, unactivatedHoursString, activationDate } = durationText);
  const tmp = callback8(importDefault(dependencyMap[27])("FractionalPremiumCredits"));
  let obj = { style: tmp.container };
  if (showPremiumFeaturesCard) {
    obj = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, premiumType: closure_27.TIER_2 };
    showPremiumFeaturesCard = callback4(importDefault(dependencyMap[53]), obj);
  }
  const items = [showPremiumFeaturesCard, ];
  obj = { style: tmp.extraInfoContainer };
  const obj1 = { hasMaxConnections: "/assets/images/native/premium/illustrations", isBoostOnlySubscription: 51 };
  const intl = arg1(dependencyMap[24]).intl;
  obj1.children = intl.string(arg1(dependencyMap[24]).t.Obre8v);
  const items1 = [callback4(arg1(dependencyMap[23]).Text, obj1), , ];
  const obj2 = { hasMaxConnections: false, isBoostOnlySubscription: false };
  const intl2 = arg1(dependencyMap[24]).intl;
  const obj3 = {};
  let obj6 = importDefault(dependencyMap[56]);
  obj3.helpCenterLink = obj6.getArticleURL(constants.FRACTIONAL_PREMIUM_ABOUT);
  obj2.children = intl2.format(arg1(dependencyMap[24]).t.AYGoBn, obj3);
  items1[1] = callback4(arg1(dependencyMap[55]).TextWithIOSLinkWorkaround, obj2);
  const obj4 = {};
  const obj5 = { style: tmp.fpRowStart };
  obj6 = { style: tmp.fpRowIcon };
  const obj7 = {};
  const obj8 = { padding: 6, borderRadius: importDefault(dependencyMap[19]).radii.sm };
  obj7.style = obj8;
  obj7.start = {};
  obj7.end = {};
  const items2 = [importDefault(dependencyMap[19]).unsafe_rawColors.GUILD_BOOSTING_BLUE, importDefault(dependencyMap[19]).unsafe_rawColors.GUILD_BOOSTING_PURPLE];
  obj7.colors = items2;
  const obj9 = {};
  const obj10 = { color: importDefault(dependencyMap[19]).unsafe_rawColors.WHITE, source: importDefault(dependencyMap[60]), size: arg1(dependencyMap[59]).IconSizes.LARGE };
  obj9.children = callback4(arg1(dependencyMap[59]).Icon, obj10);
  obj7.children = callback4(closure_8, obj9);
  obj6.children = callback4(importDefault(dependencyMap[58]), obj7);
  const items3 = [callback4(closure_8, obj6), ];
  const obj11 = { style: tmp.fpRowContent };
  const obj12 = { variant: "text-sm/semibold", style: tmp.fpUnitsTitle };
  const intl3 = arg1(dependencyMap[24]).intl;
  obj12.children = intl3.string(arg1(dependencyMap[24]).t.DFMPWS);
  const items4 = [callback4(arg1(dependencyMap[23]).Text, obj12), ];
  if (hasUnactivatedUnits) {
    if (fractionalPremiumInfo.fractionalState === constants3.NONE) {
      const obj13 = { variant: "text-sm/medium", children: unactivatedHoursString };
      let tmp16 = callback4(arg1(dependencyMap[23]).Text, obj13);
    }
    items4[1] = tmp16;
    obj11.children = items4;
    items3[1] = closure_30(closure_8, obj11);
    obj5.children = items3;
    const items5 = [tmp10(arg1(dependencyMap[57]).Card, obj5), , ];
    const obj14 = { style: tmp.dividerContainer };
    const obj15 = { style: tmp.divider };
    obj14.children = callback4(closure_8, obj15);
    items5[1] = callback4(closure_8, obj14);
    const obj16 = { accessibilityRole: 24, resizeMode: 0, "Bool(false)": 72, "Bool(false)": 900, style: tmp.fpRowEnd };
    const obj17 = { style: tmp.fpRowContent };
    if (hasUnactivatedUnits) {
      if (fractionalPremiumInfo.fractionalState === constants3.NONE) {
        const obj18 = {};
        const obj19 = { variant: "text-md/semibold" };
        const intl6 = arg1(dependencyMap[24]).intl;
        obj19.children = intl6.string(arg1(dependencyMap[24]).t.hT6i/0);
        const items6 = [callback4(arg1(dependencyMap[23]).Text, obj19), ];
        let tmp40 = undefined !== activationDate;
        if (tmp40) {
          const obj20 = {};
          const intl7 = arg1(dependencyMap[24]).intl;
          const obj21 = { activateDate: activationDate };
          obj20.children = intl7.format(arg1(dependencyMap[24]).t.0Vwb/l, obj21);
          tmp40 = callback4(arg1(dependencyMap[23]).Text, obj20);
        }
        items6[1] = tmp40;
        obj18.children = items6;
        let tmp35Result = closure_30(closure_8, obj18);
        const tmp35 = closure_30;
        const tmp36 = closure_8;
      }
      const items7 = [tmp35Result, ];
      if (hasUnactivatedUnits) {
        if (fractionalPremiumInfo.fractionalState === constants3.NONE) {
          const obj22 = { style: tmp.fpUnactivatedHoursPill };
          const obj23 = { variant: "text-sm/medium", style: tmp.fpTimeRemainingText, children: unactivatedHoursString };
          obj22.children = callback4(arg1(dependencyMap[23]).Text, obj23);
          let tmp50 = callback4(closure_8, obj22);
        }
        items7[1] = tmp50;
        obj17.children = items7;
        obj16.children = tmp28(tmp29, obj17);
        items5[2] = tmp24(tmp27, obj16);
        obj4.children = items5;
        items1[2] = tmp10(closure_8, obj4);
        obj.children = items1;
        items[1] = closure_30(closure_8, obj);
        obj.children = items;
        return closure_30(closure_8, obj);
      }
      const obj24 = { style: tmp.fpTimeRemainingPill };
      const obj25 = { variant: "text-sm/medium", style: tmp.fpTimeRemainingText, children: durationText.durationText };
      obj24.children = callback4(arg1(dependencyMap[23]).Text, obj25);
      tmp50 = callback4(closure_8, obj24);
    }
    const obj26 = { variant: "text-md/semibold", style: tmp.fpTimeRemaining };
    const intl5 = arg1(dependencyMap[24]).intl;
    obj26.children = intl5.string(arg1(dependencyMap[24]).t.3G0CTC);
    tmp35Result = callback4(arg1(dependencyMap[23]).Text, obj26);
    const tmp24 = callback4;
  }
  const obj27 = { variant: "text-sm/medium", style: tmp.fpUnitsStatusText };
  const intl4 = arg1(dependencyMap[24]).intl;
  obj27.children = intl4.string(arg1(dependencyMap[24]).t.B66Z+f);
  tmp16 = callback4(arg1(dependencyMap[23]).Text, obj27);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ Image: closure_6, ImageBackground: closure_7, View: closure_8, ScrollView: closure_9, ActivityIndicator: closure_10 } = arg1(dependencyMap[3]));
const isNoneSubscription = arg1(dependencyMap[4]).isNoneSubscription;
let closure_12 = importDefault(dependencyMap[5]);
let closure_13 = importDefault(dependencyMap[6]);
let closure_14 = importDefault(dependencyMap[7]);
let closure_15 = importDefault(dependencyMap[8]);
let closure_16 = importDefault(dependencyMap[9]);
let closure_17 = importDefault(dependencyMap[10]);
let closure_18 = importDefault(dependencyMap[11]);
const tmp2 = arg1(dependencyMap[3]);
({ AnalyticEvents: closure_19, HelpdeskArticles: closure_20, SubscriptionStatusTypes: closure_21, UserSettingsSections: closure_22 } = arg1(dependencyMap[12]));
const getTableDividerWidth = arg1(dependencyMap[13]).getTableDividerWidth;
const CustomCheckoutFlow = arg1(dependencyMap[14]).CustomCheckoutFlow;
const tmp3 = arg1(dependencyMap[12]);
({ FractionalPremiumStates: closure_25, PREMIUM_SUBSCRIPTION_APPLICATION: closure_26, PremiumTypes: closure_27, SubscriptionPlanInfo: closure_28 } = arg1(dependencyMap[15]));
const tmp4 = arg1(dependencyMap[15]);
({ jsx: closure_29, jsxs: closure_30 } = arg1(dependencyMap[16]));
let importDefaultResult = importDefault(dependencyMap[17]);
importDefaultResult = new importDefaultResult("PremiumManagePlan");
let obj = arg1(dependencyMap[18]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[19]).colors.BACKGROUND_BASE_LOW, height: "100%" };
obj.background = obj;
const tmp5 = arg1(dependencyMap[16]);
obj.container = { display: "flex", paddingHorizontal: importDefault(dependencyMap[19]).modules.mobile.TABLE_ROW_PADDING };
obj.contentContainer = {};
obj.topBlur = { "Bool(true)": "PREMIUM_TIER_2_DISCOUNT_ENDING", "Bool(true)": "%RegExpPrototype%", "Bool(true)": "MiniaturesSpotIllustration", "Bool(true)": "%Reflect%", "Bool(true)": "isArray" };
obj.accountCredit = { paddingHorizontal: 16 };
const obj1 = { display: "flex", paddingHorizontal: importDefault(dependencyMap[19]).modules.mobile.TABLE_ROW_PADDING };
obj.accountCreditList = { borderRadius: importDefault(dependencyMap[19]).radii.sm, backgroundColor: importDefault(dependencyMap[19]).colors.BACKGROUND_SURFACE_HIGH };
obj.featuresTable = { paddingTop: 16 };
obj.subscriptionHeader = {};
obj.billingInfo = {};
let closure_32 = obj.createStyles(obj);
const obj2 = { borderRadius: importDefault(dependencyMap[19]).radii.sm, backgroundColor: importDefault(dependencyMap[19]).colors.BACKGROUND_SURFACE_HIGH };
const obj3 = { headerContainer: {} };
const obj4 = { "Null": null, "Null": "heading-lg/extrabold", "Null": "header", "Null": "text-sm/semibold", <string:903611347>: "text-muted", borderRadius: importDefault(dependencyMap[19]).radii.lg };
obj3.backButtonWrapper = obj4;
let closure_33 = arg1(dependencyMap[18]).createStyles(obj3);
const obj6 = arg1(dependencyMap[18]);
let closure_34 = arg1(dependencyMap[18]).createStyles((arg0) => {
  const tmp = getTableDividerWidth(arg0);
  let obj = { container: {} };
  obj = { backgroundColor: importDefault(dependencyMap[19]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[19]).radii.lg, overflow: "hidden" };
  obj.errorHeader = obj;
  obj.headerBackground = { padding: 16 };
  obj.logoContainer = { -9223372036854775808: "<string:1107297123>", "Null": "n\u00E4stan ett \u00E5r", "Null": "n\u00E4stan {{count}} \u00E5r" };
  obj.wumpusImg = {};
  obj.logoStyle = {};
  obj.errorHeaderPrimaryButton = {};
  obj.extraInfoContainer = { jsx: null, Path: null, uri: null, body: null };
  obj = { withSpring: 1, disabled: "center", accessible: "center", mn: "hidden", ks: "100%", borderRadius: importDefault(dependencyMap[19]).radii.sm, backgroundColor: importDefault(dependencyMap[19]).colors.BACKGROUND_SURFACE_HIGH };
  obj.extraInfoTextContainer = obj;
  obj.mutationWarningContainer = { borderRadius: importDefault(dependencyMap[19]).radii.lg, backgroundColor: importDefault(dependencyMap[19]).colors.BACKGROUND_SURFACE_HIGH };
  obj.mutationText = { flex: 1 };
  const obj1 = { borderRadius: importDefault(dependencyMap[19]).radii.lg, backgroundColor: importDefault(dependencyMap[19]).colors.BACKGROUND_SURFACE_HIGH };
  obj.fpTimeRemaining = { color: importDefault(dependencyMap[19]).colors.TEXT_BRAND };
  const obj2 = { color: importDefault(dependencyMap[19]).colors.TEXT_BRAND };
  obj.fpTimeRemainingPill = { borderRadius: importDefault(dependencyMap[19]).radii.lg, backgroundColor: importDefault(dependencyMap[19]).colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE, paddingVertical: 4, paddingHorizontal: 8 };
  const obj3 = { borderRadius: importDefault(dependencyMap[19]).radii.lg, backgroundColor: importDefault(dependencyMap[19]).colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE, paddingVertical: 4, paddingHorizontal: 8 };
  obj.fpUnactivatedHoursPill = { borderRadius: importDefault(dependencyMap[19]).radii.lg, backgroundColor: importDefault(dependencyMap[19]).colors.BACKGROUND_MOD_STRONG, paddingVertical: 4, paddingHorizontal: 8 };
  const obj4 = { borderRadius: importDefault(dependencyMap[19]).radii.lg, backgroundColor: importDefault(dependencyMap[19]).colors.BACKGROUND_MOD_STRONG, paddingVertical: 4, paddingHorizontal: 8 };
  obj.fpTimeRemainingText = { color: importDefault(dependencyMap[19]).colors.WHITE };
  const obj5 = { color: importDefault(dependencyMap[19]).colors.WHITE };
  obj.fpUnitsTitle = { color: importDefault(dependencyMap[19]).colors.MOBILE_TEXT_HEADING_PRIMARY };
  const obj6 = { color: importDefault(dependencyMap[19]).colors.MOBILE_TEXT_HEADING_PRIMARY };
  obj.fpUnitsStatusText = { color: importDefault(dependencyMap[19]).colors.TEXT_BRAND };
  const obj7 = { color: importDefault(dependencyMap[19]).colors.TEXT_BRAND };
  obj.fpRowStart = { padding: importDefault(dependencyMap[19]).modules.mobile.TABLE_ROW_PADDING, minHeight: importDefault(dependencyMap[19]).modules.mobile.TABLE_ROW_HEIGHT, flexDirection: "row", alignItems: "center", backgroundColor: importDefault(dependencyMap[19]).colors.BACKGROUND_SURFACE_HIGH };
  const obj8 = { padding: importDefault(dependencyMap[19]).modules.mobile.TABLE_ROW_PADDING, minHeight: importDefault(dependencyMap[19]).modules.mobile.TABLE_ROW_HEIGHT, flexDirection: "row", alignItems: "center", backgroundColor: importDefault(dependencyMap[19]).colors.BACKGROUND_SURFACE_HIGH };
  obj.fpRowIcon = { marginEnd: importDefault(dependencyMap[19]).modules.mobile.TABLE_ROW_PADDING };
  obj.fpRowContent = {};
  const obj9 = { marginEnd: importDefault(dependencyMap[19]).modules.mobile.TABLE_ROW_PADDING };
  obj.fpRowEnd = { backgroundColor: importDefault(dependencyMap[19]).colors.BACKGROUND_BASE_LOWEST };
  const obj11 = {};
  let CARD_PRIMARY_BG;
  if (!arg0) {
    CARD_PRIMARY_BG = arg1(dependencyMap[25]).CARD_PRIMARY_BG;
  }
  obj11.backgroundColor = CARD_PRIMARY_BG;
  obj11.height = tmp;
  obj.dividerContainer = obj11;
  const obj12 = { height: tmp };
  if (arg0) {
    let DIVIDER_BACKGROUND = importDefault(dependencyMap[19]).colors.BORDER_SUBTLE;
  } else {
    DIVIDER_BACKGROUND = arg1(dependencyMap[26]).DIVIDER_BACKGROUND;
  }
  obj12.backgroundColor = DIVIDER_BACKGROUND;
  obj.divider = obj12;
  obj.pillAndCardContainer = { position: "relative" };
  obj.pillPosition = {};
  return obj;
});
const obj9 = arg1(dependencyMap[18]);
const result = arg1(dependencyMap[75]).fileFinishedImporting("modules/user_settings/premium/native/PremiumManagePlan.tsx");

export default function PremiumManagePlan() {
  const tmp = callback6();
  const rect = importDefault(dependencyMap[61])();
  const top = rect.top;
  let obj = arg1(dependencyMap[62]);
  const youBarSettingsOutsideSafeAreaTop = obj.useYouBarSettingsOutsideSafeAreaTop();
  let obj1 = arg1(dependencyMap[20]);
  const navigation = obj1.useNavigation();
  const arg1 = navigation;
  const items = [navigation];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, items);
  let obj2 = arg1(dependencyMap[31]);
  const items1 = [closure_14];
  const stateFromStores = obj2.useStateFromStores(items1, () => closure_14.isLoadedForPremiumSKUs());
  let obj3 = arg1(dependencyMap[31]);
  const items2 = [closure_15];
  const tmp6 = callback3(obj3.useStateFromStoresArray(items2, () => {
    const items = [closure_15.getPremiumTypeSubscription(), closure_15.hasFetchedSubscriptions()];
    return items;
  }), 2);
  const first = tmp6[0];
  let obj4 = arg1(dependencyMap[31]);
  const items3 = [closure_12];
  const stateFromStores1 = obj4.useStateFromStores(items3, () => currentUser.getCurrentUser());
  const tmp9 = importDefault(dependencyMap[63])({ forceFetch: true });
  importDefault(dependencyMap[64])(() => {
    let isSubscriptionFetching = closure_15.hasFetchedSubscriptions();
    if (!isSubscriptionFetching) {
      isSubscriptionFetching = obj.isSubscriptionFetching;
    }
    if (!isSubscriptionFetching) {
      const obj = navigation(closure_2[35]);
      const subscriptions = obj.fetchSubscriptions();
    }
    let result = closure_14.isLoadedForPremiumSKUs();
    if (!result) {
      result = closure_14.isFetchingForPremiumSKUs();
    }
    if (!result) {
      const premiumSubscriptionPlans = navigation(closure_2[65]).fetchPremiumSubscriptionPlans();
      const obj2 = navigation(closure_2[65]);
    }
  });
  let obj6 = arg1(dependencyMap[66]);
  let isInReverseTrial = obj6.useIsInReverseTrial();
  const tmp12 = importDefault(dependencyMap[67]);
  let obj7 = arg1(dependencyMap[40]);
  const unactivatedFractionalPremiumDurationString = obj7.getUnactivatedFractionalPremiumDurationString(tmp9);
  if (null !== first) {
    if (!first.isPurchasedExternally) {
      const currentPeriodEnd = first.currentPeriodEnd;
    }
  }
  let tmp15 = tmp9.fractionalState !== constants3.NONE;
  if (tmp15) {
    let tmp16 = isInReverseTrial;
    if (isInReverseTrial) {
      tmp16 = tmp9.unactivatedUnits.length <= 0;
    }
    tmp15 = !tmp16;
  }
  if (!tmp15) {
    tmp15 = tmp14;
  }
  let obj8 = arg1(dependencyMap[32]);
  const importDefault = React.useRef(false);
  const callback = React.useCallback((nativeEvent) => {
    let obj = navigation(closure_2[68]);
    obj = { nativeEvent: nativeEvent.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom: closure_1 };
    return obj.trackIfScrolledToBottom(obj);
  }, []);
  let obj9 = arg1(dependencyMap[31]);
  const items4 = [closure_16];
  let tmp19 = null != first;
  const stateFromStores2 = obj9.useStateFromStores(items4, () => {
    let forApplication = forApplication.getForApplication(closure_26);
    if (null == forApplication) {
      const _Set = Set;
      forApplication = new Set();
    }
    return forApplication;
  }, [], arg1(dependencyMap[69]).areSetsEqual);
  if (tmp19) {
    tmp19 = !first.isBoostOnly;
  }
  if (tmp19) {
    tmp19 = stateFromStores;
  }
  if (tmp19) {
    tmp19 = tmp8;
  }
  let tmp20 = null != first && first.isBoostOnly && stateFromStores && tmp8;
  let premiumGroupRole;
  if (null != stateFromStores1) {
    premiumGroupRole = stateFromStores1.premiumGroupRole;
  }
  let result;
  if (null != stateFromStores1) {
    result = stateFromStores1.isPremiumWithPremiumGroup();
  }
  obj = { style: tmp.background };
  obj = { blurAmount: 0.2 };
  const items5 = [tmp.topBlur, ];
  obj1 = {};
  let num = 0;
  const tmp12Result = importDefault(dependencyMap[67])(tmp9.endsAt, arg1(dependencyMap[67]).CountDownMessageTypes.SHORT_TIME);
  const tmp23 = callback5;
  const tmp24 = closure_8;
  const tmp25 = callback4;
  if (!youBarSettingsOutsideSafeAreaTop) {
    num = top;
  }
  obj1.height = num;
  items5[1] = obj1;
  obj.style = items5;
  obj.blurTheme = obj8.useThemeContext().theme;
  const items6 = [tmp25(importDefault(dependencyMap[70]), obj), ];
  obj2 = {};
  const items7 = [tmp.container, ];
  obj3 = {};
  let num2 = 16;
  if (!youBarSettingsOutsideSafeAreaTop) {
    num2 = top;
  }
  obj3.paddingTop = num2;
  obj3.paddingBottom = rect.bottom;
  items7[1] = obj3;
  obj2.contentContainerStyle = items7;
  obj2.onScrollEndDrag = callback;
  obj2.onMomentumScrollEnd = callback;
  obj2.scrollEventThrottle = 0;
  const items8 = [callback4(ManagePlanHeader, {}), ];
  obj4 = { style: tmp.contentContainer };
  let tmp31 = tmp19;
  if (tmp19) {
    const obj5 = { subscription: first, fractionalPremiumInfo: tmp9, isPremiumGroup: result, premiumGroupRole };
    tmp31 = callback4(SubscriptionAndBillingInfo, obj5);
  }
  const items9 = [tmp31, , , , , , ];
  if (isInReverseTrial) {
    obj6 = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, premiumType: closure_27.TIER_2 };
    isInReverseTrial = callback4(importDefault(dependencyMap[53]), obj6);
  }
  items9[1] = isInReverseTrial;
  let tmp38 = result;
  if (result) {
    tmp38 = !tmp19;
  }
  if (tmp38) {
    obj7 = { flexGrow: true, flexShrink: true, marginRight: true, flexGrow: true, premiumType: closure_27.TIER_2, premiumGroupRole };
    tmp38 = callback4(importDefault(dependencyMap[53]), obj7);
  }
  items9[2] = tmp38;
  if (tmp15) {
    obj8 = { fractionalPremiumInfo: tmp9, showPremiumFeaturesCard: tmp9.fractionalState === constants3.FP_ONLY, hasUnactivatedUnits: tmp14, unactivatedHoursString: unactivatedFractionalPremiumDurationString, activationDate: currentPeriodEnd, durationText: tmp12Result };
    tmp15 = callback4(FractionalPremiumCredits, obj8);
  }
  items9[3] = tmp15;
  if (tmp20) {
    obj9 = {};
    const obj10 = {
      style: tmp.subscriptionHeader,
      onClickManagePremiumGuild() {
          const routes = navigation.getState().routes;
          const found = routes.find((name) => name.name === constants.GUILD_BOOSTING);
          let obj = callback(closure_2[71]);
          obj.setSection(constants.GUILD_BOOSTING);
          obj = { destinationPane: constants.GUILD_BOOSTING };
          const result = navigation(closure_2[72]).trackUserSettingsPaneViewed(obj);
          if (null != found) {
            navigation.navigate(found);
          } else {
            navigation.push(constants.GUILD_BOOSTING);
          }
        },
      subscription: first
    };
    const items10 = [callback4(importDefault(dependencyMap[49]), obj10), ];
    const obj11 = { style: tmp.billingInfo, subscription: first };
    items10[1] = callback4(importDefault(dependencyMap[51]), obj11);
    obj9.children = items10;
    tmp20 = callback5(closure_8, obj9);
  }
  items9[4] = tmp20;
  const obj12 = { style: tmp.accountCredit, creditListContainerStyle: tmp.accountCreditList, currentSubscription: first, entitlements: stateFromStores2 };
  let tmp54 = null != result;
  const tmp26 = importDefault(dependencyMap[70]);
  const tmp27 = callback5;
  const tmp28 = closure_9;
  const tmp29 = callback5;
  const tmp30 = closure_8;
  const tmp52 = callback4;
  if (tmp54) {
    tmp54 = result;
  }
  obj12.hasPremiumGroup = tmp54;
  items9[5] = tmp52(importDefault(dependencyMap[73]), obj12);
  const obj13 = { style: tmp.featuresTable, variant: "nitro_home" };
  const tmp53 = importDefault(dependencyMap[73]);
  const intl = arg1(dependencyMap[24]).intl;
  obj13.titleOverride = intl.string(arg1(dependencyMap[24]).t.QXx2gs);
  obj13.isFractionalOnly = tmp9.fractionalState === constants3.FP_ONLY;
  obj13.isPremiumGroup = result;
  obj13.premiumGroupRole = premiumGroupRole;
  items9[6] = callback4(importDefault(dependencyMap[74]), obj13);
  obj4.children = items9;
  items8[1] = tmp29(tmp30, obj4);
  obj2.children = items8;
  items6[1] = tmp27(tmp28, obj2);
  obj.children = items6;
  return tmp23(tmp24, obj);
};
export const BACK_BUTTON_SIZE = 24;
