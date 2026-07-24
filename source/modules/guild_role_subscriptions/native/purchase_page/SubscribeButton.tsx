// Module ID: 15321
// Function ID: 116834
// Name: emphasisHook
// Dependencies: [5, 57, 31, 27, 1906, 3752, 653, 1355, 33, 14166, 566, 7433, 4126, 4471, 1212, 9181, 3712, 1273, 15315, 4098, 15322, 1934, 15311, 4619, 4543, 9391, 2]
// Exports: default

// Module 15321 (emphasisHook)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { AnalyticsLocations } from "ME";
import { StaticChannelRoute } from "set";
import jsxProd from "jsxProd";

let closure_12;
let closure_13;
const require = arg1;
function emphasisHook(children) {
  const obj = { variant: "text-xs/semibold", color: "text-default", children };
  return callback2(require(4126) /* Text */.Text, obj);
}
function SwitchTiersButton(activeSubscription) {
  activeSubscription = activeSubscription.activeSubscription;
  const activeListingId = activeSubscription.activeListingId;
  const changeToListingId = activeSubscription.changeToListingId;
  let obj = changeToListingId(14166);
  let obj1 = activeListingId(3712)(activeSubscription.currentPeriodEnd);
  obj = {};
  obj = { variant: "text-xs/normal", color: "text-muted" };
  const intl = activeSubscription(1212).intl;
  obj1 = { activeListingName: callback(obj.useName(activeListingId), 1)[0], billingEndDate: obj1.format("MMMM Do"), emphasisHook };
  obj.children = intl.format(activeSubscription(1212).t.lA7ztO, obj1);
  const items = [callback2(activeSubscription(4126).Text, obj), callback2(activeSubscription(1273).Spacer, { size: 16 }), ];
  const obj2 = {};
  const intl2 = activeSubscription(1212).intl;
  obj2.text = intl2.string(activeSubscription(1212).t.SACegK);
  obj2.onPress = function onPress() {
    let obj = activeListingId(outer1_3[19]);
    obj = { activeSubscription, activeListingId, changeToListingId };
    obj.openLazy(activeSubscription(outer1_3[21])(outer1_3[20], outer1_3.paths), "ChangeSubscriptionCard:" + changeToListingId, obj);
  };
  items[2] = callback2(activeSubscription(15315).ArrowButton, obj2);
  obj.children = items;
  return callback3(View, obj);
}
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
const result = require("result").fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/SubscribeButton.tsx");

export default function SubscribeButton(listingId) {
  let activeSubscription;
  let activeSubscriptionListing;
  listingId = listingId.listingId;
  let createSubscription;
  let guild_id;
  let showMemberVerificationGate;
  let obj = listingId(showMemberVerificationGate[10]);
  let items = [closure_9];
  let items1 = [listingId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_9.getSubscriptionGroupListingForSubscriptionListing(listingId), items1);
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  const tmp2 = createSubscription(showMemberVerificationGate[22]);
  ({ activeSubscriptionListing, activeSubscription } = createSubscription(showMemberVerificationGate[22])(id));
  let id1;
  if (null != activeSubscriptionListing) {
    id1 = activeSubscriptionListing.id;
  }
  let tmp6 = (function useCreateRoleSubscription(listingId) {
    let obj = guild_id(showMemberVerificationGate[9]);
    const applicationId = guild_id(showMemberVerificationGate[9]).useApplicationId(listingId);
    const obj2 = guild_id(showMemberVerificationGate[9]);
    const items = [outer1_8];
    if (obj3.useStateFromStores(items, () => outer2_8.getCurrentlySelectedChannelId()) === outer1_11.ROLE_SUBSCRIPTIONS) {
      let ROLE_SUBSCRIPTIONS_TAB = outer1_10.ROLE_SUBSCRIPTION_GATED_CHANNEL;
    } else {
      ROLE_SUBSCRIPTIONS_TAB = outer1_10.ROLE_SUBSCRIPTIONS_TAB;
    }
    obj3 = listingId(showMemberVerificationGate[10]);
    obj = { planId: outer1_5(obj.useSubscriptionPlan(listingId), 1)[0].id, analyticsLocation: ROLE_SUBSCRIPTIONS_TAB, skuId: listingId, applicationId };
    createSubscription = createSubscription(showMemberVerificationGate[11]).useCreateSubscription(obj);
    createSubscription = createSubscription.createSubscription;
    const tmp6 = outer1_5(outer1_6.useState(false), 2);
    let closure_1 = tmp6[1];
    obj = { createSubscription: outer1_6.useCallback(outer1_4(tmp), items1), loading: tmp7 };
    // CreateGeneratorClosureLongIndex (0x67)
    items1 = [createSubscription];
    return obj;
  })(listingId);
  createSubscription = tmp6.createSubscription;
  guild_id = undefined;
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  let obj1 = listingId(showMemberVerificationGate[23]);
  showMemberVerificationGate = obj1.useShowMemberVerificationGate(guild_id);
  const items2 = [createSubscription, guild_id, showMemberVerificationGate];
  if (id1 === listingId) {
    obj = { text: null, variant: "secondary", disabled: true };
    let intl2 = listingId(showMemberVerificationGate[14]).intl;
    obj.text = intl2.string(listingId(showMemberVerificationGate[14]).t.XvAuMo);
    obj.onPress = function onPress() {

    };
    let tmp15 = callback2(listingId(showMemberVerificationGate[24]).Button, obj);
  } else {
    if (null != activeSubscriptionListing) {
      if (null != activeSubscription) {
        obj = { changeToListingId: listingId, activeListingId: activeSubscriptionListing.id, activeSubscription };
        tmp15 = callback2(SwitchTiersButton, obj);
      }
    }
    obj1 = {};
    let intl = listingId(showMemberVerificationGate[14]).intl;
    obj1.text = intl.string(listingId(showMemberVerificationGate[14]).t.BEeXib);
    obj1.onPress = tmp9;
    obj1.loading = tmp6.loading;
    tmp15 = callback2(createSubscription(showMemberVerificationGate[25]), obj1);
    const tmp13 = createSubscription(showMemberVerificationGate[25]);
  }
  return tmp15;
};
