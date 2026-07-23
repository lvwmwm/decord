// Module ID: 10847
// Function ID: 84165
// Name: getMessageJumpData
// Dependencies: [57, 31, 1452, 1849, 477, 1823, 4062, 21, 2]
// Exports: default, useMessageJumpAndroidKeyboardHeight

// Module 10847 (getMessageJumpData)
import _slicedToArray from "_slicedToArray";
import result from "result";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("subscribeToKeyboardUIStore").fileFinishedImporting("components_native/chat/getMessageJumpData.tsx");

export default function getMessageJumpData(messages, isAtBottom, messages2) {
  let channelId;
  let focusTargetId;
  let jumpSequenceId;
  let jumpTargetId;
  let jumpTargetId2;
  let jumpType;
  messages = messages.messages;
  const lastResult = messages.last();
  messages2 = messages2.messages;
  const lastResult1 = messages2.last();
  currentUser = currentUser.getCurrentUser();
  const ANIMATED = require(4062) /* GuildThemeSourcePreference */.JumpType.ANIMATED;
  let tmp5 = tmp4;
  ({ jumpSequenceId, focusTargetId } = messages);
  if (messages.initialScrollSequenceId === messages2.initialScrollSequenceId) {
    tmp5 = messages2.jumpSequenceId !== messages.jumpSequenceId;
  }
  let tmp6 = tmp4;
  if (messages.initialScrollSequenceId === messages2.initialScrollSequenceId) {
    tmp6 = messages2.focusSequenceId !== messages.focusSequenceId;
  }
  if (null != messages.jumpTargetId) {
    if (tmp5) {
      ({ channelId, jumpTargetId } = messages);
      const firstResult = messages.first();
      if (channelId !== jumpTargetId) {
        ({ jumpTargetId: jumpTargetId2, jumpType } = messages);
      }
      jumpTargetId2 = firstResult.id;
    }
  }
  if (!isAtBottom.isAtBottom) {
    if (isAtBottom.hasPreviousMessages) {
      if (!messages2.loadingMore) {
        if (null != lastResult) {
          if (null != currentUser) {
            if (lastResult.author.id === currentUser.id) {
              if (null != lastResult1) {
                let obj = importDefault(21);
              }
              let id = lastResult.id;
              let tmp11 = null;
              let tmp12 = ANIMATED;
              let flag = false;
            } else {
              const interaction = lastResult.interaction;
              let id1;
              if (null != interaction) {
                id1 = interaction.user.id;
              }
            }
          }
          obj = { scrollToMessageId: id, jumpTargetId: tmp11, jumpType: tmp12, jumpSequenceId, minimizeScrolling: flag };
          let tmp17 = null;
          if (tmp6) {
            tmp17 = focusTargetId;
          }
          obj.focusTargetId = tmp17;
          obj.shouldInitialScroll = tmp4;
          return obj;
        }
      }
    }
  }
  if (!messages.loadingMore) {
    if (messages.jumpedToPresent) {
      if (tmp5) {
        if (null != lastResult) {
          id = lastResult.id;
          flag = false;
          tmp11 = null;
          tmp12 = ANIMATED;
        }
      }
    }
  }
  const obj2 = require(477) /* set */;
  flag = false;
  id = null;
  tmp11 = null;
  tmp12 = ANIMATED;
  if (tmp13) {
    id = messages.replyingMessageId;
    flag = true;
    tmp11 = null;
    tmp12 = ANIMATED;
  }
};
export const useMessageJumpAndroidKeyboardHeight = function useMessageJumpAndroidKeyboardHeight() {
  let num = 0;
  if (obj.isAndroid()) {
    num = _require(1823).getSystemKeyboardHeight();
    const obj2 = _require(1823);
  }
  const tmp4 = callback(React.useState(num), 2);
  _require = tmp4[1];
  const effect = React.useEffect(() => outer1_5((keyboardHeight) => {
    if (obj.isAndroid()) {
      outer1_0(keyboardHeight.keyboardHeight);
    }
  }), []);
  return tmp4[0];
};
