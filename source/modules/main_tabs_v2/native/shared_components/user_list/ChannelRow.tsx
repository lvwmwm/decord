// Module ID: 9090
// Function ID: 71196
// Dependencies: []

// Module 9090
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const UserRowModes = arg1(dependencyMap[7]).UserRowModes;
const ReadStateTypes = arg1(dependencyMap[8]).ReadStateTypes;
({ jsx: closure_12, Fragment: closure_13, jsxs: closure_14 } = arg1(dependencyMap[9]));
const tmp2 = arg1(dependencyMap[9]);
let obj = { guildIcon: { borderRadius: -536870861, borderWidth: -299892737 }, subLabel: {}, subLabelIcon: { 0: 20, 9223372036854775807: "relative", -9223372036854775808: 10 } };
obj = { marginHorizontal: importDefault(dependencyMap[11]).space.PX_4 };
obj.subLabelSeparator = obj;
obj.threadName = { flexShrink: 1 };
let closure_15 = arg1(dependencyMap[10]).createStyles(obj);
const obj2 = arg1(dependencyMap[10]);
const memoResult = importAllResult.memo(function ChannelRow(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let NONE = channel.mode;
  if (NONE === undefined) {
    NONE = UserRowModes.NONE;
  }
  let flag = channel.selected;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = channel.disabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const importDefault = flag2;
  const onPress = channel.onPress;
  const dependencyMap = onPress;
  const onLongPress = channel.onLongPress;
  const trailing = channel.trailing;
  const View = trailing;
  const subLabel = channel.subLabel;
  let closure_5 = subLabel;
  const label = channel.label;
  let closure_6 = label;
  let obj = { "Bool(false)": true, "Bool(false)": 6, "Bool(false)": 132, "Bool(false)": null, "Bool(false)": "\u{1F9D1}\u200D\u{1F680}", "Bool(false)": true, "Bool(false)": 12.1, flexDirection: 133, justifyContent: null };
  Object.setPrototypeOf(null);
  const merged = Object.assign(channel, obj);
  let closure_7;
  let closure_8;
  let closure_9;
  let UserRowModes;
  let ReadStateTypes;
  const tmp4 = callback2();
  closure_7 = tmp4;
  let obj1 = arg1(dependencyMap[12]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => label.getGuild(channel.guild_id));
  closure_8 = stateFromStores;
  const tmp6 = importDefault(dependencyMap[13])(channel);
  closure_9 = tmp6;
  let obj2 = arg1(dependencyMap[12]);
  const items1 = [closure_5, closure_9, closure_8];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const channel = subLabel.getChannel(channel.parent_id);
    let channelName = null;
    if (null != channel) {
      const obj = channel(onPress[13]);
      channelName = obj.computeChannelName(channel, tmp6, stateFromStores, false);
    }
    return channelName;
  });
  UserRowModes = stateFromStores1;
  const items2 = [closure_7];
  const stateFromStores2 = arg1(dependencyMap[12]).useStateFromStores(items2, () => tmp4.lastMessageTimestamp(channel.id, stateFromStores2.CHANNEL));
  ReadStateTypes = stateFromStores2;
  const items3 = [channel, onPress];
  const items4 = [channel, onLongPress];
  const callback = importAllResult.useCallback(() => {
    if (null != onPress) {
      onPress(channel);
    }
  }, items3);
  const items5 = [channel, stateFromStores, tmp4.guildIcon];
  const callback1 = importAllResult.useCallback(() => {
    if (null == onLongPress) {
      const result = channel(onPress[14]).openChannelLongPressActionSheet(channel.id);
      const obj = channel(onPress[14]);
    } else {
      onLongPress(channel);
    }
  }, items4);
  const items6 = [tmp6, label];
  const memo = importAllResult.useMemo(() => {
    let tmp = null;
    if (null != stateFromStores) {
      const obj = { aria-label: "", style: onPress.guildIcon, guild: stateFromStores, channel, size: channel(onPress[15]).GuildIconWithChannelTypeSizes.SMALL_32 };
      tmp = callback(channel(onPress[15]).GuildIconWithChannelType, obj);
    }
    return tmp;
  }, items5);
  const items7 = [channel, , , , , , , , ];
  let name;
  const memo1 = importAllResult.useMemo(() => undefined !== label ? label : tmp6, items6);
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  items7[1] = name;
  items7[2] = stateFromStores2;
  items7[3] = stateFromStores1;
  ({ subLabel: arr8[4], subLabelIcon: arr8[5], subLabelSeparator: arr8[6], threadName: arr8[7] } = tmp4);
  items7[8] = subLabel;
  const items8 = [trailing, flag2];
  const memo2 = importAllResult.useMemo(() => {
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
      let obj = { style: tmp4.subLabel };
      obj = { color: flag2(onPress[11]).colors.TEXT_SUBTLE, style: tmp4.subLabelIcon };
      const items = [callback(TextIcon, obj), , ];
      obj = { __packager_asset: 87878205788868150000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, y: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008920646734650617, isArray: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012008576514210759, push: 3408618214873407000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, create: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000895184583640078, style: tmp4.threadName, children: stateFromStores1 };
      items[1] = callback(channel(onPress[18]).Text, obj);
      let tmp20 = null;
      if (null != stateFromStores2) {
        const obj1 = {};
        const obj2 = { "Null": true, ti: true, tk: true, tl: true, style: tmp4.subLabelSeparator };
        const items1 = [callback(channel(onPress[18]).Text, obj2), ];
        const obj3 = { children: channel(onPress[19]).calendarFormatCompact(flag2(onPress[20])(stateFromStores2)) };
        items1[1] = callback(channel(onPress[18]).Text, obj3);
        obj1.children = items1;
        tmp20 = callback2(closure_13, obj1);
        const obj7 = channel(onPress[19]);
      }
      items[2] = tmp20;
      obj.children = items;
      return callback2(trailing, obj);
    }
  }, items7);
  const memo3 = importAllResult.useMemo(() => {
    if (null != trailing) {
      let tmp2 = trailing;
    } else if (flag2) {
      tmp2 = null;
    }
    return tmp2;
  }, items8);
  obj = { encodingConfig: true, showRemove: 15.1, PREMIUM_CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPSELL: 253, children: memo1 };
  obj = {};
  const obj4 = arg1(dependencyMap[12]);
  const merged1 = Object.assign(merged);
  obj["disabled"] = flag2;
  obj["icon"] = memo;
  obj["onPress"] = callback;
  obj["onLongPress"] = callback1;
  obj["label"] = callback(arg1(dependencyMap[18]).Text, obj);
  obj["subLabel"] = memo2;
  if (NONE === UserRowModes.TOGGLE) {
    obj1 = {};
    const merged2 = Object.assign(obj);
    obj1["height"] = "100%";
    obj1["checked"] = flag;
    let tmp25 = callback(arg1(dependencyMap[21]).TableCheckboxRow, obj1);
  } else {
    obj2 = {};
    const merged3 = Object.assign(obj);
    obj2["height"] = "100%";
    obj2["trailing"] = memo3;
    tmp25 = callback(arg1(dependencyMap[22]).TableRow, obj2);
  }
  return tmp25;
});
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/ChannelRow.tsx");

export default memoResult;
