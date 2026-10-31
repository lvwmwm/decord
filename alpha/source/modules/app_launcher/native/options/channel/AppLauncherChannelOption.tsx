// Module ID: 12385
// Function ID: 12386
// Name: AppLauncherChannelOption
// Dependencies: [32, 19, 4863, 21, 504, 5652, 12369, 12386, 5258, 12386, 1994, 2]
// Exports: default

// Module 12385 (AppLauncherChannelOption)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import AppLauncherChannelListActionSheet from "AppLauncherChannelListActionSheet" /* 12386 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/app_launcher/native/options/channel/AppLauncherChannelOption.tsx");

export default function AppLauncherChannelOption(option) {
  let autoFocus;
  let closure_7;
  let first;
  let hasError;
  let onActionSheetDismiss;
  let onChannelPress;
  let tmp10;
  option = option.option;
  ({ initialValue: importDefault, onChannelPress } = option);
  ({ onActionSheetDismiss: _slicedToArray, channel: react, onPress: ChannelStore } = option);
  first = undefined;
  closure_7 = undefined;
  ({ autoFocus, hasError } = option);
  [first, closure_7] = react.useState(() => {
    let channelId = null;
    if (null != importDefault) {
      channelId = null;
      if ("channelMention" === importDefault.type) {
        channelId = tmp.channelId;
      }
    }
    return channelId;
  });
  const tmp3 = option;
  let tmp4 = onChannelPress;
  let obj = option(onChannelPress[4]);
  const items = [ChannelStore];
  const items1 = [first];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(first), items1);
  const items2 = [onChannelPress, first, stateFromStores];
  const effect = react.useEffect(() => {
    const tmp = null != first && null == stateFromStores;
    if (tmp) {
      closure_7(null);
      onChannelPress({ channel: null });
    }
  }, items2);
  const obj2 = {
    option,
    hasError,
    selected: null != stateFromStores,
    selectedItemName: tmp10,
    leading: first(tmp3(tmp4[7]).ChannelIcon, { channel: stateFromStores }),
    onPress: function handleRowPress() {
      let tmp;
      if (ChannelStore != null) {
        tmp();
      }
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const obj = {
        option,
        channel: react,
        onChannelPress(channel) {
          channel = channel.channel;
          let id;
          const tmp = closure_1_7;
          if (channel != null) {
            id = channel.id;
          }
          tmp(id);
          onChannelPress({ channel });
        },
        onActionSheetDismiss: _slicedToArray
      };
      const tmp4 = asyncRequire(12386, dependencyMap.paths);
      openLazy(tmp4, AppLauncherChannelListActionSheet.APP_LAUNCHER_CHANNEL_LIST_ACTION_SHEET_KEY, obj);
    },
    autoFocus
  };
  tmp10 = undefined;
  const tmp7 = require("useChannelName")(stateFromStores);
  const tmp9 = require("AppLauncherSelectOptionFormRow");
  if (null != stateFromStores) {
    tmp10 = tmp7;
  }
  return first(tmp9, obj2);
};
