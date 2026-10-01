// Module ID: 13148
// Function ID: 13149
// Name: SubscribeModalConfirmation
// Dependencies: [5, 19, 17, 12058, 2067, 4729, 4494, 1074, 6852, 4724, 21, 4836, 4683, 576, 504, 4728, 5909, 4832, 1115, 13149, 13150, 5281, 13159, 5293, 1094, 1241, 13114, 38, 4732, 5204, 13163, 1981, 2]
// Exports: default

// Module 13148 (SubscribeModalConfirmation)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl6 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4724 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 4728 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import AssetRegistryDefault from "AssetRegistry" /* 5909 */;
import ColorConstants from "ColorConstants" /* 6852 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13149 */;
import PremiumGuildPreviewDefault from "PremiumGuildPreview" /* 13150 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AppliedGuildBoostStore from "AppliedGuildBoostStore" /* 12058 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 4729 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import ColorUtils_mod from "ColorUtils" /* 4683 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c5, c6;

let ColorUtils;
let StyleSheet;
let closure_14;
let closure_15;
let closure_16;
let closure_19;
let closure_20;
let closure_21;
let hasOwnProperty;
let map1;
let metroImportAll;
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
  const tmp = closure_22();
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
      items1 = [closure_19(metroRequire, obj3), ];
      const obj4 = { style: tmp.pendingCancellationMessage, variant: "text-sm/medium", children: intl.format(intl6.t.SFpsCH, obj5) };
      const Text = tmp2(4832).Text;
      intl = tmp2(1115).intl;
      obj5 = { date: stateFromStores.currentPeriodEnd, canceledCount: found.length };
      items1[1] = closure_19(Text, obj4);
      tmp5 = closure_20(metroImportDefault, obj2);
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
  const tmp = closure_22();
  const obj = { children: items };
  items = [, , , , , ];
  const obj2 = { style: tmp.subscribeImage, source: AssetRegistryDefault2 };
  items[0] = closure_19(metroRequire, obj2);
  const obj3 = { style: tmp.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl6.t.yTlZV0) };
  const Text = Text_Text.Text;
  intl = intl6.intl;
  items[1] = closure_19(Text, obj3);
  const obj4 = { style: tmp.guildPreview, guild };
  items[2] = closure_19(PremiumGuildPreviewDefault, obj4);
  const obj5 = { style: items1, variant: "text-sm/medium", children: intl2.format(intl6.t.KPnDlu, obj6) };
  items1 = [, ];
  ({ blurb: arr2[0], warning: arr2[1] } = tmp);
  const Text2 = Text_Text.Text;
  intl2 = intl6.intl;
  obj6 = { days, slotCount: slots.length };
  items[3] = closure_19(Text2, obj5);
  items[4] = closure_19(PendingCancellationWarning, { slots });
  const obj7 = { style: tmp.confirmButton, children: closure_19(Button, obj8) };
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
  items[5] = closure_19(metroImportDefault, obj7);
  return closure_20(closure_21, obj);
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
  const tmp = closure_22();
  const obj = prop(13159);
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
    tmp8 = closure_19(closure_5, obj3);
  } else {
    const obj4 = { children: items1 };
    const obj5 = { style: tmp.transferImage, source: guildSubscriptionRemovalSource };
    items1 = [closure_19(closure_6, obj5), , , , , ];
    const obj6 = { style: tmp.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.string(prop(1115).t.h92jfS) };
    const Text = tmp2(4832).Text;
    intl = tmp2(1115).intl;
    items1[1] = closure_19(Text, obj6);
    const obj7 = { style: tmp.blurb, variant: "text-sm/medium", children: intl2.format(prop(1115).t.SSA2lu, obj8) };
    const Text2 = tmp2(4832).Text;
    intl2 = tmp2(1115).intl;
    obj8 = { slotCount: prop.length, guildCount: 1 };
    items1[2] = closure_19(Text2, obj7);
    const obj9 = { style: tmp.transferPreviews, children: items2 };
    const obj10 = { style: tmp.previewHeader, variant: "eyebrow", color: "text-default", children: intl3.format(prop(1115).t["5zQYEz"], { guildCount: 1 }) };
    const Text3 = tmp2(4832).Text;
    intl3 = tmp2(1115).intl;
    items2 = [closure_19(Text3, obj10), , , ];
    const obj11 = { style: tmp.guildPreview, guild: stateFromStores };
    items2[1] = closure_19(onPremiumGuildSubscribe(13150), obj11);
    const obj12 = { style: tmp.previewHeader, variant: "eyebrow", color: "text-default", children: intl4.format(prop(1115).t.ct6oxD, obj13) };
    const Text4 = tmp2(4832).Text;
    intl4 = tmp2(1115).intl;
    obj13 = { slotCount: prop.length };
    items2[2] = closure_19(Text4, obj12);
    const obj14 = { style: items3, start: prop(1094).HorizontalGradient.START, end: prop(1094).HorizontalGradient.END, colors: Gradients.PREMIUM_GUILD, children: closure_19(onPremiumGuildSubscribe(13150), obj15) };
    items3 = [, ];
    ({ guildPreview: arr5[0], activeTransferGuildCardBorder: arr5[1] } = tmp);
    obj15 = { guild };
    const tmp15 = onPremiumGuildSubscribe(5293);
    items2[3] = closure_19(tmp15, obj14);
    items1[3] = closure_20(closure_7, obj9);
    const obj16 = { slots: prop };
    items1[4] = closure_19(PendingCancellationWarning, obj16);
    const obj17 = { style: tmp.confirmButton, children: closure_19(Button, obj18) };
    obj18 = {
      variant: "primary",
      text: intl5.formatToPlainString(prop(1115).t.Oh6mxU, obj19),
      onPress() {
          return onPremiumGuildSubscribe(true);
        },
      loading: isModifyingSubscription
    };
    Button = tmp2(5281).Button;
    intl5 = tmp2(1115).intl;
    obj19 = { slotCount: prop.length };
    items1[5] = closure_19(closure_7, obj17);
    tmp8 = closure_20(closure_21, obj4);
  }
  return tmp8;
}
({ ActivityIndicator: hasOwnProperty, Image: metroRequire, View: metroImportDefault, ScrollView: metroImportAll, StyleSheet } = react_native);
({ AnalyticEvents: map1, AnalyticsObjects: closure_14, AnalyticsSections: closure_15, GUILD_BOOST_APPLY_COOLDOWN_DAYS: closure_16 } = Constants);
const Gradients = ColorConstants.Gradients;
const BoostPurchaseIntent = GuildPowerupsConstants.BoostPurchaseIntent;
({ jsx: closure_19, jsxs: closure_20, Fragment: closure_21 } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: { paddingHorizontal: 24, marginBottom: 24 }, scrollableContent: { alignItems: "center", width: "100%" }, subscribeImage: { marginTop: 105, alignSelf: "center" }, transferImage: { marginTop: 65, alignSelf: "center" }, header: { marginTop: 32, marginBottom: 8 }, transferPreviews: { marginTop: 16, width: "100%" }, previewHeader: { lineHeight: 16, marginTop: 16, letterSpacing: 0.2 }, guildPreview: { marginTop: 8, width: "100%" }, blurb: { lineHeight: 18, textAlign: "center" }, warning: { marginTop: 16 }, pendingCancellation: obj2, pendingCancellationMessage: { marginLeft: 10, flexShrink: 1 }, pendingCancellationIcon: { flexShrink: 0, width: 20, height: 20 }, loading: { marginTop: 32 }, confirmButton: { marginTop: 32, width: "100%" }, activeTransferGuildCardBorder: obj3 };
obj2 = { marginTop: 16, padding: 16, backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.YELLOW_300, 0.1), alignItems: "center", flexDirection: "row", borderRadius: nativeDefault.radii.xs, borderColor: nativeDefault.unsafe_rawColors.YELLOW_300, borderWidth: StyleSheet.hairlineWidth, width: "100%" };
createStyles = createStyles.createStyles;
ColorUtils = ColorUtils_mod;
obj3 = { padding: 2, borderRadius: nativeDefault.radii.xs };
let closure_22 = createStyles(obj);
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
          return { value: "HermesInternal", done: null };
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
              const tmp53 = closure_0;
              const tmp56 = tmp(paths[27]);
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
              tmp56(everyResult, "Cannot use a premium guild subscription slot while on cooldown");
              c4 = 1;
              if (tmp53) {
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
                              return closure_3_19(closure_0, obj);
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
            return { value: "HermesInternal", done: null };
          }
          c5 = 3;
          c6 = 1;
          const obj12 = { value: obj8.applyToGuild(closure_130_6.id, closure_130_7.map((id) => id.id), closure_130_3 === constants4.PERK), done: false };
          obj8 = closure_0(paths[28]);
          return obj12;
        } catch (tmp44) {
          let closure_3 = tmp44;
          if (0 === c4) {
            c6 = 3;
            throw tmp44;
          } else {
            c5 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = closure_22();
  const ref = react.useRef(_location);
  let items = [_location];
  const effect = react.useEffect(() => {
    ref.current = _location;
  }, items);
  const effect1 = react.useEffect(() => {
    obj = AnalyticsUtilsDefault;
    const obj2 = { type: constants.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL, location: ref.current };
    obj.track(map1.OPEN_MODAL, obj2);
  }, []);
  let tmp4 = require("useFetchGuildBoostSlots")();
  obj = require("get initialized");
  let items1 = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items1, () => GuildStore.getGuild(require));
  let obj2 = require("get initialized");
  const items2 = [AppliedGuildBoostStore];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => AppliedGuildBoostStore.isModifyingAppliedBoost);
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
        obj = closure_1_0(_location[15]);
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
    tmp14Result2 = closure_19(ref, obj4);
  } else {
    function handleSubscribe() {
      return obj(...arguments);
    }
    let obj5 = { contentContainerStyle: null, style: null, children: tmp14Result };
    ({ scrollableContent: obj8.contentContainerStyle, content: obj8.style } = tmp);
    const tmp15 = stateFromStoresArray;
    const tmp16 = obj;
    if (tmp7) {
      let obj6 = { guild: stateFromStores, onPremiumGuildSubscribe: handleSubscribe, previousGuildSubscriptionSlots: stateFromStoresArray, isModifyingSubscription: stateFromStores1 };
      tmp14Result = tmp14(TransferConfirmation, obj6);
    } else {
      let obj7 = { guild: stateFromStores, slots: stateFromStoresArray, isModifyingSubscription: stateFromStores1, onPremiumGuildSubscribe: handleSubscribe };
      tmp14Result = tmp14(SubscribeConfirmation, obj7);
    }
    const obj13 = { children: closure_19(tmp16, obj5) };
    tmp14Result2 = tmp14(tmp15, obj13);
  }
  return tmp14Result2;
};
