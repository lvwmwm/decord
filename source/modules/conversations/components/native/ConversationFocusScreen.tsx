// Module ID: 9301
// Function ID: 72644
// Name: ConversationFocusScreen
// Dependencies: []
// Exports: default

// Module 9301 (ConversationFocusScreen)
let closure_2 = importAll(dependencyMap[0]);
({ ActivityIndicator: closure_3, ScrollView: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.pendingContent = { paddingVertical: importDefault(dependencyMap[5]).space.PX_24, gap: importDefault(dependencyMap[5]).space.PX_32, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
let closure_9 = obj.createStyles(obj);
const obj1 = { paddingVertical: importDefault(dependencyMap[5]).space.PX_24, gap: importDefault(dependencyMap[5]).space.PX_32, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/conversations/components/native/ConversationFocusScreen.tsx");

export default function ConversationFocusScreen() {
  let fullyHydrated;
  let startMessageId;
  let ChatPreview = callback2();
  let obj = arg1(dependencyMap[6]);
  const params = obj.useRoute().params;
  const channelId = params.channelId;
  const arg1 = channelId;
  const conversationId = params.conversationId;
  const dependencyMap = conversationId;
  let obj1 = arg1(dependencyMap[7]);
  const items = [closure_6];
  const items1 = [channelId, conversationId];
  const stateFromStores = obj1.useStateFromStores(items, () => store.getHydratedMessages(channelId, conversationId), items1);
  let obj2 = arg1(dependencyMap[7]);
  const items2 = [closure_6];
  const items3 = [channelId, conversationId];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => {
    const conversationMetadata = store.getConversationMetadata(channelId, conversationId);
    const obj = {};
    let fullyHydrated;
    if (null != conversationMetadata) {
      fullyHydrated = conversationMetadata.fullyHydrated;
    }
    obj.fullyHydrated = null != fullyHydrated && fullyHydrated;
    obj.isFullFetchPending = store.isConversationFetchPending(conversationId, true);
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
  const React = startMessageId;
  const items4 = [channelId, startMessageId];
  const callback = React.useCallback(() => {
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
    obj = { "Bool(true)": "y", "Bool(true)": "isArray", "Bool(true)": "Reflect", contentContainerStyle: ChatPreview.container };
    ChatPreview = arg1(dependencyMap[12]).ChatPreview;
    obj1 = { channelId, messages: stateFromStores, jumpTargetId: startMessageId, initialScrollToTop: true, allowReactions: true };
    obj.children = callback(ChatPreview, obj1);
    callback(closure_4, obj);
  } else {
    obj2 = { style: ChatPreview.pendingContent };
    const obj3 = {};
    const intl = arg1(dependencyMap[10]).intl;
    obj3.children = intl.string(arg1(dependencyMap[10]).t.eylmYW);
    const items5 = [callback(arg1(dependencyMap[9]).Text, obj3), ];
    let tmp13 = null != startMessageId;
    if (tmp13) {
      const obj4 = { variant: "tertiary" };
      const intl2 = arg1(dependencyMap[10]).intl;
      obj4.text = intl2.string(arg1(dependencyMap[10]).t.aBNTxl);
      obj4.onPress = callback;
      tmp13 = callback(arg1(dependencyMap[11]).Button, obj4);
    }
    items5[1] = tmp13;
    obj2.children = items5;
    closure_8(closure_5, obj2);
    const tmp7 = closure_8;
    const tmp8 = closure_5;
  }
};
