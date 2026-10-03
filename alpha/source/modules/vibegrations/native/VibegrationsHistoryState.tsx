// Module ID: 16739
// Function ID: 16740
// Name: VibegrationsHistoryState
// Dependencies: [19, 17, 21, 4890, 587, 558, 576, 1126, 3723, 4886, 2]

// Module 16739 (VibegrationsHistoryState)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import Text_Text from "Text/Text" /* 4886 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let state;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { placeholder: obj2 };
obj2 = { alignItems: "center", gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_24 };
let closure_6 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((state) => {
  let emptyBody;
  let emptyTitle;
  let items;
  const obj = react2;
  const cResult = obj.c(15);
  ({ emptyTitle, emptyBody } = state);
  state = state.state;
  const tmp4 = closure_6();
  if (cResult[0] === emptyTitle) {
    let tmp6;
    let tmp9;
    if (cResult[1] === "failed" === state.status) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== tmp6) {
      const obj2 = { variant: "text-sm/medium", color: "text-default", children: tmp6 };
      const tmp11 = React3(Text_Text.Text, obj2);
      cResult[3] = tmp6;
      cResult[4] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === emptyBody) {
      let tmp12;
      let tmp15;
      if (cResult[6] === "failed" === state.status) {
        tmp12 = cResult[7];
      }
      if (cResult[8] !== tmp12) {
        const obj3 = { variant: "text-xs/normal", color: "text-muted", children: tmp12 };
        const tmp17 = React3(Text_Text.Text, obj3);
        cResult[8] = tmp12;
        cResult[9] = tmp17;
        tmp15 = tmp17;
      } else {
        tmp15 = cResult[9];
      }
      if (cResult[10] === tmp4.placeholder) {
        if (cResult[11] === str) {
          if (cResult[12] === tmp9) {
            let tmp18;
            if (cResult[13] === tmp15) {
              tmp18 = cResult[14];
            }
            return tmp18;
          }
        }
      }
      const obj4 = { style: tmp4.placeholder, accessibilityRole: str, children: items };
      items = [tmp9, tmp15];
      const tmp21 = hasOwnProperty(View, obj4);
      cResult[10] = tmp4.placeholder;
      cResult[11] = str;
      cResult[12] = tmp9;
      cResult[13] = tmp15;
      cResult[14] = tmp21;
      tmp18 = tmp21;
    }
    let stringResult = emptyBody;
    if ("failed" === state.status) {
      const intl2 = tmp(1126).intl;
      stringResult = intl2.string(_modDef3723["+2AMt1"]);
    }
    cResult[5] = emptyBody;
    cResult[6] = "failed" === state.status;
    cResult[7] = stringResult;
    tmp12 = stringResult;
  }
  let stringResult1 = emptyTitle;
  if ("failed" === state.status) {
    const intl = tmp(1126).intl;
    stringResult1 = intl.string(_modDef3723.TV42NS);
  }
  cResult[0] = emptyTitle;
  cResult[1] = "failed" === state.status;
  cResult[2] = stringResult1;
  tmp6 = stringResult1;
}) : ((state) => {
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
    const intl = tmp5(1126).intl;
    emptyTitle = intl.string(_modDef3723.TV42NS);
  }
  items = [React3(Text, { variant: "text-sm/medium", color: "text-default", children: emptyTitle }), ];
  const Text2 = tmp5(4886).Text;
  if ("failed" === state.state.status) {
    const intl2 = tmp5(1126).intl;
    emptyBody = intl2.string(_modDef3723["+2AMt1"]);
  }
  items[1] = React3(Text2, { variant: "text-xs/normal", color: "text-muted", children: emptyBody });
  return tmp2(tmp3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((state) => {
  let intl;
  let intl2;
  const obj = react2;
  const cResult = obj.c(2);
  state = state.state;
  let tmp4 = null;
  if (state.hasRows) {
    let tmp10;
    if ("failed" === state.status) {
      let first;
      const _Symbol2 = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "text-xs/normal", color: "text-feedback-critical", children: intl2.string(_modDef3723.TV42NS) };
        const Text2 = tmp(4886).Text;
        intl2 = tmp(1126).intl;
        const tmp15 = React3(Text2, obj2);
        cResult[0] = tmp15;
        first = tmp15;
      } else {
        first = cResult[0];
      }
      tmp10 = first;
    } else {
      tmp10 = null;
      if (state.truncated) {
        let tmp6;
        const _Symbol = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-xs/normal", color: "text-muted", children: intl.string(_modDef3723["U/qDX9"]) };
          const Text = tmp(4886).Text;
          intl = tmp(1126).intl;
          const tmp9 = React3(Text, obj3);
          cResult[1] = tmp9;
          tmp6 = tmp9;
        } else {
          tmp6 = cResult[1];
        }
        tmp10 = tmp6;
      }
    }
    tmp4 = tmp10;
  }
  return tmp4;
}) : ((state) => {
  let intl;
  let intl2;
  state = state.state;
  let tmp = null;
  if (state.hasRows) {
    let tmp2;
    if ("failed" === state.status) {
      const obj2 = { variant: "text-xs/normal", color: "text-feedback-critical", children: intl2.string(_modDef3723.TV42NS) };
      const Text2 = Text_Text.Text;
      intl2 = intl3.intl;
      tmp2 = React3(Text2, obj2);
    } else {
      tmp2 = null;
      if (state.truncated) {
        const obj = { variant: "text-xs/normal", color: "text-muted", children: intl.string(_modDef3723["U/qDX9"]) };
        const Text = Text_Text.Text;
        intl = intl3.intl;
        tmp2 = React3(Text, obj);
      }
    }
    tmp = tmp2;
  }
  return tmp;
});
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsHistoryState.tsx");

export const VibegrationsHistoryPlaceholder = tmp4;
export const VibegrationsHistoryNotice = tmp5;
