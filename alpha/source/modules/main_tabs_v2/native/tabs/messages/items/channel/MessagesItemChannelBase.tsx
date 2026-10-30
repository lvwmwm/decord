// Module ID: 18033
// Function ID: 18034
// Name: MessagesItemChannelBase
// Dependencies: [19, 17, 5756, 6836, 4951, 4912, 6769, 1384, 21, 5009, 575, 504, 18034, 8781, 1376, 7479, 5751, 10782, 6974, 9066, 9492, 18035, 5687, 9488, 18036, 8823, 18037, 5757, 2]

// Module 18033 (MessagesItemChannelBase)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import transitionToChannel from "transitionToChannel" /* 5751 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7479 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10782 */;
import react from "react" /* 19 */;
import PresenceStore from "PresenceStore" /* 5756 */;
import ReadStateStore from "ReadStateStore" /* 6836 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6769 */;
import UserStore from "UserStore" /* 1384 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
  let muted;
  let obj10;
  let obj15;
  let resolvedUnreadSetting;
  let someResult;
  let status;
  let tmp24;
  let tmp9Result5;
  let tmpResult;
  channel = channel.channel;
  const height = channel.height;
  const isPressed = channel.isPressed;
  const setIsPressed = channel.setIsPressed;
  let closure_6;
  let tmp = channel;
  let tmp2 = isPressed;
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
  let tmp4 = closure_13();
  let closure_5 = tmp4;
  let obj2 = setIsPressed;
  const items1 = [height];
  const items2 = [tmp4, stateFromStores];
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
      obj3 = { status: "color", activities: "Error" };
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
  let tmp15 = null != nameplate;
  if (tmp15) {
    tmp15 = stateFromStores || isPressed;
  }
  closure_6 = tmp15;
  const items8 = [stateFromStores, tmp15, isPressed, tmp4];
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
  const obj9 = { style: memo, collapsable: false, children: tmp24(PressableHighlight, obj10) };
  const callback3 = obj2.useCallback(() => {
    const obj = openChannelLongPressActionSheet;
    const result = obj.openChannelLongPressActionSheet(channel.id);
  }, items12);
  obj10 = { onPressIn: callback, onPressOut: callback1, onPress: callback2, onLongPress: callback3, accessibilityRole: "button", accessibilityLabel: height(tmp2[19])({ channel, unread: hasUnreadMessages, mentionCount, isIncomingCall, isOngoingCall, ignored, blocked }), accessibilityHint: tmpResult.getChannelA11yHint({ channel, muted, userStatus: status, isFavorite: favorite }), underlayColor: tmp4.rowActive.backgroundColor, style: memo1, children: items13 };
  PressableHighlight = tmp(tmp2[18]).PressableHighlight;
  let tmp26;
  tmpResult = tmp(tmp2[19]);
  tmp24 = closure_12;
  const tmp9Result = height(tmp2[20]);
  if (tmp15) {
    tmp26 = nameplate;
  }
  items13 = [, , , , ];
  const obj11 = { nameplate: tmp26, isFocused: stateFromStores, isPressed, isMuted: muted || ignored || blocked, fadeIn: isPressed, style: tmp4.nameplate };
  items13[0] = closure_11(tmp9Result, obj11);
  let tmp22Result = stateFromStores;
  if (tmp22Result) {
    const obj12 = { style: tmp4.selectedBorder, pointerEvents: "none" };
    tmp22Result = tmp22(tmp23, obj12);
  }
  items13[1] = tmp22Result;
  const obj13 = { unread: hasUnreadMessages, resolvedUnreadSetting, muted, layout: tmp(tmp2[22]).ChannelListLayoutTypes.COZY_DRAWER_SMOL, panelVariant: true };
  const tmp9Result4 = height(tmp2[21]);
  items13[2] = closure_11(tmp9Result4, obj13);
  const obj14 = { backgroundColor: memo2, children: closure_11(tmp9Result5, obj15) };
  const CutoutBackgroundProvider = tmp(tmp2[23]).CutoutBackgroundProvider;
  obj15 = { channel, channelSelected: stateFromStores, hasUnreadMessages, muted, ignored, blocked, isStreaming: height(tmp2[25])(activities), status };
  tmp9Result5 = height(tmp2[24]);
  items13[3] = closure_11(CutoutBackgroundProvider, obj14);
  const obj16 = { channel, channelSelected: stateFromStores, favorite, muted, ignored, blocked, hasActivity: true === someResult, hasUnreadMessages, resolvedUnreadSetting, hasNameplate: tmp15 };
  someResult = undefined;
  const tmp9Result6 = height(tmp2[26]);
  if (activities != null) {
    someResult = activities.some((type) => type.type !== channel(isPressed[27]).ActivityTypes.CUSTOM_STATUS);
  }
  items13[4] = closure_11(tmp9Result6, obj16);
  return closure_11(stateFromStores, obj9);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelBase.tsx");

export default memoResult;
export const MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING = 1;
