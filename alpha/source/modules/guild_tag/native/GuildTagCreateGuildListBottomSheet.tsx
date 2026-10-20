// Module ID: 13985
// Function ID: 13986
// Name: GuildTagCreateGuildListBottomSheet
// Dependencies: [19, 5155, 21, 558, 576, 504, 1128, 6831, 5171, 13202, 5146, 6851, 7194, 7244, 6935, 2]

// Module 13985 (GuildTagCreateGuildListBottomSheet)
import intl3 from "intl" /* 1128 */;
import Powerups from "Powerups" /* 5146 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import TableRowGroup2 from "TableRowGroup" /* 6935 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7194 */;
import ActionSheet2 from "ActionSheet" /* 7244 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 13202 */;
import react from "react" /* 19 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5155 */;
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
  let tmp6;
  let tmp8;
  let tmp2 = dependencyMap;
  let obj = guild(576);
  const cResult = obj.c(15);
  guild = guild.guild;
  const analyticsLocation = guild.analyticsLocation;
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
      const intl = tmp(1128).intl;
      let obj2 = { count: stateFromStores };
      formatToPlainStringResult = intl.formatToPlainString(tmp(1128).t.zRl6XR, obj2);
    }
    cResult[3] = stateFromStores;
    cResult[4] = formatToPlainStringResult;
    tmp8 = formatToPlainStringResult;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] !== guild) {
    const obj3 = { guild, size: guild(6831).GuildIconSizes.SMALL_32 };
    const tmp13 = analyticsLocation(6831);
    const tmp14 = closure_4(tmp13, obj3);
    cResult[5] = guild;
    cResult[6] = tmp14;
    tmp10 = tmp14;
  } else {
    tmp10 = cResult[6];
  }
  if (cResult[7] === analyticsLocation) {
    let tmp15;
    if (cResult[8] === guild.id) {
      tmp15 = cResult[9];
    }
    if (cResult[10] === guild.name) {
      if (cResult[11] === tmp8) {
        if (cResult[12] === tmp10) {
          let tmp16;
          if (cResult[13] === tmp15) {
            tmp16 = cResult[14];
          }
          return tmp16;
        }
      }
    }
    const obj4 = { label: guild.name, subLabel: tmp8, icon: tmp10, arrow: true, onPress: tmp15 };
    const tmp18 = closure_4(guild(6851).TableRow, obj4);
    cResult[10] = guild.name;
    cResult[11] = tmp8;
    cResult[12] = tmp10;
    cResult[13] = tmp15;
    cResult[14] = tmp18;
    tmp16 = tmp18;
  }
  class L {
    constructor() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = { guildId: guild.id, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID, analyticsLocation };
      const tmp2 = openGuildPowerupsModalDefault;
      tmp2(obj2);
    }
  }
  cResult[7] = analyticsLocation;
  cResult[8] = guild.id;
  cResult[9] = L;
  tmp15 = L;
}) : (function GuildRow(guild) {
  let formatToPlainStringResult;
  let obj4;
  let tmp6;
  guild = guild.guild;
  const analyticsLocation = guild.analyticsLocation;
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
      const obj2 = { guildId: guild.id, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID, analyticsLocation };
      const tmp2 = openGuildPowerupsModalDefault;
      tmp2(obj2);
    }
  };
  formatToPlainStringResult = null;
  const TableRow = guild(6851).TableRow;
  if (null != stateFromStores) {
    const intl = tmp(1128).intl;
    const obj3 = { count: stateFromStores };
    formatToPlainStringResult = intl.formatToPlainString(tmp(1128).t.zRl6XR, obj3);
  }
  obj4 = { guild, size: guild(6831).GuildIconSizes.SMALL_32 };
  tmp6 = analyticsLocation(6831);
  return closure_4(TableRow, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildTagCreateGuildListBottomSheet(arg0) {
  let analyticsLocation;
  let first;
  let guilds;
  let intl;
  let intl2;
  let items;
  let tmp8;
  let obj = analyticsLocation(576);
  const cResult = obj.c(8);
  ({ guilds, analyticsLocation } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: intl.string(analyticsLocation(1128).t.xO5QzM), subtitle: intl2.string(analyticsLocation(1128).t["h+7Yx3"]) };
    const BottomSheetTitleHeader = tmp(7194).BottomSheetTitleHeader;
    intl = tmp(1128).intl;
    intl2 = tmp(1128).intl;
    const tmp6 = closure_4(BottomSheetTitleHeader, obj2);
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === analyticsLocation) {
    let tmp7;
    let tmp10;
    if (cResult[2] === guilds) {
      tmp7 = cResult[3];
    }
    if (cResult[6] !== tmp7) {
      const obj3 = { children: items };
      items = [first, ];
      const ActionSheet = tmp(7244).ActionSheet;
      const obj4 = { hasIcons: true, children: tmp7 };
      items[1] = closure_4(analyticsLocation(6935).TableRowGroup, obj4);
      const tmp13 = closure_5(ActionSheet, obj3);
      cResult[6] = tmp7;
      cResult[7] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[7];
    }
    return tmp10;
  }
  if (cResult[4] !== analyticsLocation) {
    const fn = function c(guild) {
      const obj = { guild, analyticsLocation };
      return React3(closure_6, obj, guild.id);
    };
    cResult[4] = analyticsLocation;
    cResult[5] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[5];
  }
  const mapped = guilds.map(tmp8);
  cResult[1] = analyticsLocation;
  cResult[2] = guilds;
  cResult[3] = mapped;
  tmp7 = mapped;
}) : (function GuildTagCreateGuildListBottomSheet(arg0) {
  let analyticsLocation;
  let guilds;
  let intl;
  let intl2;
  let items;
  let require;
  ({ guilds, analyticsLocation: require } = arg0);
  let obj = { children: items };
  const ActionSheet = ActionSheet2.ActionSheet;
  const obj2 = { title: intl.string(intl3.t.xO5QzM), subtitle: intl2.string(intl3.t["h+7Yx3"]) };
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl3.intl;
  intl2 = intl3.intl;
  items = [closure_4(BottomSheetTitleHeader, obj2), ];
  const obj3 = {
    hasIcons: true,
    children: guilds.map((guild) => {
      const obj = { guild, analyticsLocation: require };
      return React3(closure_6, obj, guild.id);
    })
  };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  items[1] = closure_4(TableRowGroup, obj3);
  return closure_5(ActionSheet, obj);
});
const result = size.fileFinishedImporting("modules/guild_tag/native/GuildTagCreateGuildListBottomSheet.tsx");

export default tmp4;
