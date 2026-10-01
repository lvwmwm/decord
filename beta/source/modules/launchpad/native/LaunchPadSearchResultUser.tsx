// Module ID: 16818
// Function ID: 16819
// Name: LaunchPadSearchResultUser
// Dependencies: [19, 4825, 2112, 2045, 4876, 11447, 5017, 1074, 5018, 21, 4836, 576, 16479, 4849, 5288, 504, 11, 7055, 16807, 5435, 16480, 16808, 1177, 7705, 16482, 4678, 9568, 7304, 16809, 15980, 14864, 2]

// Module 16818 (LaunchPadSearchResultUser)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4849 */;
import ReadStateConstants from "ReadStateConstants" /* 5018 */;
import isStreamingDefault from "isStreaming" /* 7705 */;
import useChannelUnreadBadgeState from "useChannelUnreadBadgeState" /* 15980 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 16479 */;
import renderChannelWrapperDefault from "renderChannelWrapper" /* 16480 */;
import renderChannelContentDefault from "renderChannelContent" /* 16482 */;
import renderChannelPressableWrapperDefault from "renderChannelPressableWrapper" /* 16807 */;
import UnreadBadgeDefault from "UnreadBadge" /* 16808 */;
import renderChannelBadgeDefault from "renderChannelBadge" /* 16809 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import TypingStore from "TypingStore" /* 11447 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_12;
let closure_14;
let map1;
let obj2;
function UserResult(user) {
  let activities;
  let channel;
  let comparator;
  let isMobileOnline;
  let isVROnline;
  let items4;
  let lastMessage;
  let locale;
  let obj10;
  let tmp14Result;
  let tmp16;
  let tmp17;
  let tmp19;
  let tmp21;
  let tmp2Result6;
  let unread;
  let useReducedMotion;
  user = user.user;
  ({ comparator, channel, lastMessage, unread } = user);
  if (unread === undefined) {
    unread = false;
  }
  let num = user.mentionCount;
  if (num === undefined) {
    num = 0;
  }
  let flag = user.muted;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = user.isTyping;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = closure_15();
  const tmp4 = getLayoutStylesDefault();
  let items = [user.id];
  const callback = react.useCallback(() => {
    let items;
    const obj2 = { recipientIds: items };
    items = [user.id];
    const obj = ChannelActionCreatorsDefault;
    obj.openPrivateChannel(obj2);
  }, items);
  let obj = user(5288);
  const fontScale = obj.useFontScale();
  let obj2 = user(504);
  const items1 = [LocaleStore];
  const stateFromStores = obj2.useStateFromStores(items1, () => locale.locale);
  const items2 = [AccessibilityStore];
  const obj3 = user(504);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  const items3 = [PresenceStore];
  const obj4 = user(504);
  const stateFromStoresObject = obj4.useStateFromStoresObject(items3, () => {
    const obj = { isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id), status: PresenceStore.getStatus(user.id), activities: PresenceStore.getActivities(user.id) };
    return obj;
  });
  const status = stateFromStoresObject.status;
  let extractTimestampResult;
  ({ isMobileOnline, isVROnline, activities } = stateFromStoresObject);
  if (null != lastMessage) {
    const tmp2Result = SnowflakeUtilsDefault;
    extractTimestampResult = tmp2Result.extractTimestamp(lastMessage.id);
  }
  let relativeTimestamp = null;
  if (null != extractTimestampResult) {
    const tmp6Result = user(7055);
    relativeTimestamp = tmp6Result.getRelativeTimestamp(extractTimestampResult);
  }
  let str = "text-muted";
  if (unread) {
    str = "text-muted";
    if (!flag) {
      str = "text-default";
    }
  }
  const obj5 = { onPress: callback, underlayColor: tmp.pressableUnderlayColor.backgroundColor, style: items4, children: tmp2Result6(tmp16(tmp17, obj10), { fontScale }) };
  items4 = [tmp.pressable, { borderRadius: tmp4.container.borderRadius }];
  const tmp2Result5 = renderChannelPressableWrapperDefault;
  const PressableHighlight = tmp6(5435).PressableHighlight;
  const items5 = [, , ];
  const obj6 = { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES };
  tmp2Result6 = renderChannelWrapperDefault;
  items5[0] = closure_12(UnreadBadgeDefault, obj6);
  const obj7 = { user, guildId: "e", isMobileOnline, isVROnline, status: tmp19, streaming: isStreamingDefault(activities), style: tmp4.icon.margin, size: tmp4.icon.avatarSize, animate: tmp21, typing: flag2, autoStatusCutout: true };
  const Avatar = tmp6(1177).Avatar;
  tmp19 = null;
  tmp16 = closure_14;
  tmp17 = closure_13;
  const tmp18 = UnreadSetting;
  if (!user.isSystemUser()) {
    tmp19 = null;
    if (status !== StatusTypes.OFFLINE) {
      tmp19 = status;
    }
  }
  tmp21 = !stateFromStores1;
  if (tmp21) {
    tmp21 = flag2 || unread;
  }
  items5[1] = closure_12(Avatar, obj7);
  const tmp2Result7 = renderChannelContentDefault;
  if (comparator == null) {
    const tmp2Result8 = UserUtilsDefault;
    comparator = tmp2Result8.getUserTag(user);
  }
  const obj8 = { name: comparator, subtitle: tmp14Result, unread, resolvedUnreadSetting: tmp18.ALL_MESSAGES, muted: flag, lastMessageTimestampString: relativeTimestamp, mentionCount: num, mentionBadge: renderChannelBadgeDefault({ mentionCount: num, locale: stateFromStores }) };
  tmp14Result = undefined;
  if (null != lastMessage) {
    if (null != channel) {
      const obj9 = { channel, message: lastMessage, color: str, muted: flag, layout: user(7304).ChannelListLayoutTypes.COMPACT };
      const ChannelRowPreview = tmp6(9568).ChannelRowPreview;
      tmp14Result = tmp14(ChannelRowPreview, obj9);
    }
  }
  obj10 = { children: items5 };
  items5[2] = tmp2Result7(obj8);
  return tmp2Result5(closure_12(PressableHighlight, obj5));
}
function UserResultWithChannel(arg0) {
  let channel;
  let id;
  let mentionCount;
  let tmp4;
  let unread;
  ({ user: require, channel } = arg0);
  const items = [UserGuildSettingsStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.isChannelMuted(undefined, channel.id));
  const obj2 = useChannelUnreadBadgeState;
  const baseChannelUnreadBadgeState = obj2.useBaseChannelUnreadBadgeState(channel, stateFromStores);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  const items1 = [TypingStore];
  const obj3 = get_initialized;
  const stateFromStores1 = obj3.useStateFromStores(items1, () => TypingStore.isTyping(channel.id, require.id));
  const obj4 = { channel, lastMessage: tmp4, unread, mentionCount, muted: stateFromStores, isTyping: stateFromStores1 };
  tmp4 = channel(14864)(channel, { unread });
  const merged = Object.assign(arg0);
  return closure_12(UserResult, obj4);
}
const StatusTypes = Constants.StatusTypes;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let obj = { pressable: { flex: 1 }, pressableUnderlayColor: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
let closure_15 = createStyles.createStyles(obj);
const memoResult = react.memo((user) => {
  let tmp7;
  user = user.user;
  const items = [ChannelStore];
  const obj = user(504);
  let closure_1 = obj.useStateFromStores(items, () => ChannelStore.getDMFromUserId(user.id));
  const items1 = [ChannelStore];
  const obj2 = user(504);
  const stateFromStores = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(closure_1));
  if (null != stateFromStores) {
    const obj3 = { channel: stateFromStores };
    const merged = Object.assign(user);
    tmp7 = closure_12(UserResultWithChannel, obj3);
  } else {
    const obj4 = {};
    const merged1 = Object.assign(user);
    tmp7 = closure_12(UserResult, obj4);
  }
  return tmp7;
});
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadSearchResultUser.tsx");

export default memoResult;
