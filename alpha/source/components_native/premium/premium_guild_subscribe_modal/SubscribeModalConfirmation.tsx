// Module ID: 15493
// Function ID: 15494
// Name: SubscribeModalConfirmation
// Dependencies: [5, 19, 17, 14121, 4885, 7585, 2052, 1072, 7617, 21, 5014, 5011, 575, 504, 8463, 5717, 15494, 5624, 1113, 15495, 15496, 5634, 15505, 5587, 1092, 1252, 15459, 38, 8465, 5959, 15509, 1994, 2]
// Exports: default

// Module 15493 (SubscribeModalConfirmation)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl6 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import FastImageDefault from "FastImage" /* 5717 */;
import ColorConstants from "ColorConstants" /* 7617 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 8463 */;
import AssetRegistryDefault from "AssetRegistry" /* 15494 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 15495 */;
import PremiumGuildPreviewDefault from "PremiumGuildPreview" /* 15496 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AppliedGuildBoostStore from "AppliedGuildBoostStore" /* 14121 */;
import GuildStore from "GuildStore" /* 4885 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 7585 */;
import SubscriptionStore from "SubscriptionStore" /* 2052 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import ColorUtils_mod from "ColorUtils" /* 5011 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c5, c6;

let ColorUtils;
let StyleSheet;
let closure_12;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let closure_19;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function PendingCancellationWarning(slots) {
  let intl;
  let items1;
  let obj5;
  let premiumTypeSubscription;
  slots = slots.slots;
  const tmp = closure_20();
  let obj = get_initialized;
  const items = [SubscriptionStore];
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const found = slots.filter((item) => {
    const obj = GuildBoostingUtils;
    return obj.isGuildBoostSlotCanceled(item);
  });
  let tmp5 = null;
  if (0 !== found.length) {
    tmp5 = null;
    if (null != stateFromStores) {
      const obj2 = { style: tmp.pendingCancellation, children: items1 };
      const obj3 = { style: tmp.pendingCancellationIcon, source: AssetRegistryDefault };
      const tmp10 = FastImageDefault;
      items1 = [closure_17(tmp10, obj3), ];
      const obj4 = { style: tmp.pendingCancellationMessage, variant: "text-sm/medium", children: intl.format(intl6.t.SFpsCH, obj5) };
      const Text = tmp2(5624).Text;
      intl = tmp2(1113).intl;
      obj5 = { date: stateFromStores.currentPeriodEnd, canceledCount: found.length };
      items1[1] = closure_17(Text, obj4);
      tmp5 = authStore5(metroRequire, obj2);
    }
  }
  return tmp5;
}
function SubscribeConfirmation(arg0) {
  let Button;
  let closure_129_0;
  let guild;
  let intl;
  let intl2;
  let intl3;
  let isModifyingSubscription;
  let items;
  let items1;
  let obj6;
  let obj8;
  let obj9;
  let slots;
  ({ slots, onPremiumGuildSubscribe: closure_129_0 } = arg0);
  ({ guild, isModifyingSubscription } = arg0);
  const tmp = closure_20();
  const obj = { children: items };
  const obj2 = { style: tmp.subscribeImage, source: AssetRegistryDefault2 };
  const tmp2 = FastImageDefault;
  items = [closure_17(tmp2, obj2), , , , , ];
  const obj3 = { style: tmp.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl6.t.yTlZV0) };
  const Text = Text_Text.Text;
  intl = intl6.intl;
  items[1] = closure_17(Text, obj3);
  const obj4 = { style: tmp.guildPreview, guild };
  items[2] = closure_17(PremiumGuildPreviewDefault, obj4);
  const obj5 = { style: items1, variant: "text-sm/medium", children: intl2.format(intl6.t.KPnDlu, obj6) };
  items1 = [, ];
  ({ blurb: arr2[0], warning: arr2[1] } = tmp);
  const Text2 = Text_Text.Text;
  intl2 = intl6.intl;
  obj6 = { days, slotCount: slots.length };
  items[3] = closure_17(Text2, obj5);
  items[4] = closure_17(PendingCancellationWarning, { slots });
  const obj7 = { style: tmp.confirmButton, children: closure_17(Button, obj8) };
  obj8 = {
    variant: "primary",
    text: intl3.formatToPlainString(intl6.t.ZU5x5w, obj9),
    onPress() {
      closure_1_0(false);
    },
    loading: isModifyingSubscription
  };
  Button = components_Button_Button.Button;
  intl3 = intl6.intl;
  obj9 = { slotCount: slots.length };
  items[5] = closure_17(metroRequire, obj7);
  return authStore5(closure_19, obj);
}
function TransferConfirmation(previousGuildSubscriptionSlots) {
  let Button;
  let guild;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let isModifyingSubscription;
  let items1;
  let items2;
  let items3;
  let obj13;
  let obj15;
  let obj18;
  let obj19;
  let obj8;
  let tmp8;
  const prop = previousGuildSubscriptionSlots.previousGuildSubscriptionSlots;
  const onPremiumGuildSubscribe = previousGuildSubscriptionSlots.onPremiumGuildSubscribe;
  ({ guild, isModifyingSubscription } = previousGuildSubscriptionSlots);
  const tmp = closure_20();
  const obj = prop(15505);
  const guildSubscriptionRemovalSource = obj.useGuildSubscriptionRemovalSource();
  const items = [GuildStore];
  const obj2 = prop(504);
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const found = prop.find((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription);
    let guildId;
    if (found != null) {
      const premiumGuildSubscription = found.premiumGuildSubscription;
      if (premiumGuildSubscription != null) {
        guildId = premiumGuildSubscription.guildId;
      }
    }
    return GuildStore.getGuild(guildId);
  });
  if (null == stateFromStores) {
    const obj3 = { style: tmp.loading };
    tmp8 = closure_17(closure_5, obj3);
  } else {
    const obj4 = { children: items1 };
    const obj5 = { style: tmp.transferImage, source: guildSubscriptionRemovalSource };
    items1 = [closure_17(onPremiumGuildSubscribe(5717), obj5), , , , , ];
    const obj6 = { style: tmp.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.string(prop(1113).t.h92jfS) };
    const Text = tmp2(5624).Text;
    intl = tmp2(1113).intl;
    items1[1] = closure_17(Text, obj6);
    const obj7 = { style: tmp.blurb, variant: "text-sm/medium", children: intl2.format(prop(1113).t.SSA2lu, obj8) };
    const Text2 = tmp2(5624).Text;
    intl2 = tmp2(1113).intl;
    obj8 = { slotCount: prop.length, guildCount: 1 };
    items1[2] = closure_17(Text2, obj7);
    const obj9 = { style: tmp.transferPreviews, children: items2 };
    const obj10 = { style: tmp.previewHeader, variant: "eyebrow", color: "text-default", children: intl3.format(prop(1113).t["5zQYEz"], { guildCount: 1 }) };
    const Text3 = tmp2(5624).Text;
    intl3 = tmp2(1113).intl;
    items2 = [closure_17(Text3, obj10), , , ];
    const obj11 = { style: tmp.guildPreview, guild: stateFromStores };
    items2[1] = closure_17(onPremiumGuildSubscribe(15496), obj11);
    const obj12 = { style: tmp.previewHeader, variant: "eyebrow", color: "text-default", children: intl4.format(prop(1113).t.ct6oxD, obj13) };
    const Text4 = tmp2(5624).Text;
    intl4 = tmp2(1113).intl;
    obj13 = { slotCount: prop.length };
    items2[2] = closure_17(Text4, obj12);
    const obj14 = { style: items3, start: prop(1092).HorizontalGradient.START, end: prop(1092).HorizontalGradient.END, colors: Gradients.PREMIUM_GUILD, children: closure_17(onPremiumGuildSubscribe(15496), obj15) };
    items3 = [, ];
    ({ guildPreview: arr5[0], activeTransferGuildCardBorder: arr5[1] } = tmp);
    obj15 = { guild };
    const tmp14 = onPremiumGuildSubscribe(5587);
    items2[3] = closure_17(tmp14, obj14);
    items1[3] = closure_18(closure_6, obj9);
    const obj16 = { slots: prop };
    items1[4] = closure_17(PendingCancellationWarning, obj16);
    const obj17 = { style: tmp.confirmButton, children: closure_17(Button, obj18) };
    obj18 = {
      variant: "primary",
      text: intl5.formatToPlainString(prop(1113).t.Oh6mxU, obj19),
      onPress() {
          return onPremiumGuildSubscribe(true);
        },
      loading: isModifyingSubscription
    };
    Button = tmp2(5634).Button;
    intl5 = tmp2(1113).intl;
    obj19 = { slotCount: prop.length };
    items1[5] = closure_17(closure_6, obj17);
    tmp8 = closure_18(closure_19, obj4);
  }
  return tmp8;
}
({ ActivityIndicator: hasOwnProperty, View: metroRequire, ScrollView: metroImportDefault, StyleSheet } = react_native);
({ AnalyticEvents: closure_12, AnalyticsObjects: map1, AnalyticsSections: closure_14, GUILD_BOOST_APPLY_COOLDOWN_DAYS: closure_15 } = Constants);
const Gradients = ColorConstants.Gradients;
({ jsx: closure_17, jsxs: closure_18, Fragment: closure_19 } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: { paddingHorizontal: 24, marginBottom: 24 }, scrollableContent: { alignItems: "center", width: "100%" }, subscribeImage: { marginTop: 105, alignSelf: "center" }, transferImage: { marginTop: 65, alignSelf: "center" }, header: { marginTop: 32, marginBottom: 8 }, transferPreviews: { marginTop: 16, width: "100%" }, previewHeader: { lineHeight: 16, marginTop: 16, letterSpacing: 0.2 }, guildPreview: { marginTop: 8, width: "100%" }, blurb: { lineHeight: 18, textAlign: "center" }, warning: { marginTop: 16 }, pendingCancellation: obj2, pendingCancellationMessage: { marginLeft: 10, flexShrink: 1 }, pendingCancellationIcon: { flexShrink: 0, width: 20, height: 20 }, loading: { marginTop: 32 }, confirmButton: { marginTop: 32, width: "100%" }, activeTransferGuildCardBorder: obj3 };
obj2 = { marginTop: 16, padding: 16, backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.YELLOW_300, 0.1), alignItems: "center", flexDirection: "row", borderRadius: nativeDefault.radii.xs, borderColor: nativeDefault.unsafe_rawColors.YELLOW_300, borderWidth: StyleSheet.hairlineWidth, width: "100%" };
createStyles = createStyles.createStyles;
ColorUtils = ColorUtils_mod;
obj3 = { padding: 2, borderRadius: nativeDefault.radii.xs };
let closure_20 = createStyles(obj);
const result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/SubscribeModalConfirmation.tsx");

export default function SubscribeModalConfirmation(arg0) {
  let _location;
  let tmp14Result;
  let tmp14Result2;
  ({ guildId: require, guildBoostSlots: importDefault, location: _location } = arg0);
  ({ intent: _asyncToGenerator, onResult: react } = arg0);
  let obj = function _handleSubscribe() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_1;
      let closure_2;
      let intl;
      let intl2;
      let obj8;
      let tmp;
      let closure_0 = arg0;
      if (c6 === 2) {
        c6 = 3;
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
        let c4;
        try {
          let paths;
          c6 = 2;
          const tmp4 = c5;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              paths = tmp;
              let everyResult = stateFromStoresArray.length > 0;
              const tmp52 = closure_0;
              const tmp55 = tmp(paths[27]);
              if (everyResult) {
                everyResult = stateFromStoresArray.every(function(cooldownEndsAt) {
                  let tmp = null == cooldownEndsAt.cooldownEndsAt;
                  if (!tmp) {
                    const _Date = Date;
                    const self = this;
                    const self2 = this;
                    const _Date2 = Date;
                    const date = new Date(cooldownEndsAt.cooldownEndsAt);
                    const valueOfResult = date.valueOf();
                    tmp = valueOfResult < Date.now();
                  }
                  return tmp;
                });
              }
              tmp55(everyResult, "Cannot use a premium guild subscription slot while on cooldown");
              c4 = 1;
              if (tmp52) {
                const _Promise = Promise;
                c5 = 2;
                c6 = 1;
                const obj5 = {
                  value: Promise.all(stateFromStoresArray.map((premiumGuildSubscription) => {
                              let unapplyFromGuildResult;
                              premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
                              if (null != premiumGuildSubscription) {
                                obj = closure_1_0(paths[28]);
                                unapplyFromGuildResult = obj.unapplyFromGuild(premiumGuildSubscription.guildId, premiumGuildSubscription.id);
                              } else {
                                unapplyFromGuildResult = Promise.resolve();
                              }
                              return unapplyFromGuildResult;
                            })),
                  done: false
                };
                return obj5;
              }
            }
          } else {
            if (1 === tmp4) {
              c4 = 0;
              if (closure_130_4 != null) {
                closure_130_4(false);
              }
              const obj6 = { title: intl.string(closure_0(paths[18]).t.Kx5W0V), body: intl2.string(closure_0(paths[18]).t.XueBVY) };
              const show = tmp(paths[29]).show;
              const tmp23 = tmp(paths[29]);
              intl = closure_0(paths[18]).intl;
              intl2 = closure_0(paths[18]).intl;
              show(obj6);
            } else if (2 === tmp4) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                const obj7 = { value, done: true };
                return obj7;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              if (closure_130_4 != null) {
                closure_130_4(true);
              }
              obj = tmp(paths[29]);
              const obj10 = {
                importer() {
                          let guildBoostSlots;
                          const promise = guildId(paths[31])(paths[30], paths.paths);
                          return promise.then((result) => {
                            closure_0 = result.default;
                            return (arg0) => {
                              obj = { guildId, guildBoostSlots };
                              const merged = Object.assign(arg0);
                              return closure_3_17(closure_0, obj);
                            };
                          });
                        },
                isDismissable: false
              };
              obj.openLazy(obj10);
              const obj11 = { type: constants3.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL, location_object: constants2.BUTTON_CTA };
              const obj3 = tmp(paths[25]);
              obj3.track(constants.MODAL_DISMISSED, obj11);
              c4 = 0;
            }
            c6 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
          const obj12 = { disablePowerupAutoApply: null != closure_130_3 };
          c5 = 3;
          c6 = 1;
          const obj13 = { value: obj8.applyToGuild(closure_130_6.id, closure_130_7.map((id) => id.id), obj12), done: false };
          obj8 = closure_0(paths[28]);
          return obj13;
        } catch (tmp43) {
          let closure_3 = tmp43;
          if (0 === c4) {
            c6 = 3;
            throw tmp43;
          } else {
            c5 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = closure_20();
  const ref = react.useRef(_location);
  let items = [_location];
  const effect = react.useEffect(() => {
    ref.current = _location;
  }, items);
  const effect1 = react.useEffect(() => {
    obj = AnalyticsUtilsDefault;
    const obj2 = { type: constants2.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL, location: ref.current };
    obj.track(constants.OPEN_MODAL, obj2);
  }, []);
  let tmp4 = require("useFetchGuildBoostSlots")();
  obj = require("get initialized");
  let items1 = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items1, () => GuildStore.getGuild(require));
  let obj2 = require("get initialized");
  const items2 = [obj];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => obj.isModifyingAppliedBoost);
  let obj3 = require("get initialized");
  const items3 = [GuildBoostSlotStore];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items3, () => {
    let items1;
    let sorted;
    if (null != importDefault) {
      let num = 0;
      if (importDefault.length > 0) {
        return importDefault;
      }
    }
    if (GuildBoostSlotStore.hasFetched) {
      const _Object = Object;
      const values = Object.values(tmp.boostSlots);
      const found = values.filter((isAvailable) => isAvailable.isAvailable());
      sorted = found.sort((subscription) => {
        let num = -1;
        obj = closure_1_0(_location[14]);
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
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  });
  if (0 === stateFromStoresArray.length) {
    let obj4 = { style: tmp.loading };
    tmp14Result2 = closure_17(ref, obj4);
  } else {
    function handleSubscribe() {
      return obj(...arguments);
    }
    let obj5 = { contentContainerStyle: null, style: null, children: tmp14Result };
    ({ scrollableContent: obj8.contentContainerStyle, content: obj8.style } = tmp);
    const tmp15 = stateFromStores;
    const tmp16 = stateFromStoresArray;
    if (tmp7) {
      let obj6 = { guild: stateFromStores, onPremiumGuildSubscribe: handleSubscribe, previousGuildSubscriptionSlots: stateFromStoresArray, isModifyingSubscription: stateFromStores1 };
      tmp14Result = tmp14(TransferConfirmation, obj6);
    } else {
      let obj7 = { guild: stateFromStores, slots: stateFromStoresArray, isModifyingSubscription: stateFromStores1, onPremiumGuildSubscribe: handleSubscribe };
      tmp14Result = tmp14(SubscribeConfirmation, obj7);
    }
    let obj13 = { children: tmp14(tmp16, obj5) };
    tmp14Result2 = tmp14(tmp15, obj13);
  }
  return tmp14Result2;
};
