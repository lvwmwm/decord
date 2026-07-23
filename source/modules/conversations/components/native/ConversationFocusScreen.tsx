// Module ID: 9308
// Function ID: 72685
// Name: ConversationFocusScreen
// Dependencies: [31, 27, 6831, 33, 4130, 689, 1459, 566, 9287, 4126, 1212, 4543, 9309, 2]
// Exports: default

// Module 9308 (ConversationFocusScreen)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
({ ActivityIndicator: closure_3, ScrollView: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { flex: 1, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_24, alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_32, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.pendingContent = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/conversations/components/native/ConversationFocusScreen.tsx");

export default function ConversationFocusScreen() {
  let fullyHydrated;
  let startMessageId;
  let ChatPreview = _createForOfIteratorHelperLoose();
  let obj = channelId(conversationId[6]);
  const params = obj.useRoute().params;
  channelId = params.channelId;
  conversationId = params.conversationId;
  let obj1 = channelId(conversationId[7]);
  const items = [_isNativeReflectConstruct];
  const items1 = [channelId, conversationId];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_6.getHydratedMessages(channelId, conversationId), items1);
  let obj2 = channelId(conversationId[7]);
  const items2 = [_isNativeReflectConstruct];
  const items3 = [channelId, conversationId];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => {
    const conversationMetadata = outer1_6.getConversationMetadata(channelId, conversationId);
    const obj = {};
    let fullyHydrated;
    if (null != conversationMetadata) {
      fullyHydrated = conversationMetadata.fullyHydrated;
    }
    obj.fullyHydrated = null != fullyHydrated && fullyHydrated;
    obj.isFullFetchPending = outer1_6.isConversationFetchPending(conversationId, true);
    let startMessageId;
    if (null != conversationMetadata) {
      startMessageId = conversationMetadata.conversation.startMessageId;
    }
    let tmp4 = null;
    if (null != startMessageId) {
      tmp4 = startMessageId;
    }
    obj.startMessageId = tmp4;
    return obj;
  }, items3);
  ({ fullyHydrated, startMessageId } = stateFromStoresObject);
  const items4 = [channelId, startMessageId];
  const callback = startMessageId.useCallback(() => {
    if (null != startMessageId) {
      const result = channelId(conversationId[8]).closeConversationsAndJumpToMessage(channelId, startMessageId);
      const obj = channelId(conversationId[8]);
    }
  }, items4);
  if (!fullyHydrated) {
    if (stateFromStoresObject.isFullFetchPending) {
      obj = { style: ChatPreview.pendingContent, children: callback(closure_3, {}) };
      return callback(closure_5, obj);
    }
  }
  if (fullyHydrated) {
    obj = { horizontal: true, scrollEnabled: false, bounces: false, contentContainerStyle: ChatPreview.container };
    ChatPreview = channelId(conversationId[12]).ChatPreview;
    obj1 = { channelId, messages: stateFromStores, jumpTargetId: startMessageId, initialScrollToTop: true, allowReactions: true };
    obj.children = callback(ChatPreview, obj1);
    callback(closure_4, obj);
  } else {
    obj2 = { style: ChatPreview.pendingContent };
    const obj3 = { variant: "text-md/normal", color: "text-muted" };
    const intl = channelId(conversationId[10]).intl;
    obj3.children = intl.string(channelId(conversationId[10]).t.eylmYW);
    const items5 = [callback(channelId(conversationId[9]).Text, obj3), ];
    let tmp13 = null != startMessageId;
    if (tmp13) {
      const obj4 = { variant: "tertiary" };
      const intl2 = channelId(conversationId[10]).intl;
      obj4.text = intl2.string(channelId(conversationId[10]).t.aBNTxl);
      obj4.onPress = callback;
      tmp13 = callback(channelId(conversationId[11]).Button, obj4);
    }
    items5[1] = tmp13;
    obj2.children = items5;
    closure_8(closure_5, obj2);
    const tmp7 = closure_8;
    const tmp8 = closure_5;
  }
};
