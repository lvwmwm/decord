// Module ID: 16333
// Function ID: 126038
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 16333 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const arg1 = channel;
  const onChannelSelected = channel.onChannelSelected;
  const importDefault = onChannelSelected;
  let selected = channel.selected;
  const tmp = callback3();
  const tmp2 = importDefault(dependencyMap[12])(channel);
  const items = [onChannelSelected, channel];
  let obj = {};
  const callback = React.useCallback(() => {
    onChannelSelected(closure_2[13]).hideActionSheet();
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
  const items1 = [callback2(importDefault(dependencyMap[14]), obj), ];
  if (selected) {
    obj = { style: tmp.selectedIcon, source: importDefault(dependencyMap[16]) };
    selected = callback2(importDefault(dependencyMap[15]), obj);
    const tmp12 = importDefault(dependencyMap[15]);
  }
  items1[1] = selected;
  obj.children = items1;
  return closure_13(closure_12, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[6]);
const Permissions = tmp2.Permissions;
const UnreadSetting = arg1(dependencyMap[7]).UnreadSetting;
({ jsx: closure_11, Fragment: closure_12, jsxs: closure_13 } = arg1(dependencyMap[8]));
let obj = arg1(dependencyMap[9]);
obj = {};
obj = { "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014059549379171, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009471827915, "Null": 122885184.00000012, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOWEST };
obj.titleContainer = obj;
const obj1 = { "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014059549379171, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009471827915, "Null": 122885184.00000012, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_SURFACE_HIGH };
obj.searchContainer = obj1;
const obj2 = { "Bool(true)": -352059390, "Bool(true)": -984547326, "Bool(true)": -1469300479, "Bool(true)": -347013118, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_SURFACE_HIGH };
obj.createChannelButton = obj2;
const obj3 = {};
const tmp3 = arg1(dependencyMap[8]);
const merged = Object.assign(importDefault(dependencyMap[11])(tmp2.Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[10]).colors.TEXT_LINK, 16));
obj3["marginStart"] = 8;
obj.createChannelLabel = obj3;
const importDefaultResult = importDefault(dependencyMap[11]);
obj.bodyContainer = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_SURFACE_HIGH };
obj.channelRow = { "Bool(false)": "Array", "Bool(false)": "isArray" };
obj.selectedIcon = {};
let closure_14 = obj.createStyles(obj);
const obj4 = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_SURFACE_HIGH };
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/ChannelSelectorActionSheet.tsx");

export default function ChannelSelectorActionSheet(guildId) {
  let hideCreateChannel;
  let title;
  guildId = guildId.guildId;
  const arg1 = guildId;
  ({ onChannelSelected: closure_1, selectedChannelId: closure_2, title, hideCreateChannel } = guildId);
  if (hideCreateChannel === undefined) {
    hideCreateChannel = false;
  }
  let callback;
  let React;
  const tmp = callback3();
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  callback = first;
  const ref = React.useRef(null);
  React = ref;
  let obj = arg1(dependencyMap[17]);
  const items = [closure_7, closure_8];
  const items1 = [guildId, first];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let iter5;
    const items = [];
    const categories = categories.getCategories(guildId);
    const tmp2 = callback3(categories._categories);
    const iter = tmp2();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let tmp3 = closure_15;
        let tmp4 = closure_15(categories[iter2.value.channel.id]);
        let iter3 = tmp4();
        if (!iter3.done) {
          do {
            let value = iter3.value;
            let tmp5 = closure_8;
            let tmp6 = closure_9;
            let canResult = closure_8.can(closure_9.VIEW_CHANNEL, value.channel);
            if (canResult) {
              let tmp8 = closure_3;
              let hasItem = "" === closure_3;
              if (!hasItem) {
                let name = value.channel.name;
                let tmp10 = closure_3;
                hasItem = name.includes(closure_3);
              }
              canResult = hasItem;
            }
            if (canResult) {
              let arr = items.push(value.channel);
            }
            let iter4 = tmp4();
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
  const obj2 = {};
  if (null == title) {
    const intl = arg1(dependencyMap[20]).intl;
    title = intl.string(arg1(dependencyMap[20]).t.PDn2fR);
  }
  obj2.children = title;
  obj1.children = callback2(arg1(dependencyMap[19]).Text, obj2);
  const items2 = [callback2(View, obj1), , ];
  const obj3 = { style: tmp.searchContainer };
  const obj4 = { size: "md" };
  const intl2 = arg1(dependencyMap[20]).intl;
  obj4.placeholder = intl2.string(arg1(dependencyMap[20]).t.UTYBjS);
  obj4.onChange = tmp2[1];
  obj4.onFocus = function onFocus() {
    const current = ref.current;
    let expandActionSheetResult;
    if (null != current) {
      expandActionSheetResult = current.expandActionSheet();
    }
    return expandActionSheetResult;
  };
  obj3.children = callback2(arg1(dependencyMap[21]).SearchField, obj4);
  items2[1] = callback2(View, obj3);
  let tmp15Result = !hideCreateChannel;
  if (tmp15Result) {
    const obj5 = { style: tmp.createChannelButton };
    let str = "button";
    obj5.accessibilityRole = "button";
    obj5.onPress = function onPress() {
      let obj = callback(paths[13]);
      obj.hideActionSheet();
      obj = { guildId };
      const obj2 = callback(paths[23]);
      obj.createMode = guildId(paths[26]).CreateChannelMode.PREMIUM_CHANNEL;
      obj.onChannelCreated = function onChannelCreated(channelId) {
        callback(closure_2[27]).close();
        const channel = channel.getChannel(channelId);
        if (null != channel) {
          callback(channel);
        }
      };
      obj2.pushLazy(guildId(paths[25])(paths[24], paths.paths), obj, callback(paths[27]).CREATE_CHANNEL_MODAL_KEY);
    };
    const obj6 = {};
    str = undefined;
    if (null != tmp.createChannelLabel.color) {
      str = str2.toString();
    }
    obj6.color = str;
    obj6.source = importDefault(dependencyMap[29]);
    const items3 = [callback2(arg1(dependencyMap[28]).Icon, obj6), ];
    const obj7 = { "Null": true, "Null": true, alignItems: true, style: tmp.createChannelLabel };
    const intl3 = arg1(dependencyMap[20]).intl;
    obj7.children = intl3.string(arg1(dependencyMap[20]).t.d7AN7W);
    items3[1] = callback2(arg1(dependencyMap[19]).Text, obj7);
    obj5.children = items3;
    tmp15Result = closure_13(arg1(dependencyMap[22]).PressableOpacity, obj5);
    const tmp15 = closure_13;
    const tmp18 = callback2;
  }
  items2[2] = tmp15Result;
  obj.children = items2;
  obj.header = closure_13(closure_12, obj);
  obj.children = callback2(arg1(dependencyMap[30]).BottomSheetFlatList, {
    style: tmp.bodyContainer,
    data: stateFromStoresArray,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(item) {
      item = item.item;
      return callback2(closure_17, { channel: item, onChannelSelected: closure_1, selected: item.id === closure_2 });
    }
  });
  return callback2(arg1(dependencyMap[18]).ActionSheet, obj);
};
