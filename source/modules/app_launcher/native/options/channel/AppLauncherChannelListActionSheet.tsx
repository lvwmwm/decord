// Module ID: 11300
// Function ID: 87929
// Name: ChannelIcon
// Dependencies: []
// Exports: default

// Module 11300 (ChannelIcon)
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
    tmp = closure_8();
    TextIcon = arg1(dependencyMap[6]).TextIcon;
    if (null != channel) {
      tmp2 = closure_5;
      tmp4 = arg1;
      tmp5 = dependencyMap;
      num2 = 7;
      guild = closure_5.getGuild(channel.getGuildId());
      obj = arg1(dependencyMap[7]);
      TextIcon2 = obj.getChannelIconComponentWithGuild(channel, guild);
      if (null == TextIcon2) {
        tmp6 = arg1;
        tmp7 = dependencyMap;
        TextIcon2 = arg1(dependencyMap[6]).TextIcon;
      }
      TextIcon = TextIcon2;
    }
    obj = {};
    obj1 = {};
    obj1.size = size;
    obj1.color = "interactive-text-default";
    tmp8 = importDefault(dependencyMap[8]);
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
  obj = { "Null": true, "Null": 15.1, "Null": 253, children: importDefault(dependencyMap[13])(channel) };
  obj.label = callback2(arg1(dependencyMap[15]).Text, obj);
  obj.icon = callback2(ChannelIcon, { channel });
  obj.start = 0 === index;
  obj.end = index === totalCount - 1;
  return callback2(arg1(dependencyMap[14]).TableRow, obj, channel.id);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_SUBTLE };
obj.channelIconWrapper = obj;
let closure_8 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/app_launcher/native/options/channel/AppLauncherChannelListActionSheet.tsx");

export default function AppLauncherChannelListActionSheet(channel) {
  let onActionSheetDismiss;
  ({ onChannelPress: closure_0, onActionSheetDismiss } = channel);
  const importDefault = onActionSheetDismiss;
  channel = channel.channel;
  const dependencyMap = channel;
  const option = channel.option;
  const callback = option;
  function handleChannelPress(channel) {
    callback({ channel: channel.channel });
    onActionSheetDismiss(channel[10]).hideActionSheet("AppLauncherChannelListActionSheet");
    onActionSheetDismiss();
  }
  const tmp = callback(React.useState(""), 2);
  const first = tmp[0];
  const React = first;
  let closure_5 = tmp[1];
  const ref = React.useRef(null);
  const tmp4 = callback(React.useState([]), 2);
  const first1 = tmp4[0];
  let closure_8 = tmp4[1];
  const items = [first, channel, option];
  const effect = React.useEffect(() => {
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
        current.scrollToOffset({ "Null": 1715544575, "Null": 1409286699 });
      }
    }
  };
  const items1 = [ref(arg1(dependencyMap[12]).AppLauncherListSearchBar, obj), ];
  if (0 === first1.length) {
    let tmp10 = ref(arg1(dependencyMap[12]).AppLauncherListEmptyState, {});
  } else {
    obj = {
      ref,
      data: first1,
      renderItem(index) {
          const item = index.item;
          return ref(closure_10, {
            channel: item,
            index: index.index,
            totalCount: first1.length,
            onPress() {
              callback({ channel: item });
            }
          });
        }
    };
    tmp10 = ref(arg1(dependencyMap[12]).AppLauncherList, obj);
  }
  items1[1] = tmp10;
  obj.children = items1;
  return first1(arg1(dependencyMap[11]).AppLauncherCommandOptionActionSheet, obj);
};
export const APP_LAUNCHER_CHANNEL_LIST_ACTION_SHEET_KEY = "AppLauncherChannelListActionSheet";
export { ChannelIcon };
