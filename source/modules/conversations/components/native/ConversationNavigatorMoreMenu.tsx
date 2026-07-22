// Module ID: 9290
// Function ID: 72578
// Name: ConversationNavigatorMoreMenu
// Dependencies: []
// Exports: default

// Module 9290 (ConversationNavigatorMoreMenu)
let closure_2 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[4]).space.PX_12 };
obj.container = obj;
let closure_5 = obj.createStyles(obj);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/conversations/components/native/ConversationNavigatorMoreMenu.tsx");

export default function ConversationNavigatorMoreMenu(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const conversationId = channelId.conversationId;
  const dependencyMap = conversationId;
  const React = callback();
  const items = [channelId, conversationId];
  const memo = React.useMemo(() => {
    let obj = {};
    const intl = channelId(conversationId[5]).intl;
    obj.label = intl.string(channelId(conversationId[5]).t.7iRs51);
    obj.IconComponent = channelId(conversationId[6]).ThumbsUpIcon;
    obj.action = function action() {
      let obj = callback(closure_1[7]);
      const result = obj.setConversationFeedbackRating(callback, closure_1, "up");
      const ConversationsAnalytics = callback(closure_1[8]).ConversationsAnalytics;
      obj = { channelId: callback, conversationId: closure_1, isThumbsUp: true, isFocusMode: true };
      ConversationsAnalytics.trackThumbsClicked(obj);
      callback(closure_1[9]).presentFeedbackSent();
    };
    const items = [obj, ];
    obj = {};
    const intl2 = channelId(conversationId[5]).intl;
    obj.label = intl2.string(channelId(conversationId[5]).t.uNGhdg);
    obj.IconComponent = channelId(conversationId[10]).ThumbsDownIcon;
    obj.action = function action() {
      let obj = callback(closure_1[7]);
      const result = obj.setConversationFeedbackRating(callback, closure_1, "down");
      const ConversationsAnalytics = callback(closure_1[8]).ConversationsAnalytics;
      obj = { channelId: callback, conversationId: closure_1, isThumbsUp: false, isFocusMode: true };
      ConversationsAnalytics.trackThumbsClicked(obj);
      callback(closure_1[9]).presentFeedbackSent();
    };
    items[1] = obj;
    return items;
  }, items);
  return jsx(arg1(dependencyMap[11]).ContextMenu, {
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
      obj["accessibilityLabel"] = intl.string(channelId(conversationId[5]).t.6Ic4Ev);
      obj["icon"] = callback(channelId(conversationId[13]).MoreHorizontalIcon, { size: "sm" });
      obj.children = callback(channelId(conversationId[12]).IconButton, obj);
      return callback(closure_3, obj);
    }
  });
};
