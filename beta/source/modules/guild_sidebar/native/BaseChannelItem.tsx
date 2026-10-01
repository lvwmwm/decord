// Module ID: 11868
// Function ID: 11869
// Name: BaseChannelItem
// Dependencies: [19, 17, 9577, 5018, 21, 4836, 576, 4832, 1365, 1177, 9625, 8370, 11869, 2]
// Exports: BaseChannelIcon, BaseChannelName, default, getChannelSubtitleTextProps, useChannelNameTextProps

// Module 11868 (BaseChannelItem)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import Text_Text from "Text/Text" /* 4832 */;
import ReadStateConstants from "ReadStateConstants" /* 5018 */;
import react from "react" /* 19 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 9577 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
class BaseChannelSubtitle {
  constructor(arg0) {
    let mode;
    let obj;
    let subtitle;
    ({ mode, subtitle } = arg0);
    if (mode !== obj.UNREAD_IMPORTANT) {
      if (mode !== obj.RELEVANT) {
        if (mode !== obj.SELECTED) {
          const MUTED = tmp.MUTED;
          obj = { variant: hasOwnProperty, color: "text-muted" };
        }
        let tmp4Result = null;
        if (null != subtitle) {
          const Text = Text_Text.Text;
          const obj3 = utils_PlatformUtils;
          const obj2 = { experimental_useNativeText: !obj3.isAndroid() && typeof subtitle === "string", lineClamp: 1, children: subtitle };
          !obj3.isAndroid() && typeof subtitle === "string";
          const merged = Object.assign(obj);
          tmp4Result = metroImportAll(Text, obj2);
        }
        return tmp4Result;
      }
    }
    obj = { variant: hasOwnProperty, color: "redesign-channel-name-text" };
  }
}
const View = react_native.View;
({ CHANNEL_SUBTITLE_TEXT_VARIANT: hasOwnProperty, CHANNEL_TITLE_LINE_HEIGHT: metroRequire } = RedesignChannelListConstants);
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles((arg0) => {
  let num2;
  let num3;
  let obj7;
  const obj = { rowPaddingNoIcon: { paddingHorizontal: 6 }, rowSelected: { borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS, backgroundColor: nativeDefault.colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED }, unreadIndicator: { left: -nativeDefault.space.PX_8 }, channelIcon: { width: 16, height: 16, marginRight: 8, opacity: num2 }, redesignedChannelIcon: { marginRight: 8, opacity: num3 }, channelIconNormal: { tintColor: nativeDefault.colors.CHANNEL_ICON }, channelIconUnread: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE }, channelIconMuted: { tintColor: nativeDefault.colors.ICON_MUTED }, channel: { paddingHorizontal: 8, paddingVertical: 8, flexDirection: "row", alignItems: "center", position: "relative" }, channelNameContainer: { flex: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "center" }, channelName: obj7 };
  ({ borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS, backgroundColor: nativeDefault.colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED });
  let num = 1;
  num2 = 1;
  ({ left: -nativeDefault.space.PX_8 });
  if (arg0 === obj.MUTED) {
    num2 = 0.5;
  }
  num3 = num;
  if (arg0 === obj.MUTED) {
    num3 = 0.5;
  }
  ({ tintColor: nativeDefault.colors.CHANNEL_ICON });
  ({ tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE });
  obj7 = { flexGrow: 1, textAlign: "left", lineHeight: metroRequire, opacity: num };
  ({ tintColor: nativeDefault.colors.ICON_MUTED });
  if (arg0 === obj.MUTED) {
    num = 0.5;
  }
  return obj;
});
const ChannelModes = { SELECTED: "Selected", LOCKED: "Locked", MUTED: "Muted", RELEVANT: "Relevant", UNREAD_LESS_IMPORTANT: "UnreadLessImportant", UNREAD_IMPORTANT: "UnreadImportant", DEFAULT: "Default" };
const result = size.fileFinishedImporting("modules/guild_sidebar/native/BaseChannelItem.tsx");

export default function BaseChannelItem(mode) {
  let ALL_MESSAGES;
  let AnimatedPressableHighlight;
  let channel;
  let channelInfo;
  let children;
  let icon;
  let items1;
  let items2;
  let name;
  let unread;
  mode = mode.mode;
  const hideIcon = mode.hideIcon;
  let flag = mode.disableHighlightOnPress;
  ({ icon, name } = mode);
  if (flag === undefined) {
    flag = false;
  }
  ({ unread, channelInfo, children } = mode);
  if (unread === undefined) {
    unread = false;
  }
  const merged = Object.assign(mode, Object.assign({ icon: 0, name: 0, mode: 0, hideIcon: 0, disableHighlightOnPress: 0, channelInfo: 0, children: 0, unread: 0 }));
  const tmp2 = closure_10(mode);
  dependencyMap = tmp2;
  let items = [hideIcon, mode, tmp2];
  const obj = {
    style: react.useMemo(() => {
      const items = [channel.channel, hideIcon && channel.rowPaddingNoIcon, mode === obj.SELECTED && channel.rowSelected];
      return items;
    }, items),
    children: items1
  };
  let tmp6Result = !hideIcon;
  const tmp4 = View;
  if (!hideIcon) {
    const obj2 = { style: tmp2.unreadIndicator, unread, resolvedUnreadSetting: ALL_MESSAGES };
    const tmp6 = closure_8;
    const tmp9 = hideIcon(9625);
    if (mode === obj.UNREAD_LESS_IMPORTANT) {
      ALL_MESSAGES = UnreadSetting.ONLY_MENTIONS;
    } else {
      ALL_MESSAGES = UnreadSetting.ALL_MESSAGES;
    }
    tmp6Result = tmp6(tmp9, obj2);
  }
  items1 = [tmp6Result, !hideIcon && icon, name, channelInfo];
  const tmp3Result = closure_9(tmp4, obj);
  if (flag) {
    AnimatedPressableHighlight = hideIcon(11869);
  } else {
    AnimatedPressableHighlight = mode(8370).AnimatedPressableHighlight;
  }
  const obj3 = { children: items2 };
  const merged1 = Object.assign(merged);
  items2 = [tmp3Result, children];
  return closure_9(AnimatedPressableHighlight, obj3);
};
export { ChannelModes };
export { BaseChannelSubtitle };
export const BaseChannelIcon = function BaseChannelIcon(arg0) {
  let IconComponent;
  let disableColor;
  let isChannelLive;
  let mode;
  let obj;
  let source;
  let str;
  let style;
  let tmp11Result;
  ({ disableColor, mode, IconComponent, style } = arg0);
  ({ source, isChannelLive } = arg0);
  const tmp = closure_10(mode);
  const items = [tmp.channelIcon];
  if (true !== disableColor) {
    let channelIconUnread;
    const push = items.push;
    if (mode === obj.MUTED) {
      channelIconUnread = tmp.channelIconMuted;
    } else {
      if (mode !== obj.UNREAD_IMPORTANT) {
        if (mode !== obj.SELECTED) {
          channelIconUnread = tmp.channelIconNormal;
        }
      }
      channelIconUnread = tmp.channelIconUnread;
    }
    push(channelIconUnread);
  }
  if (null != style) {
    items.push(style);
  }
  if (null != IconComponent) {
    const obj2 = { size: "sm", style: tmp.redesignedChannelIcon, color: str };
    str = "status-positive";
    const tmp11 = metroImportAll;
    if (!isChannelLive) {
      let str2 = "icon-muted";
      if (mode !== obj.MUTED) {
        let str3;
        if (mode === obj.UNREAD_IMPORTANT) {
          str3 = "interactive-text-active";
        } else {
          str3 = "channel-icon";
        }
        str2 = str3;
      }
      str = str2;
    }
    tmp11Result = tmp11(IconComponent, obj2);
  } else {
    obj = { disableColor, size: native.Icon.Sizes.CUSTOM, style: items, source };
    const Icon = native.Icon;
    tmp11Result = metroImportAll(Icon, obj);
  }
  return tmp11Result;
};
export const useChannelNameTextProps = function useChannelNameTextProps(channelMode) {
  let obj;
  if (channelMode !== obj.UNREAD_IMPORTANT) {
    if (channelMode !== obj.RELEVANT) {
      if (channelMode === obj.UNREAD_LESS_IMPORTANT) {
        obj = { variant: "text-md/medium", color: "redesign-channel-name-muted-text" };
      } else if (channelMode === obj.MUTED) {
        obj = { variant: "text-md/medium", color: "text-muted" };
      } else {
        obj = channelMode === tmp.SELECTED ? { variant: "text-md/medium", color: "redesign-channel-name-text" } : { variant: "text-md/medium", color: "redesign-channel-name-muted-text" };
      }
    }
    return { variant: "text-md/semibold", color: "redesign-channel-name-text" };
  }
};
export const getChannelSubtitleTextProps = function getChannelSubtitleTextProps(channelMode) {
  let obj;
  if (channelMode !== obj.UNREAD_IMPORTANT) {
    if (channelMode !== obj.RELEVANT) {
      if (channelMode !== obj.SELECTED) {
        const MUTED = tmp.MUTED;
        obj = { variant: hasOwnProperty, color: "text-muted" };
      }
      return obj;
    }
  }
  obj = { variant: hasOwnProperty, color: "redesign-channel-name-text" };
};
export const BaseChannelName = function BaseChannelName(mode) {
  let items;
  let name;
  let subtitle;
  let textStyle;
  mode = mode.mode;
  ({ name, subtitle, textStyle } = mode);
  const tmp = closure_10(mode);
  const obj = { style: tmp.channelNameContainer, children: null };
  const tmp2 = React4;
  const tmp3 = View;
  if (mode !== obj.UNREAD_IMPORTANT) {
    let obj2;
    if (mode !== obj.RELEVANT) {
      if (mode === obj.UNREAD_LESS_IMPORTANT) {
        obj2 = { variant: "text-md/medium", color: "redesign-channel-name-muted-text" };
      } else if (mode === obj.MUTED) {
        obj2 = { variant: "text-md/medium", color: "text-muted" };
      } else {
        obj2 = mode === tmp6.SELECTED ? { variant: "text-md/medium", color: "redesign-channel-name-text" } : { variant: "text-md/medium", color: "redesign-channel-name-muted-text" };
      }
    }
    const obj3 = { experimental_useNativeText: true, lineClamp: 1, style: items, children: name };
    const merged = Object.assign(obj2);
    items = [tmp.channelName, textStyle];
    const items1 = [metroImportAll(tmp5, obj3), ];
    const obj4 = { mode, subtitle };
    items1[1] = metroImportAll(BaseChannelSubtitle, obj4);
    obj.children = items1;
    return tmp2(tmp3, obj);
  }
  obj2 = { variant: "text-md/semibold", color: "redesign-channel-name-text" };
};
