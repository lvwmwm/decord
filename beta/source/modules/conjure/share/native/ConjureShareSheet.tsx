// Module ID: 18356
// Function ID: 18357
// Name: ConjureShareSheet
// Dependencies: [19, 17, 21, 4913, 575, 5127, 18273, 7553, 13790, 7515, 1112, 4190, 18357, 5511, 2]
// Exports: default

// Module 18356 (ConjureShareSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import ActionSheet2 from "ActionSheet" /* 7553 */;
import useConjureSharingModeDefault from "useConjureSharingMode" /* 18273 */;
import ConjureShareAccessDefault from "ConjureShareAccess" /* 18357 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
function hideShareSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(ConjureShareSheet_str);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const ConjureShareSheet_str = "ConjureShareSheet";
let createStyles = createStyles_mod;
let obj = { header: obj2, body: obj3 };
obj2 = { alignItems: "center", gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/share/native/ConjureShareSheet.tsx");

export default function ConjureShareSheet(projectId) {
  let intl2;
  let intl3;
  let items;
  let items1;
  let tmp7Result;
  projectId = projectId.projectId;
  const tmp = closure_7();
  const tmp4 = useConjureSharingModeDefault(projectId);
  const project = tmp4.project;
  let tmp5Result = null;
  const obj = { style: tmp.header, children: items };
  const ActionSheet = ActionSheet2.ActionSheet;
  if (null != project) {
    const obj2 = { project, size: "dialog" };
    tmp5Result = tmp5(tmp2(13790), obj2);
  }
  items = [tmp5Result, ];
  const BottomSheetTitleHeader = tmp6(7515).BottomSheetTitleHeader;
  const intl = tmp6(1112).intl;
  const formatToPlainString = intl.formatToPlainString;
  let str;
  const pgxjO4 = tmp2(4190).pgxjO4;
  if (project != null) {
    str = project.name;
  }
  if (str == null) {
    str = "";
  }
  const obj3 = { header: hasOwnProperty(View, obj), children: tmp7Result };
  const obj4 = { title: formatToPlainString(pgxjO4, { app: str }), subtitle: intl2.string(_modDef4190.mbybxl) };
  intl2 = tmp6(1112).intl;
  items[1] = React3(BottomSheetTitleHeader, obj4);
  tmp7Result = null;
  if (null != project) {
    const obj5 = { style: tmp.body, children: items1 };
    const obj6 = { project, sharing: tmp4 };
    items1 = [React3(ConjureShareAccessDefault, obj6), ];
    const obj7 = { variant: "primary", text: intl3.string(intl4.t.i4jeWR), onPress: hideShareSheet };
    const Button = tmp6(5511).Button;
    intl3 = tmp6(1112).intl;
    items1[1] = React3(Button, obj7);
    tmp7Result = tmp7(tmp8, obj5);
  }
  return React3(ActionSheet, obj3);
};
export const CONJURE_SHARE_SHEET_KEY = "ConjureShareSheet";
