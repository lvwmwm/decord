// Module ID: 9863
// Function ID: 76369
// Name: longPressMessageHandleReply
// Dependencies: []
// Exports: default

// Module 9863 (longPressMessageHandleReply)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/replies/native/replyToMessage.tsx");

export default function longPressMessageHandleReply(arg0) {
  let actionSource;
  let channel;
  let chatInputRef;
  let invertible;
  let message;
  ({ message, channel, chatInputRef, actionSource, invertible } = arg0);
  if (invertible === undefined) {
    invertible = false;
  }
  const editingMessage = editingMessage.getEditingMessage(channel.id);
  if (null != editingMessage) {
    const currentUser = authStore.getCurrentUser();
    let obj = { message_id: message.id };
    ({ id: obj13.channel_id, guild_id: obj13.guild_id } = channel);
    obj.context_action = "edit";
    const obj12 = importDefault(dependencyMap[4]);
    obj.reason = arg1(dependencyMap[5]).getContextBarCancelReason("edit", actionSource);
    obj.is_own_message = null != currentUser && currentUser.id === editingMessage.author.id;
    obj12.track(AnalyticEvents.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj);
    const obj14 = arg1(dependencyMap[5]);
  }
  obj = importDefault(dependencyMap[6]);
  obj.endEditMessage(channel.id);
  const pendingReply = pendingReply.getPendingReply(channel.id);
  if (invertible) {
    if ("message_swipe" === actionSource) {
      if (null != pendingReply) {
        if (pendingReply.message.id === message.id) {
          const currentUser1 = authStore.getCurrentUser();
          obj = { message_id: message.id };
          ({ id: obj9.channel_id, guild_id: obj9.guild_id } = channel);
          obj.context_action = "reply";
          obj.reason = "swipe_reply_undo";
          let tmp18 = null != currentUser1;
          if (tmp18) {
            tmp18 = currentUser1.id === pendingReply.message.author.id;
          }
          obj.is_own_message = tmp18;
          importDefault(dependencyMap[4]).track(AnalyticEvents.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj);
          const obj8 = importDefault(dependencyMap[4]);
          arg1(dependencyMap[7]).deletePendingReply(channel.id);
          let text;
          if (null != chatInputRef) {
            const current2 = chatInputRef.current;
            if (null != current2) {
              text = current2.getText();
            }
          }
          if ("" === text) {
            let tmp24 = null == chatInputRef;
            if (!tmp24) {
              const current3 = chatInputRef.current;
              tmp24 = null == current3;
              const obj11 = current3;
            }
            if (!tmp24) {
              obj11.dismissKeyboard();
            }
          }
          const obj10 = arg1(dependencyMap[7]);
        }
      }
    }
  }
  let obj1 = importDefault(dependencyMap[4]);
  obj1 = { source: actionSource };
  const merged = Object.assign(arg1(dependencyMap[8]).collectGuildAnalyticsMetadata(channel.guild_id));
  const obj4 = arg1(dependencyMap[8]);
  const merged1 = Object.assign(arg1(dependencyMap[8]).collectChannelAnalyticsMetadata(channel));
  obj1.track(AnalyticEvents.REPLY_MESSAGE_STARTED, obj1);
  const currentUser2 = authStore.getCurrentUser();
  const obj5 = arg1(dependencyMap[8]);
  const tmp9 = !channel.isDM() && null != currentUser2 && message.author.id !== currentUser2.id;
  const pendingReply1 = arg1(dependencyMap[7]).createPendingReply({ message, channel, shouldMention: tmp9, source: actionSource });
  let tmp11 = null == chatInputRef;
  if (!tmp11) {
    const current = chatInputRef.current;
    tmp11 = null == current;
    const obj7 = current;
  }
  if (!tmp11) {
    obj7.openSystemKeyboard();
  }
};
