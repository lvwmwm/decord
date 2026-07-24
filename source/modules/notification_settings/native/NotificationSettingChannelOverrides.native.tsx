// Module ID: 16534
// Function ID: 128811
// Dependencies: [57, 31, 27, 1352, 5070, 3767, 1849, 653, 33, 4130, 689, 566, 5160, 5071, 4320, 5045, 1212, 3843, 8871, 5165, 5170, 4593, 8866, 5772, 1273, 8547, 9280, 2]

// Module 16534
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "set";
import { isGuildReadableType } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
const require = arg1;
({ ChannelTypes: closure_10, NotificationSettingsSections: closure_11 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
let obj = {};
obj = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, flex: 1 };
obj.container = obj;
_createForOfIteratorHelperLoose = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.searchContainer = _createForOfIteratorHelperLoose;
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function NotificationSettingChannelOverrides(arg0) {
  let navigation;
  let require;
  ({ guildId: require, navigation } = arg0);
  let tmp = callback2();
  let obj = require(stateFromStores[11]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_7.getCategories(closure_0));
  let tmp3 = first(channels.useState(""), 2);
  first = tmp3[0];
  const items1 = [stateFromStores, first];
  const memo = channels.useMemo(() => {
    const channels = navigation(stateFromStores[13])(stateFromStores._categories, stateFromStores, (channel) => {
      channel = channel.channel;
      let tmp = outer2_6(channel.type);
      if (!tmp) {
        let tmp3 = channel.type === outer2_10.GUILD_CATEGORY;
        if (tmp3) {
          tmp3 = null != outer1_2[channel.id];
        }
        if (tmp3) {
          tmp3 = outer1_2[channel.id].length > 0;
        }
        tmp = tmp3;
      }
      if (tmp) {
        if ("" !== outer1_3) {
          if (null != outer1_3) {
            const obj = outer2_0(stateFromStores[14]);
            const formatted = outer2_0(stateFromStores[14]).computeChannelName(channel, outer2_9, outer2_8).toLowerCase();
            const str2 = outer2_0(stateFromStores[14]).computeChannelName(channel, outer2_9, outer2_8);
            return navigation(stateFromStores[15])(outer1_3.toLowerCase(), formatted);
          }
        }
        return tmp;
      } else {
        return false;
      }
    }).map((channel) => channel.channel);
    const sections = [channels.length];
    return { channels, sections };
  }, items1);
  channels = memo.channels;
  const items2 = [channels, first];
  const effect = channels.useEffect(() => {
    if (null != first) {
      if ("" !== first) {
        if (channels.length > 0) {
          const intl2 = outer1_0(stateFromStores[16]).intl;
          const obj = { count: length };
          let formatToPlainStringResult = intl2.formatToPlainString(outer1_0(stateFromStores[16]).t.ZGVL3g, obj);
        } else {
          const intl = outer1_0(stateFromStores[16]).intl;
          formatToPlainStringResult = intl.string(outer1_0(stateFromStores[16]).t.f5cMAg);
        }
        const AccessibilityAnnouncer = outer1_0(stateFromStores[17]).AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(formatToPlainStringResult);
      }
    }
  }, items2);
  const items3 = [channels, navigation];
  const callback = channels.useCallback((arg0, arg1) => {
    let closure_0 = tmp;
    let obj = {};
    obj = { IconComponent: outer1_0(stateFromStores[21]).getChannelIconComponent(channels[arg1]) };
    obj.icon = outer1_12(outer1_0(stateFromStores[20]).TableRowIcon, obj);
    obj.start = 0 === arg1;
    obj.end = arg1 === channels.length - 1;
    const obj3 = outer1_0(stateFromStores[21]);
    obj.label = outer1_0(stateFromStores[14]).computeChannelName(channels[arg1], outer1_9, outer1_8);
    obj.labelLineClamp = 1;
    obj.arrow = true;
    obj.onPress = function onPress() {
      outer1_1.push(outer2_11.CHANNEL_OVERRIDE, { channelId: tmp.id });
    };
    return outer1_12(outer1_0(stateFromStores[19]).TableRow, obj);
  }, items3);
  obj = { style: tmp.container };
  obj = { style: tmp.searchContainer };
  const tmp7 = navigation(stateFromStores[18])();
  const obj1 = {};
  let intl = require(stateFromStores[16]).intl;
  obj1.placeholder = intl.string(require(stateFromStores[16]).t["5h0QOP"]);
  obj1.onChange = tmp3[1];
  obj.children = callback(require(stateFromStores[23]).SearchField, obj1);
  const items4 = [callback(View, obj), ];
  if (0 === channels.length) {
    const obj2 = { Illustration: require(stateFromStores[25]).NoResults };
    let intl2 = require(stateFromStores[16]).intl;
    obj2.title = intl2.string(require(stateFromStores[16]).t.wM7uRI);
    const intl3 = require(stateFromStores[16]).intl;
    obj2.body = intl3.string(require(stateFromStores[16]).t.f5cMAg);
    let tmp15 = callback(require(stateFromStores[24]).EmptyState, obj2);
  } else {
    let obj3 = { sections: memo.sections, renderItem: callback, itemSize: tmp7, insetEnd: navigation(stateFromStores[12])().insets.bottom, estimatedListSize: "windowSize", placeholderConfig: tmp9, wrapChildren: true };
    tmp15 = callback(navigation(stateFromStores[26]), obj3);
  }
  items4[1] = tmp15;
  obj.children = items4;
  return closure_13(View, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/notification_settings/native/NotificationSettingChannelOverrides.native.tsx");

export default memoResult;
