// Module ID: 12413
// Function ID: 94824
// Name: PendingCancellationWarning
// Dependencies: []
// Exports: default

// Module 12413 (PendingCancellationWarning)
function PendingCancellationWarning(slots) {
  slots = slots.slots;
  const tmp = callback3();
  let obj = arg1(dependencyMap[14]);
  const items = [closure_12];
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const found = slots.filter((subscription) => callback(closure_2[15]).isGuildBoostSlotCanceled(subscription));
  let tmp3 = null;
  if (0 !== found.length) {
    tmp3 = null;
    if (null != stateFromStores) {
      obj = { style: tmp.pendingCancellation };
      obj = { style: tmp.pendingCancellationIcon, source: importDefault(dependencyMap[16]) };
      const items1 = [callback(closure_6, obj), ];
      const obj1 = { style: tmp.pendingCancellationMessage, variant: "text-sm/medium" };
      const intl = arg1(dependencyMap[18]).intl;
      const obj2 = { date: stateFromStores.currentPeriodEnd, canceledCount: found.length };
      obj1.children = intl.format(arg1(dependencyMap[18]).t.SFpsCH, obj2);
      items1[1] = callback(arg1(dependencyMap[17]).Text, obj1);
      obj.children = items1;
      tmp3 = callback2(closure_7, obj);
    }
  }
  return tmp3;
}
function SubscribeConfirmation(arg0) {
  let guild;
  let isModifyingSubscription;
  let slots;
  ({ slots, onPremiumGuildSubscribe: closure_0 } = arg0);
  ({ guild, isModifyingSubscription } = arg0);
  const tmp = callback3();
  let obj = {};
  obj = { style: tmp.subscribeImage, source: importDefault(dependencyMap[19]) };
  const items = [callback(closure_6, obj), , , , , ];
  obj = { Promise: false, marginTop: 0, flags: 4, style: tmp.header };
  const intl = arg1(dependencyMap[18]).intl;
  obj.children = intl.string(arg1(dependencyMap[18]).t.yTlZV0);
  items[1] = callback(arg1(dependencyMap[17]).Text, obj);
  items[2] = callback(importDefault(dependencyMap[20]), { style: tmp.guildPreview, guild });
  const obj2 = { style: items1, variant: "text-sm/medium" };
  const items1 = [, ];
  ({ blurb: arr2[0], warning: arr2[1] } = tmp);
  const intl2 = arg1(dependencyMap[18]).intl;
  obj2.children = intl2.format(arg1(dependencyMap[18]).t.KPnDlu, { days: closure_16, slotCount: slots.length });
  items[3] = callback(arg1(dependencyMap[17]).Text, obj2);
  items[4] = callback(PendingCancellationWarning, { slots });
  const obj4 = { style: tmp.confirmButton };
  const obj5 = { variant: "primary" };
  const intl3 = arg1(dependencyMap[18]).intl;
  obj5.text = intl3.formatToPlainString(arg1(dependencyMap[18]).t.ZU5x5w, { slotCount: slots.length });
  obj5.onPress = function onPress() {
    callback(false);
  };
  obj5.loading = isModifyingSubscription;
  obj4.children = callback(arg1(dependencyMap[21]).Button, obj5);
  items[5] = callback(closure_7, obj4);
  obj.children = items;
  return callback2(closure_21, obj);
}
function TransferConfirmation(previousGuildSubscriptionSlots) {
  let guild;
  let isModifyingSubscription;
  const prop = previousGuildSubscriptionSlots.previousGuildSubscriptionSlots;
  const arg1 = prop;
  const importDefault = previousGuildSubscriptionSlots.onPremiumGuildSubscribe;
  ({ guild, isModifyingSubscription } = previousGuildSubscriptionSlots);
  const tmp = callback3();
  let obj = arg1(dependencyMap[22]);
  const guildSubscriptionRemovalSource = obj.useGuildSubscriptionRemovalSource();
  let obj1 = arg1(dependencyMap[14]);
  const items = [closure_10];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    const found = prop.find((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription);
    let guildId;
    if (null != found) {
      const premiumGuildSubscription = found.premiumGuildSubscription;
      if (null != premiumGuildSubscription) {
        guildId = premiumGuildSubscription.guildId;
      }
    }
    return guild.getGuild(guildId);
  });
  if (null == stateFromStores) {
    obj = { style: tmp.loading };
    let tmp6 = callback(closure_5, obj);
  } else {
    obj = {};
    obj1 = { style: tmp.transferImage, source: guildSubscriptionRemovalSource };
    const items1 = [callback(closure_6, obj1), , , , , ];
    const obj2 = { Promise: false, marginTop: 0, flags: 4, style: tmp.header };
    const intl = arg1(dependencyMap[18]).intl;
    obj2.children = intl.string(arg1(dependencyMap[18]).t.h92jfS);
    items1[1] = callback(arg1(dependencyMap[17]).Text, obj2);
    const obj3 = { style: tmp.blurb, variant: "text-sm/medium" };
    const intl2 = arg1(dependencyMap[18]).intl;
    const obj4 = { slotCount: prop.length, guildCount: 1 };
    obj3.children = intl2.format(arg1(dependencyMap[18]).t.SSA2lu, obj4);
    items1[2] = callback(arg1(dependencyMap[17]).Text, obj3);
    const obj5 = { style: tmp.transferPreviews };
    const obj6 = { style: tmp.previewHeader };
    const intl3 = arg1(dependencyMap[18]).intl;
    const obj7 = { guildCount: 1 };
    obj6.children = intl3.format(arg1(dependencyMap[18]).t.5zQYEz, obj7);
    const items2 = [callback(arg1(dependencyMap[17]).Text, obj6), , , ];
    const obj8 = { style: tmp.guildPreview, guild: stateFromStores };
    items2[1] = callback(importDefault(dependencyMap[20]), obj8);
    const obj9 = { style: tmp.previewHeader };
    const intl4 = arg1(dependencyMap[18]).intl;
    const obj10 = { slotCount: prop.length };
    obj9.children = intl4.format(arg1(dependencyMap[18]).t.ct6oxD, obj10);
    items2[2] = callback(arg1(dependencyMap[17]).Text, obj9);
    const obj11 = {};
    const items3 = [, ];
    ({ guildPreview: arr5[0], activeTransferGuildCardBorder: arr5[1] } = tmp);
    obj11.style = items3;
    obj11.start = arg1(dependencyMap[24]).HorizontalGradient.START;
    obj11.end = arg1(dependencyMap[24]).HorizontalGradient.END;
    obj11.colors = Gradients.PREMIUM_GUILD;
    const obj12 = { guild };
    obj11.children = callback(importDefault(dependencyMap[20]), obj12);
    items2[3] = callback(importDefault(dependencyMap[23]), obj11);
    obj5.children = items2;
    items1[3] = callback2(closure_7, obj5);
    const obj13 = { slots: prop };
    items1[4] = callback(PendingCancellationWarning, obj13);
    const obj14 = { style: tmp.confirmButton };
    const obj15 = { variant: "primary" };
    const intl5 = arg1(dependencyMap[18]).intl;
    const obj16 = { slotCount: prop.length };
    obj15.text = intl5.formatToPlainString(arg1(dependencyMap[18]).t.Oh6mxU, obj16);
    obj15.onPress = function onPress() {
      return onPremiumGuildSubscribe(true);
    };
    obj15.loading = isModifyingSubscription;
    obj14.children = callback(arg1(dependencyMap[21]).Button, obj15);
    items1[5] = callback(closure_7, obj14);
    obj.children = items1;
    tmp6 = callback2(closure_21, obj);
    const tmp22 = importDefault(dependencyMap[23]);
  }
  return tmp6;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
({ ActivityIndicator: closure_5, Image: closure_6, View: closure_7, ScrollView: closure_8 } = tmp2);
let closure_9 = importDefault(dependencyMap[3]);
let closure_10 = importDefault(dependencyMap[4]);
let closure_11 = importDefault(dependencyMap[5]);
let closure_12 = importDefault(dependencyMap[6]);
({ AnalyticEvents: closure_13, AnalyticsObjects: closure_14, AnalyticsSections: closure_15, GUILD_BOOST_APPLY_COOLDOWN_DAYS: closure_16 } = arg1(dependencyMap[7]));
const Gradients = arg1(dependencyMap[8]).Gradients;
const BoostPurchaseIntent = arg1(dependencyMap[9]).BoostPurchaseIntent;
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = arg1(dependencyMap[10]));
let obj = arg1(dependencyMap[11]);
obj = { content: { "Null": false, "Null": false }, scrollableContent: { 0: false, 0: false }, subscribeImage: {}, transferImage: { "Null": 1711276616, "Null": 1358955199 }, header: { visible: true, transparent: true }, transferPreviews: { "Null": false, "Null": false }, previewHeader: { 1977447900: 0, 8: null, 9: 101 }, guildPreview: { "Null": null, "Null": null }, blurb: { 9223372036854775807: false, 9223372036854775807: false }, warning: { marginTop: 16 } };
obj = {};
const tmp4 = arg1(dependencyMap[10]);
obj.backgroundColor = arg1(dependencyMap[12]).hexWithOpacity(importDefault(dependencyMap[13]).unsafe_rawColors.YELLOW_300, 0.1);
obj.borderRadius = importDefault(dependencyMap[13]).radii.xs;
obj.borderColor = importDefault(dependencyMap[13]).unsafe_rawColors.YELLOW_300;
obj.borderWidth = tmp2.StyleSheet.hairlineWidth;
obj.width = "100%";
obj.pendingCancellation = obj;
obj.pendingCancellationMessage = { -1122219564: "y", 1675711085: "getTimestampAccessibilityLabel" };
obj.pendingCancellationIcon = { borderRadius: "d360e66ed8ba0a3060c68a8e44e7aa91", backgroundColor: "tier_3_24px", paddingHorizontal: "png" };
obj.loading = { marginTop: 32 };
obj.confirmButton = { "Null": 106, "Null": "hidden" };
const obj4 = arg1(dependencyMap[12]);
obj.activeTransferGuildCardBorder = { padding: 2, borderRadius: importDefault(dependencyMap[13]).radii.xs };
let closure_22 = obj.createStyles(obj);
const obj1 = { padding: 2, borderRadius: importDefault(dependencyMap[13]).radii.xs };
const result = arg1(dependencyMap[32]).fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/SubscribeModalConfirmation.tsx");

export default function SubscribeModalConfirmation(arg0) {
  let _location;
  ({ guildId: closure_0, guildBoostSlots: closure_1, location: _location } = arg0);
  const dependencyMap = _location;
  ({ intent: closure_3, onResult: closure_4 } = arg0);
  let stateFromStores;
  let stateFromStoresArray;
  function handleSubscribe() {
    return _handleSubscribe(...arguments);
  }
  function _handleSubscribe() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _handleSubscribe = obj;
    return obj(...arguments);
  }
  const tmp = callback3();
  let closure_5 = React.useRef(_location);
  const items = [_location];
  const effect = React.useEffect(() => {
    closure_5.current = _location;
  }, items);
  const effect1 = React.useEffect(() => {
    let obj = lib(_location[25]);
    obj = { type: constants2.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL, location: ref.current };
    obj.track(constants.OPEN_MODAL, obj);
  }, []);
  importDefault(dependencyMap[26])();
  let obj = arg1(dependencyMap[14]);
  const items1 = [closure_10];
  stateFromStores = obj.useStateFromStores(items1, () => guild.getGuild(closure_0));
  let obj1 = arg1(dependencyMap[14]);
  const items2 = [closure_9];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => obj.isModifyingAppliedBoost);
  let obj2 = arg1(dependencyMap[14]);
  const items3 = [closure_11];
  stateFromStoresArray = obj2.useStateFromStoresArray(items3, () => {
    if (null != lib) {
      if (lib.length > 0) {
        return lib;
      }
    }
    if (closure_11.hasFetched) {
      const _Object = Object;
      const values = Object.values(closure_11.boostSlots);
      const found = values.filter((isAvailable) => isAvailable.isAvailable());
      let sorted = found.sort((subscription) => {
        let num = -1;
        if (obj.isGuildBoostSlotCanceled(subscription)) {
          num = 1;
        }
        return num;
      });
    } else {
      sorted = [];
    }
    if (sorted.length > 0) {
      const items = [sorted[0]];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  });
  if (0 === stateFromStoresArray.length) {
    obj = { style: tmp.loading };
    let tmp14Result = callback(closure_5, obj);
  } else {
    obj = {};
    obj1 = {};
    ({ scrollableContent: obj8.contentContainerStyle, content: obj8.style } = tmp);
    if (tmp7) {
      obj2 = { guild: stateFromStores, onPremiumGuildSubscribe: handleSubscribe, previousGuildSubscriptionSlots: stateFromStoresArray, isModifyingSubscription: stateFromStores1 };
      let tmp17Result = tmp17(TransferConfirmation, obj2);
    } else {
      const obj3 = { guild: stateFromStores, slots: stateFromStoresArray, isModifyingSubscription: stateFromStores1, onPremiumGuildSubscribe: handleSubscribe };
      tmp17Result = tmp17(SubscribeConfirmation, obj3);
    }
    obj1.children = tmp17Result;
    obj.children = callback(_handleSubscribe, obj1);
    tmp14Result = tmp14(stateFromStoresArray, obj);
    const tmp15 = stateFromStoresArray;
    const tmp16 = _handleSubscribe;
  }
  return tmp14Result;
};
