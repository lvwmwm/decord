// Module ID: 13854
// Function ID: 106088
// Name: memoResult1
// Dependencies: [31, 27, 1849, 6769, 6770, 653, 33, 4130, 689, 1273, 44, 624, 21, 4126, 3969, 6827, 5513, 9207, 1212, 2198, 13855, 13858, 13859, 2]
// Exports: default

// Module 13854 (memoResult1)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { ACTION_TO_TEXT } from "items";
import { GuildFeatures } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let obj = {};
obj = { display: "flex", flexDirection: "row", borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 };
obj.container = obj;
_createForOfIteratorHelperLoose = { borderRadius: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.NORMAL] / 2, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
obj.avatar = _createForOfIteratorHelperLoose;
obj.avatarContainer = { marginRight: 12, alignItems: "flex-start" };
obj.textContainer = { display: "flex", flexDirection: "column", flexShrink: 1 };
obj.text = { display: "flex", flexDirection: "row", flexShrink: 1 };
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((action) => {
  action = action.action;
  const tmp = callback3();
  const value = ACTION_TO_TEXT.get(action.display_type);
  importDefault(44)(value, "No text for action type");
  let obj = action(624);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getUser(action.entity_id));
  if (null == stateFromStores) {
    return null;
  } else {
    let obj1 = importDefault(21);
    const extractTimestampResult = obj1.extractTimestamp(action.event_id);
    obj = { style: tmp.container };
    obj = { style: tmp.avatarContainer };
    obj1 = { avatarStyle: tmp.avatar, user: stateFromStores, guildId: undefined, disablePlaceholder: true, avatarDecoration: stateFromStores.avatarDecoration };
    obj.children = callback(action(1273).Avatar, obj1);
    const items1 = [callback(View, obj), ];
    const obj2 = { style: tmp.textContainer };
    const obj3 = { style: tmp.text, variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: importDefault(3969).getName(stateFromStores) };
    const items2 = [callback(action(4126).Text, obj3), ];
    const obj4 = { variant: "text-xs/medium", color: "channels-default" };
    const obj8 = importDefault(3969);
    const _Date = Date;
    const date = new Date(extractTimestampResult);
    obj4.children = action(6827).formatUserActivityTimestamp(date.getTime(), value.timestampFormatter);
    items2[1] = callback(action(4126).Text, obj4);
    obj2.children = items2;
    items1[1] = callback2(View, obj2);
    obj.children = items1;
    return callback2(View, obj);
  }
});
memoResult.displayName = "FamilyCenterActivityRowUser";
let obj2 = {};
let obj3 = { display: "flex", alignItems: "center", flexDirection: "row", borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 };
obj2.container = obj3;
let obj4 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, height: 40, width: 40, margin: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST, marginRight: 12 };
obj2.avatar = obj4;
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
obj2.avatarText = _createForOfIteratorHelperLoose;
obj2.text = { display: "flex", flexDirection: "column", flexShrink: 1 };
obj2.headerContainer = { display: "flex", flexDirection: "row" };
obj2.badge = { marginRight: 4 };
obj2.header = { paddingRight: 16 };
obj2.headerAndIconContainer = { display: "flex", flexDirection: "row", alignItems: "center" };
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj2);
const memoResult1 = importAllResult.memo((action) => {
  action = action.action;
  const tmp = callback4();
  let obj = action(624);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getGuild(action.entity_id));
  const value = ACTION_TO_TEXT.get(action.display_type);
  importDefault(44)(value, "No text for action type");
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
    obj.size = action(5513).GuildIconSizes.NORMAL;
    obj.animate = true;
    const items1 = [callback(importDefault(5513), obj), ];
    const obj1 = { style: tmp.text };
    const obj2 = { style: tmp.headerContainer };
    const obj3 = { style: tmp.headerAndIconContainer };
    let tmp14 = null;
    if (hasItem) {
      const obj4 = { style: tmp.badge, guild: stateFromStores, size: importDefault(9207).Sizes.SMALL, disableColor: true };
      tmp14 = callback(importDefault(9207), obj4);
      const tmp18 = importDefault(9207);
    }
    const items2 = [tmp14, ];
    const obj5 = { style: tmp.header, variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: stateFromStores.name };
    items2[1] = callback(action(4126).Text, obj5);
    obj3.children = items2;
    obj2.children = closure_9(View, obj3);
    const items3 = [callback(View, obj2), ];
    let tmp22 = null;
    if (undefined !== stateFromStores.approximateMemberCount) {
      const obj6 = { variant: "text-xs/medium", color: "channels-default" };
      const intl = action(1212).intl;
      const obj7 = { members: stateFromStores.approximateMemberCount };
      obj6.children = intl.format(importDefault(2198)["5JmNgg"], obj7);
      tmp22 = callback(action(4126).Text, obj6);
    }
    items3[1] = tmp22;
    obj1.children = items3;
    items1[1] = closure_9(View, obj1);
    obj.children = items1;
    return closure_9(View, obj);
  }
});
memoResult1.displayName = "FamilyCenterActivityRowGuild";
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityRow.tsx");

export default function FamilyCenterActivityRow(action) {
  let claimed;
  let claimedAt;
  let gifterUserId;
  let offeredAt;
  let price;
  let skuId;
  let subscriptionPlanId;
  action = action.action;
  let obj = require(6827) /* getActivityTypeTextConfigs */;
  if (!obj.isUserAction(action)) {
    let obj1 = require(6827) /* getActivityTypeTextConfigs */;
    if (!obj1.isGuildAction(action)) {
      let obj2 = require(6827) /* getActivityTypeTextConfigs */;
      if (!obj2.isPurchase(action)) {
        let obj3 = require(6827) /* getActivityTypeTextConfigs */;
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
      tmp23 = callback(importDefault(13855), obj);
    }
    return tmp23;
  } else {
    if (obj6.isGift(action)) {
      const giftInfo = store.getGiftInfo(action.entity_id);
      if (null == giftInfo) {
        return null;
      } else {
        const giftRowDisplayInfo = require(13858) /* formatGiftDate */.getGiftRowDisplayInfo(giftInfo);
        ({ skuId, subscriptionPlanId, price, gifterUserId, claimed, offeredAt, claimedAt } = giftRowDisplayInfo);
        obj = { skuId, subscriptionPlanId, price, gifterUserId, claimed, offeredAt, claimedAt };
        return callback(importDefault(13859), obj);
      }
    } else {
      obj1 = {};
      if (obj8.isUserAction(action)) {
        obj2 = { action };
        let tmp14Result = tmp14(closure_11, obj2);
      } else {
        obj3 = { action };
        tmp14Result = tmp14(memoResult1, obj3);
      }
      obj1.children = tmp14Result;
      return callback(View, obj1);
    }
    obj6 = require(6827) /* getActivityTypeTextConfigs */;
  }
  obj5 = require(6827) /* getActivityTypeTextConfigs */;
};
