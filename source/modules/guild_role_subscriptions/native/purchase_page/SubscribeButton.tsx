// Module ID: 15141
// Function ID: 114242
// Name: emphasisHook
// Dependencies: []
// Exports: default

// Module 15141 (emphasisHook)
function emphasisHook(children) {
  const obj = { INTEGRATION_CREATE: 16, ConstraintReasonCode: true, children };
  return callback2(arg1(dependencyMap[12]).Text, obj);
}
function SwitchTiersButton(activeSubscription) {
  activeSubscription = activeSubscription.activeSubscription;
  const arg1 = activeSubscription;
  const activeListingId = activeSubscription.activeListingId;
  const importDefault = activeListingId;
  const importAll = activeSubscription.changeToListingId;
  let obj = importAll(dependencyMap[9]);
  let obj1 = importDefault(dependencyMap[16])(activeSubscription.currentPeriodEnd);
  obj = {};
  obj = {};
  const intl = arg1(dependencyMap[14]).intl;
  obj1 = { activeListingName: callback(obj.useName(activeListingId), 1)[0], billingEndDate: obj1.format("MMMM Do"), emphasisHook };
  obj.children = intl.format(arg1(dependencyMap[14]).t.lA7ztO, obj1);
  const items = [callback2(arg1(dependencyMap[12]).Text, obj), callback2(arg1(dependencyMap[17]).Spacer, { size: 16 }), ];
  const obj2 = {};
  const intl2 = arg1(dependencyMap[14]).intl;
  obj2.text = intl2.string(arg1(dependencyMap[14]).t.SACegK);
  obj2.onPress = function onPress() {
    let obj = activeListingId(paths[19]);
    obj = { activeSubscription, activeListingId, changeToListingId };
    obj.openLazy(activeSubscription(paths[21])(paths[20], paths.paths), "ChangeSubscriptionCard:" + changeToListingId, obj);
  };
  items[2] = callback2(arg1(dependencyMap[18]).ArrowButton, obj2);
  obj.children = items;
  return callback3(View, obj);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const AnalyticsLocations = arg1(dependencyMap[6]).AnalyticsLocations;
const StaticChannelRoute = arg1(dependencyMap[7]).StaticChannelRoute;
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[8]));
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/SubscribeButton.tsx");

export default function SubscribeButton(listingId) {
  let activeSubscription;
  let activeSubscriptionListing;
  listingId = listingId.listingId;
  const arg1 = listingId;
  let importDefault;
  let importAll;
  let dependencyMap;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_9];
  const items1 = [listingId];
  const stateFromStores = obj.useStateFromStores(items, () => subscriptionGroupListingForSubscriptionListing.getSubscriptionGroupListingForSubscriptionListing(listingId), items1);
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  const tmp2 = importDefault(dependencyMap[22]);
  ({ activeSubscriptionListing, activeSubscription } = importDefault(dependencyMap[22])(id));
  let id1;
  if (null != activeSubscriptionListing) {
    id1 = activeSubscriptionListing.id;
  }
  const tmp6 = function useCreateRoleSubscription(listingId) {
    let obj = guild_id(showMemberVerificationGate[9]);
    const applicationId = guild_id(showMemberVerificationGate[9]).useApplicationId(listingId);
    const obj2 = guild_id(showMemberVerificationGate[9]);
    const items = [closure_8];
    if (obj3.useStateFromStores(items, () => currentlySelectedChannelId.getCurrentlySelectedChannelId()) === constants2.ROLE_SUBSCRIPTIONS) {
      let ROLE_SUBSCRIPTIONS_TAB = constants.ROLE_SUBSCRIPTION_GATED_CHANNEL;
    } else {
      ROLE_SUBSCRIPTIONS_TAB = constants.ROLE_SUBSCRIPTIONS_TAB;
    }
    const obj3 = listingId(showMemberVerificationGate[10]);
    obj = { planId: callback2(obj.useSubscriptionPlan(listingId), 1)[0].id, analyticsLocation: ROLE_SUBSCRIPTIONS_TAB, skuId: listingId, applicationId };
    let createSubscription = createSubscription(showMemberVerificationGate[11]).useCreateSubscription(obj);
    createSubscription = createSubscription.createSubscription;
    listingId = createSubscription;
    const tmp6 = callback2(React.useState(false), 2);
    createSubscription = tmp6[1];
    obj = { createSubscription: React.useCallback(callback(tmp), items1), loading: tmp7 };
    // CreateGeneratorClosureLongIndex (0x67)
    const items1 = [createSubscription];
    return obj;
  }(listingId);
  const createSubscription = tmp6.createSubscription;
  importDefault = createSubscription;
  let guild_id;
  if (null != stateFromStores) {
    guild_id = stateFromStores.guild_id;
  }
  importAll = guild_id;
  let obj1 = arg1(dependencyMap[23]);
  const showMemberVerificationGate = obj1.useShowMemberVerificationGate(guild_id);
  dependencyMap = showMemberVerificationGate;
  const items2 = [createSubscription, guild_id, showMemberVerificationGate];
  if (id1 === listingId) {
    obj = {};
    const intl2 = arg1(dependencyMap[14]).intl;
    obj.text = intl2.string(arg1(dependencyMap[14]).t.XvAuMo);
    obj.onPress = function onPress() {

    };
    let tmp15 = callback2(arg1(dependencyMap[24]).Button, obj);
  } else {
    if (null != activeSubscriptionListing) {
      if (null != activeSubscription) {
        obj = { changeToListingId: listingId, activeListingId: activeSubscriptionListing.id, activeSubscription };
        tmp15 = callback2(SwitchTiersButton, obj);
      }
    }
    obj1 = {};
    const intl = arg1(dependencyMap[14]).intl;
    obj1.text = intl.string(arg1(dependencyMap[14]).t.BEeXib);
    obj1.onPress = tmp9;
    obj1.loading = tmp6.loading;
    tmp15 = callback2(importDefault(dependencyMap[25]), obj1);
    const tmp13 = importDefault(dependencyMap[25]);
  }
  return tmp15;
};
