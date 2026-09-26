// Module ID: 13348
// Function ID: 13349
// Name: UserProfileActivityVoiceChannelUsers
// Dependencies: [19, 4828, 21, 8517, 504, 5854, 4940, 1177, 11447, 1115, 2]
// Exports: default

// Module 13348 (UserProfileActivityVoiceChannelUsers)
import util from "util" /* 1115 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4940 */;
import UserProfileStackedActionSheet from "UserProfileStackedActionSheet" /* 11447 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 4828 */;

const UserProfileStackedActionSheetDefault = UserProfileStackedActionSheet;

require = fn;
function UserRow(user) {
  user = user.user;
  const channel = user.channel;
  ({ onPress, start, end } = user);
  const avatarDecoration = user(8517).useAvatarDecoration(user, channel.guild_id);
  const obj = user(8517);
  const items = [PresenceStore];
  const stateFromStoresObject = user(504).useStateFromStoresObject(items, () => ({ status: PresenceStore.getStatus(user.id), isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id) }));
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  const obj3 = { onPress, label: null, icon: null, start: null, end: null };
  const obj2 = user(504);
  obj3.label = NicknameUtilsDefault.getName(channel.guild_id, channel.id, user);
  obj3.icon = jsx(user(1177).Avatar, { user, avatarDecoration, size: user(1177).AvatarSizes.REFRESH_MEDIUM_32, guildId: channel.guild_id, status, isMobileOnline, isVROnline, autoStatusCutout: true });
  obj3.start = start;
  obj3.end = end;
  return jsx(user(5854).TableRow, { onPress, label: null, icon: null, start: null, end: null });
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityVoiceChannelUsers.tsx");

export default function UserProfileActivityVoiceChannelUsers(arg0) {
  ({ channel: require, onPressUser: importDefault } = arg0);
  ({ users, onBack } = arg0);
  const obj = { title: null, onBack: null, scrollable: true, children: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["3xHUJ+"]);
  obj.onBack = onBack;
  obj.children = jsx(UserProfileStackedActionSheet.UserProfileStackedActionSheetList, {
    data: users,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(start) {
      const item = start.item;
      return <UserRow key={item.id} user={item} channel={item} onPress={function onPress() {
        return importDefault(item.id);
      }} start={arg0.start} end={arg0.end} />;
    }
  });
  return jsx(UserProfileStackedActionSheetDefault, { title: null, onBack: null, scrollable: true, children: null });
};
