// Module ID: 11936
// Function ID: 92307
// Name: UserRow
// Dependencies: []
// Exports: default

// Module 11936 (UserRow)
function UserRow(user) {
  let end;
  let isMobileOnline;
  let isVROnline;
  let onPress;
  let start;
  let status;
  user = user.user;
  const arg1 = user;
  const channel = user.channel;
  ({ onPress, start, end } = user);
  let obj = arg1(dependencyMap[3]);
  const avatarDecoration = obj.useAvatarDecoration(user, channel.guild_id);
  const items = [closure_3];
  const stateFromStoresObject = arg1(dependencyMap[4]).useStateFromStoresObject(items, () => ({ status: closure_3.getStatus(user.id), isMobileOnline: closure_3.isMobileOnline(user.id), isVROnline: closure_3.isVROnline(user.id) }));
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  obj = { onPress };
  const obj2 = arg1(dependencyMap[4]);
  obj.label = importDefault(dependencyMap[6]).getName(channel.guild_id, channel.id, user);
  obj = { user, avatarDecoration, size: arg1(dependencyMap[7]).AvatarSizes.REFRESH_MEDIUM_32, guildId: channel.guild_id, status, isMobileOnline, isVROnline, autoStatusCutout: true };
  obj.icon = jsx(arg1(dependencyMap[7]).Avatar, obj);
  obj.start = start;
  obj.end = end;
  return jsx(arg1(dependencyMap[5]).TableRow, obj);
}
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_profile/native/UserProfileActivityVoiceChannelUsers.tsx");

export default function UserProfileActivityVoiceChannelUsers(arg0) {
  let onBack;
  let users;
  ({ channel: closure_0, onPressUser: closure_1 } = arg0);
  ({ users, onBack } = arg0);
  let obj = {};
  const intl = arg1(dependencyMap[9]).intl;
  obj.title = intl.string(arg1(dependencyMap[9]).t.3xHUJ+);
  obj.onBack = onBack;
  obj.scrollable = true;
  obj = {
    data: users,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(item) {
      item = item.item;
      return callback(closure_5, {
        user: item,
        channel: item,
        onPress() {
          return callback(item.id);
        },
        start: item.start,
        end: item.end
      }, item.id);
    }
  };
  obj.children = jsx(arg1(dependencyMap[8]).UserProfileStackedActionSheetList, obj);
  return jsx(importDefault(dependencyMap[8]), obj);
};
