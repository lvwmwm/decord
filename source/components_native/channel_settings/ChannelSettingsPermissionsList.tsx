// Module ID: 15387
// Function ID: 117375
// Dependencies: []

// Module 15387
let closure_4 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
({ PermissionOverrideType: closure_11, ChannelSettingsSections: closure_12 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[8]));
let closure_15 = { rows: [], sections: [] };
let obj1 = arg1(dependencyMap[9]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOWER, paddingHorizontal: importDefault(dependencyMap[10]).space.PX_12, flex: 1 };
obj.container = obj;
obj1 = { paddingVertical: importDefault(dependencyMap[10]).space.PX_8 };
obj.containerSearchBar = obj1;
let closure_16 = obj1.createStyles(obj);
const tmp3 = arg1(dependencyMap[8]);
const memoResult = importAllResult.memo(function ChannelSettingsPermissionsList(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const type = channelId.type;
  const importDefault = type;
  let importAllResult;
  let View;
  let closure_7;
  let closure_8;
  const tmp = callback3();
  let obj = arg1(dependencyMap[13]);
  const navigation = obj.useNavigation();
  const importAll = navigation;
  const tmp3 = callback(importAllResult.useState(""), 2);
  const first = tmp3[0];
  let obj1 = arg1(dependencyMap[11]);
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => rowContentHeight.getChannel(channelId));
  const dependencyMap = stateFromStores;
  let obj2 = arg1(dependencyMap[11]);
  const items1 = [closure_9];
  const items2 = [stateFromStores];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    let guildId;
    if (null != stateFromStores) {
      guildId = stateFromStores.getGuildId();
    }
    let tmp3;
    if (null != guildId) {
      tmp3 = guildId;
    }
    const obj = {};
    let sortedRoles;
    if (null != tmp3) {
      sortedRoles = sortedRoles.getSortedRoles(tmp3);
    }
    obj.sortedGuildRoles = sortedRoles;
    obj.guildId = tmp3;
    return obj;
  }, items2);
  const guildId = stateFromStoresObject.guildId;
  let callback = guildId;
  obj = { enabled: type === constants.MEMBER };
  let permissionOverwrites;
  if (null != stateFromStores) {
    permissionOverwrites = stateFromStores.permissionOverwrites;
  }
  obj.permissionOverwrites = permissionOverwrites;
  obj.guildId = guildId;
  obj.searchQuery = first;
  const tmp8 = function useGuildMemberData(enabled) {
    enabled = enabled.enabled;
    const channelId = enabled;
    const permissionOverwrites = enabled.permissionOverwrites;
    const type = permissionOverwrites;
    const guildId = enabled.guildId;
    const navigation = guildId;
    const searchQuery = enabled.searchQuery;
    const stateFromStores = searchQuery;
    const items = [callback];
    const items1 = [enabled, guildId, channelId(stateFromStores[11]).useStateFromStores(items, () => memberVersion.getMemberVersion()), permissionOverwrites, searchQuery];
    return rows.useMemo(() => {
      if (enabled) {
        if (null != guildId) {
          const items = [];
          for (const key10003 in closure_8.getMutableAllGuildsAndMembers()[closure_2]) {
            let tmp18 = key10003;
            let tmp19 = closure_10;
            let user = closure_10.getUser(key10003);
            let tmp6 = null != user;
            if (tmp6) {
              let tmp3 = closure_1;
              let tmp4;
              if (null != closure_1) {
                let tmp5 = closure_1;
                tmp4 = closure_1[key10003];
              }
              tmp6 = null == tmp4;
            }
            if (tmp6) {
              let tmp7 = closure_3;
              let tmp11Result = 0 === closure_3.length;
              if (!tmp11Result) {
                let tmp9 = closure_1;
                let tmp10 = closure_3;
                let tmp12 = closure_3;
                let tmp11 = closure_1(closure_3[12]);
                let str = user.username;
                let formatted = closure_3.toLowerCase();
                tmp11Result = tmp11(formatted, str.toLowerCase());
              }
              tmp6 = tmp11Result;
            }
            if (!tmp6) {
              continue;
            } else {
              let arr = items.push(user);
              // continue
            }
            continue;
          }
          const sorted = items.sort((username, username2) => {
            const formatted = username.username.toLowerCase();
            return formatted.localeCompare(username2.username.toLowerCase());
          });
          const obj = { rows: items };
          const items1 = [items.length];
          obj.sections = items1;
          return obj;
        }
      }
      return closure_15;
    }, items1);
  }(obj);
  const rows = tmp8.rows;
  importAllResult = rows;
  let sections = tmp8.sections;
  obj = { enabled: type === constants.ROLE, channel: stateFromStores, sortedGuildRoles: stateFromStoresObject.sortedGuildRoles, searchQuery: first };
  const tmp9 = function useGuildRoleData(enabled) {
    enabled = enabled.enabled;
    const channelId = enabled;
    const channel = enabled.channel;
    const type = channel;
    const sortedGuildRoles = enabled.sortedGuildRoles;
    const navigation = sortedGuildRoles;
    const searchQuery = enabled.searchQuery;
    const stateFromStores = searchQuery;
    const items = [enabled, channel, sortedGuildRoles, searchQuery];
    return rows.useMemo(() => {
      if (enabled) {
        if (null != sortedGuildRoles) {
          if (null != channel) {
            const found = sortedGuildRoles.filter((name) => {
              let tmp = 0 !== closure_3.length;
              if (tmp) {
                const formatted = closure_3.toLowerCase();
                tmp = !lib(closure_3[12])(formatted, name.name.toLowerCase());
                const str = name.name;
                const tmp4 = lib(closure_3[12]);
              }
              let tmp7 = !tmp;
              if (!tmp) {
                tmp7 = null == lib.permissionOverwrites[name.id];
              }
              return tmp7;
            });
            const obj = { rows: found };
            const items = [found.length];
            obj.sections = items;
            return obj;
          }
        }
      }
      return closure_15;
    }, items);
  }(obj);
  const rows1 = tmp9.rows;
  View = rows1;
  let obj5 = arg1(dependencyMap[15]);
  const scaledRowHeightData = obj5.useScaledRowHeightData();
  const rowContentHeight = scaledRowHeightData.rowContentHeight;
  closure_7 = rowContentHeight;
  const items3 = [channelId, navigation, type];
  callback = importAllResult.useCallback((id, type) => {
    const channelId = id;
    if (null != channelId) {
      let obj = type(stateFromStores[16]);
      obj = { id, type, allow: navigation(stateFromStores[17]).NONE, deny: navigation(stateFromStores[17]).NONE };
      const result = obj.updatePermissionOverwrite(channelId, obj);
      result.then(() => {

      });
    }
  }, items3);
  closure_8 = callback;
  const items4 = [guildId, rows, rows1, callback, type, rowContentHeight];
  obj1 = { style: tmp.container };
  obj2 = { style: tmp.containerSearchBar };
  const callback1 = importAllResult.useCallback((arg0, arg1) => {
    if (type === constants.ROLE) {
      let length = rows1.length;
    } else {
      length = rows.length;
    }
    if (null == guildId) {
      return null;
    } else if (constants.ROLE === type) {
      const channelId = tmp13;
      let obj = { arrow: true, end: tmp4 };
      obj = {};
      ({ name: obj3.name, colorString: obj3.color, colorStrings: obj3.colors } = rows1[arg1]);
      obj.label = callback(channelId(stateFromStores[19]).RoleLabel, obj);
      obj.onPress = function onPress() {
        callback(tmp13.id, tmp13(closure_3[20]).PermissionOverwriteType.ROLE);
      };
      obj.start = tmp;
      return callback(channelId(stateFromStores[18]).TableRow, obj);
    } else if (constants.MEMBER === tmp17) {
      const id = rows[arg1].id;
      const type = id;
      obj = {
        arrow: true,
        contentHeight: rowContentHeight,
        end: tmp4,
        guildId,
        userId: id,
        onPress() {
            callback(id, tmp13(closure_3[20]).PermissionOverwriteType.MEMBER);
          },
        start: tmp
      };
      return callback(type(stateFromStores[21]), obj);
    } else {
      return null;
    }
  }, items4);
  const obj3 = { size: "md" };
  const intl = arg1(dependencyMap[23]).intl;
  obj3.placeholder = intl.string(arg1(dependencyMap[23]).t.5h0QOP);
  obj3.onChange = tmp3[1];
  obj3.isRound = true;
  obj2.children = callback2(arg1(dependencyMap[22]).SearchField, obj3);
  const items5 = [callback2(View, obj2), ];
  if (0 !== type === constants.ROLE ? rows1.length : rows.length) {
    const obj4 = {};
    if (type === constants.ROLE) {
      sections = tmp9.sections;
    }
    obj4.sections = sections;
    obj4.itemSize = scaledRowHeightData.rowHeight;
    obj4.estimatedListSize = "windowSize";
    obj4.renderItem = callback1;
    obj4.wrapChildren = true;
    obj4.insetStart = importDefault(dependencyMap[10]).space.PX_8;
    obj4.insetEnd = importDefault(dependencyMap[10]).space.PX_8 + importDefault(dependencyMap[14])().bottom;
    obj4.keyboardShouldPersistTaps = "always";
    let tmp34Result = callback2(importDefault(dependencyMap[24]), obj4);
    const tmp27 = callback2;
    const tmp30 = importDefault(dependencyMap[24]);
  } else {
    obj5 = { Illustration: arg1(dependencyMap[26]).NoResults };
    if (type === constants.ROLE) {
      const intl3 = arg1(dependencyMap[23]).intl;
      let stringResult = intl3.string(arg1(dependencyMap[23]).t.Sojqsr);
    } else {
      const intl2 = arg1(dependencyMap[23]).intl;
      stringResult = intl2.string(arg1(dependencyMap[23]).t.pYHobK);
    }
    obj5.title = stringResult;
    if (type === constants.ROLE) {
      const intl5 = arg1(dependencyMap[23]).intl;
      let stringResult1 = intl5.string(arg1(dependencyMap[23]).t.7gBhmO);
    } else {
      const intl4 = arg1(dependencyMap[23]).intl;
      stringResult1 = intl4.string(arg1(dependencyMap[23]).t.tuL9TW);
    }
    obj5.body = stringResult1;
    tmp34Result = callback2(arg1(dependencyMap[25]).EmptyState, obj5);
    const tmp34 = callback2;
  }
  items5[1] = tmp34Result;
  obj1.children = items5;
  return closure_14(View, obj1);
});
const result = arg1(dependencyMap[27]).fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsList.tsx");

export default memoResult;
