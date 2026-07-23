// Module ID: 11424
// Function ID: 88813
// Name: BaseChannelSubtitle
// Dependencies: [31, 27, 10260, 4326, 33, 4130, 689, 4126, 478, 1273, 10304, 8372, 11425, 2]
// Exports: BaseChannelIcon, BaseChannelName, default

// Module 11424 (BaseChannelSubtitle)
import result from "result";
import { View } from "get ActivityIndicator";
import { CHANNEL_TITLE_LINE_HEIGHT } from "hairlineWidth";
import { UnreadSetting } from "ReadStateTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
class BaseChannelSubtitle {
  constructor(arg0) {
    subtitle = global.subtitle;
    tmp = getChannelSubtitleTextProps(global.mode);
    tmp2 = null;
    if (null != subtitle) {
      tmp3 = jsx;
      tmp4 = closure_0;
      tmp5 = closure_2;
      num = 7;
      obj = {};
      num2 = 8;
      obj2 = require("isWindows");
      obj.experimental_useNativeText = !obj2.isAndroid();
      num3 = 1;
      obj.lineClamp = 1;
      tmp6 = obj;
      tmp7 = tmp;
      merged = Object.assign(tmp);
      str = "children";
      obj["children"] = subtitle;
      tmp2 = jsx(require("Text").Text, obj);
    }
    return tmp2;
  }
}
function useChannelNameTextProps(channelMode) {
  if (channelMode !== _createForOfIteratorHelperLoose.UNREAD_IMPORTANT) {
    return { variant: "text-md/semibold", color: "redesign-channel-name-text" };
  }
}
function getChannelSubtitleTextProps(channelMode) {
  if (channelMode !== _createForOfIteratorHelperLoose.UNREAD_IMPORTANT) {
    if (channelMode !== _createForOfIteratorHelperLoose.RELEVANT) {
      if (channelMode !== _createForOfIteratorHelperLoose.SELECTED) {
        const MUTED = _createForOfIteratorHelperLoose.MUTED;
      }
      return { variant: "text-xs/medium", color: "redesign-channel-name-text" };
    }
  }
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = { rowPaddingNoIcon: { paddingHorizontal: 6 } };
  obj = { borderRadius: importDefault(689).modules.mobile.CHANNEL_ITEM_RADIUS, backgroundColor: importDefault(689).colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED };
  obj.rowSelected = obj;
  obj = { left: -importDefault(689).space.PX_8 };
  obj.unreadIndicator = obj;
  const obj1 = { width: 16, height: 16, marginRight: 8 };
  let num = 1;
  let num2 = 1;
  if (arg0 === _createForOfIteratorHelperLoose.MUTED) {
    num2 = 0.5;
  }
  obj1.opacity = num2;
  obj.channelIcon = obj1;
  const obj2 = { marginRight: 8 };
  let num3 = num;
  if (arg0 === _createForOfIteratorHelperLoose.MUTED) {
    num3 = 0.5;
  }
  obj2.opacity = num3;
  obj.redesignedChannelIcon = obj2;
  obj.channelIconNormal = { tintColor: importDefault(689).colors.CHANNEL_ICON };
  const obj3 = { tintColor: importDefault(689).colors.CHANNEL_ICON };
  obj.channelIconUnread = { tintColor: importDefault(689).colors.INTERACTIVE_TEXT_ACTIVE };
  const obj4 = { tintColor: importDefault(689).colors.INTERACTIVE_TEXT_ACTIVE };
  obj.channelIconMuted = { tintColor: importDefault(689).colors.ICON_MUTED };
  obj.channel = { paddingHorizontal: 8, paddingVertical: 8, flexDirection: "row", alignItems: "center", position: "relative" };
  obj.channelNameContainer = { flex: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "center" };
  const obj6 = { flexGrow: 1, textAlign: "left", lineHeight: CHANNEL_TITLE_LINE_HEIGHT };
  if (arg0 === _createForOfIteratorHelperLoose.MUTED) {
    num = 0.5;
  }
  obj6.opacity = num;
  obj.channelName = obj6;
  return obj;
});
_createForOfIteratorHelperLoose = { SELECTED: "Selected", LOCKED: "Locked", MUTED: "Muted", RELEVANT: "Relevant", UNREAD_LESS_IMPORTANT: "UnreadLessImportant", UNREAD_IMPORTANT: "UnreadImportant", DEFAULT: "Default" };
const result = require("hairlineWidth").fileFinishedImporting("modules/guild_sidebar/native/BaseChannelItem.tsx");

export default function BaseChannelItem(mode) {
  let channelInfo;
  let children;
  let icon;
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
  let obj = { icon: 0, name: 0, mode: 0, hideIcon: 0, disableHighlightOnPress: 0, channelInfo: 0, children: 0, unread: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(mode, obj);
  let dependencyMap;
  const tmp3 = callback3(mode);
  dependencyMap = tmp3;
  let items = [hideIcon, mode, tmp3];
  obj = {
    style: React.useMemo(() => {
      const items = [_undefined.channel, , ];
      let rowPaddingNoIcon = hideIcon;
      if (hideIcon) {
        rowPaddingNoIcon = _undefined.rowPaddingNoIcon;
      }
      items[1] = rowPaddingNoIcon;
      let rowSelected = mode === outer1_10.SELECTED;
      if (rowSelected) {
        rowSelected = _undefined.rowSelected;
      }
      items[2] = rowSelected;
      return items;
    }, items)
  };
  if (!!hideIcon) {
    const items1 = [tmp6, !hideIcon && icon, name, channelInfo];
    obj.children = items1;
    if (flag) {
      let AnimatedPressableHighlight = hideIcon(11425);
    } else {
      AnimatedPressableHighlight = mode(8372).AnimatedPressableHighlight;
    }
    obj = {};
    const merged1 = Object.assign(merged);
    const items2 = [tmp4(tmp5, obj), children];
    obj["children"] = items2;
    return closure_8(AnimatedPressableHighlight, obj);
  } else {
    const obj1 = { style: tmp3.unreadIndicator, unread };
    if (mode === _createForOfIteratorHelperLoose.UNREAD_LESS_IMPORTANT) {
      let ALL_MESSAGES = UnreadSetting.ONLY_MENTIONS;
    } else {
      ALL_MESSAGES = UnreadSetting.ALL_MESSAGES;
    }
    obj1.resolvedUnreadSetting = ALL_MESSAGES;
    closure_7(hideIcon(10304), obj1);
    const tmp10 = hideIcon(10304);
    const tmp7 = closure_7;
  }
};
export const ChannelModes = _createForOfIteratorHelperLoose;
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
      obj = { disableColor, size: require(1273) /* Button */.Icon.Sizes.CUSTOM, style: items, source };
      tmp12Result = callback(require(1273) /* Button */.Icon, obj);
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
  const items1 = [callback(require(4126) /* Text */.Text, obj), callback(BaseChannelSubtitle, { mode, subtitle })];
  obj.children = items1;
  return callback2(View, obj);
};
