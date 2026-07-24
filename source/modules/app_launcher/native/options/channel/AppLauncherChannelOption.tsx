// Module ID: 11339
// Function ID: 88225
// Name: AppLauncherChannelOption
// Dependencies: [57, 31, 1348, 33, 566, 4320, 11328, 11340, 4098, 11340, 1934, 2]
// Exports: default

// Module 11339 (AppLauncherChannelOption)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_launcher/native/options/channel/AppLauncherChannelOption.tsx");

export default function AppLauncherChannelOption(option) {
  let autoFocus;
  let _slicedToArray;
  let result;
  let _isNativeReflectConstruct;
  let hasError;
  let importDefault;
  let onChannelPress;
  let style;
  option = option.option;
  ({ initialValue: importDefault, onChannelPress } = option);
  ({ onActionSheetDismiss: _slicedToArray, channel: result, onPress: _isNativeReflectConstruct } = option);
  ({ style, autoFocus, hasError } = option);
  let tmp = callback(React.useState(() => {
    let channelId = null;
    if (null != closure_1) {
      channelId = null;
      if ("channelMention" === closure_1.type) {
        channelId = closure_1.channelId;
      }
    }
    return channelId;
  }), 2);
  const first = tmp[0];
  let closure_7 = tmp[1];
  let obj = option(onChannelPress[4]);
  const items = [_isNativeReflectConstruct];
  const items1 = [first];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getChannel(first), items1);
  const items2 = [onChannelPress, first, stateFromStores];
  const effect = React.useEffect(() => {
    let tmp = null != first;
    if (tmp) {
      tmp = null == stateFromStores;
    }
    if (tmp) {
      callback2(null);
      const obj = { channel: null };
      onChannelPress(obj);
    }
  }, items2);
  obj = { style, option, hasError, selected: null != stateFromStores };
  let tmp8;
  const tmp5 = importDefault(onChannelPress[5])(stateFromStores);
  const tmp6 = first;
  if (null != stateFromStores) {
    tmp8 = tmp5;
  }
  obj.selectedItemName = tmp8;
  obj.leading = first(option(onChannelPress[7]).ChannelIcon, { channel: stateFromStores });
  obj.onPress = function onPress() {
    if (null != callback) {
      callback();
    }
    let obj = outer1_1(onChannelPress[8]);
    obj = {
      option,
      channel: result,
      onChannelPress(channel) {
        channel = channel.channel;
        let id;
        if (null != channel) {
          id = channel.id;
        }
        outer1_7(id);
        outer1_2({ channel });
      },
      onActionSheetDismiss: _slicedToArray
    };
    obj.openLazy(option(onChannelPress[10])(onChannelPress[9], onChannelPress.paths), option(onChannelPress[7]).APP_LAUNCHER_CHANNEL_LIST_ACTION_SHEET_KEY, obj);
  };
  obj.autoFocus = autoFocus;
  return tmp6(importDefault(onChannelPress[6]), obj);
};
