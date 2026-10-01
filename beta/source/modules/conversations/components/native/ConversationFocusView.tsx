// Module ID: 12824
// Function ID: 12825
// Name: ConversationFocusView
// Dependencies: [19, 17, 21, 4836, 576, 4531, 7335, 7351, 1115, 4832, 5281, 12825, 2]
// Exports: default

// Module 12824 (ConversationFocusView)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import ConversationsAnalytics2 from "ConversationsAnalytics" /* 7335 */;
import ConversationNavigatorUtils from "ConversationNavigatorUtils" /* 7351 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ ActivityIndicator: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((backgroundColor) => {
  const obj = { container: { flex: 1, backgroundColor }, pendingContent: { flex: 1, paddingVertical: nativeDefault.space.PX_24, alignItems: "center", gap: nativeDefault.space.PX_32, backgroundColor } };
  ({ flex: 1, paddingVertical: nativeDefault.space.PX_24, alignItems: "center", gap: nativeDefault.space.PX_32, backgroundColor });
  return obj;
});
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationFocusView.tsx");

export default function ConversationFocusView(channelId) {
  let fullyHydrated;
  let intl;
  let intl2;
  let isFullFetchPending;
  let items3;
  let messages;
  let obj4;
  let startMessageId;
  let tmp12Result;
  channelId = channelId.channelId;
  const conversationId = channelId.conversationId;
  const jumpMessageId = channelId.jumpMessageId;
  ({ fullyHydrated, startMessageId } = channelId);
  let tmp = channelId;
  ({ messages, isFullFetchPending } = channelId);
  let obj = channelId(jumpMessageId[5]);
  const token = obj.useToken(conversationId(jumpMessageId[4]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  const tmp4 = closure_9(token);
  const items = [channelId, conversationId];
  const onBeforeJumpToMessage = startMessageId.useCallback((arg0) => {
    if ("footer_cta" === arg0) {
      const ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
      const obj = { channelId, conversationId, dismissReason: "jump_to_conversation" };
      const result = ConversationsAnalytics.trackFocusModeDismissed(obj);
    }
  }, items);
  const items1 = [channelId, conversationId, startMessageId];
  const items2 = [conversationId, jumpMessageId, startMessageId, onBeforeJumpToMessage];
  const callback1 = startMessageId.useCallback(() => {
    if (null != startMessageId) {
      const obj = ConversationNavigatorUtils;
      const result = obj.closeConversationsAndJumpToMessage(channelId, tmp, conversationId);
    }
  }, items1);
  const memo = startMessageId.useMemo(() => {
    let intl;
    let tmp;
    const obj = { jumpToChatText: intl.string(intl3.t["bz/ik0"]), jumpTargetId: tmp, onBeforeJumpToMessage, conversationId };
    intl = intl3.intl;
    tmp = jumpMessageId;
    if (jumpMessageId == null) {
      tmp = startMessageId;
    }
    return obj;
  }, items2);
  if (!fullyHydrated) {
    let tmp11;
    if (isFullFetchPending) {
      const obj2 = { style: tmp4.pendingContent, children: closure_7(onBeforeJumpToMessage, {}) };
      tmp11 = closure_7(closure_6, obj2);
    }
    return tmp11;
  }
  if (fullyHydrated) {
    const obj3 = { horizontal: true, scrollEnabled: false, bounces: false, contentContainerStyle: tmp4.container, children: closure_7(tmp(jumpMessageId[11]).ChatPreview, obj4) };
    obj4 = { channelId, messages, jumpToChatProps: memo, backgroundColor: token, initialScrollToTop: null == jumpMessageId, allowReactions: true };
    tmp12Result = closure_7(closure_5, obj3);
  } else {
    const obj5 = { style: tmp4.pendingContent, children: items3 };
    const obj6 = { variant: "text-md/normal", color: "text-muted", children: intl.string(tmp(jumpMessageId[8]).t.eylmYW) };
    const Text = tmp(tmp2[9]).Text;
    intl = tmp(tmp2[8]).intl;
    items3 = [closure_7(Text, obj6), ];
    let tmp14Result = null != startMessageId;
    const tmp12 = closure_8;
    const tmp13 = closure_6;
    const tmp14 = closure_7;
    if (tmp14Result) {
      const obj7 = { variant: "tertiary", text: intl2.string(tmp(jumpMessageId[8]).t.aBNTxl), onPress: callback1 };
      const Button = tmp(tmp2[10]).Button;
      intl2 = tmp(tmp2[8]).intl;
      tmp14Result = tmp14(Button, obj7);
    }
    items3[1] = tmp14Result;
    tmp12Result = tmp12(tmp13, obj5);
  }
  tmp11 = tmp12Result;
};
