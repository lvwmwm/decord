// Module ID: 15386
// Function ID: 117332
// Name: ChannelPermissionSyncModule
// Dependencies: []
// Exports: default

// Module 15386 (ChannelPermissionSyncModule)
function ChannelPermissionSyncModule(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const category = channel.category;
  const importDefault = category;
  const items = [channel, category];
  const callback = React.useCallback(() => {
    let obj = category(closure_3[14]);
    obj = {};
    const intl = channel(closure_3[15]).intl;
    obj.title = intl.string(channel(closure_3[15]).t.YWMtRe);
    const intl2 = channel(closure_3[15]).intl;
    obj = { channelName: channel(closure_3[16]).computeChannelName(channel, closure_13, closure_12, true) };
    const obj4 = channel(closure_3[16]);
    obj.categoryName = channel(closure_3[16]).computeChannelName(category, closure_13, closure_12);
    obj.body = intl2.format(channel(closure_3[15]).t.iKW+jY, obj);
    const intl3 = channel(closure_3[15]).intl;
    obj.confirmText = intl3.string(channel(closure_3[15]).t.eW8Gy4);
    const intl4 = channel(closure_3[15]).intl;
    obj.cancelText = intl4.string(channel(closure_3[15]).t.s4uM3b);
    // CreateGeneratorClosureLongIndex (0x67)
    const channel = callback(tmp);
    obj.onConfirm = function() {
      return callback(...arguments);
    };
    obj.show(obj);
  }, items);
  let obj = arg1(dependencyMap[16]);
  const channelName = obj.computeChannelName(category, closure_13, closure_12);
  obj = { style: callback5().tableRowGroupContainer };
  obj = {};
  const intl = arg1(dependencyMap[15]).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = arg1(dependencyMap[15]).t;
  if (channel.locked) {
    const obj1 = { categoryName: channelName };
    let formatToPlainStringResult = formatToPlainString(t.ETJqLl, obj1);
  } else {
    const obj2 = { categoryName: channelName };
    formatToPlainStringResult = formatToPlainString(t.OIhm0M, obj2);
  }
  obj.title = formatToPlainStringResult;
  obj.hasIcons = true;
  const obj3 = { icon: callback3(arg1(dependencyMap[23]).RefreshIcon, {}) };
  const intl2 = arg1(dependencyMap[15]).intl;
  obj3.label = intl2.string(arg1(dependencyMap[15]).t.NVwuHq);
  obj3.onPress = callback;
  obj.children = callback3(arg1(dependencyMap[22]).TableRow, obj3);
  obj.children = callback3(arg1(dependencyMap[21]).TableRowGroup, obj);
  return callback3(View, obj);
}
function CategorySync(category) {
  category = category.category;
  let tmp4 = null;
  if (null != category) {
    tmp4 = null;
    if (!tmp2) {
      const obj = { channel: tmp, category, locked: tmp3 };
      tmp4 = callback3(ChannelPermissionSyncModule, obj);
    }
  }
  return tmp4;
}
function AddPermission(isEditing) {
  let callback;
  function handleCreatePermissionOverwrite(MEMBER) {

  }
  let obj = callback(dependencyMap[24]);
  callback = obj.useNavigation();
  if (isEditing.isEditing) {
    return null;
  } else {
    obj = { style: tmp.tableRowGroupContainer };
    obj = {};
    const intl = callback(dependencyMap[15]).intl;
    obj.title = intl.string(callback(dependencyMap[15]).t.vPHdP5);
    obj.hasIcons = true;
    const obj1 = { icon: callback3(callback(dependencyMap[25]).PlusMediumIcon, {}) };
    const intl2 = callback(dependencyMap[15]).intl;
    obj1.label = intl2.string(callback(dependencyMap[15]).t.fVWxvT);
    obj1.onPress = function onPress() {
      handleCreatePermissionOverwrite(constants.ROLE);
    };
    const items = [callback3(callback(dependencyMap[22]).TableRow, obj1), ];
    const obj2 = { icon: callback3(callback(dependencyMap[25]).PlusMediumIcon, {}) };
    const intl3 = callback(dependencyMap[15]).intl;
    obj2.label = intl3.string(callback(dependencyMap[15]).t.riesLt);
    obj2.onPress = function onPress() {
      handleCreatePermissionOverwrite(constants.MEMBER);
    };
    items[1] = callback3(callback(dependencyMap[22]).TableRow, obj2);
    obj.children = items;
    obj.children = callback4(callback(dependencyMap[21]).TableRowGroup, obj);
    return callback3(View, obj);
  }
  const tmp = callback5();
}
function RoleRow(onDelete) {
  let colorString;
  let colorStrings;
  let isEditing;
  let name;
  let onSelect;
  let role;
  ({ role, isEditing, onSelect } = onDelete);
  ({ name, colorString, colorStrings } = role);
  const tmp = isEveryoneRole(role);
  let obj = { label: callback3(arg1(dependencyMap[26]).RoleLabel, { name, color: colorString, colors: colorStrings }), arrow: !isEditing };
  let tmp3 = null;
  if (isEditing) {
    tmp3 = null;
    if (!tmp) {
      obj = { color: importDefault(dependencyMap[13]).colors.ICON_FEEDBACK_CRITICAL };
      const intl = arg1(dependencyMap[15]).intl;
      obj.accessibilityLabel = intl.string(arg1(dependencyMap[15]).t.N86XcP);
      tmp3 = callback3(arg1(dependencyMap[27]).CircleMinusIcon, obj);
    }
  }
  obj.icon = tmp3;
  onDelete = onSelect;
  if (isEditing) {
    onDelete = onSelect;
    if (!tmp) {
      onDelete = onDelete.onDelete;
    }
  }
  obj.onPress = onDelete;
  return callback3(arg1(dependencyMap[22]).TableRow, obj);
}
function RoleOverwrites(guild) {
  guild = guild.guild;
  const arg1 = guild;
  ({ isEditing: closure_1, onSelectRow: closure_2, onDeleteRow: closure_3 } = guild);
  let obj = arg1(dependencyMap[28]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => sortedRoles.getSortedRoles(guild.id));
  obj = {};
  const merged = Object.assign(guild.channel.permissionOverwrites);
  let closure_4 = obj;
  if (null == obj[guild.id]) {
    obj[guild.id] = importAll(dependencyMap[17]).makeEveryoneOverwrite(guild.id);
    const obj3 = importAll(dependencyMap[17]);
  }
  const found = stateFromStores.filter((arg0) => {
    let type;
    if (null != obj[arg0.id]) {
      type = tmp.type;
    }
    return type === guild(closure_3[29]).PermissionOverwriteType.ROLE;
  });
  obj = { style: callback5().tableRowGroupContainer };
  const obj1 = {};
  const intl = arg1(dependencyMap[15]).intl;
  obj1.title = intl.string(arg1(dependencyMap[15]).t.LPJmL/);
  obj1.hasIcons = true;
  obj1.children = found.map((id) => {
    const guild = id;
    return callback(closure_22, {
      role: id,
      isEditing: closure_1,
      onSelect() {
        return callback(arg0.id);
      },
      onDelete() {
        return callback2(arg0.id);
      }
    }, id.id);
  });
  obj.children = callback3(arg1(dependencyMap[21]).TableRowGroup, obj1);
  return callback3(View, obj);
}
function MemberRow(arg0) {
  let guildId;
  let isEditing;
  let onDelete;
  let onSelect;
  let user;
  ({ isEditing, onSelect } = arg0);
  ({ guildId, user, onDelete } = arg0);
  let obj = { userId: user.id, guildId };
  if (isEditing) {
    onSelect = onDelete;
  }
  obj.onPress = onSelect;
  obj.arrow = !isEditing;
  let tmp3 = null;
  if (isEditing) {
    obj = { color: importDefault(dependencyMap[13]).colors.ICON_FEEDBACK_CRITICAL };
    const intl = arg1(dependencyMap[15]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[15]).t.N86XcP);
    tmp3 = callback3(arg1(dependencyMap[27]).CircleMinusIcon, obj);
  }
  obj.leading = tmp3;
  return callback3(importDefault(dependencyMap[30]), obj);
}
function MemberOverwrites(channel) {
  channel = channel.channel;
  const arg1 = channel.guild_id;
  ({ isEditing: closure_1, onSelectRow: closure_2, onDeleteRow: closure_3 } = channel);
  const tmp = callback5();
  const found = importDefault(dependencyMap[20])(channel.permissionOverwrites).filter((type) => type.type === guild_id(closure_3[29]).PermissionOverwriteType.MEMBER);
  const mapped = found.map((id) => user.getUser(id.id));
  const found1 = mapped.filter(arg1(dependencyMap[31]).isNotNullish);
  const arr = importDefault(dependencyMap[20])(channel.permissionOverwrites);
  const valueResult = found1.sortBy((username) => username.username.toLowerCase()).value();
  let tmp2 = null;
  if (valueResult.length > 0) {
    let obj = { style: tmp.tableRowGroupContainer };
    obj = {};
    const intl = arg1(dependencyMap[15]).intl;
    obj.title = intl.string(arg1(dependencyMap[15]).t.9Oq93m);
    obj.hasIcons = true;
    obj.children = valueResult.map((id) => {
      const guild_id = id;
      return callback(closure_24, {
        guildId: guild_id,
        user: id,
        isEditing: closure_1,
        onSelect() {
          return callback(arg0.id);
        },
        onDelete() {
          return callback2(arg0.id);
        }
      }, id.id);
    });
    obj.children = callback3(arg1(dependencyMap[21]).TableRowGroup, obj);
    tmp2 = callback3(View, obj);
  }
  return tmp2;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
const isEveryoneRole = arg1(dependencyMap[4]).isEveryoneRole;
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
({ PermissionOverrideType: closure_14, ChannelSettingsSections: closure_15 } = arg1(dependencyMap[10]));
const tmp2 = arg1(dependencyMap[10]);
({ jsx: closure_16, jsxs: closure_17 } = arg1(dependencyMap[11]));
let obj = arg1(dependencyMap[12]);
obj = {};
obj = { marginBottom: importDefault(dependencyMap[13]).space.PX_16 };
obj.tableRowGroupContainer = obj;
const tmp3 = arg1(dependencyMap[11]);
obj.tableContainer = { marginHorizontal: importDefault(dependencyMap[13]).space.PX_12 };
let closure_18 = obj.createStyles(obj);
const obj1 = { marginHorizontal: importDefault(dependencyMap[13]).space.PX_12 };
const result = arg1(dependencyMap[35]).fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsOverview.tsx");

export default function ChannelSettingsPermissionsOverview(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  let importDefault;
  let closure_5;
  let React;
  function handlePressRow(MEMBER, id) {
    if (!first) {
      const obj = { type: MEMBER, id };
      navigation.push(constants2.PERMISSION_OVERRIDES, obj);
    }
  }
  function handleClearPermissionOverwrite(arg0) {
    const channelId = arg0;
    let tmp;
    if (null != closure_5) {
      tmp = closure_5[arg0];
    }
    const user = user.getUser(arg0);
    if (null != tmp) {
      let username = tmp.name;
    } else if (null != user) {
      username = user.username;
    }
    let obj = navigation(stateFromStores1[14]);
    obj = {};
    const intl = channelId(stateFromStores1[15]).intl;
    obj = { name: username };
    obj.title = intl.formatToPlainString(channelId(stateFromStores1[15]).t.txPV7k, obj);
    const intl2 = channelId(stateFromStores1[15]).intl;
    const obj1 = { name: username };
    obj.body = intl2.format(channelId(stateFromStores1[15]).t.xERCnZ, obj1);
    const intl3 = channelId(stateFromStores1[15]).intl;
    obj.cancelText = intl3.string(channelId(stateFromStores1[15]).t.gm1Vej);
    const intl4 = channelId(stateFromStores1[15]).intl;
    obj.confirmText = intl4.string(channelId(stateFromStores1[15]).t.p89ACt);
    obj.onConfirm = function onConfirm() {
      const result = callback(closure_3[34]).clearPermissionOverwrite(arg0, arg0);
    };
    obj.show(obj);
  }
  let obj = arg1(dependencyMap[24]);
  const navigation = obj.useNavigation();
  importDefault = navigation;
  let obj1 = arg1(dependencyMap[28]);
  const items = [handlePressRow];
  const items1 = [channelId];
  const stateFromStores = obj1.useStateFromStores(items, () => handlePressRow.getChannel(channelId), items1);
  const importAll = stateFromStores;
  let obj2 = arg1(dependencyMap[28]);
  const items2 = [handlePressRow];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let parent_id;
    if (null != stateFromStores) {
      parent_id = stateFromStores.parent_id;
    }
    return handlePressRow.getChannel(parent_id);
  });
  const dependencyMap = stateFromStores1;
  let obj3 = arg1(dependencyMap[28]);
  const items3 = [closure_11];
  const stateFromStores2 = obj3.useStateFromStores(items3, () => {
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return guild.getGuild(guild_id);
  });
  const callback2 = stateFromStores2;
  const tmp = callback5();
  const items4 = [handleClearPermissionOverwrite];
  closure_5 = arg1(dependencyMap[28]).useStateFromStores(items4, () => {
    let rolesSnapshot;
    if (null != stateFromStores2) {
      rolesSnapshot = handleClearPermissionOverwrite.getRolesSnapshot(stateFromStores2.id);
    }
    return rolesSnapshot;
  });
  const items5 = [stateFromStores, stateFromStores1];
  const memo = React.useMemo(() => {
    let areChannelsLockedResult = null != stateFromStores;
    if (areChannelsLockedResult) {
      areChannelsLockedResult = stateFromStores(stateFromStores1[17]).areChannelsLocked(stateFromStores, stateFromStores1);
      const obj = stateFromStores(stateFromStores1[17]);
    }
    return areChannelsLockedResult;
  }, items5);
  const tmp7 = callback2(React.useState(false), 2);
  const first = tmp7[0];
  React = first;
  let closure_7 = tmp7[1];
  const callback = React.useCallback(() => {
    callback((arg0) => !arg0);
    const result = channelId(stateFromStores1[32]).DeprecatedLayoutAnimation();
  }, []);
  const isEveryoneRole = callback;
  const items6 = [navigation, first, callback];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["onPress"] = closure_8;
        const intl = callback(closure_3[15]).intl;
        const string = intl.string;
        const t = callback(closure_3[15]).t;
        if (closure_6) {
          let stringResult = string(t.i4jeWR);
        } else {
          stringResult = string(t.bt75uw);
        }
        obj["label"] = stringResult;
        return closure_16(callback(closure_3[33]).HeaderTextButton, obj);
      }
    });
  }, items6);
  let tmp11 = null;
  if (null != stateFromStores) {
    tmp11 = null;
    if (null != stateFromStores2) {
      obj = { style: tmp.tableContainer };
      obj = { channel: stateFromStores, category: stateFromStores1, isEditing: first, locked: memo };
      const items7 = [callback3(CategorySync, obj), , , ];
      obj1 = { isEditing: first };
      items7[1] = callback3(AddPermission, obj1);
      obj2 = {
        guild: stateFromStores2,
        channel: stateFromStores,
        isEditing: first,
        onSelectRow(id) {
              handlePressRow(constants.ROLE, id);
            },
        onDeleteRow(arg0) {
              handleClearPermissionOverwrite(arg0);
            }
      };
      items7[2] = callback3(RoleOverwrites, obj2);
      obj3 = {
        channel: stateFromStores,
        isEditing: first,
        onSelectRow(id) {
              handlePressRow(constants.MEMBER, id);
            },
        onDeleteRow(arg0) {
              handleClearPermissionOverwrite(arg0);
            }
      };
      items7[3] = callback3(MemberOverwrites, obj3);
      obj.children = items7;
      tmp11 = callback4(closure_7, obj);
    }
  }
  return tmp11;
};
