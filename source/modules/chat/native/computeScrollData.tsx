// Module ID: 9475
// Function ID: 73680
// Name: findMessageRowIndex
// Dependencies: [4122, 7711, 9476, 4062, 2]
// Exports: default

// Module 9475 (findMessageRowIndex)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import Changeset from "Changeset";

let closure_3;
let closure_4;
const require = arg1;
function findMessageRowIndex(rows, focusTargetId) {
  let closure_0 = focusTargetId;
  const findIndexResult = rows.findIndex((message) => {
    let tmp = null != message.message;
    if (tmp) {
      tmp = message.message.id === closure_0;
    }
    return tmp;
  });
  return -1 !== findIndexResult ? findIndexResult : undefined;
}
({ RowType: closure_3, SeparatorType: closure_4 } = Changeset);
const result = require("ChatScrollPosition").fileFinishedImporting("modules/chat/native/computeScrollData.tsx");

export default function computeScrollData(shouldInitialScroll) {
  let animated;
  let focusTargetId;
  let jumpTargetId;
  let jumpType;
  let rows;
  let scrollPosition;
  let scrollToMessageId;
  ({ rows, scrollToMessageId, jumpTargetId, animated, scrollPosition, focusTargetId, jumpType } = shouldInitialScroll);
  if (shouldInitialScroll.shouldInitialScroll) {
    if (null == jumpTargetId) {
      const tmp2 = (function findUnreadSeperatorRowIndex(rows) {
        const findIndexResult = rows.findIndex((type) => {
          let tmp = type.type === outer2_3.SEPARATOR;
          if (tmp) {
            tmp = type.id === outer2_4.UNREAD;
          }
          return tmp;
        });
        return -1 !== findIndexResult ? findIndexResult : undefined;
      })(rows);
      if (null != tmp2) {
        let obj = { type: require(9476) /* ChatScrollPosition */.ChatScrollType.SCROLL, index: tmp2 };
        if (animated) {
          animated = !_isNativeReflectConstruct.useReducedMotion;
        }
        obj.animate = animated;
        obj.highlight = false;
        obj.position = require(9476) /* ChatScrollPosition */.ChatScrollPosition.TOP;
        return obj;
      }
    }
  }
  let tmp3;
  if (null != scrollToMessageId) {
    const tmp5 = findMessageRowIndex(rows, scrollToMessageId);
    if (null != tmp5) {
      obj = { type: require(9476) /* ChatScrollPosition */.ChatScrollType.SCROLL, index: tmp5 };
      let tmp9 = !_isNativeReflectConstruct.useReducedMotion;
      if (tmp9) {
        tmp9 = jumpType !== require(4062) /* GuildThemeSourcePreference */.JumpType.INSTANT;
      }
      obj.animate = tmp9;
      obj.highlight = scrollToMessageId === jumpTargetId;
      if (null == scrollPosition) {
        scrollPosition = require(9476) /* ChatScrollPosition */.ChatScrollPosition.TOP;
      }
      obj.position = scrollPosition;
      tmp3 = obj;
    }
  }
  if (null == tmp3) {
    let tmp14;
    if (null != focusTargetId) {
      const tmp16 = findMessageRowIndex(rows, focusTargetId);
      if (null != tmp16) {
        obj = { type: require(9476) /* ChatScrollPosition */.ChatScrollType.FOCUS_ONLY, index: tmp16 };
        tmp14 = obj;
      }
    }
    tmp3 = tmp14;
  }
  return tmp3;
};
export { findMessageRowIndex };
