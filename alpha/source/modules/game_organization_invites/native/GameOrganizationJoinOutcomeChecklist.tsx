// Module ID: 12354
// Function ID: 12355
// Name: GameOrganizationJoinOutcomeChecklist
// Dependencies: [19, 17, 21, 5043, 575, 12349, 7525, 5752, 7278, 6115, 5634, 2]
// Exports: default

// Module 12354 (GameOrganizationJoinOutcomeChecklist)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5634 */;
import Stack_Stack from "Stack/Stack" /* 6115 */;
import useGameOrganizationJoinOutcome from "useGameOrganizationJoinOutcome" /* 12349 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let importDefault, subtitle;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
function RowIcon(status) {
  status = status.status;
  if (useGameOrganizationJoinOutcome.GameOrganizationJoinOutcomeRowStatus.SUCCESS === status) {
    const obj2 = { size: "refresh_sm", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
    const CircleCheckIcon = tmp(7525).CircleCheckIcon;
    return React3(CircleCheckIcon, obj2);
  } else if (useGameOrganizationJoinOutcome.GameOrganizationJoinOutcomeRowStatus.PENDING === status) {
    const obj3 = { size: "refresh_sm", color: nativeDefault.colors.ICON_FEEDBACK_WARNING };
    const ClockIcon = tmp(5752).ClockIcon;
    return React3(ClockIcon, obj3);
  } else if (useGameOrganizationJoinOutcome.GameOrganizationJoinOutcomeRowStatus.ERROR === status) {
    const obj = { size: "refresh_sm", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
    const CircleErrorIcon = tmp(7278).CircleErrorIcon;
    return React3(CircleErrorIcon, obj);
  }
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, content: { flex: 1 }, divider: obj3 };
obj2 = { padding: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles = createStyles.createStyles;
obj3 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinOutcomeChecklist.tsx");

export default function GameOrganizationJoinOutcomeChecklist(rows) {
  let content;
  rows = rows.rows;
  const tmp = closure_6();
  importDefault = tmp;
  let obj = {
    spacing: nativeDefault.space.PX_16,
    style: tmp.card,
    children: rows.map((subtitle, index) => {
      let items;
      let items1;
      let items2;
      let key;
      let status;
      let title;
      subtitle = subtitle.subtitle;
      ({ key, status, title } = subtitle);
      const obj = { direction: "horizontal", align: "flex-start", spacing: nativeDefault.space.PX_16, children: items };
      const Stack = Stack_Stack.Stack;
      items = [React3(RowIcon, { status }), ];
      const obj2 = { spacing: nativeDefault.space.PX_16, style: content.content, children: items2 };
      const Stack2 = Stack_Stack.Stack;
      const obj3 = { spacing: nativeDefault.space.PX_4, children: items1 };
      const Stack3 = Stack_Stack.Stack;
      items1 = [React3(Text_Text.Text, { variant: "heading-sm/semibold", color: "text-strong", children: title }), ];
      let tmp4Result = null;
      const tmp5 = content;
      if (null != subtitle) {
        const obj4 = { variant: "body-md/normal", color: "text-default", children: subtitle };
        tmp4Result = tmp4(Text_Text.Text, obj4);
      }
      items1[1] = tmp4Result;
      items2 = [hasOwnProperty(Stack3, obj3), ];
      let tmp4Result2 = null;
      if (index < rows.length - 1) {
        const obj5 = { style: tmp5.divider };
        tmp4Result2 = tmp4(View, obj5);
      }
      items2[1] = tmp4Result2;
      items[1] = hasOwnProperty(Stack2, obj2);
      return hasOwnProperty(Stack, obj, key);
    })
  };
  let Stack = rows(6115).Stack;
  return closure_4(Stack, obj);
};
