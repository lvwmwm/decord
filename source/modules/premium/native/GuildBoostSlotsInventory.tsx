// Module ID: 12484
// Function ID: 96856
// Name: GuildBoostSlotCooldown
// Dependencies: [31, 27, 1278, 1838, 4023, 3782, 653, 33, 4130, 689, 5052, 6678, 4126, 1212, 21, 4660, 4966, 5513, 12485, 566, 1392, 12486, 12490, 4451, 4026, 22, 2]
// Exports: default

// Module 12484 (GuildBoostSlotCooldown)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let closure_11;
let closure_12;
let closure_13;
let closure_5;
let closure_6;
let require = arg1;
function GuildBoostSlotCooldown(cooldownEndsAt) {
  let days;
  let hours;
  let minutes;
  cooldownEndsAt = cooldownEndsAt.cooldownEndsAt;
  const items = [cooldownEndsAt];
  const memo = React.useMemo(() => new Date(cooldownEndsAt), items);
  const tmp = _createForOfIteratorHelperLoose();
  ({ days, hours, minutes } = importDefault(6678)(memo, 15000));
  const tmp2 = importDefault(6678)(memo, 15000);
  let tmp4 = null;
  if (valueOfResult > Date.now()) {
    let obj = { style: tmp.subscriptionSlotInfoCooldown, variant: "text-xs/medium", color: "text-muted" };
    const intl = cooldownEndsAt(1212).intl;
    obj = { days, hours, minutes };
    obj.children = intl.format(cooldownEndsAt(1212).t.NffSH8, obj);
    tmp4 = callback(cooldownEndsAt(4126).Text, obj);
  }
  return tmp4;
}
function GuildBoostSlotsInventoryRow(arg0) {
  let action;
  let isLast;
  let subtitle;
  let title;
  ({ title, subtitle, action, isLast } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.subscriptionSlot };
  obj = { style: tmp.subscriptionSlotInner };
  obj = { style: tmp.subscriptionSlotInfo };
  const obj1 = { style: tmp.subscriptionSlotInfoTitle, lineClamp: 1, variant: "text-md/semibold", color: "interactive-text-active", children: title };
  const items = [callback(require(4126) /* Text */.Text, obj1), subtitle];
  obj.children = items;
  const items1 = [callback2(closure_5, obj), action];
  obj.children = items1;
  const items2 = [callback2(closure_5, obj), ];
  let tmp4 = null;
  if (!isLast) {
    const obj2 = { style: tmp.subscriptionSlotBorder };
    tmp4 = callback(closure_5, obj2);
  }
  items2[1] = tmp4;
  obj.children = items2;
  return callback2(closure_5, obj);
}
function GuildBoostSlot(guildBoostSlot) {
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
      let obj = importDefault(21);
      extractTimestampResult = obj.extractTimestamp(id);
    }
    obj = {};
    let formatToPlainStringResult = null;
    if (null != extractTimestampResult) {
      const intl = guildBoostSlot(1212).intl;
      obj = {};
      const _Date = Date;
      const date = new Date(extractTimestampResult);
      obj.date = date;
      formatToPlainStringResult = intl.formatToPlainString(guildBoostSlot(1212).t["ePe+Xh"], obj);
    }
    obj.title = formatToPlainStringResult;
    let tmp17 = null;
    if (null != guildBoostSlot.cooldownEndsAt) {
      const obj1 = { cooldownEndsAt: guildBoostSlot.cooldownEndsAt };
      tmp17 = callback(GuildBoostSlotCooldown, obj1);
    }
    obj.subtitle = tmp17;
    let tmp20 = null;
    if (!guildBoostSlot.isOnCooldown()) {
      const obj2 = {
        accessibilityRole: "button",
        onPress() {
              const guildBoostSlots = [guildBoostSlot];
              return guildBoostSlot(outer1_3[16]).openTransferModal({ guildBoostSlots });
            }
      };
      const obj3 = { variant: "text-md/medium", color: "control-brand-foreground" };
      const intl2 = guildBoostSlot(1212).intl;
      obj3.children = intl2.string(guildBoostSlot(1212).t.jqqLb6);
      obj2.children = callback(guildBoostSlot(4126).Text, obj3);
      tmp20 = callback(guildBoostSlot(4660).PressableOpacity, obj2);
    }
    obj.action = tmp20;
    obj.isLast = tmp;
    return callback(GuildBoostSlotsInventoryRow, obj);
  }
}
function UnusedGuildBoostSlots(unusedSlots) {
  unusedSlots = unusedSlots.unusedSlots;
  const found = unusedSlots.filter((cooldownEndsAt) => {
    cooldownEndsAt = cooldownEndsAt.cooldownEndsAt;
    let tmp = null != cooldownEndsAt;
    if (tmp) {
      const _Date = Date;
      const date = new Date(cooldownEndsAt);
      const _Date2 = Date;
      tmp = date.valueOf() > Date.now();
      const valueOfResult = date.valueOf();
    }
    return tmp;
  });
  const found1 = unusedSlots.filter((cooldownEndsAt) => {
    cooldownEndsAt = cooldownEndsAt.cooldownEndsAt;
    let tmp = null == cooldownEndsAt;
    if (!tmp) {
      const _Date = Date;
      const date = new Date(cooldownEndsAt);
      const _Date2 = Date;
      tmp = date.valueOf() <= Date.now();
      const valueOfResult = date.valueOf();
    }
    return tmp;
  });
  let obj = { style: _createForOfIteratorHelperLoose().unusedSlots };
  let tmp4 = null;
  if (found1.length > 0) {
    obj = {};
    let intl = found(1212).intl;
    obj = { numSubscriptions: found1.length };
    obj.title = intl.formatToPlainString(found(1212).t.ewI23O, obj);
    const obj1 = {
      accessibilityRole: "button",
      onPress() {
          return found(outer1_3[16]).openApplyBoostModal();
        }
    };
    const obj2 = { variant: "text-md/medium", color: "text-link" };
    const intl2 = found(1212).intl;
    obj2.children = intl2.string(found(1212).t["7KyPor"]);
    obj1.children = callback(found(4126).Text, obj2);
    obj.action = callback(found(4660).PressableOpacity, obj1);
    obj.isLast = 0 === found.length;
    tmp4 = callback(GuildBoostSlotsInventoryRow, obj);
  }
  const items = [
    tmp4,
    found.map((cooldownEndsAt) => {
      let obj = {};
      const intl = found(outer1_3[13]).intl;
      obj.title = intl.formatToPlainString(found(outer1_3[13]).t.gDsyB9, { numSubscriptions: 1 });
      let tmp3 = null;
      if (null != cooldownEndsAt.cooldownEndsAt) {
        obj = { cooldownEndsAt: cooldownEndsAt.cooldownEndsAt };
        tmp3 = outer1_11(outer1_15, obj);
      }
      obj.subtitle = tmp3;
      obj.isLast = arg1 === found.length - 1;
      return outer1_11(outer1_16, obj, cooldownEndsAt.id);
    })
  ];
  obj.children = items;
  return closure_12(closure_5, obj);
}
function BoostedGuildInfo(guild) {
  guild = guild.guild;
  const tmp = _createForOfIteratorHelperLoose();
  let tmp2 = null;
  if (null != guild) {
    let obj = { style: tmp.guildInfo };
    obj = { style: tmp.guildInfoIcon };
    obj = { guild, size: require(5513) /* makeSizeStyle */.GuildIconSizes.NORMAL, selected: false };
    obj.children = callback(importDefault(5513), obj);
    const items = [callback(closure_5, obj), ];
    const obj1 = {};
    const obj2 = { style: tmp.guildInfoName, variant: "heading-lg/extrabold", color: "interactive-text-active", children: guild.name };
    const items1 = [callback(require(4126) /* Text */.Text, obj2), ];
    const obj3 = { style: tmp.guildInfoRowBottom };
    const obj4 = { source: importDefault(12485), style: tmp.guildInfoRowIcon };
    const items2 = [callback(closure_6, obj4), ];
    const obj5 = { style: tmp.guildInfoSubscriptionCount, variant: "text-xs/semibold", color: "interactive-text-active" };
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj6 = { numSubscriptions: guild.numGuildBoostSlots };
    obj5.children = intl.format(require(1212) /* getSystemLocale */.t.bexfNy, obj6);
    items2[1] = callback(require(4126) /* Text */.Text, obj5);
    obj3.children = items2;
    items1[1] = callback2(closure_5, obj3);
    obj1.children = items1;
    items[1] = callback2(closure_5, obj1);
    obj.children = items;
    tmp2 = callback2(closure_5, obj);
    const tmp10 = importDefault(5513);
  }
  return tmp2;
}
function BoostedGuild(arg0) {
  let guildBoostSlots;
  let require;
  ({ guildId: require, guildBoostSlots } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(566) /* initialize */;
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getGuild(closure_0));
  let obj1 = require(566) /* initialize */;
  const items1 = [_isNativeReflectConstruct];
  let guildBannerSource = null;
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_7.theme);
  if (null != stateFromStores) {
    guildBannerSource = null;
    if (null != stateFromStores.banner) {
      let obj2 = guildBoostSlots(1392);
      guildBannerSource = obj2.getGuildBannerSource(stateFromStores);
    }
  }
  let obj3 = require(12486) /* getSubscriptionPlaceholderPatternSource */;
  let subscriptionPlaceholderPatternSource = obj3.useSubscriptionPlaceholderPatternSource();
  if (null != guildBannerSource) {
    subscriptionPlaceholderPatternSource = guildBannerSource;
  }
  obj = { style: tmp.boostedGuild };
  obj = { style: tmp.subscriptionBody };
  obj1 = { style: tmp.subscriptionImageView };
  obj2 = { source: subscriptionPlaceholderPatternSource };
  const items2 = [tmp.subscriptionImage, ];
  let prop = null;
  if (null == guildBannerSource) {
    prop = tmp.subscriptionImageFallback;
  }
  items2[1] = prop;
  obj2.style = items2;
  const items3 = [callback(closure_6, obj2), , ];
  let tmp17 = null;
  if (null != guildBannerSource) {
    obj3 = { style: tmp.subscriptionImageOverlay };
    tmp17 = callback(closure_5, obj3);
  }
  items3[1] = tmp17;
  items3[2] = callback(guildBoostSlots(12490), { guild: stateFromStores, theme: stateFromStores1 });
  obj1.children = items3;
  const items4 = [closure_12(closure_5, obj1), callback(BoostedGuildInfo, { guild: stateFromStores, numGuildBoostSlots: guildBoostSlots.length })];
  obj.children = items4;
  const items5 = [closure_12(closure_5, obj), callback(closure_5, { children: guildBoostSlots.map((guildBoostSlot) => outer1_11(outer1_17, { guild: stateFromStores, guildBoostSlot, isLast: arg1 === guildBoostSlots.length - 1 }, guildBoostSlot.id)) })];
  obj.children = items5;
  return closure_12(closure_5, obj);
}
({ View: closure_5, Image: closure_6 } = get_ActivityIndicator);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = { inventory: { marginBottom: 32 }, header: { marginHorizontal: 16, marginBottom: 16 } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, marginBottom: 16 };
_createForOfIteratorHelperLoose.boostedGuild = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.subscriptionBody = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, width: "100%", height: 112, overflow: "hidden", alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.subscriptionImageView = obj2;
_createForOfIteratorHelperLoose.subscriptionImage = { position: "absolute", width: "100%", height: "100%" };
_createForOfIteratorHelperLoose.subscriptionImageFallback = { opacity: 0.4 };
let obj3 = { position: "absolute", width: "100%", height: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BLACK, opacity: 0.4 };
_createForOfIteratorHelperLoose.subscriptionImageOverlay = obj3;
_createForOfIteratorHelperLoose.guildInfo = { flexDirection: "row", padding: 16 };
_createForOfIteratorHelperLoose.guildInfoIcon = { marginRight: 8 };
let obj4 = {};
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
const merged = Object.assign(require("createTextStyle")(require("ME").Fonts.DISPLAY_EXTRABOLD, require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE, 20));
obj4["marginBottom"] = 4;
_createForOfIteratorHelperLoose.guildInfoName = obj4;
_createForOfIteratorHelperLoose.guildInfoRowBottom = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.guildInfoRowIcon = { height: 12, width: 8, marginLeft: 2, marginRight: 8 };
_createForOfIteratorHelperLoose.guildInfoSubscriptionCount = { lineHeight: 16 };
_createForOfIteratorHelperLoose.subscriptionSlot = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, paddingLeft: 16 };
_createForOfIteratorHelperLoose.subscriptionSlotInner = { alignItems: "center", flexDirection: "row", paddingRight: 16, paddingVertical: 12 };
let obj5 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, paddingLeft: 16 };
_createForOfIteratorHelperLoose.subscriptionSlotBorder = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, height: 1 };
_createForOfIteratorHelperLoose.subscriptionSlotInfo = { flexShrink: 1, flexGrow: 1 };
_createForOfIteratorHelperLoose.subscriptionSlotInfoTitle = { lineHeight: 24 };
_createForOfIteratorHelperLoose.subscriptionSlotInfoCooldown = { lineHeight: 16 };
_createForOfIteratorHelperLoose.unusedSlots = { marginBottom: 32 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj6 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, height: 1 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/native/GuildBoostSlotsInventory.tsx");

export default function GuildBoostSlotsInventory() {
  const tmp = _createForOfIteratorHelperLoose();
  const effect = React.useEffect(() => {
    const subscriptions = outer1_2(outer1_3[23]).fetchSubscriptions();
    const obj = outer1_2(outer1_3[23]);
    const guildBoostSlots = valueResult(outer1_3[24]).fetchGuildBoostSlots();
  }, []);
  let obj = require(566) /* initialize */;
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_10.getPremiumTypeSubscription());
  let obj1 = require(566) /* initialize */;
  const items1 = [closure_9];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_9.boostSlots);
  let obj2 = importDefault(22)(stateFromStores1);
  const valueResult = obj2.groupBy((premiumGuildSubscription) => {
    premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
    let str = "0";
    if (null != premiumGuildSubscription) {
      str = premiumGuildSubscription.guildId;
    }
    return str;
  }).value();
  require = valueResult;
  const first = valueResult[0];
  const keys = Object.keys(valueResult);
  const found = keys.filter((arg0) => "0" !== arg0);
  if (0 !== found.length) {
    let tmp8Result = null;
    if (null != stateFromStores) {
      obj = { style: tmp.inventory };
      let tmp10 = null;
      if (null != first) {
        tmp10 = null;
        if (first.length > 0) {
          obj = { unusedSlots: first };
          tmp10 = callback(UnusedGuildBoostSlots, obj);
        }
      }
      const items2 = [tmp10, ];
      let tmp13 = null;
      if (found.length > 0) {
        obj1 = {};
        obj2 = { style: tmp.header, variant: "eyebrow", color: "text-default" };
        const intl = require(1212) /* getSystemLocale */.intl;
        obj2.children = intl.string(require(1212) /* getSystemLocale */.t.gB9oQ7);
        const items3 = [callback(require(4126) /* Text */.Text, obj2), found.map((guildId) => outer1_11(outer1_20, { guildId, guildBoostSlots: valueResult[guildId] }, guildId))];
        obj1.children = items3;
        tmp13 = callback2(closure_13, obj1);
      }
      items2[1] = tmp13;
      obj.children = items2;
      tmp8Result = callback2(closure_5, obj);
      const tmp8 = callback2;
      const tmp9 = closure_5;
    }
  } else {
    tmp8Result = null;
  }
  return tmp8Result;
};
