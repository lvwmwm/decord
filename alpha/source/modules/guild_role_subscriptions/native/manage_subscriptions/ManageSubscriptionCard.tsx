// Module ID: 17194
// Function ID: 17195
// Name: ManageSubscriptionCard
// Dependencies: [32, 5, 19, 17, 1072, 4870, 21, 5014, 575, 1113, 5624, 6980, 6957, 11413, 17195, 5959, 17196, 1994, 9910, 7326, 6535, 7086, 1187, 17198, 5735, 5711, 7060, 6975, 5709, 2047, 1099, 9976, 17199, 1497, 6977, 2]
// Exports: default

// Module 17194 (ManageSubscriptionCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import router_utils from "router_utils" /* 1099 */;
import intl9 from "intl" /* 1113 */;
import PremiumUtils from "PremiumUtils" /* 2047 */;
import ChannelConstants from "ChannelConstants" /* 4870 */;
import Text_Text from "Text/Text" /* 5624 */;
import LinkingDefault from "Linking" /* 5709 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5959 */;
import GuildIconDefault from "GuildIcon" /* 6957 */;
import Pressables from "Pressables" /* 6980 */;
import FormSeparatorDefault from "FormSeparator" /* 17195 */;
import useManageSubscriptionCardDataDefault from "useManageSubscriptionCardData" /* 17199 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c3, c5, importDefault;

let c9;
let closure_12;
let items;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let unpackModuleId;
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
function Header(guild) {
  let expanded;
  let isCancelled;
  let isPastDue;
  let isTrial;
  let items;
  let items1;
  let items2;
  let listing;
  let onToggleExpanded;
  guild = guild.guild;
  ({ expanded, isCancelled, isTrial, isPastDue, listing, onToggleExpanded } = guild);
  const tmp = closure_14();
  const obj = { style: tmp.header, onPress: onToggleExpanded, children: items };
  const PressableHighlight = Pressables.PressableHighlight;
  items = [unpackModuleId(HeaderStatus, { isCancelled, isTrial, isPastDue }), ];
  const obj2 = { style: tmp.headerContent, children: items1 };
  items1 = [unpackModuleId(GuildIconDefault, { guild }), , ];
  const obj3 = { style: tmp.headerTitlesContainer, children: items2 };
  items2 = [, ];
  const obj4 = { ellipsizeMode: "tail", lineClamp: 2, variant: "text-md/semibold", color: "interactive-text-active", children: listing.name };
  items2[0] = unpackModuleId(Text_Text.Text, obj4);
  let name;
  const Text = Text_Text.Text;
  if (guild != null) {
    name = guild.name;
  }
  if (name == null) {
    const intl = tmp3(1113).intl;
    name = intl.string(tmp3(1113).t["He+cmd"]);
  }
  items2[1] = unpackModuleId(Text, { variant: "text-sm/medium", color: "interactive-text-default", children: name });
  items1[1] = authStore2(View, obj3);
  let expandIconExpanded;
  const ChevronSmallDownIcon = tmp3(11413).ChevronSmallDownIcon;
  if (expanded) {
    expandIconExpanded = tmp.expandIconExpanded;
  }
  items1[2] = unpackModuleId(ChevronSmallDownIcon, { size: "md", style: expandIconExpanded });
  items[1] = authStore2(View, obj2);
  return authStore2(PressableHighlight, obj);
}
function Separator() {
  const obj = { style: closure_14().separator, withoutMargins: true };
  return unpackModuleId(FormSeparatorDefault, obj);
}
function CardBody(isTrial) {
  let _undefined;
  let c4;
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
  let obj14;
  let onCancelSubscription;
  let prop;
  let prop1;
  let subscriptionPrice;
  let tmp13Result;
  let tmp2Result4;
  let tmp6;
  isTrial = isTrial.isTrial;
  const subscription = isTrial.subscription;
  const guildId = isTrial.guildId;
  let resubscribeSubscription;
  _slicedToArray = undefined;
  let obj = function _handleResubscribe() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_1;
      let closure_2;
      let intl;
      let intl2;
      let tmp;
      function openResubsribedAlert() {
        let tmp = closure_1(closure_3[15]);
        obj = {
          importer() {
            return closure_0(...arguments);
          },
          isDismissable: false
        };
        const openLazy = tmp.openLazy;
        let closure_0 = closure_5(function*() {
          let c1;
          let c2;
          let tmp;
          yield tmp(paths[17])(paths[16], paths.paths);
          tmp = arg1.default;
          return (arg0) => {
            obj = {};
            const merged = Object.assign(arg0);
            return closure_2_11(closure_1_0, obj);
          };
        });
        openLazy(obj);
      }
      if (c5 === 2) {
        c5 = 3;
        const str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          let closure_0;
          let show;
          c5 = 2;
          const tmp4 = c4;
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
                show = tmp(c3[15]).show;
                const obj5 = { body: intl.string(show(c3[9]).t.NL7DFi), confirmText: intl2.string(show(c3[9]).t["NX+WJN"]), isDismissable: true };
                const tmp28 = tmp(c3[15]);
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
                  const obj3 = tmp31(c3[20]);
                  show = obj3.resubscribeToSubscription(tmp37, analyticsLocations);
                  c4 = 2;
                  c5 = 1;
                  const obj7 = { value: show, done: false };
                  return obj7;
                }
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
            show = closure_129_4(false);
            throw tmp31;
          } else {
            if (2 === tmp4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_4(false);
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
              show = closure_129_4(false);
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
            }
            show = closure_0;
            if (show) {
              const tmp9 = openResubsribedAlert();
            }
            c3 = 0;
            closure_129_4(false);
          }
          c5 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
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
  let tmp = closure_14();
  const tmp3 = resubscribeSubscription;
  obj = subscription(resubscribeSubscription[18]);
  resubscribeSubscription = obj.useResubscribeSubscription(subscription.id);
  resubscribeSubscription = resubscribeSubscription.resubscribeSubscription;
  const nativePaymentsConnected = resubscribeSubscription.nativePaymentsConnected;
  let tmp5 = _slicedToArray(obj.useState(false), 2);
  [tmp6, c4] = tmp5;
  const analyticsLocations = subscription(resubscribeSubscription[19])().analyticsLocations;
  let tmp7 = closure_12;
  let tmp8 = View;
  let obj2 = { style: tmp.cardContent, children: items2 };
  let tmp7Result = null;
  if (isPastDue) {
    let tmp10 = closure_13;
    let obj3 = { children: items1 };
    let obj4 = { style: tmp.paymentOverDueWarning, children: items };
    let tmp11 = closure_11;
    let obj5 = { size: "xs", color: tmp2(tmp3[8]).unsafe_rawColors.YELLOW_300 };
    const CircleErrorIcon = isTrial(tmp3[21]).CircleErrorIcon;
    items = [closure_11(CircleErrorIcon, obj5), ];
    let obj6 = { variant: "text-sm/medium", color: "interactive-text-active", children: intl.string(isTrial(tmp3[9]).t.eaqlau) };
    const Text = isTrial(tmp3[10]).Text;
    intl = isTrial(tmp3[9]).intl;
    items[1] = closure_11(Text, obj6);
    items1 = [tmp7(tmp8, obj4), closure_11(isTrial(tmp3[22]).Spacer, { size: 12 })];
    tmp7Result = tmp7(closure_13, obj3);
  }
  items2 = [tmp7Result, , , , , ];
  let obj7 = { title: intl2.string(isTrial(tmp3[9]).t.dltUMH), icon: prop, onPressIcon: prop1, children: subscriptionPrice };
  const tmp2Result = subscription(tmp3[23]);
  intl2 = isTrial(tmp3[9]).intl;
  prop = undefined;
  if (isTrial) {
    prop = tmp15(tmp3[24]).CircleInformationIcon;
  }
  prop1 = undefined;
  if (isTrial) {
    prop1 = tmp15(tmp3[25]).presentGuildRoleSubscriptionTrialTierMonthCost;
  }
  items2[1] = closure_11(tmp2Result, obj7);
  items2[2] = closure_11(isTrial(tmp3[22]).Spacer, { size: 16 });
  let obj8 = { style: tmp.cardRow, children: items3 };
  items3 = [tmp13(tmp2(tmp3[23]), { title: nextRenewalLabel, children: nextRenewalDate }), ];
  const obj9 = { title: intl3.string(isTrial(tmp3[9]).t.AOcwWB), children: memberSince };
  const tmp2Result3 = subscription(tmp3[23]);
  intl3 = tmp15(tmp3[9]).intl;
  items3[1] = closure_11(tmp2Result3, obj9);
  items2[3] = tmp7(tmp8, obj8);
  items2[4] = closure_11(isTrial(tmp3[22]).Spacer, { size: 16 });
  const obj10 = { hasIcons: false, title: intl4.string(isTrial(tmp3[9]).t["4neDM+"]), children: items4 };
  const TableRowGroup = tmp15(tmp3[26]).TableRowGroup;
  intl4 = tmp15(tmp3[9]).intl;
  const obj11 = {
    arrow: true,
    label: intl5.string(isTrial(tmp3[9]).t["7spYft"]),
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
  const TableRow = tmp15(tmp3[27]).TableRow;
  intl5 = tmp15(tmp3[9]).intl;
  items4 = [tmp13(TableRow, obj11), , ];
  const obj12 = {
    arrow: true,
    label: intl6.string(isTrial(tmp3[9]).t.FRbWR8),
    onPress: function handleChangeTier() {
      obj = router_utils;
      obj.transitionTo(metroImportAll.CHANNEL(guildId, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
    }
  };
  const TableRow2 = tmp15(tmp3[27]).TableRow;
  intl6 = tmp15(tmp3[9]).intl;
  items4[1] = closure_11(TableRow2, obj12);
  if (isCancelled) {
    const obj13 = { style: tmp.resubscribeButtonContainer, children: closure_11(tmp2Result4, obj14) };
    obj14 = {
      text: intl8.string(isTrial(tmp3[9]).t.iIvF2z),
      onPress: function handleResubscribe() {
          return obj(...arguments);
        },
      loading: tmp6
    };
    tmp2Result4 = subscription(tmp3[31]);
    intl8 = tmp15(tmp3[9]).intl;
    if (!tmp6) {
      tmp6 = !nativePaymentsConnected;
    }
    tmp13Result = tmp13(tmp8, obj13);
  } else {
    const obj15 = { arrow: true, variant: "danger", label: intl7.string(isTrial(tmp3[9]).t.Dx0lF7), onPress: onCancelSubscription };
    const TableRow3 = tmp15(tmp3[27]).TableRow;
    intl7 = tmp15(tmp3[9]).intl;
    tmp13Result = tmp13(TableRow3, obj15);
  }
  items4[2] = tmp13Result;
  items2[5] = tmp7(TableRowGroup, obj10);
  return tmp7(tmp8, obj2);
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ Routes: metroImportAll, UserSettingsSections: c9 } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { padding: 0 }, cardContent: { padding: 16 }, resubscribeButtonContainer: obj2, separator: { paddingHorizontal: 16 }, header: obj3, headerContent: { padding: 16, alignItems: "center", flexDirection: "row" }, headerTitlesContainer: { alignSelf: "stretch", flexGrow: 1, flexShrink: 1, paddingHorizontal: 16, gap: 2 }, expandIconExpanded: obj4, cardRow: obj5, paymentOverDueWarning: obj6, headerStatusContainer: { paddingVertical: 4, paddingHorizontal: 18, flexDirection: "row", alignItems: "center" }, headerStatusCancel: obj7, headerStatusTrial: obj8, headerStatusPastDue: obj9 };
obj2 = { backgroundColor: nativeDefault.colors.CARD_MUTED_BG, padding: 16 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS, overflow: "hidden" };
obj4 = { transform: items };
items = [{ rotate: "180deg" }];
obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj6 = { flexDirection: "row", width: "90%", gap: nativeDefault.space.PX_8 };
obj7 = { backgroundColor: nativeDefault.colors.BADGE_CRITICAL_BACKGROUND };
obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj9 = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
let closure_14 = createStyles(obj);
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
  ({ listing, guild, expanded, subscriptionInfo, groupListing, handleToggleExpanded } = useManageSubscriptionCardDataDefault(subscription));
  useManageSubscriptionCardDataDefault(subscription);
  let obj = subscription(1497);
  importDefault = obj.useNavigation();
  let tmp6Result = null;
  const tmp4 = subscription;
  if (null != groupListing) {
    tmp6Result = null;
    if (null != listing) {
      tmp6Result = null;
      if (null != subscriptionInfo) {
        const obj2 = { variant: "primary", style: tmp.container, children: items };
        const obj4 = { expanded, guild, isCancelled: null, isTrial: null, isPastDue: null, listing, onToggleExpanded: handleToggleExpanded };
        ({ isCancelled: obj3.isCancelled, isTrial: obj3.isTrial, isPastDue: obj3.isPastDue } = subscriptionInfo);
        const Card = tmp4(6977).Card;
        items = [closure_11(Header, obj4), ];
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
          const tmp11 = CardBody;
          const tmp9 = closure_13;
          if (guild != null) {
            id = guild.id;
          }
          const obj9 = { children: items1 };
          items1[1] = closure_11(tmp11, obj5);
          expanded = tmp6(tmp9, obj9);
        }
        items[1] = expanded;
        tmp6Result = tmp6(Card, obj2);
      }
    }
  }
  return tmp6Result;
};
