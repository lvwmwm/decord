// Module ID: 9136
// Function ID: 71473
// Dependencies: [31, 27, 1348, 1838, 4142, 3767, 1849, 8857, 4326, 33, 4130, 689, 566, 4320, 9137, 9940, 4645, 4638, 4126, 3800, 3712, 9132, 5165, 2]

// Module 9136
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { UserRowModes } from "UserRowModes";
import { ReadStateTypes } from "ReadStateTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
const require = arg1;
({ jsx: closure_12, Fragment: closure_13, jsxs: closure_14 } = jsxProd);
let obj = { guildIcon: { flexShrink: 0, flexGrow: 0 }, subLabel: { display: "flex", flexDirection: "row", alignItems: "center" }, subLabelIcon: { width: 12, height: 12, marginRight: 2 } };
obj = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.subLabelSeparator = obj;
obj.threadName = { flexShrink: 1 };
let closure_15 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function ChannelRow(channel) {
  channel = channel.channel;
  let NONE = channel.mode;
  if (NONE === undefined) {
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
  let obj = { channel: 0, mode: 0, selected: 0, disabled: 0, onPress: 0, onLongPress: 0, trailing: 0, subLabel: 0, label: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(channel, obj);
  let c7;
  let stateFromStores;
  let c9;
  stateFromStores1 = undefined;
  let stateFromStores2;
  const tmp4 = callback2();
  c7 = tmp4;
  let obj1 = channel(onPress[12]);
  let items = [label];
  stateFromStores = obj1.useStateFromStores(items, () => label.getGuild(channel.guild_id));
  const tmp6 = flag2(onPress[13])(channel);
  c9 = tmp6;
  let obj2 = channel(onPress[12]);
  let items1 = [subLabel, c9, stateFromStores];
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    channel = subLabel.getChannel(channel.parent_id);
    let channelName = null;
    if (null != channel) {
      const obj = channel(onPress[13]);
      channelName = obj.computeChannelName(channel, c9, stateFromStores, false);
    }
    return channelName;
  });
  const items2 = [c7];
  stateFromStores2 = channel(onPress[12]).useStateFromStores(items2, () => _undefined.lastMessageTimestamp(channel.id, stateFromStores2.CHANNEL));
  const items3 = [channel, onPress];
  const items4 = [channel, onLongPress];
  const callback = onLongPress.useCallback(() => {
    if (null != onPress) {
      onPress(channel);
    }
  }, items3);
  const items5 = [channel, stateFromStores, tmp4.guildIcon];
  const callback1 = onLongPress.useCallback(() => {
    if (null == onLongPress) {
      const result = channel(onPress[14]).openChannelLongPressActionSheet(channel.id);
      const obj = channel(onPress[14]);
    } else {
      onLongPress(channel);
    }
  }, items4);
  const items6 = [tmp6, label];
  const memo = onLongPress.useMemo(() => {
    let tmp = null;
    if (null != stateFromStores) {
      const obj = { "aria-label": "", style: _undefined.guildIcon, guild: stateFromStores, channel, size: channel(onPress[15]).GuildIconWithChannelTypeSizes.SMALL_32 };
      tmp = outer1_12(channel(onPress[15]).GuildIconWithChannelType, obj);
    }
    return tmp;
  }, items5);
  const items7 = [channel, , , , , , , , ];
  let name;
  const memo1 = onLongPress.useMemo(() => undefined !== label ? label : c9, items6);
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  items7[1] = name;
  items7[2] = stateFromStores2;
  items7[3] = stateFromStores1;
  ({ subLabel: arr8[4], subLabelIcon: arr8[5], subLabelSeparator: arr8[6], threadName: arr8[7] } = tmp4);
  items7[8] = subLabel;
  const items8 = [trailing, flag2];
  const memo2 = onLongPress.useMemo(() => {
    if (undefined !== subLabel) {
      return subLabel;
    } else {
      if (!channel.isThread()) {
        if (!channel.isForumPost()) {
          let name;
          if (null != stateFromStores) {
            name = stateFromStores.name;
          }
          return name;
        }
      }
      if (channel.isForumPost()) {
        let TextIcon = tmp7(tmp8[16]).ForumIcon;
      } else {
        TextIcon = tmp7(tmp8[17]).TextIcon;
      }
      let obj = { style: _undefined.subLabel };
      obj = { color: flag2(onPress[11]).colors.TEXT_SUBTLE, style: _undefined.subLabelIcon };
      const items = [outer1_12(TextIcon, obj), , ];
      obj = { style: _undefined.threadName, variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, ellipsizeMode: "tail", children: stateFromStores1 };
      items[1] = outer1_12(channel(onPress[18]).Text, obj);
      let tmp20 = null;
      if (null != stateFromStores2) {
        const obj1 = {};
        const obj2 = { style: _undefined.subLabelSeparator, variant: "text-xs/medium", color: "text-subtle", children: "\u2022" };
        const items1 = [outer1_12(channel(onPress[18]).Text, obj2), ];
        const obj3 = { variant: "text-xs/medium", color: "text-subtle", children: channel(onPress[19]).calendarFormatCompact(flag2(onPress[20])(stateFromStores2)) };
        items1[1] = outer1_12(channel(onPress[18]).Text, obj3);
        obj1.children = items1;
        tmp20 = outer1_14(outer1_13, obj1);
        const obj7 = channel(onPress[19]);
      }
      items[2] = tmp20;
      obj.children = items;
      return outer1_14(trailing, obj);
    }
  }, items7);
  const memo3 = onLongPress.useMemo(() => {
    if (null != trailing) {
      let tmp2 = trailing;
    } else if (flag2) {
      tmp2 = null;
    }
    return tmp2;
  }, items8);
  obj = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: memo1 };
  obj = {};
  const obj4 = channel(onPress[12]);
  const merged1 = Object.assign(merged);
  obj["disabled"] = flag2;
  obj["icon"] = memo;
  obj["onPress"] = callback;
  obj["onLongPress"] = callback1;
  obj["label"] = callback(channel(onPress[18]).Text, obj);
  obj["subLabel"] = memo2;
  if (NONE === stateFromStores1.TOGGLE) {
    obj1 = {};
    const merged2 = Object.assign(obj);
    obj1["height"] = "100%";
    obj1["checked"] = flag;
    let tmp25 = callback(channel(onPress[21]).TableCheckboxRow, obj1);
  } else {
    obj2 = {};
    const merged3 = Object.assign(obj);
    obj2["height"] = "100%";
    obj2["trailing"] = memo3;
    tmp25 = callback(channel(onPress[22]).TableRow, obj2);
  }
  return tmp25;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/ChannelRow.tsx");

export default memoResult;
