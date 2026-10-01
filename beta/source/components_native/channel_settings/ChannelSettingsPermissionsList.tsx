// Module ID: 16650
// Function ID: 16651
// Name: ChannelSettingsPermissionsList
// Dependencies: [32, 19, 17, 2045, 2108, 2102, 1372, 1074, 21, 4836, 576, 504, 5829, 1485, 1613, 6470, 4849, 4474, 5917, 9733, 1979, 10404, 6471, 1115, 6476, 1177, 7678, 2]

// Module 16650 (ChannelSettingsPermissionsList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Server from "Server" /* 1979 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation, user;

let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let unpackModuleId;
const View = react_native.View;
({ PermissionOverrideType: unpackModuleId, ChannelSettingsSections: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let closure_15 = { rows: [], sections: [] };
let createStyles = createStyles_mod;
let obj = { container: obj2, containerSearchBar: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingHorizontal: nativeDefault.space.PX_12, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_8 };
let closure_16 = createStyles(obj);
const memoResult = react.memo(function ChannelSettingsPermissionsList(channelId) {
  let SearchField;
  let intl;
  let items8;
  let obj7;
  let stringResult;
  let stringResult1;
  let tmp22Result;
  channelId = channelId.channelId;
  const type = channelId.type;
  let stateFromStores;
  let guildId;
  let rows;
  let rows1;
  let rowContentHeight;
  let callback;
  let tmp = closure_16();
  const tmp2 = channelId;
  const tmp3 = stateFromStores;
  let obj = channelId(stateFromStores[13]);
  navigation = obj.useNavigation();
  let obj2 = rows;
  let tmp5 = guildId(rows.useState(""), 2);
  const first = tmp5[0];
  let tmp8 = type;
  let tmp7 = tmp5[1];
  const bottom = type(stateFromStores[14])().bottom;
  const obj3 = channelId(stateFromStores[11]);
  let items = [rowContentHeight];
  stateFromStores = obj3.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let items1 = [GuildRoleStore];
  const items2 = [stateFromStores];
  const obj4 = channelId(stateFromStores[11]);
  const stateFromStoresObject = obj4.useStateFromStoresObject(items1, () => {
    guildId = undefined;
    const obj = stateFromStores;
    if (stateFromStores != null) {
      guildId = obj.getGuildId();
    }
    let sortedGuildRoles;
    if (null != guildId) {
      sortedGuildRoles = GuildRoleStore.getSortedRoles(guildId);
    }
    return { sortedGuildRoles, guildId };
  }, items2);
  guildId = stateFromStoresObject.guildId;
  let sortedGuildRoles = stateFromStoresObject.sortedGuildRoles;
  let permissionOverwrites;
  const MEMBER = constants.MEMBER;
  if (stateFromStores != null) {
    permissionOverwrites = stateFromStores.permissionOverwrites;
  }
  const tmp13 = type === MEMBER;
  const items3 = [callback];
  const items4 = [tmp13, guildId, , , ];
  const tmp2Result = tmp2(tmp3[11]);
  items4[2] = tmp2Result.useStateFromStores(items3, () => callback.getMemberVersion());
  items4[3] = permissionOverwrites;
  items4[4] = first;
  const memo = obj2.useMemo(() => {
    let items1;
    const tmp = closure_0;
    if (tmp) {
      if (null != guildId) {
        const items = [];
        for (const key10003 in callback.getMutableAllGuildsAndMembers()[tmp2]) {
          user = user.getUser(key10003);
          let tmp5 = null != user;
          if (tmp5) {
            let tmp4;
            if (permissionOverwrites != null) {
              tmp4 = permissionOverwrites[key10003];
            }
            tmp5 = null == tmp4;
          }
          if (tmp5) {
            let str = first;
            let tmp9Result = 0 === first.length;
            if (!tmp9Result) {
              let tmp9 = type(stateFromStores[12]);
              let str2 = user.username;
              let formatted = str.toLowerCase();
              tmp9Result = tmp9(formatted, str2.toLowerCase());
            }
            tmp5 = tmp9Result;
          }
          if (!tmp5) {
            continue;
          } else {
            let arr = items.push(user);
            continue;
          }
          continue;
        }
        const sorted = items.sort((username, username2) => {
          const str = username.username;
          const formatted = str.toLowerCase();
          const str2 = username2.username;
          return formatted.localeCompare(str2.toLowerCase());
        });
        const obj = { rows: items, sections: items1 };
        items1 = [items.length];
        return obj;
      }
    }
    return closure_2_15;
  }, items4);
  rows = memo.rows;
  let sections = memo.sections;
  let tmp15 = type === tmp11.ROLE;
  let closure_0 = tmp15;
  const items5 = [tmp15, stateFromStores, sortedGuildRoles, first];
  const memo1 = obj2.useMemo(() => {
    let items;
    let length;
    let permissionOverwrites;
    let tmp = closure_0;
    if (tmp) {
      const arr = sortedGuildRoles;
      if (null != sortedGuildRoles) {
        if (null != stateFromStores) {
          const found = arr.filter((name) => {
            let tmp = 0 !== length.length;
            const str = length;
            if (tmp) {
              const str2 = name.name;
              const tmp4 = stateFromStores(first[12]);
              const formatted = str.toLowerCase();
              tmp = !tmp4(formatted, str2.toLowerCase());
            }
            return !tmp && null == permissionOverwrites.permissionOverwrites[name.id];
          });
          const obj = { rows: found, sections: items };
          items = [found.length];
          return obj;
        }
      }
    }
    return closure_2_15;
  }, items5);
  rows1 = memo1.rows;
  const sections2 = memo1.sections;
  const tmp2Result2 = tmp2(tmp3[15]);
  const scaledRowHeightData = tmp2Result2.useScaledRowHeightData();
  rowContentHeight = scaledRowHeightData.rowContentHeight;
  const items6 = [channelId, navigation, type];
  const rowHeight = scaledRowHeightData.rowHeight;
  callback = obj2.useCallback((id, type) => {
    if (null != id) {
      let obj = { id, type, allow: navigation(stateFromStores[17]).NONE, deny: navigation(stateFromStores[17]).NONE };
      const updatePermissionOverwrite = type(stateFromStores[16]).updatePermissionOverwrite;
      type(stateFromStores[16]);
      const result = updatePermissionOverwrite(tmp, obj);
      result.then(() => {
        const obj = { type, id, fromCreate: true };
        navigation.push(constants.PERMISSION_OVERRIDES, obj);
      });
    }
  }, items6);
  const items7 = [guildId, rows, rows1, callback, type, rowContentHeight];
  let obj5 = { style: tmp.container, children: items8 };
  const obj6 = { style: tmp.containerSearchBar, children: closure_13(SearchField, obj7) };
  const callback1 = obj2.useCallback((arg0, arg1) => {
    let id;
    let obj5;
    if (null == guildId) {
      return null;
    } else if (constants.ROLE === id) {
      id = tmp13;
      const obj2 = {
        arrow: true,
        end: arg1 === tmp5,
        label: closure_1_13(channelId(stateFromStores[19]).RoleLabel, obj5),
        onPress() {
            callback(id.id, Server.PermissionOverwriteType.ROLE);
          },
        start: 0 === arg1
      };
      const TableRow = channelId(stateFromStores[18]).TableRow;
      obj5 = { name: null, color: null, colors: null };
      ({ name: obj3.name, colorString: obj3.color, colorStrings: obj3.colors } = rows1[arg1]);
      return closure_1_13(TableRow, obj2);
    } else if (constants.MEMBER === id) {
      id = rows[arg1].id;
      const obj = {
        arrow: true,
        contentHeight: rowContentHeight,
        end: arg1 === tmp5,
        guildId: tmp6,
        userId: id,
        onPress() {
            callback(id, Server.PermissionOverwriteType.MEMBER);
          },
        start: 0 === arg1
      };
      return closure_1_13(type(stateFromStores[21]), obj);
    } else {
      return null;
    }
  }, items7);
  obj7 = { size: "md", placeholder: intl.string(tmp2(tmp3[23]).t["5h0QOP"]), onChange: tmp7, round: true };
  SearchField = tmp2(tmp3[22]).SearchField;
  intl = tmp2(tmp3[23]).intl;
  items8 = [closure_13(rows1, obj6), ];
  const tmp20 = closure_14;
  const tmp21 = rows1;
  if (0 !== (type === constants.ROLE ? rows1.length : rows.length)) {
    const tmp8Result = tmp8(tmp3[24]);
    if (type === constants.ROLE) {
      sections = sections2;
    }
    const obj8 = { sections, itemSize: rowHeight, estimatedListSize: "windowSize", renderItem: callback1, wrapChildren: true, insetStart: tmp8(tmp3[10]).space.PX_8, insetEnd: tmp8(tmp3[10]).space.PX_8 + bottom, keyboardShouldPersistTaps: "always" };
    tmp22Result = tmp22(tmp8Result, obj8);
  } else {
    const obj9 = { Illustration: tmp2(tmp3[26]).NoResults, title: stringResult, body: stringResult1 };
    const EmptyState = tmp2(tmp3[25]).EmptyState;
    if (type === constants.ROLE) {
      const intl3 = tmp2(tmp3[23]).intl;
      stringResult = intl3.string(tmp2(tmp3[23]).t.Sojqsr);
    } else {
      const intl2 = tmp2(tmp3[23]).intl;
      stringResult = intl2.string(tmp2(tmp3[23]).t.pYHobK);
    }
    if (type === constants.ROLE) {
      const intl5 = tmp2(tmp3[23]).intl;
      stringResult1 = intl5.string(tmp2(tmp3[23]).t["7gBhmO"]);
    } else {
      const intl4 = tmp2(tmp3[23]).intl;
      stringResult1 = intl4.string(tmp2(tmp3[23]).t.tuL9TW);
    }
    tmp22Result = tmp22(EmptyState, obj9);
  }
  items8[1] = tmp22Result;
  return tmp20(tmp21, obj5);
});
let result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsPermissionsList.tsx");

export default memoResult;
