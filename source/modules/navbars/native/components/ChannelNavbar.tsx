// Module ID: 11794
// Function ID: 91539
// Name: ChannelTitleContent
// Dependencies: []
// Exports: ChannelButtons, ChannelTitleWithoutRoute

// Module 11794 (ChannelTitleContent)
function ChannelTitleContent(arg0) {
  let accessibleTitle;
  let icon;
  let subTitle;
  let title;
  let titleSuffix;
  ({ title, icon } = arg0);
  ({ titleSuffix, subTitle, accessibleTitle } = arg0);
  const tmp = callback3();
  let tmp2 = null;
  if (null != icon) {
    let tmp4 = icon;
    if (!importAllResult.isValidElement(icon)) {
      let obj = { size: arg1(dependencyMap[23]).Icon.Sizes.CUSTOM, source: icon, style: tmp.channelIcon, color: tmp.channelIconColor.color };
      tmp4 = callback(arg1(dependencyMap[23]).Icon, obj);
    }
    tmp2 = tmp4;
  }
  let tmp8 = title;
  if (!importAllResult.isValidElement(title)) {
    obj = { style: tmp.channelNameContainer };
    obj = { style: tmp.channelName, accessibilityLabel: accessibleTitle, children: title };
    obj.children = callback(arg1(dependencyMap[30]).Text, obj);
    tmp8 = callback(View, obj);
  }
  const obj1 = { style: tmp.flexRow };
  const items = [tmp2, ];
  const obj2 = { style: tmp.channelTextContainer };
  const items1 = [tmp8, titleSuffix];
  const items2 = [callback2(View, { style: tmp.flexRow, children: items1 }), subTitle];
  obj2.children = items2;
  items[1] = callback2(View, obj2);
  obj1.children = items;
  return callback2(View, obj1);
}
function ParentChannelSubTitle(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  let obj = { style: callback3().navbarTitleSecondaryText };
  const intl = arg1(dependencyMap[17]).intl;
  obj = {};
  const tmp = callback3();
  obj.channelName = arg1(dependencyMap[19]).computeChannelName(parentChannel, closure_11, closure_10);
  obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[17]).t.BjYvHO, obj);
  const obj3 = arg1(dependencyMap[19]);
  obj.children = arg1(dependencyMap[19]).computeChannelName(parentChannel, closure_11, closure_10, true);
  return callback(arg1(dependencyMap[30]).Text, obj);
}
function DMChannelName(style) {
  const userId = style.userId;
  const arg1 = userId;
  let obj = arg1(dependencyMap[16]);
  const items = [closure_11, closure_10];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let nickname = nickname.getNickname(userId);
    if (null == nickname) {
      nickname = callback(closure_2[31]).getName(tmp2);
      const obj = callback(closure_2[31]);
    }
    let str = "";
    if (null != nickname) {
      str = nickname;
    }
    return str;
  }, items1);
  obj = { style: style.style };
  const intl = arg1(dependencyMap[17]).intl;
  obj.accessibilityLabel = intl.formatToPlainString(arg1(dependencyMap[17]).t.fYqXVY, { channelName: stateFromStores });
  obj.children = stateFromStores;
  return callback(arg1(dependencyMap[23]).LegacyText, obj);
}
function ConnectedStatus(userId) {
  let isMobileOnline;
  let isVROnline;
  let status;
  let streaming;
  const arg1 = userId.userId;
  let obj = arg1(dependencyMap[16]);
  const items = [closure_9];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { status: store.getStatus(userId), isMobileOnline: store.isMobileOnline(userId), isVROnline: store.isVROnline(userId), streaming: callback(closure_2[32])(store.getActivities(userId)) };
    return obj;
  });
  ({ status, isMobileOnline, isVROnline, streaming } = stateFromStoresObject);
  obj = { isMobileOnline, isVROnline, status, streaming, size: arg1(dependencyMap[23]).StatusSizes.SMALL, style: userId.style };
  return callback(arg1(dependencyMap[23]).Status, obj);
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const THREAD_CHANNEL_TYPES = arg1(dependencyMap[3]).THREAD_CHANNEL_TYPES;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
const tmp2 = arg1(dependencyMap[9]);
const ChannelTypes = tmp2.ChannelTypes;
const StaticChannelRoute = arg1(dependencyMap[10]).StaticChannelRoute;
({ ContentDismissActionType: closure_14, DismissibleContentGroupName: closure_15 } = arg1(dependencyMap[11]));
const tmp3 = arg1(dependencyMap[11]);
({ jsx: closure_16, jsxs: closure_17 } = arg1(dependencyMap[12]));
let obj1 = arg1(dependencyMap[13]);
let obj = { navbarTitleContainer: { useIsVerifiedAdult: "r", createTimeToFullDisplay: "MediaViewerDimensionsProvider", isBLEND: "content", page_session_id: "isArray" } };
obj = {};
const tmp4 = arg1(dependencyMap[12]);
const merged = Object.assign(importDefault(dependencyMap[14])(tmp2.Fonts.DISPLAY_SEMIBOLD, importDefault(dependencyMap[15]).colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj["flexShrink"] = 1;
obj.navbarTitlePrimaryText = obj;
obj1 = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, color: importDefault(dependencyMap[15]).colors.TEXT_MUTED };
obj.navbarTitleSecondaryText = obj1;
obj.channelIcon = {};
const importDefaultResult = importDefault(dependencyMap[14]);
obj.channelIconColor = { color: importDefault(dependencyMap[15]).colors.CHANNEL_ICON };
const obj2 = { color: importDefault(dependencyMap[15]).colors.CHANNEL_ICON };
obj.homeIcon = { tintColor: importDefault(dependencyMap[15]).colors.TEXT_MUTED };
obj.premiumIcon = { marginRight: 4 };
obj.status = { "Null": null, "Null": null };
obj.channelTextContainer = { SDK_VERSION: null, numberOfLines: null };
obj.channelNameContainer = { flexGrow: 1 };
obj.channelName = { textAlign: "left" };
obj.flexRow = { "Null": 7, "Null": 370 };
let closure_18 = obj1.createStyles(obj);
function ChannelTitleWrapper(arg0) {
  let children;
  let onPressTitle;
  let style;
  ({ children, onPressTitle, style } = arg0);
  const tmp = callback3();
  if (null == onPressTitle) {
    let obj = {};
    const items = [tmp.navbarTitleContainer, style];
    obj.style = items;
    obj.children = children;
    let tmp5 = callback(View, obj);
  } else {
    obj = {};
    const items1 = [tmp.navbarTitleContainer, style];
    obj.style = items1;
    obj.accessibilityRole = "header";
    obj.onPress = onPressTitle;
    obj.onAccessibilityTap = function onAccessibilityTap() {
      return null;
    };
    obj.children = children;
    tmp5 = callback(arg1(dependencyMap[29]).PressableOpacity, obj);
  }
  return tmp5;
}
const obj3 = { tintColor: importDefault(dependencyMap[15]).colors.TEXT_MUTED };
const memoResult = importAllResult.memo((threadDraft) => {
  let channelId;
  let onPressTitle;
  ({ onPressTitle, channelId } = threadDraft);
  const arg1 = channelId;
  threadDraft = threadDraft.threadDraft;
  const importDefault = threadDraft;
  const style = threadDraft.style;
  let channelName = callback3();
  let obj = arg1(dependencyMap[16]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => connected.isConnected());
  let obj1 = arg1(dependencyMap[16]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let channel = null;
    if (channelId !== constants.GUILD_HOME) {
      channel = null;
      if (channelId !== constants.MEMBER_SAFETY) {
        channel = store.getChannel(channelId);
      }
    }
    return channel;
  });
  const dependencyMap = stateFromStores1;
  let obj3 = arg1(dependencyMap[16]);
  const items2 = [closure_8];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let guildId;
    if (null != stateFromStores1) {
      guildId = stateFromStores1.getGuildId();
    }
    return guild.getGuild(guildId);
  });
  let obj4 = arg1(dependencyMap[16]);
  const items3 = [closure_7];
  const items4 = [stateFromStores1, threadDraft];
  const stateFromStores3 = obj4.useStateFromStores(items3, () => {
    if (null != threadDraft) {
      if (null != threadDraft.parentChannelId) {
        let channel = store.getChannel(threadDraft.parentChannelId);
      }
      return channel;
    }
    channel = null;
    if (null != stateFromStores1) {
      channel = null;
      if (null != stateFromStores1.parent_id) {
        channel = null;
        if (set.has(stateFromStores1.type)) {
          channel = store.getChannel(stateFromStores1.parent_id);
        }
      }
    }
  }, items4);
  let obj5 = arg1(dependencyMap[21]);
  const selectedSpecialNavigationPath = obj5.useSelectedSpecialNavigationPath();
  const intl = arg1(dependencyMap[17]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[17]).t;
  if (stateFromStores) {
    let stringResult = string(t.ai6Lbr);
  } else {
    stringResult = string(t.ZTNur7);
  }
  if (selectedSpecialNavigationPath === arg1(dependencyMap[21]).SpecialNavigationPath.FRIENDS) {
    obj = { style };
    obj = {};
    channelName = dependencyMap;
    const intl9 = arg1(dependencyMap[17]).intl;
    obj.title = intl9.string(arg1(dependencyMap[17]).t.TdEu5X);
    obj.children = callback(ChannelTitleContent, obj);
    return callback(ChannelTitleWrapper, obj);
  } else {
    channelName = StaticChannelRoute;
    if (channelId === StaticChannelRoute.GUILD_HOME) {
      obj1 = { size: arg1(dependencyMap[23]).Icon.Sizes.CUSTOM, source: importDefault(dependencyMap[24]), style: channelName.homeIcon };
      const obj2 = { onPressTitle, style };
      obj3 = {};
      const intl8 = arg1(dependencyMap[17]).intl;
      obj3.title = intl8.string(arg1(dependencyMap[17]).t.Ym2Ri6);
      obj3.icon = callback(arg1(dependencyMap[23]).Icon, obj1);
      obj2.children = callback(ChannelTitleContent, obj3);
      return callback(ChannelTitleWrapper, obj2);
    } else {
      channelName = StaticChannelRoute;
      if (channelId === StaticChannelRoute.MEMBER_SAFETY) {
        obj4 = { size: arg1(dependencyMap[23]).Icon.Sizes.CUSTOM, source: importDefault(dependencyMap[25]), style: channelName.homeIcon };
        obj5 = { onPressTitle, style };
        let obj6 = {};
        const intl7 = arg1(dependencyMap[17]).intl;
        obj6.title = intl7.string(arg1(dependencyMap[17]).t.9Oq93m);
        obj6.icon = callback(arg1(dependencyMap[23]).Icon, obj4);
        obj5.children = callback(ChannelTitleContent, obj6);
        return callback(ChannelTitleWrapper, obj5);
      } else if (tmp6) {
        const obj7 = { source: importDefault(dependencyMap[27]), style: channelName.premiumIcon };
        const obj8 = { style };
        const obj9 = {};
        const tmp70 = importDefault(dependencyMap[26]);
        const intl6 = arg1(dependencyMap[17]).intl;
        obj9.title = intl6.string(arg1(dependencyMap[17]).t.KzCF/6);
        obj9.icon = callback(importDefault(dependencyMap[26]), obj7);
        obj8.children = callback(ChannelTitleContent, obj9);
        return callback(ChannelTitleWrapper, obj8);
      } else {
        if (null != threadDraft) {
          if (null != threadDraft.name) {
            if (threadDraft.name.length > 0) {
              let name = threadDraft.name;
            }
            let obj23 = arg1(dependencyMap[18]);
            const threadChannelIcon = obj23.getThreadChannelIcon(threadDraft.isPrivate ? tmp56.PRIVATE_THREAD : tmp56.PUBLIC_THREAD);
            const intl5 = arg1(dependencyMap[17]).intl;
            const obj10 = { channelName: name };
            const obj11 = { style };
            const obj12 = { title: name, accessibleTitle: intl5.formatToPlainString(arg1(dependencyMap[17]).t.OkzL+Q, obj10), icon: threadChannelIcon };
            let tmp64 = null != stateFromStores3;
            if (tmp64) {
              const obj13 = { parentChannel: stateFromStores3 };
              tmp64 = callback(ParentChannelSubTitle, obj13);
            }
            obj12.subTitle = tmp64;
            obj11.children = callback(ChannelTitleContent, obj12);
            return callback(ChannelTitleWrapper, obj11);
          }
          const intl4 = arg1(dependencyMap[17]).intl;
          name = intl4.string(arg1(dependencyMap[17]).t.4WNcpu);
        }
        obj6 = arg1(dependencyMap[28]);
        if (obj6.shouldNSFWGateGuild(threadDraft.guildId)) {
          const obj14 = { style };
          const obj15 = {};
          const intl3 = arg1(dependencyMap[17]).intl;
          obj15.title = intl3.string(arg1(dependencyMap[17]).t.HbPHt1);
          obj14.children = callback(ChannelTitleContent, obj15);
          return callback(ChannelTitleWrapper, obj14);
        } else if (null == stateFromStores1) {
          const obj16 = { style };
          const obj17 = { title: stringResult };
          obj16.children = callback(ChannelTitleContent, obj17);
          return callback(ChannelTitleWrapper, obj16);
        } else {
          channelName = arg1;
          channelName = dependencyMap;
          channelName = closure_11;
          channelName = closure_10;
          channelName = arg1(dependencyMap[19]).computeChannelName(stateFromStores1, closure_11, closure_10);
          const obj40 = arg1(dependencyMap[19]);
          channelName = arg1(dependencyMap[18]).getChannelIconWithGuild(stateFromStores1, stateFromStores2);
          if (stateFromStores1.isDM()) {
            const recipientId = stateFromStores1.getRecipientId();
            const obj18 = { userId: recipientId, style: channelName.navbarTitlePrimaryText };
            let tmp30 = null;
            const isSystemDMResult = stateFromStores1.isSystemDM();
            if (!isSystemDMResult) {
              const obj19 = { userId: recipientId, style: channelName.status };
              tmp30 = callback(ConnectedStatus, obj19);
            }
            const obj20 = { userId: recipientId };
            let guild_id;
            const tmp29 = callback(DMChannelName, obj18);
            const tmp33 = callback;
            if (null != stateFromStores1) {
              guild_id = stateFromStores1.guild_id;
            }
            obj20.guildId = guild_id;
            const obj21 = { onPressTitle, style };
            const obj22 = { title: tmp29, icon: channelName, titleSuffix: tmp30, subTitle: tmp33(importDefault(dependencyMap[20]), obj20) };
            obj21.children = callback(ChannelTitleContent, obj22);
            return callback(ChannelTitleWrapper, obj21);
          } else {
            const intl2 = arg1(dependencyMap[17]).intl;
            const formatToPlainString = intl2.formatToPlainString;
            const t2 = arg1(dependencyMap[17]).t;
            if (isThreadResult) {
              obj23 = { channelName };
              const obj24 = { onPressTitle, style };
              const obj25 = { title: channelName, accessibleTitle: formatToPlainString(t2.OkzL+Q, obj23), icon: channelName };
              let tmp22 = null != stateFromStores3;
              if (tmp22) {
                const obj26 = { parentChannel: stateFromStores3 };
                tmp22 = callback(ParentChannelSubTitle, obj26);
              }
              obj25.subTitle = tmp22;
              obj24.children = callback(ChannelTitleContent, obj25);
              return callback(ChannelTitleWrapper, obj24);
            } else {
              const obj27 = { channelName };
              const obj28 = { onPressTitle, style };
              const obj29 = { title: channelName, accessibleTitle: formatToPlainString(t2.UbNmGc, obj27), icon: channelName };
              obj28.children = callback(ChannelTitleContent, obj29);
              return callback(ChannelTitleWrapper, obj28);
            }
            const isThreadResult = stateFromStores1.isThread();
          }
          const obj41 = arg1(dependencyMap[18]);
        }
      }
    }
  }
  const tmp6 = importDefault(dependencyMap[22])();
});
const result = arg1(dependencyMap[38]).fileFinishedImporting("modules/navbars/native/components/ChannelNavbar.tsx");

export const ChannelTitleWithoutRoute = function ChannelTitleWithoutRoute(arg0) {
  let onPressTitle;
  ({ onPressTitle, channelId: closure_0 } = arg0);
  const tmp = callback3();
  let obj = arg1(dependencyMap[16]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(closure_0));
  let obj2 = arg1(dependencyMap[16]);
  const items1 = [closure_5];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => connected.isConnected());
  const intl = arg1(dependencyMap[17]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[17]).t;
  if (stateFromStores1) {
    let stringResult = string(t.ai6Lbr);
  } else {
    stringResult = string(t.ZTNur7);
  }
  let channelIcon = null;
  if (null != stateFromStores) {
    let obj3 = arg1(dependencyMap[18]);
    channelIcon = obj3.getChannelIcon(stateFromStores);
  }
  let channelName = null;
  if (null != stateFromStores) {
    let obj4 = arg1(dependencyMap[19]);
    channelName = obj4.computeChannelName(stateFromStores, closure_11, closure_10);
  }
  if (null != stateFromStores) {
    if (stateFromStores.isDM()) {
      const recipientId = stateFromStores.getRecipientId();
      obj = { userId: recipientId, style: tmp.navbarTitlePrimaryText };
      let tmp21 = null;
      const isSystemDMResult = stateFromStores.isSystemDM();
      if (!isSystemDMResult) {
        obj = { userId: recipientId, style: tmp.status };
        tmp21 = callback(ConnectedStatus, obj);
      }
      const obj1 = { userId: recipientId, guildId: stateFromStores.guild_id };
      obj2 = { onPressTitle };
      obj3 = { title: callback(DMChannelName, obj), icon: channelIcon, titleSuffix: tmp21, subTitle: callback(importDefault(dependencyMap[20]), obj1) };
      obj2.children = callback(ChannelTitleContent, obj3);
      return callback(ChannelTitleWrapper, obj2);
    }
  }
  obj4 = { onPressTitle };
  const obj5 = {};
  if (null != channelName) {
    stringResult = channelName;
  }
  obj5.title = stringResult;
  obj5.icon = channelIcon;
  obj4.children = callback(ChannelTitleContent, obj5);
  return callback(ChannelTitleWrapper, obj4);
};
export const ChannelTitle = memoResult;
export const ChannelButtons = function ChannelButtons(buttons) {
  buttons = buttons.buttons;
  const obj = { style: buttons.style };
  let mapped;
  if (null != buttons) {
    mapped = buttons.map((onPress) => {
      let accessibilityLabel;
      let children;
      let color;
      let disabled;
      let onLongPress;
      let source;
      let style;
      let fn = onPress.onPress;
      const hasActivitiesPrivateChannelTooltip = onPress.hasActivitiesPrivateChannelTooltip;
      let obj = {};
      ({ onLongPress, source, color, style, accessibilityLabel, children, disabled } = onPress);
      obj = { accessibilityRole: "button", accessibilityLabel, color, source };
      if (hasActivitiesPrivateChannelTooltip) {
        fn = (arg0) => {
          if (null != fn) {
            fn(arg0);
          }
          let obj = fn(closure_2[34]);
          obj = { dismissAction: constants.AUTO };
          const result = obj.UNSAFE_markDismissibleContentAsDismissed(fn(closure_2[35]).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, obj);
        };
      }
      obj.onPress = fn;
      obj.onLongPress = onLongPress;
      obj.disabled = disabled;
      obj.style = style;
      obj.children = children;
      const items = [callback2(callback(closure_2[33]), obj), ];
      let tmp5 = null;
      if (hasActivitiesPrivateChannelTooltip) {
        obj = {};
        const items1 = [fn(closure_2[35]).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP];
        obj.contentTypes = items1;
        obj.groupName = constants.CHANNEL_HEADER_CALL_BUTTON_TOOLTIPS;
        obj.children = function children(markAsDismissed) {
          let tmp = null;
          if (markAsDismissed.visibleContent === fn(closure_2[35]).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP) {
            const obj = {
              onClosePress() {
                  return markAsDismissed(constants.UNKNOWN);
                }
            };
            tmp = callback2(callback(closure_2[37]), obj);
          }
          return tmp;
        };
        tmp5 = callback2(callback(closure_2[36]), obj);
        const tmp9 = callback(closure_2[36]);
      }
      items[1] = tmp5;
      obj.children = items;
      return closure_17(closure_4, obj, arg1);
    });
  }
  obj.children = mapped;
  return closure_16(View, obj);
};
