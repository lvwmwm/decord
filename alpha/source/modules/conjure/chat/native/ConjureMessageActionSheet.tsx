// Module ID: 12602
// Function ID: 12603
// Name: ConjureMessageActionSheet
// Dependencies: [19, 21, 8742, 5253, 7352, 5707, 1114, 5726, 7360, 7362, 3865, 12603, 7048, 12431, 12483, 12527, 2]
// Exports: openMessageAuthorProfile, showConjureMessageActions

// Module 12602 (ConjureMessageActionSheet)
import intl6 from "intl" /* 1114 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5253 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import CopyIcon from "CopyIcon" /* 5726 */;
import ClipboardUtils from "ClipboardUtils" /* 7352 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8742 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

let closure_4;
let hasOwnProperty;
let metroRequire;
function ConjureMessageActionSheet(content) {
  let Icon;
  let Icon2;
  let Icon3;
  let Icon4;
  let Icon5;
  let Icon6;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items4;
  let obj11;
  let obj13;
  let obj3;
  let obj5;
  let obj7;
  let obj9;
  content = content.content;
  const userId = content.userId;
  const onQueuedAction = content.onQueuedAction;
  const onRestoreVersion = content.onRestoreVersion;
  const onViewTrace = content.onViewTrace;
  const items = [content];
  const items1 = [userId];
  const callback = onRestoreVersion.useCallback(() => {
    let intl;
    const obj = ClipboardUtils;
    obj.copy(content);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet(c7);
    const obj3 = { text: intl.string(intl6.t.mGZ66D), icon: CopyIcon.CopyIcon };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl6.intl;
    open("CONJURE_MESSAGE_COPIED", obj3);
  }, items);
  const items2 = [onRestoreVersion];
  const callback1 = onRestoreVersion.useCallback(() => {
    if (null != userId) {
      const obj = { userId: tmp };
      showUserProfileActionSheetDefault(obj);
    }
  }, items1);
  const items3 = [onViewTrace];
  const callback2 = onRestoreVersion.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(c7);
    if (onRestoreVersion != null) {
      onRestoreVersion();
    }
  }, items2);
  const callback3 = onRestoreVersion.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(c7);
    if (onViewTrace != null) {
      onViewTrace();
    }
  }, items3);
  const ActionSheet = content(onQueuedAction[8]).ActionSheet;
  let tmp8Result = null;
  const Group = content(onQueuedAction[9]).ActionSheetRow.Group;
  if (null != onQueuedAction) {
    let obj = { children: items4 };
    let obj2 = {
      label: intl.string(userId(onQueuedAction[10]).CXtLD2),
      icon: onViewTrace(Icon, obj3),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(c7);
          if (onQueuedAction != null) {
            tmp2("steer");
          }
        }
    };
    const ActionSheetRow = tmp6(tmp7[9]).ActionSheetRow;
    intl = tmp6(tmp7[6]).intl;
    obj3 = { IconComponent: content(onQueuedAction[11]).DoubleChevronSmallRightIcon };
    Icon = tmp6(tmp7[9]).ActionSheetRow.Icon;
    items4 = [onViewTrace(ActionSheetRow, obj2), ];
    const obj4 = {
      label: intl2.string(userId(onQueuedAction[10]).urZwpN),
      icon: onViewTrace(Icon2, obj5),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(c7);
          if (onQueuedAction != null) {
            tmp2("cancel");
          }
        }
    };
    const ActionSheetRow2 = tmp6(tmp7[9]).ActionSheetRow;
    intl2 = tmp6(tmp7[6]).intl;
    obj5 = { IconComponent: content(onQueuedAction[12]).XSmallIcon };
    Icon2 = tmp6(tmp7[9]).ActionSheetRow.Icon;
    items4[1] = onViewTrace(ActionSheetRow2, obj4);
    tmp8Result = tmp8(closure_5, obj);
  }
  const items5 = [tmp8Result, , , , ];
  let tmp5Result = null;
  if ("" !== content) {
    const obj6 = { label: intl5.string(content(onQueuedAction[6]).t.JrGD7E), icon: onViewTrace(Icon6, obj7), onPress: callback };
    const ActionSheetRow6 = tmp6(tmp7[9]).ActionSheetRow;
    intl5 = tmp6(tmp7[6]).intl;
    obj7 = { IconComponent: content(onQueuedAction[7]).CopyIcon };
    Icon6 = tmp6(tmp7[9]).ActionSheetRow.Icon;
    tmp5Result = tmp5(ActionSheetRow6, obj6);
  }
  items5[1] = tmp5Result;
  let tmp5Result4 = null;
  if (null != userId) {
    const obj8 = { label: intl3.string(content(onQueuedAction[6]).t.iXAna6), icon: onViewTrace(Icon3, obj9), onPress: callback1 };
    const ActionSheetRow3 = tmp6(tmp7[9]).ActionSheetRow;
    intl3 = tmp6(tmp7[6]).intl;
    obj9 = { IconComponent: content(onQueuedAction[13]).UserIcon };
    Icon3 = tmp6(tmp7[9]).ActionSheetRow.Icon;
    tmp5Result4 = tmp5(ActionSheetRow3, obj8);
  }
  items5[2] = tmp5Result4;
  let tmp5Result5 = null;
  if (null != onRestoreVersion) {
    const obj10 = { label: intl4.string(userId(onQueuedAction[10]).H8Jfhu), icon: onViewTrace(Icon4, obj11), onPress: callback2 };
    const ActionSheetRow4 = tmp6(tmp7[9]).ActionSheetRow;
    intl4 = tmp6(tmp7[6]).intl;
    obj11 = { IconComponent: content(onQueuedAction[14]).UndoIcon };
    Icon4 = tmp6(tmp7[9]).ActionSheetRow.Icon;
    tmp5Result5 = tmp5(ActionSheetRow4, obj10);
  }
  items5[3] = tmp5Result5;
  let tmp5Result6 = null;
  if (null != onViewTrace) {
    const obj12 = { label: "View Trace", icon: onViewTrace(Icon5, obj13), onPress: callback3 };
    const ActionSheetRow5 = tmp6(tmp7[9]).ActionSheetRow;
    obj13 = { IconComponent: content(onQueuedAction[15]).BugIcon };
    Icon5 = tmp6(tmp7[9]).ActionSheetRow.Icon;
    tmp5Result6 = tmp5(ActionSheetRow5, obj12);
  }
  items5[4] = tmp5Result6;
  const obj14 = { children: closure_6(Group, { hasIcons: true, children: items5 }) };
  return onViewTrace(ActionSheet, obj14);
}
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let c7 = "conjure-message-actions";
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageActionSheet.tsx");

export const CONJURE_MESSAGE_SHEET_KEY = "conjure-message-actions";
export function openMessageAuthorProfile(id) {
  const obj = { userId: id };
  showUserProfileActionSheetDefault(obj);
}
export function showConjureMessageActions(arg0) {
  let obj2;
  const obj = { content: React3(ConjureMessageActionSheet, obj2), key };
  const showActionSheet = ActionSheetActionCreators.showActionSheet;
  obj2 = {};
  ActionSheetActionCreators;
  const merged = Object.assign(arg0);
  showActionSheet(obj);
}
