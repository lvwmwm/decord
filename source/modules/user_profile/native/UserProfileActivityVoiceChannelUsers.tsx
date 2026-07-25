// Module ID: 11951
// Function ID: 92415
// Name: UserRow
// Dependencies: [31, 4218, 33, 9018, 566, 5164, 4320, 1273, 11633, 1212, 2]
// Exports: default

// Module 11951 (UserRow)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
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
  let obj = user(9018);
  const avatarDecoration = obj.useAvatarDecoration(user, channel.guild_id);
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = user(566).useStateFromStoresObject(items, () => ({ status: outer1_3.getStatus(user.id), isMobileOnline: outer1_3.isMobileOnline(user.id), isVROnline: outer1_3.isVROnline(user.id) }));
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  obj = { onPress };
  const obj2 = user(566);
  obj.label = importDefault(4320).getName(channel.guild_id, channel.id, user);
  obj = { user, avatarDecoration, size: user(1273).AvatarSizes.REFRESH_MEDIUM_32, guildId: channel.guild_id, status, isMobileOnline, isVROnline, autoStatusCutout: true };
  obj.icon = jsx(user(1273).Avatar, { user, avatarDecoration, size: user(1273).AvatarSizes.REFRESH_MEDIUM_32, guildId: channel.guild_id, status, isMobileOnline, isVROnline, autoStatusCutout: true });
  obj.start = start;
  obj.end = end;
  return jsx(user(5164).TableRow, { user, avatarDecoration, size: user(1273).AvatarSizes.REFRESH_MEDIUM_32, guildId: channel.guild_id, status, isMobileOnline, isVROnline, autoStatusCutout: true });
}
const result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfileActivityVoiceChannelUsers.tsx");

export default function UserProfileActivityVoiceChannelUsers(arg0) {
  let importDefault;
  let onBack;
  let require;
  let users;
  ({ channel: require, onPressUser: importDefault } = arg0);
  ({ users, onBack } = arg0);
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["3xHUJ+"]);
  obj.onBack = onBack;
  obj.scrollable = true;
  obj = {
    data: users,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(item) {
      item = item.item;
      return outer1_4(outer1_5, {
        user: item,
        channel: item,
        onPress() {
          return outer1_1(item.id);
        },
        start: item.start,
        end: item.end
      }, item.id);
    }
  };
  obj.children = jsx(require(11633) /* UserProfileStackedActionSheet */.UserProfileStackedActionSheetList, {
    data: users,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(item) {
      item = item.item;
      return outer1_4(outer1_5, {
        user: item,
        channel: item,
        onPress() {
          return outer1_1(item.id);
        },
        start: item.start,
        end: item.end
      }, item.id);
    }
  });
  return jsx(importDefault(11633), {
    data: users,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(item) {
      item = item.item;
      return outer1_4(outer1_5, {
        user: item,
        channel: item,
        onPress() {
          return outer1_1(item.id);
        },
        start: item.start,
        end: item.end
      }, item.id);
    }
  });
};
