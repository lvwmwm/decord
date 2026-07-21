// Module ID: 15454
// Function ID: 117877
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 15454 (_createForOfIteratorHelperLoose)
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
function HiddenMedia(length) {
  const tmp = callback3();
  const arg1 = tmp;
  let obj = {};
  const items = [
    Array.from({ length: length.count }, (arg0, arg1) => {
      let obj = { style: tmp.mediaPlaceholderCard };
      const items = [callback(tmp(closure_2[7]).ImageWarningIcon, { flex: null, flexGrow: "mobile-text-heading-primary" }), ];
      obj = {};
      const intl = tmp(closure_2[9]).intl;
      obj.children = intl.string(tmp(closure_2[9]).t.B2xSxL);
      items[1] = callback(tmp(closure_2[8]).Text, obj);
      obj.children = items;
      return callback2(closure_4, obj, arg1);
    }),

  ];
  obj = { style: tmp.mediaHiddenRow };
  const items1 = [callback(arg1(dependencyMap[10]).CircleInformationIcon, {}), ];
  obj = {};
  const intl = arg1(dependencyMap[9]).intl;
  obj.children = intl.string(arg1(dependencyMap[9]).t.VGf+K3);
  items1[1] = callback(arg1(dependencyMap[8]).Text, obj);
  obj.children = items1;
  items[1] = callback2(View, obj);
  obj.children = items;
  return callback2(View, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = {};
let obj = arg1(dependencyMap[4]);
obj = { container: { flexDirection: "column" } };
obj = { marginLeft: arg1(dependencyMap[5]).RESTRICTED_CONTENT_INSET };
obj.hiddenMedia = obj;
obj.messageRow = { position: "relative" };
const tmp2 = arg1(dependencyMap[3]);
obj.avatarHitbox = { width: arg1(dependencyMap[5]).RESTRICTED_CONTENT_INSET, height: arg1(dependencyMap[5]).RESTRICTED_AVATAR_SIZE };
const obj1 = { width: arg1(dependencyMap[5]).RESTRICTED_CONTENT_INSET, height: arg1(dependencyMap[5]).RESTRICTED_AVATAR_SIZE };
obj.dateDivider = { gap: importDefault(dependencyMap[6]).space.PX_8, marginVertical: importDefault(dependencyMap[6]).space.PX_12 };
const obj2 = { gap: importDefault(dependencyMap[6]).space.PX_8, marginVertical: importDefault(dependencyMap[6]).space.PX_12 };
obj.dividerLine = { backgroundColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE };
const obj3 = { backgroundColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE };
obj.mediaPlaceholderCard = { gap: importDefault(dependencyMap[6]).space.PX_8, marginTop: importDefault(dependencyMap[6]).space.PX_8, borderRadius: importDefault(dependencyMap[6]).radii.md, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
const obj4 = { gap: importDefault(dependencyMap[6]).space.PX_8, marginTop: importDefault(dependencyMap[6]).space.PX_8, borderRadius: importDefault(dependencyMap[6]).radii.md, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
obj.mediaHiddenRow = { gap: importDefault(dependencyMap[6]).space.PX_8, marginTop: importDefault(dependencyMap[6]).space.PX_8, marginBottom: importDefault(dependencyMap[6]).space.PX_4 };
let closure_10 = obj.createStyles(obj);
const obj5 = { gap: importDefault(dependencyMap[6]).space.PX_8, marginTop: importDefault(dependencyMap[6]).space.PX_8, marginBottom: importDefault(dependencyMap[6]).space.PX_4 };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewList.tsx");

export default function RestrictedMessagePreviewList(channelId) {
  let iter3;
  channelId = channelId.channelId;
  const arg1 = channelId;
  const tmp = callback3();
  const importDefault = tmp;
  const analyticsLocations = importDefault(dependencyMap[12])().analyticsLocations;
  const dependencyMap = analyticsLocations;
  let obj = arg1(dependencyMap[13]);
  const items = [closure_5];
  const items1 = [channelId];
  const items2 = [channelId, analyticsLocations];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const messages = messages.getMessages(channelId);
    return messages.toArray();
  }, items1);
  const callback = React.useCallback((userId) => {

  }, items2);
  const React = callback;
  const memo = React.useMemo(() => {
    let tmp = tmp(analyticsLocations[15]);
    tmp = new tmp();
    tmp.setOptions(closure_9);
    return tmp;
  }, []);
  const View = memo;
  const items3 = [tmp, memo, callback];
  closure_5 = React.useCallback((message) => {
    const channelId = message;
    const tmp = tmp(analyticsLocations[16])(message);
    let obj = {};
    obj = { style: tmp.messageRow };
    obj = { pointerEvents: "none", message, rowGenerator: memo };
    const items = [items4(tmp(analyticsLocations[17]), obj), ];
    const obj1 = { style: tmp.avatarHitbox, accessibilityRole: "button" };
    const intl = channelId(analyticsLocations[9]).intl;
    obj1.accessibilityLabel = intl.string(channelId(analyticsLocations[9]).t.iXAna6);
    obj1.onPress = function onPress() {
      return callback(arg0.author.id);
    };
    items[1] = items4(channelId(analyticsLocations[18]).PressableOpacity, obj1);
    obj.children = items;
    const items1 = [callback(memo, obj), ];
    let tmp4 = tmp > 0;
    if (tmp4) {
      const obj2 = { style: tmp.hiddenMedia };
      const obj3 = { count: tmp };
      obj2.children = items4(closure_13, obj3);
      tmp4 = items4(memo, obj2);
    }
    items1[1] = tmp4;
    obj.children = items1;
    return callback(closure_8, obj);
  }, items3);
  const items4 = [];
  const tmp5 = _createForOfIteratorHelperLoose(stateFromStoresArray);
  const iter = tmp5();
  let iter2 = iter;
  if (!iter.done) {
    do {
      let value = iter2.value;
      if (value.blocked) {
        let tmp7 = items4[items4.length - 1];
        let tmp8 = null;
        if (null != tmp7) {
          tmp8 = null;
          if ("blocked" === tmp7.type) {
            tmp8 = tmp7;
          }
        }
        if (null != tmp8) {
          let tmp9 = closure_0;
          let tmp10 = closure_2;
          let obj3 = closure_0(closure_2[11]);
          if (obj3.isSameDay(tmp8.messages[tmp8.messages.length - 1].timestamp, value.timestamp)) {
            let messages = tmp8.messages;
            let arr = messages.push(value);
            let tmp15 = tmp7;
            let tmp16 = tmp8;
          }
        }
        obj = { type: "blocked" };
        let items5 = [value];
        obj.messages = items5;
        arr = items4.push(obj);
        let tmp12 = tmp7;
        let tmp13 = tmp8;
      } else {
        obj = { type: "message", message: value };
        let arr1 = items4.push(obj);
      }
      iter3 = tmp5();
      iter2 = iter3;
    } while (!iter3.done);
  }
  return items4(View, {
    style: tmp.container,
    children: items4.map((type) => {
      if ("message" === type.type) {
        let message = type.message;
      } else {
        message = type.messages[0];
      }
      if (null == items4[arg1 - 1]) {
        let tmp3 = null == null;
        if (!tmp3) {
          let obj = channelId(analyticsLocations[11]);
          tmp3 = !obj.isSameDay(null.timestamp, message.timestamp);
        }
        obj = {};
        if (tmp3) {
          obj = { style: tmp.dateDivider };
          const obj1 = { style: tmp.dividerLine };
          const items = [items4(memo, obj1), , ];
          const obj2 = { children: channelId(analyticsLocations[11]).dateFormat(message.timestamp, "LL") };
          items[1] = items4(channelId(analyticsLocations[8]).Text, obj2);
          const obj3 = { style: tmp.dividerLine };
          items[2] = items4(memo, obj3);
          obj.children = items;
          tmp3 = callback(memo, obj);
          const obj6 = channelId(analyticsLocations[11]);
        }
        const items1 = [tmp3, ];
        if ("message" === type.type) {
          let tmp22 = messages(type.message);
        } else {
          const obj4 = { messages: type.messages, renderMessage: messages };
          tmp22 = items4(tmp(analyticsLocations[19]), obj4);
        }
        items1[1] = tmp22;
        obj.children = items1;
        if ("message" === type.type) {
          let id = type.message.id;
        } else {
          const _HermesInternal = HermesInternal;
          id = "blocked-" + message.id;
        }
        return callback(memo, obj, id);
      } else if ("message" === tmp.type) {
        let message2 = tmp.message;
      } else {
        message2 = tmp.messages[tmp.messages.length - 1];
      }
    })
  });
};
