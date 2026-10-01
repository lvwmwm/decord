// Module ID: 13040
// Function ID: 13041
// Name: GuildBoostSlotsInventory
// Dependencies: [19, 17, 1182, 2067, 4729, 4494, 1074, 21, 4836, 576, 5836, 6859, 4832, 1115, 11, 5435, 5746, 5896, 13041, 504, 1397, 13042, 13046, 5174, 4732, 12, 2]
// Exports: default

// Module 13040 (GuildBoostSlotsInventory)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import BoostingActionCreators from "BoostingActionCreators" /* 4732 */;
import Text_Text from "Text/Text" /* 4832 */;
import actions_BillingActionCreatorsAll from "actions/BillingActionCreators" /* 5174 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 5746 */;
import GuildIcon from "GuildIcon" /* 5896 */;
import useCountdownDefault from "useCountdown" /* 6859 */;
import AssetRegistryDefault from "AssetRegistry" /* 13041 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 4729 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles from "TextStyles" /* 5836 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
let premiumGuildSubscription;

let closure_12;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let size1;
let tmp2;
let unpackModuleId;
const SubscriptionPlaceholderPattern = tmp2(13042);
function GuildBoostSlotCooldown(cooldownEndsAt) {
  let days;
  let hours;
  let intl;
  let minutes;
  let time;
  cooldownEndsAt = cooldownEndsAt.cooldownEndsAt;
  const items = [cooldownEndsAt];
  const tmp = closure_14();
  const memo = react.useMemo(() => {
    const date = new Date(cooldownEndsAt);
    return date;
  }, items);
  ({ days, hours, minutes } = useCountdownDefault(memo, 15000));
  useCountdownDefault(memo, 15000);
  let tmp5 = null;
  const valueOfResult = memo.valueOf();
  if (valueOfResult > Date.now()) {
    const obj = { style: tmp.subscriptionSlotInfoCooldown, variant: "text-xs/medium", color: "text-muted", children: intl.format(intl3.t.NffSH8, time) };
    const Text = Text_Text.Text;
    intl = intl3.intl;
    time = { days, hours, minutes };
    tmp5 = unpackModuleId(Text, obj);
  }
  return tmp5;
}
function GuildBoostSlotsInventoryRow(arg0) {
  let action;
  let isLast;
  let items;
  let items1;
  let items2;
  let subtitle;
  let title;
  ({ title, subtitle, action, isLast } = arg0);
  const tmp = closure_14();
  const obj3 = { style: tmp.subscriptionSlotInfo, children: items };
  items = [, ];
  const obj = { style: tmp.subscriptionSlot, children: items2 };
  const obj2 = { style: tmp.subscriptionSlotInner, children: items1 };
  const obj4 = { style: tmp.subscriptionSlotInfoTitle, lineClamp: 1, variant: "text-md/semibold", color: "interactive-text-active", children: title };
  items[0] = unpackModuleId(Text_Text.Text, obj4);
  items[1] = subtitle;
  items1 = [closure_12(hasOwnProperty, obj3), action];
  items2 = [closure_12(hasOwnProperty, obj2), ];
  let tmp4Result = null;
  const tmp2 = closure_12;
  const tmp4 = unpackModuleId;
  if (!isLast) {
    const obj5 = { style: tmp.subscriptionSlotBorder };
    tmp4Result = tmp4(tmp3, obj5);
  }
  items2[1] = tmp4Result;
  return tmp2(hasOwnProperty, obj);
}
function GuildBoostSlot(guildBoostSlot) {
  let Text;
  let date;
  let intl2;
  let obj6;
  let tmp6Result;
  let tmp6Result2;
  guildBoostSlot = guildBoostSlot.guildBoostSlot;
  if (null == guildBoostSlot.guild) {
    return null;
  } else {
    let id = null;
    if (null != guildBoostSlot.premiumGuildSubscription) {
      id = guildBoostSlot.premiumGuildSubscription.id;
    }
    let extractTimestampResult = null;
    if (null != id) {
      let obj = SnowflakeUtilsDefault;
      extractTimestampResult = obj.extractTimestamp(id);
    }
    let formatToPlainStringResult = null;
    const tmp7 = GuildBoostSlotsInventoryRow;
    if (null != extractTimestampResult) {
      const intl = guildBoostSlot(1115).intl;
      const formatToPlainString = intl.formatToPlainString;
      let obj2 = { date };
      const _Date = Date;
      const self = this;
      const self2 = this;
      const prop = guildBoostSlot(1115).t["ePe+Xh"];
      date = new Date(extractTimestampResult);
      formatToPlainStringResult = formatToPlainString(prop, obj2);
    }
    const obj3 = { title: formatToPlainStringResult, subtitle: tmp6Result, action: tmp6Result2, isLast: tmp };
    tmp6Result = null;
    if (null != guildBoostSlot.cooldownEndsAt) {
      const obj4 = { cooldownEndsAt: guildBoostSlot.cooldownEndsAt };
      tmp6Result = tmp6(GuildBoostSlotCooldown, obj4);
    }
    tmp6Result2 = null;
    if (!guildBoostSlot.isOnCooldown()) {
      const obj5 = {
        accessibilityRole: "button",
        onPress() {
              let items;
              const obj2 = { guildBoostSlots: items };
              items = [guildBoostSlot];
              const obj = actions_BoostingActionCreators;
              return obj.openTransferModal(obj2);
            },
        children: closure_11(Text, obj6)
      };
      const PressableOpacity = guildBoostSlot(5435).PressableOpacity;
      obj6 = { variant: "text-md/medium", color: "control-brand-foreground", children: intl2.string(guildBoostSlot(1115).t.jqqLb6) };
      Text = guildBoostSlot(4832).Text;
      intl2 = guildBoostSlot(1115).intl;
      tmp6Result2 = tmp6(PressableOpacity, obj5);
    }
    return closure_11(tmp7, obj3);
  }
}
function UnusedGuildBoostSlots(unusedSlots) {
  let PressableOpacity;
  let Text;
  let intl;
  let intl2;
  let items;
  let obj3;
  let obj4;
  let obj5;
  unusedSlots = unusedSlots.unusedSlots;
  let tmp = closure_14();
  const found = unusedSlots.filter(function(cooldownEndsAt) {
    cooldownEndsAt = cooldownEndsAt.cooldownEndsAt;
    let tmp = null != cooldownEndsAt;
    if (tmp) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const _Date2 = Date;
      const date = new Date(cooldownEndsAt);
      const valueOfResult = date.valueOf();
      tmp = valueOfResult > Date.now();
    }
    return tmp;
  });
  const found1 = unusedSlots.filter(function(cooldownEndsAt) {
    cooldownEndsAt = cooldownEndsAt.cooldownEndsAt;
    let tmp = null == cooldownEndsAt;
    if (!tmp) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const _Date2 = Date;
      const date = new Date(cooldownEndsAt);
      const valueOfResult = date.valueOf();
      tmp = valueOfResult <= Date.now();
    }
    return tmp;
  });
  let obj = { style: tmp.unusedSlots, children: items };
  let tmp4 = null;
  let tmp2 = closure_12;
  const tmp3 = closure_5;
  if (found1.length > 0) {
    let obj2 = { title: intl.formatToPlainString(found(1115).t.ewI23O, obj3), action: closure_11(PressableOpacity, obj4), isLast: 0 === found.length };
    intl = found(1115).intl;
    obj3 = { numSubscriptions: found1.length };
    obj4 = {
      accessibilityRole: "button",
      onPress() {
          const obj = found(dependencyMap[16]);
          return obj.openApplyBoostModal();
        },
      children: closure_11(Text, obj5)
    };
    PressableOpacity = found(5435).PressableOpacity;
    obj5 = { variant: "text-md/medium", color: "text-link", children: intl2.string(found(1115).t["7KyPor"]) };
    Text = found(4832).Text;
    intl2 = found(1115).intl;
    tmp4 = closure_11(GuildBoostSlotsInventoryRow, obj2);
  }
  items = [
    tmp4,
    found.map((cooldownEndsAt, index) => {
      let intl;
      let tmpResult;
      const obj = { title: intl.formatToPlainString(intl3.t.gDsyB9, { numSubscriptions: 1 }), subtitle: tmpResult, isLast: index === found.length - 1 };
      intl = intl3.intl;
      tmpResult = null;
      const tmp2 = GuildBoostSlotsInventoryRow;
      if (null != cooldownEndsAt.cooldownEndsAt) {
        const obj2 = { cooldownEndsAt: cooldownEndsAt.cooldownEndsAt };
        tmpResult = tmp(GuildBoostSlotCooldown, obj2);
      }
      return unpackModuleId(tmp2, obj, cooldownEndsAt.id);
    })
  ];
  return tmp2(tmp3, obj);
}
function BoostedGuildInfo(guild) {
  let intl;
  let items;
  let items1;
  let items2;
  let obj3;
  let obj9;
  let tmp8;
  guild = guild.guild;
  const numGuildBoostSlots = guild.numGuildBoostSlots;
  const tmp = closure_14();
  let tmp2 = null;
  if (null != guild) {
    const obj = { style: tmp.guildInfo, children: items };
    const obj2 = { style: tmp.guildInfoIcon, children: unpackModuleId(tmp8, obj3) };
    obj3 = { guild, size: GuildIcon.GuildIconSizes.NORMAL, selected: false };
    tmp8 = GuildIconDefault;
    items = [unpackModuleId(hasOwnProperty, obj2), ];
    const obj4 = { children: items1 };
    const obj5 = { style: tmp.guildInfoName, variant: "heading-lg/extrabold", color: "interactive-text-active", children: guild.name };
    items1 = [unpackModuleId(Text_Text.Text, obj5), ];
    const obj6 = { style: tmp.guildInfoRowBottom, children: items2 };
    const obj7 = { source: AssetRegistryDefault, style: tmp.guildInfoRowIcon };
    items2 = [unpackModuleId(metroRequire, obj7), ];
    const obj8 = { style: tmp.guildInfoSubscriptionCount, variant: "text-xs/semibold", color: "interactive-text-active", children: intl.format(intl3.t.bexfNy, obj9) };
    const Text = Text_Text.Text;
    intl = intl3.intl;
    obj9 = { numSubscriptions: numGuildBoostSlots };
    items2[1] = unpackModuleId(Text, obj8);
    items1[1] = closure_12(hasOwnProperty, obj6);
    items[1] = closure_12(hasOwnProperty, obj4);
    tmp2 = closure_12(hasOwnProperty, obj);
  }
  return tmp2;
}
function BoostedGuild(arg0) {
  let guildBoostSlots;
  let items2;
  let items3;
  let items4;
  let items5;
  let theme;
  ({ guildId: require, guildBoostSlots } = arg0);
  const tmp = closure_14();
  let obj = get_initialized;
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(require));
  const items1 = [ThemeStore];
  let guildBannerSource = null;
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => theme.theme);
  if (null != stateFromStores) {
    guildBannerSource = null;
    if (null != stateFromStores.banner) {
      const obj3 = guildBoostSlots(1397);
      guildBannerSource = obj3.getGuildBannerSource(stateFromStores);
    }
  }
  const tmp2Result = SubscriptionPlaceholderPattern;
  let subscriptionPlaceholderPatternSource = tmp2Result.useSubscriptionPlaceholderPatternSource();
  if (null != guildBannerSource) {
    subscriptionPlaceholderPatternSource = guildBannerSource;
  }
  const obj7 = { source: subscriptionPlaceholderPatternSource, style: items2 };
  items2 = [tmp.subscriptionImage, ];
  let prop = null;
  const obj4 = { style: tmp.boostedGuild, children: items5 };
  const obj5 = { style: tmp.subscriptionBody, children: items4 };
  const obj6 = { style: tmp.subscriptionImageView, children: items3 };
  const tmp12 = closure_6;
  if (null == guildBannerSource) {
    prop = tmp.subscriptionImageFallback;
  }
  items2[1] = prop;
  items3 = [closure_11(tmp12, obj7), , ];
  let tmp11Result = null;
  if (null != guildBannerSource) {
    const obj8 = { style: tmp.subscriptionImageOverlay };
    tmp11Result = tmp11(tmp10, obj8);
  }
  items3[1] = tmp11Result;
  items3[2] = closure_11(guildBoostSlots(13046), { guild: stateFromStores, theme: stateFromStores1 });
  items4 = [closure_12(closure_5, obj6), ];
  const obj9 = { guild: stateFromStores, numGuildBoostSlots: guildBoostSlots.length };
  items4[1] = closure_11(BoostedGuildInfo, obj9);
  items5 = [closure_12(closure_5, obj5), ];
  const obj10 = {
    children: guildBoostSlots.map((guildBoostSlot, index) => {
      const obj = { guild: stateFromStores, guildBoostSlot, isLast: index === guildBoostSlots.length - 1 };
      return unpackModuleId(GuildBoostSlot, obj, guildBoostSlot.id);
    })
  };
  items5[1] = closure_11(closure_5, obj10);
  return closure_12(closure_5, obj4);
}
({ View: hasOwnProperty, Image: metroRequire } = react_native);
const Fonts = Constants.Fonts;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { inventory: { marginBottom: 32 }, header: { marginHorizontal: 16, marginBottom: 16 }, boostedGuild: obj2, subscriptionBody: obj3, subscriptionImageView: size, subscriptionImage: { position: "absolute", width: "100%", height: "100%" }, subscriptionImageFallback: { opacity: 0.4 }, subscriptionImageOverlay: size1, guildInfo: { flexDirection: "row", padding: 16 }, guildInfoIcon: { marginRight: 8 }, guildInfoName: obj4, guildInfoRowBottom: { flexDirection: "row", alignItems: "center" }, guildInfoRowIcon: { height: 12, width: 8, marginLeft: 2, marginRight: 8 }, guildInfoSubscriptionCount: { lineHeight: 16 }, subscriptionSlot: obj5, subscriptionSlotInner: { alignItems: "center", flexDirection: "row", paddingRight: 16, paddingVertical: 12 }, subscriptionSlotBorder: obj6, subscriptionSlotInfo: { flexShrink: 1, flexGrow: 1 }, subscriptionSlotInfoTitle: { lineHeight: 24 }, subscriptionSlotInfoCooldown: { lineHeight: 16 }, unusedSlots: { marginBottom: 32 } };
obj2 = { borderRadius: nativeDefault.radii.xs, marginBottom: 16 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, width: "100%", height: 112, overflow: "hidden", alignItems: "center", justifyContent: "center" };
size1 = { position: "absolute", width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BLACK, opacity: 0.4 };
obj4 = { marginBottom: 4 };
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 20));
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingLeft: 16 };
obj6 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1 };
let closure_14 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/native/GuildBoostSlotsInventory.tsx");

export default function GuildBoostSlotsInventory() {
  let boostSlots;
  let intl;
  let items2;
  let items3;
  let premiumTypeSubscription;
  let tmp10Result2;
  const tmp = closure_14();
  const effect = react.useEffect(() => {
    const obj = actions_BillingActionCreatorsAll;
    const subscriptions = obj.fetchSubscriptions();
    const obj2 = BoostingActionCreators;
    const guildBoostSlots = obj2.fetchGuildBoostSlots();
  }, []);
  let obj = get_initialized;
  const items = [SubscriptionStore];
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let obj2 = get_initialized;
  const items1 = [GuildBoostSlotStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => boostSlots.boostSlots);
  const obj3 = _modDef12(stateFromStores1);
  const iter = obj3.groupBy((premiumGuildSubscription) => {
    premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
    let str = "0";
    if (null != premiumGuildSubscription) {
      str = premiumGuildSubscription.guildId;
    }
    return str;
  });
  const valueResult = iter.value();
  require = valueResult;
  const first = valueResult[0];
  const keys = Object.keys(valueResult);
  const found = keys.filter((item) => "0" !== item);
  if (0 !== found.length) {
    tmp10Result2 = null;
    if (null != stateFromStores) {
      let tmp12 = null;
      const obj4 = { style: tmp.inventory, children: items2 };
      const tmp11 = closure_5;
      if (null != first) {
        tmp12 = null;
        if (first.length > 0) {
          const obj5 = { unusedSlots: first };
          tmp12 = closure_11(UnusedGuildBoostSlots, obj5);
        }
      }
      items2 = [tmp12, ];
      let tmp10Result = null;
      if (found.length > 0) {
        const obj6 = { children: items3 };
        const obj7 = { style: tmp.header, variant: "eyebrow", color: "text-default", children: intl.string(intl3.t.gB9oQ7) };
        const Text = tmp3(4832).Text;
        intl = tmp3(1115).intl;
        items3 = [
          closure_11(Text, obj7),
          found.map((guildId) => {
                  const obj = { guildId, guildBoostSlots: require[guildId] };
                  return unpackModuleId(BoostedGuild, obj, guildId);
                })
        ];
        tmp10Result = tmp10(closure_13, obj6);
      }
      items2[1] = tmp10Result;
      tmp10Result2 = tmp10(tmp11, obj4);
    }
  } else {
    tmp10Result2 = null;
  }
  return tmp10Result2;
};
