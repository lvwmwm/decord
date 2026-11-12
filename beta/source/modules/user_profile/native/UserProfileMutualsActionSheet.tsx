// Module ID: 14462
// Function ID: 14463
// Name: UserProfileMutualsActionSheet
// Dependencies: [19, 17, 5922, 8858, 21, 5170, 575, 6941, 504, 7071, 1187, 6205, 10896, 7053, 5783, 9102, 14456, 9092, 14463, 14464, 11585, 14457, 14458, 1113, 12374, 14468, 2]
// Exports: default

// Module 14462 (UserProfileMutualsActionSheet)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6205 */;
import GuildIcon from "GuildIcon" /* 7053 */;
import TableRow2 from "TableRow" /* 7071 */;
import Constants from "Constants" /* 8858 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 9102 */;
import ActivityStatusDefault from "ActivityStatus" /* 10896 */;
import UserProfileStackedActionSheetDefault from "UserProfileStackedActionSheet" /* 11585 */;
import useUserProfileMutualsDefault from "useUserProfileMutuals" /* 14456 */;
import getMutualGuildsLabelDefault from "getMutualGuildsLabel" /* 14457 */;
import getMutualFriendsLabelDefault from "getMutualFriendsLabel" /* 14463 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import PresenceStore from "PresenceStore" /* 5922 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
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
  const tmp = closure_9();
  let obj = user(6941);
  const avatarDecoration = obj.useAvatarDecoration(user);
  const items = [PresenceStore];
  const obj2 = user(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { status: PresenceStore.getStatus(user.id), isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id) };
    return obj;
  });
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  const obj3 = { onPress, icon: closure_7(Avatar, obj4), label: obj5.getName(guildId, undefined, user), subLabel: closure_7(ActivityStatusDefault, obj6), start, end };
  const TableRow = user(7071).TableRow;
  obj4 = { user, size: user(1187).AvatarSizes.REFRESH_MEDIUM_32, avatarDecoration, status, guildId, isMobileOnline, isVROnline, autoStatusCutout: true };
  Avatar = user(1187).Avatar;
  obj5 = NicknameUtilsDefault;
  obj6 = { userId: user.id, guildId, textStyle: tmp.activityStatusText };
  return closure_7(TableRow, obj3, user.id);
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
    const tmp = closure_9();
    const hasAvatarForGuildResult = user.hasAvatarForGuild(guild.id);
    const obj = { onPress, icon: metroImportDefault(tmp6, obj2), label: guild.name, subLabel: tmp7(tmp8, obj3), start, end };
    const TableRow = TableRow2.TableRow;
    obj2 = { guild, size: GuildIcon.GuildIconSizes.SMALL_32 };
    let tmp3Result = hasAvatarForGuildResult;
    obj3 = { style: tmp.mutualGuildSubLabel, children: items };
    tmp6 = GuildIconDefault;
    tmp7 = metroImportAll;
    tmp8 = _false;
    if (hasAvatarForGuildResult) {
      const obj4 = { size: native.AvatarSizes.SIZE_16, user, guildId: guild.id };
      const Avatar = tmp4(1187).Avatar;
      tmp3Result = tmp3(Avatar, obj4);
    }
    items = [tmp3Result, , ];
    let tmp3Result3 = null != nick;
    if (tmp3Result3) {
      const obj5 = { variant: "body-xs/medium", color: "text-subtle", children: nick };
      tmp3Result3 = tmp3(tmp4(5783).Text, obj5);
    }
    items[1] = tmp3Result3;
    let tmp3Result4 = null == nick && hasAvatarForGuildResult;
    if (tmp3Result4) {
      const obj6 = { variant: "body-xs/medium", color: "text-subtle", children: user.username };
      tmp3Result4 = tmp3(tmp4(5783).Text, obj6);
    }
    items[2] = tmp3Result4;
    return metroImportDefault(TableRow, obj, guild.id);
  }
}
({ View: c3, ActivityIndicator: closure_4 } = react_native);
const UserProfileSections = Constants.UserProfileSections;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, loadingState: obj3, emptyState: { alignItems: "center" }, activityStatusText: obj4, mutualGuildSubLabel: obj5 };
obj2 = { flex: 1, gap: 20, paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_8, alignItems: "center" };
obj4 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const React4 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualsActionSheet.tsx");

export default function UserProfileMutualsActionSheet(user) {
  let closure_3;
  let guildId;
  let intl;
  let items;
  let items1;
  let mutualFriends;
  let mutualGuilds;
  let num2;
  let obj11;
  let onLayout;
  let ref;
  let tmp10;
  let tmp10Result;
  let tmp11;
  user = user.user;
  ({ guildId: importDefault, onPressMutualFriend: dependencyMap, onPressMutualGuild: closure_3 } = user);
  const section = user.section;
  const tmp = closure_9();
  const tmp4 = useMeasuredLayoutDefault();
  const width = tmp4.width;
  let num = 0;
  ({ ref, onLayout } = tmp4);
  if (undefined !== width) {
    num = width;
  }
  ({ mutualFriends, mutualGuilds } = useUserProfileMutualsDefault(user));
  useUserProfileMutualsDefault(user);
  let obj = { pageWidth: num, defaultIndex: num2, items };
  num2 = 0;
  const useSegmentedControlState = user(9092).useSegmentedControlState;
  user(9092);
  if (section === UserProfileSections.MUTUAL_GUILDS) {
    num2 = 1;
  }
  let length;
  const tmp2Result = getMutualFriendsLabelDefault;
  if (mutualFriends != null) {
    length = mutualFriends.length;
  }
  const obj2 = { id: "mutual-friends", label: tmp2Result(length), page: tmp11 };
  if (null == mutualFriends) {
    const obj3 = { style: tmp.loadingState, children: closure_7(closure_4, {}) };
    tmp11 = closure_7(closure_3, obj3);
    tmp10 = closure_7;
  } else if (0 === mutualFriends.length) {
    const obj4 = { style: tmp.emptyState, children: closure_7(user(14464).NoMutualFriends, {}) };
    tmp11 = closure_7(closure_3, obj4);
    tmp10 = closure_7;
  } else {
    tmp10 = closure_7;
    const obj5 = {
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
          return closure_1_7(MutualFriendRow, obj);
        }
    };
    tmp11 = closure_7(tmp6(11585).UserProfileStackedActionSheetList, obj5);
  }
  items = [obj2, ];
  let length1;
  const tmp2Result3 = getMutualGuildsLabelDefault;
  if (mutualGuilds != null) {
    length1 = mutualGuilds.length;
  }
  const obj6 = { id: "mutual-guilds", label: tmp2Result3(length1), page: tmp10Result };
  if (null == mutualGuilds) {
    const obj7 = { style: tmp.loadingState, children: tmp10(closure_4, {}) };
    tmp10Result = tmp10(closure_3, obj7);
  } else if (0 === mutualGuilds.length) {
    const obj8 = { style: tmp.emptyState, children: tmp10(user(14458).NoMutualServers, {}) };
    tmp10Result = tmp10(closure_3, obj8);
  } else {
    const obj9 = {
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
              return closure_3(item.guild.id);
            },
            start: start.start,
            end: start.end
          };
          return closure_1_7(MutualGuildRow, obj);
        }
    };
    tmp10Result = tmp10(tmp6(11585).UserProfileStackedActionSheetList, obj9);
  }
  items[1] = obj6;
  const segmentedControlState = useSegmentedControlState(obj);
  const obj10 = { scrollable: true, title: intl.string(user(1113).t["l2/aLi"]), children: closure_8(closure_3, obj11) };
  const tmp2Result4 = UserProfileStackedActionSheetDefault;
  intl = tmp6(1113).intl;
  obj11 = { style: tmp.container, ref, onLayout, children: items1 };
  items1 = [, ];
  const obj12 = { children: tmp10(user(12374).Tabs, { state: segmentedControlState }) };
  items1[0] = tmp10(closure_3, obj12);
  items1[1] = tmp10(user(14468).SegmentedControlPages, { state: segmentedControlState });
  return tmp10(tmp2Result4, obj10);
};
export { MutualGuildRow };
