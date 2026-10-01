// Module ID: 14771
// Function ID: 14772
// Name: UserSettingsGuildRoleSubscriptionsCancel
// Dependencies: [5, 32, 19, 17, 4494, 21, 4836, 576, 14772, 4421, 1115, 5896, 1177, 4832, 14762, 5899, 14780, 6583, 6603, 8667, 5204, 5174, 4527, 4510, 5281, 6400, 14768, 14757, 14781, 14782, 504, 2]
// Exports: default

// Module 14771 (UserSettingsGuildRoleSubscriptionsCancel)
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import _modDef4421 from "module_4421" /* 4421 */;
import Text_Text from "Text/Text" /* 4832 */;
import GuildIconDefault from "GuildIcon" /* 5896 */;
import FastImageDefault from "FastImage" /* 5899 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6400 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 14757 */;
import FormSeparatorDefault from "FormSeparator" /* 14762 */;
import useManageSubscriptionCardDataDefault from "useManageSubscriptionCardData" /* 14768 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 14772 */;
import AssetRegistryDefault from "AssetRegistry" /* 14780 */;
import GuildRoleSubscriptionCardAll from "GuildRoleSubscriptionCard" /* 14782 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let _undefined, c4, c5, dependencyMap;

let c10;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj4;
let tmp5;
let unpackModuleId;
const FastAssetImageDefault = tmp5(14781);
function WhatYouLose(subscription) {
  let guild;
  let intl3;
  let items;
  let items1;
  let items2;
  let items3;
  let listingId;
  ({ listingId, guild } = subscription);
  subscription = subscription.subscription;
  const tmp = closure_14();
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj.useTierEmojiIds(listingId, guild.id), 1)[0];
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj2.useChannelBenefits(listingId), 1)[0];
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first2 = _slicedToArray(obj3.useIntangibleBenefits(listingId), 1)[0];
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first3 = _slicedToArray(obj4.useName(listingId), 1)[0];
  const obj5 = _modDef4421(subscription.currentPeriodEnd);
  const formatResult = obj5.format(c12);
  const intl = intl4.intl;
  const formatResult1 = intl.format(intl4.t.EtAXzC, { subscriptionEndDate: formatResult });
  const intl2 = intl4.intl;
  const obj8 = { style: tmp.header, children: items };
  items = [, , ];
  const obj6 = { numEmojis: first.size, numChannels: first1.length, numIntangibles: first2.length };
  const obj7 = { style: tmp.container, children: items2 };
  const formatToPlainStringResult = intl2.formatToPlainString(intl4.t.OVlNGT, obj6);
  items[0] = authStore(GuildIconDefault, { guild });
  items[1] = authStore(native.Spacer, { size: 16 });
  const obj9 = { children: items1 };
  items1 = [authStore(Text_Text.Text, { variant: "text-md/semibold", color: "interactive-text-active", children: first3 }), authStore(native.Spacer, { size: 2 }), ];
  const obj10 = { variant: "text-sm/medium", color: "interactive-text-default", children: guild.name };
  items1[2] = authStore(Text_Text.Text, obj10);
  items[2] = unpackModuleId(metroImportDefault, obj9);
  items2 = [unpackModuleId(metroImportDefault, obj8), authStore(FormSeparatorDefault, { style: { marginVertical: 16 } }), , , , , ];
  const obj11 = { variant: "text-md/semibold", color: "interactive-text-active", children: intl3.string(intl4.t["9SgXmT"]) };
  const Text = Text_Text.Text;
  intl3 = intl4.intl;
  items2[2] = authStore(Text, obj11);
  items2[3] = authStore(native.Spacer, { size: 12 });
  const obj12 = { variant: "text-sm/normal", color: "text-default", children: items3 };
  items3 = [formatResult1, "\n"];
  items2[4] = unpackModuleId(Text_Text.Text, obj12);
  items2[5] = authStore(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: formatToPlainStringResult });
  const obj13 = { source: AssetRegistryDefault, style: tmp.cactus };
  const tmp7 = FastImageDefault;
  items2[6] = authStore(tmp7, obj13);
  return unpackModuleId(metroImportDefault, obj7);
}
function CancelSubscriptionButtonFooter(guild) {
  let Button;
  let c3;
  let intl;
  let obj3;
  let tmp3;
  guild = guild.guild;
  const subscription = guild.subscription;
  const onClose = guild.onClose;
  dependencyMap = undefined;
  let cancelSubscription;
  let isPurchasedViaAppleGeneric;
  let tmp = closure_13();
  [tmp3, c3] = cancelSubscription(isPurchasedViaAppleGeneric.useState(false), 2);
  const tmp4 = dependencyMap;
  const tmp2 = cancelSubscription(isPurchasedViaAppleGeneric.useState(false), 2);
  const tmp5 = subscription(6583);
  const analyticsLocations = tmp5(subscription(6603).GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL).analyticsLocations;
  let obj = subscription(8667);
  const cancelSubscription1 = obj.useCancelSubscription(subscription.id, subscription.isACOM);
  cancelSubscription = cancelSubscription1.cancelSubscription;
  isPurchasedViaAppleGeneric = subscription.isPurchasedViaAppleGeneric;
  const nativePaymentsConnected = cancelSubscription1.nativePaymentsConnected;
  const items = [guild.name, , , , , , , ];
  ({ currentPeriodEnd: arr[1], id: arr[2], isPurchasedViaDesktop: arr[3] } = subscription);
  items[4] = isPurchasedViaAppleGeneric;
  items[5] = onClose;
  items[6] = cancelSubscription;
  items[7] = analyticsLocations;
  let obj2 = { style: tmp.footer, children: tmp8(Button, obj3) };
  const callback = isPurchasedViaAppleGeneric.useCallback(analyticsLocations(function*(arg0, value) {
    let c3;
    let closure_0;
    let closure_1;
    let closure_2;
    let intl2;
    let intl3;
    let obj16;
    let obj2;
    let obj7;
    let obj8;
    let tmp;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let c0;
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
            guild = tmp4;
            c0 = undefined;
            const obj5 = { title: intl2.formatToPlainString(guild(_undefined[10]).t.sBs7sh, obj8), body: "You can resubscribe any time before " + obj16.format(closure_1_12) + ".", confirmText: intl3.string(guild(_undefined[10]).t["3KZjFH"]), confirmColor: guild(_undefined[12]).ButtonColors.RED };
            const _confirm = tmp(_undefined[20]).confirm;
            const tmp71 = tmp(_undefined[20]);
            intl2 = guild(_undefined[10]).intl;
            obj8 = { guildName: guild.name };
            const _HermesInternal = HermesInternal;
            obj16 = tmp(_undefined[9])(subscription.currentPeriodEnd);
            intl3 = guild(_undefined[10]).intl;
            c4 = 1;
            c5 = 1;
            const obj9 = { value: _confirm(obj5), done: false };
            return obj9;
          }
        } else {
          if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else if (value) {
              closure_129_3(true);
              _undefined = 1;
              c0 = false;
              const tmp49 = closure_129_6;
              if (tmp49) {
                c4 = 3;
                c5 = 1;
                const obj11 = { value: closure_129_5(), done: false };
                return obj11;
              } else if (closure_129_1.isPurchasedViaDesktop) {
                c4 = 4;
                c5 = 1;
                const obj12 = { value: obj7.cancelSubscription(closure_129_1.id, closure_129_4), done: false };
                obj7 = tmp59(_undefined[21]);
                return obj12;
              } else {
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error = new Error("Cancellation not supported for subscription");
                throw error;
              }
            }
          } else if (2 === c4) {
            _undefined = 0;
            tmp = tmp59;
            closure_129_3(false);
            const obj6 = guild(_undefined[22]);
            obj6.presentFailedToast(tmp.message);
            const tmp36 = tmp instanceof tmp(_undefined[23]) && tmp.code === guild(_undefined[23]).ErrorCodes.ALREADY_CANCELED;
            if (tmp36) {
              if (closure_129_2 != null) {
                closure_129_2();
              }
            }
          } else {
            if (3 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                _undefined = 0;
                c5 = 3;
                const obj13 = { value, done: true };
                return obj13;
              } else {
                c0 = value;
              }
            } else if (4 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                _undefined = 0;
                c5 = 3;
                const obj14 = { value, done: true };
                return obj14;
              } else {
                c4 = 5;
                c5 = 1;
                const obj15 = { value: obj2.fetchSubscriptions(), done: false };
                obj2 = tmp59(_undefined[21]);
                return obj15;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              _undefined = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c0 = true;
            }
            closure_129_3(false);
            if (c0) {
              if (closure_129_2 != null) {
                closure_129_2();
              }
            } else {
              const presentFailedToast = guild(_undefined[22]).presentFailedToast;
              const tmp16 = guild(_undefined[22]);
              const intl = guild(_undefined[10]).intl;
              presentFailedToast(intl.string(guild(_undefined[10]).t.R0RpRX));
            }
            _undefined = 0;
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp59) {
        if (0 === _undefined) {
          c5 = 3;
          throw tmp59;
        } else {
          c4 = 2;
        }
      }
    }
  }), items);
  Button = guild(5281).Button;
  const tmp9 = closure_7;
  if (!tmp3) {
    if (isPurchasedViaAppleGeneric) {
      isPurchasedViaAppleGeneric = !nativePaymentsConnected;
    }
    tmp3 = isPurchasedViaAppleGeneric;
  }
  obj3 = { variant: "destructive", loading: tmp3, text: intl.string(tmp10(1115).t.cM1H0K), onPress: callback };
  intl = tmp10(1115).intl;
  return closure_10(tmp9, obj2);
}
function Content(subscription) {
  let guild;
  let intl;
  let items;
  let items1;
  let items2;
  let items3;
  let listing;
  subscription = subscription.subscription;
  const onClose = subscription.onClose;
  const obj = useTypeConsolidationTextTransform;
  const typeConsolidationTextTransform = obj.useTypeConsolidationTextTransform("GuildRoleSubscriptionsCancel");
  const tmp4 = closure_13();
  ({ listing, guild } = useManageSubscriptionCardDataDefault(subscription));
  useManageSubscriptionCardDataDefault(subscription);
  let id;
  const useSubscriptionsSettings = GuildRoleSubscriptionsHooks.useSubscriptionsSettings;
  GuildRoleSubscriptionsHooks;
  if (guild != null) {
    id = guild.id;
  }
  const subscriptionsSettings = useSubscriptionsSettings(id);
  let cover_image_asset;
  if (subscriptionsSettings != null) {
    cover_image_asset = subscriptionsSettings.cover_image_asset;
  }
  let tmp11 = null;
  if (null != listing) {
    tmp11 = null;
    if (null != guild) {
      const obj2 = { style: tmp4.container, children: items3 };
      const obj3 = { children: items };
      const obj4 = { style: tmp4.heroImage, asset: cover_image_asset };
      items = [authStore(FastAssetImageDefault, obj4), ];
      const obj5 = { style: tmp4.body, children: items1 };
      const obj6 = { guild, listingId: listing.id, subscription };
      items1 = [authStore(WhatYouLose, obj6), authStore(native.Spacer, { size: 24 }), , , ];
      const obj7 = { variant: "text-sm/bold", color: "text-default", style: items2, children: intl.string(intl4.t.xyvN8p) };
      items2 = [{ textTransform: "uppercase" }, typeConsolidationTextTransform];
      const Text = tmp(4832).Text;
      intl = tmp(1115).intl;
      items1[2] = authStore(Text, obj7);
      items1[3] = authStore(native.Spacer, { size: 16 });
      const obj8 = { listingId: listing.id, guildId: guild.id };
      items1[4] = authStore(GuildRoleSubscriptionCardAll.Content, obj8);
      items[1] = unpackModuleId(metroImportDefault, obj5);
      items3 = [unpackModuleId(metroImportAll, obj3), ];
      const obj9 = { guild, subscription, onClose };
      items3[1] = authStore(CancelSubscriptionButtonFooter, obj9);
      tmp11 = unpackModuleId(metroImportDefault, obj2);
    }
  }
  return tmp11;
}
({ View: metroImportDefault, ScrollView: metroImportAll } = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let c12 = "M/DD/YY";
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, body: { marginVertical: 24, marginHorizontal: 16 }, heroImage: { width: "100%", height: "WireType", aspectRatio: "<string:2353406737>" }, footer: obj2 };
obj2 = { borderTopColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER, borderTopWidth: 1, padding: 16 };
let closure_13 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { container: obj4, header: { flex: 1, flexDirection: "row" }, cactus: { width: 99, position: "absolute", right: 16, bottom: 12 } };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, paddingVertical: 12, paddingHorizontal: 16 };
let closure_14 = createStyles.createStyles(obj3);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/UserSettingsGuildRoleSubscriptionsCancel.tsx");

export default function UserSettingsGuildRoleSubscriptionsCancel(subscriptionId) {
  subscriptionId = subscriptionId.subscriptionId;
  const onClose = subscriptionId.onClose;
  const items = [SubscriptionStore];
  const obj = subscriptionId(504);
  const stateFromStores = obj.useStateFromStores(items, () => SubscriptionStore.getSubscriptionById(subscriptionId));
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { subscription: stateFromStores, onClose };
    tmp2 = closure_10(Content, obj2);
  }
  return tmp2;
};
