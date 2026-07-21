// Module ID: 13984
// Function ID: 106318
// Name: HeaderStatus
// Dependencies: []
// Exports: default

// Module 13984 (HeaderStatus)
function HeaderStatus(arg0) {
  let isCancelled;
  let isPastDue;
  let isTrial;
  ({ isCancelled, isTrial, isPastDue } = arg0);
  const tmp = callback4();
  if (isCancelled) {
    const intl3 = arg1(dependencyMap[9]).intl;
    let str = intl3.string(arg1(dependencyMap[9]).t.7uFZGt);
    let headerStatusPastDue = tmp.headerStatusCancel;
    let flag = true;
  } else if (isTrial) {
    const intl2 = arg1(dependencyMap[9]).intl;
    str = intl2.string(arg1(dependencyMap[9]).t.6anton);
    headerStatusPastDue = tmp.headerStatusTrial;
    flag = true;
  } else {
    str = "";
    flag = true;
    if (isPastDue) {
      const intl = arg1(dependencyMap[9]).intl;
      str = intl.string(arg1(dependencyMap[9]).t.uENdgb);
      headerStatusPastDue = tmp.headerStatusPastDue;
      flag = false;
    }
  }
  let tmp9Result = null;
  if ("" !== str) {
    let obj = {};
    const items = [tmp.headerStatusContainer, headerStatusPastDue];
    obj.style = items;
    obj = { variant: "text-xs/semibold" };
    let str3 = "text-overlay-dark";
    if (flag) {
      str3 = "text-overlay-light";
    }
    obj.color = str3;
    obj.children = str;
    obj.children = closure_11(arg1(dependencyMap[10]).Text, obj);
    tmp9Result = closure_11(View, obj);
    const tmp10 = View;
    const tmp11 = closure_11;
    const tmp9 = closure_11;
  }
  return tmp9Result;
}
function Header(arg0) {
  let expanded;
  let guild;
  let isCancelled;
  let isPastDue;
  let isTrial;
  let listing;
  let onToggleExpanded;
  ({ expanded, guild } = arg0);
  ({ isCancelled, isTrial, isPastDue, listing, onToggleExpanded } = arg0);
  const tmp = callback4();
  let obj = { style: tmp.header, onPress: onToggleExpanded };
  const items = [callback2(HeaderStatus, { isCancelled, isTrial, isPastDue }), ];
  obj = { style: tmp.headerContent };
  const items1 = [callback2(importDefault(dependencyMap[12]), { guild }), , ];
  obj = { style: tmp.headerTitlesContainer };
  const items2 = [callback2(arg1(dependencyMap[10]).Text, { children: listing.name }), callback2(arg1(dependencyMap[13]).Spacer, { size: 2 }), ];
  const obj2 = {};
  let name;
  if (null != guild) {
    name = guild.name;
  }
  if (null == name) {
    const intl = arg1(dependencyMap[9]).intl;
    name = intl.string(arg1(dependencyMap[9]).t.He+cmd);
  }
  obj2.children = name;
  items2[2] = callback2(arg1(dependencyMap[10]).Text, obj2);
  obj.children = items2;
  items1[1] = closure_12(View, obj);
  const obj3 = {};
  const items3 = [tmp.expandIcon, ];
  if (expanded) {
    expanded = tmp.expandIconExpanded;
  }
  items3[1] = expanded;
  obj3.style = items3;
  obj3.size = arg1(dependencyMap[13]).Icon.Sizes.MEDIUM;
  obj3.source = importDefault(dependencyMap[14]);
  items1[2] = callback2(arg1(dependencyMap[13]).Icon, obj3);
  obj.children = items1;
  items[1] = closure_12(View, obj);
  obj.children = items;
  return closure_12(arg1(dependencyMap[11]).PressableHighlight, obj);
}
function Separator() {
  const tmp = callback4();
  return callback2(importDefault(dependencyMap[15]), { style: callback4().separator, withoutMargins: true });
}
function CardBody(isTrial) {
  let isCancelled;
  let isPastDue;
  let memberSince;
  let nextRenewalDate;
  let nextRenewalLabel;
  let onCancelSubscription;
  let subscriptionPrice;
  isTrial = isTrial.isTrial;
  const arg1 = isTrial;
  const subscription = isTrial.subscription;
  const importDefault = subscription;
  const importAll = isTrial.guildId;
  let closure_4;
  let callback;
  let React;
  function _handleResubscribe() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = resubscribeSubscription(tmp);
    const _handleResubscribe = obj;
    return obj(...arguments);
  }
  ({ isCancelled, isPastDue, memberSince, nextRenewalDate, nextRenewalLabel, onCancelSubscription, subscriptionPrice } = isTrial);
  const tmp = callback4();
  const dependencyMap = tmp;
  let obj = importDefault(dependencyMap[19]);
  const resubscribeSubscription = obj.useResubscribeSubscription(subscription.id);
  closure_4 = resubscribeSubscription.resubscribeSubscription;
  const tmp3 = callback(React.useState(false), 2);
  let first = tmp3[0];
  callback = tmp3[1];
  React = importDefault(dependencyMap[20])().analyticsLocations;
  obj = { style: tmp.cardContent };
  let tmp7 = null;
  if (isPastDue) {
    obj = {};
    const obj1 = { style: tmp.paymentOverDueWarning };
    const obj2 = { color: importDefault(dependencyMap[8]).unsafe_rawColors.YELLOW_300 };
    const items = [callback2(arg1(dependencyMap[13]).WarningCircle, obj2), , ];
    const obj3 = { size: 8 };
    items[1] = callback2(arg1(dependencyMap[13]).Spacer, obj3);
    const obj4 = { hasMaxConnections: null, isBoostOnlySubscription: "43b86c9ce273868bacca6aeb06ae392b" };
    const intl = arg1(dependencyMap[9]).intl;
    obj4.children = intl.string(arg1(dependencyMap[9]).t.eaqlau);
    items[2] = callback2(arg1(dependencyMap[10]).Text, obj4);
    obj1.children = items;
    const items1 = [callback3(_handleResubscribe, obj1), ];
    const obj5 = { size: 12 };
    items1[1] = callback2(arg1(dependencyMap[13]).Spacer, obj5);
    obj.children = items1;
    tmp7 = callback3(closure_13, obj);
  }
  const items2 = [tmp7, , , , ];
  const obj6 = {};
  const intl2 = arg1(dependencyMap[9]).intl;
  obj6.title = intl2.string(arg1(dependencyMap[9]).t.dltUMH);
  let tmp20;
  if (isTrial) {
    tmp20 = importDefault(dependencyMap[23]);
  }
  obj6.icon = tmp20;
  let prop;
  if (isTrial) {
    prop = arg1(dependencyMap[24]).presentGuildRoleSubscriptionTrialTierMonthCost;
  }
  obj6.onPressIcon = prop;
  obj6.children = subscriptionPrice;
  items2[1] = callback2(importDefault(dependencyMap[22]), obj6);
  items2[2] = callback2(arg1(dependencyMap[13]).Spacer, { size: 16 });
  const obj7 = { style: tmp.cardRow };
  const items3 = [callback2(importDefault(dependencyMap[22]), { title: nextRenewalLabel, children: nextRenewalDate }), callback2(arg1(dependencyMap[13]).Spacer, { size: 8 }), ];
  const obj8 = {};
  const tmp18 = callback2;
  const tmp19 = importDefault(dependencyMap[22]);
  const tmp5 = callback3;
  const tmp6 = _handleResubscribe;
  const intl3 = arg1(dependencyMap[9]).intl;
  obj8.title = intl3.string(arg1(dependencyMap[9]).t.AOcwWB);
  obj8.children = memberSince;
  items3[2] = callback2(importDefault(dependencyMap[22]), obj8);
  obj7.children = items3;
  items2[3] = callback3(_handleResubscribe, obj7);
  const obj9 = { inset: true, titleViewStyle: tmp.manageSection };
  const intl4 = arg1(dependencyMap[9]).intl;
  obj9.title = intl4.string(arg1(dependencyMap[9]).t.4neDM+);
  const obj10 = { style: tmp.buttonsContainer };
  const obj11 = {
    renderGap() {
      return callback(_handleResubscribe, { style: tmp.buttonDivider });
    }
  };
  const obj12 = {};
  const tmp26 = importDefault(dependencyMap[22]);
  const tmp27 = callback2;
  const tmp28 = callback2;
  const tmp29 = _handleResubscribe;
  const tmp30 = callback3;
  const intl5 = arg1(dependencyMap[9]).intl;
  obj12.text = intl5.string(arg1(dependencyMap[9]).t.7spYft);
  obj12.onPress = function handleUpdatePaymentMethod() {
    if (null != subscription) {
      if (subscription.isPurchasedViaAppleGeneric) {
        let tmp7Result = tmp7(tmp8[28]);
        tmp7Result.openURL(isTrial(tmp8[29]).getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
        const obj4 = isTrial(tmp8[29]);
      } else {
        tmp7Result = tmp7(tmp8[16]);
        const obj = {};
        const intl = isTrial(tmp8[9]).intl;
        obj.body = intl.string(isTrial(tmp8[9]).t.fmm9jo);
        const intl2 = isTrial(tmp8[9]).intl;
        obj.confirmText = intl2.string(isTrial(tmp8[9]).t.NX+WJN);
        obj.isDismissable = true;
        tmp7Result.show(obj);
        const tmp = isTrial;
      }
    }
  };
  const items4 = [callback2(importDefault(dependencyMap[27]), obj12), , ];
  const obj13 = {};
  const tmp31 = importDefault(dependencyMap[27]);
  const intl6 = arg1(dependencyMap[9]).intl;
  obj13.text = intl6.string(arg1(dependencyMap[9]).t.FRbWR8);
  obj13.onPress = function handleChangeTier() {
    isTrial(tmp[30]).transitionTo(closure_8.CHANNEL(guildId, constants.ROLE_SUBSCRIPTIONS));
  };
  items4[1] = callback2(importDefault(dependencyMap[27]), obj13);
  if (isCancelled) {
    const obj14 = { style: tmp.resubscribeButtonContainer };
    const obj15 = {};
    const intl8 = arg1(dependencyMap[9]).intl;
    obj15.text = intl8.string(arg1(dependencyMap[9]).t.iIvF2z);
    obj15.onPress = function handleResubscribe() {
      return _handleResubscribe(...arguments);
    };
    if (!first) {
      first = !resubscribeSubscription.nativePaymentsConnected;
    }
    obj15.loading = first;
    obj14.children = callback2(importDefault(dependencyMap[31]), obj15);
    let tmp33Result = tmp33(_handleResubscribe, obj14);
    const tmp39 = _handleResubscribe;
    const tmp40 = callback2;
    const tmp43 = importDefault(dependencyMap[31]);
  } else {
    const obj16 = {};
    const intl7 = arg1(dependencyMap[9]).intl;
    obj16.text = intl7.string(arg1(dependencyMap[9]).t.Dx0lF7);
    obj16.onPress = onCancelSubscription;
    tmp33Result = tmp33(importDefault(dependencyMap[27]), obj16);
    const tmp36 = importDefault(dependencyMap[27]);
  }
  items4[2] = tmp33Result;
  obj11.children = items4;
  obj10.children = tmp30(arg1(dependencyMap[26]).GappedList, obj11);
  obj9.children = tmp28(tmp29, obj10);
  items2[4] = tmp27(arg1(dependencyMap[25]).FormSection, obj9);
  obj.children = items2;
  return tmp5(tmp6, obj);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
({ Routes: closure_8, UserSettingsSections: closure_9 } = arg1(dependencyMap[4]));
const StaticChannelRoute = arg1(dependencyMap[5]).StaticChannelRoute;
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[8]).radii.sm };
obj.container = obj;
obj.cardContent = { padding: 16 };
const tmp3 = arg1(dependencyMap[6]);
obj.buttonsContainer = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_NORMAL, borderRadius: importDefault(dependencyMap[8]).radii.sm, overflow: "hidden" };
const obj2 = { padding: "pendingBio", borderRadius: "MiniaturesSpotIllustration", alignSelf: true, marginTop: true, marginBottom: true, borderColor: importDefault(dependencyMap[8]).colors.BORDER_SUBTLE };
obj.buttonDivider = obj2;
obj.resubscribeButtonContainer = { padding: 16 };
obj.separator = { paddingHorizontal: 16 };
const obj1 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_NORMAL, borderRadius: importDefault(dependencyMap[8]).radii.sm, overflow: "hidden" };
obj.header = { borderRadius: importDefault(dependencyMap[8]).radii.sm, overflow: "hidden" };
obj.headerContent = { "Null": 107378, "Null": -1783082751, "Null": 37536833 };
obj.headerTitlesContainer = { "Bool(false)": 33906521616440370000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 137009456742.4, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001451763420726906, "Bool(false)": null };
const obj3 = { borderRadius: importDefault(dependencyMap[8]).radii.sm, overflow: "hidden" };
obj.expandIcon = { tintColor: importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_DEFAULT };
const items = [{ rotate: "180deg" }];
obj.expandIconExpanded = { transform: items };
obj.cardRow = { flexDirection: "row" };
obj.manageSection = { paddingTop: 16 };
obj.paymentOverDueWarning = {};
obj.headerStatusContainer = { 996377586: null, 2136058454: "f55d97ba12842f12a33d545b3d0fbaea", 1365401864: "CrownIcon", 1398910140: "png" };
const obj4 = { tintColor: importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.headerStatusCancel = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_FEEDBACK_CRITICAL };
const obj5 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_FEEDBACK_CRITICAL };
obj.headerStatusTrial = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BRAND };
const obj6 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BRAND };
obj.headerStatusPastDue = { backgroundColor: importDefault(dependencyMap[8]).colors.STATUS_WARNING };
let closure_14 = obj.createStyles(obj);
const obj7 = { backgroundColor: importDefault(dependencyMap[8]).colors.STATUS_WARNING };
const result = arg1(dependencyMap[34]).fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/ManageSubscriptionCard.tsx");

export default function ManageSubscriptionCard(subscription) {
  let expanded;
  let groupListing;
  let guild;
  let handleToggleExpanded;
  let listing;
  let subscriptionInfo;
  subscription = subscription.subscription;
  const arg1 = subscription;
  const tmp2 = importDefault(dependencyMap[32])(subscription);
  ({ listing, guild, expanded, subscriptionInfo } = tmp2);
  ({ groupListing, handleToggleExpanded } = tmp2);
  let obj = arg1(dependencyMap[33]);
  const importDefault = obj.useNavigation();
  let tmp4Result = null;
  if (null != groupListing) {
    tmp4Result = null;
    if (null != listing) {
      tmp4Result = null;
      if (null != subscriptionInfo) {
        obj = { style: tmp.container };
        obj = { expanded, guild };
        ({ isCancelled: obj3.isCancelled, isTrial: obj3.isTrial, isPastDue: obj3.isPastDue } = subscriptionInfo);
        obj.listing = listing;
        obj.onToggleExpanded = handleToggleExpanded;
        const items = [callback2(Header, obj), ];
        if (expanded) {
          const obj1 = {};
          const items1 = [callback2(Separator, {}), ];
          const obj2 = {};
          const merged = Object.assign(subscriptionInfo);
          let id;
          if (null != guild) {
            id = guild.id;
          }
          obj2["guildId"] = id;
          obj2["subscription"] = subscription;
          obj2["onCancelSubscription"] = function handleCancelSubscription() {

          };
          items1[1] = callback2(CardBody, obj2);
          obj1.children = items1;
          expanded = closure_12(closure_13, obj1);
          const tmp12 = callback2;
          const tmp13 = CardBody;
          const tmp8 = closure_12;
          const tmp9 = closure_13;
        }
        items[1] = expanded;
        obj.children = items;
        tmp4Result = closure_12(View, obj);
        const tmp4 = closure_12;
        const tmp5 = View;
      }
    }
  }
  return tmp4Result;
};
