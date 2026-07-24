// Module ID: 16497
// Function ID: 128536
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 27, 1348, 5070, 3758, 653, 4326, 33, 4130, 689, 5052, 4320, 4098, 15016, 5085, 16434, 566, 5498, 4126, 1212, 5772, 4660, 4337, 8452, 1934, 8454, 8456, 1273, 12591, 5189, 2]
// Exports: default

// Module 16497 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import set from "set";
import { View } from "module_8456";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import ME from "ME";
import { UnreadSetting } from "ReadStateTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let closure_11;
let closure_12;
let closure_13;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function ChannelRow(channel) {
  channel = channel.channel;
  const onChannelSelected = channel.onChannelSelected;
  let selected = channel.selected;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = onChannelSelected(4320)(channel);
  const items = [onChannelSelected, channel];
  let obj = {};
  const callback = React.useCallback(() => {
    onChannelSelected(outer1_2[13]).hideActionSheet();
    onChannelSelected(channel);
  }, items);
  obj = { style: tmp.channelRow, onPress: callback, accessible: true };
  let tmp8;
  if (null != tmp2) {
    tmp8 = tmp2;
  }
  obj.accessibilityLabel = tmp8;
  obj.channel = channel;
  obj.selected = selected;
  obj.disableHighlightOnPress = true;
  obj.resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
  const items1 = [callback(onChannelSelected(15016), obj), ];
  if (selected) {
    obj = { style: tmp.selectedIcon, source: onChannelSelected(16434) };
    selected = callback(onChannelSelected(5085), obj);
    const tmp12 = onChannelSelected(5085);
  }
  items1[1] = selected;
  obj.children = items1;
  return closure_13(closure_12, obj);
}
const Permissions = ME.Permissions;
({ jsx: closure_11, Fragment: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, padding: 16, width: "100%" };
_createForOfIteratorHelperLoose.titleContainer = _createForOfIteratorHelperLoose;
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, padding: 16, width: "100%" };
_createForOfIteratorHelperLoose.searchContainer = obj1;
let obj2 = { alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, flexDirection: "row", padding: 16 };
_createForOfIteratorHelperLoose.createChannelButton = obj2;
let obj3 = {};
const merged = Object.assign(require("createTextStyle")(ME.Fonts.PRIMARY_MEDIUM, require("_createForOfIteratorHelperLoose").colors.TEXT_LINK, 16));
obj3["marginStart"] = 8;
_createForOfIteratorHelperLoose.createChannelLabel = obj3;
_createForOfIteratorHelperLoose.bodyContainer = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.channelRow = { paddingHorizontal: 8, paddingVertical: 4 };
_createForOfIteratorHelperLoose.selectedIcon = { end: 16, top: 10, position: "absolute" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/components/ChannelSelectorActionSheet.tsx");

export default function ChannelSelectorActionSheet(guildId) {
  let dependencyMap;
  let hideCreateChannel;
  let importDefault;
  let title;
  guildId = guildId.guildId;
  ({ onChannelSelected: importDefault, selectedChannelId: dependencyMap, title, hideCreateChannel } = guildId);
  if (hideCreateChannel === undefined) {
    hideCreateChannel = false;
  }
  let first;
  let ref;
  const tmp = _createForOfIteratorHelperLoose();
  let tmp2 = first(ref.useState(""), 2);
  first = tmp2[0];
  ref = ref.useRef(null);
  let obj = guildId(566);
  let items = [closure_7, closure_8];
  const items1 = [guildId, first];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let iter5;
    const items = [];
    const categories = outer1_7.getCategories(guildId);
    const tmp2 = outer1_15(categories._categories);
    const iter = tmp2();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let tmp3 = outer1_15;
        let tmp4 = outer1_15(categories[iter2.value.channel.id]);
        let iter3 = tmp4();
        if (!iter3.done) {
          do {
            let value = iter3.value;
            let tmp5 = outer1_8;
            let tmp6 = outer1_9;
            let canResult = outer1_8.can(outer1_9.VIEW_CHANNEL, value.channel);
            if (canResult) {
              let tmp8 = first;
              let hasItem = "" === first;
              if (!hasItem) {
                let name = value.channel.name;
                let tmp10 = first;
                hasItem = name.includes(first);
              }
              canResult = hasItem;
            }
            if (canResult) {
              let arr = items.push(value.channel);
            }
            iter4 = tmp4();
            iter3 = iter4;
            let tmp12 = value;
          } while (!iter4.done);
        }
        iter5 = tmp2();
        iter2 = iter5;
      } while (!iter5.done);
    }
    return items;
  }, items1);
  obj = { scrollable: true, ref };
  obj = {};
  const obj1 = { style: tmp.titleContainer };
  let obj2 = { accessibilityRole: "header", variant: "text-md/bold", color: "mobile-text-heading-primary" };
  if (null == title) {
    const intl = guildId(1212).intl;
    title = intl.string(guildId(1212).t.PDn2fR);
  }
  obj2.children = title;
  obj1.children = callback(guildId(4126).Text, obj2);
  const items2 = [callback(View, obj1), , ];
  const obj3 = { style: tmp.searchContainer };
  const obj4 = { size: "md" };
  const intl2 = guildId(1212).intl;
  obj4.placeholder = intl2.string(guildId(1212).t.UTYBjS);
  obj4.onChange = tmp2[1];
  obj4.onFocus = function onFocus() {
    const current = ref.current;
    let expandActionSheetResult;
    if (null != current) {
      expandActionSheetResult = current.expandActionSheet();
    }
    return expandActionSheetResult;
  };
  obj3.children = callback(guildId(5772).SearchField, obj4);
  items2[1] = callback(View, obj3);
  let tmp15Result = !hideCreateChannel;
  if (tmp15Result) {
    const obj5 = { style: tmp.createChannelButton };
    let str = "button";
    obj5.accessibilityRole = "button";
    obj5.onPress = function onPress() {
      let obj = outer1_1(outer1_2[13]);
      obj.hideActionSheet();
      obj = { guildId };
      const obj2 = outer1_1(outer1_2[23]);
      obj.createMode = guildId(outer1_2[26]).CreateChannelMode.PREMIUM_CHANNEL;
      obj.onChannelCreated = function onChannelCreated(channelId) {
        outer2_1(outer2_2[27]).close();
        const channel = outer2_6.getChannel(channelId);
        if (null != channel) {
          outer1_1(channel);
        }
      };
      obj2.pushLazy(guildId(outer1_2[25])(outer1_2[24], outer1_2.paths), obj, outer1_1(outer1_2[27]).CREATE_CHANNEL_MODAL_KEY);
    };
    const obj6 = {};
    str = undefined;
    if (null != tmp.createChannelLabel.color) {
      str = str2.toString();
    }
    obj6.color = str;
    obj6.source = importDefault(12591);
    const items3 = [callback(guildId(1273).Icon, obj6), ];
    const obj7 = { style: tmp.createChannelLabel, variant: "text-md/medium", color: "text-link" };
    const intl3 = guildId(1212).intl;
    obj7.children = intl3.string(guildId(1212).t.d7AN7W);
    items3[1] = callback(guildId(4126).Text, obj7);
    obj5.children = items3;
    tmp15Result = closure_13(guildId(4660).PressableOpacity, obj5);
    const tmp15 = closure_13;
    const tmp18 = callback;
  }
  items2[2] = tmp15Result;
  obj.children = items2;
  obj.header = closure_13(closure_12, obj);
  obj.children = callback(guildId(5189).BottomSheetFlatList, {
    style: tmp.bodyContainer,
    data: stateFromStoresArray,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(item) {
      item = item.item;
      return outer1_11(outer1_17, { channel: item, onChannelSelected: closure_1, selected: item.id === closure_2 });
    }
  });
  return callback(guildId(5498).ActionSheet, obj);
};
