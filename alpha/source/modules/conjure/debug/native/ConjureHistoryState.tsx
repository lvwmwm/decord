// Module ID: 12979
// Function ID: 12980
// Name: ConjureHistoryState
// Dependencies: [19, 17, 21, 5009, 575, 5619, 1114, 3865, 2]
// Exports: ConjureHistoryNotice, ConjureHistoryPlaceholder

// Module 12979 (ConjureHistoryState)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import Text_Text from "Text/Text" /* 5619 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { placeholder: obj2 };
obj2 = { alignItems: "center", gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_24 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureHistoryState.tsx");

export function ConjureHistoryPlaceholder(state) {
  let emptyBody;
  let emptyTitle;
  let items;
  let str;
  ({ emptyTitle, emptyBody } = state);
  const obj = { style: closure_6().placeholder, accessibilityRole: str, children: items };
  str = undefined;
  const tmp2 = hasOwnProperty;
  const tmp3 = View;
  if ("failed" === state.state.status) {
    str = "alert";
  }
  const Text = Text_Text.Text;
  if ("failed" === state.state.status) {
    const intl = tmp5(1114).intl;
    emptyTitle = intl.string(_modDef3865.h1SE6R);
  }
  items = [React3(Text, { variant: "text-sm/medium", color: "text-default", children: emptyTitle }), ];
  const Text2 = tmp5(5619).Text;
  if ("failed" === state.state.status) {
    const intl2 = tmp5(1114).intl;
    emptyBody = intl2.string(_modDef3865["8SErdg"]);
  }
  items[1] = React3(Text2, { variant: "text-xs/normal", color: "text-muted", children: emptyBody });
  return tmp2(tmp3, obj);
}
export function ConjureHistoryNotice(state) {
  let intl;
  let intl2;
  state = state.state;
  let tmp = null;
  if (state.hasRows) {
    let tmp2;
    if ("failed" === state.status) {
      const obj2 = { variant: "text-xs/normal", color: "text-feedback-critical", children: intl2.string(_modDef3865.h1SE6R) };
      const Text2 = Text_Text.Text;
      intl2 = intl3.intl;
      tmp2 = React3(Text2, obj2);
    } else {
      tmp2 = null;
      if (state.truncated) {
        const obj = { variant: "text-xs/normal", color: "text-muted", children: intl.string(_modDef3865.V7Ri8H) };
        const Text = Text_Text.Text;
        intl = intl3.intl;
        tmp2 = React3(Text, obj);
      }
    }
    tmp = tmp2;
  }
  return tmp;
}
