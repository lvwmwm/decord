// Module ID: 16343
// Function ID: 16344
// Name: VibegrationsMessageActionSheet
// Dependencies: [19, 21, 7628, 4801, 558, 576, 6611, 4531, 1127, 4780, 6620, 11177, 6624, 2]
// Exports: openMessageAuthorProfile, showVibegrationsMessageActions

// Module 16343 (VibegrationsMessageActionSheet)
import intl3 from "intl" /* 1127 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4531 */;
import CopyIcon from "CopyIcon" /* 4780 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4801 */;
import ClipboardUtils from "ClipboardUtils" /* 6611 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7628 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
let content;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let c6 = "vibegrations-message-actions";
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((content) => {
  let Icon;
  let Icon2;
  let intl;
  let intl2;
  let items;
  let obj3;
  let obj5;
  let obj7;
  let tmp10;
  let tmp4;
  const tmp = content;
  let obj = content(576);
  const cResult = obj.c(13);
  content = content.content;
  const userId = content.userId;
  if (cResult[0] !== content) {
    const fn = function o() {
      let intl;
      const obj = ClipboardUtils;
      obj.copy(content);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet(c6);
      const obj3 = { key: "VIBEGRATIONS_MESSAGE_COPIED", content: intl.string(intl3.t.mGZ66D), IconComponent: CopyIcon.CopyIcon };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl3.intl;
      open(obj3);
    };
    cResult[0] = content;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== userId) {
    class A {
      constructor() {
        if (null != userId) {
          const obj = { userId: tmp };
          showUserProfileActionSheetDefault(obj);
        }
      }
    }
    cResult[2] = userId;
    cResult[3] = A;
  } else {
    class A {
      constructor() {
        if (null != userId) {
          const obj = { userId: tmp };
          showUserProfileActionSheetDefault(obj);
        }
      }
    }
  }
  if (cResult[4] === content) {
    class A {
      constructor() {
        if (null != userId) {
          const obj = { userId: tmp };
          showUserProfileActionSheetDefault(obj);
        }
      }
    }
    if (cResult[7] === tmp5) {
      class A {
        constructor() {
          if (null != userId) {
            const obj = { userId: tmp };
            showUserProfileActionSheetDefault(obj);
          }
        }
      }
      if (cResult[10] === tmp6) {
        class A {
          constructor() {
            if (null != userId) {
              const obj = { userId: tmp };
              showUserProfileActionSheetDefault(obj);
            }
          }
        }
        return tmp10;
      }
      let obj2 = { children: closure_5(tmp(6620).ActionSheetRow.Group, obj3) };
      const ActionSheet = tmp(6624).ActionSheet;
      obj3 = { hasIcons: true, children: items };
      items = [tmp6, tmp8];
      const tmp13 = closure_4(ActionSheet, obj2);
      cResult[10] = tmp6;
      cResult[11] = tmp8;
      cResult[12] = tmp13;
      tmp10 = tmp13;
    }
    let tmp9 = null;
    if (null != userId) {
      class A {
        constructor() {
          if (null != userId) {
            const obj = { userId: tmp };
            showUserProfileActionSheetDefault(obj);
          }
        }
      }
      const obj4 = { label: intl.string(tmp(1127).t.iXAna6), icon: closure_4(Icon, obj5), onPress: tmp5 };
      const ActionSheetRow = tmp(6620).ActionSheetRow;
      intl = tmp(1127).intl;
      obj5 = { IconComponent: tmp(11177).UserIcon };
      Icon = tmp(6620).ActionSheetRow.Icon;
      tmp9 = closure_4(ActionSheetRow, obj4);
    }
    cResult[7] = tmp5;
    cResult[8] = userId;
    cResult[9] = tmp9;
  }
  let tmp7 = null;
  if ("" !== content) {
    class A {
      constructor() {
        if (null != userId) {
          const obj = { userId: tmp };
          showUserProfileActionSheetDefault(obj);
        }
      }
    }
    const obj6 = { label: intl2.string(tmp(1127).t.JrGD7E), icon: closure_4(Icon2, obj7), onPress: tmp4 };
    const ActionSheetRow2 = tmp(6620).ActionSheetRow;
    intl2 = tmp(1127).intl;
    obj7 = { IconComponent: tmp(4780).CopyIcon };
    Icon2 = tmp(6620).ActionSheetRow.Icon;
    tmp7 = closure_4(ActionSheetRow2, obj6);
  }
  cResult[4] = content;
  cResult[5] = tmp4;
  cResult[6] = tmp7;
}) : ((content) => {
  let Icon;
  let Icon2;
  let intl;
  let intl2;
  let obj3;
  let obj4;
  content = content.content;
  const userId = content.userId;
  const items = [content];
  const items1 = [userId];
  const callback = react.useCallback(() => {
    let intl;
    const obj = ClipboardUtils;
    obj.copy(content);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet(c6);
    const obj3 = { key: "VIBEGRATIONS_MESSAGE_COPIED", content: intl.string(intl3.t.mGZ66D), IconComponent: CopyIcon.CopyIcon };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl3.intl;
    open(obj3);
  }, items);
  const tmp3 = closure_4;
  const callback1 = react.useCallback(() => {
    if (null != userId) {
      const obj = { userId: tmp };
      showUserProfileActionSheetDefault(obj);
    }
  }, items1);
  const ActionSheet = content(6624).ActionSheet;
  let tmp3Result = null;
  const Group = content(6620).ActionSheetRow.Group;
  const tmp6 = closure_5;
  if ("" !== content) {
    let obj2 = { label: intl2.string(tmp4(1127).t.JrGD7E), icon: tmp3(Icon2, obj3), onPress: callback };
    const ActionSheetRow2 = tmp4(6620).ActionSheetRow;
    intl2 = tmp4(1127).intl;
    obj3 = { IconComponent: tmp4(4780).CopyIcon };
    Icon2 = tmp4(6620).ActionSheetRow.Icon;
    tmp3Result = tmp3(ActionSheetRow2, obj2);
  }
  const items2 = [tmp3Result, ];
  let tmp3Result2 = null;
  if (null != userId) {
    let obj = { label: intl.string(tmp4(1127).t.iXAna6), icon: tmp3(Icon, obj4), onPress: callback1 };
    const ActionSheetRow = tmp4(6620).ActionSheetRow;
    intl = tmp4(1127).intl;
    obj4 = { IconComponent: content(11177).UserIcon };
    Icon = tmp4(6620).ActionSheetRow.Icon;
    tmp3Result2 = tmp3(ActionSheetRow, obj);
  }
  items2[1] = tmp3Result2;
  const obj5 = { children: tmp6(Group, { hasIcons: true, children: items2 }) };
  return tmp3(ActionSheet, obj5);
});
function openMessageAuthorProfile(id) {
  const obj = { userId: id };
  showUserProfileActionSheetDefault(obj);
}
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsMessageActionSheet.tsx");

export const VIBEGRATIONS_MESSAGE_SHEET_KEY = "vibegrations-message-actions";
export { openMessageAuthorProfile };
export const showVibegrationsMessageActions = function showVibegrationsMessageActions(arg0) {
  let obj2;
  const obj = { content: React3(closure_7, obj2), key };
  const showActionSheet = ActionSheetActionCreators.showActionSheet;
  obj2 = {};
  ActionSheetActionCreators;
  const merged = Object.assign(arg0);
  showActionSheet(obj);
};
