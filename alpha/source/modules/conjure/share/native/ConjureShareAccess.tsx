// Module ID: 18346
// Function ID: 18347
// Name: ConjureShareAccess
// Dependencies: [19, 17, 21, 4913, 575, 5127, 18289, 2119, 18289, 7348, 18347, 7045, 1112, 4190, 5929, 5504, 5511, 18350, 7545, 5594, 7057, 5609, 2]
// Exports: default

// Module 18346 (ConjureShareAccess)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import ToastUtils from "ToastUtils" /* 5594 */;
import ClipboardUtils from "ClipboardUtils" /* 7545 */;
import ConjureSharingModeSheet from "ConjureSharingModeSheet" /* 18289 */;
import buildConjureProjectLinkDefault from "buildConjureProjectLink" /* 18350 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
function ShareLinkRow(project) {
  let TableRowIcon;
  let closure_0;
  let intl;
  let obj2;
  project = project.project;
  const disabled = project.disabled;
  const tmp = buildConjureProjectLinkDefault(project.application_id, project.name);
  _require = tmp;
  const items = [tmp];
  const callback = react.useCallback(() => {
    const obj = ClipboardUtils;
    obj.copy(closure_0);
    const obj2 = ToastUtils;
    obj2.presentLinkCopied();
  }, items);
  let obj = { icon: closure_5(TableRowIcon, obj2), label: intl.string(require("intl").t.WqhZss), subLabel: tmp, subLabelLineClamp: 1, disabled, onPress: callback };
  const TableRow = require("TableRow").TableRow;
  obj2 = { IconComponent: require("LinkIcon").LinkIcon };
  TableRowIcon = require("TableRowIcon").TableRowIcon;
  intl = require("intl").intl;
  return closure_5(TableRow, obj);
}
let react = react_mod;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { body: obj2, notice: obj3, noticeText: { flex: 1 }, sharingMode: obj4 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { marginBottom: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/share/native/ConjureShareAccess.tsx");

export default function ConjureShareAccess(arg0) {
  let TableRowGroup2;
  let Text;
  let Text2;
  let canChange;
  let changeMode;
  let changing;
  let closure_3;
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let isOwner;
  let items2;
  let items3;
  let mode;
  let obj12;
  let obj27;
  let obj3;
  let obj9;
  let project;
  let sharing;
  let stringResult;
  let tmp16Result;
  let tmp22;
  ({ project, sharing } = arg0);
  mode = undefined;
  changeMode = undefined;
  react = undefined;
  const tmp = closure_7();
  ({ isOwner, mode } = sharing);
  const options = sharing.options;
  ({ changing, changeMode } = sharing);
  const loadFailed = sharing.loadFailed;
  const found = options.find((value) => value.value === mode);
  react = react.useRef(changeMode);
  const items = [changeMode];
  const effect = react.useEffect(() => {
    closure_3.current = changeMode;
  }, items);
  const items1 = [options, mode];
  let obj = { style: tmp.body, children: items2 };
  let tmp7 = null;
  const callback = react.useCallback(() => {
    let ref;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const obj = {
      options,
      value: mode,
      onChange(AUTO_DISMISS) {
        return ref.current(AUTO_DISMISS);
      }
    };
    const tmp2 = asyncRequire(18289, dependencyMap.paths);
    openLazy(tmp2, ConjureSharingModeSheet.CONJURE_SHARING_MODE_SHEET_KEY, obj, "stack");
  }, items1);
  if ("public" === mode) {
    const obj2 = { hasIcons: true, children: closure_5(ShareLinkRow, obj3) };
    obj3 = { project, disabled: changing };
    const TableRowGroup = mode(changeMode[9]).TableRowGroup;
    tmp7 = closure_5(TableRowGroup, obj2);
  }
  items2 = [tmp7, , , , ];
  let tmp12 = null;
  if ("link" === mode) {
    const obj4 = { project, isOwner, disabled: changing };
    tmp12 = closure_5(options(changeMode[10]), obj4);
  }
  items2[1] = tmp12;
  const obj5 = { style: tmp.sharingMode, children: closure_5(TableRowGroup2, obj9) };
  TableRowGroup2 = mode(changeMode[9]).TableRowGroup;
  const obj7 = { label: intl.string(options(changeMode[13]).jDBYrs), subLabel: stringResult, trailing: tmp16Result, arrow: null, disabled: tmp22, onPress: callback };
  const TableRow = mode(changeMode[11]).TableRow;
  intl = mode(changeMode[12]).intl;
  stringResult = undefined;
  if (!isOwner) {
    const intl2 = tmp17(tmp18[12]).intl;
    stringResult = intl2.string(tmp19(tmp18[13]).WLBlI4);
  }
  tmp16Result = undefined;
  if (null != found) {
    const obj8 = { text: found.label };
    tmp16Result = tmp16(tmp17(tmp18[11]).TableRow.TrailingText, obj8);
  }
  ({ canChange: obj6.arrow, canChange } = sharing);
  tmp22 = !canChange;
  if (canChange) {
    tmp22 = changing;
  }
  obj9 = { hasIcons: false, children: closure_5(TableRow, obj7) };
  items2[2] = closure_5(View, obj5);
  let tmp5Result = null;
  if (loadFailed) {
    tmp5Result = null;
    if (!changing) {
      tmp5Result = null;
      if ("public" !== mode) {
        const obj10 = { direction: "horizontal", spacing: options(changeMode[4]).space.PX_8, align: "center", style: tmp.notice, children: items3 };
        const Stack = tmp17(tmp18[14]).Stack;
        const obj11 = { style: tmp.noticeText, children: closure_5(Text2, obj12) };
        obj12 = { variant: "body-sm/normal", color: "text-feedback-critical", children: intl4.string(options(changeMode[13])["0e9nOP"]) };
        Text2 = tmp17(tmp18[15]).Text;
        intl4 = tmp17(tmp18[12]).intl;
        items3 = [closure_5(View, obj11), ];
        const obj13 = { variant: "secondary", size: "sm", text: intl5.string(mode(changeMode[12]).t["5911Lb"]), onPress: sharing.reload };
        const Button = tmp17(tmp18[16]).Button;
        intl5 = tmp17(tmp18[12]).intl;
        items3[1] = closure_5(Button, obj13);
        tmp5Result = tmp5(Stack, obj10);
      }
    }
  }
  items2[3] = tmp5Result;
  let tmp16Result2 = null;
  if (sharing.saveFailed) {
    const obj14 = { style: tmp.notice, children: closure_5(Text, obj27) };
    obj27 = { variant: "body-sm/normal", color: "text-feedback-critical", children: intl3.string(options(changeMode[13]).wzqQPR) };
    Text = tmp17(tmp18[15]).Text;
    intl3 = tmp17(tmp18[12]).intl;
    tmp16Result2 = tmp16(tmp6, obj14);
  }
  items2[4] = tmp16Result2;
  return closure_6(View, obj);
};
