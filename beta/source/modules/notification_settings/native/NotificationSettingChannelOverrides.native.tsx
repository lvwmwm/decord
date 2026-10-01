// Module ID: 17621
// Function ID: 17622
// Name: NotificationSettingChannelOverrides
// Dependencies: [32, 19, 17, 2049, 6532, 4479, 1372, 1074, 21, 4836, 576, 504, 6402, 6533, 4989, 5829, 1115, 4541, 6470, 5917, 5923, 5335, 10327, 6471, 1177, 7678, 6476, 2]

// Module 17621 (NotificationSettingChannelOverrides)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4541 */;
import getFlattedChannelListDefault from "getFlattedChannelList" /* 6533 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildCategoryStore from "GuildCategoryStore" /* 6532 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let channel;

let c10;
let closure_12;
let map1;
let obj2;
let obj3;
let unpackModuleId;
const View = react_native.View;
const isGuildReadableType = ChannelRecord.isGuildReadableType;
({ ChannelTypes: c10, NotificationSettingsSections: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, searchContainer: obj3 };
obj2 = { marginHorizontal: nativeDefault.space.PX_8, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_16 };
let closure_14 = createStyles(obj);
const memoResult = react.memo(function NotificationSettingChannelOverrides(arg0) {
  let SearchField;
  let intl;
  let intl2;
  let intl3;
  let items4;
  let obj4;
  let tmp16Result;
  ({ guildId: require, navigation } = arg0);
  let stateFromStores;
  let first;
  let channels;
  let tmp = closure_14();
  let tmp3 = stateFromStores;
  let obj = require("get initialized");
  let items = [GuildCategoryStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildCategoryStore.getCategories(require));
  const insets = navigation(stateFromStores[12])().insets;
  const tmp6 = first(channels.useState(""), 2);
  first = tmp6[0];
  const items1 = [stateFromStores, first];
  const tmp8 = tmp6[1];
  const memo = channels.useMemo(() => {
    let items;
    const arr = getFlattedChannelListDefault(stateFromStores._categories, stateFromStores, (channel) => {
      channel = channel.channel;
      let tmp = isGuildReadableType(channel.type);
      if (!tmp) {
        tmp = channel.type === constants.GUILD_CATEGORY && null != closure_1_2[channel.id] && closure_1_2[channel.id].length > 0;
        const tmp3 = channel.type === constants.GUILD_CATEGORY && null != closure_1_2[channel.id] && closure_1_2[channel.id].length > 0;
      }
      if (tmp) {
        if ("" !== first) {
          if (null != first) {
            const obj = require("useChannelName");
            const str3 = obj.computeChannelName(channel, UserStore, RelationshipStore);
            const formatted = str3.toLowerCase();
            const tmp14 = navigation(stateFromStores[15]);
            return tmp14(first.toLowerCase(), formatted);
          }
        }
        return tmp;
      } else {
        return false;
      }
    });
    const mapped = arr.map((channel) => channel.channel);
    let obj = { channels: mapped, sections: items };
    items = [mapped.length];
    return obj;
  }, items1);
  channels = memo.channels;
  const items2 = [channels, first];
  const sections = memo.sections;
  const effect = channels.useEffect(() => {
    if (null != first) {
      if ("" !== tmp) {
        let formatToPlainStringResult;
        if (channels.length > 0) {
          const intl2 = intl4.intl;
          const obj = { count: channels.length };
          formatToPlainStringResult = intl2.formatToPlainString(intl4.t.ZGVL3g, obj);
        } else {
          const intl = intl4.intl;
          formatToPlainStringResult = intl.string(intl4.t.f5cMAg);
        }
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
  }, items2);
  const items3 = [channels, navigation];
  const tmp11 = navigation(stateFromStores[18])();
  const callback = channels.useCallback((arg0, arg1) => {
    let TableRowIcon;
    let obj2;
    let obj3;
    let obj4;
    const id = tmp;
    let obj = {
      icon: closure_1_12(TableRowIcon, obj2),
      start: 0 === arg1,
      end: arg1 === channels.length - 1,
      label: obj4.computeChannelName(channels[arg1], UserStore, RelationshipStore),
      labelLineClamp: 1,
      arrow: true,
      onPress() {
        const obj = { channelId: id.id };
        navigation.push(unpackModuleId.CHANNEL_OVERRIDE, obj);
      }
    };
    const TableRow = require("TableRow").TableRow;
    obj2 = { IconComponent: obj3.getChannelIconComponent(channels[arg1]) };
    TableRowIcon = require("TableRowIcon").TableRowIcon;
    obj3 = require("utils/ChannelUtils");
    obj4 = require("useChannelName");
    return closure_1_12(TableRow, obj);
  }, items3);
  let obj2 = { style: tmp.container, children: items4 };
  let obj3 = { style: tmp.searchContainer, children: closure_12(SearchField, obj4) };
  let tmp14 = closure_13;
  const tmp13 = navigation(stateFromStores[22])();
  obj4 = { placeholder: intl.string(require("intl").t["5h0QOP"]), onChange: tmp8 };
  SearchField = require("SearchField").SearchField;
  intl = require("intl").intl;
  items4 = [closure_12(View, obj3), ];
  const tmp15 = View;
  const tmp5 = navigation;
  if (0 === channels.length) {
    const obj5 = { Illustration: require("NoResults").NoResults, title: intl2.string(require("intl").t.wM7uRI), body: intl3.string(require("intl").t.f5cMAg) };
    const EmptyState = tmp2(tmp3[24]).EmptyState;
    intl2 = tmp2(tmp3[16]).intl;
    intl3 = tmp2(tmp3[16]).intl;
    tmp16Result = tmp16(EmptyState, obj5);
  } else {
    const obj6 = { sections, renderItem: callback, itemSize: tmp11, insetEnd: insets.bottom, estimatedListSize: "windowSize", placeholderConfig: tmp13, wrapChildren: true };
    tmp16Result = tmp16(tmp5(tmp3[26]), obj6);
  }
  items4[1] = tmp16Result;
  return tmp14(tmp15, obj2);
});
const result = size.fileFinishedImporting("modules/notification_settings/native/NotificationSettingChannelOverrides.native.tsx");

export default memoResult;
