// Module ID: 14776
// Function ID: 111373
// Dependencies: []

// Module 14776
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const MUTED_OPACITY_CONTENT = arg1(dependencyMap[6]).MUTED_OPACITY_CONTENT;
const jsx = arg1(dependencyMap[7]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let closure_10 = arg1(dependencyMap[8]).createStyles((arg0) => {
  let obj = {};
  obj = { borderRadius: importDefault(dependencyMap[9]).radii.round, marginRight: importDefault(dependencyMap[9]).modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_MARGIN_END, width: importDefault(dependencyMap[9]).modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_SIZE, height: importDefault(dependencyMap[9]).modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_SIZE };
  let num = 1;
  if (arg0) {
    num = MUTED_OPACITY_CONTENT;
  }
  obj.opacity = num;
  obj.avatar = obj;
  return obj;
});
const obj2 = arg1(dependencyMap[8]);
const memoResult = importAllResult.memo(function MessagesItemChannelAvatar(channel) {
  let blocked;
  let channelSelected;
  let isStreaming;
  let muted;
  let status;
  channel = channel.channel;
  const arg1 = channel;
  ({ hasUnreadMessages: closure_1, muted, status } = channel);
  let id2;
  let closure_3;
  ({ channelSelected, isStreaming, blocked } = channel);
  if (!muted) {
    muted = channel.ignored;
  }
  if (!muted) {
    muted = blocked;
  }
  if (muted) {
    muted = !channelSelected;
  }
  const tmpResult = closure_10(muted);
  const REFRESH_MEDIUM_32 = arg1(id2[10]).AvatarSizes.REFRESH_MEDIUM_32;
  id2 = id.getId();
  let obj = arg1(id2[11]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const typingUsers = typingUsers.getTypingUsers(channel.id);
    for (const key10007 in typingUsers) {
      let tmp2 = key10007;
      let tmp3 = closure_2;
      if (key10007 === closure_2) {
        continue;
      } else {
        let flag = true;
        return true;
      }
    }
    return false;
  });
  closure_3 = stateFromStores;
  const items1 = [closure_3];
  const stateFromStores1 = arg1(id2[11]).useStateFromStores(items1, () => {
    let tmp = !stateFromStores.useReducedMotion;
    if (tmp) {
      let tmp2 = stateFromStores;
      if (!stateFromStores) {
        tmp2 = closure_1;
      }
      tmp = tmp2;
    }
    return tmp;
  });
  const obj2 = arg1(id2[11]);
  const tmp = closure_10;
  const items2 = [closure_7];
  const stateFromStores2 = arg1(id2[11]).useStateFromStores(items2, () => {
    let recipientId;
    if (true === channel.isDM()) {
      recipientId = channel.getRecipientId();
    }
    return user.getUser(recipientId);
  });
  const obj3 = arg1(id2[11]);
  const items3 = [closure_5];
  const stateFromStores3 = arg1(id2[11]).useStateFromStores(items3, () => {
    const tmp = !channel.isDM();
    let isMobileOnlineResult = !tmp;
    if (!tmp) {
      isMobileOnlineResult = closure_5.isMobileOnline(channel.getRecipientId());
    }
    return isMobileOnlineResult;
  });
  const obj5 = arg1(id2[11]);
  const items4 = [closure_5];
  const stateFromStores4 = arg1(id2[11]).useStateFromStores(items4, () => {
    const tmp = !channel.isDM();
    let isVROnlineResult = !tmp;
    if (!tmp) {
      isVROnlineResult = closure_5.isVROnline(channel.getRecipientId());
    }
    return isVROnlineResult;
  });
  if (channel.isGroupDM()) {
    obj = { status, size: REFRESH_MEDIUM_32, channel, animate: stateFromStores1, style: tmpResult.avatar };
    let tmp9Result = jsx(importDefault(id2[12]), obj);
  } else {
    tmp9Result = null;
    if (null != stateFromStores2) {
      obj = { user: stateFromStores2, avatarDecoration: stateFromStores2.avatarDecoration, guildId: undefined, isMobileOnline: stateFromStores3, isVROnline: stateFromStores4 };
      let tmp12 = null;
      if (!stateFromStores2.isSystemUser()) {
        tmp12 = status;
      }
      obj.status = tmp12;
      obj.streaming = isStreaming;
      obj.style = tmpResult.avatar;
      obj.size = REFRESH_MEDIUM_32;
      obj.animate = stateFromStores1;
      obj.typing = stateFromStores;
      obj.autoStatusCutout = true;
      tmp9Result = jsx(arg1(id2[10]).Avatar, obj);
      const tmp9 = jsx;
    }
  }
  return tmp9Result;
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelAvatar.tsx");

export default memoResult;
