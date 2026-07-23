// Module ID: 14899
// Function ID: 113594
// Name: MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING
// Dependencies: [57, 31, 27, 4217, 4142, 3767, 1906, 4325, 1849, 653, 33, 4130, 689, 566, 1324, 14900, 9090, 477, 14901, 4140, 4138, 9099, 4660, 8450, 8229, 14902, 3808, 7874, 14903, 7882, 14904, 2]

// Module 14899 (MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING)
import _slicedToArray from "_slicedToArray";
import importAllResult from "set";
import { View } from "context";
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
  obj.rowDefault = { backgroundColor: importDefault(689).colors.PANEL_BG };
  const obj1 = { backgroundColor: importDefault(689).colors.PANEL_BG };
  obj.rowActive = { backgroundColor: importDefault(689).colors.INTERACTIVE_BACKGROUND_ACTIVE };
  const obj3 = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, borderWidth: 1, borderColor: importDefault(689).colors.BORDER_MUTED, borderRadius: importDefault(689).radii.md };
  obj.selectedBorder = obj3;
  const obj2 = { backgroundColor: importDefault(689).colors.INTERACTIVE_BACKGROUND_ACTIVE };
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
  const isGradientTheme = channel.isGradientTheme;
  let c7;
  let obj = channel(isGradientTheme[13]);
  let items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    const channelId = outer1_9.getChannelId(null);
    if (null != channel) {
      id = channel.id;
    }
    return channelId === id;
  });
  let tmp2 = callback2(height(isGradientTheme[14])("MessagesItemChannelBase"));
  const items1 = [height];
  const items2 = [tmp2, stateFromStores];
  const memo = importAllResult.useMemo(() => ({ height, overflow: "hidden" }), items1);
  const memo1 = importAllResult.useMemo(() => {
    const items = [tmp2.pressable, ];
    let rowSelected;
    if (stateFromStores) {
      rowSelected = tmp2.rowSelected;
    }
    items[1] = rowSelected;
    return items;
  }, items2);
  let obj1 = channel(isGradientTheme[13]);
  const items3 = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items3, () => {
    if (channel.isDM()) {
      const activities = store.getActivities(channel.getRecipientId());
    }
    const obj = {};
    if (channel.isDM()) {
      obj.status = store.getStatus(channel.getRecipientId());
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
  let obj2 = channel(isGradientTheme[13]);
  const items4 = [c7];
  const stateFromStoresObject1 = obj2.useStateFromStoresObject(items4, () => {
    const mentionCount = _undefined.getMentionCount(channel.id);
    const obj = { mentionCount };
    let tmp2 = mentionCount > 0;
    if (!tmp2) {
      let hasUnreadResult = null != channel.getGuildId();
      if (hasUnreadResult) {
        hasUnreadResult = _undefined.hasUnread(channel.id);
      }
      tmp2 = hasUnreadResult;
    }
    obj.hasUnreadMessages = tmp2;
    return obj;
  });
  const hasUnreadMessages = stateFromStoresObject1.hasUnreadMessages;
  ({ isIncomingCall, isOngoingCall } = height(isGradientTheme[15])(channel.id));
  let obj3 = channel(isGradientTheme[13]);
  const items5 = [closure_10];
  const stateFromStoresObject2 = obj3.useStateFromStoresObject(items5, () => ({ resolvedUnreadSetting: outer1_10.resolveUnreadSetting(channel), muted: outer1_10.isChannelMuted(channel.getGuildId(), channel.id), favorite: outer1_10.isMessagesFavorite(channel.id) }));
  ({ resolvedUnreadSetting, muted, favorite } = stateFromStoresObject2);
  let obj4 = channel(isGradientTheme[13]);
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
  let obj5 = channel(isGradientTheme[13]);
  const items7 = [closure_11];
  const stateFromStores1 = obj5.useStateFromStores(items7, () => {
    let recipientId;
    if (true === channel.isDM()) {
      recipientId = channel.getRecipientId();
    }
    return outer1_11.getUser(recipientId);
  });
  const tmp11 = stateFromStores(tmp2.useState(false), 2);
  const first = tmp11[0];
  _isNativeReflectConstruct = tmp11[1];
  let obj6 = channel(isGradientTheme[16]);
  const nameplate = obj6.useNameplate({ user: stateFromStores1 });
  let tmp14 = null != nameplate;
  if (tmp14) {
    let tmp15 = stateFromStores;
    if (!stateFromStores) {
      tmp15 = first;
    }
    tmp14 = tmp15;
  }
  c7 = tmp14;
  const items8 = [stateFromStores, tmp14, isGradientTheme, first, tmp2];
  const items9 = [, ];
  ({ guild_id: arr10[0], id: arr10[1] } = channel);
  const memo2 = importAllResult.useMemo(() => {
    if (obj.isIOS()) {
      if (!isGradientTheme) {
        if (!c7) {
          if (first) {
            let backgroundColor = channel(isGradientTheme[18]).flattenColorOverOpaqueBackground(tmp2.rowActive.backgroundColor, tmp2.rowDefault.backgroundColor);
            const obj3 = channel(isGradientTheme[18]);
          } else if (stateFromStores) {
            backgroundColor = channel(isGradientTheme[18]).flattenColorOverOpaqueBackground(tmp2.rowSelected.backgroundColor, tmp2.rowDefault.backgroundColor);
            const obj2 = channel(isGradientTheme[18]);
          } else {
            backgroundColor = tmp2.rowDefault.backgroundColor;
          }
          return backgroundColor;
        }
      }
    }
  }, items8);
  const callback = importAllResult.useCallback(() => {
    height(isGradientTheme[19]).preload(channel.guild_id, channel.id);
    store(true);
  }, items9);
  const items10 = [channel.id];
  const callback1 = importAllResult.useCallback(() => {
    store(false);
  }, []);
  const items11 = [channel.id];
  callback2 = importAllResult.useCallback(() => {
    channel(isGradientTheme[20]).transitionToChannel(channel.id);
  }, items10);
  obj = { style: memo, collapsable: false };
  const callback3 = importAllResult.useCallback(() => {
    const result = channel(isGradientTheme[21]).openChannelLongPressActionSheet(channel.id);
  }, items11);
  obj = { onPressIn: callback, onPressOut: callback1, onPress: callback2, onLongPress: callback3, accessibilityRole: "button", accessibilityLabel: height(isGradientTheme[23])({ channel, unread: hasUnreadMessages, mentionCount: stateFromStoresObject1.mentionCount, isIncomingCall, isOngoingCall }) };
  const tmp22 = first;
  const tmp23 = closure_14;
  const tmp7 = height(isGradientTheme[15])(channel.id);
  obj.accessibilityHint = channel(isGradientTheme[23]).getChannelA11yHint({ channel, muted, userStatus: status, isFavorite: favorite });
  obj.underlayColor = tmp2.rowActive.backgroundColor;
  obj.style = memo1;
  obj1 = {};
  let tmp25;
  const obj10 = channel(isGradientTheme[23]);
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
  const items12 = [callback(height(isGradientTheme[24]), obj1), , , , ];
  let tmp27 = stateFromStores;
  if (stateFromStores) {
    obj2 = { style: tmp2.selectedBorder, pointerEvents: "none" };
    tmp27 = callback(first, obj2);
  }
  items12[1] = tmp27;
  obj3 = { unread: hasUnreadMessages, resolvedUnreadSetting, muted };
  const tmp24 = height(isGradientTheme[24]);
  const tmp30 = callback;
  obj3.layout = channel(isGradientTheme[26]).ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  obj3.panelVariant = true;
  items12[2] = callback(height(isGradientTheme[25]), obj3);
  obj4 = { value: memo2 };
  obj5 = { channel, channelSelected: stateFromStores, hasUnreadMessages, muted, ignored, blocked };
  const tmp31 = height(isGradientTheme[25]);
  obj5.isStreaming = height(isGradientTheme[29])(activities);
  obj5.status = status;
  obj4.children = callback(height(isGradientTheme[28]), obj5);
  items12[3] = callback(channel(isGradientTheme[27]).CutoutBackgroundContext.Provider, obj4);
  obj6 = { channel, channelSelected: stateFromStores, favorite, muted, ignored, blocked };
  let someResult;
  const tmp32 = height(isGradientTheme[28]);
  if (null != activities) {
    someResult = activities.some((type) => type.type !== outer1_12.CUSTOM_STATUS);
  }
  obj6.hasActivity = true === someResult;
  obj6.hasUnreadMessages = hasUnreadMessages;
  obj6.resolvedUnreadSetting = resolvedUnreadSetting;
  obj6.hasNameplate = tmp14;
  items12[4] = tmp30(height(isGradientTheme[30]), obj6);
  obj.children = items12;
  obj.children = tmp23(channel(isGradientTheme[22]).PressableHighlight, obj);
  return callback(tmp22, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelBase.tsx");

export default memoResult;
export const MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING = 1;
