// Module ID: 15002
// Function ID: 114222
// Name: MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING
// Dependencies: [57, 31, 27, 4252, 4177, 3802, 1907, 4360, 1850, 653, 33, 4165, 689, 566, 1324, 15003, 9064, 477, 4175, 4173, 9073, 4695, 8292, 8046, 15004, 3843, 7946, 15005, 7953, 15006, 2]

// Module 15002 (MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "module_15005";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { ActivityTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
const require = arg1;
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
let closure_15 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { marginBottom: 1, borderRadius: importDefault(689).radii.md, marginHorizontal: importDefault(689).space.PX_8, paddingHorizontal: importDefault(689).space.PX_8 };
  let num = 0;
  if (!arg0) {
    num = importDefault(689).space.PX_8;
  }
  obj.paddingVertical = num;
  let PX_4;
  if (arg0) {
    PX_4 = importDefault(689).space.PX_4;
  }
  obj.marginVertical = PX_4;
  obj.flexDirection = "row";
  obj.alignItems = "center";
  obj.flex = 1;
  obj.pressable = obj;
  obj = { borderRadius: importDefault(689).radii.md };
  obj.nameplate = obj;
  obj.rowActive = { backgroundColor: importDefault(689).colors.INTERACTIVE_BACKGROUND_ACTIVE };
  const obj2 = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, borderWidth: 1, borderColor: importDefault(689).colors.BORDER_MUTED, borderRadius: importDefault(689).radii.md };
  obj.selectedBorder = obj2;
  const obj1 = { backgroundColor: importDefault(689).colors.INTERACTIVE_BACKGROUND_ACTIVE };
  obj.rowSelected = { borderRadius: importDefault(689).radii.md, backgroundColor: importDefault(689).colors.BACKGROUND_MOD_MUTED };
  return obj;
});
const memoResult = importAllResult.memo(function MessagesItemChannelBase(channel) {
  let activities;
  let blocked;
  let favorite;
  let ignored;
  let isIncomingCall;
  let isOngoingCall;
  let muted;
  let resolvedUnreadSetting;
  let status;
  channel = channel.channel;
  const height = channel.height;
  let c6;
  let obj = channel(stateFromStores[13]);
  let items = [closure_9];
  stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    const channelId = outer1_9.getChannelId(null);
    if (null != channel) {
      id = channel.id;
    }
    return channelId === id;
  });
  let tmp2 = callback3(height(stateFromStores[14])("MessagesItemChannelBase"));
  let callback = tmp2;
  const items1 = [height];
  const items2 = [tmp2, stateFromStores];
  const memo = first.useMemo(() => ({ height, overflow: "hidden" }), items1);
  const memo1 = first.useMemo(() => {
    const items = [tmp2.pressable, ];
    let rowSelected;
    if (stateFromStores) {
      rowSelected = tmp2.rowSelected;
    }
    items[1] = rowSelected;
    return items;
  }, items2);
  let obj1 = channel(stateFromStores[13]);
  const items3 = [c6];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items3, () => {
    if (channel.isDM()) {
      const activities = _undefined.getActivities(channel.getRecipientId());
    }
    const obj = {};
    if (channel.isDM()) {
      obj.status = _undefined.getStatus(channel.getRecipientId());
      obj.activities = activities;
      let tmp4 = obj;
    } else {
      obj.status = undefined;
      obj.activities = undefined;
      tmp4 = obj;
    }
    return tmp4;
  });
  ({ status, activities } = stateFromStoresObject);
  let obj2 = channel(stateFromStores[13]);
  const items4 = [closure_7];
  const stateFromStoresObject1 = obj2.useStateFromStoresObject(items4, () => {
    const mentionCount = outer1_7.getMentionCount(channel.id);
    const obj = { mentionCount };
    let tmp2 = mentionCount > 0;
    if (!tmp2) {
      let hasUnreadResult = null != channel.getGuildId();
      if (hasUnreadResult) {
        hasUnreadResult = outer1_7.hasUnread(channel.id);
      }
      tmp2 = hasUnreadResult;
    }
    obj.hasUnreadMessages = tmp2;
    return obj;
  });
  const hasUnreadMessages = stateFromStoresObject1.hasUnreadMessages;
  ({ isIncomingCall, isOngoingCall } = height(stateFromStores[15])(channel.id));
  let obj3 = channel(stateFromStores[13]);
  const items5 = [closure_10];
  const stateFromStoresObject2 = obj3.useStateFromStoresObject(items5, () => ({ resolvedUnreadSetting: outer1_10.resolveUnreadSetting(channel), muted: outer1_10.isChannelMuted(channel.getGuildId(), channel.id), favorite: outer1_10.isMessagesFavorite(channel.id) }));
  ({ resolvedUnreadSetting, muted, favorite } = stateFromStoresObject2);
  let obj4 = channel(stateFromStores[13]);
  const items6 = [closure_8];
  const stateFromStoresObject3 = obj4.useStateFromStoresObject(items6, () => {
    const obj = {};
    const tmp = !channel.isDM();
    let isIgnoredResult = !tmp;
    if (!tmp) {
      isIgnoredResult = outer1_8.isIgnored(channel.getRecipientId());
    }
    obj.ignored = isIgnoredResult;
    const tmp5 = !channel.isDM();
    let isBlockedResult = !tmp5;
    if (!tmp5) {
      isBlockedResult = outer1_8.isBlocked(channel.getRecipientId());
    }
    obj.blocked = isBlockedResult;
    return obj;
  });
  ({ ignored, blocked } = stateFromStoresObject3);
  let obj5 = channel(stateFromStores[13]);
  const items7 = [closure_11];
  const stateFromStores1 = obj5.useStateFromStores(items7, () => {
    let recipientId;
    if (true === channel.isDM()) {
      recipientId = channel.getRecipientId();
    }
    return outer1_11.getUser(recipientId);
  });
  const tmp11 = callback(first.useState(false), 2);
  first = tmp11[0];
  let closure_5 = tmp11[1];
  let obj6 = channel(stateFromStores[16]);
  const nameplate = obj6.useNameplate({ user: stateFromStores1 });
  let tmp14 = null != nameplate;
  if (tmp14) {
    let tmp15 = stateFromStores;
    if (!stateFromStores) {
      tmp15 = first;
    }
    tmp14 = tmp15;
  }
  c6 = tmp14;
  const items8 = [stateFromStores, tmp14, first, tmp2];
  const items9 = [, ];
  ({ guild_id: arr10[0], id: arr10[1] } = channel);
  const memo2 = first.useMemo(() => {
    let tmp = null;
    if (obj.isIOS()) {
      if (c6) {
        tmp = null;
      } else if (first) {
        let backgroundColor = tmp2.rowActive.backgroundColor;
      } else if (stateFromStores) {
        backgroundColor = tmp2.rowSelected.backgroundColor;
      }
    }
    return tmp;
  }, items8);
  callback = first.useCallback(() => {
    height(stateFromStores[18]).preload(channel.guild_id, channel.id);
    callback(true);
  }, items9);
  const items10 = [channel.id];
  const callback1 = first.useCallback(() => {
    callback(false);
  }, []);
  const items11 = [channel.id];
  const callback2 = first.useCallback(() => {
    channel(stateFromStores[19]).transitionToChannel(channel.id);
  }, items10);
  obj = { style: memo, collapsable: false };
  callback3 = first.useCallback(() => {
    const result = channel(stateFromStores[20]).openChannelLongPressActionSheet(channel.id);
  }, items11);
  obj = { onPressIn: callback, onPressOut: callback1, onPress: callback2, onLongPress: callback3, accessibilityRole: "button", accessibilityLabel: height(stateFromStores[22])({ channel, unread: hasUnreadMessages, mentionCount: stateFromStoresObject1.mentionCount, isIncomingCall, isOngoingCall }) };
  const tmp22 = closure_5;
  const tmp23 = closure_14;
  const tmp7 = height(stateFromStores[15])(channel.id);
  obj.accessibilityHint = channel(stateFromStores[22]).getChannelA11yHint({ channel, muted, userStatus: status, isFavorite: favorite });
  obj.underlayColor = tmp2.rowActive.backgroundColor;
  obj.style = memo1;
  obj1 = {};
  let tmp25;
  const obj10 = channel(stateFromStores[22]);
  if (tmp14) {
    tmp25 = nameplate;
  }
  obj1.nameplate = tmp25;
  obj1.isFocused = stateFromStores;
  obj1.isPressed = first;
  let tmp26 = muted;
  if (!muted) {
    tmp26 = ignored;
  }
  if (!tmp26) {
    tmp26 = blocked;
  }
  obj1.isMuted = tmp26;
  obj1.fadeIn = first;
  obj1.style = tmp2.nameplate;
  const items12 = [callback2(height(stateFromStores[23]), obj1), , , , ];
  let tmp27 = stateFromStores;
  if (stateFromStores) {
    obj2 = { style: tmp2.selectedBorder, pointerEvents: "none" };
    tmp27 = callback2(closure_5, obj2);
  }
  items12[1] = tmp27;
  obj3 = { unread: hasUnreadMessages, resolvedUnreadSetting, muted };
  const tmp24 = height(stateFromStores[23]);
  const tmp30 = callback2;
  obj3.layout = channel(stateFromStores[25]).ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  obj3.panelVariant = true;
  items12[2] = callback2(height(stateFromStores[24]), obj3);
  obj4 = { backgroundColor: memo2 };
  obj5 = { channel, channelSelected: stateFromStores, hasUnreadMessages, muted, ignored, blocked };
  const tmp31 = height(stateFromStores[24]);
  obj5.isStreaming = height(stateFromStores[28])(activities);
  obj5.status = status;
  obj4.children = callback2(height(stateFromStores[27]), obj5);
  items12[3] = callback2(channel(stateFromStores[26]).CutoutBackgroundProvider, obj4);
  obj6 = { channel, channelSelected: stateFromStores, favorite, muted, ignored, blocked };
  let someResult;
  const tmp32 = height(stateFromStores[27]);
  if (null != activities) {
    someResult = activities.some((type) => type.type !== outer1_12.CUSTOM_STATUS);
  }
  obj6.hasActivity = true === someResult;
  obj6.hasUnreadMessages = hasUnreadMessages;
  obj6.resolvedUnreadSetting = resolvedUnreadSetting;
  obj6.hasNameplate = tmp14;
  items12[4] = tmp30(height(stateFromStores[29]), obj6);
  obj.children = items12;
  obj.children = tmp23(channel(stateFromStores[21]).PressableHighlight, obj);
  return callback2(tmp22, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelBase.tsx");

export default memoResult;
export const MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING = 1;
