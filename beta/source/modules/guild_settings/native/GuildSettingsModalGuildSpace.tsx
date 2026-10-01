// Module ID: 17619
// Function ID: 17620
// Name: GuildSettingsModalGuildSpace
// Dependencies: [19, 4469, 9049, 1074, 21, 4836, 576, 504, 1385, 9048, 8053, 5279, 5999, 1115, 6621, 2419, 6461, 2]
// Exports: default

// Module 17619 (GuildSettingsModalGuildSpace)
import nativeDefault from "native" /* 576 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import _modDef2419 from "module_2419" /* 2419 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9049 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalGuildSpace.tsx");

export default function GuildSettingsModalGuildSpace(contentContainerStyle) {
  let Stack;
  let TableRowGroup;
  let guild;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items4;
  let items5;
  let items6;
  let obj5;
  let obj6;
  let tmp2Result;
  let tmp2Result2;
  let stateFromStores;
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  const tmp = closure_11();
  let obj = stateFromStores(504);
  const items = [GuildSettingsStore];
  stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(), []);
  let obj2 = stateFromStores(504);
  const items1 = [PermissionStore];
  const items2 = [stateFromStores];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => PermissionStore.can(metroRequire.MANAGE_GUILD, stateFromStores), items2);
  const items3 = [stateFromStores];
  [][0] = stateFromStores;
  const callback = react.useCallback((arg0) => {
    if (null != stateFromStores) {
      const obj = FlagUtils;
      const obj3 = { systemChannelFlags: obj.setFlag(tmp.systemChannelFlags, metroImportDefault.SUPPRESS_GUILD_SPACE_WHITEBOARD_NOTIFICATIONS, !arg0) };
      const obj2 = GuildSettingsActionCreatorsDefault;
      obj2.updateGuild(obj3);
    }
  }, items3);
  let tmp8 = null;
  if (null != stateFromStores) {
    let obj3 = { children: items6 };
    const obj4 = { style: tmp.container, contentContainerStyle: items4, children: closure_8(Stack, obj5) };
    items4 = [tmp.content, contentContainerStyle];
    const Form = tmp2(8053).Form;
    obj5 = { style: tmp.stackPadding, spacing: nativeDefault.space.PX_24, children: closure_9(TableRowGroup, obj6) };
    Stack = tmp2(5279).Stack;
    obj6 = { title: intl.string(stateFromStores(1115).t.OBskVU), hasIcons: false, children: items5 };
    TableRowGroup = tmp2(5999).TableRowGroup;
    intl = tmp2(1115).intl;
    const obj7 = { label: intl2.string(_modDef2419.btBTIw), subLabel: intl3.string(_modDef2419.n3aRYQ), disabled: !stateFromStores1, value: !tmp2Result.hasFlag(stateFromStores.systemChannelFlags, constants2.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS), onValueChange: tmp7 };
    const TableSwitchRow = tmp2(6621).TableSwitchRow;
    intl2 = tmp2(1115).intl;
    intl3 = tmp2(1115).intl;
    tmp2Result = stateFromStores(1385);
    items5 = [closure_8(TableSwitchRow, obj7), ];
    const obj8 = { label: intl4.string(stateFromStores(1115).t.YZqqTX), disabled: !stateFromStores1, value: !tmp2Result2.hasFlag(stateFromStores.systemChannelFlags, constants2.SUPPRESS_GUILD_SPACE_WHITEBOARD_NOTIFICATIONS), onValueChange: callback };
    const TableSwitchRow2 = tmp2(6621).TableSwitchRow;
    intl4 = tmp2(1115).intl;
    tmp2Result2 = stateFromStores(1385);
    items5[1] = closure_8(TableSwitchRow2, obj8);
    items6 = [closure_8(Form, obj4), closure_8(tmp2(6461).NavScrim, {})];
    tmp8 = closure_9(closure_10, obj3);
  }
  return tmp8;
};
