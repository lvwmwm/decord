// Module ID: 9277
// Function ID: 72486
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 9277 (_createForOfIteratorHelperLoose)
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
function renderItem(item) {
  item = item.item;
  return jsx(importDefault(dependencyMap[9]), { channelId: item.channelId, conversationId: item.conversationId });
}
function keyExtractor(conversationId) {
  return conversationId.conversationId;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ ActivityIndicator: closure_6, View: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[3]);
({ MAX_CONVERSATIONS_PER_CHANNEL: closure_9, MOBILE_FETCH_LIMIT: closure_10, MOBILE_PREVIEW_MESSAGE_COUNT: closure_11 } = arg1(dependencyMap[5]));
const jsx = arg1(dependencyMap[6]).jsx;
let closure_13 = { onPressEmoji: 7, onLongPressEmoji: "days", height: "sekund\u0117_sekund\u017Ei\u0173_sekundes" };
let obj1 = arg1(dependencyMap[7]);
let obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj1 = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16, paddingTop: importDefault(dependencyMap[8]).space.PX_16 };
obj.content = obj1;
const tmp3 = arg1(dependencyMap[5]);
obj.spinner = { paddingVertical: importDefault(dependencyMap[8]).space.PX_16, alignItems: "center" };
let closure_14 = obj1.createStyles(obj);
const obj2 = { paddingVertical: importDefault(dependencyMap[8]).space.PX_16, alignItems: "center" };
const obj3 = {};
const obj7 = arg1(dependencyMap[7]);
obj3.empty = { paddingVertical: importDefault(dependencyMap[8]).space.PX_24, paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16 };
let closure_15 = obj7.createStyles(obj3);
let closure_16 = importAllResult.memo(() => {
  let obj = { style: callback3().empty };
  obj = {};
  const intl = arg1(dependencyMap[11]).intl;
  obj.children = intl.string(arg1(dependencyMap[11]).t.LJuFRG);
  obj.children = jsx(arg1(dependencyMap[10]).Text, obj);
  return <closure_7 {...obj} />;
});
const obj4 = { paddingVertical: importDefault(dependencyMap[8]).space.PX_24, paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16 };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/conversations/components/native/ConversationListScreen.tsx");

export default function ConversationListScreen() {
  const tmp = callback2();
  const arg1 = tmp;
  let obj = arg1(dependencyMap[12]);
  const params = obj.useRoute().params;
  const channelId = params.channelId;
  const importDefault = channelId;
  const guildId = params.guildId;
  const dependencyMap = guildId;
  const conversationBackoffRef = arg1(dependencyMap[14]).useConversationBackoffRef();
  let closure_3 = conversationBackoffRef;
  const tmp3 = callback(React.useState(false), 2);
  const first = tmp3[0];
  let callback = first;
  const React = tmp3[1];
  const obj2 = arg1(dependencyMap[14]);
  const items = [closure_8];
  const items1 = [channelId];
  const stateFromStoresArray = arg1(dependencyMap[15]).useStateFromStoresArray(items, () => {
    let channelConversations = stateFromStores1.getChannelConversations(channelId);
    if (null == channelConversations) {
      channelConversations = [];
    }
    return channelConversations.map((id) => id.id);
  }, items1);
  const items2 = [stateFromStoresArray, channelId];
  const memo = React.useMemo(() => {
    const substr = stateFromStoresArray.slice();
    const sorted = substr.sort((arg0, arg1) => callback(closure_2[16]).compare(arg1, arg0));
    return sorted.map((conversationId) => ({ channelId: closure_1, conversationId }));
  }, items2);
  const obj3 = arg1(dependencyMap[15]);
  const items3 = [closure_8];
  const items4 = [channelId];
  const stateFromStores = arg1(dependencyMap[15]).useStateFromStores(items3, () => null == stateFromStores1.getEdgeMarker(channelId, "before"), items4);
  const obj4 = arg1(dependencyMap[15]);
  const items5 = [closure_8];
  const items6 = [channelId];
  const stateFromStores1 = arg1(dependencyMap[15]).useStateFromStores(items5, () => stateFromStores1.isPendingFetch(channelId), items6);
  closure_8 = stateFromStores1;
  const items7 = [memo, channelId, guildId, conversationBackoffRef];
  const items8 = [tmp.spinner, stateFromStores1, first];
  callback = React.useCallback(() => {
    function _handleEndReached() {
      return callback(...arguments);
    }
    const channelId = _handleEndReached;
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = conversationBackoffRef(tmp);
    return _handleEndReached;
  }(), items7);
  let tmp10 = stateFromStores;
  const memo1 = React.useMemo(() => {
    if (stateFromStores1) {
      const obj = { style: tmp.spinner, children: callback(stateFromStoresArray, {}) };
      let tmp2 = callback(memo, obj);
    } else {
      tmp2 = null;
    }
    return tmp2;
  }, items8);
  if (stateFromStores) {
    tmp10 = memo.length > 0;
  }
  if (tmp10) {
    tmp10 = memo.length < closure_9;
  }
  if (tmp10) {
    tmp10 = !stateFromStores1;
  }
  if (tmp10) {
    tmp10 = !first;
  }
  closure_9 = React.useRef(undefined);
  const items9 = [channelId];
  obj = { style: items10 };
  const items10 = [tmp.container, { paddingBottom: importDefault(dependencyMap[13])().bottom }];
  const callback1 = React.useCallback((viewableItems) => {
    let iter2;
    if (null == ref.current) {
      const _Set = Set;
      const set = new Set();
      ref.current = set;
    }
    const tmp7 = callback2(viewableItems.viewableItems);
    let iter = tmp7();
    if (!iter.done) {
      do {
        let conversationId = iter.value.item.conversationId;
        let tmp8 = closure_9;
        let current = closure_9.current;
        if (!current.has(conversationId)) {
          let tmp9 = closure_0;
          let tmp10 = closure_2;
          let ConversationsAnalytics = closure_0(closure_2[18]).ConversationsAnalytics;
          let obj = {};
          let tmp11 = closure_1;
          obj.channelId = closure_1;
          obj.conversationId = conversationId;
          obj.isFocusMode = false;
          let result = ConversationsAnalytics.trackPreviewImpression(obj);
          let tmp13 = closure_9;
          let current2 = closure_9.current;
          let addResult = current2.add(conversationId);
        }
        iter2 = tmp7();
        iter = iter2;
      } while (!iter2.done);
    }
  }, items9);
  obj = { data: memo, renderItem, keyExtractor, contentContainerStyle: tmp.content };
  let tmp16;
  if (tmp10) {
    tmp16 = callback;
  }
  obj.onEndReached = tmp16;
  obj.ListEmptyComponent = closure_16;
  obj.ListFooterComponent = memo1;
  obj.onViewableItemsChanged = callback1;
  obj.viewabilityConfig = closure_13;
  obj.children = jsx(arg1(dependencyMap[19]).FlashList, obj);
  return <memo {...obj} />;
};
