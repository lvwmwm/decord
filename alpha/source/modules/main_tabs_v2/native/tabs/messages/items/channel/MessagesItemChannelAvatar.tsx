// Module ID: 18036
// Function ID: 18037
// Name: MessagesItemChannelAvatar
// Dependencies: [19, 5010, 502, 5756, 13679, 1384, 11027, 21, 5009, 575, 1188, 504, 10779, 2]

// Module 18036 (MessagesItemChannelAvatar)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10779 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11027 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import PresenceStore from "PresenceStore" /* 5756 */;
import TypingStore from "TypingStore" /* 13679 */;
import UserStore from "UserStore" /* 1384 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const MUTED_OPACITY_CONTENT = RedesignChannelListConstants.MUTED_OPACITY_CONTENT;
const jsx = Fragment.jsx;
let closure_10 = createStyles.createStyles((arg0) => {
  let num;
  const avatar = { borderRadius: nativeDefault.radii.round, marginRight: nativeDefault.modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_MARGIN_END, width: nativeDefault.modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_SIZE, height: nativeDefault.modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_SIZE, opacity: num };
  num = 1;
  const tmp = arg0;
  if (tmp) {
    num = MUTED_OPACITY_CONTENT;
  }
  return { avatar };
});
const memoResult = react.memo(function MessagesItemChannelAvatar(channel) {
  let blocked;
  let channelSelected;
  let closure_2;
  let isStreaming;
  let muted;
  let status;
  let tmp11Result;
  let tmp12;
  channel = channel.channel;
  ({ hasUnreadMessages: importDefault, muted, status } = channel);
  dependencyMap = undefined;
  let stateFromStores;
  ({ channelSelected, isStreaming, blocked } = channel);
  let tmp = closure_10;
  if (!muted) {
    muted = channel.ignored;
  }
  if (!muted) {
    muted = blocked;
  }
  if (muted) {
    muted = !channelSelected;
  }
  const tmpResult = tmp(muted);
  let tmp3 = channel;
  const REFRESH_MEDIUM_32 = channel(1188).AvatarSizes.REFRESH_MEDIUM_32;
  dependencyMap = AuthenticationStore.getId();
  let obj = channel(504);
  const items = [TypingStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    const typingUsers = TypingStore.getTypingUsers(channel.id);
    for (const key10007 in typingUsers) {
      if (key10007 === closure_2) {
        continue;
      } else {
        let flag = true;
        return true;
      }
    }
    return false;
  });
  const items1 = [stateFromStores];
  const obj2 = channel(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let tmp = !AccessibilityStore.useReducedMotion;
    if (tmp) {
      tmp = stateFromStores || importDefault;
    }
    return tmp;
  });
  const items2 = [UserStore];
  const obj3 = channel(504);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    const getUser = UserStore.getUser;
    let recipientId;
    const obj = channel;
    if (true === channel.isDM()) {
      recipientId = obj.getRecipientId();
    }
    return getUser(recipientId);
  });
  const items3 = [PresenceStore];
  const obj5 = channel(504);
  const stateFromStores3 = obj5.useStateFromStores(items3, () => {
    let isMobileOnlineResult = channel.isDM();
    const obj = channel;
    if (isMobileOnlineResult) {
      isMobileOnlineResult = PresenceStore.isMobileOnline(obj.getRecipientId());
    }
    return isMobileOnlineResult;
  });
  const items4 = [PresenceStore];
  const obj6 = channel(504);
  const stateFromStores4 = obj6.useStateFromStores(items4, () => {
    let isVROnlineResult = channel.isDM();
    const obj = channel;
    if (isVROnlineResult) {
      isVROnlineResult = PresenceStore.isVROnline(obj.getRecipientId());
    }
    return isVROnlineResult;
  });
  if (channel.isGroupDM()) {
    tmp11Result = jsx(GroupDMAvatarDefault, { status, size: REFRESH_MEDIUM_32, channel, animate: stateFromStores1, style: tmpResult.avatar });
  } else {
    tmp11Result = null;
    if (null != stateFromStores2) {
      const obj7 = { user: stateFromStores2, avatarDecoration: stateFromStores2.avatarDecoration, guildId: "e", isMobileOnline: stateFromStores3, isVROnline: stateFromStores4, status: tmp12, streaming: isStreaming, style: tmpResult.avatar, size: REFRESH_MEDIUM_32, animate: stateFromStores1, typing: stateFromStores, autoStatusCutout: true };
      const Avatar = tmp3(1188).Avatar;
      tmp12 = null;
      const tmp11 = jsx;
      if (!stateFromStores2.isSystemUser()) {
        tmp12 = status;
      }
      tmp11Result = tmp11(Avatar, obj7);
    }
  }
  return tmp11Result;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelAvatar.tsx");

export default memoResult;
