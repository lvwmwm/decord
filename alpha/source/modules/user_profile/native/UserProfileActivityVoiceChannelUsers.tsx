// Module ID: 15084
// Function ID: 15085
// Name: UserProfileActivityVoiceChannelUsers
// Dependencies: [19, 5917, 21, 6933, 504, 7063, 6199, 1187, 11571, 1113, 2]
// Exports: default

// Module 15084 (UserProfileActivityVoiceChannelUsers)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6199 */;
import UserProfileStackedActionSheetDefault from "UserProfileStackedActionSheet" /* 11571 */;
import react from "react" /* 19 */;
import PresenceStore from "PresenceStore" /* 5917 */;
import size from "module_2" /* 2 */;

function UserRow(user) {
  let end;
  let isMobileOnline;
  let isVROnline;
  let onPress;
  let start;
  let status;
  user = user.user;
  const channel = user.channel;
  ({ onPress, start, end } = user);
  let obj = user(6933);
  const avatarDecoration = obj.useAvatarDecoration(user, channel.guild_id);
  const items = [PresenceStore];
  const obj2 = user(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { status: PresenceStore.getStatus(user.id), isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id) };
    return obj;
  });
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  const TableRow = user(7063).TableRow;
  const obj4 = NicknameUtilsDefault;
  ({ user, avatarDecoration, size: user(1187).AvatarSizes.REFRESH_MEDIUM_32, guildId: channel.guild_id, status, isMobileOnline, isVROnline, autoStatusCutout: true });
  const Avatar = user(1187).Avatar;
  return <TableRow onPress={onPress} label={obj4.getName(channel.guild_id, channel.id, user)} icon={null} start={start} end={end} />;
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityVoiceChannelUsers.tsx");

export default function UserProfileActivityVoiceChannelUsers(arg0) {
  let onBack;
  let users;
  ({ channel: require, onPressUser: importDefault } = arg0);
  ({ users, onBack } = arg0);
  UserProfileStackedActionSheetDefault;
  const intl = intl2.intl;
  return <tmp title={intl.string(intl2.t["3xHUJ+"])} onBack={onBack} scrollable>{null}</tmp>;
};
