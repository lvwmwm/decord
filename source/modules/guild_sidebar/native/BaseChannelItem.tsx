// Module ID: 11413
// Function ID: 88738
// Name: BaseChannelSubtitle
// Dependencies: []
// Exports: BaseChannelIcon, BaseChannelName, default

// Module 11413 (BaseChannelSubtitle)
class BaseChannelSubtitle {
  constructor(arg0) {
    subtitle = global.subtitle;
    tmp = getChannelSubtitleTextProps(global.mode);
    tmp2 = null;
    if (null != subtitle) {
      tmp3 = jsx;
      tmp4 = arg1;
      tmp5 = dependencyMap;
      num = 7;
      obj = {};
      num2 = 8;
      obj2 = arg1(dependencyMap[8]);
      obj.experimental_useNativeText = !obj2.isAndroid();
      num3 = 1;
      obj.lineClamp = 1;
      tmp6 = obj;
      tmp7 = tmp;
      merged = Object.assign(tmp);
      str = "children";
      obj["children"] = subtitle;
      tmp2 = jsx(arg1(dependencyMap[7]).Text, obj);
    }
    return tmp2;
  }
}
function useChannelNameTextProps(channelMode) {
  if (channelMode !== obj.UNREAD_IMPORTANT) {
    if (channelMode !== obj.RELEVANT) {
      if (channelMode === obj.UNREAD_LESS_IMPORTANT) {
        let obj = {};
      } else if (channelMode === obj.MUTED) {
        obj = {};
      } else {
        obj = channelMode === obj.SELECTED ? {} : {};
      }
    }
    return {};
  }
}
function getChannelSubtitleTextProps(channelMode) {
  if (channelMode !== obj.UNREAD_IMPORTANT) {
    if (channelMode !== obj.RELEVANT) {
      if (channelMode !== obj.SELECTED) {
        const MUTED = obj.MUTED;
        const obj = {};
      }
      return {};
    }
  }
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const CHANNEL_TITLE_LINE_HEIGHT = arg1(dependencyMap[2]).CHANNEL_TITLE_LINE_HEIGHT;
const UnreadSetting = arg1(dependencyMap[3]).UnreadSetting;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
let closure_9 = obj.createStyles((arg0) => {
  let obj = { rowPaddingNoIcon: { paddingHorizontal: 6 } };
  obj = { borderRadius: importDefault(dependencyMap[6]).modules.mobile.CHANNEL_ITEM_RADIUS, backgroundColor: importDefault(dependencyMap[6]).colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED };
  obj.rowSelected = obj;
  obj = { left: -importDefault(dependencyMap[6]).space.PX_8 };
  obj.unreadIndicator = obj;
  const obj1 = { 0: 24, 9223372036854775807: 24, -9223372036854775808: null };
  let num = 1;
  let num2 = 1;
  if (arg0 === obj.MUTED) {
    num2 = 0.5;
  }
  obj1.opacity = num2;
  obj.channelIcon = obj1;
  const obj2 = { marginRight: 8 };
  let num3 = num;
  if (arg0 === obj.MUTED) {
    num3 = 0.5;
  }
  obj2.opacity = num3;
  obj.redesignedChannelIcon = obj2;
  obj.channelIconNormal = { tintColor: importDefault(dependencyMap[6]).colors.CHANNEL_ICON };
  const obj3 = { tintColor: importDefault(dependencyMap[6]).colors.CHANNEL_ICON };
  obj.channelIconUnread = { tintColor: importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_ACTIVE };
  const obj4 = { tintColor: importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_ACTIVE };
  obj.channelIconMuted = { tintColor: importDefault(dependencyMap[6]).colors.ICON_MUTED };
  obj.channel = { saveToPhotos: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011797377198986917, onVideoLoadStart: 0.000000000000000000000000000000000000000000000000000000000000000000000001207405474077301, U: 15.1, headMetaSocial: null, includeExtra: "\u{1F9D1}\u{1F3FE}\u200D\u{1F9BD}\u200D\u27A1\uFE0F" };
  obj.channelNameContainer = { paddingTop: "Array", zIndex: "E2EE_SETTINGS_DEVICE_DELETE", flexDirection: "Array", alignItems: "GUILD_TOOLTIP_SHOWN" };
  const obj6 = { "Null": false, "Null": false, lineHeight: CHANNEL_TITLE_LINE_HEIGHT };
  if (arg0 === obj.MUTED) {
    num = 0.5;
  }
  obj6.opacity = num;
  obj.channelName = obj6;
  return obj;
});
obj = { SELECTED: "Selected", LOCKED: "Locked", MUTED: "Muted", RELEVANT: "Relevant", UNREAD_LESS_IMPORTANT: "UnreadLessImportant", UNREAD_IMPORTANT: "UnreadImportant", DEFAULT: "Default" };
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/guild_sidebar/native/BaseChannelItem.tsx");

export default function BaseChannelItem(mode) {
  let channelInfo;
  let children;
  let icon;
  let name;
  let unread;
  mode = mode.mode;
  const arg1 = mode;
  const hideIcon = mode.hideIcon;
  const importDefault = hideIcon;
  let flag = mode.disableHighlightOnPress;
  ({ icon, name } = mode);
  if (flag === undefined) {
    flag = false;
  }
  ({ unread, channelInfo, children } = mode);
  if (unread === undefined) {
    unread = false;
  }
  let obj = { "Bool(false)": null, "Bool(false)": 0.6, "Bool(false)": "BounceOutRight", "Bool(false)": null, "Bool(false)": 0.6, "Bool(false)": "BounceOutLeft", "Bool(false)": null, "Bool(false)": 0.6 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(mode, obj);
  let dependencyMap;
  const tmp3 = callback3(mode);
  dependencyMap = tmp3;
  const items = [hideIcon, mode, tmp3];
  obj = {
    style: React.useMemo(() => {
      const items = [tmp3.channel, , ];
      let rowPaddingNoIcon = hideIcon;
      if (hideIcon) {
        rowPaddingNoIcon = tmp3.rowPaddingNoIcon;
      }
      items[1] = rowPaddingNoIcon;
      let rowSelected = mode === constants.SELECTED;
      if (rowSelected) {
        rowSelected = tmp3.rowSelected;
      }
      items[2] = rowSelected;
      return items;
    }, items)
  };
  if (!!hideIcon) {
    const items1 = [tmp6, !hideIcon && icon, name, channelInfo];
    obj.children = items1;
    if (flag) {
      let AnimatedPressableHighlight = importDefault(dependencyMap[12]);
    } else {
      AnimatedPressableHighlight = arg1(dependencyMap[11]).AnimatedPressableHighlight;
    }
    obj = {};
    const merged1 = Object.assign(merged);
    const items2 = [tmp4(tmp5, obj), children];
    obj["children"] = items2;
    return closure_8(AnimatedPressableHighlight, obj);
  } else {
    const obj1 = { style: tmp3.unreadIndicator, unread };
    if (mode === obj.UNREAD_LESS_IMPORTANT) {
      let ALL_MESSAGES = UnreadSetting.ONLY_MENTIONS;
    } else {
      ALL_MESSAGES = UnreadSetting.ALL_MESSAGES;
    }
    obj1.resolvedUnreadSetting = ALL_MESSAGES;
    closure_7(importDefault(dependencyMap[10]), obj1);
    const tmp10 = importDefault(dependencyMap[10]);
    const tmp7 = closure_7;
  }
};
export const ChannelModes = obj;
export { BaseChannelSubtitle };
export const BaseChannelIcon = function BaseChannelIcon(arg0) {
  let IconComponent;
  let disableColor;
  let isChannelLive;
  let mode;
  let source;
  let style;
  ({ disableColor, mode, IconComponent, style } = arg0);
  ({ source, isChannelLive } = arg0);
  const tmp = callback3(mode);
  const items = [tmp.channelIcon];
  if (true === disableColor) {
    if (null != style) {
      items.push(style);
    }
    if (null != IconComponent) {
      let obj = { size: "sm", style: tmp.redesignedChannelIcon };
      let str2 = "status-positive";
      if (!isChannelLive) {
        let str3 = "icon-muted";
        if (!tmp2) {
          if (tmp3) {
            let str4 = "interactive-text-active";
          } else {
            str4 = "channel-icon";
          }
          str3 = str4;
        }
        str2 = str3;
      }
      obj.color = str2;
      let tmp12Result = callback(IconComponent, obj);
      const tmp12 = callback;
    } else {
      obj = { disableColor, size: arg1(dependencyMap[9]).Icon.Sizes.CUSTOM, style: items, source };
      tmp12Result = callback(arg1(dependencyMap[9]).Icon, obj);
    }
    return tmp12Result;
  } else {
    if (tmp2) {
      let channelIconUnread = tmp.channelIconMuted;
    } else {
      if (!tmp3) {
        if (!tmp4) {
          channelIconUnread = tmp.channelIconNormal;
        }
      }
      channelIconUnread = tmp.channelIconUnread;
    }
    items.push(channelIconUnread);
  }
};
export { useChannelNameTextProps };
export { getChannelSubtitleTextProps };
export const BaseChannelName = function BaseChannelName(mode) {
  let name;
  let subtitle;
  let textStyle;
  mode = mode.mode;
  ({ name, subtitle, textStyle } = mode);
  const tmp = callback3(mode);
  let obj = { style: tmp.channelNameContainer };
  obj = { experimental_useNativeText: true };
  const merged = Object.assign(useChannelNameTextProps(mode));
  obj["lineClamp"] = 1;
  const items = [tmp.channelName, textStyle];
  obj["style"] = items;
  obj["children"] = name;
  const items1 = [callback(arg1(dependencyMap[7]).Text, obj), callback(BaseChannelSubtitle, { mode, subtitle })];
  obj.children = items1;
  return callback2(View, obj);
};
