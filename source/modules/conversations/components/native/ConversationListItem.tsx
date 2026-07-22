// Module ID: 9283
// Function ID: 72543
// Name: ConversationListItemBase
// Dependencies: []

// Module 9283 (ConversationListItemBase)
function ConversationListItemBase(conversation) {
  conversation = conversation.conversation;
  const arg1 = conversation;
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const navigation = obj.useNavigation();
  const importDefault = navigation;
  let obj1 = arg1(dependencyMap[9]);
  const token = obj1.useToken(importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH);
  const dependencyMap = token;
  const items = [token];
  const memo = importAllResult.useMemo(() => {
    const obj = navigation(token[10])(token);
    const items = [navigation(token[10])(token).alpha(0).hex(), token];
    return items;
  }, items);
  let obj2 = arg1(dependencyMap[11]);
  const items1 = [closure_5];
  const items2 = [, ];
  ({ channelId: arr3[0], id: arr3[1] } = conversation);
  const stateFromStores = obj2.useStateFromStores(items1, () => hydratedMessages.getHydratedMessages(conversation.channelId, conversation.id), items2);
  const items3 = [stateFromStores];
  const memo1 = importAllResult.useMemo(() => {
    let substr;
    if (null != stateFromStores) {
      substr = stateFromStores.slice(0, closure_6);
    }
    let tmp4 = null;
    if (null != substr) {
      tmp4 = substr;
    }
    return tmp4;
  }, items3);
  const items4 = [navigation, , , , ];
  ({ channelId: arr6[1], guildId: arr6[2], id: arr6[3], title: arr6[4] } = conversation);
  const callback = importAllResult.useCallback(() => {
    let obj = conversation(token[12]);
    const conversationMessages = obj.fetchConversationMessages(conversation.channelId, conversation.guildId, conversation.id, { <string:2874563683>: null, <string:1658610769>: null });
    obj = { channelId: conversation.channelId, guildId: conversation.guildId, conversationId: conversation.id, title: conversation.title };
    navigation.navigate(conversation(token[13]).ConversationNavigatorScreens.FOCUS, obj);
    const ConversationsAnalytics = conversation(token[14]).ConversationsAnalytics;
    obj = { channelId: conversation.channelId, conversationId: conversation.id, isFocusMode: false };
    const result = ConversationsAnalytics.trackTopicsUnitClicked(obj);
  }, items4);
  obj = { style: tmp.card, onPress: callback, accessibilityLabel: conversation.title };
  obj = { style: tmp.headerContainer };
  obj1 = { style: tmp.title, children: conversation.title };
  const items5 = [callback(arg1(dependencyMap[16]).Text, obj1), ];
  obj2 = { style: tmp.timestamp };
  const intl = arg1(dependencyMap[17]).intl;
  obj2.children = intl.formatToPlainString(arg1(dependencyMap[17]).t.poZZGL, { count: conversation.messageCount });
  items5[1] = callback(arg1(dependencyMap[16]).Text, obj2);
  obj.children = items5;
  const items6 = [callback2(View, obj), , ];
  const obj4 = { style: tmp.previews };
  if (null == memo1) {
    let mapped = callback(importDefault(dependencyMap[18]), {});
  } else {
    mapped = memo1.map((id) => callback(navigation(token[19]), { message: id, guildId: conversation.guildId, channelId: conversation.channelId }, id.id));
  }
  obj4.children = mapped;
  items6[1] = callback(View, obj4);
  items6[2] = callback(importDefault(dependencyMap[20]), { style: tmp.bottomFade, start: VerticalGradient.START, end: VerticalGradient.END, colors: memo, locations: closure_10 });
  obj.children = items6;
  return callback2(arg1(dependencyMap[15]).Card, obj);
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).MOBILE_PREVIEW_MESSAGE_COUNT;
const VerticalGradient = arg1(dependencyMap[4]).VerticalGradient;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let closure_10 = ["<string:6582592>", "<string:305266688>"];
let obj1 = arg1(dependencyMap[6]);
let obj = {};
obj = { marginBottom: importDefault(dependencyMap[7]).space.PX_12, borderColor: importDefault(dependencyMap[7]).colors.BORDER_MUTED, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH };
obj.card = obj;
obj.title = { "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001288835093747774, "Bool(true)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005740555781694437 };
obj.timestamp = { flexShrink: 0 };
obj1 = { 9223372036854775807: "Array", 9223372036854775807: "isArray", 0: "accessibilityRole", gap: importDefault(dependencyMap[7]).space.PX_8, paddingBottom: importDefault(dependencyMap[7]).space.PX_8 };
obj.headerContainer = obj1;
const tmp2 = arg1(dependencyMap[5]);
obj.previews = { marginTop: importDefault(dependencyMap[7]).space.PX_8, gap: importDefault(dependencyMap[7]).space.PX_16 };
const obj2 = { marginTop: importDefault(dependencyMap[7]).space.PX_8, gap: importDefault(dependencyMap[7]).space.PX_16 };
obj.bottomFade = { bottom: -importDefault(dependencyMap[7]).space.PX_4, height: importDefault(dependencyMap[7]).space.PX_64 };
let closure_11 = obj1.createStyles(obj);
const obj3 = { bottom: -importDefault(dependencyMap[7]).space.PX_4, height: importDefault(dependencyMap[7]).space.PX_64 };
const memoResult = importAllResult.memo(function ConversationListItem(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const conversationId = channelId.conversationId;
  const importDefault = conversationId;
  let obj = arg1(dependencyMap[11]);
  const items = [closure_5];
  const items1 = [channelId, conversationId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const conversationMetadata = conversationMetadata.getConversationMetadata(channelId, conversationId);
    let conversation;
    if (null != conversationMetadata) {
      conversation = conversationMetadata.conversation;
    }
    return conversation;
  }, items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { conversation: stateFromStores };
    tmp2 = callback(ConversationListItemBase, obj);
  }
  return tmp2;
});
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/conversations/components/native/ConversationListItem.tsx");

export default memoResult;
