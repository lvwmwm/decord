// Module ID: 12476
// Function ID: 12477
// Name: host_approval/ConjureHostApproval
// Dependencies: [19, 17, 21, 5014, 575, 12477, 12478, 5624, 1113, 3868, 6027, 5634, 10895, 7060, 6975, 2]
// Exports: ConjureAllowedHostsSetting, ConjureHostApprovalCards

// Module 12476 (host_approval/ConjureHostApproval)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import Text_Text from "Text/Text" /* 5624 */;
import ConjureHostApproval from "ConjureHostApproval" /* 10895 */;
import ConjureNativeCardSurfaceDefault from "ConjureNativeCardSurface" /* 12477 */;
import ConjureAwaitingUser from "ConjureAwaitingUser" /* 12478 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let importDefault;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
function ConjureHostApprovalCard(arg0) {
  let approval;
  let c1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let items1;
  let obj5;
  let reason;
  ({ projectId: require, approval } = arg0);
  importDefault = undefined;
  ({ id: c1, reason } = approval);
  const host = approval.host;
  let obj = { style: closure_6().card, children: items };
  closure_6();
  items = [, , , , ];
  const tmp5 = ConjureNativeCardSurfaceDefault;
  items[0] = closure_4(ConjureAwaitingUser.ConjureAwaitingPulseRing, {});
  const obj2 = { variant: "text-xs/semibold", color: "text-brand", children: intl.string(_modDef3868.W4DsVo) };
  const Text = Text_Text.Text;
  intl = intl7.intl;
  items[1] = closure_4(Text, obj2);
  const obj3 = { variant: "text-sm/normal", color: "text-default", children: intl2.format(_modDef3868.E4Gc7e, { host }) };
  const Text2 = Text_Text.Text;
  intl2 = intl7.intl;
  items[2] = closure_4(Text2, obj3);
  let tmp6Result = null;
  if ("" !== reason) {
    const obj4 = { variant: "text-sm/normal", color: "text-muted", children: intl3.format(_modDef3868["5poqiN"], obj5) };
    const Text3 = tmp7(5624).Text;
    intl3 = tmp7(1113).intl;
    obj5 = { reason };
    tmp6Result = tmp6(Text3, obj4);
  }
  items[3] = tmp6Result;
  const obj6 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, children: items1 };
  const Stack = tmp7(6027).Stack;
  const obj7 = {
    variant: "primary",
    size: "sm",
    onPress() {
      const obj = ConjureHostApproval;
      return obj.answerHostApproval(require, c1, "once");
    },
    text: intl4.string(_modDef3868.B05C3K)
  };
  const Button = tmp7(5634).Button;
  intl4 = tmp7(1113).intl;
  items1 = [closure_4(Button, obj7), , ];
  const obj8 = {
    variant: "secondary",
    size: "sm",
    onPress() {
      const obj = ConjureHostApproval;
      return obj.answerHostApproval(require, c1, "always");
    },
    text: intl5.string(_modDef3868["rGv+om"])
  };
  const Button2 = tmp7(5634).Button;
  intl5 = tmp7(1113).intl;
  items1[1] = closure_4(Button2, obj8);
  const obj9 = {
    variant: "secondary",
    size: "sm",
    onPress() {
      const obj = ConjureHostApproval;
      return obj.answerHostApproval(require, c1, "deny");
    },
    text: intl6.string(_modDef3868.vWkaSE)
  };
  const Button3 = tmp7(5634).Button;
  intl6 = tmp7(1113).intl;
  items1[2] = closure_4(Button3, obj9);
  items[4] = closure_5(Stack, obj6);
  return closure_5(tmp5, obj);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { cards: obj2, card: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/host_approval/native/ConjureHostApproval.tsx");

export function ConjureHostApprovalCards(projectId) {
  projectId = projectId.projectId;
  const tmp = closure_6();
  let obj = projectId(10895);
  const conjureHostApprovals = obj.useConjureHostApprovals(projectId);
  let tmp2 = null;
  if (0 !== conjureHostApprovals.length) {
    const obj2 = {
      style: tmp.cards,
      children: conjureHostApprovals.map((approval) => {
          const obj = { projectId, approval };
          return React3(ConjureHostApprovalCard, obj, approval.id);
        })
    };
    tmp2 = closure_4(View, obj2);
  }
  return tmp2;
}
export function ConjureAllowedHostsSetting(projectId) {
  let intl;
  let intl2;
  let intl3;
  let mapped;
  projectId = projectId.projectId;
  let obj = projectId(10895);
  const conjureAllowedHosts = obj.useConjureAllowedHosts(projectId);
  let tmp4Result2 = null;
  if (null != conjureAllowedHosts) {
    let obj2 = { title: intl.string(_modDef3868.Ufr2wk), description: intl2.string(_modDef3868.wremls), hasIcons: false, children: mapped };
    const TableRowGroup = tmp(7060).TableRowGroup;
    intl = tmp(1113).intl;
    intl2 = tmp(1113).intl;
    const tmp5 = importDefault;
    if (0 === conjureAllowedHosts.length) {
      let obj3 = { label: intl3.string(tmp5(3868).AweHIi) };
      let TableRow = tmp(6975).TableRow;
      intl3 = tmp(1113).intl;
      mapped = tmp4(TableRow, obj3);
    } else {
      mapped = conjureAllowedHosts.map((label) => {
        let Button;
        let intl;
        let intl2;
        let obj2;
        let obj3;
        let closure_0 = label;
        let obj = { label, trailing: closure_1_4(Button, obj2) };
        const TableRow = projectId(dependencyMap[14]).TableRow;
        obj2 = {
          variant: "secondary",
          size: "sm",
          text: intl.string(_modDef3868["4r+tVj"]),
          accessibilityLabel: intl2.formatToPlainString(_modDef3868.mocW6h, obj3),
          onPress() {
            const obj = ConjureHostApproval;
            return obj.removeAllowedHost(projectId, label);
          }
        };
        Button = projectId(dependencyMap[11]).Button;
        intl = projectId(dependencyMap[8]).intl;
        intl2 = projectId(dependencyMap[8]).intl;
        obj3 = { host: label };
        return closure_1_4(TableRow, obj, label);
      });
    }
    tmp4Result2 = tmp4(TableRowGroup, obj2);
  }
  return tmp4Result2;
}
