// Module ID: 18751
// Function ID: 18752
// Name: MessagesItemChannelBase
// Dependencies: [19, 17, 6068, 7015, 5248, 5209, 6958, 1388, 21, 5306, 575, 504, 18752, 8576, 1380, 8134, 6063, 10894, 7428, 8418, 1113, 9508, 18753, 5994, 9504, 18754, 8625, 18755, 6069, 2]

// Module 18751 (MessagesItemChannelBase)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import transitionToChannel from "transitionToChannel" /* 6063 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 8134 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10894 */;
import react from "react" /* 19 */;
import PresenceStore from "PresenceStore" /* 6068 */;
import ReadStateStore from "ReadStateStore" /* 7015 */;
import RelationshipStore from "RelationshipStore" /* 5248 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5209 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6958 */;
import UserStore from "UserStore" /* 1388 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let closure_12;
let unpackModuleId;
const View = react_native.View;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles(() => {
  let rect;
  const obj = { pressable: { marginBottom: 1, borderRadius: nativeDefault.radii.md, marginHorizontal: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", flex: 1 }, nameplate: { borderRadius: nativeDefault.radii.md }, rowActive: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE }, selectedBorder: rect, rowSelected: { borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED } };
  ({ marginBottom: 1, borderRadius: nativeDefault.radii.md, marginHorizontal: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", flex: 1 });
  ({ borderRadius: nativeDefault.radii.md });
  ({ backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE });
  rect = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.md };
  ({ borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED });
  return obj;
});
const memoResult = react.memo(function MessagesItemChannelBase(channel) {
  let PressableHighlight;
  let activities;
  let blocked;
  let favorite;
  let ignored;
  let isIncomingCall;
  let isOngoingCall;
  let items13;
  let items15;
  let items16;
  let muted;
  let obj10;
  let obj15;
  let resolvedUnreadSetting;
  let someResult;
  let status;
  let tmp10Result5;
  let tmp25;
  let tmp2Result;
  channel = channel.channel;
  const height = channel.height;
  const isPressed = channel.isPressed;
  const setIsPressed = channel.setIsPressed;
  let closure_6;
  let tmp2 = channel;
  let tmp3 = isPressed;
  let obj = channel(isPressed[11]);
  let items = [SelectedChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    const channelId = SelectedChannelStore.getChannelId(null);
    if (channel != null) {
      id = channel.id;
    }
    return channelId === id;
  });
  const tmp5 = closure_13();
  let closure_5 = tmp5;
  let obj2 = setIsPressed;
  const items1 = [height];
  const items2 = [tmp5, stateFromStores];
  const memo = setIsPressed.useMemo(() => ({ height, overflow: "hidden" }), items1);
  const memo1 = setIsPressed.useMemo(() => {
    const items = [closure_5.pressable, ];
    let rowSelected;
    if (stateFromStores) {
      rowSelected = closure_5.rowSelected;
    }
    items[1] = rowSelected;
    return items;
  }, items2);
  let obj3 = channel(isPressed[11]);
  const items3 = [closure_5];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items3, () => {
    let activities;
    let obj3;
    if (channel.isDM()) {
      activities = PresenceStore.getActivities(obj.getRecipientId());
    }
    if (channel.isDM()) {
      obj3 = { status: PresenceStore.getStatus(channel.getRecipientId()), activities };
      const obj2 = { status: PresenceStore.getStatus(channel.getRecipientId()), activities };
    } else {
      obj3 = { status: "disabled", activities: "isArray" };
    }
    return obj3;
  });
  ({ status, activities } = stateFromStoresObject);
  const items4 = [closure_6];
  const obj4 = channel(isPressed[11]);
  const stateFromStoresObject1 = obj4.useStateFromStoresObject(items4, () => {
    let tmp2;
    const mentionCount = ReadStateStore.getMentionCount(channel.id);
    const obj3 = { mentionCount, hasUnreadMessages: tmp2 };
    tmp2 = mentionCount > 0;
    if (!tmp2) {
      tmp2 = null != channel.getGuildId() && obj.hasUnread(channel.id);
      null != channel.getGuildId() && ReadStateStore.hasUnread(channel.id);
    }
    return obj3;
  });
  const hasUnreadMessages = stateFromStoresObject1.hasUnreadMessages;
  let mentionCount = stateFromStoresObject1.mentionCount;
  ({ isIncomingCall, isOngoingCall } = height(isPressed[12])(channel.id));
  height(isPressed[12])(channel.id);
  const items5 = [UserGuildSettingsStore];
  const obj5 = channel(isPressed[11]);
  const stateFromStoresObject2 = obj5.useStateFromStoresObject(items5, () => {
    const obj = { resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel), muted: UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id), favorite: UserGuildSettingsStore.isMessagesFavorite(channel.id) };
    return obj;
  });
  ({ resolvedUnreadSetting, muted, favorite } = stateFromStoresObject2);
  const items6 = [RelationshipStore];
  const obj6 = channel(isPressed[11]);
  const stateFromStoresObject3 = obj6.useStateFromStoresObject(items6, () => {
    let isBlockedResult;
    const obj2 = { ignored: channel.isDM() && RelationshipStore.isIgnored(obj.getRecipientId()), blocked: isBlockedResult };
    isBlockedResult = obj.isDM() && RelationshipStore.isBlocked(obj.getRecipientId());
    return obj2;
  });
  ({ ignored, blocked } = stateFromStoresObject3);
  const items7 = [UserStore];
  const obj7 = channel(isPressed[11]);
  const stateFromStores1 = obj7.useStateFromStores(items7, () => {
    const getUser = UserStore.getUser;
    let recipientId;
    const obj = channel;
    if (true === channel.isDM()) {
      recipientId = obj.getRecipientId();
    }
    return getUser(recipientId);
  });
  const obj8 = channel(isPressed[13]);
  const nameplate = obj8.useNameplate({ user: stateFromStores1 });
  let tmp16 = null != nameplate;
  if (tmp16) {
    tmp16 = stateFromStores || isPressed;
  }
  closure_6 = tmp16;
  const items8 = [stateFromStores, tmp16, isPressed, tmp5];
  const items9 = [, , ];
  ({ guild_id: arr10[0], id: arr10[1] } = channel);
  items9[2] = setIsPressed;
  const memo2 = obj2.useMemo(() => {
    let tmp = null;
    const obj = PlatformUtils;
    if (obj.isIOS()) {
      let tmp3 = null;
      if (!closure_6) {
        let backgroundColor;
        const tmp4 = isPressed;
        if (tmp4) {
          backgroundColor = closure_5.rowActive.backgroundColor;
        } else if (stateFromStores) {
          backgroundColor = closure_5.rowSelected.backgroundColor;
        }
        tmp3 = backgroundColor;
      }
      tmp = tmp3;
    }
    return tmp;
  }, items8);
  const items10 = [setIsPressed];
  const callback = obj2.useCallback(() => {
    const obj = ChannelActionCreatorsDefault;
    obj.preload(channel.guild_id, channel.id);
    setIsPressed(true);
  }, items9);
  const items11 = [channel.id];
  const callback1 = obj2.useCallback(() => {
    setIsPressed(false);
  }, items10);
  const items12 = [channel.id];
  const callback2 = obj2.useCallback(() => {
    const obj = transitionToChannel;
    obj.transitionToChannel(channel.id);
  }, items11);
  const obj9 = { style: memo, collapsable: false, children: tmp25(PressableHighlight, obj10) };
  const callback3 = obj2.useCallback(() => {
    const obj = openChannelLongPressActionSheet;
    const result = obj.openChannelLongPressActionSheet(channel.id);
  }, items12);
  obj10 = { onPressIn: callback, onPressOut: callback1, onPress: callback2, onLongPress: callback3, accessibilityRole: "button", accessibilityLabel: items13.join(", "), accessibilityHint: tmp2Result.getChannelA11yHint({ channel, muted, userStatus: status }), underlayColor: tmp5.rowActive.backgroundColor, style: memo1, children: items16 };
  PressableHighlight = tmp2(tmp3[18]).PressableHighlight;
  items13 = [height(tmp3[19])({ channel, unread: hasUnreadMessages, mentionCount, isIncomingCall, isOngoingCall, ignored, blocked })];
  tmp25 = closure_12;
  if (favorite) {
    const intl = tmp2(tmp3[20]).intl;
    const items14 = [intl.string(tmp2(tmp3[20]).t.cCPjSK)];
    items15 = items14;
  } else {
    items15 = [];
  }
  HermesBuiltin.arraySpread(items13, items15, 1);
  let tmp28;
  tmp2Result = tmp2(tmp3[19]);
  const tmp10Result = height(tmp3[21]);
  if (tmp16) {
    tmp28 = nameplate;
  }
  items16 = [, , , , ];
  const obj11 = { nameplate: tmp28, isFocused: stateFromStores, isPressed, isMuted: muted || ignored || blocked, fadeIn: isPressed, style: tmp5.nameplate };
  items16[0] = closure_11(tmp10Result, obj11);
  let tmp23Result = stateFromStores;
  if (tmp23Result) {
    const obj12 = { style: tmp5.selectedBorder, pointerEvents: "none" };
    tmp23Result = tmp23(tmp24, obj12);
  }
  items16[1] = tmp23Result;
  const obj13 = { unread: hasUnreadMessages, resolvedUnreadSetting, muted, layout: tmp2(tmp3[23]).ChannelListLayoutTypes.COZY_DRAWER_SMOL, panelVariant: true };
  const tmp10Result4 = height(tmp3[22]);
  items16[2] = closure_11(tmp10Result4, obj13);
  const obj14 = { backgroundColor: memo2, children: closure_11(tmp10Result5, obj15) };
  const CutoutBackgroundProvider = tmp2(tmp3[24]).CutoutBackgroundProvider;
  obj15 = { channel, channelSelected: stateFromStores, hasUnreadMessages, muted, ignored, blocked, isStreaming: height(tmp3[26])(activities), status };
  tmp10Result5 = height(tmp3[25]);
  items16[3] = closure_11(CutoutBackgroundProvider, obj14);
  const obj16 = { channel, channelSelected: stateFromStores, favorite, muted, ignored, blocked, hasActivity: true === someResult, hasUnreadMessages, resolvedUnreadSetting, hasNameplate: tmp16 };
  someResult = undefined;
  const tmp10Result6 = height(tmp3[27]);
  if (activities != null) {
    someResult = activities.some((type) => type.type !== channel(isPressed[28]).ActivityTypes.CUSTOM_STATUS);
  }
  items16[4] = closure_11(tmp10Result6, obj16);
  return closure_11(stateFromStores, obj9);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelBase.tsx");

export default memoResult;
export const MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING = 1;
