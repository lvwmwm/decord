// Module ID: 11682
// Function ID: 11683
// Name: getMessageJumpData
// Dependencies: [32, 19, 1484, 1376, 558, 568, 1368, 1882, 4721, 11, 2]
// Exports: default

// Module 11682 (getMessageJumpData)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import Client from "Client" /* 4721 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1484 */;
import UserStore from "UserStore" /* 1376 */;

const require = globalThis.__r;

const useSystemKeyboardHeight = tmp(1882);
require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/chat/getMessageJumpData.tsx");

export default function getMessageJumpData(messages, isAtBottom, messages2) {
  messages = messages.messages;
  const lastResult = messages.last();
  messages2 = messages2.messages;
  const lastResult1 = messages2.last();
  const currentUser = UserStore.getCurrentUser();
  const ANIMATED = Client.JumpType.ANIMATED;
  let tmp7 = tmp6;
  ({ jumpSequenceId, focusTargetId } = messages);
  if (messages.initialScrollSequenceId === messages2.initialScrollSequenceId) {
    tmp7 = messages2.jumpSequenceId !== messages.jumpSequenceId;
  }
  let tmp8 = tmp6;
  if (messages.initialScrollSequenceId === messages2.initialScrollSequenceId) {
    tmp8 = messages2.focusSequenceId !== messages.focusSequenceId;
  }
  if (null != messages.jumpTargetId) {
    if (tmp7) {
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
              let id = lastResult.id;
              let flag = false;
              let tmp12 = ANIMATED;
              let tmp13 = null;
            } else {
              const interaction = lastResult.interaction;
              let id1;
              if (interaction != null) {
                id1 = interaction.user.id;
              }
            }
          }
          const obj2 = { scrollToMessageId: id, jumpTargetId: tmp13, jumpType: tmp12, jumpSequenceId, minimizeScrolling: flag, focusTargetId: null, shouldInitialScroll: null };
          let tmp18 = null;
          if (tmp8) {
            tmp18 = focusTargetId;
          }
          obj2.focusTargetId = tmp18;
          obj2.shouldInitialScroll = tmp6;
          return obj2;
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
          tmp12 = ANIMATED;
          tmp13 = null;
        }
      }
    }
  }
  const tmp4Result = PlatformUtils;
  flag = false;
  tmp12 = ANIMATED;
  tmp13 = null;
  id = null;
  if (tmp14) {
    id = messages.replyingMessageId;
    flag = true;
    tmp12 = ANIMATED;
    tmp13 = null;
  }
};
export const useMessageJumpAndroidKeyboardHeight = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let num2 = 0;
    if (tmpResult.isAndroid()) {
      num2 = tmp(1882).getSystemKeyboardHeight();
      const tmpResult2 = tmp(1882);
    }
    cResult[0] = num2;
    let first = num2;
    tmpResult = tmp(1368);
  } else {
    first = cResult[0];
  }
  const tmp5 = _slicedToArray(noop.useState(first), 2);
  _require = tmp5[1];
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      return subscribeToKeyboardUIStore((keyboardHeight) => {
        if (obj.isAndroid()) {
          closure_1_0(keyboardHeight.keyboardHeight);
        }
      });
    };
    const items = [];
    cResult[1] = fn;
    cResult[2] = items;
    let tmp7 = items;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const effect = noop.useEffect(tmp6, tmp7);
  return tmp5[0];
}) : (() => {
  let num = 0;
  if (obj2.isAndroid()) {
    num = useSystemKeyboardHeight.getSystemKeyboardHeight();
    const tmpResult = useSystemKeyboardHeight;
  }
  const obj = noop;
  obj2 = PlatformUtils;
  [tmp4, require] = noop.useState(num);
  const effect = obj.useEffect(() => subscribeToKeyboardUIStore((keyboardHeight) => {
    if (obj.isAndroid()) {
      closure_1_0(keyboardHeight.keyboardHeight);
    }
  }), []);
  return tmp4;
});
