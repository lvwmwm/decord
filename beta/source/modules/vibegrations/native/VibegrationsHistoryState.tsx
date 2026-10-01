// Module ID: 16413
// Function ID: 16414
// Name: VibegrationsHistoryState
// Dependencies: [19, 17, 21, 4836, 576, 4832, 1115, 3715, 2]
// Exports: VibegrationsHistoryNotice, VibegrationsHistoryPlaceholder

// Module 16413 (VibegrationsHistoryState)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { placeholder: obj2 };
obj2 = { alignItems: "center", gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_24 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsHistoryState.tsx");

export const VibegrationsHistoryPlaceholder = function VibegrationsHistoryPlaceholder(state) {
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
    const intl = tmp5(1115).intl;
    emptyTitle = intl.string(_modDef3715.TV42NS);
  }
  items = [React3(Text, { variant: "text-sm/medium", color: "text-default", children: emptyTitle }), ];
  const Text2 = tmp5(4832).Text;
  if ("failed" === state.state.status) {
    const intl2 = tmp5(1115).intl;
    emptyBody = intl2.string(_modDef3715["+2AMt1"]);
  }
  items[1] = React3(Text2, { variant: "text-xs/normal", color: "text-muted", children: emptyBody });
  return tmp2(tmp3, obj);
};
export const VibegrationsHistoryNotice = function VibegrationsHistoryNotice(state) {
  let intl;
  let intl2;
  state = state.state;
  let tmp = null;
  if (state.hasRows) {
    let tmp2;
    if ("failed" === state.status) {
      const obj2 = { variant: "text-xs/normal", color: "text-feedback-critical", children: intl2.string(_modDef3715.TV42NS) };
      const Text2 = Text_Text.Text;
      intl2 = intl3.intl;
      tmp2 = React3(Text2, obj2);
    } else {
      tmp2 = null;
      if (state.truncated) {
        const obj = { variant: "text-xs/normal", color: "text-muted", children: intl.string(_modDef3715["U/qDX9"]) };
        const Text = Text_Text.Text;
        intl = intl3.intl;
        tmp2 = React3(Text, obj);
      }
    }
    tmp = tmp2;
  }
  return tmp;
};
