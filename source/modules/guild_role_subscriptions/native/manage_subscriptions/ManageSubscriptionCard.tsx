// Module ID: 14155
// Function ID: 108837
// Name: HeaderStatus
// Dependencies: [5, 57, 31, 27, 653, 1355, 33, 4130, 689, 1212, 4126, 4660, 5513, 1273, 8427, 14156, 4471, 14157, 1934, 7433, 5462, 4451, 14159, 7417, 3830, 7636, 9441, 14160, 3827, 3776, 1198, 9391, 14162, 1456, 2]
// Exports: default

// Module 14155 (HeaderStatus)
import set from "set";
import _slicedToArray from "_slicedToArray";
import ShinyButton from "ShinyButton";
import { View } from "NavigateForwardButton";
import ME from "ME";
import { StaticChannelRoute } from "set";
import jsxProd from "useNavigation";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
let closure_8;
let closure_9;
const require = arg1;
function HeaderStatus(arg0) {
  let isCancelled;
  let isPastDue;
  let isTrial;
  ({ isCancelled, isTrial, isPastDue } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  if (isCancelled) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    let str = intl3.string(require(1212) /* getSystemLocale */.t["7uFZGt"]);
    let headerStatusPastDue = tmp.headerStatusCancel;
    let flag = true;
  } else if (isTrial) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    str = intl2.string(require(1212) /* getSystemLocale */.t["6anton"]);
    headerStatusPastDue = tmp.headerStatusTrial;
    flag = true;
  } else {
    str = "";
    flag = true;
    if (isPastDue) {
      const intl = require(1212) /* getSystemLocale */.intl;
      str = intl.string(require(1212) /* getSystemLocale */.t.uENdgb);
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
    obj.children = closure_11(require(4126) /* Text */.Text, obj);
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
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.header, onPress: onToggleExpanded };
  const items = [callback2(HeaderStatus, { isCancelled, isTrial, isPastDue }), ];
  obj = { style: tmp.headerContent };
  const items1 = [callback2(importDefault(5513), { guild }), , ];
  obj = { style: tmp.headerTitlesContainer };
  const obj1 = { ellipsizeMode: "tail", lineClamp: 2, variant: "text-md/semibold", color: "interactive-text-active", children: listing.name };
  const items2 = [callback2(require(4126) /* Text */.Text, obj1), callback2(require(1273) /* Button */.Spacer, { size: 2 }), ];
  const obj2 = { variant: "text-sm/medium", color: "interactive-text-default" };
  let name;
  if (null != guild) {
    name = guild.name;
  }
  if (null == name) {
    const intl = require(1212) /* getSystemLocale */.intl;
    name = intl.string(require(1212) /* getSystemLocale */.t["He+cmd"]);
  }
  obj2.children = name;
  items2[2] = callback2(require(4126) /* Text */.Text, obj2);
  obj.children = items2;
  items1[1] = closure_12(View, obj);
  const obj3 = {};
  const items3 = [tmp.expandIcon, ];
  if (expanded) {
    expanded = tmp.expandIconExpanded;
  }
  items3[1] = expanded;
  obj3.style = items3;
  obj3.size = require(1273) /* Button */.Icon.Sizes.MEDIUM;
  obj3.source = importDefault(8427);
  items1[2] = callback2(require(1273) /* Button */.Icon, obj3);
  obj.children = items1;
  items[1] = closure_12(View, obj);
  obj.children = items;
  return closure_12(require(4660) /* PressableBase */.PressableHighlight, obj);
}
function Separator() {
  const tmp = _createForOfIteratorHelperLoose();
  return callback2(importDefault(14156), { style: _createForOfIteratorHelperLoose().separator, withoutMargins: true });
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
  const subscription = isTrial.subscription;
  const guildId = isTrial.guildId;
  let resubscribeSubscription;
  let callback;
  let analyticsLocations;
  function _handleResubscribe() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = resubscribeSubscription(tmp);
    return obj(...arguments);
  }
  ({ isCancelled, isPastDue, memberSince, nextRenewalDate, nextRenewalLabel, onCancelSubscription, subscriptionPrice } = isTrial);
  const tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  let obj = subscription(7433);
  resubscribeSubscription = obj.useResubscribeSubscription(subscription.id);
  resubscribeSubscription = resubscribeSubscription.resubscribeSubscription;
  const tmp3 = callback(analyticsLocations.useState(false), 2);
  let first = tmp3[0];
  callback = tmp3[1];
  analyticsLocations = subscription(5462)().analyticsLocations;
  obj = { style: tmp.cardContent };
  let tmp7 = null;
  if (isPastDue) {
    obj = {};
    const obj1 = { style: tmp.paymentOverDueWarning };
    const obj2 = { color: subscription(689).unsafe_rawColors.YELLOW_300, width: 16, height: 16 };
    const items = [callback2(isTrial(1273).WarningCircle, obj2), , ];
    const obj3 = { size: 8 };
    items[1] = callback2(isTrial(1273).Spacer, obj3);
    let obj4 = { variant: "text-sm/medium", color: "interactive-text-active" };
    let intl = isTrial(1212).intl;
    obj4.children = intl.string(isTrial(1212).t.eaqlau);
    items[2] = callback2(isTrial(4126).Text, obj4);
    obj1.children = items;
    const items1 = [callback3(_handleResubscribe, obj1), ];
    const obj5 = { size: 12 };
    items1[1] = callback2(isTrial(1273).Spacer, obj5);
    obj.children = items1;
    tmp7 = callback3(closure_13, obj);
  }
  const items2 = [tmp7, , , , ];
  const obj6 = {};
  let intl2 = isTrial(1212).intl;
  obj6.title = intl2.string(isTrial(1212).t.dltUMH);
  let tmp20;
  if (isTrial) {
    tmp20 = subscription(7417);
  }
  obj6.icon = tmp20;
  let prop;
  if (isTrial) {
    prop = isTrial(3830).presentGuildRoleSubscriptionTrialTierMonthCost;
  }
  obj6.onPressIcon = prop;
  obj6.children = subscriptionPrice;
  items2[1] = callback2(subscription(14159), obj6);
  items2[2] = callback2(isTrial(1273).Spacer, { size: 16 });
  const obj7 = { style: tmp.cardRow };
  const items3 = [callback2(subscription(14159), { title: nextRenewalLabel, children: nextRenewalDate }), callback2(isTrial(1273).Spacer, { size: 8 }), ];
  const obj8 = {};
  const tmp18 = callback2;
  const tmp19 = subscription(14159);
  const tmp5 = callback3;
  const tmp6 = _handleResubscribe;
  const intl3 = isTrial(1212).intl;
  obj8.title = intl3.string(isTrial(1212).t.AOcwWB);
  obj8.children = memberSince;
  items3[2] = callback2(subscription(14159), obj8);
  obj7.children = items3;
  items2[3] = callback3(_handleResubscribe, obj7);
  const obj9 = { inset: true, titleViewStyle: tmp.manageSection };
  const intl4 = isTrial(1212).intl;
  obj9.title = intl4.string(isTrial(1212).t["4neDM+"]);
  const obj10 = { style: tmp.buttonsContainer };
  const obj11 = {
    renderGap() {
      return outer1_11(_handleResubscribe, { style: tmp.buttonDivider });
    }
  };
  const obj12 = {};
  const tmp26 = subscription(14159);
  const tmp27 = callback2;
  const tmp28 = callback2;
  const tmp29 = _handleResubscribe;
  const tmp30 = callback3;
  const intl5 = isTrial(1212).intl;
  obj12.text = intl5.string(isTrial(1212).t["7spYft"]);
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
        obj.confirmText = intl2.string(isTrial(tmp8[9]).t["NX+WJN"]);
        obj.isDismissable = true;
        tmp7Result.show(obj);
      }
    }
  };
  const items4 = [callback2(subscription(14160), obj12), , ];
  const obj13 = {};
  const tmp31 = subscription(14160);
  const intl6 = isTrial(1212).intl;
  obj13.text = intl6.string(isTrial(1212).t.FRbWR8);
  obj13.onPress = function handleChangeTier() {
    isTrial(tmp[30]).transitionTo(outer1_8.CHANNEL(guildId, outer1_10.ROLE_SUBSCRIPTIONS));
  };
  items4[1] = callback2(subscription(14160), obj13);
  if (isCancelled) {
    const obj14 = { style: tmp.resubscribeButtonContainer };
    const obj15 = {};
    const intl8 = isTrial(1212).intl;
    obj15.text = intl8.string(isTrial(1212).t.iIvF2z);
    obj15.onPress = function handleResubscribe() {
      return _handleResubscribe(...arguments);
    };
    if (!first) {
      first = !resubscribeSubscription.nativePaymentsConnected;
    }
    obj15.loading = first;
    obj14.children = callback2(subscription(9391), obj15);
    let tmp33Result = tmp33(_handleResubscribe, obj14);
    const tmp39 = _handleResubscribe;
    const tmp40 = callback2;
    const tmp43 = subscription(9391);
  } else {
    const obj16 = {};
    const intl7 = isTrial(1212).intl;
    obj16.text = intl7.string(isTrial(1212).t.Dx0lF7);
    obj16.onPress = onCancelSubscription;
    tmp33Result = tmp33(subscription(14160), obj16);
    const tmp36 = subscription(14160);
  }
  items4[2] = tmp33Result;
  obj11.children = items4;
  obj10.children = tmp30(isTrial(9441).GappedList, obj11);
  obj9.children = tmp28(tmp29, obj10);
  items2[4] = tmp27(isTrial(7636).FormSection, obj9);
  obj.children = items2;
  return tmp5(tmp6, obj);
}
({ Routes: closure_8, UserSettingsSections: closure_9 } = ME);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.cardContent = { padding: 16 };
_createForOfIteratorHelperLoose.buttonsContainer = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
let obj2 = { width: "100%", borderBottomWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginLeft: 16, marginTop: -1 };
_createForOfIteratorHelperLoose.buttonDivider = obj2;
_createForOfIteratorHelperLoose.resubscribeButtonContainer = { padding: 16 };
_createForOfIteratorHelperLoose.separator = { paddingHorizontal: 16 };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
_createForOfIteratorHelperLoose.header = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
_createForOfIteratorHelperLoose.headerContent = { padding: 16, alignItems: "center", flexDirection: "row" };
_createForOfIteratorHelperLoose.headerTitlesContainer = { alignSelf: "stretch", flexGrow: 1, flexShrink: 1, paddingHorizontal: 16 };
let obj3 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
_createForOfIteratorHelperLoose.expandIcon = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
let items = [{ rotate: "180deg" }];
_createForOfIteratorHelperLoose.expandIconExpanded = { transform: items };
_createForOfIteratorHelperLoose.cardRow = { flexDirection: "row" };
_createForOfIteratorHelperLoose.manageSection = { paddingTop: 16 };
_createForOfIteratorHelperLoose.paymentOverDueWarning = { flexDirection: "row", width: "90%" };
_createForOfIteratorHelperLoose.headerStatusContainer = { paddingVertical: 4, paddingHorizontal: 18, flexDirection: "row", alignItems: "center" };
let obj4 = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.headerStatusCancel = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_CRITICAL };
let obj5 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_CRITICAL };
_createForOfIteratorHelperLoose.headerStatusTrial = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
let obj6 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.headerStatusPastDue = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_WARNING };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj7 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_WARNING };
const result = require("result").fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/ManageSubscriptionCard.tsx");

export default function ManageSubscriptionCard(subscription) {
  let expanded;
  let groupListing;
  let guild;
  let handleToggleExpanded;
  let listing;
  let subscriptionInfo;
  subscription = subscription.subscription;
  const tmp2 = importDefault(14162)(subscription);
  ({ listing, guild, expanded, subscriptionInfo } = tmp2);
  ({ groupListing, handleToggleExpanded } = tmp2);
  let obj = subscription(1456);
  importDefault = obj.useNavigation();
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
