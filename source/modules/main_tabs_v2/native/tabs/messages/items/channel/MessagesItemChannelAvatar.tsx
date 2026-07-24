// Module ID: 14950
// Function ID: 113939
// Dependencies: [31, 4122, 1194, 4217, 11135, 1849, 10289, 33, 4130, 689, 1273, 566, 9134, 2]

// Module 14950
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { MUTED_OPACITY_CONTENT } from "hairlineWidth";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let closure_10 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { borderRadius: importDefault(689).radii.round, marginRight: importDefault(689).modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_MARGIN_END, width: importDefault(689).modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_SIZE, height: importDefault(689).modules.mobile.MESSAGES_ITEM_CHANNEL_AVATAR_SIZE };
  let num = 1;
  if (arg0) {
    num = MUTED_OPACITY_CONTENT;
  }
  obj.opacity = num;
  obj.avatar = obj;
  return obj;
});
const memoResult = require("result").memo(function MessagesItemChannelAvatar(channel) {
  let blocked;
  let channelSelected;
  let importDefault;
  let isStreaming;
  let muted;
  let status;
  channel = channel.channel;
  ({ hasUnreadMessages: importDefault, muted, status } = channel);
  let dependencyMap;
  let stateFromStores;
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
  const REFRESH_MEDIUM_32 = channel(1273).AvatarSizes.REFRESH_MEDIUM_32;
  dependencyMap = id.getId();
  let obj = channel(566);
  const items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => {
    const typingUsers = outer1_6.getTypingUsers(channel.id);
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
  const items1 = [stateFromStores];
  const stateFromStores1 = channel(566).useStateFromStores(items1, () => {
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
  const obj2 = channel(566);
  let tmp = closure_10;
  const items2 = [closure_7];
  const stateFromStores2 = channel(566).useStateFromStores(items2, () => {
    let recipientId;
    if (true === channel.isDM()) {
      recipientId = channel.getRecipientId();
    }
    return outer1_7.getUser(recipientId);
  });
  const obj3 = channel(566);
  const items3 = [closure_5];
  const stateFromStores3 = channel(566).useStateFromStores(items3, () => {
    const tmp = !channel.isDM();
    let isMobileOnlineResult = !tmp;
    if (!tmp) {
      isMobileOnlineResult = outer1_5.isMobileOnline(channel.getRecipientId());
    }
    return isMobileOnlineResult;
  });
  const obj5 = channel(566);
  const items4 = [closure_5];
  const stateFromStores4 = channel(566).useStateFromStores(items4, () => {
    const tmp = !channel.isDM();
    let isVROnlineResult = !tmp;
    if (!tmp) {
      isVROnlineResult = outer1_5.isVROnline(channel.getRecipientId());
    }
    return isVROnlineResult;
  });
  if (channel.isGroupDM()) {
    obj = { status, size: REFRESH_MEDIUM_32, channel, animate: stateFromStores1, style: tmpResult.avatar };
    let tmp9Result = jsx(importDefault(9134), { status, size: REFRESH_MEDIUM_32, channel, animate: stateFromStores1, style: tmpResult.avatar });
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
      tmp9Result = jsx(channel(1273).Avatar, { user: stateFromStores2, avatarDecoration: stateFromStores2.avatarDecoration, guildId: undefined, isMobileOnline: stateFromStores3, isVROnline: stateFromStores4 });
      const tmp9 = jsx;
    }
  }
  return tmp9Result;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelAvatar.tsx");

export default memoResult;
