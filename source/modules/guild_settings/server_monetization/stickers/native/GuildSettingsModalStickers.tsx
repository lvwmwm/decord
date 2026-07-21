// Module ID: 16130
// Function ID: 124344
// Name: BoostedGuildTiers
// Dependencies: []

// Module 16130 (BoostedGuildTiers)
let BoostedGuildTiers;
const importAllResult = importAll(dependencyMap[0]);
({ ScrollView: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const tmp3 = arg1(dependencyMap[5]);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_8, BoostedGuildTiers } = tmp3);
const GuildFeatures = tmp3.GuildFeatures;
const MAX_STICKER_FILE_SIZE = arg1(dependencyMap[6]).MAX_STICKER_FILE_SIZE;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[7]));
let obj = { tier: BoostedGuildTiers.NONE };
const intl = arg1(dependencyMap[8]).intl;
obj.title = intl.string(arg1(dependencyMap[8]).t.tfVXhP);
obj.IconComponent = undefined;
const items = [obj, , , ];
obj = { tier: BoostedGuildTiers.TIER_1 };
const intl2 = arg1(dependencyMap[8]).intl;
obj.title = intl2.string(arg1(dependencyMap[8]).t.nzXtaS);
obj.IconComponent = arg1(dependencyMap[9]).BoostGemOutlineIcon;
items[1] = obj;
const obj1 = { tier: BoostedGuildTiers.TIER_2 };
const intl3 = arg1(dependencyMap[8]).intl;
obj1.title = intl3.string(arg1(dependencyMap[8]).t.h33/uW);
obj1.IconComponent = arg1(dependencyMap[10]).BoostGemIcon;
items[2] = obj1;
const obj2 = { tier: BoostedGuildTiers.TIER_3 };
const intl4 = arg1(dependencyMap[8]).intl;
obj2.title = intl4.string(arg1(dependencyMap[8]).t.BfF6ED);
obj2.IconComponent = arg1(dependencyMap[11]).BoostTier3Icon;
items[3] = obj2;
const tmp4 = arg1(dependencyMap[7]);
let closure_15 = arg1(dependencyMap[12]).createStyles((arg0) => {
  let obj = {};
  obj = { padding: importDefault(dependencyMap[13]).space.PX_16, paddingBottom: importDefault(dependencyMap[13]).space.PX_16 + arg0 };
  obj.container = obj;
  obj = { marginBottom: importDefault(dependencyMap[13]).space.PX_8 };
  obj.label = obj;
  obj.divider = { marginTop: importDefault(dependencyMap[13]).space.PX_16, marginBottom: importDefault(dependencyMap[13]).space.PX_16 };
  const obj1 = { marginTop: importDefault(dependencyMap[13]).space.PX_16, marginBottom: importDefault(dependencyMap[13]).space.PX_16 };
  obj.stickerSlot = { backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[13]).radii.lg, width: importDefault(dependencyMap[13]).space.PX_64, height: importDefault(dependencyMap[13]).space.PX_64, overflow: "hidden", alignItems: "center", justifyContent: "center" };
  const obj2 = { backgroundColor: importDefault(dependencyMap[13]).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(dependencyMap[13]).radii.lg, width: importDefault(dependencyMap[13]).space.PX_64, height: importDefault(dependencyMap[13]).space.PX_64, overflow: "hidden", alignItems: "center", justifyContent: "center" };
  obj.userRow = { gap: importDefault(dependencyMap[13]).space.PX_8 };
  return obj;
});
const obj6 = arg1(dependencyMap[12]);
const memoResult = importAllResult.memo(function GuildSettingsModalStickers(guildId) {
  let canCreateExpressions;
  guildId = guildId.guildId;
  const arg1 = guildId;
  let closure_5;
  let closure_6;
  const tmp = callback2(importDefault(dependencyMap[14])().bottom);
  const importDefault = tmp;
  let obj = arg1(dependencyMap[15]);
  const items = [closure_5];
  const items1 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const guild = stickers.getGuild(guildId);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(constants.MORE_STICKERS);
    }
    if (true !== hasItem) {
      let premiumTier;
      if (null != guild) {
        premiumTier = guild.premiumTier;
      }
      if (null == premiumTier) {
        premiumTier = closure_9.NONE;
      }
      let TIER_3 = premiumTier;
    } else {
      TIER_3 = closure_9.TIER_3;
    }
    const obj = { guild, guildTier: TIER_3 };
    return obj;
  }, items1);
  const guild = stateFromStoresObject.guild;
  const dependencyMap = guild;
  const guildTier = stateFromStoresObject.guildTier;
  let obj1 = arg1(dependencyMap[16]);
  const manageResourcePermissions = obj1.getManageResourcePermissions(guild, closure_6, closure_7);
  ({ canCreateExpressions, canManageGuildExpression: closure_4 } = manageResourcePermissions);
  const tmp4 = importDefault(dependencyMap[17])(guildId);
  if ("success" !== tmp4.status) {
    return callback(arg1(dependencyMap[18]).SceneLoadingIndicator, {});
  } else {
    const stickers = tmp4.stickers;
    closure_5 = stickers;
    if (canCreateExpressions) {
      canCreateExpressions = stickers.length < tmp23;
    }
    closure_6 = 0;
    obj = { contentContainerStyle: tmp.container };
    obj = { variant: "heading-md/semibold", style: tmp.label };
    const intl = arg1(dependencyMap[8]).intl;
    obj.children = intl.string(arg1(dependencyMap[8]).t.yxVsBJ);
    const items2 = [callback(arg1(dependencyMap[20]).Text, obj), , , , ];
    obj1 = { style: tmp.label };
    const intl2 = arg1(dependencyMap[8]).intl;
    const obj2 = {};
    let obj6 = arg1(dependencyMap[21]);
    const obj3 = { useKibibytes: true };
    obj2.fileSize = obj6.formatKbSize(MAX_STICKER_FILE_SIZE, obj3);
    obj1.children = intl2.format(arg1(dependencyMap[8]).t.kpcMft, obj2);
    items2[1] = callback(arg1(dependencyMap[20]).Text, obj1);
    const obj4 = {};
    const intl3 = arg1(dependencyMap[8]).intl;
    const string = intl3.string;
    const t = arg1(dependencyMap[8]).t;
    if (canCreateExpressions) {
      let stringResult = string(t.3DzNjU);
    } else {
      stringResult = string(t.IuvV5+);
    }
    obj4.text = stringResult;
    obj4.onPress = function onPress() {

    };
    obj4.disabled = !canCreateExpressions;
    items2[2] = callback(arg1(dependencyMap[22]).Button, obj4);
    const obj5 = { outer: true, style: tmp.divider };
    items2[3] = callback(arg1(dependencyMap[24]).FormDivider, obj5);
    obj6 = {
      spacing: importDefault(dependencyMap[13]).space.PX_16,
      children: items.map((title) => {
          let IconComponent;
          let tier;
          ({ tier, IconComponent } = title);
          let obj = guildId(guild[19]);
          const incrementalStickerCountForTier = obj.getIncrementalStickerCountForTier(tier);
          let obj1 = guildId(guild[19]);
          const availableStickerSlotCount = obj1.getAvailableStickerSlotCount(stickers, tier);
          obj = { hasIcons: true };
          obj = {};
          let tmp7Result;
          if (null != IconComponent) {
            obj1 = {};
            let str = "premium-nitro-pink-text";
            if (tmp) {
              str = "icon-muted";
            }
            obj1.color = str;
            tmp7Result = callback(IconComponent, obj1);
            const tmp7 = callback;
          }
          obj.icon = tmp7Result;
          obj.label = title.title;
          const intl = guildId(guild[8]).intl;
          const format = intl.format;
          const t = guildId(guild[8]).t;
          if (guildTier < tier) {
            const obj2 = { required: closure_8[tier], decorator: "" };
            let formatResult = format(t.t2Wbo1, obj2);
          } else {
            const obj3 = { numTotal: incrementalStickerCountForTier, numAvailable: availableStickerSlotCount };
            formatResult = format(t.ZLoNtm, obj3);
          }
          obj.subLabel = formatResult;
          let tmp9;
          if (guildTier < tier) {
            const obj4 = { color: "icon-muted" };
            tmp9 = callback(guildId(guild[28]).LockIcon, obj4);
          }
          obj.trailing = tmp9;
          const items = [
            callback(guildId(guild[27]).TableRow, obj),
            Array.from({ length: incrementalStickerCountForTier }).map((arg0, arg1) => {
              let closure_6 = tmp + 1;
              const tmp2 = closure_5[tmp];
              if (null == tmp2) {
                return null;
              } else {
                const tmp18 = callback(tmp2);
                const user = tmp2.user;
                let obj = {};
                obj = { style: lib.stickerSlot };
                const obj1 = { sticker: tmp2, size: lib(closure_2[13]).space.PX_48, animated: true };
                obj.children = callback2(lib(closure_2[29]), obj1);
                obj.icon = callback2(callback, obj);
                const obj2 = {};
                let obj3 = { style: lib.label, children: tmp2.name };
                const items = [callback2(tmp2(closure_2[20]).Text, obj3), ];
                let tmp11 = null;
                if (null != user) {
                  obj = { style: lib.userRow };
                  const obj4 = { user, size: tmp2(closure_2[30]).AvatarSizes.XSMALL_20, guildId: tmp2 };
                  const items1 = [callback2(tmp2(closure_2[30]).Avatar, obj4), ];
                  const obj5 = {};
                  obj3 = lib(closure_2[31]);
                  obj5.children = obj3.getName(user);
                  items1[1] = callback2(tmp2(closure_2[20]).Text, obj5);
                  obj.children = items1;
                  tmp11 = callback3(callback, obj);
                }
                items[1] = tmp11;
                obj2.children = items;
                obj.label = callback3(callback, obj2);
                let tmp12;
                if (tmp18) {
                  tmp12 = callback2(tmp2(closure_2[32]).TableRowArrow, {});
                }
                obj.trailing = tmp12;
                let fn;
                if (tmp18) {
                  fn = () => {
                    let obj = tmp2(closure_2[33]);
                    obj = { guildId: tmp2, stickerId: tmp2.id };
                    const result = obj.showGuildSettingsModalStickerInfoActionSheet(obj);
                  };
                }
                obj.onPress = fn;
                return callback2(tmp2(closure_2[27]).TableRow, obj, arg1);
              }
            })
          ];
          obj.children = items;
          return closure_13(guildId(guild[26]).TableRowGroup, obj, tier);
        })
    };
    items2[4] = callback(arg1(dependencyMap[25]).Stack, obj6);
    obj.children = items2;
    return closure_13(guildTier, obj);
  }
});
const result = arg1(dependencyMap[34]).fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/GuildSettingsModalStickers.tsx");

export default memoResult;
