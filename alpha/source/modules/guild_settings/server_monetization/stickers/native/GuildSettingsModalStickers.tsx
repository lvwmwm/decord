// Module ID: 19784
// Function ID: 19785
// Name: GuildSettingsModalStickers
// Dependencies: [19, 17, 4784, 4845, 1386, 1071, 4741, 21, 1112, 8743, 19785, 9370, 14131, 4913, 575, 1628, 504, 7633, 19787, 7190, 5504, 6355, 5511, 19788, 7709, 19794, 7045, 11165, 1186, 5943, 7058, 19795, 2]

// Module 19784 (GuildSettingsModalStickers)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1112 */;
import StickersConstants from "StickersConstants" /* 4741 */;
import BoostGemIcon from "BoostGemIcon" /* 9370 */;
import BoostTier3Icon from "BoostTier3Icon" /* 14131 */;
import BoostGemOutlineIcon from "BoostGemOutlineIcon" /* 19785 */;
import showGuildSettingsStickerCreateModalDefault from "showGuildSettingsStickerCreateModal" /* 19788 */;
import showGuildSettingsModalStickerInfoActionSheet from "showGuildSettingsModalStickerInfoActionSheet" /* 19795 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 4784 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import UserStore from "UserStore" /* 1386 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import GuildBoostingUtils_mod from "GuildBoostingUtils" /* 8743 */;
import createStyles from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let GuildBoostingUtils;
let c3;
let closure_12;
let closure_4;
let intl;
let intl2;
let intl3;
let intl4;
let unpackModuleId;
({ ScrollView: c3, View: closure_4 } = react_native);
const BoostedGuildTiers = Constants.BoostedGuildTiers;
const GuildFeatures = Constants.GuildFeatures;
const MAX_STICKER_FILE_SIZE = StickersConstants.MAX_STICKER_FILE_SIZE;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let obj = { tier: BoostedGuildTiers.NONE, title: intl.string(intl5.t.tfVXhP), numSlots: GuildBoostingUtils.getIncrementalStickerCountForTier(BoostedGuildTiers.NONE) };
intl = intl5.intl;
GuildBoostingUtils = GuildBoostingUtils_mod;
let items = [obj, , , ];
let obj2 = { tier: BoostedGuildTiers.TIER_1, title: intl2.string(intl5.t.nzXtaS), IconComponent: BoostGemOutlineIcon.BoostGemOutlineIcon, numSlots: GuildBoostingUtils.getIncrementalStickerCountForTier(BoostedGuildTiers.TIER_1) };
intl2 = intl5.intl;
GuildBoostingUtils = GuildBoostingUtils_mod;
items[1] = obj2;
let obj3 = { tier: BoostedGuildTiers.TIER_2, title: intl3.string(intl5.t["h33/uW"]), IconComponent: BoostGemIcon.BoostGemIcon, numSlots: GuildBoostingUtils.getIncrementalStickerCountForTier(BoostedGuildTiers.TIER_2) };
intl3 = intl5.intl;
GuildBoostingUtils = GuildBoostingUtils_mod;
items[2] = obj3;
let obj4 = { tier: BoostedGuildTiers.TIER_3, title: intl4.string(intl5.t.BfF6ED), IconComponent: BoostTier3Icon.BoostTier3Icon, numSlots: GuildBoostingUtils.getIncrementalStickerCountForTier(BoostedGuildTiers.TIER_3) };
intl4 = intl5.intl;
GuildBoostingUtils = GuildBoostingUtils_mod;
items[3] = obj4;
let closure_14 = createStyles.createStyles((arg0) => {
  const obj = { container: { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 }, label: { marginBottom: nativeDefault.space.PX_8 }, divider: { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 }, stickerSlot: size, userRow: { gap: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" } };
  ({ padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 });
  ({ marginBottom: nativeDefault.space.PX_8 });
  ({ marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 });
  size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.lg, width: nativeDefault.space.PX_64, height: nativeDefault.space.PX_64, overflow: "hidden", alignItems: "center", justifyContent: "center" };
  ({ gap: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" });
  return obj;
});
const memoResult = react.memo(function GuildSettingsModalStickers(guildId) {
  let _undefined;
  let c4;
  let canCreateExpressions;
  let closure_1;
  let format;
  let intl;
  let items2;
  let kpcMft;
  let obj6;
  let tmp4Result;
  guildId = guildId.guildId;
  importDefault = undefined;
  let guild;
  c4 = undefined;
  let stickers;
  const tmp = importDefault;
  const tmp3 = closure_14(require("useSafeAreaInsets")().bottom);
  importDefault = tmp3;
  let obj = guildId(guild[16]);
  items = [stickers];
  let items1 = [guildId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    guild = GuildStore.getGuild(guildId);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.MORE_STICKERS);
    }
    if (true !== hasItem) {
      let premiumTier;
      if (guild != null) {
        premiumTier = guild.premiumTier;
      }
      if (premiumTier == null) {
        premiumTier = BoostedGuildTiers.NONE;
      }
      guildTier = premiumTier;
    } else {
      guildTier = BoostedGuildTiers.TIER_3;
    }
    return { guild, guildTier };
  }, items1);
  guild = stateFromStoresObject.guild;
  let guildTier = stateFromStoresObject.guildTier;
  let obj2 = guildId(guild[17]);
  const manageResourcePermissions = obj2.getManageResourcePermissions(guild, PermissionStore, UserStore);
  ({ canCreateExpressions, canManageGuildExpression: c4 } = manageResourcePermissions);
  const tmp7 = require("useLoadGuildStickerWithCreator")(guildId);
  if ("success" !== tmp7.status) {
    let tmp13 = closure_11;
    return closure_11(guildId(guild[19]).SceneLoadingIndicator, {});
  } else {
    let stringResult;
    stickers = tmp7.stickers;
    const tmp14 = items;
    if (canCreateExpressions) {
      canCreateExpressions = stickers.length < tmp15;
    }
    let obj3 = { contentContainerStyle: tmp3.container, children: items2 };
    const tmp10 = closure_11;
    const tmp8 = closure_12;
    const tmp9 = guildTier;
    let obj4 = { variant: "heading-sm/semibold", style: tmp3.label, children: intl.string(tmp4(tmp2[8]).t.yxVsBJ) };
    let Text = tmp4(tmp2[20]).Text;
    intl = tmp4(tmp2[8]).intl;
    items2 = [closure_11(Text, obj4), , , , ];
    let obj5 = { variant: "body-sm/medium", color: "text-muted", style: tmp3.label, children: format(kpcMft, obj6) };
    const Text2 = tmp4(tmp2[20]).Text;
    const intl2 = tmp4(tmp2[8]).intl;
    format = intl2.format;
    obj6 = { fileSize: tmp4Result.formatKbSize(MAX_STICKER_FILE_SIZE, { useKibibytes: true }) };
    kpcMft = tmp4(tmp2[8]).t.kpcMft;
    let tmp11 = MAX_STICKER_FILE_SIZE;
    tmp4Result = guildId(guild[21]);
    items2[1] = closure_11(Text2, obj5);
    const Button = tmp4(tmp2[22]).Button;
    const intl3 = tmp4(tmp2[8]).intl;
    const string = intl3.string;
    const t = tmp4(tmp2[8]).t;
    if (canCreateExpressions) {
      stringResult = string(t["3DzNjU"]);
    } else {
      stringResult = string(t["IuvV5+"]);
    }
    let obj7 = {
      text: stringResult,
      onPress() {
          const obj = { guildId };
          showGuildSettingsStickerCreateModalDefault(obj);
        },
      disabled: !canCreateExpressions
    };
    items2[2] = tmp10(Button, obj7);
    let obj8 = { outer: true, style: tmp3.divider };
    items2[3] = tmp10(guildId(guild[24]).FormDivider, obj8);
    const obj9 = {
      tiers: tmp14,
      guildTier,
      hasIcons: false,
      renderUnlockedSubLabel(arg0) {
          let numSlots;
          let obj2;
          let tier;
          ({ tier, numSlots } = arg0);
          const intl = intl5.intl;
          const format = intl.format;
          const obj = { numTotal: numSlots, numAvailable: obj2.getAvailableStickerSlotCount(stickers, tier) };
          const ZLoNtm = intl5.t.ZLoNtm;
          obj2 = GuildBoostingUtils;
          return format(ZLoNtm, obj);
        },
      renderSlot(arg0, arg1) {
          let fn;
          let id;
          let items1;
          let obj3;
          let obj4;
          let obj8;
          let tmp12Result;
          let tmp13;
          let tmp7Result;
          guildId = tmp;
          if (null == stickers[arg1]) {
            return null;
          } else {
            const tmp6 = _undefined(stickers[arg1]);
            const user = tmp.user;
            let obj2 = { icon: closure_1_11(_undefined, obj3), label: closure_1_12(_undefined, obj8), trailing: tmp7Result, onPress: fn };
            obj3 = { style: closure_1.stickerSlot, children: closure_1_11(tmp13, obj4) };
            const TableRow = guildId(guild[26]).TableRow;
            obj4 = { sticker: stickers[arg1], size: closure_1(guild[14]).space.PX_48, animated: true };
            const obj5 = { variant: "heading-xs/semibold", color: "text-strong", style: closure_1.label, children: stickers[arg1].name };
            tmp13 = closure_1(guild[27]);
            items = [closure_1_11(guildId(guild[20]).Text, obj5), ];
            let tmp14Result = null;
            const tmp11 = closure_1;
            const tmp12 = closure_1;
            if (null != user) {
              let obj = { style: tmp11.userRow, children: items1 };
              const obj6 = { user, size: guildId(guild[28]).AvatarSizes.XSMALL_20, guildId };
              const Avatar = tmp8(tmp9[28]).Avatar;
              items1 = [closure_1_11(Avatar, obj6), ];
              const obj7 = { variant: "body-sm/medium", color: "text-subtle", children: tmp12Result.getName(guildId, undefined, user) };
              const Text = tmp8(tmp9[20]).Text;
              tmp12Result = tmp12(guild[29]);
              items1[1] = closure_1_11(Text, obj7);
              tmp14Result = tmp14(tmp10, obj);
            }
            obj8 = { children: items };
            items[1] = tmp14Result;
            tmp7Result = undefined;
            if (tmp6) {
              tmp7Result = tmp7(tmp8(tmp9[30]).TableRowArrow, {});
            }
            fn = undefined;
            if (tmp6) {
              fn = () => {
                const obj = showGuildSettingsModalStickerInfoActionSheet;
                const obj2 = { guildId, stickerId: id.id };
                const result = obj.showGuildSettingsModalStickerInfoActionSheet(obj2);
              };
            }
            return closure_1_11(TableRow, obj2, stickers[arg1].id);
          }
        }
    };
    items2[4] = tmp10(tmp(guild[25]), obj9);
    return tmp8(tmp9, obj3);
  }
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/GuildSettingsModalStickers.tsx");

export default memoResult;
