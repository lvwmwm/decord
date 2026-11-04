// Module ID: 10048
// Function ID: 10049
// Name: ConversationNavigatorMoreMenu
// Dependencies: [19, 17, 21, 5141, 575, 1113, 10049, 10028, 10031, 5845, 10051, 10053, 8168, 9906, 2]
// Exports: default

// Module 10048 (ConversationNavigatorMoreMenu)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import IconButton2 from "IconButton" /* 8168 */;
import MoreHorizontalIcon from "MoreHorizontalIcon" /* 9906 */;
import ThumbsUpIcon from "ThumbsUpIcon" /* 10049 */;
import ThumbsDownIcon from "ThumbsDownIcon" /* 10051 */;
import react_mod from "react" /* 19 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let obj2;
let react = react_mod;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_12 };
let closure_5 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorMoreMenu.tsx");

export default function ConversationNavigatorMoreMenu(channelId) {
  let container;
  channelId = channelId.channelId;
  const conversationId = channelId.conversationId;
  react = closure_5();
  let items = [channelId, conversationId];
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    let obj = {
      label: intl.string(intl3.t["7iRs51"]),
      IconComponent: ThumbsUpIcon.ThumbsUpIcon,
      action() {
        const obj = channelId(conversationId[7]);
        const result = obj.setConversationFeedbackRating(channelId, conversationId, "up");
        const ConversationsAnalytics = channelId(conversationId[8]).ConversationsAnalytics;
        const obj2 = { channelId, conversationId, isThumbsUp: true, isFocusMode: true };
        ConversationsAnalytics.trackThumbsClicked(obj2);
        const obj3 = channelId(conversationId[9]);
        obj3.presentFeedbackSent();
      }
    };
    intl = intl3.intl;
    const items = [obj, ];
    let obj2 = {
      label: intl2.string(intl3.t.uNGhdg),
      IconComponent: ThumbsDownIcon.ThumbsDownIcon,
      action() {
        const obj = channelId(conversationId[7]);
        const result = obj.setConversationFeedbackRating(channelId, conversationId, "down");
        const ConversationsAnalytics = channelId(conversationId[8]).ConversationsAnalytics;
        const obj2 = { channelId, conversationId, isThumbsUp: false, isFocusMode: true };
        ConversationsAnalytics.trackThumbsClicked(obj2);
        const obj3 = channelId(conversationId[9]);
        obj3.presentFeedbackSent();
      }
    };
    intl2 = intl3.intl;
    items[1] = obj2;
    return items;
  }, items);
  return jsx(channelId(conversationId[11]).ContextMenu, {
    items: memo,
    children(ref) {
      let intl;
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      ({ size: "sm", variant: "tertiary", accessibilityLabel: intl.string(intl3.t["6Ic4Ev"]), icon: jsx(MoreHorizontalIcon.MoreHorizontalIcon, { size: "sm" }) });
      const IconButton = IconButton2.IconButton;
      const merged1 = Object.assign(merged);
      intl = intl3.intl;
      return <View style={container.container} ref={arg0.ref}>{null}</View>;
    }
  });
};
