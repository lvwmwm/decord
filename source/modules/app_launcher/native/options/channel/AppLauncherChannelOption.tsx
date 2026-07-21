// Module ID: 11299
// Function ID: 87922
// Name: AppLauncherChannelOption
// Dependencies: []
// Exports: default

// Module 11299 (AppLauncherChannelOption)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/app_launcher/native/options/channel/AppLauncherChannelOption.tsx");

export default function AppLauncherChannelOption(option) {
  let autoFocus;
  let hasError;
  let onChannelPress;
  let style;
  option = option.option;
  const arg1 = option;
  ({ initialValue: closure_1, onChannelPress } = option);
  const dependencyMap = onChannelPress;
  ({ onActionSheetDismiss: closure_3, channel: closure_4, onPress: closure_5 } = option);
  ({ style, autoFocus, hasError } = option);
  const tmp = callback(React.useState(() => {
    let channelId = null;
    if (null != lib) {
      channelId = null;
      if ("channelMention" === lib.type) {
        channelId = lib.channelId;
      }
    }
    return channelId;
  }), 2);
  const first = tmp[0];
  const jsx = first;
  let closure_7 = tmp[1];
  let obj = arg1(dependencyMap[4]);
  const items = [closure_5];
  const items1 = [first];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(first), items1);
  const items2 = [onChannelPress, first, stateFromStores];
  const effect = React.useEffect(() => {
    let tmp = null != first;
    if (tmp) {
      tmp = null == stateFromStores;
    }
    if (tmp) {
      callback(null);
      const obj = { channel: null };
      onChannelPress(obj);
    }
  }, items2);
  obj = { style, option, hasError, selected: null != stateFromStores };
  let tmp8;
  const tmp5 = importDefault(dependencyMap[5])(stateFromStores);
  const tmp6 = jsx;
  if (null != stateFromStores) {
    tmp8 = tmp5;
  }
  obj.selectedItemName = tmp8;
  obj.leading = jsx(arg1(dependencyMap[7]).ChannelIcon, { channel: stateFromStores });
  obj.onPress = function onPress() {
    if (null != channel) {
      channel();
    }
    let obj = lib(onChannelPress[8]);
    obj = {
      option,
      channel: closure_4,
      onChannelPress(channel) {
        channel = channel.channel;
        let id;
        if (null != channel) {
          id = channel.id;
        }
        closure_7(id);
        callback({ channel });
      },
      onActionSheetDismiss: closure_3
    };
    obj.openLazy(option(onChannelPress[10])(onChannelPress[9], onChannelPress.paths), option(onChannelPress[7]).APP_LAUNCHER_CHANNEL_LIST_ACTION_SHEET_KEY, obj);
  };
  obj.autoFocus = autoFocus;
  return tmp6(importDefault(dependencyMap[6]), obj);
};
