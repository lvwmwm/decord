// Module ID: 9871
// Function ID: 76423
// Name: longPressMessageHandleReply
// Dependencies: [6923, 1849, 6922, 653, 675, 9542, 6691, 9544, 4324, 2]
// Exports: default

// Module 9871 (longPressMessageHandleReply)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/replies/native/replyToMessage.tsx");

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
  editingMessage = editingMessage.getEditingMessage(channel.id);
  if (null != editingMessage) {
    const currentUser = authStore.getCurrentUser();
    let obj = { message_id: message.id };
    ({ id: obj13.channel_id, guild_id: obj13.guild_id } = channel);
    obj.context_action = "edit";
    const obj12 = importDefault(675);
    obj.reason = require(9542) /* getContextBarCancelReason */.getContextBarCancelReason("edit", actionSource);
    obj.is_own_message = null != currentUser && currentUser.id === editingMessage.author.id;
    obj12.track(AnalyticEvents.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj);
    const obj14 = require(9542) /* getContextBarCancelReason */;
  }
  obj = importDefault(6691);
  obj.endEditMessage(channel.id);
  pendingReply = pendingReply.getPendingReply(channel.id);
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
          importDefault(675).track(AnalyticEvents.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj);
          const obj8 = importDefault(675);
          require(9544) /* createPendingReply */.deletePendingReply(channel.id);
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
          const obj10 = require(9544) /* createPendingReply */;
        }
      }
    }
  }
  let obj1 = importDefault(675);
  obj1 = { source: actionSource };
  const merged = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectGuildAnalyticsMetadata(channel.guild_id));
  const obj4 = require(4324) /* _createForOfIteratorHelperLoose */;
  const merged1 = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectChannelAnalyticsMetadata(channel));
  obj1.track(AnalyticEvents.REPLY_MESSAGE_STARTED, obj1);
  const currentUser2 = authStore.getCurrentUser();
  const obj5 = require(4324) /* _createForOfIteratorHelperLoose */;
  const tmp9 = !channel.isDM() && null != currentUser2 && message.author.id !== currentUser2.id;
  const pendingReply1 = require(9544) /* createPendingReply */.createPendingReply({ message, channel, shouldMention: tmp9, source: actionSource });
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
