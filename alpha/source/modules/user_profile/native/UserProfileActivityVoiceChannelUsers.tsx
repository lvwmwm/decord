// Module ID: 14365
// Function ID: 14366
// Name: UserProfileActivityVoiceChannelUsers
// Dependencies: [19, 5532, 21, 6512, 504, 6925, 5824, 1186, 13380, 1112, 2]
// Exports: default

// Module 14365 (UserProfileActivityVoiceChannelUsers)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1112 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5824 */;
import UserProfileStackedActionSheetDefault from "UserProfileStackedActionSheet" /* 13380 */;
import react from "react" /* 19 */;
import PresenceStore from "PresenceStore" /* 5532 */;
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
  let obj = user(6512);
  const avatarDecoration = obj.useAvatarDecoration(user, channel.guild_id);
  const items = [PresenceStore];
  const obj2 = user(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { status: PresenceStore.getStatus(user.id), isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id) };
    return obj;
  });
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  const TableRow = user(6925).TableRow;
  const obj4 = NicknameUtilsDefault;
  ({ user, avatarDecoration, size: user(1186).AvatarSizes.REFRESH_MEDIUM_32, guildId: channel.guild_id, status, isMobileOnline, isVROnline, autoStatusCutout: true });
  const Avatar = user(1186).Avatar;
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
