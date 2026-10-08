// Module ID: 14983
// Function ID: 14984
// Name: FamilyCenterTopServersBottomSheet
// Dependencies: [7247, 21, 5090, 587, 558, 576, 504, 7714, 6161, 6184, 1126, 2565, 5086, 6267, 6885, 2]

// Module 14983 (FamilyCenterTopServersBottomSheet)
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import _modDef2565 from "module_2565" /* 2565 */;
import Text_Text from "Text/Text" /* 5086 */;
import GuildIconDefault from "GuildIcon" /* 6161 */;
import TableRowGroup2 from "TableRowGroup" /* 6267 */;
import ActionSheet2 from "ActionSheet" /* 6885 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7247 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { header: { textAlign: "center" }, guildIcon: obj2 };
obj2 = { borderRadius: nativeDefault.radii.md, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_6 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRow(guildActivity) {
  let first;
  let tmp7;
  const obj = guildActivity(576);
  const cResult = obj.c(13);
  guildActivity = guildActivity.guildActivity;
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildActivity.guild_id) {
    const fn = function u() {
      return FamilyCenterStore.getGuild(guildActivity.guild_id);
    };
    cResult[1] = guildActivity.guild_id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = guildActivity(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (null == stateFromStores) {
    return null;
  } else {
    if (cResult[3] === guildActivity.call_count) {
      let tmp9;
      if (cResult[4] === guildActivity.messages_sent) {
        tmp9 = cResult[5];
      }
      if (cResult[6] === stateFromStores) {
        let tmp11;
        if (cResult[7] === tmp4.guildIcon) {
          tmp11 = cResult[8];
        }
        if (cResult[9] === tmp9) {
          if (cResult[10] === stateFromStores.name) {
            let tmp15;
            if (cResult[11] === tmp11) {
              tmp15 = cResult[12];
            }
            return tmp15;
          }
        }
        const obj2 = { label: stateFromStores.name, subLabel: tmp9, icon: tmp11 };
        const tmp17 = closure_4(guildActivity(6184).TableRow, obj2);
        cResult[9] = tmp9;
        cResult[10] = stateFromStores.name;
        cResult[11] = tmp11;
        cResult[12] = tmp17;
        tmp15 = tmp17;
      }
      const obj3 = { guild: stateFromStores, style: tmp4.guildIcon };
      const tmp14 = closure_4(GuildIconDefault, obj3);
      cResult[6] = stateFromStores;
      cResult[7] = tmp4.guildIcon;
      cResult[8] = tmp14;
      tmp11 = tmp14;
    }
    const tmpResult2 = guildActivity(7714);
    const topUserOrGuildDescription = tmpResult2.getTopUserOrGuildDescription(guildActivity.messages_sent, guildActivity.call_count);
    cResult[3] = guildActivity.call_count;
    cResult[4] = guildActivity.messages_sent;
    cResult[5] = topUserOrGuildDescription;
    tmp9 = topUserOrGuildDescription;
  }
}) : (function GuildRow(guildActivity) {
  let obj3;
  guildActivity = guildActivity.guildActivity;
  const items = [FamilyCenterStore];
  const tmp = closure_6();
  const obj = guildActivity(504);
  const stateFromStores = obj.useStateFromStores(items, () => FamilyCenterStore.getGuild(guildActivity.guild_id));
  if (null == stateFromStores) {
    return null;
  } else {
    const tmp2Result = guildActivity(7714);
    const topUserOrGuildDescription = tmp2Result.getTopUserOrGuildDescription(guildActivity.messages_sent, guildActivity.call_count);
    const obj2 = { label: stateFromStores.name, subLabel: topUserOrGuildDescription, icon: closure_4(GuildIconDefault, obj3) };
    const TableRow = tmp2(6184).TableRow;
    obj3 = { guild: stateFromStores, style: tmp.guildIcon };
    return closure_4(TableRow, obj2);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterTopGuildsBottomSheet(topGuildActivities) {
  let first;
  let items;
  let tmp11;
  let tmp14;
  let tmp8;
  let obj = react;
  const cResult = obj.c(11);
  topGuildActivities = topGuildActivities.topGuildActivities;
  const tmp4 = closure_6();
  const header = tmp4.header;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(_modDef2565.Lq9Set);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.header) {
    const obj2 = { variant: "text-md/bold", style: header, children: first };
    const tmp10 = React3(Text_Text.Text, obj2);
    cResult[1] = tmp4.header;
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== topGuildActivities) {
    let tmp12;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function h(guildActivity) {
        const obj = { guildActivity };
        return closure_1_4(closure_1_7, obj, guildActivity.guild_id);
      };
      cResult[5] = fn;
      tmp12 = fn;
    } else {
      tmp12 = cResult[5];
    }
    const mapped = topGuildActivities.map(tmp12);
    cResult[3] = topGuildActivities;
    cResult[4] = mapped;
    tmp11 = mapped;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[6] !== tmp11) {
    const obj3 = { hasIcons: true, children: tmp11 };
    const tmp16 = React3(TableRowGroup2.TableRowGroup, obj3);
    cResult[6] = tmp11;
    cResult[7] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[7];
  }
  if (cResult[8] === tmp8) {
    let tmp17;
    if (cResult[9] === tmp14) {
      tmp17 = cResult[10];
    }
    return tmp17;
  }
  const obj4 = { children: items };
  items = [tmp8, tmp14];
  const tmp18 = hasOwnProperty(ActionSheet2.ActionSheet, obj4);
  cResult[8] = tmp8;
  cResult[9] = tmp14;
  cResult[10] = tmp18;
  tmp17 = tmp18;
}) : (function FamilyCenterTopGuildsBottomSheet(topGuildActivities) {
  let intl;
  let items;
  topGuildActivities = topGuildActivities.topGuildActivities;
  let obj = { children: items };
  const tmp = closure_6();
  const ActionSheet = ActionSheet2.ActionSheet;
  const obj2 = { variant: "text-md/bold", style: tmp.header, children: intl.string(_modDef2565.Lq9Set) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items = [React3(Text, obj2), ];
  const obj3 = {
    hasIcons: true,
    children: topGuildActivities.map((guildActivity) => {
      const obj = { guildActivity };
      return closure_1_4(closure_1_7, obj, guildActivity.guild_id);
    })
  };
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  items[1] = React3(TableRowGroup, obj3);
  return hasOwnProperty(ActionSheet, obj);
});
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopServersBottomSheet.tsx");

export default tmp3;
