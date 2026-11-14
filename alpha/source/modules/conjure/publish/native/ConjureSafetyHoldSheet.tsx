// Module ID: 13148
// Function ID: 13149
// Name: ConjureSafetyHoldSheet
// Dependencies: [19, 17, 21, 5306, 575, 13149, 7951, 7913, 5929, 5936, 1113, 4131, 13150, 5552, 2]
// Exports: default

// Module 13148 (ConjureSafetyHoldSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5552 */;
import useConjureSafetyRecheckDefault from "useConjureSafetyRecheck" /* 13149 */;
import conjurePublishConnection from "conjurePublishConnection" /* 13150 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

let closure_4;
let hasOwnProperty;
let obj2;
let tmp2;
const _modDef4131 = tmp2(4131);
function ConjureSafetyHoldSheet(projectId) {
  let intl;
  let intl2;
  let items;
  let obj4;
  let obj5;
  let status1;
  let str2;
  let tmp10;
  let tmp11;
  projectId = projectId.projectId;
  const tmp = closure_8();
  const tmp4 = useConjureSafetyRecheckDefault(projectId);
  let obj = projectId(13149);
  const conjureSafetyRecheckNotice = obj.getConjureSafetyRecheckNotice(tmp4);
  const obj2 = projectId(13149);
  const conjureSafetyHoldCopy = obj2.getConjureSafetyHoldCopy(tmp4);
  let status;
  if (tmp4 != null) {
    status = tmp4.status;
  }
  const obj3 = { header: closure_4(projectId(7913).BottomSheetTitleHeader, obj4), children: tmp10(tmp11, obj5) };
  const ActionSheet = tmp5(7951).ActionSheet;
  obj5 = { style: tmp.content, children: items };
  items = [, , , ];
  obj4 = { title: conjureSafetyHoldCopy.title };
  const obj6 = { variant: "body-md/normal", color: "text-muted", children: conjureSafetyHoldCopy.body };
  items[0] = closure_4(projectId(5929).Text, obj6);
  let tmp9Result = null;
  tmp10 = closure_5;
  tmp11 = View;
  if (null != conjureSafetyRecheckNotice) {
    const obj7 = { variant: "body-md/medium", color: closure_7[conjureSafetyRecheckNotice.type], accessibilityRole: str2, accessibilityLiveRegion: "polite", children: conjureSafetyRecheckNotice.message };
    str2 = undefined;
    const Text = tmp5(5929).Text;
    if ("critical" === conjureSafetyRecheckNotice.type) {
      str2 = "alert";
    }
    tmp9Result = tmp9(Text, obj7);
  }
  items[1] = tmp9Result;
  let tmp9Result2 = null;
  if ("cleared" !== status) {
    const obj8 = {
      variant: "primary",
      text: intl.string(_modDef4131["nmwy0/"]),
      loading: "pending" === status1,
      onPress() {
          const obj = conjurePublishConnection;
          return obj.requestConjureSafetyRecheck(projectId);
        }
    };
    const Button = tmp5(5936).Button;
    intl = tmp5(1113).intl;
    status1 = undefined;
    if (tmp4 != null) {
      status1 = tmp4.status;
    }
    tmp9Result2 = tmp9(Button, obj8);
  }
  items[2] = tmp9Result2;
  let str4 = "secondary";
  const Button2 = tmp5(5936).Button;
  if ("cleared" === status) {
    str4 = "primary";
  }
  const obj9 = {
    variant: str4,
    text: intl2.string(projectId(1113).t.BddRzS),
    onPress: function close() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(ConjureSafetyHoldSheet_str);
    }
  };
  intl2 = tmp5(1113).intl;
  items[3] = closure_4(Button2, obj9);
  return closure_4(ActionSheet, obj3);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const ConjureSafetyHoldSheet_str = "ConjureSafetyHoldSheet";
let closure_7 = { critical: "text-feedback-critical", warning: "text-feedback-warning", info: "text-muted" };
let obj = { content: obj2 };
obj2 = { gap: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjureSafetyHoldSheet.tsx");

export default function showConjureSafetyHoldSheet(projectId) {
  let obj3;
  const obj = conjurePublishConnection;
  const result = obj.forgetClearedSafetyRecheck(projectId);
  const obj2 = { key: ConjureSafetyHoldSheet_str, content: React3(ConjureSafetyHoldSheet, obj3) };
  const showActionSheet = ActionSheetActionCreators.showActionSheet;
  obj3 = { projectId };
  ActionSheetActionCreators;
  showActionSheet(obj2);
};
