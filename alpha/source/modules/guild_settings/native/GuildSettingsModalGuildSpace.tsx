// Module ID: 18319
// Function ID: 18320
// Name: GuildSettingsModalGuildSpace
// Dependencies: [19, 4707, 8614, 1085, 21, 5090, 587, 558, 576, 1402, 8613, 18002, 6882, 504, 1126, 2469, 6267, 5373, 8555, 6719, 2]

// Module 18319 (GuildSettingsModalGuildSpace)
import nativeDefault from "native" /* 587 */;
import FlagUtils from "FlagUtils" /* 1402 */;
import _modDef2469 from "module_2469" /* 2469 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8613 */;
import ServerHubAnalytics from "ServerHubAnalytics" /* 18002 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8614 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ Permissions: metroRequire, SystemChannelFlags: metroImportDefault } = Constants);
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, content: obj2, stackPadding: obj3 };
obj2 = { paddingTop: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSpaceSystemMessageSwitch(guild) {
  let disabled;
  let label;
  let settingType;
  let subLabel;
  let obj = guild(settingType[8]);
  const cResult = obj.c(14);
  guild = guild.guild;
  const flag = guild.flag;
  settingType = guild.settingType;
  ({ label, subLabel, disabled } = guild);
  if (cResult[0] === flag) {
    if (cResult[1] === guild.id) {
      if (cResult[2] === guild.systemChannelFlags) {
        let tmp4;
        if (cResult[3] === settingType) {
          tmp4 = cResult[4];
        }
        if (cResult[5] === flag) {
          let tmp5;
          if (cResult[6] === guild.systemChannelFlags) {
            tmp5 = cResult[7];
          }
          if (cResult[8] === disabled) {
            if (cResult[9] === tmp4) {
              if (cResult[10] === label) {
                if (cResult[11] === subLabel) {
                  let tmp8;
                  if (cResult[12] === !tmp5) {
                    tmp8 = cResult[13];
                  }
                  return tmp8;
                }
              }
            }
          }
          let obj2 = { label, subLabel, disabled, value: !tmp5, onValueChange: tmp4 };
          const tmp10 = closure_8(guild(settingType[12]).TableSwitchRow, obj2);
          cResult[8] = disabled;
          cResult[9] = tmp4;
          cResult[10] = label;
          cResult[11] = subLabel;
          cResult[12] = !tmp5;
          cResult[13] = tmp10;
          tmp8 = tmp10;
        }
        const tmpResult = guild(settingType[9]);
        const hasFlagResult = tmpResult.hasFlag(guild.systemChannelFlags, flag);
        cResult[5] = flag;
        cResult[6] = guild.systemChannelFlags;
        cResult[7] = hasFlagResult;
        tmp5 = hasFlagResult;
      }
    }
  }
  const fn = function n(value) {
    const obj = FlagUtils;
    const setFlagResult = obj.setFlag(guild.systemChannelFlags, flag, !value);
    const obj2 = GuildSettingsActionCreatorsDefault;
    obj2.updateGuild({ systemChannelFlags: setFlagResult });
    const obj3 = ServerHubAnalytics;
    const result = obj3.trackServerHubToggleSetting(guild.id, settingType, value);
  };
  cResult[0] = flag;
  cResult[1] = guild.id;
  cResult[2] = guild.systemChannelFlags;
  cResult[3] = settingType;
  cResult[4] = fn;
  tmp4 = fn;
}) : (function GuildSpaceSystemMessageSwitch(guild) {
  let disabled;
  let label;
  let obj2;
  let subLabel;
  guild = guild.guild;
  const flag = guild.flag;
  const settingType = guild.settingType;
  const items = [guild, flag, settingType];
  ({ label, subLabel, disabled } = guild);
  const callback = react.useCallback((value) => {
    const obj = FlagUtils;
    const setFlagResult = obj.setFlag(guild.systemChannelFlags, flag, !value);
    const obj2 = GuildSettingsActionCreatorsDefault;
    obj2.updateGuild({ systemChannelFlags: setFlagResult });
    const obj3 = ServerHubAnalytics;
    const result = obj3.trackServerHubToggleSetting(guild.id, settingType, value);
  }, items);
  let obj = { label, subLabel, disabled, value: !obj2.hasFlag(guild.systemChannelFlags, flag), onValueChange: callback };
  const TableSwitchRow = guild(settingType[12]).TableSwitchRow;
  obj2 = guild(settingType[9]);
  return closure_8(TableSwitchRow, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsModalGuildSpace(contentContainerStyle) {
  let guild;
  let stateFromStores;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp5;
  let tmp6;
  let tmp7;
  const obj = stateFromStores(576);
  const cResult = obj.c(34);
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildSettingsStore];
    const fn = function o() {
      return guild.getGuild();
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp5 = items;
    tmp6 = fn;
    tmp7 = items1;
  } else {
    [tmp5, tmp6, tmp7] = cResult;
  }
  const tmpResult = stateFromStores(504);
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore];
    cResult[3] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    class I {
      constructor() {
        return PermissionStore.can(metroRequire.MANAGE_GUILD, stateFromStores);
      }
    }
    const items3 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = I;
    cResult[6] = items3;
    tmp13 = items3;
    tmp12 = I;
  } else {
    class I {
      constructor() {
        return PermissionStore.can(metroRequire.MANAGE_GUILD, stateFromStores);
      }
    }
    tmp13 = cResult[6];
  }
  const tmpResult2 = stateFromStores(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp10, tmp12, tmp13);
  if (null == stateFromStores) {
    class I {
      constructor() {
        return PermissionStore.can(metroRequire.MANAGE_GUILD, stateFromStores);
      }
    }
  } else {
    class I {
      constructor() {
        return PermissionStore.can(metroRequire.MANAGE_GUILD, stateFromStores);
      }
    }
    const items4 = [tmp4.content, contentContainerStyle];
    cResult[7] = contentContainerStyle;
    cResult[8] = tmp4.content;
    cResult[9] = items4;
  }
}) : (function GuildSettingsModalGuildSpace(contentContainerStyle) {
  let Stack;
  let TableRowGroup;
  let guild;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items3;
  let items4;
  let items5;
  let obj5;
  let obj6;
  let stateFromStores;
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  const tmp = closure_11();
  const items = [GuildSettingsStore];
  const obj = stateFromStores(504);
  stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(), []);
  const items1 = [PermissionStore];
  const items2 = [stateFromStores];
  const obj2 = stateFromStores(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => PermissionStore.can(metroRequire.MANAGE_GUILD, stateFromStores), items2);
  let tmp6 = null;
  if (null != stateFromStores) {
    const obj3 = { children: items5 };
    const obj4 = { style: tmp.container, contentContainerStyle: items3, children: closure_8(Stack, obj5) };
    items3 = [tmp.content, contentContainerStyle];
    const Form = tmp2(8555).Form;
    obj5 = { style: tmp.stackPadding, spacing: nativeDefault.space.PX_24, children: closure_9(TableRowGroup, obj6) };
    Stack = tmp2(5373).Stack;
    obj6 = { title: intl.string(stateFromStores(1126).t["0JLdD3"]), description: intl2.string(stateFromStores(1126).t.Xa1KEN), hasIcons: false, children: items4 };
    TableRowGroup = tmp2(6267).TableRowGroup;
    intl = tmp2(1126).intl;
    intl2 = tmp2(1126).intl;
    const obj7 = { guild: stateFromStores, flag: constants2.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS, settingType: stateFromStores(18002).ServerHubSettingType.LEADERBOARD_SYSTEM_MESSAGES, label: intl3.string(_modDef2469.btBTIw), subLabel: intl4.string(stateFromStores(1126).t.n3aRYQ), disabled: !stateFromStores1 };
    intl3 = tmp2(1126).intl;
    intl4 = tmp2(1126).intl;
    items4 = [closure_8(closure_12, obj7), ];
    const obj8 = { guild: stateFromStores, flag: constants2.SUPPRESS_GUILD_SPACE_WHITEBOARD_NOTIFICATIONS, settingType: stateFromStores(18002).ServerHubSettingType.WHITEBOARD_SYSTEM_MESSAGES, label: intl5.string(stateFromStores(1126).t["9tlK5J"]), disabled: !stateFromStores1 };
    intl5 = tmp2(1126).intl;
    items4[1] = closure_8(closure_12, obj8);
    items5 = [closure_8(Form, obj4), closure_8(stateFromStores(6719).NavScrim, {})];
    tmp6 = closure_9(closure_10, obj3);
  }
  return tmp6;
});
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalGuildSpace.tsx");

export default tmp5;
