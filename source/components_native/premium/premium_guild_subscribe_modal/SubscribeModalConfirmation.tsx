// Module ID: 12592
// Function ID: 97374
// Name: PendingCancellationWarning
// Dependencies: [5, 31, 27, 11622, 1838, 4023, 3782, 653, 6671, 4018, 33, 4130, 3974, 689, 566, 4022, 9212, 4126, 1212, 12593, 12594, 4543, 12603, 4554, 668, 675, 12560, 44, 4026, 4471, 12607, 1934, 2]
// Exports: default

// Module 12592 (PendingCancellationWarning)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import maybeLoadBundle from "maybeLoadBundle";
import get_ActivityIndicator from "invariant";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_createForOfIteratorHelperLoose";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import ME from "ME";
import { Gradients } from "items";
import { BoostPurchaseIntent } from "BoostedGuildTiers";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hexToRgb from "hexToRgb";

let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_19;
let closure_20;
let closure_21;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function PendingCancellationWarning(slots) {
  slots = slots.slots;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(566) /* initialize */;
  const items = [closure_12];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_12.getPremiumTypeSubscription());
  const found = slots.filter((subscription) => outer1_0(outer1_2[15]).isGuildBoostSlotCanceled(subscription));
  let tmp3 = null;
  if (0 !== found.length) {
    tmp3 = null;
    if (null != stateFromStores) {
      obj = { style: tmp.pendingCancellation };
      obj = { style: tmp.pendingCancellationIcon, source: importDefault(9212) };
      const items1 = [callback(closure_6, obj), ];
      const obj1 = { style: tmp.pendingCancellationMessage, variant: "text-sm/medium" };
      const intl = require(1212) /* getSystemLocale */.intl;
      const obj2 = { date: stateFromStores.currentPeriodEnd, canceledCount: found.length };
      obj1.children = intl.format(require(1212) /* getSystemLocale */.t.SFpsCH, obj2);
      items1[1] = callback(require(4126) /* Text */.Text, obj1);
      obj.children = items1;
      tmp3 = callback2(closure_7, obj);
    }
  }
  return tmp3;
}
function SubscribeConfirmation(arg0) {
  let guild;
  let isModifyingSubscription;
  let require;
  let slots;
  ({ slots, onPremiumGuildSubscribe: require } = arg0);
  ({ guild, isModifyingSubscription } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  obj = { style: tmp.subscribeImage, source: importDefault(12593) };
  const items = [callback(closure_6, obj), , , , , ];
  obj = { style: tmp.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.yTlZV0);
  items[1] = callback(require(4126) /* Text */.Text, obj);
  items[2] = callback(importDefault(12594), { style: tmp.guildPreview, guild });
  const obj2 = { style: items1, variant: "text-sm/medium" };
  items1 = [, ];
  ({ blurb: arr2[0], warning: arr2[1] } = tmp);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl2.format(require(1212) /* getSystemLocale */.t.KPnDlu, { days: closure_16, slotCount: slots.length });
  items[3] = callback(require(4126) /* Text */.Text, obj2);
  items[4] = callback(PendingCancellationWarning, { slots });
  const obj4 = { style: tmp.confirmButton };
  const obj5 = { variant: "primary" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj5.text = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.ZU5x5w, { slotCount: slots.length });
  obj5.onPress = function onPress() {
    callback(false);
  };
  obj5.loading = isModifyingSubscription;
  obj4.children = callback(require(4543) /* Button */.Button, obj5);
  items[5] = callback(closure_7, obj4);
  obj.children = items;
  return callback2(closure_21, obj);
}
function TransferConfirmation(previousGuildSubscriptionSlots) {
  let guild;
  let isModifyingSubscription;
  const prop = previousGuildSubscriptionSlots.previousGuildSubscriptionSlots;
  const onPremiumGuildSubscribe = previousGuildSubscriptionSlots.onPremiumGuildSubscribe;
  ({ guild, isModifyingSubscription } = previousGuildSubscriptionSlots);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = prop(12603);
  const guildSubscriptionRemovalSource = obj.useGuildSubscriptionRemovalSource();
  let obj1 = prop(566);
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
    return outer1_10.getGuild(guildId);
  });
  if (null == stateFromStores) {
    obj = { style: tmp.loading };
    let tmp6 = callback(closure_5, obj);
  } else {
    obj = {};
    obj1 = { style: tmp.transferImage, source: guildSubscriptionRemovalSource };
    const items1 = [callback(closure_6, obj1), , , , , ];
    const obj2 = { style: tmp.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary" };
    const intl = prop(1212).intl;
    obj2.children = intl.string(prop(1212).t.h92jfS);
    items1[1] = callback(prop(4126).Text, obj2);
    const obj3 = { style: tmp.blurb, variant: "text-sm/medium" };
    const intl2 = prop(1212).intl;
    const obj4 = { slotCount: prop.length, guildCount: 1 };
    obj3.children = intl2.format(prop(1212).t.SSA2lu, obj4);
    items1[2] = callback(prop(4126).Text, obj3);
    const obj5 = { style: tmp.transferPreviews };
    const obj6 = { style: tmp.previewHeader, variant: "eyebrow", color: "text-default" };
    const intl3 = prop(1212).intl;
    const obj7 = { guildCount: 1 };
    obj6.children = intl3.format(prop(1212).t["5zQYEz"], obj7);
    const items2 = [callback(prop(4126).Text, obj6), , , ];
    const obj8 = { style: tmp.guildPreview, guild: stateFromStores };
    items2[1] = callback(onPremiumGuildSubscribe(12594), obj8);
    const obj9 = { style: tmp.previewHeader, variant: "eyebrow", color: "text-default" };
    const intl4 = prop(1212).intl;
    const obj10 = { slotCount: prop.length };
    obj9.children = intl4.format(prop(1212).t.ct6oxD, obj10);
    items2[2] = callback(prop(4126).Text, obj9);
    const obj11 = {};
    const items3 = [, ];
    ({ guildPreview: arr5[0], activeTransferGuildCardBorder: arr5[1] } = tmp);
    obj11.style = items3;
    obj11.start = prop(668).HorizontalGradient.START;
    obj11.end = prop(668).HorizontalGradient.END;
    obj11.colors = Gradients.PREMIUM_GUILD;
    const obj12 = { guild };
    obj11.children = callback(onPremiumGuildSubscribe(12594), obj12);
    items2[3] = callback(onPremiumGuildSubscribe(4554), obj11);
    obj5.children = items2;
    items1[3] = callback2(closure_7, obj5);
    const obj13 = { slots: prop };
    items1[4] = callback(PendingCancellationWarning, obj13);
    const obj14 = { style: tmp.confirmButton };
    const obj15 = { variant: "primary" };
    const intl5 = prop(1212).intl;
    const obj16 = { slotCount: prop.length };
    obj15.text = intl5.formatToPlainString(prop(1212).t.Oh6mxU, obj16);
    obj15.onPress = function onPress() {
      return onPremiumGuildSubscribe(true);
    };
    obj15.loading = isModifyingSubscription;
    obj14.children = callback(prop(4543).Button, obj15);
    items1[5] = callback(closure_7, obj14);
    obj.children = items1;
    tmp6 = callback2(closure_21, obj);
    const tmp22 = onPremiumGuildSubscribe(4554);
  }
  return tmp6;
}
({ ActivityIndicator: closure_5, Image: closure_6, View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
({ AnalyticEvents: closure_13, AnalyticsObjects: closure_14, AnalyticsSections: closure_15, GUILD_BOOST_APPLY_COOLDOWN_DAYS: closure_16 } = ME);
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = jsxProd);
_createForOfIteratorHelperLoose = { content: { paddingHorizontal: 24, marginBottom: 24 }, scrollableContent: { alignItems: "center", width: "100%" }, subscribeImage: { marginTop: 105, alignSelf: "center" }, transferImage: { marginTop: 65, alignSelf: "center" }, header: { marginTop: 32, marginBottom: 8 }, transferPreviews: { marginTop: 16, width: "100%" }, previewHeader: { lineHeight: 16, marginTop: 16, letterSpacing: 0.2 }, guildPreview: { marginTop: 8, width: "100%" }, blurb: { lineHeight: 18, textAlign: "center" }, warning: { marginTop: 16 } };
_createForOfIteratorHelperLoose = { marginTop: 16, padding: 16, backgroundColor: null, alignItems: "center", flexDirection: "row" };
_createForOfIteratorHelperLoose.backgroundColor = hexToRgb.hexWithOpacity(require("_createForOfIteratorHelperLoose").unsafe_rawColors.YELLOW_300, 0.1);
_createForOfIteratorHelperLoose.borderRadius = require("_createForOfIteratorHelperLoose").radii.xs;
_createForOfIteratorHelperLoose.borderColor = require("_createForOfIteratorHelperLoose").unsafe_rawColors.YELLOW_300;
_createForOfIteratorHelperLoose.borderWidth = get_ActivityIndicator.StyleSheet.hairlineWidth;
_createForOfIteratorHelperLoose.width = "100%";
_createForOfIteratorHelperLoose.pendingCancellation = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.pendingCancellationMessage = { marginLeft: 10, flexShrink: 1 };
_createForOfIteratorHelperLoose.pendingCancellationIcon = { flexShrink: 0, width: 20, height: 20 };
_createForOfIteratorHelperLoose.loading = { marginTop: 32 };
_createForOfIteratorHelperLoose.confirmButton = { marginTop: 32, width: "100%" };
_createForOfIteratorHelperLoose.activeTransferGuildCardBorder = { padding: 2, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { padding: 2, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/SubscribeModalConfirmation.tsx");

export default function SubscribeModalConfirmation(arg0) {
  let _location;
  let _isNativeReflectConstruct;
  let maybeLoadBundle;
  let importDefault;
  let require;
  ({ guildId: require, guildBoostSlots: importDefault, location: _location } = arg0);
  ({ intent: _isNativeReflectConstruct, onResult: maybeLoadBundle } = arg0);
  let stateFromStores;
  let stateFromStoresArray;
  function handleSubscribe() {
    return _handleSubscribe(...arguments);
  }
  function _handleSubscribe() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = outer1_3(tmp);
    return obj(...arguments);
  }
  const tmp = _createForOfIteratorHelperLoose();
  let closure_5 = React.useRef(_location);
  let items = [_location];
  const effect = React.useEffect(() => {
    closure_5.current = _location;
  }, items);
  const effect1 = React.useEffect(() => {
    let obj = outer1_1(_location[25]);
    obj = { type: outer1_15.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL, location: ref.current };
    obj.track(outer1_13.OPEN_MODAL, obj);
  }, []);
  importDefault(_location[26])();
  let obj = require(_location[14]);
  let items1 = [closure_10];
  stateFromStores = obj.useStateFromStores(items1, () => outer1_10.getGuild(closure_0));
  let obj1 = require(_location[14]);
  const items2 = [closure_9];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => outer1_9.isModifyingAppliedBoost);
  let obj2 = require(_location[14]);
  const items3 = [closure_11];
  stateFromStoresArray = obj2.useStateFromStoresArray(items3, () => {
    if (null != length) {
      if (length.length > 0) {
        return length;
      }
    }
    if (outer1_11.hasFetched) {
      const _Object = Object;
      const values = Object.values(outer1_11.boostSlots);
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
