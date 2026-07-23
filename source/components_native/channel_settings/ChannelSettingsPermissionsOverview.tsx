// Module ID: 15511
// Function ID: 119549
// Name: ChannelPermissionSyncModule
// Dependencies: [57, 5, 31, 27, 1911, 1348, 1910, 1838, 3767, 1849, 653, 33, 4130, 689, 4470, 1212, 4320, 3763, 8415, 7596, 22, 5503, 5165, 13509, 1456, 11788, 9565, 14201, 566, 1881, 10179, 1327, 5162, 9122, 4140, 2]
// Exports: default

// Module 15511 (ChannelPermissionSyncModule)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment";
import { View } from "CircleMinusIcon";
import { isEveryoneRole } from "GuildRoleRecordTypeTag";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_createForOfIteratorHelperLoose";
import closure_11 from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "GenericHeaderTitle";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_14;
let closure_15;
let closure_16;
let closure_17;
const require = arg1;
function ChannelPermissionSyncModule(channel) {
  channel = channel.channel;
  const category = channel.category;
  const items = [channel, category];
  const callback = React.useCallback(() => {
    let obj = category(outer1_3[14]);
    obj = {};
    const intl = channel(outer1_3[15]).intl;
    obj.title = intl.string(channel(outer1_3[15]).t.YWMtRe);
    const intl2 = channel(outer1_3[15]).intl;
    obj = { channelName: channel(outer1_3[16]).computeChannelName(closure_0, outer1_13, outer1_12, true) };
    const obj4 = channel(outer1_3[16]);
    obj.categoryName = channel(outer1_3[16]).computeChannelName(category, outer1_13, outer1_12);
    obj.body = intl2.format(channel(outer1_3[15]).t["iKW+jY"], obj);
    const intl3 = channel(outer1_3[15]).intl;
    obj.confirmText = intl3.string(channel(outer1_3[15]).t.eW8Gy4);
    const intl4 = channel(outer1_3[15]).intl;
    obj.cancelText = intl4.string(channel(outer1_3[15]).t.s4uM3b);
    // CreateGeneratorClosureLongIndex (0x67)
    closure_0 = outer1_5(tmp);
    obj.onConfirm = function() {
      return callback(...arguments);
    };
    obj.show(obj);
  }, items);
  let obj = channel(4320);
  const channelName = obj.computeChannelName(category, closure_13, closure_12);
  obj = { style: _createForOfIteratorHelperLoose().tableRowGroupContainer };
  obj = {};
  let intl = channel(1212).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = channel(1212).t;
  if (channel.locked) {
    const obj1 = { categoryName: channelName };
    let formatToPlainStringResult = formatToPlainString(t.ETJqLl, obj1);
  } else {
    const obj2 = { categoryName: channelName };
    formatToPlainStringResult = formatToPlainString(t.OIhm0M, obj2);
  }
  obj.title = formatToPlainStringResult;
  obj.hasIcons = true;
  const obj3 = { icon: callback(channel(13509).RefreshIcon, {}) };
  let intl2 = channel(1212).intl;
  obj3.label = intl2.string(channel(1212).t.NVwuHq);
  obj3.onPress = callback;
  obj.children = callback(channel(5165).TableRow, obj3);
  obj.children = callback(channel(5503).TableRowGroup, obj);
  return callback(View, obj);
}
function CategorySync(category) {
  category = category.category;
  let tmp4 = null;
  if (null != category) {
    tmp4 = null;
    if (!tmp2) {
      const obj = { channel: tmp, category, locked: tmp3 };
      tmp4 = callback(ChannelPermissionSyncModule, obj);
    }
  }
  return tmp4;
}
function AddPermission(isEditing) {
  let _require;
  function handleCreatePermissionOverwrite(MEMBER) {

  }
  let obj = _require(1456);
  _require = obj.useNavigation();
  if (isEditing.isEditing) {
    return null;
  } else {
    obj = { style: tmp.tableRowGroupContainer };
    obj = {};
    const intl = _require(1212).intl;
    obj.title = intl.string(_require(1212).t.vPHdP5);
    obj.hasIcons = true;
    const obj1 = { icon: callback(_require(11788).PlusMediumIcon, {}) };
    const intl2 = _require(1212).intl;
    obj1.label = intl2.string(_require(1212).t.fVWxvT);
    obj1.onPress = function onPress() {
      handleCreatePermissionOverwrite(outer1_14.ROLE);
    };
    const items = [callback(_require(5165).TableRow, obj1), ];
    const obj2 = { icon: callback(_require(11788).PlusMediumIcon, {}) };
    const intl3 = _require(1212).intl;
    obj2.label = intl3.string(_require(1212).t.riesLt);
    obj2.onPress = function onPress() {
      handleCreatePermissionOverwrite(outer1_14.MEMBER);
    };
    items[1] = callback(_require(5165).TableRow, obj2);
    obj.children = items;
    obj.children = callback2(_require(5503).TableRowGroup, obj);
    return callback(View, obj);
  }
  tmp = _createForOfIteratorHelperLoose();
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
  let obj = { label: callback(require(9565) /* RoleLabel */.RoleLabel, { name, color: colorString, colors: colorStrings }), arrow: !isEditing };
  let tmp3 = null;
  if (isEditing) {
    tmp3 = null;
    if (!tmp) {
      obj = { color: importDefault(689).colors.ICON_FEEDBACK_CRITICAL };
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.N86XcP);
      tmp3 = callback(require(14201) /* CircleMinusIcon */.CircleMinusIcon, obj);
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
  return callback(require(5165) /* TableRowInner */.TableRow, obj);
}
function RoleOverwrites(guild) {
  let dependencyMap;
  let importAll;
  let importDefault;
  guild = guild.guild;
  ({ isEditing: importDefault, onSelectRow: importAll, onDeleteRow: dependencyMap } = guild);
  let obj = guild(566);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_10.getSortedRoles(guild.id));
  obj = {};
  const merged = Object.assign(guild.channel.permissionOverwrites);
  if (null == obj[guild.id]) {
    obj[guild.id] = importAll(3763).makeEveryoneOverwrite(guild.id);
    const obj3 = importAll(3763);
  }
  const found = stateFromStores.filter((arg0) => {
    let type;
    if (null != obj[arg0.id]) {
      type = tmp.type;
    }
    return type === guild(outer1_3[29]).PermissionOverwriteType.ROLE;
  });
  obj = { style: _createForOfIteratorHelperLoose().tableRowGroupContainer };
  const obj1 = {};
  const intl = guild(1212).intl;
  obj1.title = intl.string(guild(1212).t["LPJmL/"]);
  obj1.hasIcons = true;
  obj1.children = found.map((id) => {
    let closure_0 = id;
    return outer1_16(outer1_22, {
      role: id,
      isEditing: closure_1,
      onSelect() {
        return outer1_2(user.id);
      },
      onDelete() {
        return outer1_3(user.id);
      }
    }, id.id);
  });
  obj.children = callback(guild(5503).TableRowGroup, obj1);
  return callback(View, obj);
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
    obj = { color: importDefault(689).colors.ICON_FEEDBACK_CRITICAL };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.N86XcP);
    tmp3 = callback(require(14201) /* CircleMinusIcon */.CircleMinusIcon, obj);
  }
  obj.leading = tmp3;
  return callback(importDefault(10179), obj);
}
function MemberOverwrites(channel) {
  let dependencyMap;
  let importAll;
  let importDefault;
  channel = channel.channel;
  const guild_id = channel.guild_id;
  ({ isEditing: importDefault, onSelectRow: importAll, onDeleteRow: dependencyMap } = channel);
  const tmp = _createForOfIteratorHelperLoose();
  const found = importDefault(22)(channel.permissionOverwrites).filter((type) => type.type === guild_id(outer1_3[29]).PermissionOverwriteType.MEMBER);
  const mapped = found.map((id) => outer1_13.getUser(id.id));
  const found1 = mapped.filter(guild_id(1327).isNotNullish);
  const arr = importDefault(22)(channel.permissionOverwrites);
  const valueResult = found1.sortBy((username) => username.username.toLowerCase()).value();
  let tmp2 = null;
  if (valueResult.length > 0) {
    let obj = { style: tmp.tableRowGroupContainer };
    obj = {};
    const intl = guild_id(1212).intl;
    obj.title = intl.string(guild_id(1212).t["9Oq93m"]);
    obj.hasIcons = true;
    obj.children = valueResult.map((id) => {
      let closure_0 = id;
      return outer1_16(outer1_24, {
        guildId: closure_0,
        user: id,
        isEditing: closure_1,
        onSelect() {
          return outer1_2(user.id);
        },
        onDelete() {
          return outer1_3(user.id);
        }
      }, id.id);
    });
    obj.children = callback(guild_id(5503).TableRowGroup, obj);
    tmp2 = callback(View, obj);
  }
  return tmp2;
}
({ PermissionOverrideType: closure_14, ChannelSettingsSections: closure_15 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.tableRowGroupContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.tableContainer = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
let result = require("result").fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsOverview.tsx");

export default function ChannelSettingsPermissionsOverview(channelId) {
  channelId = channelId.channelId;
  let navigation;
  let _isNativeReflectConstruct;
  let first;
  function handlePressRow(MEMBER, id) {
    if (!first) {
      const obj = { type: MEMBER, id };
      navigation.push(outer1_15.PERMISSION_OVERRIDES, obj);
    }
  }
  function handleClearPermissionOverwrite(arg0) {
    let closure_0 = arg0;
    let tmp;
    if (null != table) {
      tmp = table[arg0];
    }
    const user = outer1_13.getUser(arg0);
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
      const result = navigation(stateFromStores1[34]).clearPermissionOverwrite(closure_0, closure_0);
    };
    obj.show(obj);
  }
  let obj = channelId(stateFromStores1[24]);
  navigation = obj.useNavigation();
  let obj1 = channelId(stateFromStores1[28]);
  const items = [handlePressRow];
  const items1 = [channelId];
  const stateFromStores = obj1.useStateFromStores(items, () => handlePressRow.getChannel(channelId), items1);
  let obj2 = channelId(stateFromStores1[28]);
  const items2 = [handlePressRow];
  stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let parent_id;
    if (null != stateFromStores) {
      parent_id = stateFromStores.parent_id;
    }
    return handlePressRow.getChannel(parent_id);
  });
  let obj3 = channelId(stateFromStores1[28]);
  const items3 = [closure_11];
  const stateFromStores2 = obj3.useStateFromStores(items3, () => {
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return outer1_11.getGuild(guild_id);
  });
  let tmp = _createForOfIteratorHelperLoose();
  const items4 = [handleClearPermissionOverwrite];
  _isNativeReflectConstruct = channelId(stateFromStores1[28]).useStateFromStores(items4, () => {
    let rolesSnapshot;
    if (null != stateFromStores2) {
      rolesSnapshot = handleClearPermissionOverwrite.getRolesSnapshot(stateFromStores2.id);
    }
    return rolesSnapshot;
  });
  const items5 = [stateFromStores, stateFromStores1];
  const memo = first.useMemo(() => {
    let areChannelsLockedResult = null != stateFromStores;
    if (areChannelsLockedResult) {
      areChannelsLockedResult = stateFromStores(stateFromStores1[17]).areChannelsLocked(stateFromStores, stateFromStores1);
      const obj = stateFromStores(stateFromStores1[17]);
    }
    return areChannelsLockedResult;
  }, items5);
  const tmp7 = stateFromStores2(first.useState(false), 2);
  first = tmp7[0];
  let closure_7 = tmp7[1];
  const callback = first.useCallback(() => {
    callback((arg0) => !arg0);
    const result = channelId(stateFromStores1[32]).DeprecatedLayoutAnimation();
  }, []);
  const items6 = [navigation, first, callback];
  const layoutEffect = first.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["onPress"] = outer1_8;
        const intl = channelId(stateFromStores1[15]).intl;
        const string = intl.string;
        const t = channelId(stateFromStores1[15]).t;
        if (outer1_6) {
          let stringResult = string(t.i4jeWR);
        } else {
          stringResult = string(t.bt75uw);
        }
        obj["label"] = stringResult;
        return outer2_16(channelId(stateFromStores1[33]).HeaderTextButton, obj);
      }
    });
  }, items6);
  let tmp11 = null;
  if (null != stateFromStores) {
    tmp11 = null;
    if (null != stateFromStores2) {
      obj = { style: tmp.tableContainer };
      obj = { channel: stateFromStores, category: stateFromStores1, isEditing: first, locked: memo };
      const items7 = [callback(CategorySync, obj), , , ];
      obj1 = { isEditing: first };
      items7[1] = callback(AddPermission, obj1);
      obj2 = {
        guild: stateFromStores2,
        channel: stateFromStores,
        isEditing: first,
        onSelectRow(id) {
              handlePressRow(outer1_14.ROLE, id);
            },
        onDeleteRow(arg0) {
              handleClearPermissionOverwrite(arg0);
            }
      };
      items7[2] = callback(RoleOverwrites, obj2);
      obj3 = {
        channel: stateFromStores,
        isEditing: first,
        onSelectRow(id) {
              handlePressRow(outer1_14.MEMBER, id);
            },
        onDeleteRow(arg0) {
              handleClearPermissionOverwrite(arg0);
            }
      };
      items7[3] = callback(MemberOverwrites, obj3);
      obj.children = items7;
      tmp11 = callback2(closure_7, obj);
    }
  }
  return tmp11;
};
