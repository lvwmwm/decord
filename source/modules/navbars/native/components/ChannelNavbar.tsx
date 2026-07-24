// Module ID: 11832
// Function ID: 91839
// Name: ChannelTitleContent
// Dependencies: [31, 27, 4808, 1352, 1348, 1838, 4217, 3767, 1849, 653, 1355, 1345, 33, 4130, 5052, 689, 566, 1212, 4593, 4320, 9102, 11833, 11834, 1273, 10147, 11835, 5085, 10145, 9384, 4660, 4126, 3969, 7969, 8518, 3946, 1334, 9678, 11836, 2]
// Exports: ChannelButtons, ChannelTitleWithoutRoute

// Module 11832 (ChannelTitleContent)
import importAllResult from "conceal";
import { View } from "registerAsset";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { THREAD_CHANNEL_TYPES } from "_callSuper";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import { StaticChannelRoute } from "set";
import ContentDismissActionType from "ContentDismissActionType";
import jsxProd from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let closure_14;
let closure_15;
let closure_16;
let closure_17;
const require = arg1;
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
      let obj = { size: require(1273) /* Button */.Icon.Sizes.CUSTOM, source: icon, style: tmp.channelIcon, color: tmp.channelIconColor.color };
      tmp4 = callback(require(1273) /* Button */.Icon, obj);
    }
    tmp2 = tmp4;
  }
  let tmp8 = title;
  if (!importAllResult.isValidElement(title)) {
    obj = { style: tmp.channelNameContainer };
    obj = { style: tmp.channelName, lineClamp: 1, variant: "heading-md/bold", color: "mobile-text-heading-primary", accessibilityLabel: accessibleTitle, maxFontSizeMultiplier: 1, accessibilityRole: "header", children: title };
    obj.children = callback(require(4126) /* Text */.Text, obj);
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
  let obj = { lineClamp: 1, style: callback3().navbarTitleSecondaryText, accessibilityLabel: null, maxFontSizeMultiplier: 1, variant: "text-xs/medium", color: "text-muted" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = {};
  const tmp = callback3();
  obj.channelName = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(parentChannel, closure_11, closure_10);
  obj.accessibilityLabel = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.BjYvHO, obj);
  const obj3 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
  obj.children = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(parentChannel, closure_11, closure_10, true);
  return callback(require(4126) /* Text */.Text, obj);
}
function DMChannelName(userId) {
  userId = userId.userId;
  let obj = userId(566);
  const items = [closure_11, closure_10];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let nickname = outer1_10.getNickname(userId);
    if (null == nickname) {
      nickname = outer1_1(outer1_2[31]).getName(tmp2);
      const obj = outer1_1(outer1_2[31]);
    }
    let str = "";
    if (null != nickname) {
      str = nickname;
    }
    return str;
  }, items1);
  obj = { numberOfLines: 1, style: userId.style, accessibilityLabel: null, maxFontSizeMultiplier: 1, accessibilityRole: "header" };
  const intl = userId(1212).intl;
  obj.accessibilityLabel = intl.formatToPlainString(userId(1212).t.fYqXVY, { channelName: stateFromStores });
  obj.children = stateFromStores;
  return callback(userId(1273).LegacyText, obj);
}
function ConnectedStatus(userId) {
  let isMobileOnline;
  let isVROnline;
  let status;
  let streaming;
  userId = userId.userId;
  let obj = userId(566);
  const items = [closure_9];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { status: outer1_9.getStatus(userId), isMobileOnline: outer1_9.isMobileOnline(userId), isVROnline: outer1_9.isVROnline(userId), streaming: outer1_1(outer1_2[32])(outer1_9.getActivities(userId)) };
    return obj;
  });
  ({ status, isMobileOnline, isVROnline, streaming } = stateFromStoresObject);
  obj = { isMobileOnline, isVROnline, status, streaming, size: userId(1273).StatusSizes.SMALL, style: userId.style };
  return callback(userId(1273).Status, obj);
}
const ChannelTypes = ME.ChannelTypes;
({ ContentDismissActionType: closure_14, DismissibleContentGroupName: closure_15 } = ContentDismissActionType);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
let obj = { navbarTitleContainer: { height: "100%", flex: 1, flexDirection: "row", alignItems: "center" } };
obj = {};
const merged = Object.assign(require("createTextStyle")(ME.Fonts.DISPLAY_SEMIBOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj["flexShrink"] = 1;
obj.navbarTitlePrimaryText = obj;
_createForOfIteratorHelperLoose = { fontSize: 12, lineHeight: 16, color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, marginTop: -4 };
obj.navbarTitleSecondaryText = _createForOfIteratorHelperLoose;
obj.channelIcon = { height: 18, width: 18, marginRight: 8 };
obj.channelIconColor = { color: require("_createForOfIteratorHelperLoose").colors.CHANNEL_ICON };
let obj3 = { height: 20, width: 20, tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, marginTop: 0, marginRight: 8 };
obj.homeIcon = obj3;
obj.premiumIcon = { marginRight: 4 };
obj.status = { marginLeft: 1, marginTop: 4 };
obj.channelTextContainer = { flex: 1, flexGrow: 1 };
obj.channelNameContainer = { flexGrow: 1 };
obj.channelName = { textAlign: "left" };
obj.flexRow = { flexDirection: "row", alignItems: "center" };
let closure_18 = _createForOfIteratorHelperLoose.createStyles(obj);
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
    tmp5 = callback(require(4660) /* PressableBase */.PressableOpacity, obj);
  }
  return tmp5;
}
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.CHANNEL_ICON };
const memoResult = importAllResult.memo((threadDraft) => {
  let channelId;
  let onPressTitle;
  ({ onPressTitle, channelId } = threadDraft);
  threadDraft = threadDraft.threadDraft;
  const style = threadDraft.style;
  let channelName = callback3();
  let obj = channelId(stateFromStores1[16]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.isConnected());
  let obj1 = channelId(stateFromStores1[16]);
  const items1 = [closure_7];
  stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let channel = null;
    if (channelId !== outer1_13.GUILD_HOME) {
      channel = null;
      if (channelId !== outer1_13.MEMBER_SAFETY) {
        channel = outer1_7.getChannel(channelId);
      }
    }
    return channel;
  });
  let obj3 = channelId(stateFromStores1[16]);
  const items2 = [closure_8];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let guildId;
    if (null != stateFromStores1) {
      guildId = stateFromStores1.getGuildId();
    }
    return outer1_8.getGuild(guildId);
  });
  let obj4 = channelId(stateFromStores1[16]);
  const items3 = [closure_7];
  const items4 = [stateFromStores1, threadDraft];
  const stateFromStores3 = obj4.useStateFromStores(items3, () => {
    if (null != threadDraft) {
      if (null != threadDraft.parentChannelId) {
        let channel = outer1_7.getChannel(threadDraft.parentChannelId);
      }
      return channel;
    }
    channel = null;
    if (null != stateFromStores1) {
      channel = null;
      if (null != stateFromStores1.parent_id) {
        channel = null;
        if (outer1_6.has(stateFromStores1.type)) {
          channel = outer1_7.getChannel(stateFromStores1.parent_id);
        }
      }
    }
  }, items4);
  let obj5 = channelId(stateFromStores1[21]);
  const selectedSpecialNavigationPath = obj5.useSelectedSpecialNavigationPath();
  const intl = channelId(stateFromStores1[17]).intl;
  const string = intl.string;
  const t = channelId(stateFromStores1[17]).t;
  if (stateFromStores) {
    let stringResult = string(t.ai6Lbr);
  } else {
    stringResult = string(t.ZTNur7);
  }
  if (selectedSpecialNavigationPath === channelId(stateFromStores1[21]).SpecialNavigationPath.FRIENDS) {
    obj = { style };
    obj = {};
    channelName = stateFromStores1;
    const intl9 = channelId(stateFromStores1[17]).intl;
    obj.title = intl9.string(channelId(stateFromStores1[17]).t.TdEu5X);
    obj.children = callback(ChannelTitleContent, obj);
    return callback(ChannelTitleWrapper, obj);
  } else {
    channelName = StaticChannelRoute;
    if (channelId === StaticChannelRoute.GUILD_HOME) {
      obj1 = { size: channelId(stateFromStores1[23]).Icon.Sizes.CUSTOM, source: threadDraft(stateFromStores1[24]), style: channelName.homeIcon };
      const obj2 = { onPressTitle, style };
      obj3 = {};
      const intl8 = channelId(stateFromStores1[17]).intl;
      obj3.title = intl8.string(channelId(stateFromStores1[17]).t.Ym2Ri6);
      obj3.icon = callback(channelId(stateFromStores1[23]).Icon, obj1);
      obj2.children = callback(ChannelTitleContent, obj3);
      return callback(ChannelTitleWrapper, obj2);
    } else {
      channelName = StaticChannelRoute;
      if (channelId === StaticChannelRoute.MEMBER_SAFETY) {
        obj4 = { size: channelId(stateFromStores1[23]).Icon.Sizes.CUSTOM, source: threadDraft(stateFromStores1[25]), style: channelName.homeIcon };
        obj5 = { onPressTitle, style };
        let obj6 = {};
        const intl7 = channelId(stateFromStores1[17]).intl;
        obj6.title = intl7.string(channelId(stateFromStores1[17]).t["9Oq93m"]);
        obj6.icon = callback(channelId(stateFromStores1[23]).Icon, obj4);
        obj5.children = callback(ChannelTitleContent, obj6);
        return callback(ChannelTitleWrapper, obj5);
      } else if (tmp6) {
        const obj7 = { source: threadDraft(stateFromStores1[27]), style: channelName.premiumIcon };
        const obj8 = { style };
        const obj9 = {};
        const tmp70 = threadDraft(stateFromStores1[26]);
        const intl6 = channelId(stateFromStores1[17]).intl;
        obj9.title = intl6.string(channelId(stateFromStores1[17]).t["KzCF/6"]);
        obj9.icon = callback(threadDraft(stateFromStores1[26]), obj7);
        obj8.children = callback(ChannelTitleContent, obj9);
        return callback(ChannelTitleWrapper, obj8);
      } else {
        if (null != threadDraft) {
          if (null != threadDraft.name) {
            if (threadDraft.name.length > 0) {
              let name = threadDraft.name;
            }
            let obj23 = channelId(stateFromStores1[18]);
            const threadChannelIcon = obj23.getThreadChannelIcon(threadDraft.isPrivate ? tmp56.PRIVATE_THREAD : tmp56.PUBLIC_THREAD);
            const intl5 = channelId(stateFromStores1[17]).intl;
            const obj10 = { channelName: name };
            const obj11 = { style };
            const obj12 = { title: name, accessibleTitle: intl5.formatToPlainString(channelId(stateFromStores1[17]).t["OkzL+Q"], obj10), icon: threadChannelIcon };
            let tmp64 = null != stateFromStores3;
            if (tmp64) {
              const obj13 = { parentChannel: stateFromStores3 };
              tmp64 = callback(ParentChannelSubTitle, obj13);
            }
            obj12.subTitle = tmp64;
            obj11.children = callback(ChannelTitleContent, obj12);
            return callback(ChannelTitleWrapper, obj11);
          }
          const intl4 = channelId(stateFromStores1[17]).intl;
          name = intl4.string(channelId(stateFromStores1[17]).t["4WNcpu"]);
        }
        obj6 = channelId(stateFromStores1[28]);
        if (obj6.shouldNSFWGateGuild(threadDraft.guildId)) {
          const obj14 = { style };
          const obj15 = {};
          const intl3 = channelId(stateFromStores1[17]).intl;
          obj15.title = intl3.string(channelId(stateFromStores1[17]).t.HbPHt1);
          obj14.children = callback(ChannelTitleContent, obj15);
          return callback(ChannelTitleWrapper, obj14);
        } else if (null == stateFromStores1) {
          const obj16 = { style };
          const obj17 = { title: stringResult };
          obj16.children = callback(ChannelTitleContent, obj17);
          return callback(ChannelTitleWrapper, obj16);
        } else {
          channelName = channelId;
          channelName = stateFromStores1;
          channelName = closure_11;
          channelName = closure_10;
          channelName = channelId(stateFromStores1[19]).computeChannelName(stateFromStores1, closure_11, closure_10);
          const obj40 = channelId(stateFromStores1[19]);
          channelName = channelId(stateFromStores1[18]).getChannelIconWithGuild(stateFromStores1, stateFromStores2);
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
            const obj22 = { title: tmp29, icon: channelName, titleSuffix: tmp30, subTitle: tmp33(threadDraft(stateFromStores1[20]), obj20) };
            obj21.children = callback(ChannelTitleContent, obj22);
            return callback(ChannelTitleWrapper, obj21);
          } else {
            const intl2 = channelId(stateFromStores1[17]).intl;
            const formatToPlainString = intl2.formatToPlainString;
            const t2 = channelId(stateFromStores1[17]).t;
            if (isThreadResult) {
              obj23 = { channelName };
              const obj24 = { onPressTitle, style };
              const obj25 = { title: channelName, accessibleTitle: formatToPlainString(t2["OkzL+Q"], obj23), icon: channelName };
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
            isThreadResult = stateFromStores1.isThread();
          }
          const obj41 = channelId(stateFromStores1[18]);
        }
      }
    }
  }
  tmp6 = threadDraft(stateFromStores1[22])();
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/navbars/native/components/ChannelNavbar.tsx");

export const ChannelTitleWithoutRoute = function ChannelTitleWithoutRoute(arg0) {
  let onPressTitle;
  let require;
  ({ onPressTitle, channelId: require } = arg0);
  const tmp = callback3();
  let obj = require(566) /* initialize */;
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getChannel(closure_0));
  let obj2 = require(566) /* initialize */;
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => outer1_5.isConnected());
  const intl = require(1212) /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require(1212) /* getSystemLocale */.t;
  if (stateFromStores1) {
    let stringResult = string(t.ai6Lbr);
  } else {
    stringResult = string(t.ZTNur7);
  }
  let channelIcon = null;
  if (null != stateFromStores) {
    let obj3 = require(4593) /* getThreadChannelIcon */;
    channelIcon = obj3.getChannelIcon(stateFromStores);
  }
  let channelName = null;
  if (null != stateFromStores) {
    let obj4 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
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
      obj3 = { title: callback(DMChannelName, obj), icon: channelIcon, titleSuffix: tmp21, subTitle: callback(importDefault(9102), obj1) };
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
  let obj = { style: buttons.style };
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
        fn = (prototype) => {
          if (null != fn) {
            fn(prototype);
          }
          let obj = outer2_0(outer2_2[34]);
          obj = { dismissAction: outer2_14.AUTO };
          const result = obj.UNSAFE_markDismissibleContentAsDismissed(outer2_0(outer2_2[35]).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, obj);
        };
      }
      obj.onPress = fn;
      obj.onLongPress = onLongPress;
      obj.disabled = disabled;
      obj.style = style;
      obj.children = children;
      const items = [outer1_16(outer1_1(outer1_2[33]), obj), ];
      let tmp5 = null;
      if (hasActivitiesPrivateChannelTooltip) {
        obj = {};
        const items1 = [outer1_0(outer1_2[35]).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP];
        obj.contentTypes = items1;
        obj.groupName = outer1_15.CHANNEL_HEADER_CALL_BUTTON_TOOLTIPS;
        obj.children = function children(markAsDismissed) {
          markAsDismissed = markAsDismissed.markAsDismissed;
          let tmp = null;
          if (markAsDismissed.visibleContent === outer2_0(outer2_2[35]).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP) {
            const obj = {
              onClosePress() {
                  return markAsDismissed(outer3_14.UNKNOWN);
                }
            };
            tmp = outer2_16(outer2_1(outer2_2[37]), obj);
          }
          return tmp;
        };
        tmp5 = outer1_16(outer1_1(outer1_2[36]), obj);
        const tmp9 = outer1_1(outer1_2[36]);
      }
      items[1] = tmp5;
      obj.children = items;
      return outer1_17(outer1_4, obj, arg1);
    });
  }
  obj.children = mapped;
  return closure_16(View, obj);
};
