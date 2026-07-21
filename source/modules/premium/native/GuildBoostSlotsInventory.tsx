// Module ID: 12312
// Function ID: 94354
// Name: GuildBoostSlotCooldown
// Dependencies: []
// Exports: default

// Module 12312 (GuildBoostSlotCooldown)
function GuildBoostSlotCooldown(cooldownEndsAt) {
  let days;
  let hours;
  let minutes;
  cooldownEndsAt = cooldownEndsAt.cooldownEndsAt;
  const arg1 = cooldownEndsAt;
  const items = [cooldownEndsAt];
  const memo = React.useMemo(() => new Date(cooldownEndsAt), items);
  const tmp = callback3();
  ({ days, hours, minutes } = importDefault(dependencyMap[11])(memo, 15000));
  const tmp2 = importDefault(dependencyMap[11])(memo, 15000);
  let tmp4 = null;
  if (valueOfResult > Date.now()) {
    let obj = { style: tmp.subscriptionSlotInfoCooldown };
    const intl = arg1(dependencyMap[13]).intl;
    obj = { days, hours, minutes };
    obj.children = intl.format(arg1(dependencyMap[13]).t.NffSH8, obj);
    tmp4 = callback(arg1(dependencyMap[12]).Text, obj);
  }
  return tmp4;
}
function GuildBoostSlotsInventoryRow(arg0) {
  let action;
  let isLast;
  let subtitle;
  let title;
  ({ title, subtitle, action, isLast } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.subscriptionSlot };
  obj = { style: tmp.subscriptionSlotInner };
  obj = { style: tmp.subscriptionSlotInfo };
  const items = [callback(arg1(dependencyMap[12]).Text, { style: tmp.subscriptionSlotInfoTitle, children: title }), subtitle];
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
  const arg1 = guildBoostSlot;
  if (null == guildBoostSlot.guild) {
    return null;
  } else {
    let id = null;
    if (null != guildBoostSlot.premiumGuildSubscription) {
      id = guildBoostSlot.premiumGuildSubscription.id;
    }
    let extractTimestampResult = null;
    if (null != id) {
      let obj = importDefault(dependencyMap[14]);
      extractTimestampResult = obj.extractTimestamp(id);
    }
    obj = {};
    let formatToPlainStringResult = null;
    if (null != extractTimestampResult) {
      const intl = arg1(dependencyMap[13]).intl;
      obj = {};
      const _Date = Date;
      const date = new Date(extractTimestampResult);
      obj.date = date;
      formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[13]).t.ePe+Xh, obj);
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
              return guildBoostSlot(closure_3[16]).openTransferModal({ guildBoostSlots });
            }
      };
      const obj3 = { hasMaxConnections: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003337610788552319, isBoostOnlySubscription: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002342370524951205 };
      const intl2 = arg1(dependencyMap[13]).intl;
      obj3.children = intl2.string(arg1(dependencyMap[13]).t.jqqLb6);
      obj2.children = callback(arg1(dependencyMap[12]).Text, obj3);
      tmp20 = callback(arg1(dependencyMap[15]).PressableOpacity, obj2);
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
  const arg1 = found;
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
  let obj = { style: callback3().unusedSlots };
  let tmp4 = null;
  if (found1.length > 0) {
    obj = {};
    const intl = arg1(dependencyMap[13]).intl;
    obj = { numSubscriptions: found1.length };
    obj.title = intl.formatToPlainString(arg1(dependencyMap[13]).t.ewI23O, obj);
    const obj1 = {
      accessibilityRole: "button",
      onPress() {
          return found(closure_3[16]).openApplyBoostModal();
        }
    };
    const obj2 = {};
    const intl2 = arg1(dependencyMap[13]).intl;
    obj2.children = intl2.string(arg1(dependencyMap[13]).t.7KyPor);
    obj1.children = callback(arg1(dependencyMap[12]).Text, obj2);
    obj.action = callback(arg1(dependencyMap[15]).PressableOpacity, obj1);
    obj.isLast = 0 === found.length;
    tmp4 = callback(GuildBoostSlotsInventoryRow, obj);
  }
  const items = [
    tmp4,
    found.map((cooldownEndsAt) => {
      let obj = {};
      const intl = found(closure_3[13]).intl;
      obj.title = intl.formatToPlainString(found(closure_3[13]).t.gDsyB9, { numSubscriptions: 1 });
      let tmp3 = null;
      if (null != cooldownEndsAt.cooldownEndsAt) {
        obj = { cooldownEndsAt: cooldownEndsAt.cooldownEndsAt };
        tmp3 = callback(closure_15, obj);
      }
      obj.subtitle = tmp3;
      obj.isLast = arg1 === found.length - 1;
      return callback(closure_16, obj, cooldownEndsAt.id);
    })
  ];
  obj.children = items;
  return closure_12(closure_5, obj);
}
function BoostedGuildInfo(guild) {
  guild = guild.guild;
  const tmp = callback3();
  let tmp2 = null;
  if (null != guild) {
    let obj = { style: tmp.guildInfo };
    obj = { style: tmp.guildInfoIcon };
    obj = { guild, size: arg1(dependencyMap[17]).GuildIconSizes.NORMAL, selected: false };
    obj.children = callback(importDefault(dependencyMap[17]), obj);
    const items = [callback(closure_5, obj), ];
    const obj1 = {};
    const obj2 = { delete: "nose", dispatch: 5, raw: 1, style: tmp.guildInfoName, children: guild.name };
    const items1 = [callback(arg1(dependencyMap[12]).Text, obj2), ];
    const obj3 = { style: tmp.guildInfoRowBottom };
    const obj4 = { source: importDefault(dependencyMap[18]), style: tmp.guildInfoRowIcon };
    const items2 = [callback(closure_6, obj4), ];
    const obj5 = { delete: null, dispatch: null, raw: null, style: tmp.guildInfoSubscriptionCount };
    const intl = arg1(dependencyMap[13]).intl;
    const obj6 = { numSubscriptions: guild.numGuildBoostSlots };
    obj5.children = intl.format(arg1(dependencyMap[13]).t.bexfNy, obj6);
    items2[1] = callback(arg1(dependencyMap[12]).Text, obj5);
    obj3.children = items2;
    items1[1] = callback2(closure_5, obj3);
    obj1.children = items1;
    items[1] = callback2(closure_5, obj1);
    obj.children = items;
    tmp2 = callback2(closure_5, obj);
    const tmp10 = importDefault(dependencyMap[17]);
  }
  return tmp2;
}
function BoostedGuild(arg0) {
  let guildBoostSlots;
  ({ guildId: closure_0, guildBoostSlots } = arg0);
  const importDefault = guildBoostSlots;
  const tmp = callback3();
  let obj = arg1(dependencyMap[19]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(closure_0));
  const importAll = stateFromStores;
  let obj1 = arg1(dependencyMap[19]);
  const items1 = [closure_7];
  let guildBannerSource = null;
  const stateFromStores1 = obj1.useStateFromStores(items1, () => theme.theme);
  if (null != stateFromStores) {
    guildBannerSource = null;
    if (null != stateFromStores.banner) {
      let obj2 = importDefault(dependencyMap[20]);
      guildBannerSource = obj2.getGuildBannerSource(stateFromStores);
    }
  }
  let obj3 = arg1(dependencyMap[21]);
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
  items3[2] = callback(importDefault(dependencyMap[22]), { guild: stateFromStores, theme: stateFromStores1 });
  obj1.children = items3;
  const items4 = [closure_12(closure_5, obj1), callback(BoostedGuildInfo, { guild: stateFromStores, numGuildBoostSlots: guildBoostSlots.length })];
  obj.children = items4;
  const items5 = [closure_12(closure_5, obj), callback(closure_5, { children: guildBoostSlots.map((guildBoostSlot) => callback(closure_17, { guild: stateFromStores, guildBoostSlot, isLast: arg1 === guildBoostSlots.length - 1 }, guildBoostSlot.id)) })];
  obj.children = items5;
  return closure_12(closure_5, obj);
}
let closure_4 = importAll(dependencyMap[0]);
({ View: closure_5, Image: closure_6 } = arg1(dependencyMap[1]));
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { inventory: { marginBottom: 32 }, header: {} };
obj = { borderRadius: importDefault(dependencyMap[9]).radii.xs, marginBottom: 16 };
obj.boostedGuild = obj;
const tmp3 = arg1(dependencyMap[7]);
obj.subscriptionBody = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWEST };
const obj2 = { "Bool(false)": "<string:1247281155>", "Bool(false)": "<string:1107361795>", "Bool(false)": "{{count}} minuty", "Bool(false)": "{{count}} minut", "Bool(false)": "<string:17309763>", "Bool(false)": "<string:51533568>", backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_MOD_NORMAL };
obj.subscriptionImageView = obj2;
obj.subscriptionImage = {};
obj.subscriptionImageFallback = { opacity: 0.4 };
const obj1 = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWEST };
obj.subscriptionImageOverlay = { backgroundColor: importDefault(dependencyMap[9]).colors.BLACK };
obj.guildInfo = {};
obj.guildInfoIcon = { marginRight: 8 };
const obj4 = {};
const obj3 = { backgroundColor: importDefault(dependencyMap[9]).colors.BLACK };
const merged = Object.assign(importDefault(dependencyMap[10])(arg1(dependencyMap[6]).Fonts.DISPLAY_EXTRABOLD, importDefault(dependencyMap[9]).colors.INTERACTIVE_TEXT_ACTIVE, 20));
obj4["marginBottom"] = 4;
obj.guildInfoName = obj4;
obj.guildInfoRowBottom = { "Null": 7, "Null": 370 };
obj.guildInfoRowIcon = {};
obj.guildInfoSubscriptionCount = { lineHeight: 16 };
const importDefaultResult = importDefault(dependencyMap[10]);
obj.subscriptionSlot = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_SURFACE_HIGH, paddingLeft: 16 };
obj.subscriptionSlotInner = { borderRadius: null, alignItems: null, marginBottom: null, marginHorizontal: null };
const obj5 = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_SURFACE_HIGH, paddingLeft: 16 };
obj.subscriptionSlotBorder = { backgroundColor: importDefault(dependencyMap[9]).colors.BORDER_SUBTLE, height: 1 };
obj.subscriptionSlotInfo = { "Null": null, "Null": null };
obj.subscriptionSlotInfoTitle = { lineHeight: 24 };
obj.subscriptionSlotInfoCooldown = { lineHeight: 16 };
obj.unusedSlots = { marginBottom: 32 };
let closure_14 = obj.createStyles(obj);
const obj6 = { backgroundColor: importDefault(dependencyMap[9]).colors.BORDER_SUBTLE, height: 1 };
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/premium/native/GuildBoostSlotsInventory.tsx");

export default function GuildBoostSlotsInventory() {
  const tmp = callback3();
  const effect = React.useEffect(() => {
    const subscriptions = callback(closure_3[23]).fetchSubscriptions();
    const obj = callback(closure_3[23]);
    const guildBoostSlots = valueResult(closure_3[24]).fetchGuildBoostSlots();
  }, []);
  let obj = arg1(dependencyMap[19]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let obj1 = arg1(dependencyMap[19]);
  const items1 = [closure_9];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => boostSlots.boostSlots);
  let obj2 = importDefault(dependencyMap[25])(stateFromStores1);
  const valueResult = obj2.groupBy((premiumGuildSubscription) => {
    premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
    let str = "0";
    if (null != premiumGuildSubscription) {
      str = premiumGuildSubscription.guildId;
    }
    return str;
  }).value();
  const arg1 = valueResult;
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
        obj2 = { style: tmp.header };
        const intl = arg1(dependencyMap[13]).intl;
        obj2.children = intl.string(arg1(dependencyMap[13]).t.gB9oQ7);
        const items3 = [callback(arg1(dependencyMap[12]).Text, obj2), found.map((guildId) => callback2(closure_20, { guildId, guildBoostSlots: valueResult[guildId] }, guildId))];
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
