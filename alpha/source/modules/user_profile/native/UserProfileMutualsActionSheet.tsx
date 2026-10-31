// Module ID: 14171
// Function ID: 14172
// Name: UserProfileMutualsActionSheet
// Dependencies: [32, 19, 17, 5761, 8754, 21, 5014, 575, 6853, 504, 6975, 1187, 6041, 10745, 6957, 5624, 14165, 8980, 14172, 14173, 11411, 14166, 14167, 1113, 12511, 14177, 2]
// Exports: default

// Module 14171 (UserProfileMutualsActionSheet)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6041 */;
import GuildIcon from "GuildIcon" /* 6957 */;
import TableRow2 from "TableRow" /* 6975 */;
import Constants from "Constants" /* 8754 */;
import ActivityStatusDefault from "ActivityStatus" /* 10745 */;
import UserProfileStackedActionSheetDefault from "UserProfileStackedActionSheet" /* 11411 */;
import useUserProfileMutualsDefault from "useUserProfileMutuals" /* 14165 */;
import getMutualGuildsLabelDefault from "getMutualGuildsLabel" /* 14166 */;
import getMutualFriendsLabelDefault from "getMutualFriendsLabel" /* 14172 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import PresenceStore from "PresenceStore" /* 5761 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
function MutualFriendRow(mutualFriend) {
  let Avatar;
  let end;
  let isMobileOnline;
  let isVROnline;
  let obj4;
  let obj5;
  let obj6;
  let onPress;
  let start;
  let status;
  const user = mutualFriend.mutualFriend.user;
  const guildId = mutualFriend.guildId;
  ({ onPress, start, end } = mutualFriend);
  const tmp = closure_11();
  let obj = user(6853);
  const avatarDecoration = obj.useAvatarDecoration(user);
  const items = [PresenceStore];
  const obj2 = user(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { status: PresenceStore.getStatus(user.id), isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id) };
    return obj;
  });
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  const obj3 = { onPress, icon: closure_9(Avatar, obj4), label: obj5.getName(guildId, undefined, user), subLabel: closure_9(ActivityStatusDefault, obj6), start, end };
  const TableRow = user(6975).TableRow;
  obj4 = { user, size: user(1187).AvatarSizes.REFRESH_MEDIUM_32, avatarDecoration, status, guildId, isMobileOnline, isVROnline, autoStatusCutout: true };
  Avatar = user(1187).Avatar;
  obj5 = NicknameUtilsDefault;
  obj6 = { userId: user.id, guildId, textStyle: tmp.activityStatusText };
  return closure_9(TableRow, obj3, user.id);
}
class MutualGuildRow {
  constructor(mutualGuild) {
    let end;
    let guild;
    let items;
    let nick;
    let obj2;
    let obj3;
    let onPress;
    let start;
    let tmp6;
    let tmp7;
    let tmp8;
    ({ guild, nick } = mutualGuild.mutualGuild);
    const user = mutualGuild.user;
    ({ onPress, start, end } = mutualGuild);
    const tmp = closure_11();
    const hasAvatarForGuildResult = user.hasAvatarForGuild(guild.id);
    const obj = { onPress, icon: React4(tmp6, obj2), label: guild.name, subLabel: tmp7(tmp8, obj3), start, end };
    const TableRow = TableRow2.TableRow;
    obj2 = { guild, size: GuildIcon.GuildIconSizes.SMALL_32 };
    let tmp3Result = hasAvatarForGuildResult;
    obj3 = { style: tmp.mutualGuildSubLabel, children: items };
    tmp6 = GuildIconDefault;
    tmp7 = authStore;
    tmp8 = hasOwnProperty;
    if (hasAvatarForGuildResult) {
      const obj4 = { size: native.AvatarSizes.SIZE_16, user, guildId: guild.id };
      const Avatar = tmp4(1187).Avatar;
      tmp3Result = tmp3(Avatar, obj4);
    }
    items = [tmp3Result, , ];
    let tmp3Result3 = null != nick;
    if (tmp3Result3) {
      const obj5 = { variant: "text-xs/medium", color: "text-subtle", children: nick };
      tmp3Result3 = tmp3(tmp4(5624).Text, obj5);
    }
    items[1] = tmp3Result3;
    let tmp3Result4 = null == nick && hasAvatarForGuildResult;
    if (tmp3Result4) {
      const obj6 = { variant: "text-xs/medium", color: "text-subtle", children: user.username };
      tmp3Result4 = tmp3(tmp4(5624).Text, obj6);
    }
    items[2] = tmp3Result4;
    return React4(TableRow, obj, guild.id);
  }
}
let react = react_mod;
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = react_native);
const UserProfileSections = Constants.UserProfileSections;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, loadingState: obj3, emptyState: { alignItems: "center" }, activityStatusText: obj4, mutualGuildSubLabel: obj5 };
obj2 = { flex: 1, gap: 20, paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_8, alignItems: "center" };
obj4 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const unpackModuleId = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualsActionSheet.tsx");

export default function UserProfileMutualsActionSheet(user) {
  let closure_4;
  let first;
  let guildId;
  let intl;
  let items;
  let items1;
  let mutualFriends;
  let mutualGuilds;
  let num;
  let obj12;
  let tmp11;
  let tmp11Result;
  let tmp12;
  user = user.user;
  ({ guildId: importDefault, onPressMutualFriend: dependencyMap, onPressMutualGuild: _slicedToArray } = user);
  react = undefined;
  const section = user.section;
  const tmp = closure_11();
  let obj = react;
  [first, react] = react.useState(0);
  ({ mutualFriends, mutualGuilds } = useUserProfileMutualsDefault(user));
  useUserProfileMutualsDefault(user);
  const obj2 = { pageWidth: first, defaultIndex: num, items };
  num = 0;
  const useSegmentedControlState = user(8980).useSegmentedControlState;
  user(8980);
  if (section === UserProfileSections.MUTUAL_GUILDS) {
    num = 1;
  }
  let length;
  const tmp4Result = getMutualFriendsLabelDefault;
  if (mutualFriends != null) {
    length = mutualFriends.length;
  }
  const obj3 = { id: "mutual-friends", label: tmp4Result(length), page: tmp12 };
  if (null == mutualFriends) {
    const obj4 = { style: tmp.loadingState, children: closure_9(closure_6, {}) };
    tmp12 = closure_9(closure_5, obj4);
    tmp11 = closure_9;
  } else if (0 === mutualFriends.length) {
    const obj5 = { style: tmp.emptyState, children: closure_9(user(14173).NoMutualFriends, {}) };
    tmp12 = closure_9(closure_5, obj5);
    tmp11 = closure_9;
  } else {
    tmp11 = closure_9;
    const obj6 = {
      data: mutualFriends,
      keyExtractor(user) {
          return user.user.id;
        },
      renderItem(start) {
          const item = start.item;
          const obj = {
            mutualFriend: item,
            guildId,
            onPress() {
              return dependencyMap(item.user.id);
            },
            start: start.start,
            end: start.end
          };
          return closure_1_9(MutualFriendRow, obj);
        }
    };
    tmp12 = closure_9(tmp7(11411).UserProfileStackedActionSheetList, obj6);
  }
  items = [obj3, ];
  let length1;
  const tmp4Result3 = getMutualGuildsLabelDefault;
  if (mutualGuilds != null) {
    length1 = mutualGuilds.length;
  }
  const obj7 = { id: "mutual-guilds", label: tmp4Result3(length1), page: tmp11Result };
  if (null == mutualGuilds) {
    const obj8 = { style: tmp.loadingState, children: tmp11(closure_6, {}) };
    tmp11Result = tmp11(closure_5, obj8);
  } else if (0 === mutualGuilds.length) {
    const obj9 = { style: tmp.emptyState, children: tmp11(user(14167).NoMutualServers, {}) };
    tmp11Result = tmp11(closure_5, obj9);
  } else {
    const obj10 = {
      data: mutualGuilds,
      keyExtractor(guild) {
          return guild.guild.id;
        },
      renderItem(start) {
          const item = start.item;
          const obj = {
            user: item,
            mutualGuild: item,
            onPress() {
              return _slicedToArray(item.guild.id);
            },
            start: start.start,
            end: start.end
          };
          return closure_1_9(MutualGuildRow, obj);
        }
    };
    tmp11Result = tmp11(tmp7(11411).UserProfileStackedActionSheetList, obj10);
  }
  items[1] = obj7;
  const segmentedControlState = useSegmentedControlState(obj2);
  const callback = obj.useCallback((nativeEvent) => {
    closure_4(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj11 = { scrollable: true, title: intl.string(user(1113).t["l2/aLi"]), children: closure_10(closure_5, obj12) };
  const tmp4Result4 = UserProfileStackedActionSheetDefault;
  intl = tmp7(1113).intl;
  obj12 = { style: tmp.container, onLayout: callback, children: items1 };
  items1 = [, ];
  const obj13 = { children: tmp11(user(12511).Tabs, { state: segmentedControlState }) };
  items1[0] = tmp11(closure_5, obj13);
  items1[1] = tmp11(user(14177).SegmentedControlPages, { state: segmentedControlState });
  return tmp11(tmp4Result4, obj11);
};
export { MutualGuildRow };
