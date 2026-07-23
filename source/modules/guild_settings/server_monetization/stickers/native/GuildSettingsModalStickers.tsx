// Module ID: 16263
// Function ID: 126620
// Name: BoostedGuildTiers
// Dependencies: [31, 27, 1838, 3758, 1849, 653, 3806, 33, 1212, 16264, 8013, 12455, 4130, 689, 1557, 566, 8402, 16266, 5585, 4022, 4126, 4025, 4543, 16267, 7495, 4541, 5503, 5165, 4652, 9615, 1273, 3969, 5171, 16273, 2]

// Module 16263 (BoostedGuildTiers)
import get_ActivityIndicator from "TableRowInner";
import closure_5 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";
import { MAX_STICKER_FILE_SIZE } from "STICKER_PICKER_TAB_PANEL_ID";
import jsxProd from "showGuildSettingsModalStickerInfoActionSheet";
import { intl } from "getSystemLocale";
import { intl as intl2 } from "getSystemLocale";
import { intl as intl3 } from "getSystemLocale";
import { intl as intl4 } from "getSystemLocale";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "conceal";

let BoostedGuildTiers;
let closure_12;
let closure_13;
let closure_3;
let closure_4;
let closure_8;
const require = arg1;
({ ScrollView: closure_3, View: closure_4 } = get_ActivityIndicator);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_8, BoostedGuildTiers } = ME);
const GuildFeatures = ME.GuildFeatures;
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
let obj = { tier: BoostedGuildTiers.NONE };
obj.title = intl.string(require("getSystemLocale").t.tfVXhP);
obj.IconComponent = undefined;
let items = [obj, , , ];
obj = { tier: BoostedGuildTiers.TIER_1 };
obj.title = intl2.string(require("getSystemLocale").t.nzXtaS);
obj.IconComponent = require("BoostGemOutlineIcon").BoostGemOutlineIcon;
items[1] = obj;
let obj1 = { tier: BoostedGuildTiers.TIER_2 };
obj1.title = intl3.string(require("getSystemLocale").t["h33/uW"]);
obj1.IconComponent = require("BoostGemIcon").BoostGemIcon;
items[2] = obj1;
let obj2 = { tier: BoostedGuildTiers.TIER_3 };
obj2.title = intl4.string(require("getSystemLocale").t.BfF6ED);
obj2.IconComponent = require("BoostTier3Icon").BoostTier3Icon;
items[3] = obj2;
let closure_15 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { padding: importDefault(689).space.PX_16, paddingBottom: importDefault(689).space.PX_16 + arg0 };
  obj.container = obj;
  obj = { marginBottom: importDefault(689).space.PX_8 };
  obj.label = obj;
  obj.divider = { marginTop: importDefault(689).space.PX_16, marginBottom: importDefault(689).space.PX_16 };
  const obj1 = { marginTop: importDefault(689).space.PX_16, marginBottom: importDefault(689).space.PX_16 };
  obj.stickerSlot = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOWEST, borderRadius: importDefault(689).radii.lg, width: importDefault(689).space.PX_64, height: importDefault(689).space.PX_64, overflow: "hidden", alignItems: "center", justifyContent: "center" };
  const obj3 = { gap: importDefault(689).space.PX_8, flexDirection: "row", alignItems: "center" };
  obj.userRow = obj3;
  return obj;
});
const memoResult = require("conceal").memo(function GuildSettingsModalStickers(guildId) {
  let canCreateExpressions;
  let closure_4;
  guildId = guildId.guildId;
  let stickers;
  let c6;
  const tmp = callback2(importDefault(guild[14])().bottom);
  importDefault = tmp;
  let obj = guildId(guild[15]);
  let items = [stickers];
  let items1 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const guild = stickers.getGuild(guildId);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(outer1_10.MORE_STICKERS);
    }
    if (true !== hasItem) {
      let premiumTier;
      if (null != guild) {
        premiumTier = guild.premiumTier;
      }
      if (null == premiumTier) {
        premiumTier = outer1_9.NONE;
      }
      let TIER_3 = premiumTier;
    } else {
      TIER_3 = outer1_9.TIER_3;
    }
    const obj = { guild, guildTier: TIER_3 };
    return obj;
  }, items1);
  guild = stateFromStoresObject.guild;
  const guildTier = stateFromStoresObject.guildTier;
  let obj1 = guildId(guild[16]);
  const manageResourcePermissions = obj1.getManageResourcePermissions(guild, c6, closure_7);
  ({ canCreateExpressions, canManageGuildExpression: closure_4 } = manageResourcePermissions);
  const tmp4 = importDefault(guild[17])(guildId);
  if ("success" !== tmp4.status) {
    return callback(guildId(guild[18]).SceneLoadingIndicator, {});
  } else {
    stickers = tmp4.stickers;
    if (canCreateExpressions) {
      canCreateExpressions = stickers.length < tmp23;
    }
    c6 = 0;
    obj = { contentContainerStyle: tmp.container };
    obj = { variant: "heading-md/semibold", style: tmp.label };
    let intl = guildId(guild[8]).intl;
    obj.children = intl.string(guildId(guild[8]).t.yxVsBJ);
    const items2 = [callback(guildId(guild[20]).Text, obj), , , , ];
    obj1 = { variant: "text-sm/medium", color: "text-muted", style: tmp.label };
    const intl2 = guildId(guild[8]).intl;
    let obj2 = {};
    let obj6 = guildId(guild[21]);
    let obj3 = { useKibibytes: true };
    obj2.fileSize = obj6.formatKbSize(MAX_STICKER_FILE_SIZE, obj3);
    obj1.children = intl2.format(guildId(guild[8]).t.kpcMft, obj2);
    items2[1] = callback(guildId(guild[20]).Text, obj1);
    let obj4 = {};
    const intl3 = guildId(guild[8]).intl;
    const string = intl3.string;
    let t = guildId(guild[8]).t;
    if (canCreateExpressions) {
      let stringResult = string(t["3DzNjU"]);
    } else {
      stringResult = string(t["IuvV5+"]);
    }
    obj4.text = stringResult;
    obj4.onPress = function onPress() {

    };
    obj4.disabled = !canCreateExpressions;
    items2[2] = callback(guildId(guild[22]).Button, obj4);
    let obj5 = { outer: true, style: tmp.divider };
    items2[3] = callback(guildId(guild[24]).FormDivider, obj5);
    obj6 = {
      spacing: importDefault(guild[13]).space.PX_16,
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
            tmp7Result = outer1_12(IconComponent, obj1);
            const tmp7 = outer1_12;
          }
          obj.icon = tmp7Result;
          obj.label = title.title;
          const intl = guildId(guild[8]).intl;
          const format = intl.format;
          const t = guildId(guild[8]).t;
          if (guildTier < tier) {
            let obj2 = { required: outer1_8[tier], decorator: "" };
            let formatResult = format(t.t2Wbo1, obj2);
          } else {
            let obj3 = { numTotal: incrementalStickerCountForTier, numAvailable: availableStickerSlotCount };
            formatResult = format(t.ZLoNtm, obj3);
          }
          obj.subLabel = formatResult;
          let tmp9;
          if (guildTier < tier) {
            let obj4 = { color: "icon-muted" };
            tmp9 = outer1_12(guildId(guild[28]).LockIcon, obj4);
          }
          obj.trailing = tmp9;
          let items = [
            outer1_12(guildId(guild[27]).TableRow, obj),
            Array.from({ length: incrementalStickerCountForTier }).map((arg0, arg1) => {
              const outer1_6 = tmp + 1;
              let closure_0 = tmp2;
              if (null == outer1_5[+outer1_6]) {
                return null;
              } else {
                const tmp18 = outer1_4(tmp2);
                const user = tmp2.user;
                let obj = {};
                obj = { style: outer1_1.stickerSlot };
                const obj1 = { sticker: tmp2, size: callback(guild[13]).space.PX_48, animated: true };
                obj.children = outer2_12(callback(guild[29]), obj1);
                obj.icon = outer2_12(outer2_4, obj);
                const obj2 = {};
                let obj3 = { variant: "heading-sm/semibold", color: "text-strong", style: outer1_1.label, children: tmp2.name };
                const items = [outer2_12(guildId(guild[20]).Text, obj3), ];
                let tmp11 = null;
                if (null != user) {
                  obj = { style: outer1_1.userRow };
                  const obj4 = { user, size: guildId(guild[30]).AvatarSizes.XSMALL_20, guildId: outer1_0 };
                  const items1 = [outer2_12(guildId(guild[30]).Avatar, obj4), ];
                  const obj5 = { variant: "text-sm/medium", color: "text-subtle" };
                  obj3 = callback(guild[31]);
                  obj5.children = obj3.getName(user);
                  items1[1] = outer2_12(guildId(guild[20]).Text, obj5);
                  obj.children = items1;
                  tmp11 = outer2_13(outer2_4, obj);
                }
                items[1] = tmp11;
                obj2.children = items;
                obj.label = outer2_13(outer2_4, obj2);
                let tmp12;
                if (tmp18) {
                  tmp12 = outer2_12(guildId(guild[32]).TableRowArrow, {});
                }
                obj.trailing = tmp12;
                let fn;
                if (tmp18) {
                  fn = () => {
                    let obj = guildId(guild[33]);
                    obj = { guildId: outer2_0, stickerId: tmp2.id };
                    const result = obj.showGuildSettingsModalStickerInfoActionSheet(obj);
                  };
                }
                obj.onPress = fn;
                return outer2_12(guildId(guild[27]).TableRow, obj, arg1);
              }
            })
          ];
          obj.children = items;
          return outer1_13(guildId(guild[26]).TableRowGroup, obj, tier);
        })
    };
    items2[4] = callback(guildId(guild[25]).Stack, obj6);
    obj.children = items2;
    return closure_13(guildTier, obj);
  }
});
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/GuildSettingsModalStickers.tsx");

export default memoResult;
