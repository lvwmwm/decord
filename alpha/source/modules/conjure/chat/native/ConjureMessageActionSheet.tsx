// Module ID: 17069
// Function ID: 17070
// Name: ConjureMessageActionSheet
// Dependencies: [19, 21, 8287, 5055, 558, 576, 6879, 4768, 1126, 5044, 6888, 3827, 17070, 6212, 11338, 15299, 6892, 2]
// Exports: openMessageAuthorProfile, showConjureMessageActions

// Module 17069 (ConjureMessageActionSheet)
import intl6 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import CopyIcon from "CopyIcon" /* 5044 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5055 */;
import ClipboardUtils from "ClipboardUtils" /* 6879 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8287 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let c7 = "conjure-message-actions";
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureMessageActionSheet(content) {
  let Icon;
  let Icon2;
  let Icon3;
  let Icon4;
  let Icon5;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items1;
  let obj12;
  let obj14;
  let obj3;
  let obj5;
  let obj7;
  let obj9;
  let onQueuedAction;
  let tmp4;
  let tmp5;
  let tmp6;
  const tmp = content;
  const tmp2 = onQueuedAction;
  let obj = content(onQueuedAction[5]);
  const cResult = obj.c(25);
  content = content.content;
  const userId = content.userId;
  onQueuedAction = content.onQueuedAction;
  const onRestoreVersion = content.onRestoreVersion;
  if (cResult[0] !== content) {
    const fn = function o() {
      let intl;
      const obj = ClipboardUtils;
      obj.copy(content);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet(c7);
      const obj3 = { key: "VIBEGRATIONS_MESSAGE_COPIED", content: intl.string(intl6.t.mGZ66D), IconComponent: CopyIcon.CopyIcon };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl6.intl;
      open(obj3);
    };
    cResult[0] = content;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== userId) {
    const fn2 = function p() {
      if (null != userId) {
        const obj = { userId: tmp };
        showUserProfileActionSheetDefault(obj);
      }
    };
    cResult[2] = userId;
    cResult[3] = fn2;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[3];
  }
  if (cResult[4] !== onQueuedAction) {
    function handleQueuedAction(arg0) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(c7);
      if (onQueuedAction != null) {
        tmp2(arg0);
      }
    }
    cResult[4] = onQueuedAction;
    cResult[5] = handleQueuedAction;
    tmp6 = handleQueuedAction;
  } else {
    tmp6 = cResult[5];
  }
  let closure_4 = tmp6;
  if (cResult[6] !== onRestoreVersion) {
    class P {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(c7);
        if (onRestoreVersion != null) {
          onRestoreVersion();
        }
      }
    }
    cResult[6] = onRestoreVersion;
    cResult[7] = P;
  } else {
    class P {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(c7);
        if (onRestoreVersion != null) {
          onRestoreVersion();
        }
      }
    }
  }
  if (cResult[8] === tmp6) {
    class P {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(c7);
        if (onRestoreVersion != null) {
          onRestoreVersion();
        }
      }
    }
    if (cResult[11] === content) {
      class P {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(c7);
          if (onRestoreVersion != null) {
            onRestoreVersion();
          }
        }
      }
      if (cResult[14] === tmp5) {
        class P {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(c7);
            if (onRestoreVersion != null) {
              onRestoreVersion();
            }
          }
        }
        if (cResult[17] === tmp7) {
          class P {
            constructor() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(c7);
              if (onRestoreVersion != null) {
                onRestoreVersion();
              }
            }
          }
          if (cResult[20] === tmp8) {
            class P {
              constructor() {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet(c7);
                if (onRestoreVersion != null) {
                  onRestoreVersion();
                }
              }
            }
          }
          let obj2 = { children: closure_6(tmp(tmp2[10]).ActionSheetRow.Group, obj3) };
          const ActionSheet = tmp(tmp2[16]).ActionSheet;
          obj3 = { hasIcons: true, children: items };
          items = [tmp8, tmp13, tmp15, tmp17];
          cResult[20] = tmp8;
          cResult[21] = tmp13;
          cResult[22] = tmp15;
          cResult[23] = tmp17;
          cResult[24] = closure_4(ActionSheet, obj2);
          const tmp23 = closure_4(ActionSheet, obj2);
        }
        let tmp18 = null;
        if (null != onRestoreVersion) {
          class P {
            constructor() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(c7);
              if (onRestoreVersion != null) {
                onRestoreVersion();
              }
            }
          }
          const obj4 = { label: intl4.string(userId(tmp2[11]).H8Jfhu), icon: closure_4(Icon4, obj5), onPress: tmp7 };
          const ActionSheetRow4 = tmp(tmp2[10]).ActionSheetRow;
          intl4 = tmp(tmp2[8]).intl;
          obj5 = { IconComponent: tmp(tmp2[15]).UndoIcon };
          Icon4 = tmp(tmp2[10]).ActionSheetRow.Icon;
          tmp18 = closure_4(ActionSheetRow4, obj4);
        }
        cResult[17] = tmp7;
        cResult[18] = onRestoreVersion;
        cResult[19] = tmp18;
      }
      let tmp16 = null;
      if (null != userId) {
        class P {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(c7);
            if (onRestoreVersion != null) {
              onRestoreVersion();
            }
          }
        }
        const obj6 = { label: intl3.string(tmp(tmp2[8]).t.iXAna6), icon: closure_4(Icon3, obj7), onPress: tmp5 };
        const ActionSheetRow3 = tmp(tmp2[10]).ActionSheetRow;
        intl3 = tmp(tmp2[8]).intl;
        obj7 = { IconComponent: tmp(tmp2[14]).UserIcon };
        Icon3 = tmp(tmp2[10]).ActionSheetRow.Icon;
        tmp16 = closure_4(ActionSheetRow3, obj6);
      }
      cResult[14] = tmp5;
      cResult[15] = userId;
      cResult[16] = tmp16;
    }
    let tmp14 = null;
    if ("" !== content) {
      class P {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(c7);
          if (onRestoreVersion != null) {
            onRestoreVersion();
          }
        }
      }
      const obj8 = { label: intl5.string(tmp(tmp2[8]).t.JrGD7E), icon: closure_4(Icon5, obj9), onPress: tmp4 };
      const ActionSheetRow5 = tmp(tmp2[10]).ActionSheetRow;
      intl5 = tmp(tmp2[8]).intl;
      obj9 = { IconComponent: tmp(tmp2[9]).CopyIcon };
      Icon5 = tmp(tmp2[10]).ActionSheetRow.Icon;
      tmp14 = closure_4(ActionSheetRow5, obj8);
    }
    cResult[11] = content;
    cResult[12] = tmp4;
    cResult[13] = tmp14;
  }
  let tmp9 = null;
  if (null != onQueuedAction) {
    class P {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(c7);
        if (onRestoreVersion != null) {
          onRestoreVersion();
        }
      }
    }
    const obj10 = { children: items1 };
    const obj11 = {
      label: intl.string(userId(tmp2[11]).CXtLD2),
      icon: closure_4(Icon, obj12),
      onPress() {
          return closure_4("steer");
        }
    };
    const ActionSheetRow = tmp(tmp2[10]).ActionSheetRow;
    intl = tmp(tmp2[8]).intl;
    obj12 = { IconComponent: tmp(tmp2[12]).DoubleChevronSmallRightIcon };
    Icon = tmp(tmp2[10]).ActionSheetRow.Icon;
    items1 = [closure_4(ActionSheetRow, obj11), ];
    const obj13 = {
      label: intl2.string(userId(tmp2[11]).urZwpN),
      icon: closure_4(Icon2, obj14),
      onPress() {
          return closure_4("cancel");
        }
    };
    const ActionSheetRow2 = tmp(tmp2[10]).ActionSheetRow;
    intl2 = tmp(tmp2[8]).intl;
    obj14 = { IconComponent: tmp(tmp2[13]).XSmallIcon };
    Icon2 = tmp(tmp2[10]).ActionSheetRow.Icon;
    items1[1] = closure_4(ActionSheetRow2, obj13);
    tmp9 = closure_6(closure_5, obj10);
  }
  cResult[8] = tmp6;
  cResult[9] = onQueuedAction;
  cResult[10] = tmp9;
}) : (function ConjureMessageActionSheet(content) {
  let Icon;
  let Icon2;
  let Icon3;
  let Icon4;
  let Icon5;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items3;
  let obj11;
  let obj3;
  let obj5;
  let obj7;
  let obj9;
  content = content.content;
  const userId = content.userId;
  const onQueuedAction = content.onQueuedAction;
  const onRestoreVersion = content.onRestoreVersion;
  const items = [content];
  const items1 = [userId];
  const callback = onRestoreVersion.useCallback(() => {
    let intl;
    const obj = ClipboardUtils;
    obj.copy(content);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet(c7);
    const obj3 = { key: "VIBEGRATIONS_MESSAGE_COPIED", content: intl.string(intl6.t.mGZ66D), IconComponent: CopyIcon.CopyIcon };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl6.intl;
    open(obj3);
  }, items);
  const items2 = [onRestoreVersion];
  const callback1 = onRestoreVersion.useCallback(() => {
    if (null != userId) {
      const obj = { userId: tmp };
      showUserProfileActionSheetDefault(obj);
    }
  }, items1);
  const callback2 = onRestoreVersion.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(c7);
    if (onRestoreVersion != null) {
      onRestoreVersion();
    }
  }, items2);
  const ActionSheet = content(onQueuedAction[16]).ActionSheet;
  let tmp7Result = null;
  const Group = content(onQueuedAction[10]).ActionSheetRow.Group;
  if (null != onQueuedAction) {
    let obj = { children: items3 };
    let obj2 = {
      label: intl.string(userId(onQueuedAction[11]).CXtLD2),
      icon: tmp4(Icon, obj3),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(c7);
          if (onQueuedAction != null) {
            tmp2("steer");
          }
        }
    };
    const ActionSheetRow = tmp5(tmp6[10]).ActionSheetRow;
    intl = tmp5(tmp6[8]).intl;
    obj3 = { IconComponent: content(onQueuedAction[12]).DoubleChevronSmallRightIcon };
    Icon = tmp5(tmp6[10]).ActionSheetRow.Icon;
    items3 = [tmp4(ActionSheetRow, obj2), ];
    const obj4 = {
      label: intl2.string(userId(onQueuedAction[11]).urZwpN),
      icon: closure_4(Icon2, obj5),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(c7);
          if (onQueuedAction != null) {
            tmp2("cancel");
          }
        }
    };
    const ActionSheetRow2 = tmp5(tmp6[10]).ActionSheetRow;
    intl2 = tmp5(tmp6[8]).intl;
    obj5 = { IconComponent: content(onQueuedAction[13]).XSmallIcon };
    Icon2 = tmp5(tmp6[10]).ActionSheetRow.Icon;
    items3[1] = closure_4(ActionSheetRow2, obj4);
    tmp7Result = tmp7(closure_5, obj);
  }
  const items4 = [tmp7Result, , , ];
  let tmp4Result = null;
  if ("" !== content) {
    const obj6 = { label: intl5.string(content(onQueuedAction[8]).t.JrGD7E), icon: closure_4(Icon5, obj7), onPress: callback };
    const ActionSheetRow5 = tmp5(tmp6[10]).ActionSheetRow;
    intl5 = tmp5(tmp6[8]).intl;
    obj7 = { IconComponent: content(onQueuedAction[9]).CopyIcon };
    Icon5 = tmp5(tmp6[10]).ActionSheetRow.Icon;
    tmp4Result = tmp4(ActionSheetRow5, obj6);
  }
  items4[1] = tmp4Result;
  let tmp4Result3 = null;
  if (null != userId) {
    const obj8 = { label: intl3.string(content(onQueuedAction[8]).t.iXAna6), icon: closure_4(Icon3, obj9), onPress: callback1 };
    const ActionSheetRow3 = tmp5(tmp6[10]).ActionSheetRow;
    intl3 = tmp5(tmp6[8]).intl;
    obj9 = { IconComponent: content(onQueuedAction[14]).UserIcon };
    Icon3 = tmp5(tmp6[10]).ActionSheetRow.Icon;
    tmp4Result3 = tmp4(ActionSheetRow3, obj8);
  }
  items4[2] = tmp4Result3;
  let tmp4Result4 = null;
  if (null != onRestoreVersion) {
    const obj10 = { label: intl4.string(userId(onQueuedAction[11]).H8Jfhu), icon: closure_4(Icon4, obj11), onPress: callback2 };
    const ActionSheetRow4 = tmp5(tmp6[10]).ActionSheetRow;
    intl4 = tmp5(tmp6[8]).intl;
    obj11 = { IconComponent: content(onQueuedAction[15]).UndoIcon };
    Icon4 = tmp5(tmp6[10]).ActionSheetRow.Icon;
    tmp4Result4 = tmp4(ActionSheetRow4, obj10);
  }
  items4[3] = tmp4Result4;
  const obj12 = { children: closure_6(Group, { hasIcons: true, children: items4 }) };
  return closure_4(ActionSheet, obj12);
});
function openMessageAuthorProfile(id) {
  const obj = { userId: id };
  showUserProfileActionSheetDefault(obj);
}
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureMessageActionSheet.tsx");

export const CONJURE_MESSAGE_SHEET_KEY = "conjure-message-actions";
export { openMessageAuthorProfile };
export const showConjureMessageActions = function showConjureMessageActions(arg0) {
  let obj2;
  const obj = { content: React3(closure_8, obj2), key };
  const showActionSheet = ActionSheetActionCreators.showActionSheet;
  obj2 = {};
  ActionSheetActionCreators;
  const merged = Object.assign(arg0);
  showActionSheet(obj);
};
