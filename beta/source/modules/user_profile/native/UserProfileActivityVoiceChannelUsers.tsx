// Module ID: 12600
// Function ID: 12601
// Name: UserProfileActivityVoiceChannelUsers
// Dependencies: [19, 4876, 21, 7661, 504, 5917, 4988, 1177, 10613, 1115, 2]
// Exports: default

// Module 12600 (UserProfileActivityVoiceChannelUsers)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4988 */;
import UserProfileStackedActionSheetDefault from "UserProfileStackedActionSheet" /* 10613 */;
import react from "react" /* 19 */;
import PresenceStore from "PresenceStore" /* 4876 */;
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
  let obj = user(7661);
  const avatarDecoration = obj.useAvatarDecoration(user, channel.guild_id);
  const items = [PresenceStore];
  const obj2 = user(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { status: PresenceStore.getStatus(user.id), isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id) };
    return obj;
  });
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  const TableRow = user(5917).TableRow;
  const obj4 = NicknameUtilsDefault;
  ({ user, avatarDecoration, size: user(1177).AvatarSizes.REFRESH_MEDIUM_32, guildId: channel.guild_id, status, isMobileOnline, isVROnline, autoStatusCutout: true });
  const Avatar = user(1177).Avatar;
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
