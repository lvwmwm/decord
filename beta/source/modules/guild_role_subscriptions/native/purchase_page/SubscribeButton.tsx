// Module ID: 16198
// Function ID: 16199
// Name: SubscribeButton
// Dependencies: [5, 32, 19, 17, 2099, 4462, 1074, 2052, 21, 14772, 504, 8667, 4832, 5204, 1115, 5881, 4421, 1177, 16192, 4800, 16199, 1981, 16188, 5364, 5281, 9761, 2]
// Exports: default

// Module 16198 (SubscribeButton)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5204 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4462 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c1, c4, closure_2;

let closure_12;
let map1;
function emphasisHook(children) {
  const obj = { variant: "text-xs/semibold", color: "text-default", children };
  return closure_12(Text_Text.Text, obj);
}
function SwitchTiersButton(activeSubscription) {
  let intl;
  let intl2;
  let items;
  let obj5;
  activeSubscription = activeSubscription.activeSubscription;
  const activeListingId = activeSubscription.activeListingId;
  const changeToListingId = activeSubscription.changeToListingId;
  let obj = changeToListingId(14772);
  const first = _slicedToArray(obj.useName(activeListingId), 1)[0];
  const obj3 = { children: items };
  const obj2 = activeListingId(4421)(activeSubscription.currentPeriodEnd);
  const obj4 = { variant: "text-xs/normal", color: "text-muted", children: intl.format(activeSubscription(1115).t.lA7ztO, obj5) };
  const formatResult = obj2.format("MMMM Do");
  const Text = activeSubscription(4832).Text;
  intl = activeSubscription(1115).intl;
  obj5 = { activeListingName: first, billingEndDate: formatResult, emphasisHook };
  items = [closure_12(Text, obj4), closure_12(activeSubscription(1177).Spacer, { size: 16 }), ];
  const obj6 = {
    text: intl2.string(activeSubscription(1115).t.SACegK),
    onPress() {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const obj = { activeSubscription, activeListingId, changeToListingId };
      const tmp2 = asyncRequire(16199, dependencyMap.paths);
      openLazy(tmp2, "ChangeSubscriptionCard:" + changeToListingId, obj);
    }
  };
  const ArrowButton = activeSubscription(16192).ArrowButton;
  intl2 = activeSubscription(1115).intl;
  items[2] = closure_12(ArrowButton, obj6);
  return closure_13(View, obj3);
}
const View = react_native.View;
const AnalyticsLocations = Constants.AnalyticsLocations;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
({ jsx: closure_12, jsxs: map1 } = Fragment);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/SubscribeButton.tsx");

export default function SubscribeButton(listingId) {
  let ROLE_SUBSCRIPTIONS_TAB;
  let activeSubscription;
  let activeSubscriptionListing;
  let currentlySelectedChannelId;
  let intl;
  let intl2;
  let tmp24;
  listingId = listingId.listingId;
  let callback;
  let guild_id;
  let showMemberVerificationGate;
  let tmp = listingId;
  let obj = listingId(showMemberVerificationGate[10]);
  const items = [GuildRoleSubscriptionsStore];
  const items1 = [listingId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleSubscriptionsStore.getSubscriptionGroupListingForSubscriptionListing(listingId), items1);
  const tmp4 = callback;
  let id;
  const tmp5 = callback(showMemberVerificationGate[22]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  ({ activeSubscriptionListing, activeSubscription } = tmp5(id));
  let id1;
  tmp5(id);
  if (activeSubscriptionListing != null) {
    id1 = activeSubscriptionListing.id;
  }
  let obj2 = guild_id(tmp2[9]);
  const first = _slicedToArray(obj2.useSubscriptionPlan(listingId), 1)[0];
  let obj3 = guild_id(tmp2[9]);
  const applicationId = obj3.useApplicationId(listingId);
  const items2 = [SelectedChannelStore];
  const tmp9 = _slicedToArray;
  const tmpResult = tmp(showMemberVerificationGate[10]);
  if (tmpResult.useStateFromStores(items2, () => currentlySelectedChannelId.getCurrentlySelectedChannelId()) === StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
    ROLE_SUBSCRIPTIONS_TAB = AnalyticsLocations.ROLE_SUBSCRIPTION_GATED_CHANNEL;
  } else {
    ROLE_SUBSCRIPTIONS_TAB = AnalyticsLocations.ROLE_SUBSCRIPTIONS_TAB;
  }
  let obj4 = { planId: first.id, analyticsLocation: ROLE_SUBSCRIPTIONS_TAB, skuId: listingId, applicationId };
  const tmp4Result = tmp4(showMemberVerificationGate[11]);
  const createSubscription1 = tmp4Result.useCreateSubscription(obj4);
  const createSubscription = createSubscription1.createSubscription;
  const nativePaymentsConnected = createSubscription1.nativePaymentsConnected;
  const tmp9Result = tmp9(react.useState(false), 2);
  let closure_1 = tmp9Result[1];
  const first1 = tmp9Result[0];
  const items3 = [createSubscription];
  callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_0 = tmp;
            c3 = 1;
            v1(true);
            c1 = 2;
            c4 = 1;
            const obj4 = { value: createSubscription(), done: false };
            return obj4;
          }
        } else if (1 === tmp4) {
          c3 = 0;
          closure_128_1(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_1(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          closure_128_1(false);
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp19) {
        closure_2 = tmp19;
        if (0 === c3) {
          c4 = 3;
          throw tmp19;
        } else {
          c1 = 1;
        }
      }
    }
  }), items3);
  let tmp18 = !nativePaymentsConnected;
  if (nativePaymentsConnected) {
    tmp18 = first1;
  }
  guild_id = undefined;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const tmpResult2 = tmp(showMemberVerificationGate[23]);
  showMemberVerificationGate = tmpResult2.useShowMemberVerificationGate(guild_id);
  const items4 = [callback, guild_id, showMemberVerificationGate];
  if (id1 === listingId) {
    const obj5 = {
      text: intl2.string(tmp(showMemberVerificationGate[14]).t.XvAuMo),
      variant: "secondary",
      disabled: true,
      onPress() {

        }
    };
    const Button = tmp(tmp2[24]).Button;
    intl2 = tmp(tmp2[14]).intl;
    tmp24 = closure_12(Button, obj5);
  } else {
    if (null != activeSubscriptionListing) {
      if (null != activeSubscription) {
        const obj6 = { changeToListingId: listingId, activeListingId: activeSubscriptionListing.id, activeSubscription };
        tmp24 = closure_12(SwitchTiersButton, obj6);
      }
    }
    const obj7 = { text: intl.string(tmp(showMemberVerificationGate[14]).t.BEeXib), onPress: tmp21, loading: tmp18 };
    const tmp4Result2 = tmp4(showMemberVerificationGate[25]);
    intl = tmp(tmp2[14]).intl;
    tmp24 = closure_12(tmp4Result2, obj7);
  }
  return tmp24;
};
