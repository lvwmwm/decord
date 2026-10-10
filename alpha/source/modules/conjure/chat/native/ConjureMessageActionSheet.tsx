// Module ID: 17137
// Function ID: 17138
// Name: ConjureMessageActionSheet
// Dependencies: [19, 21, 8303, 5056, 558, 576, 6885, 4809, 1126, 5042, 6894, 3849, 17138, 6207, 11380, 15361, 16093, 6898, 2]
// Exports: openMessageAuthorProfile, showConjureMessageActions

// Module 17137 (ConjureMessageActionSheet)
import intl6 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import CopyIcon from "CopyIcon" /* 5042 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5056 */;
import ClipboardUtils from "ClipboardUtils" /* 6885 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8303 */;
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
  let Icon6;
  let closure_5;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items1;
  let obj11;
  let obj14;
  let obj16;
  let obj3;
  let obj5;
  let obj7;
  let obj9;
  let onQueuedAction;
  let tmp4;
  let tmp7;
  const tmp = content;
  const tmp2 = onQueuedAction;
  let obj = content(onQueuedAction[5]);
  const cResult = obj.c(31);
  content = content.content;
  const userId = content.userId;
  onQueuedAction = content.onQueuedAction;
  const onRestoreVersion = content.onRestoreVersion;
  const onViewTrace = content.onViewTrace;
  if (cResult[0] !== content) {
    const fn = function o() {
      let intl;
      const obj = ClipboardUtils;
      obj.copy(content);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet(c7);
      const obj3 = { text: intl.string(intl6.t.mGZ66D), icon: CopyIcon.CopyIcon };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl6.intl;
      open("VIBEGRATIONS_MESSAGE_COPIED", obj3);
    };
    cResult[0] = content;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== userId) {
    class R {
      constructor() {
        if (null != userId) {
          const obj = { userId: tmp };
          showUserProfileActionSheetDefault(obj);
        }
      }
    }
    cResult[2] = userId;
    cResult[3] = R;
  } else {
    class R {
      constructor() {
        if (null != userId) {
          const obj = { userId: tmp };
          showUserProfileActionSheetDefault(obj);
        }
      }
    }
  }
  if (cResult[4] !== onQueuedAction) {
    class R {
      constructor() {
        if (null != userId) {
          const obj = { userId: tmp };
          showUserProfileActionSheetDefault(obj);
        }
      }
    }
    cResult[4] = onQueuedAction;
    cResult[5] = tmp7;
  } else {
    class R {
      constructor() {
        if (null != userId) {
          const obj = { userId: tmp };
          showUserProfileActionSheetDefault(obj);
        }
      }
    }
  }
  tmp7 = tmp6;
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
  if (cResult[8] !== onViewTrace) {
    class P {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(c7);
        if (onRestoreVersion != null) {
          onRestoreVersion();
        }
      }
    }
    cResult[8] = onViewTrace;
    cResult[9] = tmp10;
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
  if (cResult[10] === tmp6) {
    class P {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(c7);
        if (onRestoreVersion != null) {
          onRestoreVersion();
        }
      }
    }
    if (cResult[13] === content) {
      class P {
        constructor() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(c7);
          if (onRestoreVersion != null) {
            onRestoreVersion();
          }
        }
      }
      if (cResult[16] === tmp5) {
        class P {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(c7);
            if (onRestoreVersion != null) {
              onRestoreVersion();
            }
          }
        }
        if (cResult[19] === tmp8) {
          class P {
            constructor() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(c7);
              if (onRestoreVersion != null) {
                onRestoreVersion();
              }
            }
          }
          if (cResult[22] === tmp9) {
            class P {
              constructor() {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet(c7);
                if (onRestoreVersion != null) {
                  onRestoreVersion();
                }
              }
            }
            if (cResult[25] === tmp23) {
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
            const ActionSheet = tmp(tmp2[17]).ActionSheet;
            obj3 = { hasIcons: true, children: items };
            items = [tmp11, tmp16, tmp18, tmp20, tmp23];
            cResult[25] = tmp23;
            cResult[26] = tmp11;
            cResult[27] = tmp16;
            cResult[28] = tmp18;
            cResult[29] = tmp20;
            cResult[30] = onViewTrace(ActionSheet, obj2);
            const tmp28 = onViewTrace(ActionSheet, obj2);
          }
          let tmp24 = null;
          if (null != onViewTrace) {
            class P {
              constructor() {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet(c7);
                if (onRestoreVersion != null) {
                  onRestoreVersion();
                }
              }
            }
            const obj4 = { label: "View Trace", icon: onViewTrace(Icon5, obj5), onPress: tmp9 };
            const ActionSheetRow5 = tmp(tmp2[10]).ActionSheetRow;
            obj5 = { IconComponent: tmp(tmp2[16]).BugIcon };
            Icon5 = tmp(tmp2[10]).ActionSheetRow.Icon;
            tmp24 = onViewTrace(ActionSheetRow5, obj4);
          }
          cResult[22] = tmp9;
          cResult[23] = onViewTrace;
          cResult[24] = tmp24;
        }
        let tmp21 = null;
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
          const obj6 = { label: intl4.string(userId(tmp2[11]).H8Jfhu), icon: onViewTrace(Icon4, obj7), onPress: tmp8 };
          const ActionSheetRow4 = tmp(tmp2[10]).ActionSheetRow;
          intl4 = tmp(tmp2[8]).intl;
          obj7 = { IconComponent: tmp(tmp2[15]).UndoIcon };
          Icon4 = tmp(tmp2[10]).ActionSheetRow.Icon;
          tmp21 = onViewTrace(ActionSheetRow4, obj6);
        }
        cResult[19] = tmp8;
        cResult[20] = onRestoreVersion;
        cResult[21] = tmp21;
      }
      let tmp19 = null;
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
        const obj8 = { label: intl3.string(tmp(tmp2[8]).t.iXAna6), icon: onViewTrace(Icon3, obj9), onPress: tmp5 };
        const ActionSheetRow3 = tmp(tmp2[10]).ActionSheetRow;
        intl3 = tmp(tmp2[8]).intl;
        obj9 = { IconComponent: tmp(tmp2[14]).UserIcon };
        Icon3 = tmp(tmp2[10]).ActionSheetRow.Icon;
        tmp19 = onViewTrace(ActionSheetRow3, obj8);
      }
      cResult[16] = tmp5;
      cResult[17] = userId;
      cResult[18] = tmp19;
    }
    let tmp17 = null;
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
      const obj10 = { label: intl5.string(tmp(tmp2[8]).t.JrGD7E), icon: onViewTrace(Icon6, obj11), onPress: tmp4 };
      const ActionSheetRow6 = tmp(tmp2[10]).ActionSheetRow;
      intl5 = tmp(tmp2[8]).intl;
      obj11 = { IconComponent: tmp(tmp2[9]).CopyIcon };
      Icon6 = tmp(tmp2[10]).ActionSheetRow.Icon;
      tmp17 = onViewTrace(ActionSheetRow6, obj10);
    }
    cResult[13] = content;
    cResult[14] = tmp4;
    cResult[15] = tmp17;
  }
  let tmp12 = null;
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
    const obj12 = { children: items1 };
    const obj13 = {
      label: intl.string(userId(tmp2[11]).CXtLD2),
      icon: onViewTrace(Icon, obj14),
      onPress() {
          return tmp7("steer");
        }
    };
    const ActionSheetRow = tmp(tmp2[10]).ActionSheetRow;
    intl = tmp(tmp2[8]).intl;
    obj14 = { IconComponent: tmp(tmp2[12]).DoubleChevronSmallRightIcon };
    Icon = tmp(tmp2[10]).ActionSheetRow.Icon;
    items1 = [onViewTrace(ActionSheetRow, obj13), ];
    const obj15 = {
      label: intl2.string(userId(tmp2[11]).urZwpN),
      icon: onViewTrace(Icon2, obj16),
      onPress() {
          return tmp7("cancel");
        }
    };
    const ActionSheetRow2 = tmp(tmp2[10]).ActionSheetRow;
    intl2 = tmp(tmp2[8]).intl;
    obj16 = { IconComponent: tmp(tmp2[13]).XSmallIcon };
    Icon2 = tmp(tmp2[10]).ActionSheetRow.Icon;
    items1[1] = onViewTrace(ActionSheetRow2, obj15);
    tmp12 = closure_6(tmp7, obj12);
  }
  cResult[10] = tmp6;
  cResult[11] = onQueuedAction;
  cResult[12] = tmp12;
}) : (function ConjureMessageActionSheet(content) {
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
    open("VIBEGRATIONS_MESSAGE_COPIED", obj3);
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
  const ActionSheet = content(onQueuedAction[17]).ActionSheet;
  let tmp8Result = null;
  const Group = content(onQueuedAction[10]).ActionSheetRow.Group;
  if (null != onQueuedAction) {
    let obj = { children: items4 };
    let obj2 = {
      label: intl.string(userId(onQueuedAction[11]).CXtLD2),
      icon: onViewTrace(Icon, obj3),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(c7);
          if (onQueuedAction != null) {
            tmp2("steer");
          }
        }
    };
    const ActionSheetRow = tmp6(tmp7[10]).ActionSheetRow;
    intl = tmp6(tmp7[8]).intl;
    obj3 = { IconComponent: content(onQueuedAction[12]).DoubleChevronSmallRightIcon };
    Icon = tmp6(tmp7[10]).ActionSheetRow.Icon;
    items4 = [onViewTrace(ActionSheetRow, obj2), ];
    const obj4 = {
      label: intl2.string(userId(onQueuedAction[11]).urZwpN),
      icon: onViewTrace(Icon2, obj5),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(c7);
          if (onQueuedAction != null) {
            tmp2("cancel");
          }
        }
    };
    const ActionSheetRow2 = tmp6(tmp7[10]).ActionSheetRow;
    intl2 = tmp6(tmp7[8]).intl;
    obj5 = { IconComponent: content(onQueuedAction[13]).XSmallIcon };
    Icon2 = tmp6(tmp7[10]).ActionSheetRow.Icon;
    items4[1] = onViewTrace(ActionSheetRow2, obj4);
    tmp8Result = tmp8(closure_5, obj);
  }
  const items5 = [tmp8Result, , , , ];
  let tmp5Result = null;
  if ("" !== content) {
    const obj6 = { label: intl5.string(content(onQueuedAction[8]).t.JrGD7E), icon: onViewTrace(Icon6, obj7), onPress: callback };
    const ActionSheetRow6 = tmp6(tmp7[10]).ActionSheetRow;
    intl5 = tmp6(tmp7[8]).intl;
    obj7 = { IconComponent: content(onQueuedAction[9]).CopyIcon };
    Icon6 = tmp6(tmp7[10]).ActionSheetRow.Icon;
    tmp5Result = tmp5(ActionSheetRow6, obj6);
  }
  items5[1] = tmp5Result;
  let tmp5Result4 = null;
  if (null != userId) {
    const obj8 = { label: intl3.string(content(onQueuedAction[8]).t.iXAna6), icon: onViewTrace(Icon3, obj9), onPress: callback1 };
    const ActionSheetRow3 = tmp6(tmp7[10]).ActionSheetRow;
    intl3 = tmp6(tmp7[8]).intl;
    obj9 = { IconComponent: content(onQueuedAction[14]).UserIcon };
    Icon3 = tmp6(tmp7[10]).ActionSheetRow.Icon;
    tmp5Result4 = tmp5(ActionSheetRow3, obj8);
  }
  items5[2] = tmp5Result4;
  let tmp5Result5 = null;
  if (null != onRestoreVersion) {
    const obj10 = { label: intl4.string(userId(onQueuedAction[11]).H8Jfhu), icon: onViewTrace(Icon4, obj11), onPress: callback2 };
    const ActionSheetRow4 = tmp6(tmp7[10]).ActionSheetRow;
    intl4 = tmp6(tmp7[8]).intl;
    obj11 = { IconComponent: content(onQueuedAction[15]).UndoIcon };
    Icon4 = tmp6(tmp7[10]).ActionSheetRow.Icon;
    tmp5Result5 = tmp5(ActionSheetRow4, obj10);
  }
  items5[3] = tmp5Result5;
  let tmp5Result6 = null;
  if (null != onViewTrace) {
    const obj12 = { label: "View Trace", icon: onViewTrace(Icon5, obj13), onPress: callback3 };
    const ActionSheetRow5 = tmp6(tmp7[10]).ActionSheetRow;
    obj13 = { IconComponent: content(onQueuedAction[16]).BugIcon };
    Icon5 = tmp6(tmp7[10]).ActionSheetRow.Icon;
    tmp5Result6 = tmp5(ActionSheetRow5, obj12);
  }
  items5[4] = tmp5Result6;
  const obj14 = { children: closure_6(Group, { hasIcons: true, children: items5 }) };
  return onViewTrace(ActionSheet, obj14);
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
