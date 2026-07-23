// Module ID: 9289
// Function ID: 72563
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 57, 31, 27, 6831, 6833, 33, 4130, 689, 9290, 4126, 1212, 1459, 1557, 9272, 566, 21, 9273, 9275, 7879, 2]
// Exports: default

// Module 9289 (_createForOfIteratorHelperLoose)
import closure_3 from "CONVERSATION_COLORS";
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import CONVERSATION_COLORS from "CONVERSATION_COLORS";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
let closure_9;
let require = arg1;
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
function renderItem(item) {
  item = item.item;
  return jsx(importDefault(9290), { channelId: item.channelId, conversationId: item.conversationId });
}
function keyExtractor(conversationId) {
  return conversationId.conversationId;
}
({ ActivityIndicator: closure_6, View: closure_7 } = get_ActivityIndicator);
({ MAX_CONVERSATIONS_PER_CHANNEL: closure_9, MOBILE_FETCH_LIMIT: closure_10, MOBILE_PREVIEW_MESSAGE_COUNT: closure_11 } = CONVERSATION_COLORS);
let closure_13 = { waitForInteraction: false, itemVisiblePercentThreshold: 50, minimumViewTime: 1000 };
let obj = {};
obj = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.container = obj;
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.content = _createForOfIteratorHelperLoose;
obj.spinner = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center" };
let closure_14 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj3 = {};
let obj2 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center" };
obj3.empty = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_24, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
let closure_15 = _createForOfIteratorHelperLoose.createStyles(obj3);
let closure_16 = importAllResult.memo(() => {
  let obj = { style: callback2().empty };
  obj = { variant: "text-md/normal", color: "text-muted" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.LJuFRG);
  obj.children = jsx(require(4126) /* Text */.Text, { variant: "text-md/normal", color: "text-muted" });
  return <closure_7 variant="text-md/normal" color="text-muted" />;
});
let obj4 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_24, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
let result = require("result").fileFinishedImporting("modules/conversations/components/native/ConversationListScreen.tsx");

export default function ConversationListScreen() {
  const tmp = callback();
  const require = tmp;
  let obj = require(guildId[12]);
  const params = obj.useRoute().params;
  const channelId = params.channelId;
  guildId = params.guildId;
  const conversationBackoffRef = require(guildId[14]).useConversationBackoffRef();
  const tmp3 = first(importAllResult.useState(false), 2);
  first = tmp3[0];
  const obj2 = require(guildId[14]);
  const items = [stateFromStores1];
  const items1 = [channelId];
  const stateFromStoresArray = require(guildId[15]).useStateFromStoresArray(items, () => {
    let channelConversations = stateFromStores1.getChannelConversations(channelId);
    if (null == channelConversations) {
      channelConversations = [];
    }
    return channelConversations.map((id) => id.id);
  }, items1);
  const items2 = [stateFromStoresArray, channelId];
  const memo = importAllResult.useMemo(() => {
    const substr = stateFromStoresArray.slice();
    const sorted = substr.sort((arg0, arg1) => channelId(guildId[16]).compare(arg1, arg0));
    return sorted.map((conversationId) => ({ channelId: outer1_1, conversationId }));
  }, items2);
  const obj3 = require(guildId[15]);
  const items3 = [stateFromStores1];
  const items4 = [channelId];
  const stateFromStores = require(guildId[15]).useStateFromStores(items3, () => null == stateFromStores1.getEdgeMarker(channelId, "before"), items4);
  const obj4 = require(guildId[15]);
  const items5 = [stateFromStores1];
  const items6 = [channelId];
  stateFromStores1 = require(guildId[15]).useStateFromStores(items5, () => stateFromStores1.isPendingFetch(channelId), items6);
  const items7 = [memo, channelId, guildId, conversationBackoffRef];
  const items8 = [tmp.spinner, stateFromStores1, first];
  callback = importAllResult.useCallback((() => {
    function _handleEndReached() {
      return callback(...arguments);
    }
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = conversationBackoffRef(tmp);
    return _handleEndReached;
  })(), items7);
  let tmp10 = stateFromStores;
  const memo1 = importAllResult.useMemo(() => {
    if (stateFromStores1) {
      const obj = { style: tmp.spinner, children: outer1_12(stateFromStoresArray, {}) };
      let tmp2 = outer1_12(memo, obj);
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
  closure_9 = importAllResult.useRef(undefined);
  const items9 = [channelId];
  obj = { style: items10 };
  items10 = [tmp.container, { paddingBottom: channelId(guildId[13])().bottom }];
  const callback1 = importAllResult.useCallback((viewableItems) => {
    let iter2;
    if (null == ref.current) {
      const _Set = Set;
      const set = new Set();
      ref.current = set;
    }
    const tmp7 = outer1_17(viewableItems.viewableItems);
    let iter = tmp7();
    if (!iter.done) {
      do {
        let conversationId = iter.value.item.conversationId;
        let tmp8 = ref;
        let current = ref.current;
        if (!current.has(conversationId)) {
          let tmp9 = tmp;
          let tmp10 = guildId;
          let ConversationsAnalytics = tmp(guildId[18]).ConversationsAnalytics;
          let obj = {};
          let tmp11 = channelId;
          obj.channelId = channelId;
          obj.conversationId = conversationId;
          obj.isFocusMode = false;
          let result = ConversationsAnalytics.trackPreviewImpression(obj);
          let tmp13 = ref;
          let current2 = ref.current;
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
  obj.children = jsx(require(guildId[19]).FlashList, { data: memo, renderItem, keyExtractor, contentContainerStyle: tmp.content });
  return <memo data={memo} renderItem={renderItem} keyExtractor={keyExtractor} contentContainerStyle={tmp.content} />;
};
