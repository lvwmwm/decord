// Module ID: 11340
// Function ID: 88232
// Name: ChannelIcon
// Dependencies: [57, 31, 1838, 33, 4130, 689, 4638, 4593, 11331, 4974, 4098, 11318, 11319, 4320, 5165, 4126, 2]
// Exports: default

// Module 11340 (ChannelIcon)
import _slicedToArray from "_slicedToArray";
import result from "result";
import closure_5 from "_createForOfIteratorHelperLoose";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
class ChannelIcon {
  constructor(arg0) {
    ({ channel, size } = global);
    if (size === undefined) {
      size = "sm";
    }
    num = global.wrapperSize;
    if (num === undefined) {
      num = 32;
    }
    tmp = c8();
    TextIcon = require("TextIcon").TextIcon;
    if (null != channel) {
      tmp2 = c5;
      tmp4 = closure_0;
      tmp5 = closure_2;
      num2 = 7;
      guild = c5.getGuild(channel.getGuildId());
      obj = require("getThreadChannelIcon");
      TextIcon2 = obj.getChannelIconComponentWithGuild(channel, guild);
      if (null == TextIcon2) {
        tmp6 = closure_0;
        tmp7 = closure_2;
        TextIcon2 = require("TextIcon").TextIcon;
      }
      TextIcon = TextIcon2;
    }
    obj = {};
    obj1 = {};
    obj1.size = size;
    obj1.color = "interactive-text-default";
    tmp8 = require("styles");
    obj.icon = jsx(TextIcon, obj1);
    obj.wrapperStyle = tmp.channelIconWrapper;
    obj.wrapperSize = num;
    return jsx(tmp8, obj);
  }
}
function ChannelListItem(arg0) {
  let channel;
  let index;
  let onPress;
  let totalCount;
  ({ channel, index } = arg0);
  ({ totalCount, onPress } = arg0);
  let obj = { onPress };
  obj = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: importDefault(4320)(channel) };
  obj.label = callback(require(4126) /* Text */.Text, obj);
  obj.icon = callback(ChannelIcon, { channel });
  obj.start = 0 === index;
  obj.end = index === totalCount - 1;
  return callback(require(5165) /* TableRowInner */.TableRow, obj, channel.id);
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
_createForOfIteratorHelperLoose.channelIconWrapper = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/app_launcher/native/options/channel/AppLauncherChannelListActionSheet.tsx");

export default function AppLauncherChannelListActionSheet(channel) {
  let onActionSheetDismiss;
  let require;
  ({ onChannelPress: require, onActionSheetDismiss } = channel);
  channel = channel.channel;
  const option = channel.option;
  function handleChannelPress(channel) {
    callback({ channel: channel.channel });
    onActionSheetDismiss(channel[10]).hideActionSheet("AppLauncherChannelListActionSheet");
    onActionSheetDismiss();
  }
  const tmp = option(first.useState(""), 2);
  first = tmp[0];
  let closure_5 = tmp[1];
  const ref = first.useRef(null);
  const tmp4 = option(first.useState([]), 2);
  const first1 = tmp4[0];
  let closure_8 = tmp4[1];
  const items = [first, channel, option];
  const effect = first.useEffect(() => {
    let obj = onActionSheetDismiss(channel[9]);
    obj = { query: first, channel, channelTypes: option.channelTypes, limit: null, allowSnowflake: true };
    callback3(obj.queryApplicationCommandChannelResults(obj).channels);
  }, items);
  let obj = { onDismiss: onActionSheetDismiss, option };
  obj = {
    onChange(str) {
      callback2(str.toLowerCase());
      const current = ref.current;
      if (null != current) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
    }
  };
  const items1 = [ref(require(channel[12]).AppLauncherListSearchBar, obj), ];
  if (0 === first1.length) {
    let tmp10 = ref(require(channel[12]).AppLauncherListEmptyState, {});
  } else {
    obj = {
      ref,
      data: first1,
      renderItem(index) {
          const item = index.item;
          return ref(outer1_10, {
            channel: item,
            index: index.index,
            totalCount: first1.length,
            onPress() {
              outer1_9({ channel: item });
            }
          });
        }
    };
    tmp10 = ref(require(channel[12]).AppLauncherList, obj);
  }
  items1[1] = tmp10;
  obj.children = items1;
  return first1(require(channel[11]).AppLauncherCommandOptionActionSheet, obj);
};
export const APP_LAUNCHER_CHANNEL_LIST_ACTION_SHEET_KEY = "AppLauncherChannelListActionSheet";
export { ChannelIcon };
