// Module ID: 16341
// Function ID: 16342
// Name: VibegrationsMessageActionSheet
// Dependencies: [19, 21, 7624, 4800, 6610, 4528, 1115, 4779, 6618, 6620, 11303, 2]
// Exports: openMessageAuthorProfile, showVibegrationsMessageActions

// Module 16341 (VibegrationsMessageActionSheet)
import intl3 from "intl" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import CopyIcon from "CopyIcon" /* 4779 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4800 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

let closure_4;
let hasOwnProperty;
function VibegrationsMessageActionSheet(content) {
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
  const ActionSheet = content(6618).ActionSheet;
  let tmp3Result = null;
  const Group = content(6620).ActionSheetRow.Group;
  const tmp6 = closure_5;
  if ("" !== content) {
    let obj2 = { label: intl2.string(tmp4(1115).t.JrGD7E), icon: tmp3(Icon2, obj3), onPress: callback };
    const ActionSheetRow2 = tmp4(6620).ActionSheetRow;
    intl2 = tmp4(1115).intl;
    obj3 = { IconComponent: tmp4(4779).CopyIcon };
    Icon2 = tmp4(6620).ActionSheetRow.Icon;
    tmp3Result = tmp3(ActionSheetRow2, obj2);
  }
  const items2 = [tmp3Result, ];
  let tmp3Result2 = null;
  if (null != userId) {
    let obj = { label: intl.string(tmp4(1115).t.iXAna6), icon: tmp3(Icon, obj4), onPress: callback1 };
    const ActionSheetRow = tmp4(6620).ActionSheetRow;
    intl = tmp4(1115).intl;
    obj4 = { IconComponent: content(11303).UserIcon };
    Icon = tmp4(6620).ActionSheetRow.Icon;
    tmp3Result2 = tmp3(ActionSheetRow, obj);
  }
  items2[1] = tmp3Result2;
  const obj5 = { children: tmp6(Group, { hasIcons: true, children: items2 }) };
  return tmp3(ActionSheet, obj5);
}
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let c6 = "vibegrations-message-actions";
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsMessageActionSheet.tsx");

export const VIBEGRATIONS_MESSAGE_SHEET_KEY = "vibegrations-message-actions";
export const openMessageAuthorProfile = function openMessageAuthorProfile(id) {
  const obj = { userId: id };
  showUserProfileActionSheetDefault(obj);
};
export const showVibegrationsMessageActions = function showVibegrationsMessageActions(arg0) {
  let obj2;
  const obj = { content: React3(VibegrationsMessageActionSheet, obj2), key };
  const showActionSheet = ActionSheetActionCreators.showActionSheet;
  obj2 = {};
  ActionSheetActionCreators;
  const merged = Object.assign(arg0);
  showActionSheet(obj);
};
