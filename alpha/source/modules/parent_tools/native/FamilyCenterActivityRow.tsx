// Module ID: 16749
// Function ID: 16750
// Name: FamilyCenterActivityRow
// Dependencies: [19, 17, 1384, 7708, 7709, 1072, 21, 5009, 575, 1188, 38, 563, 11, 5619, 5063, 8364, 6951, 6955, 1114, 2537, 16750, 16753, 16754, 2]
// Exports: default

// Module 16749 (FamilyCenterActivityRow)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import native from "native" /* 1188 */;
import _modDef2537 from "module_2537" /* 2537 */;
import UserUtilsDefault from "UserUtils" /* 5063 */;
import GuildIconDefault from "GuildIcon" /* 6951 */;
import GuildBadgeDefault from "GuildBadge" /* 6955 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7709 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8364 */;
import FamilyCenterActivityPurchaseRowDefault from "FamilyCenterActivityPurchaseRow" /* 16750 */;
import FamilyCenterActivityGiftRowUtils from "FamilyCenterActivityGiftRowUtils" /* 16753 */;
import FamilyCenterActivityGiftRowDefault from "FamilyCenterActivityGiftRow" /* 16754 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7708 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj5;
let obj6;
let size;
const View = react_native.View;
const ACTION_TO_TEXT = FamilyCenterConstants.ACTION_TO_TEXT;
const GuildFeatures = Constants.GuildFeatures;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, avatar: obj3, avatarContainer: { marginRight: 12, alignItems: "flex-start" }, textContainer: { display: "flex", flexDirection: "column", flexShrink: 1 }, text: { display: "flex", flexDirection: "row", flexShrink: 1 } };
obj2 = { display: "flex", flexDirection: "row", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL] / 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_10 = createStyles(obj);
const memoResult = react.memo(function(action) {
  let date;
  let formatUserActivityTimestamp;
  let items1;
  let items2;
  let obj4;
  let tmp3Result2;
  action = action.action;
  const tmp = closure_10();
  const value = ACTION_TO_TEXT.get(action.display_type);
  _modDef38(null != value, "No text for action type");
  const items = [UserStore];
  const obj = action(563);
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(action.entity_id));
  if (null == stateFromStores) {
    return null;
  } else {
    const tmp3Result = SnowflakeUtilsDefault;
    const extractTimestampResult = tmp3Result.extractTimestamp(action.event_id);
    const obj2 = { style: tmp.container, children: items1 };
    const obj3 = { style: tmp.avatarContainer, children: closure_8(action(1188).Avatar, obj4) };
    obj4 = { avatarStyle: tmp.avatar, user: stateFromStores, guildId: "HermesInternal", disablePlaceholder: null, avatarDecoration: stateFromStores.avatarDecoration };
    items1 = [closure_8(View, obj3), ];
    const obj5 = { style: tmp.textContainer, children: items2 };
    const obj6 = { style: tmp.text, variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: tmp3Result2.getName(stateFromStores) };
    const Text = tmp6(5619).Text;
    tmp3Result2 = UserUtilsDefault;
    items2 = [closure_8(Text, obj6), ];
    const obj7 = { variant: "text-xs/medium", color: "channels-default", children: formatUserActivityTimestamp(date.getTime(), value.timestampFormatter) };
    const Text2 = tmp6(5619).Text;
    const _Date = Date;
    const self = this;
    const self2 = this;
    formatUserActivityTimestamp = action(8364).formatUserActivityTimestamp;
    action(8364);
    date = new Date(extractTimestampResult);
    items2[1] = closure_8(Text2, obj7);
    items1[1] = closure_9(View, obj5);
    return closure_9(View, obj2);
  }
});
const unpackModuleId = memoResult;
memoResult.displayName = "FamilyCenterActivityRowUser";
createStyles = createStyles_mod;
let obj4 = { container: obj5, avatar: size, avatarText: obj6, text: { display: "flex", flexDirection: "column", flexShrink: 1 }, headerContainer: { display: "flex", flexDirection: "row" }, badge: { marginRight: 4 }, header: { paddingRight: 16 }, headerAndIconContainer: { display: "flex", flexDirection: "row", alignItems: "center" } };
obj5 = { display: "flex", alignItems: "center", flexDirection: "row", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 };
const createStyles2 = createStyles.createStyles;
size = { borderRadius: nativeDefault.radii.md, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: 40, width: 40, margin: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, marginRight: 12 };
obj6 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_12 = createStyles2(obj4);
const memoResult1 = react.memo((action) => {
  let intl;
  let items1;
  let items2;
  let items3;
  let obj19;
  let obj7;
  action = action.action;
  const tmp = closure_12();
  const items = [FamilyCenterStore];
  const obj = action(563);
  const stateFromStores = obj.useStateFromStores(items, () => FamilyCenterStore.getGuild(action.entity_id));
  const value = ACTION_TO_TEXT.get(action.display_type);
  _modDef38(null != value, "No text for action type");
  if (undefined === stateFromStores) {
    return null;
  } else {
    const features2 = stateFromStores.features;
    let hasItem = features2.has(GuildFeatures.VERIFIED);
    const tmp16 = GuildFeatures;
    if (!hasItem) {
      const features = stateFromStores.features;
      hasItem = features.has(tmp16.PARTNERED);
    }
    const name = stateFromStores.name;
    const obj2 = { style: tmp.container, children: items1 };
    ({ avatar: obj3.style, avatarText: obj3.textStyle } = tmp);
    const obj4 = { style: null, textStyle: null, guild: stateFromStores, size: action(6951).GuildIconSizes.NORMAL, animate: true };
    const tmp6Result = GuildIconDefault;
    items1 = [closure_8(tmp6Result, obj4), ];
    const obj5 = { style: tmp.text, children: items3 };
    const obj6 = { style: tmp.headerContainer, children: closure_9(View, obj7) };
    let tmp11Result = null;
    obj7 = { style: tmp.headerAndIconContainer, children: items2 };
    if (hasItem) {
      const obj8 = { style: tmp.badge, guild: stateFromStores, size: GuildBadgeDefault.Sizes.SMALL, disableColor: true };
      const tmp6Result2 = GuildBadgeDefault;
      tmp11Result = tmp11(tmp6Result2, obj8);
    }
    items2 = [tmp11Result, ];
    const obj9 = { style: tmp.header, variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: name };
    items2[1] = closure_8(action(5619).Text, obj9);
    items3 = [closure_8(View, obj6), ];
    let tmp11Result2 = null;
    if (undefined !== stateFromStores.approximateMemberCount) {
      const obj10 = { variant: "text-xs/medium", color: "channels-default", children: intl.format(_modDef2537["5JmNgg"], obj19) };
      const Text = tmp2(5619).Text;
      intl = tmp2(1114).intl;
      obj19 = { members: stateFromStores.approximateMemberCount };
      tmp11Result2 = tmp11(Text, obj10);
    }
    items3[1] = tmp11Result2;
    items1[1] = closure_9(View, obj5);
    return closure_9(View, obj2);
  }
});
memoResult1.displayName = "FamilyCenterActivityRowGuild";
size = size_mod;
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityRow.tsx");

export default function FamilyCenterActivityRow(action) {
  let claimed;
  let claimedAt;
  let gifterUserId;
  let offeredAt;
  let price;
  let skuId;
  let subscriptionPlanId;
  action = action.action;
  const obj = FamilyCenterUtils;
  if (!obj.isUserAction(action)) {
    const tmpResult = FamilyCenterUtils;
    if (!tmpResult.isGuildAction(action)) {
      const tmpResult7 = FamilyCenterUtils;
      if (!tmpResult7.isPurchase(action)) {
        const tmpResult8 = FamilyCenterUtils;
        if (!tmpResult8.isGift(action)) {
          return null;
        }
      }
    }
  }
  const tmpResult9 = FamilyCenterUtils;
  if (tmpResult9.isPurchase(action)) {
    const purchaseInfo = FamilyCenterStore.getPurchaseInfo(action.entity_id);
    let tmp14 = null;
    if (null != purchaseInfo) {
      const obj2 = { skuId: null, subscriptionPlanId: null, total: null, currency: null };
      ({ sku_id: obj11.skuId, subscription_plan_id: obj11.subscriptionPlanId, total: obj11.total, currency: obj11.currency } = purchaseInfo);
      tmp14 = metroImportAll(FamilyCenterActivityPurchaseRowDefault, obj2);
    }
    return tmp14;
  } else {
    const tmpResult10 = FamilyCenterUtils;
    if (tmpResult10.isGift(action)) {
      const giftInfo = FamilyCenterStore.getGiftInfo(action.entity_id);
      if (null == giftInfo) {
        return null;
      } else {
        const tmpResult11 = FamilyCenterActivityGiftRowUtils;
        const giftRowDisplayInfo = tmpResult11.getGiftRowDisplayInfo(giftInfo);
        ({ skuId, subscriptionPlanId, price, gifterUserId, claimed, offeredAt, claimedAt } = giftRowDisplayInfo);
        const obj3 = { skuId, subscriptionPlanId, price, gifterUserId, claimed, offeredAt, claimedAt };
        return metroImportAll(FamilyCenterActivityGiftRowDefault, obj3);
      }
    } else {
      let tmp4Result;
      const tmp5 = View;
      const tmpResult12 = FamilyCenterUtils;
      if (tmpResult12.isUserAction(action)) {
        const obj4 = { action };
        tmp4Result = tmp4(unpackModuleId, obj4);
      } else {
        const obj5 = { action };
        tmp4Result = tmp4(memoResult1, obj5);
      }
      const obj6 = { children: tmp4Result };
      return metroImportAll(tmp5, obj6);
    }
  }
};
