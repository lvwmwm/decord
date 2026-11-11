// Module ID: 20635
// Function ID: 20636
// Name: GuildSettingsModalGuildSpace
// Dependencies: [19, 5175, 8339, 1072, 21, 5243, 575, 1403, 8338, 20291, 7888, 504, 8041, 6274, 7680, 1113, 2587, 5849, 2]
// Exports: default

// Module 20635 (GuildSettingsModalGuildSpace)
import nativeDefault from "native" /* 575 */;
import FlagUtils from "FlagUtils" /* 1403 */;
import _modDef2587 from "module_2587" /* 2587 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 8338 */;
import ServerHubAnalytics from "ServerHubAnalytics" /* 20291 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 5175 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8339 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function GuildSpaceSystemMessageSwitch(guild) {
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
  const TableSwitchRow = guild(settingType[10]).TableSwitchRow;
  obj2 = guild(settingType[7]);
  return closure_8(TableSwitchRow, obj);
}
({ Permissions: metroRequire, SystemChannelFlags: metroImportDefault } = Constants);
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, content: obj2, stackPadding: obj3 };
obj2 = { paddingTop: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_11 = createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalGuildSpace.tsx");

export default function GuildSettingsModalGuildSpace(contentContainerStyle) {
  let Stack;
  let TableRowGroup;
  let guild;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
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
    const Form = tmp2(8041).Form;
    obj5 = { style: tmp.stackPadding, spacing: nativeDefault.space.PX_24, children: closure_9(TableRowGroup, obj6) };
    Stack = tmp2(6274).Stack;
    obj6 = { title: intl.string(stateFromStores(1113).t["0JLdD3"]), description: intl2.string(stateFromStores(1113).t.Xa1KEN), hasIcons: false, children: items4 };
    TableRowGroup = tmp2(7680).TableRowGroup;
    intl = tmp2(1113).intl;
    intl2 = tmp2(1113).intl;
    const obj7 = { guild: stateFromStores, flag: constants2.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS, settingType: stateFromStores(20291).ServerHubSettingType.LEADERBOARD_SYSTEM_MESSAGES, label: intl3.string(_modDef2587.btBTIw), subLabel: intl4.string(stateFromStores(1113).t.n3aRYQ), disabled: !stateFromStores1 };
    intl3 = tmp2(1113).intl;
    intl4 = tmp2(1113).intl;
    items4 = [closure_8(GuildSpaceSystemMessageSwitch, obj7), , ];
    const obj8 = { guild: stateFromStores, flag: constants2.SUPPRESS_GUILD_SPACE_WHITEBOARD_NOTIFICATIONS, settingType: stateFromStores(20291).ServerHubSettingType.WHITEBOARD_SYSTEM_MESSAGES, label: intl5.string(stateFromStores(1113).t["9tlK5J"]), disabled: !stateFromStores1 };
    intl5 = tmp2(1113).intl;
    items4[1] = closure_8(GuildSpaceSystemMessageSwitch, obj8);
    const obj9 = { guild: stateFromStores, flag: constants2.SUPPRESS_GUILD_SPACE_MUSIC_NOTIFICATIONS, settingType: stateFromStores(20291).ServerHubSettingType.MUSIC_SYSTEM_MESSAGES, label: intl6.string(_modDef2587["5xxUI2"]), subLabel: intl7.string(_modDef2587.FMGoDB), disabled: !stateFromStores1 };
    intl6 = tmp2(1113).intl;
    intl7 = tmp2(1113).intl;
    items4[2] = closure_8(GuildSpaceSystemMessageSwitch, obj9);
    items5 = [closure_8(Form, obj4), closure_8(stateFromStores(5849).NavScrim, {})];
    tmp6 = closure_9(closure_10, obj3);
  }
  return tmp6;
};
