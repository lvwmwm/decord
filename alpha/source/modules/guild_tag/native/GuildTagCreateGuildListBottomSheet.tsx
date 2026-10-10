// Module ID: 14882
// Function ID: 14883
// Name: GuildTagCreateGuildListBottomSheet
// Dependencies: [19, 5020, 21, 558, 576, 504, 1126, 6158, 5056, 12215, 5011, 6878, 6179, 6838, 6898, 6264, 2]

// Module 14882 (GuildTagCreateGuildListBottomSheet)
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import Powerups from "Powerups" /* 5011 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import GuildIconDefault from "GuildIcon" /* 6158 */;
import TableRowGroup2 from "TableRowGroup" /* 6264 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6838 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6878 */;
import ActionSheet2 from "ActionSheet" /* 6898 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 12215 */;
import react from "react" /* 19 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5020 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRow(guild) {
  let first;
  let tmp10;
  let tmp15;
  let tmp6;
  let tmp8;
  let tmp2 = dependencyMap;
  let obj = guild(576);
  const cResult = obj.c(14);
  guild = guild.guild;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberCountStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild.id) {
    const fn = function u() {
      return GuildMemberCountStore.getMemberCount(guild.id);
    };
    cResult[1] = guild.id;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = guild(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] !== stateFromStores) {
    let formatToPlainStringResult = null;
    if (null != stateFromStores) {
      const intl = tmp(1126).intl;
      let obj2 = { count: stateFromStores };
      formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.zRl6XR, obj2);
    }
    cResult[3] = stateFromStores;
    cResult[4] = formatToPlainStringResult;
    tmp8 = formatToPlainStringResult;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] !== guild) {
    const obj3 = { guild, size: guild(6158).GuildIconSizes.SMALL_32 };
    const tmp13 = GuildIconDefault;
    const tmp14 = closure_4(tmp13, obj3);
    cResult[5] = guild;
    cResult[6] = tmp14;
    tmp10 = tmp14;
  } else {
    tmp10 = cResult[6];
  }
  if (cResult[7] !== guild.id) {
    const fn2 = function h() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = { guildId: guild.id, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID, analyticsLocation: AnalyticsLocationDefault.USER_SETTINGS_USER_PROFILE };
      const tmp2 = openGuildPowerupsModalDefault;
      tmp2(obj2);
    };
    cResult[7] = guild.id;
    cResult[8] = fn2;
    tmp15 = fn2;
  } else {
    tmp15 = cResult[8];
  }
  if (cResult[9] === guild.name) {
    if (cResult[10] === tmp8) {
      if (cResult[11] === tmp10) {
        let tmp16;
        if (cResult[12] === tmp15) {
          tmp16 = cResult[13];
        }
        return tmp16;
      }
    }
  }
  const obj4 = { label: guild.name, subLabel: tmp8, icon: tmp10, arrow: true, onPress: tmp15 };
  const tmp17 = closure_4(guild(6179).TableRow, obj4);
  cResult[9] = guild.name;
  cResult[10] = tmp8;
  cResult[11] = tmp10;
  cResult[12] = tmp15;
  cResult[13] = tmp17;
  tmp16 = tmp17;
}) : (function GuildRow(guild) {
  let formatToPlainStringResult;
  let obj4;
  let tmp6;
  guild = guild.guild;
  let tmp2 = dependencyMap;
  let obj = guild(504);
  const items = [GuildMemberCountStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildMemberCountStore.getMemberCount(guild.id));
  let obj2 = {
    label: guild.name,
    subLabel: formatToPlainStringResult,
    icon: closure_4(tmp6, obj4),
    arrow: true,
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = { guildId: guild.id, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID, analyticsLocation: AnalyticsLocationDefault.USER_SETTINGS_USER_PROFILE };
      const tmp2 = openGuildPowerupsModalDefault;
      tmp2(obj2);
    }
  };
  formatToPlainStringResult = null;
  const TableRow = guild(6179).TableRow;
  if (null != stateFromStores) {
    const intl = tmp(1126).intl;
    const obj3 = { count: stateFromStores };
    formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.zRl6XR, obj3);
  }
  obj4 = { guild, size: guild(6158).GuildIconSizes.SMALL_32 };
  tmp6 = GuildIconDefault;
  return closure_4(TableRow, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildTagCreateGuildListBottomSheet(guilds) {
  let first;
  let intl;
  let intl2;
  let items;
  let tmp10;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(6);
  guilds = guilds.guilds;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: intl.string(intl3.t.xO5QzM), subtitle: intl2.string(intl3.t["h+7Yx3"]) };
    const BottomSheetTitleHeader = tmp(6838).BottomSheetTitleHeader;
    intl = tmp(1126).intl;
    intl2 = tmp(1126).intl;
    const tmp6 = React3(BottomSheetTitleHeader, obj2);
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guilds) {
    let tmp8;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function c(guild) {
        const obj = { guild };
        return closure_1_4(closure_1_6, obj, guild.id);
      };
      cResult[3] = fn;
      tmp8 = fn;
    } else {
      tmp8 = cResult[3];
    }
    const mapped = guilds.map(tmp8);
    cResult[1] = guilds;
    cResult[2] = mapped;
    tmp7 = mapped;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[4] !== tmp7) {
    const obj3 = { children: items };
    items = [first, ];
    const ActionSheet = tmp(6898).ActionSheet;
    const obj4 = { hasIcons: true, children: tmp7 };
    items[1] = React3(TableRowGroup2.TableRowGroup, obj4);
    const tmp13 = hasOwnProperty(ActionSheet, obj3);
    cResult[4] = tmp7;
    cResult[5] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[5];
  }
  return tmp10;
}) : (function GuildTagCreateGuildListBottomSheet(guilds) {
  let intl;
  let intl2;
  let items;
  guilds = guilds.guilds;
  let obj = { children: items };
  const ActionSheet = ActionSheet2.ActionSheet;
  const obj2 = { title: intl.string(intl3.t.xO5QzM), subtitle: intl2.string(intl3.t["h+7Yx3"]) };
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl3.intl;
  intl2 = intl3.intl;
  items = [React3(BottomSheetTitleHeader, obj2), ];
  const obj3 = {
    hasIcons: true,
    children: guilds.map((guild) => {
      const obj = { guild };
      return closure_1_4(closure_1_6, obj, guild.id);
    })
  };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  items[1] = React3(TableRowGroup, obj3);
  return hasOwnProperty(ActionSheet, obj);
});
const result = size.fileFinishedImporting("modules/guild_tag/native/GuildTagCreateGuildListBottomSheet.tsx");

export default tmp4;
