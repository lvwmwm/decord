// Module ID: 17621
// Function ID: 17622
// Name: GuildSettingsModalGuildSpace
// Dependencies: [19, 4472, 9026, 1086, 21, 4837, 588, 558, 576, 504, 1391, 9025, 1127, 2422, 6621, 5997, 5280, 8057, 6461, 2]

// Module 17621 (GuildSettingsModalGuildSpace)
import nativeDefault from "native" /* 588 */;
import FlagUtils from "FlagUtils" /* 1391 */;
import _modDef2422 from "module_2422" /* 2422 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9025 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4472 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9026 */;
import Constants from "Constants" /* 1086 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let contentContainerStyle;

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
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((contentContainerStyle) => {
  let guild;
  let stateFromStores;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp5;
  let tmp6;
  let tmp7;
  const tmp = stateFromStores;
  let obj = stateFromStores(576);
  const cResult = obj.c(43);
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildSettingsStore];
    class S {
      constructor() {
        return guild.getGuild();
      }
    }
    const items1 = [];
    cResult[0] = items;
    cResult[1] = S;
    cResult[2] = items1;
    tmp5 = items;
    tmp6 = S;
    tmp7 = items1;
  } else {
    [tmp5, tmp6, tmp7] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore];
    class S {
      constructor() {
        return guild.getGuild();
      }
    }
    cResult[3] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    const fn = function b() {
      return PermissionStore.can(metroRequire.MANAGE_GUILD, stateFromStores);
    };
    const items3 = [stateFromStores];
    class S {
      constructor() {
        return guild.getGuild();
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = fn;
    cResult[6] = items3;
    tmp13 = items3;
    tmp12 = fn;
  } else {
    tmp12 = cResult[5];
    tmp13 = cResult[6];
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp10, tmp12, tmp13);
  if (cResult[7] !== stateFromStores) {
    class E {
      constructor(arg0) {
        if (null != stateFromStores) {
          const obj = FlagUtils;
          const obj3 = { systemChannelFlags: obj.setFlag(tmp.systemChannelFlags, metroImportDefault.SUPPRESS_GUILD_SPACE_WHITEBOARD_NOTIFICATIONS, !arg0) };
          const obj2 = GuildSettingsActionCreatorsDefault;
          obj2.updateGuild(obj3);
        }
      }
    }
    cResult[7] = stateFromStores;
    class S {
      constructor() {
        return guild.getGuild();
      }
    }
    cResult[8] = E;
  } else {
    class E {
      constructor(arg0) {
        if (null != stateFromStores) {
          const obj = FlagUtils;
          const obj3 = { systemChannelFlags: obj.setFlag(tmp.systemChannelFlags, metroImportDefault.SUPPRESS_GUILD_SPACE_WHITEBOARD_NOTIFICATIONS, !arg0) };
          const obj2 = GuildSettingsActionCreatorsDefault;
          obj2.updateGuild(obj3);
        }
      }
    }
  }
  if (cResult[9] !== stateFromStores) {
    class G {
      constructor(arg0) {
        if (null != stateFromStores) {
          const obj = FlagUtils;
          const obj3 = { systemChannelFlags: obj.setFlag(tmp.systemChannelFlags, metroImportDefault.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS, !arg0) };
          const obj2 = GuildSettingsActionCreatorsDefault;
          obj2.updateGuild(obj3);
        }
      }
    }
    cResult[9] = stateFromStores;
    class S {
      constructor() {
        return guild.getGuild();
      }
    }
    cResult[10] = G;
  } else {
    class G {
      constructor(arg0) {
        if (null != stateFromStores) {
          const obj = FlagUtils;
          const obj3 = { systemChannelFlags: obj.setFlag(tmp.systemChannelFlags, metroImportDefault.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS, !arg0) };
          const obj2 = GuildSettingsActionCreatorsDefault;
          obj2.updateGuild(obj3);
        }
      }
    }
  }
  if (null == stateFromStores) {
    class G {
      constructor(arg0) {
        if (null != stateFromStores) {
          const obj = FlagUtils;
          const obj3 = { systemChannelFlags: obj.setFlag(tmp.systemChannelFlags, metroImportDefault.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS, !arg0) };
          const obj2 = GuildSettingsActionCreatorsDefault;
          obj2.updateGuild(obj3);
        }
      }
    }
  } else {
    class G {
      constructor(arg0) {
        if (null != stateFromStores) {
          const obj = FlagUtils;
          const obj3 = { systemChannelFlags: obj.setFlag(tmp.systemChannelFlags, metroImportDefault.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS, !arg0) };
          const obj2 = GuildSettingsActionCreatorsDefault;
          obj2.updateGuild(obj3);
        }
      }
    }
    const items4 = [tmp4.content, ];
    class S {
      constructor() {
        return guild.getGuild();
      }
    }
    cResult[11] = contentContainerStyle;
    cResult[12] = tmp4.content;
    cResult[13] = items4;
  }
}) : ((contentContainerStyle) => {
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
    const Form = tmp2(8057).Form;
    obj5 = { style: tmp.stackPadding, spacing: nativeDefault.space.PX_24, children: closure_9(TableRowGroup, obj6) };
    Stack = tmp2(5280).Stack;
    obj6 = { title: intl.string(stateFromStores(1127).t.OBskVU), hasIcons: false, children: items5 };
    TableRowGroup = tmp2(5997).TableRowGroup;
    intl = tmp2(1127).intl;
    const obj7 = { label: intl2.string(_modDef2422.btBTIw), subLabel: intl3.string(_modDef2422.n3aRYQ), disabled: !stateFromStores1, value: !tmp2Result.hasFlag(stateFromStores.systemChannelFlags, constants2.SUPPRESS_GAMING_LEADERBOARD_NOTIFICATIONS), onValueChange: tmp7 };
    const TableSwitchRow = tmp2(6621).TableSwitchRow;
    intl2 = tmp2(1127).intl;
    intl3 = tmp2(1127).intl;
    tmp2Result = stateFromStores(1391);
    items5 = [closure_8(TableSwitchRow, obj7), ];
    const obj8 = { label: intl4.string(stateFromStores(1127).t.YZqqTX), disabled: !stateFromStores1, value: !tmp2Result2.hasFlag(stateFromStores.systemChannelFlags, constants2.SUPPRESS_GUILD_SPACE_WHITEBOARD_NOTIFICATIONS), onValueChange: callback };
    const TableSwitchRow2 = tmp2(6621).TableSwitchRow;
    intl4 = tmp2(1127).intl;
    tmp2Result2 = stateFromStores(1391);
    items5[1] = closure_8(TableSwitchRow2, obj8);
    items6 = [closure_8(Form, obj4), closure_8(tmp2(6461).NavScrim, {})];
    tmp8 = closure_9(closure_10, obj3);
  }
  return tmp8;
});
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalGuildSpace.tsx");

export default tmp5;
