// Module ID: 17800
// Function ID: 17801
// Name: FrameSurfaceState
// Dependencies: [19, 17, 21, 4945, 587, 558, 576, 5195, 6831, 2]

// Module 17800 (FrameSurfaceState)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5195 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4945 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
let tmp;
const ActivityIndicator_ActivityIndicator = tmp(6831);
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, action: obj3 };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16 };
let closure_5 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function FrameSurfaceExplanation(arg0) {
  let action;
  let description;
  let error;
  let heading;
  let icon;
  let items;
  let tmp11;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(16);
  ({ icon, heading, description, error, action } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] !== heading) {
    let tmp6 = null;
    if (null != heading) {
      const obj2 = { variant: "heading-md/semibold", color: "text-default", children: heading };
      tmp6 = _false(tmp(5195).Heading, obj2);
    }
    cResult[0] = heading;
    cResult[1] = tmp6;
    tmp5 = tmp6;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== description) {
    let tmp9 = null;
    if (null != description) {
      const obj3 = { variant: "text-sm/normal", color: "text-muted", children: description };
      tmp9 = _false(tmp(5195).Text, obj3);
    }
    cResult[2] = description;
    cResult[3] = tmp9;
    tmp8 = tmp9;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== error) {
    let tmp12 = null;
    if (null != error) {
      const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: error };
      tmp12 = _false(tmp(5195).Text, obj4);
    }
    cResult[4] = error;
    cResult[5] = tmp12;
    tmp11 = tmp12;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === action) {
    let tmp14;
    if (cResult[7] === tmp4.action) {
      tmp14 = cResult[8];
    }
    if (cResult[9] === icon) {
      if (cResult[10] === tmp4.container) {
        if (cResult[11] === tmp5) {
          if (cResult[12] === tmp8) {
            if (cResult[13] === tmp11) {
              let tmp18;
              if (cResult[14] === tmp14) {
                tmp18 = cResult[15];
              }
              return tmp18;
            }
          }
        }
      }
    }
    const obj5 = { style: tmp4.container, children: items };
    items = [icon, tmp5, tmp8, tmp11, tmp14];
    const tmp21 = React3(View, obj5);
    cResult[9] = icon;
    cResult[10] = tmp4.container;
    cResult[11] = tmp5;
    cResult[12] = tmp8;
    cResult[13] = tmp11;
    cResult[14] = tmp14;
    cResult[15] = tmp21;
    tmp18 = tmp21;
  }
  let tmp15 = null;
  if (null != action) {
    const obj6 = { style: tmp4.action, children: action };
    tmp15 = _false(View, obj6);
  }
  cResult[6] = action;
  cResult[7] = tmp4.action;
  cResult[8] = tmp15;
  tmp14 = tmp15;
}) : (function FrameSurfaceExplanation(icon) {
  let action;
  let description;
  let error;
  let heading;
  let items;
  ({ heading, description, error, action } = icon);
  icon = icon.icon;
  const tmp = closure_5();
  const obj = { style: tmp.container, children: items };
  items = [icon, , , , ];
  let tmp4 = null;
  const tmp2 = React3;
  if (null != heading) {
    const obj2 = { variant: "heading-md/semibold", color: "text-default", children: heading };
    tmp4 = _false(Text_Text.Heading, obj2);
  }
  items[1] = tmp4;
  let tmp8 = null;
  if (null != description) {
    const obj3 = { variant: "text-sm/normal", color: "text-muted", children: description };
    tmp8 = _false(Text_Text.Text, obj3);
  }
  items[2] = tmp8;
  let tmp12 = null;
  if (null != error) {
    const obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: error };
    tmp12 = _false(Text_Text.Text, obj4);
  }
  items[3] = tmp12;
  let tmp16 = null;
  if (null != action) {
    const obj5 = { style: tmp.action, children: action };
    tmp16 = _false(tmp3, obj5);
  }
  items[4] = tmp16;
  return tmp2(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function FrameSurfaceLoading() {
  let first;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_5();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = _false(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.container) {
    const obj2 = { style: tmp4.container, children: first };
    const tmp11 = _false(View, obj2);
    cResult[1] = tmp4.container;
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (function FrameSurfaceLoading() {
  const obj = { style: closure_5().container, children: _false(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
  return _false(View, obj);
});
const result = size.fileFinishedImporting("modules/frames/native/FrameSurfaceState.tsx");

export const FrameSurfaceExplanation = tmp5;
export const FrameSurfaceLoading = tmp6;
