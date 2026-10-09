// Module ID: 10248
// Function ID: 10249
// Name: ChannelRow
// Dependencies: [109, 19, 17, 2064, 2086, 6042, 4719, 1390, 10187, 5974, 21, 5091, 587, 558, 576, 504, 5418, 10249, 11549, 8199, 8191, 5087, 4752, 4661, 6183, 6186, 2]

// Module 10248 (ChannelRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import DateUtils from "DateUtils" /* 4752 */;
import Text_Text from "Text/Text" /* 5087 */;
import useChannelName from "useChannelName" /* 5418 */;
import ReadStateConstants from "ReadStateConstants" /* 5974 */;
import UserRowConstants from "UserRowConstants" /* 10187 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10249 */;
import GuildIconWithChannelType2 from "GuildIconWithChannelType" /* 11549 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildStore from "GuildStore" /* 2086 */;
import ReadStateStore from "ReadStateStore" /* 6042 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;
import UserStore from "UserStore" /* 1390 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useChannelNameDefault = useChannelName;
let _require, dependencyMap, importDefault, tmp4;

let closure_14;
let closure_15;
let closure_16;
let obj2;
let closure_3 = ["channel", "mode", "selected", "disabled", "onPress", "onLongPress", "trailing", "subLabel", "label"];
let _objectWithoutProperties = _objectWithoutProperties_mod;
const View = react_native.View;
const UserRowModes = UserRowConstants.UserRowModes;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
let obj = { guildIcon: { flexShrink: 0, flexGrow: 0 }, subLabel: { display: "flex", flexDirection: "row", alignItems: "center" }, subLabelIcon: { width: 12, height: 12, marginRight: 2 }, subLabelSeparator: obj2, threadName: { flexShrink: 1 } };
obj2 = { marginHorizontal: nativeDefault.space.PX_4 };
let closure_17 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelRow(channel) {
  let NONE;
  let closure_1;
  let closure_2;
  let closure_4;
  let disabled;
  let mode;
  let onPress;
  let selected;
  let stateFromStores2;
  let subLabel;
  let thread;
  let tmp18;
  let tmp20;
  let tmp23;
  let tmp26;
  let tmp29;
  let tmp30;
  let tmp6;
  let tmp7;
  let trailing;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(58);
  if (cResult[0] !== channel) {
    channel = channel.channel;
    _require = channel;
    ({ mode, selected, disabled, onPress } = channel);
    dependencyMap = onPress;
    const onLongPress = channel.onLongPress;
    importDefault = onLongPress;
    ({ trailing, subLabel } = channel);
    closure_3 = subLabel;
    const label = channel.label;
    const tmp14 = closure_3;
    const tmp15 = _objectWithoutProperties(channel, closure_3);
    cResult[0] = channel;
    cResult[1] = channel;
    cResult[2] = label;
    cResult[3] = onLongPress;
    cResult[4] = onPress;
    cResult[5] = tmp15;
    cResult[6] = subLabel;
    cResult[7] = mode;
    cResult[8] = selected;
    cResult[9] = disabled;
    cResult[10] = trailing;
    class V {
      constructor() {
        if (closure_2 != null) {
          tmp2 = closure_0;
          tmpResult = tmp(closure_0);
        }
        return;
      }
    }
    NONE = mode;
    let tmp9 = subLabel;
    tmp7 = onPress;
    tmp6 = onLongPress;
    let tmp5 = label;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
    importDefault = cResult[3];
    dependencyMap = cResult[4];
    closure_3 = cResult[6];
    NONE = cResult[7];
  }
  if (undefined === NONE) {
    NONE = UserRowModes.NONE;
  }
  const tmp17 = closure_17();
  _objectWithoutProperties = tmp17;
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore];
    cResult[11] = items;
    tmp18 = items;
  } else {
    tmp18 = cResult[11];
  }
  if (cResult[12] !== tmp4.guild_id) {
    class R {
      constructor() {
        return closure_8.getGuild(closure_0.guild_id);
      }
    }
    cResult[12] = tmp4.guild_id;
    cResult[13] = R;
    tmp20 = R;
  } else {
    class R {
      constructor() {
        return closure_8.getGuild(closure_0.guild_id);
      }
    }
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp18, tmp20);
  useChannelNameDefault(tmp4);
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        return closure_8.getGuild(closure_0.guild_id);
      }
    }
    let items1 = [stateFromStores2, UserStore, RelationshipStore];
    cResult[14] = items1;
    tmp23 = items1;
  } else {
    class R {
      constructor() {
        return closure_8.getGuild(closure_0.guild_id);
      }
    }
  }
  if (cResult[15] !== tmp4.parent_id) {
    class R {
      constructor() {
        return closure_8.getGuild(closure_0.guild_id);
      }
    }
    cResult[15] = tmp4.parent_id;
    cResult[16] = tmp27;
    tmp26 = tmp27;
  } else {
    class R {
      constructor() {
        return closure_8.getGuild(closure_0.guild_id);
      }
    }
  }
  const tmpResult3 = tmp(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp23, tmp26);
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        return closure_8.getGuild(closure_0.guild_id);
      }
    }
    const items2 = [ReadStateStore];
    cResult[17] = items2;
    tmp29 = items2;
  } else {
    class R {
      constructor() {
        return closure_8.getGuild(closure_0.guild_id);
      }
    }
  }
  if (cResult[18] !== tmp4.id) {
    class B {
      constructor() {
        return closure_9.lastMessageTimestamp(closure_0.id, ReadStateTypes.CHANNEL);
      }
    }
    cResult[18] = tmp4.id;
    cResult[19] = B;
    tmp30 = B;
  } else {
    class B {
      constructor() {
        return closure_9.lastMessageTimestamp(closure_0.id, ReadStateTypes.CHANNEL);
      }
    }
  }
  const tmpResult4 = tmp(504);
  stateFromStores2 = tmpResult4.useStateFromStores(tmp29, tmp30);
  if (cResult[20] === tmp4) {
    class B {
      constructor() {
        return closure_9.lastMessageTimestamp(closure_0.id, ReadStateTypes.CHANNEL);
      }
    }
    if (cResult[23] === tmp4) {
      let tmp34;
      class B {
        constructor() {
          return closure_9.lastMessageTimestamp(closure_0.id, ReadStateTypes.CHANNEL);
        }
      }
      if (cResult[26] === tmp4) {
        class B {
          constructor() {
            return closure_9.lastMessageTimestamp(closure_0.id, ReadStateTypes.CHANNEL);
          }
        }
      }
      class J {
        constructor() {
          if (null == closure_1) {
            tmp4 = closure_0;
            tmp5 = closure_2;
            obj = closure_0(closure_2[17]);
            tmp6 = closure_0;
            result = obj.openChannelLongPressActionSheet(closure_0.id);
          } else {
            tmp2 = closure_0;
            tmpResult = tmp(closure_0);
          }
          return;
        }
      }
      if (null != stateFromStores) {
        class B {
          constructor() {
            return closure_9.lastMessageTimestamp(closure_0.id, ReadStateTypes.CHANNEL);
          }
        }
        let obj2 = { "aria-label": "", style: null, guild: stateFromStores, channel: tmp4, size: tmp(11549).GuildIconWithChannelTypeSizes.SMALL_32 };
        class J {
          constructor() {
            if (null == closure_1) {
              tmp4 = closure_0;
              tmp5 = closure_2;
              obj = closure_0(closure_2[17]);
              tmp6 = closure_0;
              result = obj.openChannelLongPressActionSheet(closure_0.id);
            } else {
              tmp2 = closure_0;
              tmpResult = tmp(closure_0);
            }
            return;
          }
        }
        const GuildIconWithChannelType = tmp(11549).GuildIconWithChannelType;
        tmp34 = closure_14(GuildIconWithChannelType, obj2);
      }
      cResult[26] = tmp4;
      cResult[27] = stateFromStores;
      cResult[28] = tmp17.guildIcon;
      cResult[29] = tmp34;
    }
    class J {
      constructor() {
        if (null == closure_1) {
          tmp4 = closure_0;
          tmp5 = closure_2;
          obj = closure_0(closure_2[17]);
          tmp6 = closure_0;
          result = obj.openChannelLongPressActionSheet(closure_0.id);
        } else {
          tmp2 = closure_0;
          tmpResult = tmp(closure_0);
        }
        return;
      }
    }
    cResult[23] = tmp4;
    cResult[24] = tmp6;
    cResult[25] = J;
  }
  class V {
    constructor() {
      if (closure_2 != null) {
        tmp2 = closure_0;
        tmpResult = tmp(closure_0);
      }
      return;
    }
  }
  cResult[20] = tmp4;
  cResult[21] = tmp7;
  cResult[22] = V;
}) : (function ChannelRow(channel) {
  let tmp17Result;
  let tmp18;
  channel = channel.channel;
  let NONE = channel.mode;
  if (NONE === undefined) {
    let tmp = UserRowModes;
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
  const onPress = channel.onPress;
  const onLongPress = channel.onLongPress;
  const trailing = channel.trailing;
  const subLabel = channel.subLabel;
  const label = channel.label;
  const merged = Object.assign(channel, Object.assign({ channel: 0, mode: 0, selected: 0, disabled: 0, onPress: 0, onLongPress: 0, trailing: 0, subLabel: 0, label: 0 }));
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  let tmp3 = closure_17();
  let closure_7 = tmp3;
  const tmp5 = onPress;
  let obj = channel(onPress[15]);
  let items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  let tmp7 = flag2(onPress[16])(channel);
  let closure_9 = tmp7;
  let obj2 = channel(onPress[15]);
  let items1 = [closure_7, stateFromStores2, stateFromStores1];
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    channel = ChannelStore.getChannel(channel.parent_id);
    let channelName = null;
    if (null != channel) {
      const obj = useChannelName;
      channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, false);
    }
    return channelName;
  });
  let obj3 = channel(onPress[15]);
  const items2 = [closure_9];
  stateFromStores2 = obj3.useStateFromStores(items2, () => ReadStateStore.lastMessageTimestamp(channel.id, ReadStateTypes.CHANNEL));
  let obj4 = subLabel;
  const items3 = [channel, onPress];
  const items4 = [channel, onLongPress];
  const callback = subLabel.useCallback(() => {
    if (onPress != null) {
      tmp(channel);
    }
  }, items3);
  const items5 = [channel, stateFromStores, tmp3.guildIcon];
  const callback1 = subLabel.useCallback(() => {
    if (null == onLongPress) {
      const obj = openChannelLongPressActionSheet;
      const result = obj.openChannelLongPressActionSheet(channel.id);
    } else {
      tmp(channel);
    }
  }, items4);
  const items6 = [tmp7, label];
  const memo = subLabel.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores) {
      const obj = { "aria-label": "", style: closure_7.guildIcon, guild: tmp, channel, size: GuildIconWithChannelType2.GuildIconWithChannelTypeSizes.SMALL_32 };
      const GuildIconWithChannelType = GuildIconWithChannelType2.GuildIconWithChannelType;
      tmp2 = authStore3(GuildIconWithChannelType, obj);
    }
    return tmp2;
  }, items5);
  const items7 = [channel, , , , , , , , ];
  let name;
  const memo1 = subLabel.useMemo(() => {
    let tmp = label;
    if (undefined === label) {
      tmp = closure_9;
    }
    return tmp;
  }, items6);
  const useMemo = subLabel.useMemo;
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
        TextIcon = tmp3(8199).ForumIcon;
      } else {
        TextIcon = tmp3(8191).TextIcon;
      }
      const obj = { style: closure_7.subLabel, children: items };
      const obj2 = { color: nativeDefault.colors.TEXT_SUBTLE, style: closure_7.subLabelIcon };
      items = [authStore3(TextIcon, obj2), , ];
      const obj3 = { style: closure_7.threadName, variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, ellipsizeMode: "tail", children: stateFromStores1 };
      items[1] = authStore3(Text_Text.Text, obj3);
      let tmp5Result = null;
      const tmp6 = View;
      const tmp7 = closure_7;
      const tmp9 = importDefault;
      if (null != stateFromStores2) {
        const obj4 = { children: items1 };
        const obj5 = { style: tmp7.subLabelSeparator, variant: "text-xs/medium", color: "text-subtle", children: "\u2022" };
        items1 = [authStore3(Text_Text.Text, obj5), ];
        const obj6 = { variant: "text-xs/medium", color: "text-subtle", children: obj7.calendarFormatCompact(tmp9(4661)(tmp14)) };
        const Text = Text_Text.Text;
        obj7 = DateUtils;
        items1[1] = authStore3(Text, obj6);
        tmp5Result = tmp5(authStore4, obj4);
      }
      items[2] = tmp5Result;
      return authStore5(tmp6, obj);
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
  tmp18 = closure_14(channel(tmp5[21]).Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: memo1 });
  const merged1 = Object.assign(merged);
  if (NONE === UserRowModes.TOGGLE) {
    let obj6 = { height: "100%", checked: flag };
    const TableCheckboxRow = tmp4(tmp5[24]).TableCheckboxRow;
    const merged2 = Object.assign(obj5);
    tmp17Result = tmp17(TableCheckboxRow, obj6);
  } else {
    let obj7 = { height: "100%", trailing: memo3 };
    const TableRow = tmp4(tmp5[25]).TableRow;
    const merged3 = Object.assign(obj5);
    tmp17Result = tmp17(TableRow, obj7);
  }
  return tmp17Result;
}));
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/ChannelRow.tsx");

export default memoResult;
