// Module ID: 9297
// Function ID: 72619
// Name: ConversationNavigatorMoreMenu
// Dependencies: [31, 27, 33, 4130, 689, 1212, 9298, 9273, 9275, 3830, 9300, 9302, 7771, 8968, 2]
// Exports: default

// Module 9297 (ConversationNavigatorMoreMenu)
import result from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("jsxProd").fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorMoreMenu.tsx");

export default function ConversationNavigatorMoreMenu(channelId) {
  channelId = channelId.channelId;
  const conversationId = channelId.conversationId;
  const React = _createForOfIteratorHelperLoose();
  let items = [channelId, conversationId];
  const memo = React.useMemo(() => {
    let obj = {};
    const intl = channelId(conversationId[5]).intl;
    obj.label = intl.string(channelId(conversationId[5]).t["7iRs51"]);
    obj.IconComponent = channelId(conversationId[6]).ThumbsUpIcon;
    obj.action = function action() {
      let obj = channelId(conversationId[7]);
      const result = obj.setConversationFeedbackRating(outer1_0, outer1_1, "up");
      const ConversationsAnalytics = channelId(conversationId[8]).ConversationsAnalytics;
      obj = { channelId: outer1_0, conversationId: outer1_1, isThumbsUp: true, isFocusMode: true };
      ConversationsAnalytics.trackThumbsClicked(obj);
      channelId(conversationId[9]).presentFeedbackSent();
    };
    const items = [obj, ];
    obj = {};
    const intl2 = channelId(conversationId[5]).intl;
    obj.label = intl2.string(channelId(conversationId[5]).t.uNGhdg);
    obj.IconComponent = channelId(conversationId[10]).ThumbsDownIcon;
    obj.action = function action() {
      let obj = channelId(conversationId[7]);
      const result = obj.setConversationFeedbackRating(outer1_0, outer1_1, "down");
      const ConversationsAnalytics = channelId(conversationId[8]).ConversationsAnalytics;
      obj = { channelId: outer1_0, conversationId: outer1_1, isThumbsUp: false, isFocusMode: true };
      ConversationsAnalytics.trackThumbsClicked(obj);
      channelId(conversationId[9]).presentFeedbackSent();
    };
    items[1] = obj;
    return items;
  }, items);
  return jsx(channelId(conversationId[11]).ContextMenu, {
    items: memo,
    children(ref) {
      let obj = Object.create(null);
      obj.ref = 0;
      obj = { style: container.container, ref: ref.ref };
      const merged = Object.assign(ref, obj);
      obj = {};
      const merged1 = Object.assign(merged);
      obj["size"] = "sm";
      obj["variant"] = "tertiary";
      const intl = channelId(conversationId[5]).intl;
      obj["accessibilityLabel"] = intl.string(channelId(conversationId[5]).t["6Ic4Ev"]);
      obj["icon"] = outer1_4(channelId(conversationId[13]).MoreHorizontalIcon, { size: "sm" });
      obj.children = outer1_4(channelId(conversationId[12]).IconButton, obj);
      return outer1_4(outer1_3, obj);
    }
  });
};
