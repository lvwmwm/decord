// Module ID: 7367
// Function ID: 7368
// Name: ConversationListScreen
// Dependencies: [5, 32, 19, 17, 7018, 7015, 21, 4836, 576, 7368, 4832, 1115, 1488, 1613, 7332, 504, 11, 7333, 7335, 8179, 2]
// Exports: default

// Module 7367 (ConversationListScreen)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import ConversationsAnalytics2 from "ConversationsAnalytics" /* 7335 */;
import ConversationListItemDefault from "ConversationListItem" /* 7368 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ConversationsStore from "ConversationsStore" /* 7018 */;
import ConversationConstants from "ConversationConstants" /* 7015 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, set;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let obj2;
let unpackModuleId;
function renderItem(item) {
  item = item.item;
  return jsx(ConversationListItemDefault, { channelId: item.channelId, conversationId: item.conversationId });
}
function keyExtractor(conversationId) {
  return conversationId.conversationId;
}
let react = react_mod;
({ ActivityIndicator: metroRequire, View: metroImportDefault } = react_native);
({ MAX_CONVERSATIONS_PER_CHANNEL: c9, MOBILE_FETCH_LIMIT: c10, MOBILE_PREVIEW_MESSAGE_COUNT: unpackModuleId } = ConversationConstants);
const jsx = Fragment.jsx;
const viewabilityConfig = { waitForInteraction: false, itemVisiblePercentThreshold: 50, minimumViewTime: 1000 };
let createStyles = createStyles_mod;
let closure_14 = createStyles.createStyles((arg0) => {
  const obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, content: { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 }, footerSpacer: { height: nativeDefault.space.PX_16 + arg0 }, spinner: { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0, alignItems: "center" } };
  ({ flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND });
  ({ paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 });
  ({ height: nativeDefault.space.PX_16 + arg0 });
  ({ paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0, alignItems: "center" });
  return obj;
});
createStyles = createStyles_mod;
let obj = { empty: obj2 };
obj2 = { paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_15 = createStyles.createStyles(obj);
const ListEmptyComponent = react.memo(() => {
  let intl;
  ({ variant: "text-md/normal", color: "text-muted", children: intl.string(intl2.t.LJuFRG) });
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return <metroImportDefault style={closure_15().empty}>{null}</metroImportDefault>;
});
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationListScreen.tsx");

export default function ConversationListScreen() {
  let FlashList;
  let channelId;
  let closure_2;
  let closure_5;
  let first;
  let obj8;
  let ref;
  let stateFromStores1;
  let tmp16;
  const tmp = channelId;
  let obj = channelId(1488);
  const params = obj.useRoute().params;
  channelId = params.channelId;
  let guildId = params.guildId;
  const bottom = guildId(1613)().bottom;
  let tmp3 = closure_14(bottom);
  dependencyMap = tmp3;
  let obj2 = channelId(7332);
  const conversationBackoffRef = obj2.useConversationBackoffRef();
  let obj3 = react;
  const tmp5 = first(react.useState(false), 2);
  first = tmp5[0];
  react = tmp5[1];
  let obj4 = channelId(504);
  const items = [stateFromStores1];
  const items1 = [channelId];
  const stateFromStoresArray = obj4.useStateFromStoresArray(items, () => {
    let channelConversations = ConversationsStore.getChannelConversations(channelId);
    if (channelConversations == null) {
      channelConversations = [];
    }
    return channelConversations.map((id) => id.id);
  }, items1);
  const items2 = [stateFromStoresArray, channelId];
  const memo = react.useMemo(() => {
    const substr = stateFromStoresArray.slice();
    const sorted = substr.sort((arg0, arg1) => {
      const obj = guildId(closure_1_2[16]);
      return obj.compare(arg1, arg0);
    });
    return sorted.map((conversationId) => ({ channelId, conversationId }));
  }, items2);
  let obj5 = channelId(504);
  const items3 = [stateFromStores1];
  const items4 = [channelId];
  let stateFromStores = obj5.useStateFromStores(items3, () => null == ConversationsStore.getEdgeMarker(channelId, "before"), items4);
  let obj6 = channelId(504);
  const items5 = [stateFromStores1];
  const items6 = [channelId];
  stateFromStores1 = obj6.useStateFromStores(items5, () => ConversationsStore.isPendingFetch(channelId), items6);
  function _handleEndReached() {
    return closure_0(...arguments);
  }
  const useCallback = react.useCallback;
  let closure_0 = conversationBackoffRef(function*(arg0, value) {
    let obj3;
    let obj6;
    if (ref === 2) {
      ref = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c2;
      try {
        ref = 2;
        if (0 === guildId) {
          if (arg0 === 1) {
            ref = 3;
            throw value;
          } else if (arg0 === 2) {
            ref = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            channelConversations = channelConversations.getChannelConversations(tmp);
            const tmp29 = tmp;
            if (null != channelConversations) {
              if (channelConversations.length > 0) {
                if (length.length > 0) {
                  if (length[0].conversationId === channelConversations[channelConversations.length - 1].id) {
                    c2 = 1;
                    const tmp16 = length[length.length - 1];
                    const obj5 = { channelId: tmp29, guildId, direction: "before", anchor: tmp16.conversationId, limit, throwOnError: true, hydrateMessages: obj6 };
                    obj6 = { limit: limit2 };
                    guildId = 2;
                    ref = 1;
                    const obj7 = { value: obj3.fetchChannelConversations(obj5), done: false };
                    obj3 = tmp(closure_2_2[17]);
                    return obj7;
                  }
                }
              }
            }
          }
        } else if (1 === tmp4) {
          c2 = 0;
          const current = ref.current;
          current.fail(closure_128_1);
          closure_1_5(true);
          ref = 3;
          const obj8 = { value: undefined, done: true };
          return obj8;
        } else if (arg0 === 1) {
          ref = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          ref = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c2 = 0;
        }
        const current2 = ref.current;
        current2.succeed();
        closure_1_5(false);
        ref = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp22) {
        if (0 === c2) {
          ref = 3;
          throw tmp22;
        } else {
          guildId = 1;
        }
      }
    }
  });
  const items7 = [memo, channelId, guildId, conversationBackoffRef];
  const items8 = [, , , ];
  ({ spinner: arr10[0], footerSpacer: arr10[1] } = tmp3);
  items8[2] = stateFromStores1;
  items8[3] = first;
  const callback = useCallback(_handleEndReached, items7);
  const memo1 = react.useMemo(() => {
    const tmp3 = stateFromStores1;
    if (!tmp3) {
      let obj;
      const tmp4 = first;
      if (!tmp4) {
        obj = { style: closure_2.footerSpacer };
      }
      return <tmp2 {...obj} />;
    }
    obj = { style: closure_2.spinner, children: <metroRequire /> };
  }, items8);
  if (stateFromStores) {
    stateFromStores = memo.length > 0;
  }
  if (stateFromStores) {
    let tmp12 = ref;
    stateFromStores = memo.length < ref;
  }
  if (stateFromStores) {
    stateFromStores = !stateFromStores1;
  }
  if (stateFromStores) {
    stateFromStores = !first;
  }
  ref = obj3.useRef(undefined);
  const items9 = [channelId];
  let tmp14 = jsx;
  let obj7 = { style: tmp3.container, children: tmp14(FlashList, obj8) };
  const callback1 = obj3.useCallback(function(viewableItems) {
    viewableItems = viewableItems.viewableItems;
    if (null == ref.current) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      tmp.current = new Set();
      set = new Set();
    }
    for (const item10018 of viewableItems) {
      let conversationId = item10018.item.conversationId;
      let tmp6 = conversationId;
      let current = ref.current;
      let tmp8 = ref;
      if (!current.has(conversationId)) {
        let ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
        let obj = { channelId, conversationId: tmp6, isFocusMode: false };
        let result = ConversationsAnalytics.trackPreviewImpression(obj);
        let current2 = tmp8.current;
        let addResult = current2.add(tmp6);
      }
      continue;
    }
  }, items9);
  obj8 = { data: memo, renderItem, keyExtractor, contentContainerStyle: tmp3.content, scrollIndicatorInsets: { bottom }, onEndReached: tmp16, ListEmptyComponent, ListFooterComponent: memo1, onViewableItemsChanged: callback1, viewabilityConfig };
  tmp16 = undefined;
  FlashList = tmp(8179).FlashList;
  const tmp15 = memo;
  if (stateFromStores) {
    tmp16 = callback;
  }
  return tmp14(tmp15, obj7);
};
