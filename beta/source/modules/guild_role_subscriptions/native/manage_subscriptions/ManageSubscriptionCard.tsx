// Module ID: 14761
// Function ID: 14762
// Name: ManageSubscriptionCard
// Dependencies: [5, 32, 19, 17, 1074, 2052, 21, 4836, 576, 1115, 4832, 5435, 5896, 1177, 8989, 14762, 5204, 14763, 1981, 8667, 6583, 5174, 14765, 12285, 4527, 8053, 9807, 14766, 4525, 4488, 1101, 9761, 14768, 1485, 2]
// Exports: default

// Module 14761 (ManageSubscriptionCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1101 */;
import intl9 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import LinkingDefault from "Linking" /* 4525 */;
import Text_Text from "Text/Text" /* 4832 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5204 */;
import Pressables from "Pressables" /* 5435 */;
import GuildIconDefault from "GuildIcon" /* 5896 */;
import FormSeparatorDefault from "FormSeparator" /* 14762 */;
import useManageSubscriptionCardDataDefault from "useManageSubscriptionCardData" /* 14768 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c3, c4, dependencyMap, importDefault;

let c9;
let closure_12;
let items;
let map1;
let metroImportAll;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let tmp7;
let unpackModuleId;
const AssetRegistryDefault = tmp7(8989);
function HeaderStatus(arg0) {
  let Text;
  let flag;
  let headerStatusPastDue;
  let isCancelled;
  let isPastDue;
  let isTrial;
  let items;
  let obj2;
  let str;
  ({ isCancelled, isTrial, isPastDue } = arg0);
  const tmp = closure_14();
  if (isCancelled) {
    const intl3 = intl9.intl;
    str = intl3.string(intl9.t["7uFZGt"]);
    headerStatusPastDue = tmp.headerStatusCancel;
    flag = true;
  } else if (isTrial) {
    const intl2 = intl9.intl;
    str = intl2.string(intl9.t["6anton"]);
    headerStatusPastDue = tmp.headerStatusTrial;
    flag = true;
  } else {
    str = "";
    flag = true;
    if (isPastDue) {
      const intl = intl9.intl;
      str = intl.string(intl9.t.uENdgb);
      headerStatusPastDue = tmp.headerStatusPastDue;
      flag = false;
    }
  }
  let tmp9Result = null;
  if ("" !== str) {
    const obj = { style: items, children: unpackModuleId(Text, obj2) };
    items = [tmp.headerStatusContainer, headerStatusPastDue];
    let str2 = "text-overlay-dark";
    Text = Text_Text.Text;
    const tmp10 = View;
    if (flag) {
      str2 = "text-overlay-light";
    }
    obj2 = { variant: "text-xs/semibold", color: str2, children: str };
    tmp9Result = tmp9(tmp10, obj);
  }
  return tmp9Result;
}
function Header(arg0) {
  let expanded;
  let guild;
  let isCancelled;
  let isPastDue;
  let isTrial;
  let items;
  let items1;
  let items2;
  let listing;
  let onToggleExpanded;
  ({ expanded, guild } = arg0);
  ({ isCancelled, isTrial, isPastDue, listing, onToggleExpanded } = arg0);
  const tmp = closure_14();
  const obj = { style: tmp.header, onPress: onToggleExpanded, children: items };
  const PressableHighlight = Pressables.PressableHighlight;
  items = [unpackModuleId(HeaderStatus, { isCancelled, isTrial, isPastDue }), ];
  const obj2 = { style: tmp.headerContent, children: items1 };
  items1 = [unpackModuleId(GuildIconDefault, { guild }), , ];
  const obj3 = { style: tmp.headerTitlesContainer, children: items2 };
  items2 = [, , ];
  const obj4 = { ellipsizeMode: "tail", lineClamp: 2, variant: "text-md/semibold", color: "interactive-text-active", children: listing.name };
  items2[0] = unpackModuleId(Text_Text.Text, obj4);
  items2[1] = unpackModuleId(native.Spacer, { size: 2 });
  let name;
  const Text = Text_Text.Text;
  if (guild != null) {
    name = guild.name;
  }
  if (name == null) {
    const intl = tmp3(1115).intl;
    name = intl.string(tmp3(1115).t["He+cmd"]);
  }
  items2[2] = unpackModuleId(Text, { variant: "text-sm/medium", color: "interactive-text-default", children: name });
  items1[1] = closure_12(View, obj3);
  const items3 = [tmp.expandIcon, ];
  const Icon = tmp3(1177).Icon;
  if (expanded) {
    expanded = tmp.expandIconExpanded;
  }
  items3[1] = expanded;
  const obj5 = { style: items3, size: native.Icon.Sizes.MEDIUM, source: AssetRegistryDefault };
  items1[2] = unpackModuleId(Icon, obj5);
  items[1] = closure_12(View, obj2);
  return closure_12(PressableHighlight, obj);
}
function Separator() {
  const obj = { style: closure_14().separator, withoutMargins: true };
  return unpackModuleId(FormSeparatorDefault, obj);
}
function CardBody(isTrial) {
  let GappedList;
  let _undefined;
  let buttonDivider;
  let c5;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let isCancelled;
  let isPastDue;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let memberSince;
  let nextRenewalDate;
  let nextRenewalLabel;
  let obj10;
  let obj11;
  let obj15;
  let onCancelSubscription;
  let prop;
  let subscriptionPrice;
  let tmp13Result;
  let tmp2Result11;
  let tmp2Result7;
  let tmp6;
  isTrial = isTrial.isTrial;
  const subscription = isTrial.subscription;
  const guildId = isTrial.guildId;
  _slicedToArray = undefined;
  let analyticsLocations;
  let obj = function _handleResubscribe() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_1;
      let closure_2;
      let intl;
      let intl2;
      function openResubsribedAlert() {
        let paths;
        obj = closure_1_1(closure_1_3[16]);
        const obj2 = {
          importer() {
            const promise = closure_1_0(paths[18])(paths[17], paths.paths);
            return promise.then((result) => {
              let closure_0 = result.default;
              return (arg0) => {
                obj = {};
                const merged = Object.assign(arg0);
                return closure_2_11(closure_0, obj);
              };
            });
          },
          isDismissable: false
        };
        obj.openLazy(obj2);
      }
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let closure_0;
          let show;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = undefined;
              const tmp39 = isTrial;
              if (tmp39) {
                show = tmp(c3[16]).show;
                const obj5 = { body: intl.string(show(c3[9]).t.NL7DFi), confirmText: intl2.string(show(c3[9]).t["NX+WJN"]), isDismissable: true };
                const tmp28 = tmp(c3[16]);
                intl = show(c3[9]).intl;
                intl2 = show(c3[9]).intl;
                show(obj5);
              } else {
                c3 = 1;
                _undefined(true);
                closure_0 = false;
                if (tmp38) {
                  show = resubscribeSubscription();
                  c4 = 3;
                  c5 = 1;
                  const obj6 = { value: show, done: false };
                  return obj6;
                } else {
                  const obj3 = tmp31(c3[21]);
                  show = obj3.resubscribeToSubscription(tmp37, analyticsLocations);
                  c4 = 2;
                  c5 = 1;
                  const obj7 = { value: show, done: false };
                  return obj7;
                }
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            show = closure_129_5(false);
            throw tmp31;
          } else {
            if (2 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_5(false);
                c5 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                closure_0 = true;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              show = closure_129_5(false);
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
            }
            show = closure_0;
            if (show) {
              openResubsribedAlert();
            }
            c3 = 0;
            closure_129_5(false);
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp31) {
          if (0 === c3) {
            c5 = 3;
            throw tmp31;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  ({ isCancelled, isPastDue, memberSince, nextRenewalDate, nextRenewalLabel, onCancelSubscription, subscriptionPrice } = isTrial);
  const tmp = closure_14();
  dependencyMap = tmp;
  const tmp3 = dependencyMap;
  obj = subscription(8667);
  let resubscribeSubscription = obj.useResubscribeSubscription(subscription.id);
  resubscribeSubscription = resubscribeSubscription.resubscribeSubscription;
  const nativePaymentsConnected = resubscribeSubscription.nativePaymentsConnected;
  [tmp6, c5] = _slicedToArray(analyticsLocations.useState(false), 2);
  const tmp5 = _slicedToArray(analyticsLocations.useState(false), 2);
  analyticsLocations = subscription(6583)().analyticsLocations;
  let obj2 = { style: tmp.cardContent, children: items2 };
  let tmp7Result = null;
  if (isPastDue) {
    let obj3 = { children: items1 };
    let obj4 = { style: tmp.paymentOverDueWarning, children: items };
    size = { color: tmp2(576).unsafe_rawColors.YELLOW_300, width: 16, height: 16 };
    const WarningCircle = isTrial(1177).WarningCircle;
    items = [closure_11(WarningCircle, size), closure_11(isTrial(1177).Spacer, { size: 8 }), ];
    let obj5 = { variant: "text-sm/medium", color: "interactive-text-active", children: intl.string(isTrial(1115).t.eaqlau) };
    const Text = isTrial(4832).Text;
    intl = isTrial(1115).intl;
    items[2] = closure_11(Text, obj5);
    items1 = [tmp7(tmp8, obj4), closure_11(isTrial(1177).Spacer, { size: 12 })];
    tmp7Result = tmp7(closure_13, obj3);
  }
  items2 = [tmp7Result, , , , ];
  let obj6 = { title: intl2.string(isTrial(1115).t.dltUMH), icon: tmp2Result7, onPressIcon: prop, children: subscriptionPrice };
  const tmp2Result = subscription(14765);
  intl2 = isTrial(1115).intl;
  tmp2Result7 = undefined;
  if (isTrial) {
    tmp2Result7 = tmp2(12285);
  }
  prop = undefined;
  if (isTrial) {
    prop = tmp15(4527).presentGuildRoleSubscriptionTrialTierMonthCost;
  }
  items2[1] = closure_11(tmp2Result, obj6);
  items2[2] = closure_11(isTrial(1177).Spacer, { size: 16 });
  let obj7 = { style: tmp.cardRow, children: items3 };
  items3 = [tmp13(tmp2(14765), { title: nextRenewalLabel, children: nextRenewalDate }), tmp13(tmp15(1177).Spacer, { size: 8 }), ];
  let obj8 = { title: intl3.string(tmp15(1115).t.AOcwWB), children: memberSince };
  const tmp2Result8 = subscription(14765);
  intl3 = tmp15(1115).intl;
  items3[2] = closure_11(tmp2Result8, obj8);
  items2[3] = closure_12(obj, obj7);
  const obj9 = { inset: true, titleViewStyle: tmp.manageSection, title: intl4.string(isTrial(1115).t["4neDM+"]), children: closure_11(obj, obj10) };
  const FormSection = tmp15(8053).FormSection;
  intl4 = tmp15(1115).intl;
  obj10 = { style: tmp.buttonsContainer, children: closure_12(GappedList, obj11) };
  obj11 = {
    renderGap() {
      obj = { style: buttonDivider.buttonDivider };
      return unpackModuleId(View, obj);
    },
    children: items4
  };
  GappedList = tmp15(9807).GappedList;
  const obj12 = {
    text: intl5.string(isTrial(1115).t["7spYft"]),
    onPress: function handleUpdatePaymentMethod() {
      let intl;
      let intl2;
      if (null != subscription) {
        if (subscription.isPurchasedViaAppleGeneric) {
          const openURL = LinkingDefault.openURL;
          LinkingDefault;
          const obj2 = PremiumUtils;
          openURL(obj2.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
        } else {
          obj = { body: intl.string(intl9.t.fmm9jo), confirmText: intl2.string(intl9.t["NX+WJN"]), isDismissable: true };
          const show = actions_AlertActionCreatorsDefault.show;
          actions_AlertActionCreatorsDefault;
          intl = intl9.intl;
          intl2 = intl9.intl;
          show(obj);
        }
      }
    }
  };
  const tmp2Result9 = subscription(14766);
  intl5 = tmp15(1115).intl;
  items4 = [tmp13(tmp2Result9, obj12), , ];
  const obj13 = {
    text: intl6.string(isTrial(1115).t.FRbWR8),
    onPress: function handleChangeTier() {
      obj = router_utils;
      obj.transitionTo(metroImportAll.CHANNEL(guildId, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
    }
  };
  const tmp2Result10 = subscription(14766);
  intl6 = tmp15(1115).intl;
  items4[1] = closure_11(tmp2Result10, obj13);
  if (isCancelled) {
    const obj14 = { style: tmp.resubscribeButtonContainer, children: closure_11(tmp2Result11, obj15) };
    obj15 = {
      text: intl8.string(isTrial(1115).t.iIvF2z),
      onPress: function handleResubscribe() {
          return obj(...arguments);
        },
      loading: tmp6
    };
    tmp2Result11 = subscription(9761);
    intl8 = tmp15(1115).intl;
    tmp13Result = tmp13(tmp8, obj14);
  } else {
    const obj16 = { text: intl7.string(isTrial(1115).t.Dx0lF7), onPress: onCancelSubscription };
    const tmp2Result12 = subscription(14766);
    intl7 = tmp15(1115).intl;
    tmp13Result = tmp13(tmp2Result12, obj16);
  }
  items4[2] = tmp13Result;
  items2[4] = closure_11(FormSection, obj9);
  return closure_12(obj, obj2);
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ Routes: metroImportAll, UserSettingsSections: c9 } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, cardContent: { padding: 16 }, buttonsContainer: obj3, buttonDivider: obj4, resubscribeButtonContainer: { padding: 16 }, separator: { paddingHorizontal: 16 }, header: obj5, headerContent: { padding: 16, alignItems: "center", flexDirection: "row" }, headerTitlesContainer: { alignSelf: "stretch", flexGrow: 1, flexShrink: 1, paddingHorizontal: 16 }, expandIcon: obj6, expandIconExpanded: obj7, cardRow: { flexDirection: "row" }, manageSection: { paddingTop: 16 }, paymentOverDueWarning: { flexDirection: "row", width: "90%" }, headerStatusContainer: { paddingVertical: 4, paddingHorizontal: 18, flexDirection: "row", alignItems: "center" }, headerStatusCancel: obj8, headerStatusTrial: obj9, headerStatusPastDue: obj10 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj4 = { width: "100%", borderBottomWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, marginLeft: 16, marginTop: -1 };
obj5 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj6 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj7 = { transform: items };
items = [{ rotate: "180deg" }];
obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL };
obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj10 = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
let closure_14 = createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/ManageSubscriptionCard.tsx");

export default function ManageSubscriptionCard(subscription) {
  let closure_1;
  let expanded;
  let groupListing;
  let guild;
  let handleToggleExpanded;
  let id;
  let items;
  let listing;
  let subscriptionInfo;
  subscription = subscription.subscription;
  const tmp = closure_14();
  const tmp2 = useManageSubscriptionCardDataDefault(subscription);
  ({ listing, guild, expanded, subscriptionInfo } = tmp2);
  ({ groupListing, handleToggleExpanded } = tmp2);
  let obj = subscription(1485);
  importDefault = obj.useNavigation();
  let tmp4Result = null;
  if (null != groupListing) {
    tmp4Result = null;
    if (null != listing) {
      tmp4Result = null;
      if (null != subscriptionInfo) {
        const obj2 = { style: tmp.container, children: items };
        const obj4 = { expanded, guild, isCancelled: null, isTrial: null, isPastDue: null, listing, onToggleExpanded: handleToggleExpanded };
        ({ isCancelled: obj3.isCancelled, isTrial: obj3.isTrial, isPastDue: obj3.isPastDue } = subscriptionInfo);
        items = [closure_11(Header, obj4), ];
        const tmp5 = View;
        if (expanded) {
          const items1 = [closure_11(Separator, {}), ];
          const obj5 = {
            guildId: id,
            subscription,
            onCancelSubscription: function handleCancelSubscription() {
                      const obj = {
                        subscriptionId: subscription.id,
                        onClose() {
                          return closure_1_1.pop();
                        }
                      };
                      closure_1.push(constants.GUILD_ROLE_SUBSCRIPTIONS_CANCEL, obj);
                    }
          };
          const merged = Object.assign(subscriptionInfo);
          id = undefined;
          const tmp10 = CardBody;
          const tmp8 = closure_13;
          if (guild != null) {
            id = guild.id;
          }
          const obj9 = { children: items1 };
          items1[1] = closure_11(tmp10, obj5);
          expanded = tmp4(tmp8, obj9);
        }
        items[1] = expanded;
        tmp4Result = tmp4(tmp5, obj2);
      }
    }
  }
  return tmp4Result;
};
