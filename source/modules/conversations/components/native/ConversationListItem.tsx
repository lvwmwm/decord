// Module ID: 9290
// Function ID: 72584
// Name: ConversationListItemBase
// Dependencies: [31, 27, 6831, 6833, 653, 33, 4130, 689, 1456, 3834, 666, 566, 9273, 9287, 9275, 5167, 4126, 1212, 9291, 9292, 4554, 2]

// Module 9290 (ConversationListItemBase)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { MOBILE_PREVIEW_MESSAGE_COUNT as closure_6 } from "CONVERSATION_COLORS";
import { VerticalGradient } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
function ConversationListItemBase(conversation) {
  conversation = conversation.conversation;
  const tmp = callback3();
  let obj = conversation(token[8]);
  const navigation = obj.useNavigation();
  let obj1 = conversation(token[9]);
  token = obj1.useToken(navigation(token[7]).colors.BACKGROUND_SURFACE_HIGH);
  let items = [token];
  const memo = stateFromStores.useMemo(() => {
    const obj = navigation(token[10])(token);
    const items = [navigation(token[10])(token).alpha(0).hex(), token];
    return items;
  }, items);
  let obj2 = conversation(token[11]);
  const items1 = [_isNativeReflectConstruct];
  const items2 = [, ];
  ({ channelId: arr3[0], id: arr3[1] } = conversation);
  stateFromStores = obj2.useStateFromStores(items1, () => outer1_5.getHydratedMessages(conversation.channelId, conversation.id), items2);
  const items3 = [stateFromStores];
  const memo1 = stateFromStores.useMemo(() => {
    let substr;
    if (null != stateFromStores) {
      substr = stateFromStores.slice(0, outer1_6);
    }
    let tmp4 = null;
    if (null != substr) {
      tmp4 = substr;
    }
    return tmp4;
  }, items3);
  const items4 = [navigation, , , , ];
  ({ channelId: arr6[1], guildId: arr6[2], id: arr6[3], title: arr6[4] } = conversation);
  const callback = stateFromStores.useCallback(() => {
    let obj = conversation(token[12]);
    const conversationMessages = obj.fetchConversationMessages(conversation.channelId, conversation.guildId, conversation.id, { includeReactions: true, includeMessageReferences: true });
    obj = { channelId: conversation.channelId, guildId: conversation.guildId, conversationId: conversation.id, title: conversation.title };
    navigation.navigate(conversation(token[13]).ConversationNavigatorScreens.FOCUS, obj);
    const ConversationsAnalytics = conversation(token[14]).ConversationsAnalytics;
    obj = { channelId: conversation.channelId, conversationId: conversation.id, isFocusMode: false };
    const result = ConversationsAnalytics.trackTopicsUnitClicked(obj);
  }, items4);
  obj = { style: tmp.card, onPress: callback, accessibilityLabel: conversation.title };
  obj = { style: tmp.headerContainer };
  obj1 = { variant: "text-md/semibold", color: "text-default", lineClamp: 1, style: tmp.title, children: conversation.title };
  const items5 = [callback(conversation(token[16]).Text, obj1), ];
  obj2 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, style: tmp.timestamp };
  const intl = conversation(token[17]).intl;
  obj2.children = intl.formatToPlainString(conversation(token[17]).t.poZZGL, { count: conversation.messageCount });
  items5[1] = callback(conversation(token[16]).Text, obj2);
  obj.children = items5;
  const items6 = [callback2(View, obj), , ];
  const obj4 = { style: tmp.previews };
  if (null == memo1) {
    let mapped = callback(navigation(token[18]), {});
  } else {
    mapped = memo1.map((id) => outer1_8(navigation(token[19]), { message: id, guildId: conversation.guildId, channelId: conversation.channelId }, id.id));
  }
  obj4.children = mapped;
  items6[1] = callback(View, obj4);
  items6[2] = callback(navigation(token[20]), { style: tmp.bottomFade, start: VerticalGradient.START, end: VerticalGradient.END, colors: memo, locations: closure_10 });
  obj.children = items6;
  return callback2(conversation(token[15]).Card, obj);
}
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = [0, 0.8];
let obj = {};
obj = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_12, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, height: 232, overflow: "hidden" };
obj.card = obj;
obj.title = { flexShrink: 1, minWidth: 0 };
obj.timestamp = { flexShrink: 0 };
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: require("_createForOfIteratorHelperLoose").space.PX_8, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.headerContainer = _createForOfIteratorHelperLoose;
obj.previews = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
const obj3 = { position: "absolute", left: 0, right: 0, bottom: -require("_createForOfIteratorHelperLoose").space.PX_4, height: require("_createForOfIteratorHelperLoose").space.PX_64, zIndex: 1 };
obj.bottomFade = obj3;
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
const memoResult = importAllResult.memo(function ConversationListItem(channelId) {
  channelId = channelId.channelId;
  const conversationId = channelId.conversationId;
  let obj = channelId(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [channelId, conversationId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const conversationMetadata = outer1_5.getConversationMetadata(channelId, conversationId);
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
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/conversations/components/native/ConversationListItem.tsx");

export default memoResult;
