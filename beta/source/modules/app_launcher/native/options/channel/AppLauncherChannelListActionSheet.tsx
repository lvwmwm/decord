// Module ID: 11673
// Function ID: 11674
// Name: AppLauncherChannelListActionSheet
// Dependencies: [32, 19, 2067, 21, 4836, 576, 5394, 5335, 11661, 5754, 4800, 11648, 11649, 4989, 5917, 4832, 2]
// Exports: default

// Module 11673 (AppLauncherChannelListActionSheet)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5335 */;
import TextIcon3 from "TextIcon" /* 5394 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5754 */;
import TableRow2 from "TableRow" /* 5917 */;
import AppLauncherOptionIconDefault from "AppLauncherOptionIcon" /* 11661 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

let metroImportDefault;
let metroRequire;
let obj2;
class ChannelIcon {
  constructor(wrapperSize) {
    let channel;
    ({ channel, size } = wrapperSize);
    if (size === undefined) {
      size = "sm";
    }
    let num = wrapperSize.wrapperSize;
    if (num === undefined) {
      num = 32;
    }
    const tmp = closure_9();
    let TextIcon = TextIcon3.TextIcon;
    if (null != channel) {
      const guild = GuildStore.getGuild(channel.getGuildId());
      const tmp2Result = utils_ChannelUtils;
      let TextIcon2 = tmp2Result.getChannelIconComponentWithGuild(channel, guild);
      if (TextIcon2 == null) {
        TextIcon2 = tmp2(5394).TextIcon;
      }
      TextIcon = TextIcon2;
    }
    const obj = { icon: metroRequire(TextIcon, { size, color: "interactive-text-default" }), wrapperStyle: tmp.channelIconWrapper, wrapperSize: num };
    const tmp6 = AppLauncherOptionIconDefault;
    return metroRequire(tmp6, obj);
  }
}
function ChannelListItem(arg0) {
  let channel;
  let index;
  let onPress;
  let tmp;
  let totalCount;
  ({ channel, index } = arg0);
  ({ totalCount, onPress } = arg0);
  const obj = { onPress, label: metroRequire(Text_Text.Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp }), icon: metroRequire(ChannelIcon, { channel }), start: 0 === index, end: index === totalCount - 1 };
  tmp = useChannelNameDefault(channel);
  const TableRow = TableRow2.TableRow;
  return metroRequire(TableRow, obj, channel.id);
}
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const AppLauncherChannelListActionSheet_str = "AppLauncherChannelListActionSheet";
let obj = { channelIconWrapper: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
const React4 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/app_launcher/native/options/channel/AppLauncherChannelListActionSheet.tsx");

export default function AppLauncherChannelListActionSheet(channel) {
  let items1;
  let onActionSheetDismiss;
  let tmp9Result;
  ({ onChannelPress: require, onActionSheetDismiss } = channel);
  channel = channel.channel;
  const option = channel.option;
  let query;
  const tmp = option(query.useState(""), 2);
  query = tmp[0];
  let closure_5 = tmp[1];
  const ref = query.useRef(null);
  const tmp4 = option(query.useState([]), 2);
  const first1 = tmp4[0];
  let closure_8 = tmp4[1];
  const items = [query, channel, option];
  const length = first1.length;
  const effect = query.useEffect(() => {
    const obj = AutocompleteUtilsDefault;
    const obj2 = { query, channel, channelTypes: option.channelTypes, limit: null, allowSnowflake: true };
    closure_8(obj.queryApplicationCommandChannelResults(obj2).channels);
  }, items);
  let obj = { onDismiss: onActionSheetDismiss, option, children: items1 };
  const AppLauncherCommandOptionActionSheet = require("AppLauncherCommandOptionActionSheet").AppLauncherCommandOptionActionSheet;
  let obj2 = {
    onChange(str) {
      closure_5(str.toLowerCase());
      const current = ref.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
    }
  };
  items1 = [ref(require("AppLauncherList").AppLauncherListSearchBar, obj2), ];
  const tmp6 = first1;
  if (0 === length) {
    tmp9Result = tmp9(tmp7(tmp8[12]).AppLauncherListEmptyState, {});
  } else {
    const obj3 = {
      ref,
      data: first1,
      renderItem(index) {
          const item = index.item;
          let obj = {
            channel: item,
            index: index.index,
            totalCount: first1.length,
            onPress() {
              const obj = { channel: item };
              require(obj);
              const obj2 = closure_1_1(channel[10]);
              obj2.hideActionSheet(closure_1_8);
              onActionSheetDismiss();
            }
          };
          return ref(ChannelListItem, obj);
        }
    };
    tmp9Result = tmp9(tmp7(tmp8[12]).AppLauncherList, obj3);
  }
  items1[1] = tmp9Result;
  return tmp6(AppLauncherCommandOptionActionSheet, obj);
};
export const APP_LAUNCHER_CHANNEL_LIST_ACTION_SHEET_KEY = "AppLauncherChannelListActionSheet";
export { ChannelIcon };
