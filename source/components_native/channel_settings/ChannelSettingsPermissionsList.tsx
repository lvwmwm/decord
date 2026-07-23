// Module ID: 15512
// Function ID: 119592
// Dependencies: [57, 31, 27, 1348, 1917, 1910, 1849, 653, 33, 4130, 689, 566, 5045, 1456, 1557, 8832, 4140, 3763, 5165, 9565, 1881, 10179, 5772, 1212, 9244, 1273, 8502, 2]

// Module 15512
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
const require = arg1;
({ PermissionOverrideType: closure_11, ChannelSettingsSections: closure_12 } = ME);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
let closure_15 = { rows: [], sections: [] };
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, flex: 1 };
obj.container = obj;
_createForOfIteratorHelperLoose = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.containerSearchBar = _createForOfIteratorHelperLoose;
let closure_16 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function ChannelSettingsPermissionsList(channelId) {
  channelId = channelId.channelId;
  const type = channelId.type;
  let rows;
  let rows1;
  let rowContentHeight;
  let callback;
  let tmp = callback2();
  let obj = channelId(stateFromStores[13]);
  const navigation = obj.useNavigation();
  let tmp3 = guildId(rows.useState(""), 2);
  const first = tmp3[0];
  let obj1 = channelId(stateFromStores[11]);
  let items = [rowContentHeight];
  stateFromStores = obj1.useStateFromStores(items, () => rowContentHeight.getChannel(channelId));
  let obj2 = channelId(stateFromStores[11]);
  let items1 = [closure_9];
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
      sortedRoles = outer1_9.getSortedRoles(tmp3);
    }
    obj.sortedGuildRoles = sortedRoles;
    obj.guildId = tmp3;
    return obj;
  }, items2);
  guildId = stateFromStoresObject.guildId;
  obj = { enabled: type === constants.MEMBER };
  let permissionOverwrites;
  if (null != stateFromStores) {
    permissionOverwrites = stateFromStores.permissionOverwrites;
  }
  obj.permissionOverwrites = permissionOverwrites;
  obj.guildId = guildId;
  obj.searchQuery = first;
  const tmp8 = (function useGuildMemberData(enabled) {
    enabled = enabled.enabled;
    const permissionOverwrites = enabled.permissionOverwrites;
    const guildId = enabled.guildId;
    const searchQuery = enabled.searchQuery;
    let items = [callback];
    let items1 = [enabled, guildId, channelId(stateFromStores[11]).useStateFromStores(items, () => callback.getMemberVersion()), permissionOverwrites, searchQuery];
    return rows.useMemo(() => {
      if (enabled) {
        if (null != guildId) {
          const items = [];
          for (const key10003 in callback.getMutableAllGuildsAndMembers()[guildId]) {
            let tmp18 = key10003;
            let tmp19 = outer2_10;
            let user = outer2_10.getUser(key10003);
            let tmp6 = null != user;
            if (tmp6) {
              let tmp3 = permissionOverwrites;
              let tmp4;
              if (null != permissionOverwrites) {
                let tmp5 = permissionOverwrites;
                tmp4 = permissionOverwrites[key10003];
              }
              tmp6 = null == tmp4;
            }
            if (tmp6) {
              let tmp7 = searchQuery;
              let tmp11Result = 0 === searchQuery.length;
              if (!tmp11Result) {
                let tmp9 = type;
                let tmp10 = stateFromStores;
                let tmp12 = searchQuery;
                let tmp11 = type(stateFromStores[12]);
                let str = user.username;
                let formatted = searchQuery.toLowerCase();
                tmp11Result = tmp11(formatted, str.toLowerCase());
              }
              tmp6 = tmp11Result;
            }
            if (!tmp6) {
              continue;
            } else {
              let arr = items.push(user);
              continue;
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
      return outer2_15;
    }, items1);
  })(obj);
  rows = tmp8.rows;
  let sections = tmp8.sections;
  obj = { enabled: type === constants.ROLE, channel: stateFromStores, sortedGuildRoles: stateFromStoresObject.sortedGuildRoles, searchQuery: first };
  let tmp9 = (function useGuildRoleData(enabled) {
    enabled = enabled.enabled;
    const channel = enabled.channel;
    const sortedGuildRoles = enabled.sortedGuildRoles;
    const searchQuery = enabled.searchQuery;
    let items = [enabled, channel, sortedGuildRoles, searchQuery];
    return rows.useMemo(() => {
      if (enabled) {
        if (null != sortedGuildRoles) {
          if (null != channel) {
            const found = sortedGuildRoles.filter((name) => {
              let tmp = 0 !== outer1_3.length;
              if (tmp) {
                const formatted = outer1_3.toLowerCase();
                tmp = !type(stateFromStores[12])(formatted, name.name.toLowerCase());
                const str = name.name;
                const tmp4 = type(stateFromStores[12]);
              }
              let tmp7 = !tmp;
              if (!tmp) {
                tmp7 = null == outer1_1.permissionOverwrites[name.id];
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
      return outer2_15;
    }, items);
  })(obj);
  rows1 = tmp9.rows;
  let obj5 = channelId(stateFromStores[15]);
  const scaledRowHeightData = obj5.useScaledRowHeightData();
  rowContentHeight = scaledRowHeightData.rowContentHeight;
  const items3 = [channelId, navigation, type];
  callback = rows.useCallback((id, type) => {
    let closure_0 = id;
    if (null != closure_0) {
      let obj = type(stateFromStores[16]);
      obj = { id, type, allow: navigation(stateFromStores[17]).NONE, deny: navigation(stateFromStores[17]).NONE };
      const result = obj.updatePermissionOverwrite(closure_0, obj);
      result.then(() => {
        outer1_2.push(outer2_12.PERMISSION_OVERRIDES, { type: outer1_1, id: closure_0, fromCreate: true });
      });
    }
  }, items3);
  const items4 = [guildId, rows, rows1, callback, type, rowContentHeight];
  obj1 = { style: tmp.container };
  obj2 = { style: tmp.containerSearchBar };
  const callback1 = rows.useCallback((arg0, arg1) => {
    if (id === outer1_11.ROLE) {
      let length = rows1.length;
    } else {
      length = rows.length;
    }
    if (null == guildId) {
      return null;
    } else if (outer1_11.ROLE === id) {
      const channelId = tmp13;
      let obj = { arrow: true, end: tmp4 };
      obj = {};
      ({ name: obj3.name, colorString: obj3.color, colorStrings: obj3.colors } = rows1[arg1]);
      obj.label = outer1_13(channelId(stateFromStores[19]).RoleLabel, obj);
      obj.onPress = function onPress() {
        outer1_8(tmp13.id, channelId(stateFromStores[20]).PermissionOverwriteType.ROLE);
      };
      obj.start = tmp;
      return outer1_13(channelId(stateFromStores[18]).TableRow, obj);
    } else if (outer1_11.MEMBER === tmp17) {
      id = rows[arg1].id;
      obj = {
        arrow: true,
        contentHeight: rowContentHeight,
        end: tmp4,
        guildId,
        userId: id,
        onPress() {
            outer1_8(id, channelId(stateFromStores[20]).PermissionOverwriteType.MEMBER);
          },
        start: tmp
      };
      return outer1_13(type(stateFromStores[21]), obj);
    } else {
      return null;
    }
  }, items4);
  const obj3 = { size: "md" };
  const intl = channelId(stateFromStores[23]).intl;
  obj3.placeholder = intl.string(channelId(stateFromStores[23]).t["5h0QOP"]);
  obj3.onChange = tmp3[1];
  obj3.isRound = true;
  obj2.children = callback(channelId(stateFromStores[22]).SearchField, obj3);
  const items5 = [callback(rows1, obj2), ];
  if (0 !== (type === constants.ROLE ? rows1.length : rows.length)) {
    const obj4 = {};
    if (type === constants.ROLE) {
      sections = tmp9.sections;
    }
    obj4.sections = sections;
    obj4.itemSize = scaledRowHeightData.rowHeight;
    obj4.estimatedListSize = "windowSize";
    obj4.renderItem = callback1;
    obj4.wrapChildren = true;
    obj4.insetStart = type(stateFromStores[10]).space.PX_8;
    obj4.insetEnd = type(stateFromStores[10]).space.PX_8 + type(stateFromStores[14])().bottom;
    obj4.keyboardShouldPersistTaps = "always";
    let tmp34Result = callback(type(stateFromStores[24]), obj4);
    const tmp27 = callback;
    const tmp30 = type(stateFromStores[24]);
  } else {
    obj5 = { Illustration: channelId(stateFromStores[26]).NoResults };
    if (type === constants.ROLE) {
      const intl3 = channelId(stateFromStores[23]).intl;
      let stringResult = intl3.string(channelId(stateFromStores[23]).t.Sojqsr);
    } else {
      const intl2 = channelId(stateFromStores[23]).intl;
      stringResult = intl2.string(channelId(stateFromStores[23]).t.pYHobK);
    }
    obj5.title = stringResult;
    if (type === constants.ROLE) {
      const intl5 = channelId(stateFromStores[23]).intl;
      let stringResult1 = intl5.string(channelId(stateFromStores[23]).t["7gBhmO"]);
    } else {
      const intl4 = channelId(stateFromStores[23]).intl;
      stringResult1 = intl4.string(channelId(stateFromStores[23]).t.tuL9TW);
    }
    obj5.body = stringResult1;
    tmp34Result = callback(channelId(stateFromStores[25]).EmptyState, obj5);
    const tmp34 = callback;
  }
  items5[1] = tmp34Result;
  obj1.children = items5;
  return closure_14(rows1, obj1);
});
let result = require("get ActivityIndicator").fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsList.tsx");

export default memoResult;
