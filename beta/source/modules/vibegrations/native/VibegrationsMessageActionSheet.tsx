// Module ID: 17029
// Function ID: 17030
// Name: VibegrationsMessageActionSheet
// Dependencies: [19, 21, 8453, 4725, 558, 568, 7436, 4458, 1119, 4704, 7445, 11954, 7449, 2]
// Exports: openMessageAuthorProfile, showVibegrationsMessageActions

// Module 17029 (VibegrationsMessageActionSheet)
import util from "util" /* 1119 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4458 */;
import CopyIcon from "CopyIcon" /* 4704 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4725 */;
import ClipboardUtils from "ClipboardUtils" /* 7436 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8453 */;
import noop from "module_19" /* 19 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let c6 = "vibegrations-message-actions";
const ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((content) => {
  const cResult = content(568).c(13);
  content = content.content;
  const userId = content.userId;
  if (cResult[0] !== content) {
    const fn = function o() {
      ClipboardUtils.copy(content);
      ActionSheetActionCreatorsDefault.hideActionSheet(c6);
      const obj4 = { key: "VIBEGRATIONS_MESSAGE_COPIED", content: null, IconComponent: null };
      const intl = util.intl;
      obj4.content = intl.string(util.t.mGZ66D);
      obj4.IconComponent = CopyIcon.CopyIcon;
      ToastActionCreatorsDefault.open(obj4);
    };
    cResult[0] = content;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== userId) {
    class A {
      constructor() {
        if (null != userId) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = { userId: null };
          obj.userId = tmp;
          tmp4 = closure_1(closure_2[2])(obj);
        }
        return;
      }
    }
    cResult[2] = userId;
    cResult[3] = A;
  } else {
    class A {
      constructor() {
        if (null != userId) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = { userId: null };
          obj.userId = tmp;
          tmp4 = closure_1(closure_2[2])(obj);
        }
        return;
      }
    }
  }
  if (cResult[4] === content) {
    class A {
      constructor() {
        if (null != userId) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = { userId: null };
          obj.userId = tmp;
          tmp4 = closure_1(closure_2[2])(obj);
        }
        return;
      }
    }
    if (cResult[7] === tmp5) {
      class A {
        constructor() {
          if (null != userId) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = { userId: null };
            obj.userId = tmp;
            tmp4 = closure_1(closure_2[2])(obj);
          }
          return;
        }
      }
      if (cResult[10] === tmp6) {
        class A {
          constructor() {
            if (null != userId) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = { userId: null };
              obj.userId = tmp;
              tmp4 = closure_1(closure_2[2])(obj);
            }
            return;
          }
        }
        return tmp10;
      }
      let obj2 = { children: null };
      const obj3 = { hasIcons: true, children: null };
      const items = [tmp6, tmp8];
      obj3.children = items;
      obj2.children = closure_5(tmp(7445).ActionSheetRow.Group, obj3);
      const tmp13 = closure_4(tmp(7449).ActionSheet, obj2);
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
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = { userId: null };
            obj.userId = tmp;
            tmp4 = closure_1(closure_2[2])(obj);
          }
          return;
        }
      }
      let obj4 = { label: null, icon: null, onPress: null };
      let intl = tmp(1119).intl;
      obj4.label = intl.string(tmp(1119).t.iXAna6);
      const obj5 = { IconComponent: tmp(11954).UserIcon };
      obj4.icon = closure_4(tmp(7445).ActionSheetRow.Icon, obj5);
      obj4.onPress = tmp5;
      tmp9 = closure_4(tmp(7445).ActionSheetRow, obj4);
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
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = { userId: null };
          obj.userId = tmp;
          tmp4 = closure_1(closure_2[2])(obj);
        }
        return;
      }
    }
    const obj6 = { label: null, icon: null, onPress: null };
    const intl2 = tmp(1119).intl;
    obj6.label = intl2.string(tmp(1119).t.JrGD7E);
    const obj7 = { IconComponent: tmp(4704).CopyIcon };
    obj6.icon = closure_4(tmp(7445).ActionSheetRow.Icon, obj7);
    obj6.onPress = tmp4;
    tmp7 = closure_4(tmp(7445).ActionSheetRow, obj6);
  }
  cResult[4] = content;
  cResult[5] = tmp4;
  cResult[6] = tmp7;
}) : ((content) => {
  content = content.content;
  const userId = content.userId;
  const items = [content];
  const items1 = [userId];
  const callback = noop.useCallback(() => {
    ClipboardUtils.copy(content);
    ActionSheetActionCreatorsDefault.hideActionSheet(c6);
    const obj4 = { key: "VIBEGRATIONS_MESSAGE_COPIED", content: null, IconComponent: null };
    const intl = util.intl;
    obj4.content = intl.string(util.t.mGZ66D);
    obj4.IconComponent = CopyIcon.CopyIcon;
    ToastActionCreatorsDefault.open(obj4);
  }, items);
  const callback1 = noop.useCallback(() => {
    if (null != userId) {
      const obj = { userId: tmp };
      showUserProfileActionSheetDefault(obj);
    }
  }, items1);
  let tmp3Result = null;
  if ("" !== content) {
    let obj2 = { label: null, icon: null, onPress: null };
    const intl2 = tmp4(1119).intl;
    obj2.label = intl2.string(tmp4(1119).t.JrGD7E);
    const obj3 = { IconComponent: tmp4(4704).CopyIcon };
    obj2.icon = tmp3(tmp4(7445).ActionSheetRow.Icon, obj3);
    obj2.onPress = callback;
    tmp3Result = tmp3(tmp4(7445).ActionSheetRow, obj2);
  }
  const items2 = [tmp3Result, ];
  let tmp3Result2 = null;
  if (null != userId) {
    let obj = { label: null, icon: null, onPress: null };
    let intl = tmp4(1119).intl;
    obj.label = intl.string(tmp4(1119).t.iXAna6);
    let obj4 = { IconComponent: tmp4(11954).UserIcon };
    obj.icon = tmp3(tmp4(7445).ActionSheetRow.Icon, obj4);
    obj.onPress = callback1;
    tmp3Result2 = tmp3(tmp4(7445).ActionSheetRow, obj);
  }
  items2[1] = tmp3Result2;
  return closure_4(content(7449).ActionSheet, { children: closure_5(content(7445).ActionSheetRow.Group, { hasIcons: true, children: items2 }) });
});
function openMessageAuthorProfile(id) {
  showUserProfileActionSheetDefault({ userId: id });
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsMessageActionSheet.tsx");

export const VIBEGRATIONS_MESSAGE_SHEET_KEY = "vibegrations-message-actions";
export { openMessageAuthorProfile };
export const showVibegrationsMessageActions = function showVibegrationsMessageActions(arg0) {
  const obj2 = { content: null, key: null };
  const merged = Object.assign(arg0);
  obj2.content = React4(closure_7, {});
  obj2.key = key;
  ActionSheetActionCreators.showActionSheet(obj2);
};
