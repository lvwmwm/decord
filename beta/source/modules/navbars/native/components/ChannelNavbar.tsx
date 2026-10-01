// Module ID: 12290
// Function ID: 12291
// Name: ChannelNavbar
// Dependencies: [19, 17, 5589, 2049, 2045, 2067, 4876, 4479, 1372, 1074, 2052, 2042, 21, 4836, 5836, 576, 504, 1115, 5335, 4989, 10335, 12291, 12292, 1177, 12293, 12294, 5899, 12295, 9757, 5435, 4832, 4678, 7705, 9203, 4654, 2029, 10088, 12296, 2]
// Exports: ChannelButtons, ChannelTitleWithoutRoute

// Module 12290 (ChannelNavbar)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl10 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4654 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import Text_Text from "Text/Text" /* 4832 */;
import useChannelName from "useChannelName" /* 4989 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5335 */;
import Pressables from "Pressables" /* 5435 */;
import isStreamingDefault from "isStreaming" /* 7705 */;
import ActivityStatusDefault from "ActivityStatus" /* 10335 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5589 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles from "TextStyles" /* 5836 */;
import size_mod from "module_2" /* 2 */;

let onPress, threadDraft;

let Fonts;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let obj2;
let obj3;
let obj4;
let size;
function ChannelTitleContent(arg0) {
  let accessibleTitle;
  let icon;
  let items;
  let items1;
  let items2;
  let obj3;
  let subTitle;
  let title;
  let titleSuffix;
  ({ title, icon } = arg0);
  ({ titleSuffix, subTitle, accessibleTitle } = arg0);
  const tmp = closure_18();
  let tmp2 = null;
  if (null != icon) {
    let tmp4 = icon;
    if (!react.isValidElement(icon)) {
      const obj = { size: native.Icon.Sizes.CUSTOM, source: icon, style: tmp.channelIcon, color: tmp.channelIconColor.color };
      const Icon = native.Icon;
      tmp4 = authStore3(Icon, obj);
    }
    tmp2 = tmp4;
  }
  let tmp8 = title;
  if (!react.isValidElement(title)) {
    const obj2 = { style: tmp.channelNameContainer, children: authStore3(Text_Text.Text, obj3) };
    obj3 = { style: tmp.channelName, lineClamp: 1, variant: "heading-md/bold", color: "mobile-text-heading-primary", accessibilityLabel: accessibleTitle, maxFontSizeMultiplier: 1, accessibilityRole: "header", children: title };
    tmp8 = authStore3(View, obj2);
  }
  const obj4 = { style: tmp.flexRow, children: items };
  items = [tmp2, ];
  const obj6 = { style: tmp.flexRow, children: items1 };
  items1 = [tmp8, titleSuffix];
  const obj5 = { style: tmp.channelTextContainer, children: items2 };
  items2 = [closure_17(View, obj6), subTitle];
  items[1] = closure_17(View, obj5);
  return closure_17(View, obj4);
}
function ParentChannelSubTitle(parentChannel) {
  let BjYvHO;
  let formatToPlainString;
  let obj2;
  let obj3;
  let obj4;
  parentChannel = parentChannel.parentChannel;
  const obj = { lineClamp: 1, style: closure_18().navbarTitleSecondaryText, accessibilityLabel: formatToPlainString(BjYvHO, obj2), maxFontSizeMultiplier: 1, variant: "text-xs/medium", color: "text-muted", children: obj4.computeChannelName(parentChannel, UserStore, RelationshipStore, true) };
  const Text = Text_Text.Text;
  const intl = intl10.intl;
  formatToPlainString = intl.formatToPlainString;
  obj2 = { channelName: obj3.computeChannelName(parentChannel, UserStore, RelationshipStore) };
  BjYvHO = intl10.t.BjYvHO;
  obj3 = useChannelName;
  obj4 = useChannelName;
  return authStore3(Text, obj);
}
function DMChannelName(userId) {
  let intl;
  userId = userId.userId;
  const style = userId.style;
  let obj = userId(504);
  const items = [UserStore, RelationshipStore];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let str = RelationshipStore.getNickname(userId);
    if (str == null) {
      const obj = UserUtilsDefault;
      str = obj.getName(tmp);
    }
    if (str == null) {
      str = "";
    }
    return str;
  }, items1);
  const obj2 = { numberOfLines: 1, style, accessibilityLabel: intl.formatToPlainString(userId(1115).t.fYqXVY, { channelName: stateFromStores }), maxFontSizeMultiplier: 1, accessibilityRole: "header", children: stateFromStores };
  const LegacyText = userId(1177).LegacyText;
  intl = userId(1115).intl;
  return closure_16(LegacyText, obj2);
}
function ConnectedStatus(userId) {
  let isMobileOnline;
  let isVROnline;
  let status;
  let streaming;
  userId = userId.userId;
  const style = userId.style;
  let obj = userId(504);
  const items = [PresenceStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let tmp;
    const obj = { status: PresenceStore.getStatus(userId), isMobileOnline: PresenceStore.isMobileOnline(userId), isVROnline: PresenceStore.isVROnline(userId), streaming: tmp(PresenceStore.getActivities(userId)) };
    tmp = isStreamingDefault;
    return obj;
  });
  ({ status, isMobileOnline, isVROnline, streaming } = stateFromStoresObject);
  const obj2 = { isMobileOnline, isVROnline, status, streaming, size: userId(1177).StatusSizes.SMALL, style };
  const Status = userId(1177).Status;
  return closure_16(Status, obj2);
}
const View = react_native.View;
const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
({ ChannelTypes: closure_12, Fonts } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
({ ContentDismissActionType: closure_14, DismissibleContentGroupName: closure_15 } = DismissibleContentConstants);
({ jsx: closure_16, jsxs: closure_17 } = Fragment);
let createStyles = createStyles_mod;
let obj = { navbarTitleContainer: { height: "100%", flex: 1, flexDirection: "row", alignItems: "center" }, navbarTitlePrimaryText: obj2, navbarTitleSecondaryText: obj3, channelIcon: { height: 18, width: 18, marginRight: 8 }, channelIconColor: obj4, homeIcon: size, premiumIcon: { marginRight: 4 }, status: { marginLeft: 1, marginTop: 4 }, channelTextContainer: { flex: 1, flexGrow: 1 }, channelNameContainer: { flexGrow: 1 }, channelName: { textAlign: "left" }, flexRow: { flexDirection: "row", alignItems: "center" } };
obj2 = { flexShrink: 1 };
createStyles = createStyles.createStyles;
const merged = Object.assign(TextStyles(Fonts.DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj3 = { fontSize: 12, lineHeight: 16, color: nativeDefault.colors.TEXT_MUTED, marginTop: -4 };
obj4 = { color: nativeDefault.colors.CHANNEL_ICON };
size = { height: 20, width: 20, tintColor: nativeDefault.colors.TEXT_MUTED, marginTop: 0, marginRight: 8 };
let closure_18 = createStyles(obj);
function ChannelTitleWrapper(arg0) {
  let children;
  let items;
  let items1;
  let onPressTitle;
  let style;
  let tmp5;
  ({ children, onPressTitle, style } = arg0);
  const tmp = closure_18();
  if (null == onPressTitle) {
    const obj2 = { style: items, children };
    items = [tmp.navbarTitleContainer, style];
    tmp5 = authStore3(View, obj2);
  } else {
    const obj = {
      style: items1,
      accessibilityRole: "header",
      onPress: onPressTitle,
      onAccessibilityTap() {
          return null;
        },
      children
    };
    items1 = [tmp.navbarTitleContainer, style];
    tmp5 = authStore3(Pressables.PressableOpacity, obj);
  }
  return tmp5;
}
const memoResult = react.memo((threadDraft) => {
  let channelId;
  let connected;
  let guild_id;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let obj10;
  let obj13;
  let obj16;
  let obj19;
  let obj22;
  let obj24;
  let obj29;
  let obj32;
  let obj36;
  let obj7;
  let onPressTitle;
  let stringResult;
  let tmp15Result;
  let tmp17;
  let tmp24Result;
  let tmp26;
  let tmp48;
  let tmp52;
  let tmp56;
  ({ onPressTitle, channelId } = threadDraft);
  threadDraft = threadDraft.threadDraft;
  const style = threadDraft.style;
  let stateFromStores1;
  let guildId = threadDraft.guildId;
  const tmp = closure_18();
  const tmp2 = channelId;
  let obj = channelId(stateFromStores1[16]);
  const items = [GatewayConnectionStore];
  const stateFromStores = obj.useStateFromStores(items, () => connected.isConnected());
  const items1 = [ChannelStore];
  const obj2 = channelId(stateFromStores1[16]);
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let channel = null;
    if (channelId !== StaticChannelRoute.GUILD_HOME) {
      channel = null;
      if (channelId !== StaticChannelRoute.MEMBER_SAFETY) {
        channel = ChannelStore.getChannel(tmp);
      }
    }
    return channel;
  });
  const items2 = [GuildStore];
  const obj4 = channelId(stateFromStores1[16]);
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
    let guildId;
    const getGuild = GuildStore.getGuild;
    const obj = stateFromStores1;
    if (stateFromStores1 != null) {
      guildId = obj.getGuildId();
    }
    return getGuild(guildId);
  });
  const items3 = [ChannelStore];
  const items4 = [stateFromStores1, threadDraft];
  const obj5 = channelId(stateFromStores1[16]);
  const stateFromStores3 = obj5.useStateFromStores(items3, () => {
    let channel;
    if (null != threadDraft) {
      if (null != threadDraft.parentChannelId) {
        channel = ChannelStore.getChannel(tmp.parentChannelId);
      }
      return channel;
    }
    channel = null;
    if (null != stateFromStores1) {
      channel = null;
      if (null != stateFromStores1.parent_id) {
        channel = null;
        if (THREAD_CHANNEL_TYPES.has(stateFromStores1.type)) {
          channel = ChannelStore.getChannel(tmp2.parent_id);
        }
      }
    }
  }, items4);
  const obj6 = channelId(stateFromStores1[21]);
  const selectedSpecialNavigationPath = obj6.useSelectedSpecialNavigationPath();
  const tmp9 = threadDraft(stateFromStores1[22])();
  const intl = channelId(stateFromStores1[17]).intl;
  const string = intl.string;
  const t = channelId(stateFromStores1[17]).t;
  if (stateFromStores) {
    stringResult = string(t.ai6Lbr);
  } else {
    stringResult = string(t.ZTNur7);
  }
  if (selectedSpecialNavigationPath === tmp2(stateFromStores1[21]).SpecialNavigationPath.FRIENDS) {
    const obj3 = { style, children: closure_16(ChannelTitleContent, obj7) };
    obj7 = { title: intl9.string(tmp2(stateFromStores1[17]).t.TdEu5X) };
    intl9 = tmp2(tmp3[17]).intl;
    return closure_16(ChannelTitleWrapper, obj3);
  } else if (channelId === StaticChannelRoute.GUILD_HOME) {
    const obj8 = { size: tmp2(stateFromStores1[23]).Icon.Sizes.CUSTOM, source: threadDraft(stateFromStores1[24]), style: tmp.homeIcon };
    const Icon2 = tmp2(tmp3[23]).Icon;
    const obj9 = { onPressTitle, style, children: closure_16(ChannelTitleContent, obj10) };
    obj10 = { title: intl8.string(tmp2(stateFromStores1[17]).t.Ym2Ri6), icon: tmp56 };
    tmp56 = closure_16(Icon2, obj8);
    intl8 = tmp2(tmp3[17]).intl;
    return closure_16(ChannelTitleWrapper, obj9);
  } else if (channelId === tmp62.MEMBER_SAFETY) {
    const obj11 = { size: tmp2(stateFromStores1[23]).Icon.Sizes.CUSTOM, source: threadDraft(stateFromStores1[25]), style: tmp.homeIcon };
    const Icon = tmp2(tmp3[23]).Icon;
    const obj12 = { onPressTitle, style, children: closure_16(ChannelTitleContent, obj13) };
    obj13 = { title: intl7.string(tmp2(stateFromStores1[17]).t["9Oq93m"]), icon: tmp52 };
    tmp52 = closure_16(Icon, obj11);
    intl7 = tmp2(tmp3[17]).intl;
    return closure_16(ChannelTitleWrapper, obj12);
  } else if (tmp9) {
    const obj14 = { source: threadDraft(stateFromStores1[27]), style: tmp.premiumIcon };
    const tmp8Result = threadDraft(stateFromStores1[26]);
    const obj15 = { style, children: closure_16(ChannelTitleContent, obj16) };
    obj16 = { title: intl6.string(tmp2(stateFromStores1[17]).t["KzCF/6"]), icon: tmp48 };
    tmp48 = closure_16(tmp8Result, obj14);
    intl6 = tmp2(tmp3[17]).intl;
    return closure_16(ChannelTitleWrapper, obj15);
  } else {
    if (null != threadDraft) {
      let isForumLikeChannelResult;
      if (stateFromStores1 != null) {
        isForumLikeChannelResult = stateFromStores1.isForumLikeChannel();
      }
      if (!isForumLikeChannelResult) {
        if (null != threadDraft.name) {
          let name;
          if (threadDraft.name.length > 0) {
            name = threadDraft.name;
          }
          const tmp2Result = tmp2(stateFromStores1[18]);
          const threadChannelIcon = tmp2Result.getThreadChannelIcon(threadDraft.isPrivate ? tmp13.PRIVATE_THREAD : tmp13.PUBLIC_THREAD);
          const intl3 = tmp2(tmp3[17]).intl;
          const obj17 = { channelName: name };
          const obj18 = { style, children: closure_16(tmp17, obj19) };
          obj19 = { title: name, accessibleTitle: intl3.formatToPlainString(tmp2(stateFromStores1[17]).t["OkzL+Q"], obj17), icon: threadChannelIcon, subTitle: tmp15Result };
          tmp15Result = null != stateFromStores3;
          const tmp16 = ChannelTitleWrapper;
          tmp17 = ChannelTitleContent;
          if (tmp15Result) {
            const obj20 = { parentChannel: stateFromStores3 };
            tmp15Result = tmp15(ParentChannelSubTitle, obj20);
          }
          return closure_16(tmp16, obj18);
        }
        const intl2 = tmp2(tmp3[17]).intl;
        name = intl2.string(tmp2(tmp3[17]).t["4WNcpu"]);
      }
    }
    const tmp2Result4 = tmp2(stateFromStores1[28]);
    if (tmp2Result4.shouldNSFWGateGuild(guildId)) {
      const obj21 = { style, children: closure_16(ChannelTitleContent, obj22) };
      obj22 = { title: intl5.string(tmp2(stateFromStores1[17]).t.HbPHt1) };
      intl5 = tmp2(tmp3[17]).intl;
      return closure_16(ChannelTitleWrapper, obj21);
    } else if (null == stateFromStores1) {
      const obj23 = { style, children: closure_16(ChannelTitleContent, obj24) };
      obj24 = { title: stringResult };
      return closure_16(ChannelTitleWrapper, obj23);
    } else {
      const tmp2Result5 = tmp2(stateFromStores1[19]);
      const channelName = tmp2Result5.computeChannelName(stateFromStores1, UserStore, RelationshipStore);
      const tmp2Result6 = tmp2(stateFromStores1[18]);
      const channelIconWithGuild = tmp2Result6.getChannelIconWithGuild(stateFromStores1, stateFromStores2);
      if (stateFromStores1.isDM()) {
        const recipientId = stateFromStores1.getRecipientId();
        let tmp31Result = null;
        const obj25 = { userId: recipientId, style: tmp.navbarTitlePrimaryText };
        const isSystemDMResult = stateFromStores1.isSystemDM();
        const tmp33 = closure_16(DMChannelName, obj25);
        if (!isSystemDMResult) {
          const obj26 = { userId: recipientId, style: tmp.status };
          tmp31Result = tmp31(ConnectedStatus, obj26);
        }
        const obj27 = { userId: recipientId, guildId: guild_id };
        guild_id = undefined;
        const tmp8Result2 = threadDraft(stateFromStores1[20]);
        if (stateFromStores1 != null) {
          guild_id = stateFromStores1.guild_id;
        }
        const obj28 = { onPressTitle, style, children: closure_16(ChannelTitleContent, obj29) };
        obj29 = { title: tmp33, icon: channelIconWithGuild, titleSuffix: tmp31Result, subTitle: closure_16(tmp8Result2, obj27) };
        return closure_16(ChannelTitleWrapper, obj28);
      } else {
        const isThreadResult = stateFromStores1.isThread();
        const intl4 = tmp2(tmp3[17]).intl;
        const formatToPlainString = intl4.formatToPlainString;
        const t2 = tmp2(tmp3[17]).t;
        if (isThreadResult) {
          const obj30 = { channelName };
          const obj31 = { onPressTitle, style, children: closure_16(tmp26, obj32) };
          obj32 = { title: channelName, accessibleTitle: formatToPlainString(t2["OkzL+Q"], obj30), icon: channelIconWithGuild, subTitle: tmp24Result };
          tmp24Result = null != stateFromStores3;
          const tmp25 = ChannelTitleWrapper;
          tmp26 = ChannelTitleContent;
          if (tmp24Result) {
            const obj33 = { parentChannel: stateFromStores3 };
            tmp24Result = tmp24(ParentChannelSubTitle, obj33);
          }
          return closure_16(tmp25, obj31);
        } else {
          const obj34 = { channelName };
          const obj35 = { onPressTitle, style, children: closure_16(ChannelTitleContent, obj36) };
          obj36 = { title: channelName, accessibleTitle: formatToPlainString(t2.UbNmGc, obj34), icon: channelIconWithGuild };
          return closure_16(ChannelTitleWrapper, obj35);
        }
      }
    }
  }
});
size = size_mod;
let result = size.fileFinishedImporting("modules/navbars/native/components/ChannelNavbar.tsx");

export const ChannelTitleWithoutRoute = function ChannelTitleWithoutRoute(arg0) {
  let connected;
  let obj7;
  let obj9;
  let onPressTitle;
  let stringResult;
  let tmp13;
  ({ onPressTitle, channelId: require } = arg0);
  const tmp = closure_18();
  const items = [ChannelStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(require));
  const items1 = [GatewayConnectionStore];
  const obj3 = get_initialized;
  const stateFromStores1 = obj3.useStateFromStores(items1, () => connected.isConnected());
  const intl = intl10.intl;
  const string = intl.string;
  const t = intl10.t;
  if (stateFromStores1) {
    stringResult = string(t.ai6Lbr);
  } else {
    stringResult = string(t.ZTNur7);
  }
  let channelIcon = null;
  if (null != stateFromStores) {
    const tmp2Result = utils_ChannelUtils;
    channelIcon = tmp2Result.getChannelIcon(stateFromStores);
  }
  let channelName = null;
  if (null != stateFromStores) {
    const tmp2Result2 = useChannelName;
    channelName = tmp2Result2.computeChannelName(stateFromStores, UserStore, RelationshipStore);
  }
  let isDMResult;
  if (stateFromStores != null) {
    isDMResult = stateFromStores.isDM();
  }
  if (isDMResult) {
    const recipientId = stateFromStores.getRecipientId();
    let tmp16Result = null;
    const obj2 = { userId: recipientId, style: tmp.navbarTitlePrimaryText };
    const isSystemDMResult = stateFromStores.isSystemDM();
    const tmp18 = closure_16(DMChannelName, obj2);
    if (!isSystemDMResult) {
      const obj4 = { userId: recipientId, style: tmp.status };
      tmp16Result = tmp16(ConnectedStatus, obj4);
    }
    const obj5 = { userId: recipientId, guildId: stateFromStores.guild_id };
    const obj6 = { onPressTitle, children: closure_16(ChannelTitleContent, obj7) };
    obj7 = { title: tmp18, icon: channelIcon, titleSuffix: tmp16Result, subTitle: closure_16(ActivityStatusDefault, obj5) };
    return closure_16(ChannelTitleWrapper, obj6);
  } else {
    const obj8 = { onPressTitle, children: closure_16(tmp13, obj9) };
    const tmp12 = ChannelTitleWrapper;
    tmp13 = ChannelTitleContent;
    if (channelName == null) {
      channelName = stringResult;
    }
    obj9 = { title: channelName, icon: channelIcon };
    return closure_16(tmp12, obj8);
  }
};
export const ChannelTitle = memoResult;
export const ChannelButtons = function ChannelButtons(buttons) {
  let constants2;
  let mapped;
  buttons = buttons.buttons;
  let obj = { style: buttons.style, children: mapped };
  mapped = undefined;
  let tmp = authStore3;
  let tmp2 = View;
  if (buttons != null) {
    mapped = buttons.map((onPress, index) => {
      let accessibilityLabel;
      let children;
      let color;
      let disabled;
      let items1;
      let onLongPress;
      let source;
      let style;
      onPress = onPress.onPress;
      const hasActivitiesPrivateChannelTooltip = onPress.hasActivitiesPrivateChannelTooltip;
      ({ onLongPress, source, color, style, accessibilityLabel, children, disabled } = onPress);
      let tmp = closure_17;
      let tmp2 = closure_4;
      let obj = { accessibilityRole: "button", accessibilityLabel, color, source, onPress, onLongPress, disabled, style, children };
      const tmp4 = closure_1;
      const tmp6 = closure_1(closure_2[33]);
      if (hasActivitiesPrivateChannelTooltip) {
        onPress = (arg0) => {
          if (null != fn) {
            tmp(arg0);
          }
          const obj = DismissibleContentUnsafeUtils;
          const obj2 = { dismissAction: constants.AUTO };
          const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, obj2);
        };
      }
      const children1 = [tmp3(tmp6, obj), ];
      let tmp3Result = null;
      if (hasActivitiesPrivateChannelTooltip) {
        let obj2 = {
          contentTypes: items1,
          groupName: constants2.CHANNEL_HEADER_CALL_BUTTON_TOOLTIPS,
          children(markAsDismissed) {
              markAsDismissed = markAsDismissed.markAsDismissed;
              let tmp2 = null;
              const tmp = closure_2;
              if (markAsDismissed.visibleContent === markAsDismissed(closure_2[35]).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP) {
                const obj = {
                  onClosePress() {
                      return markAsDismissed(constants.UNKNOWN);
                    }
                };
                tmp2 = closure_16(closure_1(tmp[37]), obj);
              }
              return tmp2;
            }
        };
        items1 = [];
        const tmp4Result = tmp4(closure_2[36]);
        items1[0] = onPress(closure_2[35]).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP;
        tmp3Result = tmp3(tmp4Result, obj2);
      }
      children1[1] = tmp3Result;
      return tmp(tmp2, { children: children1 }, index);
    });
  }
  return tmp(tmp2, obj);
};
