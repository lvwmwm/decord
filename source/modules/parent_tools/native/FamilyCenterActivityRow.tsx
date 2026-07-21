// Module ID: 13680
// Function ID: 103553
// Name: memoResult1
// Dependencies: []
// Exports: default

// Module 13680 (memoResult1)
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const ACTION_TO_TEXT = arg1(dependencyMap[4]).ACTION_TO_TEXT;
const GuildFeatures = arg1(dependencyMap[5]).GuildFeatures;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[6]));
let obj1 = arg1(dependencyMap[7]);
let obj = {};
obj = { borderBottomColor: importDefault(dependencyMap[8]).colors.BORDER_SUBTLE };
obj.container = obj;
obj1 = { borderRadius: arg1(dependencyMap[9]).AVATAR_SIZE_MAP[arg1(undefined, dependencyMap[9]).AvatarSizes.NORMAL] / 2, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
obj.avatar = obj1;
obj.avatarContainer = { accessibilityRole: true, y: null };
obj.textContainer = {};
obj.text = {};
let closure_10 = obj1.createStyles(obj);
const memoResult = importAllResult.memo((action) => {
  action = action.action;
  const arg1 = action;
  const tmp = callback3();
  const value = ACTION_TO_TEXT.get(action.display_type);
  importDefault(dependencyMap[10])(value, "No text for action type");
  let obj = arg1(dependencyMap[11]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => user.getUser(action.entity_id));
  if (null == stateFromStores) {
    return null;
  } else {
    let obj1 = importDefault(dependencyMap[12]);
    const extractTimestampResult = obj1.extractTimestamp(action.event_id);
    obj = { style: tmp.container };
    obj = { style: tmp.avatarContainer };
    obj1 = { avatarStyle: tmp.avatar, user: stateFromStores, guildId: undefined, disablePlaceholder: true, avatarDecoration: stateFromStores.avatarDecoration };
    obj.children = callback(arg1(dependencyMap[9]).Avatar, obj1);
    const items1 = [callback(View, obj), ];
    const obj2 = { style: tmp.textContainer };
    const obj3 = { "Null": "<string:1340029796>", "Null": "<string:1072076685>", "Null": "<string:16825665>", "Null": "<string:1014300928>", "Null": "isArray", style: tmp.text, children: importDefault(dependencyMap[14]).getName(stateFromStores) };
    const items2 = [callback(arg1(dependencyMap[13]).Text, obj3), ];
    const obj4 = {};
    const obj8 = importDefault(dependencyMap[14]);
    const _Date = Date;
    const date = new Date(extractTimestampResult);
    obj4.children = arg1(dependencyMap[15]).formatUserActivityTimestamp(date.getTime(), value.timestampFormatter);
    items2[1] = callback(arg1(dependencyMap[13]).Text, obj4);
    obj2.children = items2;
    items1[1] = callback2(View, obj2);
    obj.children = items1;
    return callback2(View, obj);
  }
});
memoResult.displayName = "FamilyCenterActivityRowUser";
let obj5 = arg1(dependencyMap[7]);
const obj2 = {};
const obj3 = { "Bool(true)": "isArray", "Bool(true)": "constructor", "Bool(true)": "h", "Bool(true)": "isArray", "Bool(true)": "isArray", "Bool(true)": "isArray", borderBottomColor: importDefault(dependencyMap[8]).colors.BORDER_SUBTLE };
obj2.container = obj3;
const tmp2 = arg1(dependencyMap[6]);
obj2.avatar = { borderRadius: importDefault(dependencyMap[8]).radii.md, borderColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGHEST };
obj5 = { color: importDefault(dependencyMap[8]).colors.TEXT_DEFAULT };
obj2.avatarText = obj5;
obj2.text = {};
obj2.headerContainer = {};
obj2.badge = { marginRight: 4 };
obj2.header = { paddingRight: 16 };
obj2.headerAndIconContainer = {};
let closure_12 = obj5.createStyles(obj2);
const memoResult1 = importAllResult.memo((action) => {
  action = action.action;
  const arg1 = action;
  const tmp = callback4();
  let obj = arg1(dependencyMap[11]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(action.entity_id));
  const value = ACTION_TO_TEXT.get(action.display_type);
  importDefault(dependencyMap[10])(value, "No text for action type");
  if (undefined === stateFromStores) {
    return null;
  } else {
    const features2 = stateFromStores.features;
    let hasItem = features2.has(GuildFeatures.VERIFIED);
    if (!hasItem) {
      const features = stateFromStores.features;
      hasItem = features.has(GuildFeatures.PARTNERED);
    }
    obj = { style: tmp.container };
    obj = {};
    ({ avatar: obj3.style, avatarText: obj3.textStyle } = tmp);
    obj.guild = stateFromStores;
    obj.size = arg1(dependencyMap[16]).GuildIconSizes.NORMAL;
    obj.animate = true;
    const items1 = [callback(importDefault(dependencyMap[16]), obj), ];
    const obj1 = { style: tmp.text };
    const obj2 = { style: tmp.headerContainer };
    const obj3 = { style: tmp.headerAndIconContainer };
    let tmp14 = null;
    if (hasItem) {
      const obj4 = { style: tmp.badge, guild: stateFromStores, size: importDefault(dependencyMap[17]).Sizes.SMALL, disableColor: true };
      tmp14 = callback(importDefault(dependencyMap[17]), obj4);
      const tmp18 = importDefault(dependencyMap[17]);
    }
    const items2 = [tmp14, ];
    const obj5 = { "Null": "<string:1340029796>", "Null": "<string:1072076685>", "Null": "<string:16825665>", "Null": "<string:1014300928>", "Null": "isArray", style: tmp.header, children: stateFromStores.name };
    items2[1] = callback(arg1(dependencyMap[13]).Text, obj5);
    obj3.children = items2;
    obj2.children = closure_9(View, obj3);
    const items3 = [callback(View, obj2), ];
    let tmp22 = null;
    if (undefined !== stateFromStores.approximateMemberCount) {
      const obj6 = {};
      const intl = arg1(dependencyMap[18]).intl;
      const obj7 = { members: stateFromStores.approximateMemberCount };
      obj6.children = intl.format(importDefault(dependencyMap[19]).5JmNgg, obj7);
      tmp22 = callback(arg1(dependencyMap[13]).Text, obj6);
    }
    items3[1] = tmp22;
    obj1.children = items3;
    items1[1] = closure_9(View, obj1);
    obj.children = items1;
    return closure_9(View, obj);
  }
});
memoResult1.displayName = "FamilyCenterActivityRowGuild";
const obj4 = { borderRadius: importDefault(dependencyMap[8]).radii.md, borderColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGHEST };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityRow.tsx");

export default function FamilyCenterActivityRow(action) {
  let claimed;
  let claimedAt;
  let gifterUserId;
  let offeredAt;
  let price;
  let skuId;
  let subscriptionPlanId;
  action = action.action;
  let obj = arg1(dependencyMap[15]);
  if (!obj.isUserAction(action)) {
    let obj1 = arg1(dependencyMap[15]);
    if (!obj1.isGuildAction(action)) {
      let obj2 = arg1(dependencyMap[15]);
      if (!obj2.isPurchase(action)) {
        let obj3 = arg1(dependencyMap[15]);
        if (!obj3.isGift(action)) {
          return null;
        }
      }
    }
  }
  if (obj5.isPurchase(action)) {
    const purchaseInfo = store.getPurchaseInfo(action.entity_id);
    let tmp23 = null;
    if (null != purchaseInfo) {
      obj = {};
      ({ sku_id: obj11.skuId, subscription_plan_id: obj11.subscriptionPlanId, total: obj11.total, currency: obj11.currency } = purchaseInfo);
      tmp23 = callback(importDefault(dependencyMap[20]), obj);
    }
    return tmp23;
  } else {
    if (obj6.isGift(action)) {
      const giftInfo = store.getGiftInfo(action.entity_id);
      if (null == giftInfo) {
        return null;
      } else {
        const giftRowDisplayInfo = arg1(dependencyMap[21]).getGiftRowDisplayInfo(giftInfo);
        ({ skuId, subscriptionPlanId, price, gifterUserId, claimed, offeredAt, claimedAt } = giftRowDisplayInfo);
        obj = { skuId, subscriptionPlanId, price, gifterUserId, claimed, offeredAt, claimedAt };
        return callback(importDefault(dependencyMap[22]), obj);
      }
    } else {
      obj1 = {};
      if (obj8.isUserAction(action)) {
        obj2 = { action };
        let tmp14Result = tmp14(memoResult, obj2);
      } else {
        obj3 = { action };
        tmp14Result = tmp14(memoResult1, obj3);
      }
      obj1.children = tmp14Result;
      return callback(View, obj1);
    }
    const obj6 = arg1(dependencyMap[15]);
  }
  const obj5 = arg1(dependencyMap[15]);
};
