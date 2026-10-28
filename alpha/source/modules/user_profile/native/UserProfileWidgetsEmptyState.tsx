// Module ID: 16221
// Function ID: 16222
// Name: UserProfileWidgetsEmptyState
// Dependencies: [19, 17, 21, 5004, 587, 558, 576, 1125, 5270, 5280, 2]

// Module 16221 (UserProfileWidgetsEmptyState)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1125 */;
import Text_Text from "Text/Text" /* 5270 */;
import components_Button_Button from "components/Button/Button" /* 5280 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, textContainer: obj3, centeredText: { textAlign: "center" } };
obj2 = { paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
let closure_5 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileWidgetsEmptyState() {
  let centeredText;
  let container;
  let first;
  let intl3;
  let items;
  let items1;
  let textContainer;
  let tmp10;
  let tmp12;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(14);
  const tmp4 = closure_5();
  ({ container, textContainer, centeredText } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(intl4.t["oqalC+"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.centeredText) {
    const obj2 = { variant: "heading-md/semibold", color: "text-strong", style: centeredText, children: first };
    const tmp9 = _false(Text_Text.Heading, obj2);
    cResult[1] = tmp4.centeredText;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  const centeredText2 = tmp4.centeredText;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1125).intl;
    const stringResult1 = intl2.string(intl4.t.O9SQ1c);
    cResult[3] = stringResult1;
    tmp10 = stringResult1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== tmp4.centeredText) {
    const obj3 = { variant: "text-sm/normal", color: "text-default", style: centeredText2, children: tmp10 };
    const tmp14 = _false(Text_Text.Text, obj3);
    cResult[4] = tmp4.centeredText;
    cResult[5] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === tmp4.textContainer) {
    if (cResult[7] === tmp7) {
      let tmp15;
      let tmp17;
      if (cResult[8] === tmp12) {
        tmp15 = cResult[9];
      }
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = {
          variant: "secondary",
          text: intl3.string(intl4.t["/NKLK5"]),
          onPress() {

                }
        };
        const Button = tmp(5280).Button;
        intl3 = tmp(1125).intl;
        const tmp19 = _false(Button, obj4);
        cResult[10] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[10];
      }
      if (cResult[11] === tmp4.container) {
        let tmp20;
        if (cResult[12] === tmp15) {
          tmp20 = cResult[13];
        }
        return tmp20;
      }
      const obj5 = { style: container, children: items };
      items = [tmp15, tmp17];
      const tmp23 = React3(View, obj5);
      cResult[11] = tmp4.container;
      cResult[12] = tmp15;
      cResult[13] = tmp23;
      tmp20 = tmp23;
    }
  }
  const obj6 = { style: textContainer, children: items1 };
  items1 = [tmp7, tmp12];
  const tmp16 = React3(View, obj6);
  cResult[6] = tmp4.textContainer;
  cResult[7] = tmp7;
  cResult[8] = tmp12;
  cResult[9] = tmp16;
  tmp15 = tmp16;
}) : (function UserProfileWidgetsEmptyState() {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  const tmp = closure_5();
  const obj = { style: tmp.container, children: items1 };
  const obj2 = { style: tmp.textContainer, children: items };
  const obj3 = { variant: "heading-md/semibold", color: "text-strong", style: tmp.centeredText, children: intl.string(intl4.t["oqalC+"]) };
  const Heading = Text_Text.Heading;
  intl = intl4.intl;
  items = [_false(Heading, obj3), ];
  const obj4 = { variant: "text-sm/normal", color: "text-default", style: tmp.centeredText, children: intl2.string(intl4.t.O9SQ1c) };
  const Text = Text_Text.Text;
  intl2 = intl4.intl;
  items[1] = _false(Text, obj4);
  items1 = [React3(View, obj2), ];
  const obj5 = {
    variant: "secondary",
    text: intl3.string(intl4.t["/NKLK5"]),
    onPress() {

    }
  };
  const Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items1[1] = _false(Button, obj5);
  return React3(View, obj);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetsEmptyState.tsx");

export default tmp5;
