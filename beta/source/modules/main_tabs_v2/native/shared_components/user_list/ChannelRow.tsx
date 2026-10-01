// Module ID: 10373
// Function ID: 10374
// Name: ChannelRow
// Dependencies: [19, 17, 2045, 2067, 4851, 4479, 1372, 10320, 5018, 21, 4836, 576, 504, 4989, 10374, 10465, 5402, 5394, 4832, 4512, 4421, 5916, 5917, 2]

// Module 10373 (ChannelRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import DateUtils from "DateUtils" /* 4512 */;
import Text_Text from "Text/Text" /* 4832 */;
import useChannelName from "useChannelName" /* 4989 */;
import ReadStateConstants from "ReadStateConstants" /* 5018 */;
import UserRowConstants from "UserRowConstants" /* 10320 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10374 */;
import GuildIconWithChannelType2 from "GuildIconWithChannelType" /* 10465 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_12;
let closure_14;
let map1;
let obj2;
const View = react_native.View;
const UserRowModes = UserRowConstants.UserRowModes;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
let obj = { guildIcon: { flexShrink: 0, flexGrow: 0 }, subLabel: { display: "flex", flexDirection: "row", alignItems: "center" }, subLabelIcon: { width: 12, height: 12, marginRight: 2 }, subLabelSeparator: obj2, threadName: { flexShrink: 1 } };
obj2 = { marginHorizontal: nativeDefault.space.PX_4 };
let closure_15 = createStyles.createStyles(obj);
const memoResult = react.memo(function ChannelRow(channel) {
  let stateFromStores1;
  let tmp17Result;
  let tmp18;
  channel = channel.channel;
  let NONE = channel.mode;
  if (NONE === undefined) {
    let tmp = stateFromStores1;
    NONE = stateFromStores1.NONE;
  }
  let flag = channel.selected;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = channel.disabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const onPress = channel.onPress;
  const onLongPress = channel.onLongPress;
  const trailing = channel.trailing;
  const subLabel = channel.subLabel;
  const label = channel.label;
  const merged = Object.assign(channel, Object.assign({ channel: 0, mode: 0, selected: 0, disabled: 0, onPress: 0, onLongPress: 0, trailing: 0, subLabel: 0, label: 0 }));
  let tmp3 = closure_15();
  let closure_7 = tmp3;
  const tmp5 = onPress;
  let obj = channel(onPress[12]);
  let items = [label];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  let tmp7 = flag2(onPress[13])(channel);
  let closure_9 = tmp7;
  let obj2 = channel(onPress[12]);
  let items1 = [subLabel, closure_9, stateFromStores];
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    channel = ChannelStore.getChannel(channel.parent_id);
    let channelName = null;
    if (null != channel) {
      const obj = useChannelName;
      channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, false);
    }
    return channelName;
  });
  let obj3 = channel(onPress[12]);
  const items2 = [closure_7];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => ReadStateStore.lastMessageTimestamp(channel.id, ReadStateTypes.CHANNEL));
  let obj4 = onLongPress;
  const items3 = [channel, onPress];
  const items4 = [channel, onLongPress];
  const callback = onLongPress.useCallback(() => {
    if (onPress != null) {
      tmp(channel);
    }
  }, items3);
  const items5 = [channel, stateFromStores, tmp3.guildIcon];
  const callback1 = onLongPress.useCallback(() => {
    if (null == onLongPress) {
      const obj = openChannelLongPressActionSheet;
      const result = obj.openChannelLongPressActionSheet(channel.id);
    } else {
      tmp(channel);
    }
  }, items4);
  const items6 = [tmp7, label];
  const memo = onLongPress.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores) {
      const obj = { "aria-label": "", style: closure_7.guildIcon, guild: tmp, channel, size: GuildIconWithChannelType2.GuildIconWithChannelTypeSizes.SMALL_32 };
      const GuildIconWithChannelType = GuildIconWithChannelType2.GuildIconWithChannelType;
      tmp2 = closure_12(GuildIconWithChannelType, obj);
    }
    return tmp2;
  }, items5);
  const items7 = [channel, , , , , , , , ];
  let name;
  const memo1 = onLongPress.useMemo(() => {
    let tmp = label;
    if (undefined === label) {
      tmp = closure_9;
    }
    return tmp;
  }, items6);
  const useMemo = onLongPress.useMemo;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  items7[1] = name;
  items7[2] = stateFromStores2;
  items7[3] = stateFromStores1;
  ({ subLabel: arr8[4], subLabelIcon: arr8[5], subLabelSeparator: arr8[6], threadName: arr8[7] } = tmp3);
  items7[8] = subLabel;
  const items8 = [trailing, flag2];
  const memo2 = useMemo(() => {
    let items;
    let items1;
    let obj7;
    if (undefined !== subLabel) {
      return subLabel;
    } else {
      let TextIcon;
      if (!channel.isThread()) {
        if (!channel.isForumPost()) {
          let name;
          if (stateFromStores != null) {
            name = stateFromStores.name;
          }
          return name;
        }
      }
      if (channel.isForumPost()) {
        TextIcon = tmp3(5402).ForumIcon;
      } else {
        TextIcon = tmp3(5394).TextIcon;
      }
      const obj = { style: closure_7.subLabel, children: items };
      const obj2 = { color: nativeDefault.colors.TEXT_SUBTLE, style: closure_7.subLabelIcon };
      items = [closure_12(TextIcon, obj2), , ];
      const obj3 = { style: closure_7.threadName, variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, ellipsizeMode: "tail", children: stateFromStores1 };
      items[1] = closure_12(Text_Text.Text, obj3);
      let tmp5Result = null;
      const tmp6 = View;
      const tmp7 = closure_7;
      const tmp9 = importDefault;
      if (null != stateFromStores2) {
        const obj4 = { children: items1 };
        const obj5 = { style: tmp7.subLabelSeparator, variant: "text-xs/medium", color: "text-subtle", children: "\u2022" };
        items1 = [closure_12(Text_Text.Text, obj5), ];
        const obj6 = { variant: "text-xs/medium", color: "text-subtle", children: obj7.calendarFormatCompact(tmp9(4421)(tmp14)) };
        const Text = Text_Text.Text;
        obj7 = DateUtils;
        items1[1] = closure_12(Text, obj6);
        tmp5Result = tmp5(map1, obj4);
      }
      items[2] = tmp5Result;
      return authStore2(tmp6, obj);
    }
  }, items7);
  const memo3 = obj4.useMemo(() => {
    let tmp = trailing;
    if (null == trailing) {
      let tmp3;
      if (flag2) {
        tmp3 = null;
      }
      tmp = tmp3;
    }
    return tmp;
  }, items8);
  let obj5 = { disabled: flag2, icon: memo, onPress: callback, onLongPress: callback1, label: tmp18, subLabel: memo2 };
  tmp18 = closure_12(channel(tmp5[18]).Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: memo1 });
  const merged1 = Object.assign(merged);
  if (NONE === stateFromStores1.TOGGLE) {
    let obj6 = { height: "100%", checked: flag };
    const TableCheckboxRow = tmp4(tmp5[21]).TableCheckboxRow;
    const merged2 = Object.assign(obj5);
    tmp17Result = tmp17(TableCheckboxRow, obj6);
  } else {
    let obj7 = { height: "100%", trailing: memo3 };
    const TableRow = tmp4(tmp5[22]).TableRow;
    const merged3 = Object.assign(obj5);
    tmp17Result = tmp17(TableRow, obj7);
  }
  return tmp17Result;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/ChannelRow.tsx");

export default memoResult;
