// Module ID: 16647
// Function ID: 16648
// Name: ChannelSettingsPermissionsOverview
// Dependencies: [32, 5, 19, 17, 2103, 2045, 2102, 2067, 4479, 1372, 1074, 21, 4836, 576, 5203, 1115, 4989, 4474, 11105, 9018, 8085, 12, 5999, 5917, 14506, 1485, 12269, 9733, 14859, 504, 1979, 10404, 16648, 5893, 7288, 4849, 2]
// Exports: default

// Module 16647 (ChannelSettingsPermissionsOverview)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import Server from "Server" /* 1979 */;
import GuildRoleRecord from "GuildRoleRecord" /* 2103 */;
import PermissionUtilsAll from "PermissionUtils" /* 4474 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4849 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5893 */;
import TableRow3 from "TableRow" /* 5917 */;
import RoleLabel from "RoleLabel" /* 9733 */;
import DetailedGuildIdentityUserRowDefault from "DetailedGuildIdentityUserRow" /* 10404 */;
import CircleMinusIcon2 from "CircleMinusIcon" /* 14859 */;
import useGetOrFetchChannelOverwriteUsersDefault from "useGetOrFetchChannelOverwriteUsers" /* 16648 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import GuildStore from "GuildStore" /* 2067 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c3, navigation;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let obj2;
let obj3;
function ChannelPermissionSyncModule(channel) {
  let TableRow;
  let TableRowGroup;
  let formatToPlainStringResult;
  let intl2;
  let obj5;
  let obj6;
  channel = channel.channel;
  const category = channel.category;
  const locked = channel.locked;
  const items = [channel, category];
  let tmp = closure_18();
  const tmp3 = channel;
  const tmp4 = dependencyMap;
  const callback = react.useCallback(() => {
    let format;
    let intl;
    let intl3;
    let intl4;
    let obj2;
    let obj3;
    let obj4;
    let prop;
    const tmp = category(dependencyMap[14]);
    let obj = {
      title: intl.string(channel(dependencyMap[15]).t.YWMtRe),
      body: format(prop, obj2),
      confirmText: intl3.string(channel(dependencyMap[15]).t.eW8Gy4),
      cancelText: intl4.string(channel(dependencyMap[15]).t.s4uM3b),
      onConfirm: function() {
        return closure_0(...arguments);
      }
    };
    const show = tmp.show;
    intl = channel(dependencyMap[15]).intl;
    const intl2 = channel(dependencyMap[15]).intl;
    format = intl2.format;
    obj2 = { channelName: obj3.computeChannelName(closure_0, UserStore, RelationshipStore, true), categoryName: obj4.computeChannelName(category, UserStore, RelationshipStore) };
    prop = channel(dependencyMap[15]).t["iKW+jY"];
    obj3 = channel(dependencyMap[16]);
    obj4 = channel(dependencyMap[16]);
    intl3 = channel(dependencyMap[15]).intl;
    intl4 = channel(dependencyMap[15]).intl;
    closure_0 = _asyncToGenerator(async (arg0, value) => {
      let obj2;
      let obj8;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let syncedPermissionOverwrites;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let guild_id = tmp4;
              guild_id = guild_id.guild_id;
              const getSyncedPermissionOverwrites = PermissionUtilsAll.getSyncedPermissionOverwrites;
              const obj7 = tmp(dependencyMap[18]);
              syncedPermissionOverwrites = getSyncedPermissionOverwrites(guild_id, obj7.getAppChannelBotUserId(tmp));
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj8.checkChattableChannelThresholdMetAfterChannelPermissionDeny(tmp, syncedPermissionOverwrites[guild_id].deny, syncedPermissionOverwrites[guild_id].allow), done: false };
              obj8 = tmp(dependencyMap[19]);
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            if (value) {
              const obj = { permissionOverwrites: obj2.values(syncedPermissionOverwrites) };
              const saveChannel = tmp(dependencyMap[20]).saveChannel;
              const id = tmp.id;
              const tmp9 = tmp(dependencyMap[20]);
              obj2 = category(dependencyMap[21]);
              saveChannel(id, obj);
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp15) {
          c3 = 3;
          throw tmp15;
        }
      }
    });
    show(obj);
  }, items);
  let obj = channel(4989);
  const channelName = obj.computeChannelName(category, UserStore, RelationshipStore);
  let obj2 = { style: tmp.tableRowGroupContainer, children: tmp6(TableRowGroup, obj5) };
  TableRowGroup = channel(5999).TableRowGroup;
  let intl = channel(1115).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = channel(1115).t;
  const tmp7 = View;
  if (locked) {
    let obj3 = { categoryName: channelName };
    formatToPlainStringResult = formatToPlainString(t.ETJqLl, obj3);
  } else {
    let obj4 = { categoryName: channelName };
    formatToPlainStringResult = formatToPlainString(t.OIhm0M, obj4);
  }
  obj5 = { title: formatToPlainStringResult, hasIcons: true, children: tmp6(TableRow, obj6) };
  obj6 = { icon: tmp6(tmp3(14506).RefreshIcon, {}), label: intl2.string(tmp3(1115).t.NVwuHq), onPress: callback };
  TableRow = tmp3(5917).TableRow;
  intl2 = tmp3(1115).intl;
  return closure_16(tmp7, obj2);
}
function CategorySync(category) {
  category = category.category;
  let tmp4 = null;
  if (null != category) {
    tmp4 = null;
    if (!tmp2) {
      const obj = { channel: tmp, category, locked: tmp3 };
      tmp4 = authStore3(ChannelPermissionSyncModule, obj);
    }
  }
  return tmp4;
}
function AddPermission(isEditing) {
  let TableRowGroup;
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj3;
  _require = undefined;
  isEditing = isEditing.isEditing;
  const tmp = closure_18();
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  if (isEditing) {
    return null;
  } else {
    const obj2 = { style: tmp.tableRowGroupContainer, children: closure_17(TableRowGroup, obj3) };
    obj3 = { title: intl.string(require("intl").t.vPHdP5), hasIcons: true, children: items };
    TableRowGroup = tmp2(5999).TableRowGroup;
    intl = tmp2(1115).intl;
    const obj4 = {
      icon: closure_16(require("PlusMediumIcon").PlusMediumIcon, {}),
      label: intl2.string(require("intl").t.fVWxvT),
      onPress() {
          const obj = { type: constants.ROLE };
          closure_0.push(constants2.NEW_PERMISSION, obj);
        }
    };
    const TableRow = tmp2(5917).TableRow;
    intl2 = tmp2(1115).intl;
    items = [closure_16(TableRow, obj4), ];
    const obj5 = {
      icon: closure_16(require("PlusMediumIcon").PlusMediumIcon, {}),
      label: intl3.string(require("intl").t.riesLt),
      onPress() {
          const obj = { type: constants.MEMBER };
          closure_0.push(constants2.NEW_PERMISSION, obj);
        }
    };
    const TableRow2 = tmp2(5917).TableRow;
    intl3 = tmp2(1115).intl;
    items[1] = closure_16(TableRow2, obj5);
    return closure_16(View, obj2);
  }
}
function RoleRow(onDelete) {
  let colorString;
  let colorStrings;
  let intl;
  let isEditing;
  let name;
  let onSelect;
  let role;
  let tmp2Result;
  let tmp7;
  ({ role, isEditing, onSelect } = onDelete);
  onDelete = onDelete.onDelete;
  ({ name, colorString, colorStrings } = role);
  const tmp = isEveryoneRole(role);
  const obj = { label: authStore3(RoleLabel.RoleLabel, { name, color: colorString, colors: colorStrings }), arrow: !isEditing, icon: tmp2Result, onPress: tmp7 };
  const TableRow = TableRow3.TableRow;
  tmp2Result = null;
  if (isEditing) {
    tmp2Result = null;
    if (!tmp) {
      const obj2 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, accessibilityLabel: intl.string(intl5.t.N86XcP) };
      const CircleMinusIcon = tmp3(14859).CircleMinusIcon;
      intl = tmp3(1115).intl;
      tmp2Result = tmp2(CircleMinusIcon, obj2);
    }
  }
  tmp7 = onSelect;
  if (isEditing) {
    tmp7 = onSelect;
    if (!tmp) {
      tmp7 = onDelete;
    }
  }
  return authStore3(TableRow, obj);
}
function RoleOverwrites(guild) {
  let TableRowGroup;
  let intl;
  let isEditing;
  let obj5;
  guild = guild.guild;
  ({ isEditing: importDefault, onSelectRow: importAll, onDeleteRow: dependencyMap } = guild);
  const channel = guild.channel;
  const tmp = closure_18();
  let obj = guild(504);
  const items = [GuildRoleStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleStore.getSortedRoles(guild.id));
  const obj2 = {};
  const merged = Object.assign(channel.permissionOverwrites);
  if (null == obj2[guild.id]) {
    const id = guild.id;
    const obj3 = PermissionUtilsAll;
    obj2[id] = obj3.makeEveryoneOverwrite(guild.id);
  }
  const found = stateFromStores.filter((item) => {
    let type;
    if (obj2[item.id] != null) {
      type = tmp.type;
    }
    return type === Server.PermissionOverwriteType.ROLE;
  });
  const obj4 = { style: tmp.tableRowGroupContainer, children: closure_16(TableRowGroup, obj5) };
  obj5 = {
    title: intl.string(guild(1115).t["LPJmL/"]),
    hasIcons: true,
    children: found.map((role) => {
      const obj = {
        role,
        isEditing,
        onSelect() {
          return importAll(role.id);
        },
        onDelete() {
          return dependencyMap(role.id);
        }
      };
      return closure_1_16(RoleRow, obj, role.id);
    })
  };
  TableRowGroup = tmp2(5999).TableRowGroup;
  intl = tmp2(1115).intl;
  return closure_16(View, obj4);
}
function MemberRow(arg0) {
  let guildId;
  let intl;
  let isEditing;
  let onDelete;
  let onSelect;
  let tmpResult;
  let user;
  ({ isEditing, onSelect } = arg0);
  ({ guildId, user, onDelete } = arg0);
  const obj = { userId: user.id, guildId, onPress: onSelect, arrow: !isEditing, leading: tmpResult };
  const tmp4 = DetailedGuildIdentityUserRowDefault;
  if (isEditing) {
    onSelect = onDelete;
  }
  tmpResult = null;
  if (isEditing) {
    const obj2 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, accessibilityLabel: intl.string(intl5.t.N86XcP) };
    const CircleMinusIcon = CircleMinusIcon2.CircleMinusIcon;
    intl = intl5.intl;
    tmpResult = tmp(CircleMinusIcon, obj2);
  }
  return authStore3(tmp4, obj);
}
function MemberOverwrites(channel) {
  let TableRowGroup;
  let intl;
  let isEditing;
  let obj3;
  channel = channel.channel;
  const guild_id = channel.guild_id;
  ({ isEditing: importDefault, onSelectRow: importAll, onDeleteRow: dependencyMap } = channel);
  const permissionOverwrites = channel.permissionOverwrites;
  const tmp = closure_18();
  const tmp3 = useGetOrFetchChannelOverwriteUsersDefault(guild_id, permissionOverwrites);
  let obj = _modDef12(tmp3);
  const iter = obj.sortBy((username) => {
    const str = username.username;
    return str.toLowerCase();
  });
  const valueResult = iter.value();
  let tmp4 = null;
  if (valueResult.length > 0) {
    const obj2 = { style: tmp.tableRowGroupContainer, children: closure_16(TableRowGroup, obj3) };
    obj3 = {
      title: intl.string(guild_id(1115).t["9Oq93m"]),
      hasIcons: true,
      children: valueResult.map((user) => {
          guildId = user;
          const obj = {
            guildId,
            user,
            isEditing,
            onSelect() {
              return importAll(user.id);
            },
            onDelete() {
              return dependencyMap(user.id);
            }
          };
          return closure_1_16(MemberRow, obj, user.id);
        })
    };
    TableRowGroup = guild_id(5999).TableRowGroup;
    intl = guild_id(1115).intl;
    tmp4 = closure_16(View, obj2);
  }
  return tmp4;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const isEveryoneRole = GuildRoleRecord.isEveryoneRole;
({ PermissionOverrideType: closure_14, ChannelSettingsSections: closure_15 } = Constants);
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let createStyles = createStyles_mod;
let obj = { tableRowGroupContainer: obj2, tableContainer: obj3 };
obj2 = { marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: nativeDefault.space.PX_12 };
let closure_18 = createStyles(obj);
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsOverview.tsx");

export default function ChannelSettingsPermissionsOverview(channelId) {
  let closure_4;
  let closure_6;
  let isEditing;
  let items6;
  channelId = channelId.channelId;
  let stateFromStores2;
  isEditing = undefined;
  react = undefined;
  let callback;
  function handleClearPermissionOverwrite(arg0) {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let username;
    let closure_0 = arg0;
    let tmp;
    if (closure_4 != null) {
      tmp = closure_4[arg0];
    }
    user = user.getUser(arg0);
    if (null != tmp) {
      username = tmp.name;
    } else if (user != null) {
      username = user.username;
    }
    let obj = {
      title: intl.formatToPlainString(channelId(stateFromStores2[15]).t.txPV7k, { name: username }),
      body: intl2.format(channelId(stateFromStores2[15]).t.xERCnZ, { name: username }),
      cancelText: intl3.string(channelId(stateFromStores2[15]).t.gm1Vej),
      confirmText: intl4.string(channelId(stateFromStores2[15]).t.p89ACt),
      onConfirm() {
        const obj = ChannelActionCreatorsDefault;
        const result = obj.clearPermissionOverwrite(channelId, closure_0);
      }
    };
    const show = navigation(stateFromStores2[14]).show;
    navigation(stateFromStores2[14]);
    intl = channelId(stateFromStores2[15]).intl;
    intl2 = channelId(stateFromStores2[15]).intl;
    intl3 = channelId(stateFromStores2[15]).intl;
    intl4 = channelId(stateFromStores2[15]).intl;
    show(obj);
  }
  let tmp = closure_18();
  let obj = channelId(stateFromStores2[25]);
  navigation = obj.useNavigation();
  const items = [ChannelStore];
  const items1 = [channelId];
  const obj2 = channelId(stateFromStores2[29]);
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const obj3 = channelId(stateFromStores2[18]);
  const appChannelBotUserId = obj3.useAppChannelBotUserId(stateFromStores);
  const items2 = [ChannelStore];
  const obj4 = channelId(stateFromStores2[29]);
  const stateFromStores1 = obj4.useStateFromStores(items2, () => {
    let parent_id;
    const getChannel = ChannelStore.getChannel;
    if (stateFromStores != null) {
      parent_id = stateFromStores.parent_id;
    }
    return getChannel(parent_id);
  });
  const items3 = [GuildStore];
  const obj5 = channelId(stateFromStores2[29]);
  const tmp2 = stateFromStores2;
  stateFromStores2 = obj5.useStateFromStores(items3, () => {
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return getGuild(guild_id);
  });
  const items4 = [GuildRoleStore];
  const obj6 = channelId(stateFromStores2[29]);
  _slicedToArray = obj6.useStateFromStores(items4, () => {
    let rolesSnapshot;
    if (null != stateFromStores2) {
      rolesSnapshot = GuildRoleStore.getRolesSnapshot(tmp.id);
    }
    return rolesSnapshot;
  });
  let areChannelsLockedResult = null != stateFromStores;
  if (areChannelsLockedResult) {
    const obj7 = stateFromStores(tmp2[17]);
    areChannelsLockedResult = obj7.areChannelsLocked(stateFromStores, stateFromStores1, appChannelBotUserId);
  }
  [isEditing, react] = react.useState(false);
  callback = react.useCallback(() => {
    closure_6((arg0) => !arg0);
    const obj = DeprecatedLayoutAnimation;
    const result = obj.DeprecatedLayoutAnimation();
  }, []);
  const items5 = [navigation, isEditing, callback];
  const layoutEffect = react.useLayoutEffect(() => {
    let onPress;
    let obj = {
      headerRight(arg0) {
        let stringResult;
        const obj = { onPress, label: stringResult };
        const HeaderTextButton = channelId(stateFromStores2[34]).HeaderTextButton;
        const merged = Object.assign(arg0);
        const intl = channelId(stateFromStores2[15]).intl;
        const string = intl.string;
        const t = channelId(stateFromStores2[15]).t;
        const tmp = closure_2_16;
        if (isEditing) {
          stringResult = string(t.i4jeWR);
        } else {
          stringResult = string(t.bt75uw);
        }
        return tmp(HeaderTextButton, obj);
      }
    };
    navigation.setOptions(obj);
  }, items5);
  let tmp14 = null;
  if (null != stateFromStores) {
    tmp14 = null;
    if (null != stateFromStores2) {
      const obj8 = { style: tmp.tableContainer, children: items6 };
      const obj9 = { channel: stateFromStores, category: stateFromStores1, isEditing, locked: areChannelsLockedResult };
      items6 = [closure_16(CategorySync, obj9), , , ];
      const obj10 = { isEditing };
      items6[1] = closure_16(AddPermission, obj10);
      const obj11 = {
        guild: stateFromStores2,
        channel: stateFromStores,
        isEditing,
        onSelectRow(id) {
              const obj = { type: constants.ROLE, id };
              const tmp = first;
              if (!tmp) {
                navigation.push(constants2.PERMISSION_OVERRIDES, obj);
              }
            },
        onDeleteRow(arg0) {
              handleClearPermissionOverwrite(arg0);
            }
      };
      items6[2] = closure_16(RoleOverwrites, obj11);
      const obj12 = {
        channel: stateFromStores,
        isEditing,
        onSelectRow(id) {
              const obj = { type: constants.MEMBER, id };
              const tmp = first;
              if (!tmp) {
                navigation.push(constants2.PERMISSION_OVERRIDES, obj);
              }
            },
        onDeleteRow(arg0) {
              handleClearPermissionOverwrite(arg0);
            }
      };
      items6[3] = closure_16(MemberOverwrites, obj12);
      tmp14 = closure_17(callback, obj8);
    }
  }
  return tmp14;
};
