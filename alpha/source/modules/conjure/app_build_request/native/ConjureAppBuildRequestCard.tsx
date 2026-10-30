// Module ID: 12728
// Function ID: 12729
// Name: ConjureAppBuildRequestCard
// Dependencies: [19, 17, 21, 5009, 575, 12559, 1114, 3865, 12442, 5619, 8020, 7048, 7054, 6969, 5253, 12729, 7247, 5629, 2]
// Exports: default

// Module 12728 (ConjureAppBuildRequestCard)
import nativeDefault from "native" /* 575 */;
import intl8 from "intl" /* 1114 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5253 */;
import Text_Text from "Text/Text" /* 5619 */;
import XSmallIcon from "XSmallIcon" /* 7048 */;
import IconButton2 from "IconButton" /* 8020 */;
import ConjureAppBuildRequest from "ConjureAppBuildRequest" /* 12559 */;
import ConjureAppBuildRequestProjectsSheetDefault from "ConjureAppBuildRequestProjectsSheet" /* 12729 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let tmp2;
const components_Button_Button = tmp2(5629);
const TableRow2 = tmp2(6969);
const TableRowGroup2 = tmp2(7054);
const TextArea2 = tmp2(7247);
({ Keyboard: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, header: obj3, heading: { flex: 1 }, footer: { flexDirection: "row", justifyContent: "flex-end" } };
obj2 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/app_build_request/native/ConjureAppBuildRequestCard.tsx");

export default function ConjureAppBuildRequestCard(arg0) {
  let Button;
  let TableRow;
  let canSend;
  let intl2;
  let intl4;
  let intl5;
  let intl7;
  let items;
  let items1;
  let obj24;
  let obj5;
  let obj9;
  let onDismiss;
  let onSent;
  let projectId;
  let request;
  let stringResult2;
  let title;
  let tmp10Result;
  let tmp12;
  ({ projectId, request, onInputFocusChange: require } = arg0);
  dependencyMap = undefined;
  ({ canSend, onDismiss, onSent } = arg0);
  const tmp = closure_7();
  let tmp3 = dependencyMap;
  let obj = ConjureAppBuildRequest;
  const conjureAppBuildRequestForm = obj.useConjureAppBuildRequestForm(projectId, request, canSend, onDismiss, onSent);
  const projects = conjureAppBuildRequestForm.projects;
  const found = projects.filter((projectId) => {
    const targetIds = conjureAppBuildRequestForm.targetIds;
    return targetIds.includes(projectId.projectId);
  });
  const intl = intl8.intl;
  const stringResult = intl.string(conjureAppBuildRequestForm(3865)["29gr8j"]);
  dependencyMap = stringResult;
  let obj2 = { style: tmp.card, children: items1 };
  const obj3 = { style: tmp.header, children: items };
  const obj4 = { style: tmp.heading, children: closure_5(Text_Text.Text, obj5) };
  obj5 = { variant: "text-md/semibold", color: "text-default", accessibilityRole: "header", children: request.summary };
  const tmp8 = conjureAppBuildRequestForm(12442);
  items = [closure_5(closure_4, obj4), ];
  const obj6 = { variant: "tertiary", size: "sm", icon: closure_5(XSmallIcon.XSmallIcon, { size: "sm" }), onPress: conjureAppBuildRequestForm.dismiss, accessibilityLabel: intl2.string(conjureAppBuildRequestForm(3865).KQUuAZ) };
  const IconButton = IconButton2.IconButton;
  intl2 = intl8.intl;
  items[1] = closure_5(IconButton, obj6);
  items1 = [closure_6(closure_4, obj3), , , ];
  const tmp7 = closure_6;
  const tmp9 = closure_4;
  if (0 === conjureAppBuildRequestForm.projects.length) {
    const obj7 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(conjureAppBuildRequestForm(3865).TbbzW5) };
    const Text = Text_Text.Text;
    intl4 = intl8.intl;
    tmp10Result = tmp10(Text, obj7);
  } else {
    let stringResult1;
    const obj8 = { title: stringResult, hasIcons: false, children: closure_5(TableRow, obj9) };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    TableRow = TableRow2.TableRow;
    if (0 === found.length) {
      const intl3 = intl8.intl;
      stringResult1 = intl3.string(tmp5(3865).twlOb6);
    } else {
      const mapped = found.map((name) => name.name);
      stringResult1 = mapped.join(", ");
    }
    obj9 = {
      label: stringResult1,
      subLabel: tmp12,
      arrow: true,
      disabled: conjureAppBuildRequestForm.sending,
      onPress: function openSheet() {
          let obj2;
          let tmp3;
          _false.dismiss();
          const obj = { content: hasOwnProperty(tmp3, obj2), key: "ConjureAppBuildRequestProjectSheet", stackingBehavior: "stack" };
          const showActionSheet = ActionSheetActionCreators.showActionSheet;
          obj2 = { title, projects: conjureAppBuildRequestForm.projects, initialIds: conjureAppBuildRequestForm.targetIds, maxSelected: ConjureAppBuildRequest.CONJURE_APP_BUILD_MAX_TARGETS, onChange: conjureAppBuildRequestForm.setTargetIds };
          ActionSheetActionCreators;
          tmp3 = ConjureAppBuildRequestProjectsSheetDefault;
          showActionSheet(obj);
        }
    };
    tmp12 = undefined;
    if (1 === found.length) {
      const serverName = found[0].serverName;
      tmp12 = serverName;
    }
    tmp10Result = tmp10(TableRowGroup, obj8);
  }
  items1[1] = tmp10Result;
  const obj11 = {
    label: intl5.string(conjureAppBuildRequestForm(3865).XZNsDA),
    value: null,
    onChange: null,
    maxLength: ConjureAppBuildRequest.CONJURE_APP_BUILD_PROMPT_MAX_LENGTH,
    disabled: conjureAppBuildRequestForm.sending,
    onFocus() {
      let tmpResult;
      if (require != null) {
        tmpResult = tmp(true);
      }
      return tmpResult;
    },
    onBlur() {
      let tmpResult;
      if (require != null) {
        tmpResult = tmp(false);
      }
      return tmpResult;
    },
    errorMessage: stringResult2
  };
  const TextArea = TextArea2.TextArea;
  intl5 = intl8.intl;
  ({ prompt: obj10.value, setPrompt: obj10.onChange } = conjureAppBuildRequestForm);
  stringResult2 = undefined;
  if (conjureAppBuildRequestForm.failed) {
    const intl6 = intl8.intl;
    stringResult2 = intl6.string(tmp5(3865).kMZz8G);
  }
  items1[2] = closure_5(TextArea, obj11);
  const obj13 = { style: tmp.footer, children: closure_5(Button, obj24) };
  obj24 = { variant: "primary", size: "sm", text: intl7.string(conjureAppBuildRequestForm(3865).gG4j6o), disabled: !conjureAppBuildRequestForm.canSubmit, loading: null, onPress: null };
  Button = components_Button_Button.Button;
  intl7 = intl8.intl;
  ({ sending: obj12.loading, submit: obj12.onPress } = conjureAppBuildRequestForm);
  items1[3] = closure_5(tmp9, obj13);
  return tmp7(tmp8, obj2);
};
