// Module ID: 7368
// Function ID: 7369
// Name: ConversationListItem
// Dependencies: [19, 17, 7018, 7015, 1074, 21, 4836, 576, 1485, 504, 7333, 7351, 7335, 5919, 4832, 1115, 5976, 5293, 7369, 7370, 7373, 2]

// Module 7368 (ConversationListItem)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ConversationConstants from "ConversationConstants" /* 7015 */;
import ConversationsActionCreators from "ConversationsActionCreators" /* 7333 */;
import ConversationsAnalytics2 from "ConversationsAnalytics" /* 7335 */;
import ConversationNavigatorUtils from "ConversationNavigatorUtils" /* 7351 */;
import ConversationPreviewBlockedMessageDefault from "ConversationPreviewBlockedMessage" /* 7370 */;
import ConversationPreviewMessageDefault from "ConversationPreviewMessage" /* 7373 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ConversationsStore from "ConversationsStore" /* 7018 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let StyleSheet;
let c9;
let closure_4;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
function ConversationListItemBase(conversation) {
  let intl;
  let items4;
  let items5;
  let items6;
  let mapped;
  let obj12;
  let obj7;
  let obj9;
  conversation = conversation.conversation;
  let stateFromStores;
  const tmp = closure_12();
  let obj = conversation(stateFromStores[8]);
  navigation = obj.useNavigation();
  let obj2 = conversation(stateFromStores[9]);
  const items = [ConversationsStore];
  const items1 = [, ];
  ({ channelId: arr2[0], id: arr2[1] } = conversation);
  const tmp2 = stateFromStores;
  stateFromStores = obj2.useStateFromStores(items, () => ConversationsStore.getHydratedMessages(conversation.channelId, conversation.id), items1);
  const items2 = [stateFromStores];
  const memo = react.useMemo(() => {
    let substr;
    const arr = stateFromStores;
    if (stateFromStores != null) {
      substr = arr.slice(0, closure_6);
    }
    if (substr == null) {
      substr = null;
    }
    return substr;
  }, items2);
  const items3 = [navigation, , , , ];
  ({ channelId: arr5[1], guildId: arr5[2], id: arr5[3], title: arr5[4] } = conversation);
  const callback = react.useCallback(() => {
    const obj = ConversationsActionCreators;
    const conversationMessages = obj.fetchConversationMessages(conversation.channelId, conversation.id, { includeReactions: true, includeMessageReferences: true });
    const obj2 = { channelId: conversation.channelId, guildId: conversation.guildId, conversationId: conversation.id, title: conversation.title };
    navigation.navigate(ConversationNavigatorUtils.ConversationNavigatorScreens.FOCUS, obj2);
    const ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
    const obj3 = { channelId: conversation.channelId, conversationId: conversation.id, isFocusMode: false };
    const result = ConversationsAnalytics.trackTopicsUnitClicked(obj3);
  }, items3);
  let tmp6 = closure_9;
  let obj3 = { style: tmp.card, onPress: callback, accessibilityLabel: conversation.title, children: items5 };
  const obj4 = { style: tmp.headerContainer, children: items4 };
  const Card = conversation(stateFromStores[13]).Card;
  let tmp7 = closure_4;
  items4 = [, ];
  const obj5 = { variant: "text-md/semibold", color: "text-default", lineClamp: 1, style: tmp.title, children: conversation.title };
  items4[0] = closure_8(conversation(stateFromStores[14]).Text, obj5);
  const obj6 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, style: tmp.timestamp, children: intl.formatToPlainString(conversation(stateFromStores[15]).t.poZZGL, obj7) };
  const Text = conversation(stateFromStores[14]).Text;
  intl = conversation(stateFromStores[15]).intl;
  obj7 = { count: conversation.messageCount };
  items4[1] = closure_8(Text, obj6);
  items5 = [closure_9(closure_4, obj4), ];
  const obj8 = { style: tmp.previewsMask, maskElement: closure_9(closure_4, obj9), children: closure_8(tmp7, obj12) };
  obj9 = { style: tmp.maskColumn, children: items6 };
  items6 = [, ];
  const obj10 = { colors, style: tmp.maskOpaque };
  const tmp10 = navigation(stateFromStores[16]);
  items6[0] = closure_8(navigation(stateFromStores[17]), obj10);
  const obj11 = { colors: colors2, start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.maskFade };
  items6[1] = closure_8(navigation(stateFromStores[17]), obj11);
  obj12 = { style: tmp.previews, children: mapped };
  const tmp9 = navigation;
  if (null == memo) {
    mapped = tmp8(tmp9(tmp2[18]), {});
  } else {
    mapped = memo.map((blocked) => {
      if (!blocked.blocked) {
        let tmp6Result;
        if (!blocked.ignored) {
          const obj = { message: blocked, guildId: null, channelId: null };
          ({ guildId: obj.guildId, channelId: obj.channelId } = conversation);
          tmp6Result = metroImportAll(ConversationPreviewMessageDefault, obj, blocked.id);
        }
        return tmp6Result;
      }
      let str = "ignored";
      const tmp6 = metroImportAll;
      const tmp7 = ConversationPreviewBlockedMessageDefault;
      if (blocked.blocked) {
        str = "blocked";
      }
      tmp6Result = tmp6(tmp7, { reason: str }, blocked.id);
    });
  }
  items5[1] = closure_8(tmp10, obj8);
  return tmp6(Card, obj3);
}
({ View: closure_4, StyleSheet } = react_native);
let closure_6 = ConversationConstants.MOBILE_PREVIEW_MESSAGE_COUNT;
const VerticalGradient = Constants.VerticalGradient;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const colors = ["black", "black"];
const colors2 = ["black", "transparent"];
let createStyles = createStyles_mod;
let obj = { card: obj2, title: { flexShrink: 1, minWidth: 0 }, timestamp: { flexShrink: 0 }, headerContainer: obj3, previewsMask: obj4, previews: obj5, maskColumn: obj6, maskOpaque: { flex: 1 }, maskFade: obj7 };
obj2 = { marginBottom: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, height: 232, overflow: "hidden", paddingBottom: 0 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8 };
obj4 = { flex: 1, marginTop: nativeDefault.space.PX_8 };
obj5 = { gap: nativeDefault.space.PX_16 };
obj6 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj7 = { height: nativeDefault.space.PX_64 };
let closure_12 = createStyles(obj);
const memoResult = react.memo(function ConversationListItem(channelId) {
  channelId = channelId.channelId;
  const conversationId = channelId.conversationId;
  const items = [ConversationsStore];
  const items1 = [channelId, conversationId];
  const obj = channelId(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const conversationMetadata = ConversationsStore.getConversationMetadata(channelId, conversationId);
    let conversation;
    if (conversationMetadata != null) {
      conversation = conversationMetadata.conversation;
    }
    return conversation;
  }, items1);
  let tmp2 = null;
  if (null != stateFromStores) {
    const obj2 = { conversation: stateFromStores };
    tmp2 = closure_8(ConversationListItemBase, obj2);
  }
  return tmp2;
});
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationListItem.tsx");

export default memoResult;
