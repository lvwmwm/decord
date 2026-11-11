// Module ID: 9075
// Function ID: 9076
// Name: ConversationNavigatorMoreMenu
// Dependencies: [19, 17, 9056, 21, 5243, 575, 504, 1113, 9076, 9055, 9058, 5951, 9078, 5966, 7877, 9080, 9082, 7922, 7356, 2]
// Exports: default

// Module 9075 (ConversationNavigatorMoreMenu)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import LinkIcon from "LinkIcon" /* 5966 */;
import MoreHorizontalIcon from "MoreHorizontalIcon" /* 7356 */;
import IconButton2 from "IconButton" /* 7922 */;
import ThumbsUpIcon from "ThumbsUpIcon" /* 9076 */;
import ThumbsDownIcon from "ThumbsDownIcon" /* 9078 */;
import react_mod from "react" /* 19 */;
import SelectedConversationStore from "SelectedConversationStore" /* 9056 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let obj2;
let react = react_mod;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_12 };
let closure_6 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorMoreMenu.tsx");

export default function ConversationNavigatorMoreMenu(channelId) {
  let container;
  channelId = channelId.channelId;
  const conversationId = channelId.conversationId;
  react = closure_6();
  let obj = channelId(conversationId[6]);
  let items = [SelectedConversationStore];
  let items1 = [channelId, conversationId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const conversation = SelectedConversationStore.getConversation(channelId);
    let id;
    if (conversation != null) {
      id = conversation.id;
    }
    let tmp3 = null;
    if (id === conversationId) {
      tmp3 = conversation;
    }
    return tmp3;
  }, items1);
  const items2 = [channelId, conversationId, stateFromStores];
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let obj = {
      label: intl.string(intl4.t["7iRs51"]),
      IconComponent: ThumbsUpIcon.ThumbsUpIcon,
      action() {
        const obj = channelId(conversationId[9]);
        const result = obj.setConversationFeedbackRating(channelId, conversationId, "up");
        const ConversationsAnalytics = channelId(conversationId[10]).ConversationsAnalytics;
        const obj2 = { channelId, conversationId, isThumbsUp: true, isFocusMode: true };
        ConversationsAnalytics.trackThumbsClicked(obj2);
        const obj3 = channelId(conversationId[11]);
        obj3.presentFeedbackSent();
      }
    };
    intl = intl4.intl;
    const items = [obj, ];
    let obj2 = {
      label: intl2.string(intl4.t.uNGhdg),
      IconComponent: ThumbsDownIcon.ThumbsDownIcon,
      action() {
        const obj = channelId(conversationId[9]);
        const result = obj.setConversationFeedbackRating(channelId, conversationId, "down");
        const ConversationsAnalytics = channelId(conversationId[10]).ConversationsAnalytics;
        const obj2 = { channelId, conversationId, isThumbsUp: false, isFocusMode: true };
        ConversationsAnalytics.trackThumbsClicked(obj2);
        const obj3 = channelId(conversationId[11]);
        obj3.presentFeedbackSent();
      }
    };
    intl2 = intl4.intl;
    items[1] = obj2;
    let tmp4 = items;
    if (null != stateFromStores) {
      const items1 = [];
      let obj3 = {
        label: intl3.string(intl4.t.WqhZss),
        IconComponent: LinkIcon.LinkIcon,
        action() {
            const copy = channelId(conversationId[14]).copy;
            channelId(conversationId[14]);
            const obj = channelId(conversationId[15]);
            copy(obj.getConversationPermalink(stateFromStores));
            const obj2 = channelId(conversationId[11]);
            obj2.presentLinkCopied();
          }
      };
      const arraySpreadResult = HermesBuiltin.arraySpread(items1, items, 0);
      intl3 = tmp2(1113).intl;
      items1[arraySpreadResult] = obj3;
      tmp4 = items1;
    }
    return tmp4;
  }, items2);
  return jsx(channelId(conversationId[16]).ContextMenu, {
    items: memo,
    children(ref) {
      let intl;
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      ({ size: "sm", variant: "tertiary", accessibilityLabel: intl.string(intl4.t["6Ic4Ev"]), icon: jsx(MoreHorizontalIcon.MoreHorizontalIcon, { size: "sm" }) });
      const IconButton = IconButton2.IconButton;
      const merged1 = Object.assign(merged);
      intl = intl4.intl;
      return <View style={container.container} ref={arg0.ref}>{null}</View>;
    }
  });
};
