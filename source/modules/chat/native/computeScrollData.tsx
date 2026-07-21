// Module ID: 9431
// Function ID: 73417
// Name: findMessageRowIndex
// Dependencies: []
// Exports: default

// Module 9431 (findMessageRowIndex)
function findMessageRowIndex(rows, focusTargetId) {
  const findIndexResult = rows.findIndex((message) => {
    let tmp = null != message.message;
    if (tmp) {
      tmp = message.message.id === arg1;
    }
    return tmp;
  });
  return -1 !== findIndexResult ? findIndexResult : undefined;
}
let closure_2 = importDefault(dependencyMap[0]);
({ RowType: closure_3, SeparatorType: closure_4 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/chat/native/computeScrollData.tsx");

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
      const tmp2 = function findUnreadSeperatorRowIndex(rows) {
        const findIndexResult = rows.findIndex((type) => {
          let tmp = type.type === constants.SEPARATOR;
          if (tmp) {
            tmp = type.id === constants2.UNREAD;
          }
          return tmp;
        });
        return -1 !== findIndexResult ? findIndexResult : undefined;
      }(rows);
      if (null != tmp2) {
        let obj = { type: arg1(dependencyMap[2]).ChatScrollType.SCROLL, index: tmp2 };
        if (animated) {
          animated = !closure_2.useReducedMotion;
        }
        obj.animate = animated;
        obj.highlight = false;
        obj.position = arg1(dependencyMap[2]).ChatScrollPosition.TOP;
        return obj;
      }
    }
  }
  let tmp3;
  if (null != scrollToMessageId) {
    const tmp5 = findMessageRowIndex(rows, scrollToMessageId);
    if (null != tmp5) {
      obj = { type: arg1(dependencyMap[2]).ChatScrollType.SCROLL, index: tmp5 };
      let tmp9 = !closure_2.useReducedMotion;
      if (tmp9) {
        tmp9 = jumpType !== arg1(dependencyMap[3]).JumpType.INSTANT;
      }
      obj.animate = tmp9;
      obj.highlight = scrollToMessageId === jumpTargetId;
      if (null == scrollPosition) {
        scrollPosition = arg1(dependencyMap[2]).ChatScrollPosition.TOP;
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
        obj = { type: arg1(dependencyMap[2]).ChatScrollType.FOCUS_ONLY, index: tmp16 };
        tmp14 = obj;
      }
    }
    tmp3 = tmp14;
  }
  return tmp3;
};
export { findMessageRowIndex };
