// Module ID: 9988
// Function ID: 9989
// Name: computeScrollData
// Dependencies: [4879, 7592, 9989, 4787, 2]
// Exports: default, findMessageRowIndex

// Module 9988 (computeScrollData)
import flow_Client from "flow/Client" /* 4787 */;
import NativeChatUtils from "NativeChatUtils" /* 9989 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7592 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ RowType: c3, SeparatorType: closure_4 } = RowGeneratorConstants);
const result = size.fileFinishedImporting("modules/chat/native/computeScrollData.tsx");

export default function computeScrollData(shouldInitialScroll) {
  let animated;
  let constants2;
  let focusTargetId;
  let jumpTargetId;
  let jumpType;
  let rows;
  let scrollPosition;
  let scrollToMessageId;
  let scrollToRowIndexOverride;
  let tmp16;
  ({ rows, scrollToMessageId, jumpTargetId, animated, scrollPosition, focusTargetId, scrollToRowIndexOverride, jumpType } = shouldInitialScroll);
  if (shouldInitialScroll.shouldInitialScroll) {
    if (null == jumpTargetId) {
      const findIndexResult = rows.findIndex((type) => type.type === constants.SEPARATOR && type.id === constants2.UNREAD);
      let tmp3;
      if (-1 !== findIndexResult) {
        tmp3 = findIndexResult;
      }
      if (null != tmp3) {
        const obj2 = { type: NativeChatUtils.ChatScrollType.SCROLL, index: tmp3, animate: animated, highlight: false, position: tmp16(9989).ChatScrollPosition.TOP };
        tmp16 = require;
        if (animated) {
          animated = !AccessibilityStore.useReducedMotion;
        }
        return obj2;
      }
    }
  }
  let tmp4;
  if (null != scrollToMessageId) {
    if (scrollToRowIndexOverride == null) {
      const findIndexResult1 = rows.findIndex((message) => null != message.message && message.message.id === focusTargetId);
      let tmp6;
      if (-1 !== findIndexResult1) {
        tmp6 = findIndexResult1;
      }
      scrollToRowIndexOverride = tmp6;
    }
    if (null != scrollToRowIndexOverride) {
      const obj = { type: NativeChatUtils.ChatScrollType.SCROLL, index: scrollToRowIndexOverride, animate: !AccessibilityStore.useReducedMotion && jumpType !== flow_Client.JumpType.INSTANT, highlight: scrollToMessageId === jumpTargetId, position: scrollPosition };
      !AccessibilityStore.useReducedMotion && jumpType !== flow_Client.JumpType.INSTANT;
      if (scrollPosition == null) {
        scrollPosition = tmp7(9989).ChatScrollPosition.TOP;
      }
      tmp4 = obj;
    }
  }
  if (null == tmp4) {
    let tmp11;
    if (null != focusTargetId) {
      const findIndexResult2 = rows.findIndex((message) => null != message.message && message.message.id === focusTargetId);
      let tmp13;
      if (-1 !== findIndexResult2) {
        tmp13 = findIndexResult2;
      }
      if (null != tmp13) {
        tmp11 = { type: NativeChatUtils.ChatScrollType.FOCUS_ONLY, index: tmp13 };
        const obj3 = { type: NativeChatUtils.ChatScrollType.FOCUS_ONLY, index: tmp13 };
      }
    }
    tmp4 = tmp11;
  }
  return tmp4;
};
export const findMessageRowIndex = function findMessageRowIndex(previousRows, startMessageId) {
  let closure_0 = startMessageId;
  const findIndexResult = previousRows.findIndex((message) => null != message.message && message.message.id === focusTargetId);
  return -1 !== findIndexResult ? findIndexResult : undefined;
};
