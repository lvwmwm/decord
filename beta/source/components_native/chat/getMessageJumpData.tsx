// Module ID: 11019
// Function ID: 11020
// Name: getMessageJumpData
// Dependencies: [32, 19, 1481, 1372, 1364, 1879, 4763, 11, 2]
// Exports: default, useMessageJumpAndroidKeyboardHeight

// Module 11019 (getMessageJumpData)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import flow_Client from "flow/Client" /* 4763 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1481 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

let tmp;
let tmp4;
const PlatformUtils = tmp4(1364);
const useSystemKeyboardHeight = tmp(1879);
const result = size.fileFinishedImporting("components_native/chat/getMessageJumpData.tsx");

export default function getMessageJumpData(messages, isAtBottom, messages2) {
  let channelId;
  let flag;
  let focusTargetId;
  let id;
  let jumpSequenceId;
  let jumpTargetId;
  let jumpType;
  let tmp12;
  let tmp15;
  messages = messages.messages;
  const lastResult = messages.last();
  messages2 = messages2.messages;
  const lastResult1 = messages2.last();
  const currentUser = UserStore.getCurrentUser();
  const ANIMATED = flow_Client.JumpType.ANIMATED;
  let tmp7 = tmp6;
  ({ jumpSequenceId, focusTargetId } = messages);
  if (messages.initialScrollSequenceId === messages2.initialScrollSequenceId) {
    tmp7 = messages2.jumpSequenceId !== messages.jumpSequenceId;
  }
  const tmp8 = messages.initialScrollSequenceId !== messages2.initialScrollSequenceId || messages2.focusSequenceId !== messages.focusSequenceId;
  if (null != messages.jumpTargetId) {
    if (tmp7) {
      ({ channelId, jumpTargetId } = messages);
      const firstResult = messages.first();
      if (channelId === jumpTargetId) {
        let jumpTargetId2;
        if (null != firstResult) {
          jumpTargetId2 = firstResult.id;
        }
        jumpType = messages.jumpType;
        flag = false;
        tmp12 = jumpTargetId2;
        id = jumpTargetId2;
      }
      jumpTargetId2 = messages.jumpTargetId;
    }
    const obj2 = { scrollToMessageId: id, jumpTargetId: tmp12, jumpType, jumpSequenceId, minimizeScrolling: flag, focusTargetId: tmp15, shouldInitialScroll: messages.initialScrollSequenceId !== messages2.initialScrollSequenceId };
    tmp15 = null;
    if (tmp8) {
      tmp15 = focusTargetId;
    }
    return obj2;
  }
  if (!isAtBottom.isAtBottom) {
    if (isAtBottom.hasPreviousMessages) {
      if (!messages2.loadingMore) {
        if (null != lastResult) {
          if (null != currentUser) {
            if (lastResult.author.id === currentUser.id) {
              if (null != lastResult1) {
                SnowflakeUtilsDefault;
              }
              id = lastResult.id;
              flag = false;
              jumpType = ANIMATED;
              tmp12 = null;
            } else {
              const interaction = lastResult.interaction;
              let id1;
              if (interaction != null) {
                id1 = interaction.user.id;
              }
            }
          }
        }
      }
    }
  }
  if (!messages.loadingMore) {
    if (messages.jumpedToPresent) {
      if (tmp7) {
        if (null != lastResult) {
          id = lastResult.id;
          flag = false;
          jumpType = ANIMATED;
          tmp12 = null;
        }
      }
    }
  }
  flag = false;
  jumpType = ANIMATED;
  tmp12 = null;
  id = null;
  const tmp4Result = PlatformUtils;
  const tmp13 = tmp4Result.isAndroid() && messages2.androidKeyboardHeight < messages.androidKeyboardHeight && null != messages.replyingMessageId;
  if (tmp13) {
    id = messages.replyingMessageId;
    flag = true;
    jumpType = ANIMATED;
    tmp12 = null;
  }
};
export const useMessageJumpAndroidKeyboardHeight = function useMessageJumpAndroidKeyboardHeight() {
  let tmp4;
  let obj = react;
  const useState = react.useState;
  let num = 0;
  const obj2 = PlatformUtils;
  if (obj2.isAndroid()) {
    const tmpResult = useSystemKeyboardHeight;
    num = tmpResult.getSystemKeyboardHeight();
  }
  [tmp4, require] = _slicedToArray(useState(num), 2);
  const tmp3 = _slicedToArray(useState(num), 2);
  const effect = obj.useEffect(() => subscribeToKeyboardUIStore((keyboardHeight) => {
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      closure_1_0(keyboardHeight.keyboardHeight);
    }
  }), []);
  return tmp4;
};
